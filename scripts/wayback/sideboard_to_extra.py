"""Turn the decklists extracted from Wizards' Sideboard pages into data-src/standard/extra rows.

    python3 -X utf8 scripts/wayback/sideboard_to_extra.py wayback/lists.json [--write] [--only 1999-mmq,2000-inv]

Needs .pipeline/prints.json (fetch_scryfall.py + prints.py). Without --write it prints the rows, the
card names it corrected (check them) and the ones it could not resolve (add them to card_fixes.json;
null means ambiguous: the result is kept without its list). Rows already in an extra file (same event
and player) are not duplicated; a row without a list gets the Sideboard list and source.
Each handler below documents where its event names, places and dates come from.
"""
import html, json, os, re, sys, unicodedata

HERE = os.path.dirname(os.path.abspath(__file__))
REPO = os.path.dirname(os.path.dirname(HERE))
LISTS = sys.argv[1]
WRITE = '--write' in sys.argv
ONLY = sys.argv[sys.argv.index('--only') + 1].split(',') if '--only' in sys.argv else None
pages = json.load(open(LISTS))
prints = json.load(open(os.path.join(REPO, '.pipeline', 'prints.json')))
SEASONS = json.load(open(os.path.join(REPO, 'scripts', 'pipeline', 'seasons.json')))
FIX = json.load(open(os.path.join(HERE, 'card_fixes.json'))) if os.path.exists(os.path.join(HERE, 'card_fixes.json')) else {}


def fold(n):
    return ''.join(c for c in unicodedata.normalize('NFKD', n) if not unicodedata.combining(c)).lower()


import difflib
LOWER = {}
for k in prints:
    LOWER.setdefault(fold(k), k)
    if ' // ' in k:
        LOWER.setdefault(fold(k.replace(' // ', '/')), k)
        LOWER.setdefault(fold(k.split(' // ')[0]), k)
OLD = {}  # punctuation-free key -> name, for cards printed before 2003
for k, v in prints.items():
    if any(p['r'] < '2003-01-01' for p in v['prints']):
        OLD.setdefault(re.sub(r'[^a-z0-9]', '', fold(k)), k)
OLDKEYS = list(OLD)
# half names that only exist as part of a split card ('Fire' -> 'Fire // Ice'; not 'Island' or 'Bind')
FULL = {h: k for k in prints if ' // ' in k for h in k.split(' // ') if ' // ' in prints.get(h, {}).get('info', {}).get('t', '')}
unknown, guessed = {}, {}


def resolve(n):
    for cand in (n, re.sub(r'\s*/+\s*', ' // ', n)):
        if cand in prints:
            return cand
        if fold(cand) in LOWER:
            return LOWER[fold(cand)]
    k = re.sub(r'[^a-z0-9]', '', fold(n))
    for kk in (k, k[:-1] if k.endswith('s') else None, k[:-2] if k.endswith('es') else None):
        if kk and kk in OLD:
            return OLD[kk]
    return None


class Ambiguous(Exception):
    pass


def card(name, where):
    if name in FIX and FIX[name] is None:
        raise Ambiguous(name)
    n = FIX.get(name, name)
    n = re.sub(r'\s+', ' ', n.replace('’', "'").replace('`', "'")).strip().rstrip('.*')
    r = resolve(n)
    if r:
        return FULL.get(r, r)  # 'Fire' -> 'Fire // Ice'
    k = re.sub(r'[^a-z0-9]', '', fold(n))
    m = difflib.get_close_matches(k, OLDKEYS, n=1, cutoff=0.84)
    if m:
        guessed.setdefault(name, OLD[m[0]])
        return OLD[m[0]]
    unknown.setdefault(name, where)
    return n


def season_of(date):
    cur = None
    for s in SEASONS:
        if date >= s[1]:
            cur = s[0]
    return cur


def slug(s):
    return re.sub(r'[^a-z0-9]+', '', fold(s))


def rank_bucket(n):
    n = int(n)
    return '1' if n == 1 else '2' if n == 2 else '3-4' if n <= 4 else '5-8' if n <= 8 else str(n)


def last_name(p):
    parts = [w for w in re.split(r'\s+', p.strip()) if w and not re.fullmatch(r'(jr|sr|ii|iii)\.?,?', w, re.I)]
    return slug(parts[-1] if parts else p)


def title_case(s):
    return ' '.join(w.capitalize() if not w.isupper() or len(w) > 3 else w.capitalize() for w in s.split())


rows = []


def add(page, ev, evslug, date, rank, player, title, b, source=None):
    try:
        main = [[n, card(c, ev)] for n, c in b['main']]
        side = [[n, card(c, ev)] for n, c in b['side']]
    except Ambiguous as e:
        print(f'  ! {ev} {player}: ambiguous card {e}, result kept without its list')
        main, side = [], []
    if main and sum(n for n, _ in main) < 60:
        print(f'  ! {ev} {player}: main deck printed with {sum(n for n, _ in main)} cards, result kept without its list')
        main, side = [], []
    rows.append({'id': f"x-{date[:4]}-{evslug}-{rank.split('-')[0]}-{last_name(player)}", 'event': ev, 'date': date,
                 'rank': rank, 'player': player, 'title': title, 'level': 'star+star+star',
                 'source': source or page['wayback'], **({'main': main, 'side': side} if main else {})})


REGIONS = {'MID-ATLANTIC': 'Mid-Atlantic'}


def regionals_1999(page):
    region = None
    for b in page['blocks']:
        for l in b['header']:
            m = re.fullmatch(r"([A-Z][A-Z \-]+?)(?: \(\d+\))?", l)
            if m and m.group(1) not in ('CREATURES', 'SPELLS', 'LAND', 'LANDS', 'CRAETURES'):
                region = REGIONS.get(m.group(1), title_case(m.group(1).lower()))
        h = next((l for l in b['header'] if re.match(r'^\d\.\s', l)), None)
        m = re.match(r'^(\d)\.\s*(.+?)\s*\((.+)\)\s*$', h or '')
        if not m or not region:
            print('  ? skip block', b['header']); continue
        add(page, f'Regionals 1999 ({region})', f'regionals-{slug(region)}', '1999-05-15', rank_bucket(m.group(1)),
            m.group(2).strip(), m.group(3).strip(), b)


RANKS = [
    (r'semi-?finalist|\b(3rd|3nd|third|4th|fourth)( place)?\b', '3-4'),
    (r'quarter-?finalist|\b(5th|fifth|6th|sixth|7th|seventh|8th|eighth)( place)?\b|\btop 8\b', '5-8'),
    (r'\b(1st|first)( place)?\b|\bchampion\b|\bwinner\b', '1'),
    (r'\b(2nd|second)( place)?\b|runner-?up|\bfinalist\b', '2'),
]
BOILER = re.compile(r'^(main( deck)?|deck|sideboard:?|download.*|home >.*|sideboard staff|printable version)$', re.I)


def rank_of(l):
    for pat, r in RANKS:
        if re.search(pat, l, re.I):
            return r
    return None


def split_deck(s):
    """'Pete Hills - "Nebbish-go"' -> ('Pete Hills', 'Nebbish-go')"""
    m = re.match(r'^(.+?)\s+[-–]\s+"?(.+?)"?\s*$', s)
    return (m.group(1).strip(), m.group(2).strip()) if m else (s.strip(), '')


def generic(event, date, rank_re, evslug=None, player_after=False, ranks=None, skip=(), titles=None):
    """rank_re: regex matched on the header line that gives the place; its named group 'r' (if any)
    fills {r} in `event`. The player is the line before (or after) that line."""
    def run(page):
        seen = set()
        for b in page['blocks']:
            h = [l for l in b['header'] if l and not BOILER.match(l)]
            i = next((j for j in reversed(range(len(h))) if re.search(rank_re, h[j], re.I)), None)
            if i is None:
                print('  ? skip block (no place line)', b['header'][-3:]); continue
            line = h[i]
            m = re.search(rank_re, line, re.I)
            region = (m.groupdict().get('r') or '').strip()
            deck = (m.groupdict().get('d') or '').strip().strip('"')
            raw = (h[i + 1] if i + 1 < len(h) else '') if player_after else (h[i - 1] if i else '')
            PFX = r'^\s*(?:champion|finalist|runner-?up|(?:first|second|third|fourth|fifth|sixth|seventh|eighth|\d\w\w) place)\s*:\s*'
            player = re.sub(PFX, '', raw, flags=re.I)
            player, d2 = split_deck(player.strip().strip('"'))
            player = re.sub(r"\s+'[^']+'\s+", ' ', player)  # nicknames: Margus 'Marx' Liiber
            quoted = next((l.strip('"') for l in h[max(0, i - 2):i] if re.fullmatch(r'".+"', l)), '')
            deck = deck or d2 or quoted
            if titles and player in titles:
                deck = titles[player]
            rank = (ranks or {}).get(player) or rank_of(line) or (rank_of(raw) if re.match(PFX, raw, re.I) else None)
            if not player or not rank or player in skip:
                print('  ? skip block', h[-3:]); continue
            if player in seen:
                print(f'  ! {player}: second list on the page, skipped'); continue
            seen.add(player)
            player = PLAYER_ALIASES.get(player, player)
            ev = event.format(r={'Virgina': 'Virginia'}.get(region, region))
            add(page, ev, evslug or slug_event(ev), date, rank, player, deck, b)
    return run


def slug_event(ev):
    m = re.match(r'^(.*?)\s*(\d{4})\s*(?:\((.+)\))?$', ev)
    kind = {'regionals': 'regionals', 'state championship': 'states'}.get(m.group(1).lower(), slug(m.group(1)))
    return kind + ('-' + slug(m.group(3)) if m.group(3) else '')


def states_2000(page):
    for b in page['blocks']:
        line = next((l for l in b['header'] if re.match(r'^[A-Z][A-Z :.\-]+(\(\d+\))?\s*-\s*\S', l)), None)
        if not line:
            print('  ? skip block', b['header'][-3:]); continue
        m = re.match(r'^([A-Z][A-Z :.\-]+?)\s*(?:\(\d+\))?\s*-\s*(.+)$', line)
        st = title_case(m.group(1).lower()).replace('New Zealand: ', 'New Zealand, ')
        add(page, f'State Championship 2000 ({st})', f'states-{slug(st)}', '2000-11-04', '1', m.group(2).strip(), '', b)


PAGES_DIR = os.path.dirname(os.path.abspath(LISTS))  # fetch_wayback.py's output folder
PIDX = json.load(open(os.path.join(PAGES_DIR, 'index.json')))


def page_text(page):
    v = next(v for v in PIDX.values() if v['original'] == page['url'])
    raw = open(os.path.join(PAGES_DIR, v['file']), 'rb').read()
    try:
        t = raw.decode('utf-8')
    except UnicodeDecodeError:
        t = raw.decode('cp1252', errors='replace')
    t = re.sub(r'(?is)<(script|style)\b.*?</\1>', '', t)
    return ' '.join(html.unescape(re.sub(r'<[^>]+>', ' ', t)).split())


def regionals_2000(page):
    """'Who Qualified for US Nationals?': each region's Top 8 in finishing order, deck types, no lists.
    Its #1s match the winners counted in 'Regionals Decktype Breakdown' (May 2, 2000)."""
    t = page_text(page)
    t = t[t.find('ALASKA'):t.find('qualified for US Nationals on rating')]
    for m in re.finditer(r'([A-Z][A-Z \-]+(?:\([A-Z]+\))?) \(\d+ [Cc]ompetitors\)(.*?)(?=[A-Z][A-Z \-]+(?:\([A-Z]+\))? \(\d+ [Cc]ompetitors\)|$)', t):
        region = title_case(m.group(1).strip().lower()).replace('(germany)', '(Germany)').replace('(japan)', '(Japan)').replace('Mid-atlantic', 'Mid-Atlantic')
        for e in re.finditer(r'(\d)\. (.+?) \(((?:[^()]|\([^)]*\))+)\)', m.group(2)):
            deck = e.group(3).strip()
            if 'not available' in deck:
                continue
            rows.append({'id': f"x-2000-regionals-{slug(region)}-{rank_bucket(e.group(1)).split('-')[0]}-{last_name(e.group(2))}",
                         'event': f'Regionals 2000 ({region})', 'date': '2000-04-29', 'rank': rank_bucket(e.group(1)),
                         'player': e.group(2).strip(), 'title': deck, 'level': 'star+star+star', 'source': page['wayback'],
                         '_rank_wins': True})


def korea_2001(page):
    t = page_text(page)
    t = t[t.find('Top 8 Final Standings'):]
    for e in re.finditer(r'(\d)\. (.+?) w/\s*(.+?)(?:-\$\d+)?(?= \d\. | Complete|$)', t[:600]):
        rows.append({'id': f"x-2001-nationalssouthkorea-{rank_bucket(e.group(1)).split('-')[0]}-{last_name(e.group(2))}",
                     'event': 'Nationals - South Korea 2001', 'date': '2001-05-01', 'rank': rank_bucket(e.group(1)),
                     'player': e.group(2).strip(), 'title': e.group(3).strip(), 'level': 'star+star+star', 'source': page['wayback']})


def states_1999(page):
    """decks/states99.asp: winners' lists, three per table row under a row of three state names."""
    states = []
    for b in page['blocks']:
        h = [l for l in b['header'] if l and not l.startswith('1999 STATE') and not re.match(r'^(CREATURES|CRAETURES)', l)]
        states += [l for l in h if re.fullmatch(r"[A-Z][A-Z .']+", l)]
        names = [l for l in h if not re.fullmatch(r"[A-Z][A-Z .']+", l)]
        if not states:
            print('  ? skip block', b['header'][-3:]); continue
        st = title_case(states.pop(0).lower())
        if not names:  # printed without the player's name: the state is consumed, the list skipped
            print(f'  ? skip block ({st}: no player name)'); continue
        add(page, f'State Championship 1999 ({st})', f'states-{slug(st)}', '1999-11-01', '1', names[-1], '', b)


def amateur_2001(page):
    # 2001 Amateur Championship at Origins; final standings from the event page
    order = ['Tim Bonneville', 'Brad Cole', 'Carl Winter', 'Steve Landen', 'David Pan', 'Dan Rodemann', 'Tom Willoughby', 'Chad Caudell']
    for b in page['blocks']:
        h = [l for l in b['header'] if l and not BOILER.match(l)]
        h = [{'Daniel Rodemann': 'Dan Rodemann'}.get(l, l) for l in h]
        who = next((l for l in reversed(h) if l in order), None)
        if not who:
            print('  ? skip block', h[-3:]); continue
        i = h.index(who)
        deck = h[i + 1] if i + 1 < len(h) else ''
        add(page, 'Amateur Championship 2001', 'amateurchampionship', '2001-07-01', rank_bucket(order.index(who) + 1), who, deck, b)


def ausnat_2000(page):
    # Australian Nationals 2000, Canberra, June 10-12 (Standard from Sunday June 11); places from the
    # coverage's playoff bracket and mtg.wiki's National Championships table
    ranks = {'Stephen Campbell': '1', 'Kim Brebach': '2', 'T. Ben Seck': '3-4', 'Craig Hong': '3-4'}
    for b in page['blocks']:
        line = next((l for l in reversed(b['header']) if re.match(r'^[A-Z][\w. ]+ - .+$', l)), None)
        if not line:
            print('  ? skip block', b['header'][-3:]); continue
        player, deck = split_deck(line)
        add(page, 'Nationals - Australia 2000', 'nationalsaustralia', '2000-06-11', ranks.get(player, '5-8'),
            player.replace('T. Ben Seck', 'Ben Seck'), deck, b)


PLAYER_ALIASES = {'Rick Ralsien': 'Rick Ralsten'}
PLACE = r'(?:\d(?:st|nd|rd|th) place|top 8|semi-?finalist|quarter-?finalist|finalist|champion)'
HANDLERS = {
    'sideboard/decks/usregionals.asp': regionals_1999,
    'sb20000508a': regionals_2000,
    'sideboard/decks/states99.asp': states_1999,
    '850top8decks': amateur_2001,
    'ausnat00/941standarddecks': ausnat_2000,
    'sb20010509a': korea_2001,
    # Swedish Nationals 2001: places from the judge report's standings and playoff bracket
    'sideboard/article.asp?x=sb20010608a': generic('Nationals - Sweden 2001', '2001-06-01', r'^"(?P<d>[^"]+)"$', player_after=True, ranks={
        'Johan Johannesson': '1', 'Jimmy Öman': '2', 'Tomas Rosholm': '3-4', 'Staffan Enberg': '3-4', 'Fredrik Thorstensson': '5-8',
        'Poya Nobari': '5-8', 'Patrik Häggström': '5-8', 'Martin Berlin': '5-8'}),
    # State Championships, Nov 10, 2001 ("this weekend's Championships", article of Nov 14)
    'sideboard/article.asp?x=sb20011114a': generic('State Championship 2001 ({r})', '2001-11-10',
                                                   r'^(?:champion|winner|finalist|semi-?finalist|quarter-?finalist)\s*(?:of\s*)?(?P<r>.+)$'),
    'sideboard/article.asp?x=sb20001106b': states_2000,
    # US Regionals, Saturday April 21, 2001 ("11th Hour Regionals Tech" on Apr 20, lists from Apr 26)
    'sideboard/article.asp?x=sb20010430a': generic('Regionals 2001 ({r})', '2001-04-21', r'US Regionals - (?P<r>.+?) ' + PLACE),
    'sideboard/article.asp?x=sb20010426a': generic('Regionals 2001 ({r})', '2001-04-21', r'US Regionals - (?P<r>.+?) ' + PLACE),
    # Australian / New Zealand Regionals, results published April 9-18, 2001 (exact days not given)
    'sideboard/article.asp?x=sb20010418a': generic('Regionals 2001 ({r}, Australia)', '2001-04-01', r'Australian Regionals - (?P<r>.+?) ' + PLACE),
    'sideboard/article.asp?x=sb20010411b': generic('Regionals 2001 ({r}, Australia)', '2001-04-01', r'Australian Regionals - (?P<r>.+?) ' + PLACE),
    'sideboard/article.asp?x=sb20010410b': generic('Regionals 2001 ({r}, Australia)', '2001-04-01', r'Australian Regionals - (?P<r>.+?) ' + PLACE),
    'sideboard/article.asp?x=sb20010409b': generic('Regionals 2001 ({r}, New Zealand)', '2001-04-01', r'New Zealand Regionals - (?P<r>.+?) ' + PLACE),
    # Nationals 2001 (exact days not given: month of the report)
    'sideboard/article.asp?x=sb20010620a': generic('Nationals - Estonia 2001', '2001-06-01', r'Estonian Nationals'),
    'sideboard/article.asp?x=sb20010605b': generic('Nationals - Portugal 2001', '2001-06-01', r'2001 Portugal National Championship',
                                                   ranks={'Pedro Bailadeira': '5-8', 'Gonçalo Nunes': '5-8', 'Renato Graça': '5-8'},
                                                   skip=('Frederico Bastos',)),
    'sideboard/article.asp?x=sb20010524a': generic('Nationals - Malaysia 2001', '2001-05-01', r'2001 Malaysian National'),
}
# US Regionals 2002: Saturday April 13, 2002 (SCG: preview of April 8, Northwest report of April 18);
# Canadian Regionals 2002 published on the same Sideboard page, day not given
for code in ['a', 'f', 'h', 'ma', 'mw', 'm', 'nen', 'ne', 'nc', 'nw', 'ov', 'p', 's', 'se', 'sw']:
    HANDLERS[f'x=sideboard/info/2002regionals-{code}'] = generic(
        'Regionals 2002 ({r})', '2002-04-13', r'2002 (?P<r>.+?) Regionals,? (?:\d(?:st|nd|rd|th) Place|Top 8):?\s*(?P<d>.*)$', player_after=True)
for code in ['cc', 'ccm', 'ccp', 'cep', 'cp', 'cq', 'csm', 'cwp']:
    HANDLERS[f'x=sideboard/info/2002regionals-{code}'] = generic(
        'Regionals 2002 ({r}, Canada)', '2002-04-01', r'2002 (?P<r>.+?) Regionals,? (?:\d(?:st|nd|rd|th) Place|Top 8):?\s*(?P<d>.*)$', player_after=True)

for p in pages:
    u = p['url'].lower()
    for k, h in HANDLERS.items():
        if u.endswith(k):
            print(f'== {p["url"]} ({len(p["blocks"])} lists)')
            h(p)

# lists printed without a deck name: a neutral grouping title from the main deck's colours
# (cards with at least two copies); the editorial attaches them to archetypes with `include`
for r in rows:
    if r['title'] or not r.get('main'):
        continue
    seen_c = {}
    for n, c in r['main']:
        info = prints.get(c, {}).get('info', {})
        if 'Land' in info.get('t', ''):
            continue
        for k in info.get('k', ''):
            seen_c[k] = seen_c.get(k, 0) + n
    r['title'] = 'Unnamed ' + (''.join(k for k in 'WUBRG' if seen_c.get(k, 0) >= 2) or 'C')

rows = [r for r in rows if r.get('main') or r['title']]  # a bare finish says nothing about a deck

# merge with existing extra files: same event + player -> keep the existing id, add the list
by_season = {}
for r in rows:
    by_season.setdefault(season_of(r['date']), []).append(r)
for sid, rs in sorted(by_season.items()):
    path = os.path.join(REPO, 'data-src', 'standard', 'extra', f'{sid}.json')
    cur = json.load(open(path, encoding='utf-8')) if os.path.exists(path) else []
    key = lambda x: (slug(x['event']), last_name(x['player']))
    have = {key(x): x for x in cur}
    ids = {x['id'] for x in cur}
    added = updated = same = 0
    for r in rs:
        old = have.get(key(r))
        wins = r.pop('_rank_wins', None)
        if old and wins and old['rank'] != r['rank']:
            print(f"   rank of {old['id']} set to {r['rank']} (was {old['rank']}) from {r['source']}")
            old['rank'] = r['rank']
        if old:
            if not old.get('main') and r.get('main'):
                old.update({k: r[k] for k in ('main', 'side', 'source')})
                if not old.get('title') and r['title']:
                    old['title'] = r['title']
                updated += 1
            else:
                same += 1
            continue
        while r['id'] in ids:
            r['id'] += 'b'
        ids.add(r['id'])
        cur.append(r)
        have[key(r)] = r
        added += 1
    for x in cur:  # State Championships 2001 were all held on November 10, 2001
        if x['event'].startswith('State Championship 2001 ('):
            x['date'] = '2001-11-10'
    print(f'{sid}: +{added} new, {updated} lists added to existing rows, {same} already with a list')
    for r in rs[:3]:
        print('   ', json.dumps({k: r[k] for k in ('id', 'event', 'rank', 'player', 'title')}, ensure_ascii=False))
    if WRITE and (not ONLY or sid in ONLY):
        with open(path, 'w', encoding='utf-8') as f:
            f.write('[\n' + ',\n'.join(json.dumps(x, ensure_ascii=False) for x in cur) + '\n]\n')
print('guessed (check):', json.dumps(guessed, ensure_ascii=False, indent=0))
print('unknown cards:', json.dumps(unknown, ensure_ascii=False, indent=0))
untitled = [r['id'] for r in rows if not r['title']]
print(len(rows), 'rows,', len(untitled), 'without a published deck name')

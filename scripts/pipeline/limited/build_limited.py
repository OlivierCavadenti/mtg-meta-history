"""Builds src/data/limited/ from data-src/limited/stats/*.json (17Lands public data, seventeen.py)
and data-src/limited/editorial/*.json.

Limited: one season per set (its Premier Draft on MTG Arena), one deck per color combination.
Sets before 17Lands' public data (seasons.limited-history.json, Innistrad 2011 to Zendikar Rising
2020) carry design archetypes only: editorial entries with sources, no decklist and no numbers.
Usage: python3 scripts/pipeline/limited/build_limited.py [--check] [SET ...]
  --check: validate only, write nothing; SET codes limit the report to those sets.
"""
import json, os, re, sys, unicodedata

HERE = os.path.dirname(os.path.abspath(__file__))
REPO = os.path.dirname(os.path.dirname(os.path.dirname(HERE)))
SRC = os.path.join(REPO, 'data-src', 'limited')
OUT = os.path.join(REPO, 'src', 'data', 'limited')
PRINTS = os.environ.get('MTG_PRINTS', os.path.join(REPO, '.pipeline', 'prints.json'))
SETS = json.load(open(os.path.join(os.path.dirname(HERE), 'seasons.limited.json')))
HISTORY = json.load(open(os.path.join(os.path.dirname(HERE), 'seasons.limited-history.json')))
ORDER = 'WUBRG'
ARCH = {'aggro', 'midrange', 'control', 'combo', 'tempo', 'ramp'}
BASICS = {'Plains', 'Island', 'Swamp', 'Mountain', 'Forest', 'Wastes'}
# slug of a color combination: one archetype history per guild / shard / wedge across sets
SLUGS = {
    'W': 'mono-white', 'U': 'mono-blue', 'B': 'mono-black', 'R': 'mono-red', 'G': 'mono-green',
    'WU': 'azorius', 'UB': 'dimir', 'BR': 'rakdos', 'RG': 'gruul', 'WG': 'selesnya',
    'WB': 'orzhov', 'UR': 'izzet', 'BG': 'golgari', 'WR': 'boros', 'UG': 'simic',
    'WUB': 'esper', 'UBR': 'grixis', 'BRG': 'jund', 'WRG': 'naya', 'WUG': 'bant',
    'WBG': 'abzan', 'WUR': 'jeskai', 'UBG': 'sultai', 'WBR': 'mardu', 'URG': 'temur',
    'UBRG': 'four-color-non-white', 'WBRG': 'four-color-non-blue', 'WURG': 'four-color-non-black',
    'WUBG': 'four-color-non-red', 'WUBR': 'four-color-non-green', 'WUBRG': 'five-color',
}
COLOR_PAGE = 'https://www.17lands.com/color_ratings?expansion={}&event_type=PremierDraft&combine_splash=true'

check_only = '--check' in sys.argv
only = {a.lower() for a in sys.argv[1:] if not a.startswith('--')}
prints = json.load(open(PRINTS))


def fold(n):
    return ''.join(c for c in unicodedata.normalize('NFKD', n) if not unicodedata.combining(c)).lower()


folded = {}
ascii_q = {}
for k in prints:
    folded.setdefault(fold(k), k)
    ascii_q.setdefault(k.encode('ascii', 'replace').decode(), k)


def canon(name):
    """17Lands spelling -> Scryfall name (17Lands writes some accented letters as '?')."""
    for cand in (name, re.sub(r'\s*/+\s*', ' // ', name)):
        if cand in prints:
            return cand
        if fold(cand) in folded:
            return folded[fold(cand)]
        if cand in ascii_q:
            return ascii_q[cand]
    return name


def kind(tl):
    t = tl.lower().split('//')[0]
    for k in ['land', 'creature', 'planeswalker', 'battle', 'instant', 'sorcery', 'artifact', 'enchantment']:
        if k in t:
            return k
    return 'other'


BAD_FE = {'showcase', 'extendedart', 'inverted', 'etched', 'fullart'}


def regular(p):
    return not (p['dig'] or not p['paper'] or p['tb'] or p['fa'] or p['var'] or p['promo']
                or p['bd'] in ('borderless', 'gold', 'silver') or set(p['fe']) & BAD_FE)


def pick(ps, code, end):
    """The card's printing in the set being drafted; else (bonus sheets, special guests) the newest
    regular printing released before the set's season ends."""
    own = [p for p in ps if p['s'] == code and regular(p)] or [p for p in ps if p['s'] == code]
    if own:
        return min(own, key=lambda p: p['r'])
    for ok in (lambda p: regular(p) and not p.get('ub'), regular, lambda p: True):
        c = [p for p in ps if ok(p) and p['r'] < end]
        if c:
            return max(c, key=lambda p: p['r'])
    return min(ps, key=lambda p: p['r'])


stats = {}
for code, _, _ in SETS:
    p = os.path.join(SRC, 'stats', f'{code}.json')
    if os.path.exists(p):
        stats[code] = json.load(open(p))
# a set's season runs from its first draft on 17Lands to the next set's first draft
codes = [c for c, _, _ in SETS if c in stats]
hist_codes = [c for c, _, _ in HISTORY if os.path.exists(os.path.join(SRC, 'editorial', f'{c}.json'))]
names = {c: n for c, _, n in SETS + HISTORY}
start = {c: stats[c]['first'] for c in codes}
start.update({c: r for c, r, _ in HISTORY})
ordered = hist_codes + codes
end = {c: (start[ordered[i + 1]] if i + 1 < len(ordered) else '2099-01-01') for i, c in enumerate(ordered)}

errors = []
seasons = []
card_seasons = {}
missing = set()
os.makedirs(os.path.join(OUT, 'decks'), exist_ok=True)
# design archetypes of the sets before 17Lands' public data: sourced texts, key cards, no list
for code in hist_codes:
    ed = json.load(open(os.path.join(SRC, 'editorial', f'{code}.json')))
    decks = []
    seen = set()
    for e in ed:
        colors = e.get('colors', '')
        where = f'{code}/{colors}'
        if colors not in SLUGS or colors in seen:
            errors.append(f'{where}: bad or duplicate colors')
            continue
        seen.add(colors)
        for k in ['name', 'archetype', 'summary', 'why', 'keyCards', 'cover', 'sources']:
            if k not in e:
                errors.append(f'{where}: missing {k}')
        if e.get('archetype') not in ARCH:
            errors.append(f'{where}: bad archetype {e.get("archetype")!r}')
        srcs = e.get('sources', [])
        if not srcs or not all(isinstance(u, str) and u.startswith('https://') for u in srcs):
            errors.append(f'{where}: sources must be a non-empty list of https URLs')
        key = [canon(k) for k in e.get('keyCards', [])]
        cover = canon(e.get('cover', ''))
        for k in key + [cover]:
            pr = prints.get(k)
            if not pr:
                errors.append(f'{where}: unknown card {k!r}')
            elif not any(q['r'] <= end[code] and q['r'] >= '2011-01-01' and q['s'] == code for q in pr['prints']) \
                    and not any(q['r'] < end[code] for q in pr['prints'] if q['st'] in ('expansion', 'core')):
                errors.append(f'{where}: {k!r} not printed by the end of this set')
        if cover in prints and kind(prints[cover]['info']['t']) == 'land':
            errors.append(f'{where}: cover must be a nonland card')
        if not 3 <= len(key) <= 6:
            errors.append(f'{where}: keyCards should be 3-6')
        if e.get('tier', 2) not in (1, 2, 3):
            errors.append(f'{where}: tier must be 1, 2 or 3')
        for lang in ['fr', 'en']:
            s = e.get('summary', {}).get(lang, '')
            if not 40 <= len(s) <= 260:
                errors.append(f'{where}: summary.{lang} length {len(s)} (40-260)')
            w = e.get('why', {}).get(lang, [])
            if not 2 <= len(w) <= 3:
                errors.append(f'{where}: why.{lang} needs 2-3 bullets')
            for b in w:
                if len(b) > 110:
                    errors.append(f'{where}: why.{lang} bullet too long ({len(b)})')
                if re.search(r'\d+ ?%', b):
                    errors.append(f'{where}: no percentages in texts')
        for name in key + [cover]:
            if name in prints:
                card_seasons.setdefault(name, []).append(code)
        decks.append({
            'id': f'{SLUGS.get(colors, colors.lower())}-{code}', 'name': e.get('name', ''), 'season': code,
            'archetype': e.get('archetype', 'midrange'), 'colors': colors, 'tier': e.get('tier', 2),
            'first': start[code], 'last': start[code],
            'stats': {'results': 0, 'top8': 0, 'wins': 0, 'share': 0},
            'summary': e.get('summary', {}), 'why': e.get('why', {}), 'keyCards': key, 'cover': cover,
            'sources': srcs,
            'list': {'main': [], 'side': [], 'player': '', 'event': '', 'rank': '', 'date': start[code], 'url': srcs[0] if srcs else ''},
        })
    decks.sort(key=lambda d: (d['tier'], d['name']))
    if not check_only:
        json.dump({'season': code, 'decks': decks}, open(os.path.join(OUT, 'decks', f'{code}.json'), 'w'),
                  ensure_ascii=False, separators=(',', ':'))
    seasons.append({'id': code, 'start': start[code], 'set': names[code], 'code': code.upper(), 'bans': []})
    print(code, len(decks), 'design archetypes')

for code in codes:
    st = stats[code]
    ep = os.path.join(SRC, 'editorial', f'{code}.json')
    ed = {e['colors']: e for e in json.load(open(ep))} if os.path.exists(ep) else {}
    if not ed:
        errors.append(f'{code}: no editorial file')
    combos = {c['colors']: c for c in st['combos']}
    for colors in ed:
        if colors not in combos:
            errors.append(f'{code}/{colors}: editorial entry for a combination not in the stats')
    kept = [c for c in st['combos'] if c['colors'] in ed and c['rep']]
    for c in st['combos']:
        if c['colors'] not in ed:
            errors.append(f'{code}/{c["colors"]}: no editorial entry ({c["share"]} % of games)')
        elif not c['rep']:
            errors.append(f'{code}/{c["colors"]}: no 7-win deck in the data, left out')
    # tiers: the two best win rates among combinations with 3%+ of games, then above the set average
    ranked = sorted((c for c in kept if c['share'] >= 3), key=lambda c: -c['winRate'])
    top = {c['colors'] for c in ranked[:2]}
    decks = []
    for c in kept:
        e = ed[c['colors']]
        where = f'{code}/{c["colors"]}'
        main = [[n, canon(name)] for n, name in c['rep']['main']]
        side = [[n, canon(name)] for n, name in c['rep']['side']]
        in_list = {name for _, name in main}
        for k in ['name', 'archetype', 'summary', 'why', 'keyCards', 'cover']:
            if k not in e:
                errors.append(f'{where}: missing {k}')
        if e.get('archetype') not in ARCH:
            errors.append(f'{where}: bad archetype {e.get("archetype")!r}')
        key = [canon(k) for k in e.get('keyCards', [])]
        cover = canon(e.get('cover', ''))
        for k in key + [cover]:
            if k not in in_list:
                errors.append(f'{where}: {k!r} not in the 7-win deck')
        if cover in BASICS or (prints.get(cover) and kind(prints[cover]['info']['t']) == 'land'):
            errors.append(f'{where}: cover must be a nonland card')
        if not 3 <= len(key) <= 6:
            errors.append(f'{where}: keyCards should be 3-6')
        for lang in ['fr', 'en']:
            s = e.get('summary', {}).get(lang, '')
            if not 40 <= len(s) <= 260:
                errors.append(f'{where}: summary.{lang} length {len(s)} (40-260)')
            w = e.get('why', {}).get(lang, [])
            if not 2 <= len(w) <= 3:
                errors.append(f'{where}: why.{lang} needs 2-3 bullets')
            for b in w:
                if len(b) > 110:
                    errors.append(f'{where}: why.{lang} bullet too long ({len(b)})')
        for _, name in main + side:
            if name not in prints:
                missing.add(name)
            card_seasons.setdefault(name, []).append(code)
        tier = 1 if c['colors'] in top else 2 if c['winRate'] >= st['winRate'] else 3
        decks.append({
            'id': f'{SLUGS[c["colors"]]}-{code}', 'name': e.get('name', ''), 'season': code,
            'archetype': e.get('archetype', 'midrange'), 'colors': c['colors'], 'tier': tier,
            'first': st['first'], 'last': st['last'],
            'stats': {'results': c['drafts'], 'top8': 0, 'wins': 0, 'share': round(c['share'], 1)},
            'limited': {'games': c['games'], 'winRate': round(c['winRate'], 1), 'drafts': c['drafts'],
                        'trophies': c['trophies'], 'setWinRate': round(st['winRate'], 1)},
            'summary': e.get('summary', {}), 'why': e.get('why', {}), 'keyCards': key, 'cover': cover,
            'list': {'main': main, 'side': side, 'player': '', 'event': 'Premier Draft', 'rank': c['rep']['record'],
                     'date': c['rep']['date'], 'url': COLOR_PAGE.format(code.upper())},
        })
    decks.sort(key=lambda d: (d['tier'], -d['limited']['winRate']))
    if not check_only:
        json.dump({'season': code, 'decks': decks}, open(os.path.join(OUT, 'decks', f'{code}.json'), 'w'),
                  ensure_ascii=False, separators=(',', ':'))
    seasons.append({'id': code, 'start': start[code], 'set': names[code], 'code': code.upper(), 'bans': [],
                    'source': {'games': st['games'], 'drafts': st['drafts'], 'winRate': round(st['winRate'], 1),
                               'url': COLOR_PAGE.format(code.upper())}})
    print(code, len(decks), 'decks', len(ed), 'editorial entries')

cards = {}
for name, cs in card_seasons.items():
    pr = prints.get(name)
    if not pr:
        continue
    info = pr['info']
    first = cs[0]
    p = pick(pr['prints'], first, end[first])
    cards[name] = {'m': info['m'], 'c': info['c'], 't': kind(info['t']),
                   'k': ''.join(c for c in ORDER if c in (info['k'] or '')), 'i': p['id']}
    eras = {}
    for other in sorted(set(cs)):
        q = pick(pr['prints'], other, end[other])
        if q['id'] != p['id']:
            eras[other] = q['id']
    if eras:
        cards[name]['e'] = eras
    newest = [q for q in pr['prints'] if regular(q) and not q.get('ub')]
    if newest:
        n = max(newest, key=lambda q: q['r'])['id']
        if n != p['id']:
            cards[name]['n'] = n
if not check_only:
    json.dump(dict(sorted(cards.items())), open(os.path.join(OUT, 'cards.json'), 'w'), ensure_ascii=False, separators=(',', ':'))
    json.dump(seasons, open(os.path.join(OUT, 'seasons.json'), 'w'), ensure_ascii=False, indent=1)
print('cards', len(cards), 'missing', sorted(missing))
if only:
    errors = [e for e in errors if e.split('/')[0].split(':')[0] in only]
print(len(errors), 'error(s)')
for e in errors:
    print(' -', e)
sys.exit(1 if errors and check_only else 0)

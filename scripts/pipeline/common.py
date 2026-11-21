"""Shared helpers for the data pipeline. Python 3 stdlib only."""
import json, re, os, time, urllib.request, collections

HERE = os.path.dirname(os.path.abspath(__file__))
REPO = os.path.dirname(os.path.dirname(HERE))
# Format: MTG_FORMAT=standard (default) | pioneer | modern | legacy | vintage | pauper | premodern. Each format has its own work dir, editorial
# layer, extra results, date fixes, seasons file and output folder.
FORMAT = os.environ.get('MTG_FORMAT', 'standard')
FORMAT_CODE = {'standard': 'ST', 'modern': 'MO', 'pioneer': 'PI', 'legacy': 'LE', 'vintage': 'VI', 'pauper': 'PAU', 'premodern': 'PREM'}[FORMAT]
WORK = os.environ.get('MTG_PIPELINE_WORK', os.path.join(REPO, '.pipeline', FORMAT))
SRC = os.path.join(REPO, 'data-src', FORMAT)
EDITORIAL = os.environ.get('MTG_EDITORIAL', os.path.join(SRC, 'editorial'))
OUT_DIR = os.path.join(REPO, 'src', 'data', FORMAT)
# Scraped mtgtop8 results, committed so a fresh checkout can rebuild and refresh incrementally
RESULTS = os.path.join(SRC, 'results.json')
# Scryfall printings index and bulk file are shared by every format (fetch_scryfall.py, prints.py)
PRINTS = os.environ.get('MTG_PRINTS', os.path.join(REPO, '.pipeline', 'prints.json'))
SCRYFALL_BULK = os.path.join(os.path.dirname(PRINTS), 'default.jsonl.gz')
# Years where Competitive-level events are scraped too, because Professional + Major coverage is
# thin (MTG_COMPETITIVE_YEARS=2011,2012 overrides). Standard: every year up to 2004.
COMPETITIVE_YEARS = {
    'modern': {2011, 2012, 2013, 2020, 2021},
    'premodern': {2020, 2021, 2022, 2023, 2024},
    'pioneer': {2019, 2020, 2021, 2025, 2026},
    'legacy': set(range(2004, 2011)),
    'vintage': set(range(2003, 2027)),
    'pauper': set(range(2016, 2021)),
}.get(FORMAT, set())
if os.environ.get('MTG_COMPETITIVE_YEARS'):
    COMPETITIVE_YEARS = {int(v) for v in os.environ['MTG_COMPETITIVE_YEARS'].split(',') if v}
UA = {'User-Agent': 'Mozilla/5.0 (mtg-meta-history archive script)'}
TOP8 = {'1', '2', '3', '4', '3-4', '5', '6', '7', '8', '5-8'}
SEASONS = json.load(open(os.path.join(HERE, 'seasons.json' if FORMAT == 'standard' else f'seasons.{FORMAT}.json')))
os.makedirs(WORK, exist_ok=True)
_rows = None


def work(*p):
    return os.path.join(WORK, *p)


def iso(dt):
    dd, mm, yy = dt.split('/')
    y = int(yy)
    y = 1900 + y if y > 80 else 2000 + y
    return f'{y}-{mm}-{dd}'


def season_of(date):
    cur = None
    for s in SEASONS:
        if date >= s[1]:
            cur = s[0]
    return cur


def rank_key(r):
    m = re.match(r'(\d+)', r.strip())
    return int(m.group(1)) if m else 99


EXTRA = os.path.join(SRC, 'extra')
_extra_lists = {}


def load_extra():
    """Hand-collected results from period sources (data-src/standard/extra/*.json).

    Each file is a JSON array of results:
      {"id": "x-<slug>", "event": "...", "date": "YYYY-MM-DD", "rank": "1" | "2" | "3-4" | "5-8" | "",
       "player": "...", "title": "<deck name as published>", "level": "bigstar" | "star+star+star",
       "source": "<URL of the page publishing the list>", "main": [[4, "Card"], ...], "side": [...]}
    "main"/"side" may be omitted when the source gives the result but not the list: the row then
    counts in the stats but can never be a representative list.
    """
    out = []
    if not os.path.isdir(EXTRA):
        return out
    for f in sorted(os.listdir(EXTRA)):
        if not f.endswith('.json'):
            continue
        for x in json.load(open(os.path.join(EXTRA, f))):
            if x.get('main'):
                _extra_lists[x['id']] = (x['main'], x.get('side', []))
            out.append({'e': 'x:' + x['event'], 'd': x['id'], 'name': x['title'], 'player': x.get('player', ''),
                        'event': x['event'], 'level': x.get('level', 'bigstar'), 'rank': x.get('rank', ''),
                        'date': '', 'iso': x['date'], 'source': x['source'], 'has_list': bool(x.get('main'))})
    return out


DATE_FIXES = os.path.join(SRC, 'date-fixes.json')
_date_fixes = json.load(open(DATE_FIXES)) if os.path.exists(DATE_FIXES) else {}


def _fix_date(r):
    """mtgtop8 occasionally stores an old event under a recent date (e.g. 'Nationals - New Zealand
    2002' dated 2022): trust the year in the event name when it is far from the stored year."""
    fix = _date_fixes.get(str(r['e']))
    if fix and fix.get('date'):
        r['iso'] = fix['date']
        return
    m = re.search(r'\b(199\d|20[0-2]\d)\b', r['event'])
    if m and abs(int(m.group(1)) - int(r['iso'][:4])) > 1:
        r['iso'] = m.group(1) + r['iso'][4:]


def _pseudo_ranked(rs, name):
    """Decklist dumps (league weekends, Arena 7-win lists, Worlds standings, '15 points' pages)
    give many players the same rank: those ranks are not finishes."""
    c = collections.Counter(r['rank'] for r in rs)
    if 'world magic cup' in name.lower() and c['1'] == 3:
        return False  # team event: the three members of the winning team
    return c['1'] > 1 or c['2'] > 3


def load_results():
    return json.load(open(RESULTS)) if os.path.exists(RESULTS) else {}


def save_results(d):
    """One result per line, years in order: weekly refreshes give small, readable diffs."""
    os.makedirs(os.path.dirname(RESULTS), exist_ok=True)
    with open(RESULTS, 'w') as f:
        f.write('{\n')
        years = sorted(d)
        for i, y in enumerate(years):
            f.write(f'{json.dumps(y)}: [\n')
            f.write(',\n'.join(json.dumps(r, ensure_ascii=False, sort_keys=True) for r in d[y]))
            f.write('\n]' + (',' if i < len(years) - 1 else '') + '\n')
        f.write('}\n')


def rows():
    global _rows
    if _rows is None:
        d = load_results()
        out = []
        for rs in d.values():
            for r in rs:
                if not r['date']:
                    continue
                if _date_fixes.get(str(r['e']), {}).get('drop'):
                    continue  # event excluded on purpose (see date-fixes.json)
                r['iso'] = iso(r['date'])
                _fix_date(r)
                r['has_list'] = True
                out.append(r)
        out += load_extra()
        by_event = collections.defaultdict(list)
        for r in out:
            by_event[r['e']].append(r)
        for rs in by_event.values():
            if _pseudo_ranked(rs, rs[0]['event']):
                for r in rs:
                    r['rank_raw'], r['rank'] = r['rank'], ''
            for r in rs:
                r['evsize'] = len(rs)
        for r in out:
            r['season'] = season_of(r['iso'])
        _rows = out
    return _rows


def season_rows(sid):
    return [r for r in rows() if r['season'] == sid]


def best_key(r):
    return (rank_key(r['rank']), 0 if r['level'] == 'bigstar' else 1, -r['evsize'], r['iso'])


def merged(sid, titles, include=(), exclude=()):
    """Results of the given titles in a season, best first. Rows without a list sort last.

    include: extra deck ids (results filed under another title); exclude: deck ids to drop.
    """
    ts = set(titles)
    inc = {str(i) for i in include}
    exc = {str(i) for i in exclude}
    rs = [r for r in season_rows(sid) if (r['name'] in ts or str(r['d']) in inc) and str(r['d']) not in exc]
    rs.sort(key=lambda r: (not r['has_list'],) + best_key(r))
    return rs


def deck_rows(sid, decks, deck):
    """Rows of one editorial deck: its titles and includes, minus its excludes and minus the
    results another deck of the season claims through its own `include`."""
    claimed = {str(i) for d in decks if d is not deck for i in d.get('include', [])}
    return merged(sid, deck.get('titles', []), deck.get('include', []), set(map(str, deck.get('exclude', []))) | claimed)


def deck_url(r):
    if r.get('source'):
        return r['source']
    return f"https://www.mtgtop8.com/event?e={r['e']}&d={r['d']}&f={FORMAT_CODE}"


_published = None


def published_lists():
    """Decklists already in the generated site data, by mtgtop8 deck id: a fresh checkout rebuilds
    without downloading again every list it already shows."""
    global _published
    if _published is None:
        _published = {}
        folder = os.path.join(OUT_DIR, 'decks')
        for f in sorted(os.listdir(folder)) if os.path.isdir(folder) else []:
            for d in json.load(open(os.path.join(folder, f)))['decks']:
                m = re.search(r'mtgtop8\.com/event\?e=\d+&d=(\d+)', d['list'].get('url', ''))
                if m:
                    _published[m.group(1)] = (d['list']['main'], d['list']['side'])
        # every other list of the deck pages' "All decklists" tab (build.py, lists/{season}.json)
        folder = os.path.join(OUT_DIR, 'lists')
        for f in sorted(os.listdir(folder)) if os.path.isdir(folder) else []:
            data = json.load(open(os.path.join(folder, f), encoding='utf-8'))
            names = data['names']
            for key, (main, side) in data['lists'].items():
                if key.isdigit() and key not in _published:
                    _published[key] = tuple([[flat[i], names[flat[i + 1]]] for i in range(0, len(flat), 2)] for flat in (main, side))
    return _published


def has_list(deck_id):
    """True when the list of this result is available without downloading it."""
    if isinstance(deck_id, str) and deck_id.startswith('x-'):
        if not _extra_lists:
            load_extra()
        return deck_id in _extra_lists
    return os.path.exists(work('lists', f'{deck_id}.txt')) or str(deck_id) in published_lists()


def get_list(deck_id):
    if isinstance(deck_id, str) and deck_id.startswith('x-'):
        if not _extra_lists:
            load_extra()
        return _extra_lists.get(deck_id, ([], []))
    os.makedirs(work('lists'), exist_ok=True)
    p = work('lists', f'{deck_id}.txt')
    if not os.path.exists(p) and str(deck_id) in published_lists():
        main, side = published_lists()[str(deck_id)]
        return [list(x) for x in main], [list(x) for x in side]
    if not os.path.exists(p):
        req = urllib.request.Request(f'https://www.mtgtop8.com/mtgo?d={deck_id}', headers=UA)
        for a in range(4):
            try:
                open(p, 'w').write(urllib.request.urlopen(req, timeout=40).read().decode('latin-1'))
                break
            except Exception:
                time.sleep(2 * (a + 1))
        time.sleep(0.3)
    main, side = [], []
    cur = main
    for line in open(p).read().splitlines():
        line = line.strip()
        if not line:
            continue
        if line.lower().startswith('sideboard'):
            cur = side
            continue
        m = re.match(r'(\d+)\s+(.+)', line)
        if m:
            cur.append([int(m.group(1)), m.group(2).strip()])
    return main, side

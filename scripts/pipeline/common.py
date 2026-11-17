"""Shared helpers for the data pipeline. Python 3 stdlib only."""
import json, re, os, time, urllib.request, collections

HERE = os.path.dirname(os.path.abspath(__file__))
REPO = os.path.dirname(os.path.dirname(HERE))
WORK = os.environ.get('MTG_PIPELINE_WORK', os.path.join(REPO, '.pipeline'))
EDITORIAL = os.path.join(REPO, 'data-src', 'standard', 'editorial')
UA = {'User-Agent': 'Mozilla/5.0 (mtg-meta-history archive script)'}
TOP8 = {'1', '2', '3', '4', '3-4', '5', '6', '7', '8', '5-8'}
SEASONS = json.load(open(os.path.join(HERE, 'seasons.json')))
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


def rows():
    global _rows
    if _rows is None:
        d = json.load(open(work('search.json')))
        evsize = collections.Counter()
        out = []
        for rs in d.values():
            for r in rs:
                if not r['date']:
                    continue
                r['iso'] = iso(r['date'])
                r['season'] = season_of(r['iso'])
                evsize[r['e']] += 1
                out.append(r)
        for r in out:
            r['evsize'] = evsize[r['e']]
        _rows = out
    return _rows


def season_rows(sid):
    return [r for r in rows() if r['season'] == sid]


def best_key(r):
    return (rank_key(r['rank']), 0 if r['level'] == 'bigstar' else 1, -r['evsize'], r['iso'])


def merged(sid, titles):
    ts = set(titles)
    rs = [r for r in season_rows(sid) if r['name'] in ts]
    rs.sort(key=best_key)
    return rs


def get_list(deck_id):
    os.makedirs(work('lists'), exist_ok=True)
    p = work('lists', f'{deck_id}.txt')
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

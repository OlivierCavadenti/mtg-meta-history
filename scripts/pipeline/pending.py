"""Usage: python3 scripts/pipeline/pending.py [SEASON ...]

What an incremental update has to look at, after scrape_search.py --refresh and cluster.py:
- a season to open (new calendar year, or Standard's autumn set), from the seasons file and Scryfall;
- for each season (default: the two most recent), the mtgtop8 titles with a top 8 that no editorial
  deck claims yet, marked when they would qualify on their own under the format's inclusion rule.
"""
import collections, datetime, json, os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from common import EDITORIAL, FORMAT, PRINTS, SEASONS, TOP8, rank_key, season_rows, work

BIG = {'bigstar', 'star+star+star'}
# Inclusion rule per format (AGENTS.md / UPDATING.md): top 8s needed, or a win at a big event
MIN_TOP8 = {'standard': 3, 'modern': 5, 'premodern': 4}.get(FORMAT, 3)

today = datetime.date.today().isoformat()
last_id, last_start = SEASONS[-1][0], SEASONS[-1][1]
print(f'{FORMAT}: last season {last_id} (from {last_start})')
if FORMAT == 'standard':
    # a Standard season opens with the first expansion released on or after August 1
    if os.path.exists(PRINTS):
        sets = {}
        for v in json.load(open(PRINTS)).values():
            for p in v['prints']:
                if p['st'] == 'expansion' and p['r'] <= today and p['paper']:
                    sets.setdefault(p['s'], p['r'])
        for code, r in sorted(sets.items(), key=lambda x: x[1]):
            if r > last_start and r[5:] >= '08-01' and r[:4] > last_start[:4]:
                print(f'  NEW SEASON: {code} released {r}: open season "{r[:4]}-{code}" (first expansion from August 1)')
                break
elif today[:4] > last_start[:4]:
    print(f'  NEW SEASON: {today[:4]} has started: open season "{today[:4]}" from {today[:4]}-01-01')

seasons = sys.argv[1:] or [s[0] for s in SEASONS[-2:]]
for sid in seasons:
    p = os.path.join(EDITORIAL, f'{sid}.json')
    ed = json.load(open(p)) if os.path.exists(p) else []
    claimed = {t for d in ed for t in d.get('titles', [])}
    included = {str(i) for d in ed for i in d.get('include', [])}
    excluded = {str(i) for d in ed for i in d.get('exclude', [])}
    rows = season_rows(sid)
    owned = lambda r: (r['name'] in claimed or str(r['d']) in included) and str(r['d']) not in excluded
    total = sum(1 for r in rows if r['rank'] in TOP8)
    covered = sum(1 for r in rows if r['rank'] in TOP8 and owned(r))
    print(f'\n{sid}: {len(ed)} decks, {len(rows)} results, editorial covers {covered}/{total} top 8s')
    by = collections.defaultdict(list)
    for r in rows:
        if not owned(r) and str(r['d']) not in excluded:
            by[r['name']].append(r)
    todo = []
    for title, rs in by.items():
        top8 = sum(1 for r in rs if r['rank'] in TOP8)
        if not top8:
            continue
        big_win = any(r['rank'] == '1' and r['level'] in BIG for r in rs)
        best = min(rs, key=lambda r: (rank_key(r['rank']), r['level'] not in BIG))
        # QUALIFIES: enough top 8s on its own; WIN: won a Professional/Major-level event, check the
        # event against the format's rule (a Challenge is not a Regional Championship)
        mark = 'QUALIFIES' if top8 >= MIN_TOP8 else 'WIN      ' if big_win else '         '
        todo.append((mark, top8, title, best))
    todo.sort(key=lambda x: (x[0] == '         ', -x[1], x[2]))
    for mark, top8, title, best in todo:
        print(f'  {mark} {top8:3d} top8  {title!r:40} best: #{best["rank"]} {best["event"][:50]} ({best["iso"]}) d={best["d"]}')
    if not todo:
        print('  nothing unassigned')
    if not os.path.exists(work('candidates', f'{sid}.json')):
        print('  (run cluster.py first)')

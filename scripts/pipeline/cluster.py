"""Groups scraped results by season and mtgtop8 title -> WORK/candidates/{season}.json"""
import json, re, collections, sys, os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from common import work, SEASONS as seasons
d = json.load(open(work('search.json')))
def iso(dt):
    dd, mm, yy = dt.split('/'); y = int(yy); y = 1900 + y if y > 80 else 2000 + y
    return f'{y}-{mm}-{dd}'
def season_of(date):
    cur = None
    for s in seasons:
        if date >= s[1]: cur = s[0]
    return cur
TOP8 = {'1','2','3','4','3-4','5','6','7','8','5-8'}
def rank_key(r):
    r = r.strip()
    m = re.match(r'(\d+)', r)
    return int(m.group(1)) if m else 99
by = collections.defaultdict(list)
evsize = collections.Counter()
for y, rows in d.items():
    for r in rows:
        if not r['date']: continue
        r['iso'] = iso(r['date']); r['season'] = season_of(r['iso'])
        evsize[r['e']] += 1
        by[r['season']].append(r)
os.makedirs(work('candidates'), exist_ok=True)
summary = {}
for sid, rows in by.items():
    groups = collections.defaultdict(list)
    for r in rows: groups[r['name']].append(r)
    out = []
    for name, rs in groups.items():
        rs.sort(key=lambda r: (rank_key(r['rank']), 0 if r['level']=='bigstar' else 1, -evsize[r['e']], r['iso']))
        out.append({'title': name, 'n': len(rs), 'top8': sum(1 for r in rs if r['rank'] in TOP8), 'wins': sum(1 for r in rs if r['rank']=='1'),
                    'first': min(r['iso'] for r in rs), 'last': max(r['iso'] for r in rs),
                    'best': [{'deck': r['d'], 'event': r['event'], 'e': r['e'], 'rank': r['rank'], 'date': r['iso'], 'player': r['player'], 'level': r['level']} for r in rs[:4]]})
    out.sort(key=lambda g: (-g['top8'], -g['n']))
    json.dump({'season': sid, 'totalResults': len(rows), 'groups': out}, open(work('candidates', f'{sid}.json'), 'w'), indent=0, ensure_ascii=False)
    summary[sid] = (len(rows), len(out))
for k in sorted(summary): print(k, summary[k])

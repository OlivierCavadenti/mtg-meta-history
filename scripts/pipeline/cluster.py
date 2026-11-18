"""Groups scraped results by season and mtgtop8 title -> WORK/candidates/{season}.json"""
import json, re, collections, sys, os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from common import work, rows, rank_key, TOP8
by = collections.defaultdict(list)
evsize = collections.Counter()
for r in rows():
    evsize[r['e']] += 1
    by[r['season']].append(r)
os.makedirs(work('candidates'), exist_ok=True)
summary = {}
for sid, rows in by.items():
    groups = collections.defaultdict(list)
    for r in rows: groups[r['name']].append(r)
    out = []
    for name, rs in groups.items():
        rs.sort(key=lambda r: (not r['has_list'], rank_key(r['rank']), 0 if r['level']=='bigstar' else 1, -evsize[r['e']], r['iso']))
        out.append({'title': name, 'n': len(rs), 'top8': sum(1 for r in rs if r['rank'] in TOP8), 'wins': sum(1 for r in rs if r['rank']=='1'),
                    'source': sorted({r['source'] for r in rs if r.get('source')}),
                    'first': min(r['iso'] for r in rs), 'last': max(r['iso'] for r in rs),
                    'best': [{'deck': r['d'], 'event': r['event'], 'e': r['e'], 'rank': r['rank'], 'date': r['iso'], 'player': r['player'], 'level': r['level'], 'list': r['has_list']} for r in rs[:4]]})
    out.sort(key=lambda g: (-g['top8'], -g['n']))
    json.dump({'season': sid, 'totalResults': len(rows), 'groups': out}, open(work('candidates', f'{sid}.json'), 'w'), indent=0, ensure_ascii=False)
    summary[sid] = (len(rows), len(out))
for k in sorted(summary): print(k, summary[k])

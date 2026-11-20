"""Usage: python3 scripts/pipeline/scrape_search.py FIRST_YEAR LAST_YEAR [--refresh]

Scrapes mtgtop8 results into data-src/{format}/results.json. Years already scraped are skipped,
unless --refresh: then they are scraped again (new events, late additions) and replaced.
"""
import re, sys, json, time, urllib.request, urllib.parse, html, os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from common import UA, FORMAT, FORMAT_CODE, COMPETITIVE_YEARS, load_results, save_results
args = [a for a in sys.argv[1:] if not a.startswith('--')]
refresh = '--refresh' in sys.argv
years = range(int(args[0]), int(args[1]) + 1)
def fetch(page, y, levels):
    data = {'current_page': str(page), 'format': FORMAT_CODE, 'date_start': f'01/01/{y}', 'date_end': f'31/12/{y}'}
    for l in levels: data[f'compet_check[{l}]'] = '1'
    req = urllib.request.Request('https://www.mtgtop8.com/search', data=urllib.parse.urlencode(data).encode(), headers=UA)
    for attempt in range(4):
        try:
            return urllib.request.urlopen(req, timeout=40).read().decode('latin-1')
        except Exception as e:
            time.sleep(2 * (attempt + 1))
    raise RuntimeError('fail')
row_re = re.compile(r'<tr class=hover_tr>(.*?)</tr>', re.S)
results = load_results()
for y in years:
    if str(y) in results and not refresh: continue
    # Competitive-level events are added where P+M coverage is thin: early Standard, and the
    # years in common.COMPETITIVE_YEARS (Modern's first years, the 2020-21 online era…)
    levels = ['P', 'M', 'C'] if ((FORMAT == 'standard' and y <= 2004) or y in COMPETITIVE_YEARS) else ['P', 'M']
    rows = []
    page = 1
    while True:
        h = fetch(page, y, levels)
        found = row_re.findall(h)
        for r in found:
            m = re.search(r'event\?e=(\d+)&d=(\d+)&f=\w+>([^<]*)</a>', r)
            pl = re.search(r'class=player[^>]*>([^<]*)<', r)
            ev = re.search(r'<td class=S11><a href=event\?e=\d+&f=\w+>([^<]*)</a>', r)
            lvl = re.findall(r'/graph/(\w+)\.png', r)
            tds = re.findall(r'<td class=S1[12][^>]*>([^<]*)</td>', r)
            dt = re.findall(r'(\d\d/\d\d/\d\d)', r)
            rank = re.search(r'<td class=S12 align=center>([^<]*)</td>', r)
            if not m: continue
            rows.append({'e': int(m.group(1)), 'd': int(m.group(2)), 'name': html.unescape(m.group(3)).strip(),
                         'player': html.unescape(pl.group(1)).strip() if pl else '', 'event': html.unescape(ev.group(1)).strip() if ev else '',
                         'level': '+'.join(lvl), 'rank': rank.group(1).strip() if rank else '', 'date': dt[-1] if dt else ''})
        if len(found) == 0 or f'PageSubmit({page+1})' not in h: break
        page += 1
        time.sleep(0.25)
    old = results.get(str(y), [])
    if len(rows) < 0.9 * len(old):
        # a partial answer from the site must not erase results: keep the previous scrape
        print(f'{y}: only {len(rows)} results against {len(old)} before, kept the previous scrape', flush=True)
        continue
    known = {r['d'] for r in old}
    results[str(y)] = rows
    print(y, len(rows), f'(+{sum(1 for r in rows if r["d"] not in known)} new)' if old else '', flush=True)
    save_results(results)

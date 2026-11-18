"""Usage: python3 scripts/pipeline/scrape_search.py FIRST_YEAR LAST_YEAR"""
import re, sys, json, time, urllib.request, urllib.parse, html, os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from common import work, UA, FORMAT, FORMAT_CODE
OUT = work('search.json')
years = range(int(sys.argv[1]), int(sys.argv[2]) + 1)
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
results = json.load(open(OUT)) if os.path.exists(OUT) else {}
for y in years:
    if str(y) in results: continue
    levels = ['P', 'M', 'C'] if (FORMAT == 'standard' and y <= 2004) else ['P', 'M']
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
    results[str(y)] = rows
    print(y, len(rows), flush=True)
    json.dump(results, open(OUT, 'w'))

"""Incremental update of the Limited data (weekly.sh refresh).

- every set of seasons.limited.json whose 17Lands dump changed since its stats were computed
  (Last-Modified header) is processed again;
- a set released on Scryfall in the last 6 months (expansion, draft innovation, masters) and not
  listed yet is added when 17Lands has published its Premier Draft dump (published about three
  weeks after release, which also respects 17Lands' 12-day embargo on new sets).
Sets added here still need their editorial file (data-src/limited/editorial/{set}.json).
"""
import datetime, json, os, sys, urllib.error, urllib.request

HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)
from seventeen import OUT, URL, process  # noqa: E402

SEASONS = os.path.join(os.path.dirname(HERE), 'seasons.limited.json')
UA = {'User-Agent': 'Mozilla/5.0 (mtg-meta-history archive script)', 'Accept': 'application/json'}


def last_modified(code):
    req = urllib.request.Request(URL.format(code.upper()), method='HEAD', headers=UA)
    try:
        return urllib.request.urlopen(req, timeout=60).headers.get('Last-Modified', '')
    except urllib.error.HTTPError:
        return None


sets = json.load(open(SEASONS))
known = {s[0] for s in sets}
changed = []
for code, _, _ in sets:
    p = os.path.join(OUT, f'{code}.json')
    lm = last_modified(code)
    if lm is None:
        continue
    if not os.path.exists(p) or json.load(open(p)).get('lastModified') != lm:
        changed.append(code)

cutoff = (datetime.date.today() - datetime.timedelta(days=183)).isoformat()
meta = json.load(urllib.request.urlopen(urllib.request.Request('https://api.scryfall.com/sets', headers=UA), timeout=60))
for s in sorted(meta['data'], key=lambda s: s.get('released_at') or ''):
    code = s['code']
    if code in known or s.get('digital') or s['set_type'] not in ('expansion', 'draft_innovation', 'masters'):
        continue
    if not (cutoff <= (s.get('released_at') or '') <= datetime.date.today().isoformat()):
        continue
    if last_modified(code):
        sets.append([code, s['released_at'], s['name']])
        known.add(code)
        changed.append(code)
        print(f'NEW SET: {code} ({s["name"]}): 17Lands dump available, write data-src/limited/editorial/{code}.json')

if len(sets) != len(json.load(open(SEASONS))):
    with open(SEASONS, 'w') as f:
        f.write('[\n' + ',\n'.join(' ' + json.dumps(s, ensure_ascii=False) for s in sets) + '\n]\n')
for code in changed:
    process(code)
print('limited:', len(changed), 'set(s) processed' if changed else 'nothing new on 17Lands')

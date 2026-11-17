"""Prefetches the best list of every candidate title (optional; deckinfo/build fetch lazily)."""
import json, glob, os, time, urllib.request, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from common import work, UA
os.makedirs(work('lists'), exist_ok=True)
ids = []
if len(sys.argv) > 1:
    ids = [int(x) for x in sys.argv[1:]]
else:
    for f in sorted(glob.glob(work('candidates', '*.json'))):
        for g in json.load(open(f))['groups']:
            if g['top8'] >= 1 or g['n'] >= 2:
                ids += [b['deck'] for b in g['best'][:1]]
todo = [i for i in dict.fromkeys(ids) if not os.path.exists(work('lists', f'{i}.txt'))]
print('todo', len(todo), flush=True)
for n, i in enumerate(todo):
    for attempt in range(4):
        try:
            req = urllib.request.Request(f'https://www.mtgtop8.com/mtgo?d={i}', headers=UA)
            txt = urllib.request.urlopen(req, timeout=40).read().decode('latin-1')
            open(work('lists', f'{i}.txt'), 'w').write(txt)
            break
        except Exception as e:
            time.sleep(2 * (attempt + 1))
    if n % 100 == 0: print(n, flush=True)
    time.sleep(0.2)
print('done', flush=True)

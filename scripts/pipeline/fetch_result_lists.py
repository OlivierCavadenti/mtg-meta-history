"""Downloads the mtgtop8 list of every result of the editorial decks (the deck page's "All decklists"
tab), newest first, into the list cache (.pipeline/{format}/lists). build.py then publishes them in
src/data/{format}/lists/{season}.json, which serves as the cache of a fresh checkout.

    python3 scripts/pipeline/fetch_result_lists.py                  # every season
    python3 scripts/pipeline/fetch_result_lists.py 2025 2026        # some seasons
    python3 scripts/pipeline/fetch_result_lists.py --top8 --limit 500

Polite: one request at a time, a pause between requests. Stop it at any time: what is downloaded stays.
"""
import json, os, sys, time
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from common import EDITORIAL, SEASONS, TOP8, deck_rows, get_list, has_list

args = [a for a in sys.argv[1:] if not a.startswith('--')]
top8_only = '--top8' in sys.argv
limit = int(sys.argv[sys.argv.index('--limit') + 1]) if '--limit' in sys.argv else None
if limit is not None:
    args = [a for a in args if a != str(limit)]

seasons = args or [s[0] for s in SEASONS]
todo = []
for sid in seasons:
    p = os.path.join(EDITORIAL, f'{sid}.json')
    if not os.path.exists(p):
        continue
    ed = json.load(open(p, encoding='utf-8'))
    for e in ed:
        for r in deck_rows(sid, ed, e):
            if top8_only and r['rank'] not in TOP8:
                continue
            if isinstance(r['d'], int) and not has_list(r['d']):
                todo.append((r['iso'], r['d']))
todo = [d for _, d in sorted(set(todo), reverse=True)][:limit]
print('to download', len(todo), flush=True)
start = time.time()
for n, d in enumerate(todo, 1):
    try:
        get_list(d)  # downloads into the cache, with retries and a pause
    except OSError as err:
        print('failed', d, err, flush=True)
    if n % 200 == 0:
        print(f'{n}/{len(todo)}, {(time.time() - start) / n:.2f} s per list', flush=True)
print('done', len(todo), flush=True)

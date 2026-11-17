"""Usage: python3 scripts/pipeline/deckinfo.py SEASON "Title A" ["Title B" ...] [--rep DECKID]
Prints merged stats for those mtgtop8 titles in the season and the representative decklist."""
import sys, os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from common import *
args = sys.argv[1:]
rep = None
if '--rep' in args:
    i = args.index('--rep'); rep = int(args[i+1]); args = args[:i] + args[i+2:]
sid, titles = args[0], args[1:]
rs = merged(sid, titles)
if not rs: print('NO ROWS for', titles); sys.exit(1)
top8 = sum(1 for r in rs if r['rank'] in TOP8); wins = sum(1 for r in rs if r['rank'] == '1')
print(f'results={len(rs)} top8={top8} wins={wins} first={min(r["iso"] for r in rs)} last={max(r["iso"] for r in rs)}')
for r in rs[:6]: print(f'  #{r["rank"]:<5} {r["iso"]} {r["event"]} — {r["player"]} [{r["level"]}] deck={r["d"]} title="{r["name"]}"')
did = rep or rs[0]['d']
main, side = get_list(did)
print(f'REP LIST deck={did} main={sum(c for c,_ in main)} side={sum(c for c,_ in side)}')
print('  MAIN: ' + '; '.join(f'{c} {n}' for c, n in main))
print('  SIDE: ' + '; '.join(f'{c} {n}' for c, n in side))

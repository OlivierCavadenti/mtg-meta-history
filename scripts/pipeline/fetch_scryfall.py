"""Downloads Scryfall's "default_cards" bulk file (one card per line) to .pipeline/default.jsonl.gz,
the input of prints.py. Skipped when the local copy is newer than Scryfall's last update."""
import gzip, json, os, shutil, sys, urllib.request
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from common import SCRYFALL_BULK, UA

HEADERS = {**UA, 'Accept': 'application/json'}
meta = json.load(urllib.request.urlopen(urllib.request.Request('https://api.scryfall.com/bulk-data', headers=HEADERS), timeout=60))
bulk = next(b for b in meta['data'] if b['type'] == 'default_cards')
stamp = SCRYFALL_BULK + '.updated_at'
if os.path.exists(SCRYFALL_BULK) and os.path.exists(stamp) and open(stamp).read() == bulk['updated_at']:
    print('Scryfall bulk up to date', bulk['updated_at'])
    sys.exit(0)
os.makedirs(os.path.dirname(SCRYFALL_BULK), exist_ok=True)
# newer bulk entries give a gzipped JSON-lines file; older ones a JSON array with one card per line
url = bulk.get('jsonl_download_uri') or bulk['download_uri']
req = urllib.request.Request(url, headers={**UA, 'Accept-Encoding': 'gzip'})
tmp = SCRYFALL_BULK + '.part'
with urllib.request.urlopen(req, timeout=600) as r:
    if url.endswith('.gz') or r.headers.get('Content-Encoding') == 'gzip':
        with open(tmp, 'wb') as f:
            shutil.copyfileobj(r, f)
    else:
        with gzip.open(tmp, 'wb') as f:
            shutil.copyfileobj(r, f)
os.replace(tmp, SCRYFALL_BULK)
open(stamp, 'w').write(bulk['updated_at'])
print('Scryfall bulk', bulk['updated_at'], os.path.getsize(SCRYFALL_BULK) // 1_000_000, 'MB')

#!/usr/bin/env python3
"""Bulk-download archived tournament pages from the Wayback Machine (web.archive.org).

Run it on a computer that can reach web.archive.org (the build environment cannot).
Python 3.8+, standard library only, no install needed.

    python3 fetch_wayback.py                 # every preset below
    python3 fetch_wayback.py dojo sideboard  # only some presets
    python3 fetch_wayback.py --prefix "example.com/coverage/*"

Pages land in ./wayback/<host>/<path>, with ./wayback/index.json listing every file, its
original URL and capture date. Re-running resumes where it stopped. When done it writes
./wayback.zip: send that file (or push the folder to a branch) so the pages can be parsed.

It uses the official CDX API to list captures (one capture per URL, the earliest one, so the
page reflects the time of the event) and the raw "id_" mode to get the original HTML/text
without the Wayback toolbar. Requests are spaced out to stay polite (about 1 per second).
"""
import json
import os
import sys
import time
import urllib.parse
import urllib.request
import zipfile

PRESETS = {
    # The Dojo: tournament reports with decklists, 1996-2001 (Regionals, States, Nationals, PTQs)
    'dojo': ['thedojo.com/tourney/*', 'www.thedojo.com/tourney/*', 'thedojo.com/tourney97/*',
             'www.thedojo.com/tourney97/*', 'thedojo.com/t*', 'www.thedojo.com/t*'],
    # Wizards' Sideboard: official coverage of Pro Tours, Worlds, Nationals, Regionals 1998-2002
    'sideboard': ['www.wizards.com/sideboard/*', 'wizards.com/sideboard/*'],
    # Brainburst and Mindripper: tournament reports 1999-2002
    'brainburst': ['www.brainburst.com/*', 'brainburst.com/*'],
    'mindripper': ['www.mindripper.com/*', 'mindripper.com/*'],
}

# Only keep pages that can hold tournament results or decklists (skip images, scripts, forums...)
KEEP_MIME = ('text/html', 'text/plain')
SKIP_HINTS = ('forum', 'board', 'login', 'cgi-bin/ubb', '.gif', '.jpg', '.png', '.css', '.js')
FROM, TO = '1996', '2004'  # capture years worth fetching

OUT = os.path.abspath('wayback')
UA = {'User-Agent': 'mtg-meta-history archive fetch (personal research)'}


def get(url, tries=5):
    for i in range(tries):
        try:
            req = urllib.request.Request(url, headers=UA)
            with urllib.request.urlopen(req, timeout=60) as r:
                return r.read()
        except Exception as e:  # noqa: BLE001 - retry any network error
            wait = 5 * (i + 1)
            print(f'    retry in {wait}s ({e})', flush=True)
            time.sleep(wait)
    return None


def list_captures(prefix):
    q = urllib.parse.urlencode({
        'url': prefix, 'output': 'json', 'from': FROM, 'to': TO,
        'fl': 'timestamp,original,mimetype,statuscode', 'filter': 'statuscode:200',
        'collapse': 'urlkey', 'limit': '200000',
    })
    raw = get(f'https://web.archive.org/cdx/search/cdx?{q}')
    if not raw:
        return []
    rows = json.loads(raw or b'[]')
    return [dict(zip(rows[0], r)) for r in rows[1:]] if rows else []


def local_path(original):
    u = urllib.parse.urlsplit(original)
    host = u.hostname or 'unknown'
    path = u.path or '/'
    if path.endswith('/'):
        path += 'index.html'
    if u.query:
        path += '__' + urllib.parse.quote(u.query, safe='')
    return os.path.join(OUT, host, path.lstrip('/'))


def main():
    args = sys.argv[1:]
    prefixes = []
    if '--prefix' in args:
        i = args.index('--prefix')
        prefixes = [args[i + 1]]
        args = args[:i] + args[i + 2:]
    for name in args or ([] if prefixes else list(PRESETS)):
        prefixes += PRESETS[name]

    os.makedirs(OUT, exist_ok=True)
    index_file = os.path.join(OUT, 'index.json')
    index = json.load(open(index_file)) if os.path.exists(index_file) else {}

    for prefix in prefixes:
        print(f'Listing {prefix} ...', flush=True)
        caps = [c for c in list_captures(prefix)
                if c['mimetype'] in KEEP_MIME and not any(h in c['original'].lower() for h in SKIP_HINTS)]
        print(f'  {len(caps)} pages', flush=True)
        for n, c in enumerate(caps, 1):
            dest = local_path(c['original'])
            if c['original'] in index and os.path.exists(dest):
                continue
            body = get(f"https://web.archive.org/web/{c['timestamp']}id_/{c['original']}")
            if body is None:
                print(f'  ! failed {c["original"]}', flush=True)
                continue
            os.makedirs(os.path.dirname(dest), exist_ok=True)
            with open(dest, 'wb') as f:
                f.write(body)
            index[c['original']] = {
                'file': os.path.relpath(dest, OUT), 'timestamp': c['timestamp'],
                'wayback': f"https://web.archive.org/web/{c['timestamp']}/{c['original']}",
            }
            if n % 25 == 0:
                print(f'  {n}/{len(caps)}', flush=True)
                json.dump(index, open(index_file, 'w'), indent=1)
            time.sleep(1)
        json.dump(index, open(index_file, 'w'), indent=1)

    with zipfile.ZipFile('wayback.zip', 'w', zipfile.ZIP_DEFLATED) as z:
        for root, _, files in os.walk(OUT):
            for f in files:
                p = os.path.join(root, f)
                z.write(p, os.path.relpath(p, os.path.dirname(OUT)))
    print(f'Done: {len(index)} pages in {OUT}, archive written to wayback.zip')


if __name__ == '__main__':
    main()

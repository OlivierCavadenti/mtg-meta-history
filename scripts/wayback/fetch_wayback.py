#!/usr/bin/env python3
"""Download archived pages from the Wayback Machine (web.archive.org), politely.

    python3 scripts/wayback/fetch_wayback.py [SEEDS.json] [OUT_DIR]

Defaults: scripts/wayback/seeds.json (the Wizards Sideboard pages behind the 1998-2002 Standard
results in data-src/standard/extra) and ./wayback (git-ignored). Python 3.8+, standard library only.
Re-running resumes: pages already in OUT_DIR/index.json are not fetched again.

Each seed is {"url": ..., "ts": "YYYY[MMDDhhmmss]", "depth": 1}. "ts" picks the capture closest to
that date ("id_" mode: the original HTML, without the Wayback toolbar). To explore a site, give a
seed a depth > 1 and a "follow" regex (absolute URLs to follow), plus optional "title" (link text or
URL must match) and "skip" (link text or URL must not match) regexes.

Notes from the 2026 import:
- The CDX API answers prefix/wildcard queries on large hosts (wizards.com/sideboard/*) with
  timeouts or an empty body: start from index pages instead (sideboard/archives.asp and
  article.asp?x=coverage list every article and event).
- web.archive.org refuses connections for several minutes past roughly 15 requests a minute, and
  each page costs two requests (redirect to the nearest capture, then the capture): keep DELAY >= 10.
"""
import html
import json
import os
import re
import socket
import sys
import time
import urllib.error
import urllib.parse
import urllib.request

HERE = os.path.dirname(os.path.abspath(__file__))
SEEDS = json.load(open(sys.argv[1] if len(sys.argv) > 1 else os.path.join(HERE, 'seeds.json')))
OUT = os.path.abspath(sys.argv[2] if len(sys.argv) > 2 else 'wayback')
UA = {'User-Agent': 'mtg-meta-history archive fetch (personal research)'}
DELAY = 10.0
os.makedirs(OUT, exist_ok=True)
IDX = os.path.join(OUT, 'index.json')
FAIL = os.path.join(OUT, 'failed.json')
index = json.load(open(IDX)) if os.path.exists(IDX) else {}
failed = json.load(open(FAIL)) if os.path.exists(FAIL) else {}
_last = [0.0]


def norm(u):
    u = html.unescape(u.strip())
    p = urllib.parse.urlsplit(u)
    host = (p.hostname or '').lower()
    if host == 'wizards.com':
        host = 'www.wizards.com'
    return urllib.parse.urlunsplit(('http', host, p.path or '/', p.query, ''))


def key(u):
    return norm(u).lower()


def fetch(url, ts):
    for attempt in range(6):
        wait = _last[0] + DELAY - time.time()
        if wait > 0:
            time.sleep(wait)
        _last[0] = time.time()
        try:
            req = urllib.request.Request(f'https://web.archive.org/web/{ts}id_/{url}', headers=UA)
            with urllib.request.urlopen(req, timeout=90) as r:
                return r.geturl(), r.read()
        except urllib.error.HTTPError as e:
            if e.code == 404:
                return None, None
            pause = 30 * (attempt + 1) if e.code in (429, 503, 504) else 10
            print(f'    HTTP {e.code}, pause {pause}s', flush=True)
        except (urllib.error.URLError, socket.timeout, ConnectionError, OSError) as e:
            pause = 300 * (attempt + 1)  # refused connections: the archive is rate-limiting this address
            print(f'    {e!r}, pause {pause}s', flush=True)
        time.sleep(pause)
    return None, None


def local(u):
    p = urllib.parse.urlsplit(u)
    path = p.path or '/'
    if path.endswith('/'):
        path += 'index.html'
    if p.query:
        path += '__' + urllib.parse.quote(p.query, safe='')
    return os.path.join(OUT, p.hostname or 'unknown', path.lstrip('/'))


def links(body, base):
    t = body.decode('latin-1')
    for h, txt in re.findall(r'''<a\s[^>]*?href\s*=\s*["']?([^"' >]+)[^>]*>(.*?)</a>''', t, re.I | re.S):
        if h.lower().startswith(('javascript:', 'mailto:', '#')):
            continue
        txt = ' '.join(html.unescape(re.sub(r'<[^>]+>', ' ', txt)).split())
        yield norm(urllib.parse.urljoin(base, h)), txt


def save():
    json.dump(index, open(IDX, 'w'), indent=1)
    json.dump(failed, open(FAIL, 'w'), indent=1)


queue = [(norm(s['url']), s, s.get('depth', 1), '') for s in SEEDS]
seen = set()
while queue:
    u, rule, depth, via = queue.pop(0)
    k = key(u)
    if k in seen:
        continue
    seen.add(k)
    if k in index and os.path.exists(os.path.join(OUT, index[k]['file'])):
        body = open(os.path.join(OUT, index[k]['file']), 'rb').read()
        base = index[k]['original']
    elif k in failed:
        continue
    else:
        final, body = fetch(u, rule.get('ts', '2001'))
        if body is None:
            failed[k] = {'url': u, 'via': via}
            print(f'  - missing {u}', flush=True)
            save()
            continue
        m = re.match(r'https://web\.archive\.org/web/(\d+)id_/(.*)', final or '')
        stamp, base = (m.group(1), m.group(2)) if m else (rule.get('ts', ''), u)
        dest = local(norm(u))
        os.makedirs(os.path.dirname(dest), exist_ok=True)
        open(dest, 'wb').write(body)
        index[k] = {'file': os.path.relpath(dest, OUT), 'original': base, 'timestamp': stamp,
                    'wayback': f'https://web.archive.org/web/{stamp}/{base}', 'via': via}
        print(f'  + {stamp} {u} ({len(body)} b)', flush=True)
        save()
    if depth <= 1:
        continue
    fol = re.compile(rule['follow'], re.I)
    tit = re.compile(rule['title'], re.I) if rule.get('title') else None
    skip = re.compile(rule['skip'], re.I) if rule.get('skip') else None
    for lu, txt in links(body, base):
        if key(lu) in seen or not fol.search(lu):
            continue
        if tit and not tit.search(txt) and not tit.search(lu):
            continue
        if skip and (skip.search(txt) or skip.search(lu)):
            continue
        queue.append((lu, rule, depth - 1, u))
save()
print(f'done: {len(index)} pages in {OUT}, {len(failed)} missing')

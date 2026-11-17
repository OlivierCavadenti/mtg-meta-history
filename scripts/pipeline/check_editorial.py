"""Usage: python3 scripts/pipeline/check_editorial.py SEASON  — validates data-src/standard/editorial/SEASON.json"""
import sys, os, json, re
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from common import *
sid = sys.argv[1]
decks = json.load(open(os.path.join(EDITORIAL, f'{sid}.json')))
cand = json.load(open(work('candidates', f'{sid}.json')))
titles = {g['title'] for g in cand['groups']}
errs = []; used = {}
ARCH = {'aggro','midrange','control','combo','tempo','ramp'}
slugs = set()
for d in decks:
    n = d.get('name', '?')
    for k in ['name','slug','archetype','titles','cover','keyCards','summary','why']:
        if k not in d: errs.append(f'{n}: missing {k}')
    if d.get('archetype') not in ARCH: errs.append(f'{n}: bad archetype')
    if not re.fullmatch(r'[a-z0-9]+(-[a-z0-9]+)*', d.get('slug','')): errs.append(f'{n}: bad slug')
    if d.get('slug') in slugs: errs.append(f'{n}: duplicate slug')
    slugs.add(d.get('slug'))
    for t in d.get('titles', []):
        if t not in titles: errs.append(f'{n}: unknown title {t!r}')
        if t in used: errs.append(f'{n}: title {t!r} already used by {used[t]}')
        used[t] = n
    rs = merged(sid, d.get('titles', []))
    if not rs: errs.append(f'{n}: no rows'); continue
    main, side = get_list(d.get('rep') or rs[0]['d'])
    if d.get('rep') and d['rep'] not in {r['d'] for r in rs}: errs.append(f'{n}: rep not among merged rows')
    names = {c for _, c in main} | {c for _, c in side}
    if sum(c for c, _ in main) < 40: errs.append(f'{n}: rep list main has {sum(c for c,_ in main)} cards')
    for c in d.get('keyCards', []) + [d.get('cover')]:
        if c not in names: errs.append(f'{n}: card {c!r} not in rep list')
    if not 3 <= len(d.get('keyCards', [])) <= 6: errs.append(f'{n}: keyCards should be 3-6')
    for lang in ['fr','en']:
        s = d.get('summary', {}).get(lang, '')
        if not 40 <= len(s) <= 260: errs.append(f'{n}: summary.{lang} length {len(s)} (40-260)')
        w = d.get('why', {}).get(lang, [])
        if not 2 <= len(w) <= 3: errs.append(f'{n}: why.{lang} needs 2-3 bullets')
        for b in w:
            if len(b) > 110: errs.append(f'{n}: why.{lang} bullet too long ({len(b)})')
print(f'{sid}: {len(decks)} decks, {len(errs)} error(s)')
for e in errs: print(' -', e)
sys.exit(1 if errs else 0)

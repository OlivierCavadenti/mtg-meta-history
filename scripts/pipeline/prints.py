"""Scryfall default_cards bulk (WORK/default.jsonl.gz) -> WORK/prints.json (printings per card name)"""
import gzip, json, sys, os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from common import work, PRINTS
out = {}
for line in gzip.open(work('default.jsonl.gz'), 'rt'):
    line = line.strip().rstrip(',')
    if not line.startswith('{'): continue
    c = json.loads(line)
    if c.get('lang') != 'en' or c.get('layout') in ('token','double_faced_token','emblem','art_series'): continue
    faces = c.get('card_faces') or []
    img = c.get('image_uris')
    front_img = img or (faces[0].get('image_uris') if faces else None)
    if not front_img: continue
    uid = front_img['art_crop'].split('/front/')[1].split('?')[0][4:-4] if '/front/' in front_img['art_crop'] else None
    p = {'r': c['released_at'], 's': c['set'], 'st': c.get('set_type'), 'id': uid, 'promo': c.get('promo', False), 'dig': c.get('digital', False),
         'fe': c.get('frame_effects', []), 'fa': c.get('full_art', False), 'bd': c.get('border_color'), 'tb': c.get('textless', False), 'var': c.get('variation', False), 'paper': 'paper' in c.get('games', [])}
    mana = c.get('mana_cost')
    if mana is None and faces: mana = faces[0].get('mana_cost', '')
    tl = c.get('type_line') or (faces[0].get('type_line') if faces else '')
    if faces and c.get('layout') in ('transform','modal_dfc','meld','reversible_card'): tl = faces[0].get('type_line', tl)
    colors = c.get('colors')
    if colors is None and faces: colors = faces[0].get('colors', [])
    info = {'m': mana or '', 'c': c.get('cmc', 0), 't': tl, 'k': ''.join(colors or []), 'ci': ''.join(c.get('color_identity', []))}
    names = {c['name']}
    for f in faces:
        if f.get('name'): names.add(f['name'])
    if ' // ' in c['name']: names.add(c['name'].split(' // ')[0])
    for n in names:
        e = out.setdefault(n, {'info': info, 'prints': []})
        if n == c['name']: e['info'] = info
        e['prints'].append(p)
json.dump(out, open(PRINTS, 'w'))
print(len(out))

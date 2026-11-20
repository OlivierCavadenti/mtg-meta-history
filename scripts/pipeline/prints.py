"""Scryfall default_cards bulk (.pipeline/default.jsonl.gz, fetch_scryfall.py) -> .pipeline/prints.json (printings per card name)"""
import gzip, json, sys, os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from common import PRINTS, SCRYFALL_BULK

# Universes Beyond sets (crossover licences). Recent ones no longer carry Scryfall's "triangle"
# security stamp, so they are listed explicitly; promo / token / commander companions included.
UB_SETS = {
    'ltr', 'ltc', 'who', 'pip', '40k', 'acr', 'rex', 'bot', 'fin', 'fic', 'fca', 'spm', 'spe',
    'tla', 'tle', 'tmt', 'tmc', 'msh', 'msc', 'hob', 'hoc', 'trk', 'trc', 'mdd', 'mdc',
}


def is_ub(c):
    s = c['set']
    base = s[1:] if len(s) == 4 and s[0] in 'pt' else s
    return c.get('security_stamp') == 'triangle' or s in UB_SETS or base in UB_SETS
out = {}
for line in gzip.open(SCRYFALL_BULK, "rt"):
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
         'fe': c.get('frame_effects', []), 'fa': c.get('full_art', False), 'bd': c.get('border_color'), 'tb': c.get('textless', False), 'var': c.get('variation', False), 'paper': 'paper' in c.get('games', []), 'ub': is_ub(c)}
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

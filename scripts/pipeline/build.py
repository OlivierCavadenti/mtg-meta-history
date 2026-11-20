"""Builds src/data/{format}/decks/*.json and src/data/{format}/cards.json from data-src/{format}/editorial/*.json."""
import sys, os, json, re
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from common import *
OUT = os.path.join(OUT_DIR, 'decks')
os.makedirs(OUT, exist_ok=True)
season_ids = [s[0] for s in SEASONS]
season_end = {s[0]: (SEASONS[i+1][1] if i + 1 < len(SEASONS) else '2099-01-01') for i, s in enumerate(SEASONS)}
prints = json.load(open(PRINTS))
ORDER = 'WUBRG'
def kind(tl):
    t = tl.lower().split('//')[0]
    for k in ['land', 'creature', 'planeswalker', 'battle', 'instant', 'sorcery', 'artifact', 'enchantment']:
        if k in t: return k
    return 'other'
import unicodedata
def fold(n):
    return ''.join(c for c in unicodedata.normalize('NFKD', n) if not unicodedata.combining(c)).lower()
lower = {}
for k in prints: lower.setdefault(fold(k), k)
def canon(name):
    """mtgtop8 spelling -> Scryfall name (split cards use ' // ')."""
    n = re.sub(r'\s*/+\s*', ' // ', name.strip())
    for cand in (n, name):
        if cand in prints: return cand
        if fold(cand) in lower: return lower[fold(cand)]
    return name
def lookup(name):
    return prints.get(canon(name))
BAD_FE = {'showcase', 'extendedart', 'inverted', 'etched', 'fullart'}
GOOD_ST = {'core', 'expansion', 'masters', 'draft_innovation', 'starter', 'commander', 'duel_deck'}
def pick_print(ps, before):
    """Newest regular printing released before `before`. Universes Beyond reprints, promos,
    borderless / showcase / full-art versions and Secret Lair are avoided whenever the card
    has another printing; a card that only exists in such versions keeps one of them."""
    def ok(p, strict=True, allow_ub=False):
        if p['dig'] or not p['paper'] or p['tb'] or p['fa'] or p['var'] or p['bd'] in ('borderless', 'gold', 'silver'): return False
        if set(p['fe']) & BAD_FE: return False
        if p.get('ub') and not allow_ub: return False
        if strict and (p['promo'] or p['st'] not in GOOD_ST): return False
        return True
    for allow_ub in (False, True):
        for strict in (True, False):
            c = [p for p in ps if ok(p, strict, allow_ub) and p['r'] < before]
            if c: return max(c, key=lambda p: p['r'])
    c = [p for p in ps if ok(p)] or [p for p in ps if ok(p, False, True)] or ps
    return min(c, key=lambda p: p['r'])
total_top8 = {}
for sid in season_ids:
    total_top8[sid] = sum(1 for r in season_rows(sid) if r['rank'] in TOP8)
# set types whose cards enter the format (Modern also takes the Modern Horizons sets)
PRINT_CUTOFF = '2003-07-01' if FORMAT == 'premodern' else None
LEGAL_SET_TYPES = {'core', 'expansion'} | ({'draft_innovation'} if FORMAT == 'modern' else set())
first_season = {}
seasons_of = collections.defaultdict(set)
firsts = collections.Counter(r['e'] for r in rows() if r['rank'] == '1')
all_decks = {}
missing = set()
for sid in season_ids:
    p = os.path.join(EDITORIAL, f'{sid}.json')
    if not os.path.exists(p): continue
    ed = json.load(open(p))
    decks = []
    for e in ed:
        rs = deck_rows(sid, ed, e)
        if not rs: continue
        rep = next((r for r in rs if str(r['d']) == str(e.get('rep'))), rs[0])
        if not rep['has_list']:
            print(f'  SKIP {sid}/{e["slug"]}: no published list among its results'); continue
        main, side = get_list(rep['d'])
        main = [[n, canon(c)] for n, c in main if c != 'Unknown Card']
        side = [[n, canon(c)] for n, c in side if c != 'Unknown Card']
        top8 = sum(1 for r in rs if r['rank'] in TOP8)
        # league weekends list several rank-1 rows: only count an event win when it is unique
        wins = sum(1 for r in rs if r['rank'] == '1' and firsts[r['e']] == 1)
        share = round(100 * top8 / max(1, total_top8[sid]), 1)
        # colors from non-land main cards, a color counts with >= 3 copies
        cc = {c: 0 for c in ORDER}
        for n, name in main:
            pr = lookup(name)
            if not pr: missing.add(name); continue
            if kind(pr['info']['t']) == 'land': continue
            for col in pr['info']['k'] or '':
                if col in cc: cc[col] += n
        colors = ''.join(c for c in ORDER if cc[c] >= 3)
        for n, name in main + side:
            first_season.setdefault(name, sid)
            seasons_of[name].add(sid)
        # sanity check: a card with no core/expansion printing before the season ends
        # suggests a list from another format mislabelled as Standard
        for n, name in main:
            pr = lookup(name)
            if not pr or name in ('Plains', 'Island', 'Swamp', 'Mountain', 'Forest', 'Wastes'): continue
            if not any(p['st'] in LEGAL_SET_TYPES and p['r'] < season_end[sid] for p in pr['prints']):
                print(f'  WARN {sid}/{e["slug"]}: {name} not printed in a {FORMAT}-legal set before season end')
        decks.append({
            'id': f"{e['slug']}-{sid}", 'name': e['name'], 'season': sid, 'archetype': e['archetype'], 'colors': colors,
            'tier': 3, 'first': min(r['iso'] for r in rs), 'last': max(r['iso'] for r in rs),
            'stats': {'results': len(rs), 'top8': top8, 'wins': wins, 'share': share},
            'summary': e['summary'], 'why': e['why'], 'keyCards': [canon(c) for c in e['keyCards']], 'cover': canon(e['cover']),
            'list': {'main': main, 'side': side, 'player': rep['player'], 'event': rep['event'], 'rank': rep['rank'], 'date': rep['iso'],
                     'url': deck_url(rep)},
        })
    # tiers
    decks.sort(key=lambda d: (-d['stats']['share'], -d['stats']['wins']))
    for i, d in enumerate(decks):
        s = d['stats']
        if (i == 0) or (s['share'] >= 12 and s['top8'] >= 3): d['tier'] = 1
        elif s['share'] >= 4 or s['wins'] >= 1: d['tier'] = 2
    all_decks[sid] = decks
    json.dump({'season': sid, 'decks': decks}, open(f'{OUT}/{sid}.json', 'w'), ensure_ascii=False, separators=(',', ':'))
    print(sid, len(decks), 'decks', sum(1 for d in decks if d['tier'] == 1), 'tier1')
cards = {}
for name, sid in first_season.items():
    pr = lookup(name)
    if not pr: missing.add(name); continue
    info = pr['info']
    # Premodern's card pool ends with Scourge (2003): show the original, old-frame printings
    cutoff = lambda end: min(end, PRINT_CUTOFF) if PRINT_CUTOFF else end
    p = pick_print(pr['prints'], cutoff(season_end[sid]))
    cards[name] = {'m': info['m'], 'c': info['c'], 't': kind(info['t']), 'k': ''.join(c for c in ORDER if c in (info['k'] or '')), 'i': p['id']}
    # printing of the era for every other season the card is played in, when it differs
    eras = {}
    for other in sorted(seasons_of[name]):
        q = pick_print(pr['prints'], cutoff(season_end[other]))
        if q['id'] != p['id']:
            eras[other] = q['id']
    if eras:
        cards[name]['e'] = eras
    # newest regular printing overall (no Universes Beyond reprint), for "most played" views
    newest = pick_print(pr['prints'], '9999-12-31')['id']
    if newest != p['id']:
        cards[name]['n'] = newest
json.dump(dict(sorted(cards.items())), open(os.path.join(OUT_DIR, 'cards.json'), 'w'), ensure_ascii=False, separators=(',', ':'))
print('cards', len(cards), 'missing', sorted(missing))

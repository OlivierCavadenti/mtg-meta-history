"""Current card prices: Scryfall default_cards bulk (.pipeline/default.jsonl.gz, fetch_scryfall.py)
-> src/data/{format}/prices.json for every built tournament format.

For each card of a format's cards.json: the cheapest tournament-legal paper printing, any finish,
in EUR (Cardmarket trend, through Scryfall) and USD (TCGplayer market, through Scryfall). Scryfall
refreshes prices once a day and asks to use them as an estimate only: the site says so.

    python3 scripts/pipeline/prices.py                 # every format with a cards.json
    python3 scripts/pipeline/prices.py modern pioneer  # some formats
"""
import gzip, json, os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from common import REPO, SCRYFALL_BULK

FORMATS = ['standard', 'pioneer', 'modern', 'legacy', 'vintage', 'pauper', 'premodern']
# Collectors' Edition, 30th Anniversary, World Championship decks, oversized: not tournament legal
SKIP_SET_TYPES = {'memorabilia', 'token', 'minigame'}


def card_names(c):
    """Every name a decklist may use for this card (same rule as prints.py): full name,
    face names, first half of a split card."""
    names = {c['name']}
    for f in c.get('card_faces') or []:
        if f.get('name'):
            names.add(f['name'])
    if ' // ' in c['name']:
        names.add(c['name'].split(' // ')[0])
    return names


def cheapest(wanted):
    """name -> [eur, usd], minimum over legal printings and finishes (None when unknown)."""
    best = {}
    for line in gzip.open(SCRYFALL_BULK, 'rt', encoding='utf-8'):
        line = line.strip().rstrip(',')
        if not line.startswith('{'):
            continue
        c = json.loads(line)
        if c.get('digital') or 'paper' not in c.get('games', []) or c.get('oversized'):
            continue
        if c.get('set_type') in SKIP_SET_TYPES or c.get('border_color') in ('gold', 'silver'):
            continue
        p = c.get('prices') or {}
        offer = []
        for keys in (('eur', 'eur_foil'), ('usd', 'usd_foil', 'usd_etched')):
            vals = [float(p[k]) for k in keys if p.get(k)]
            offer.append(min(vals) if vals else None)
        if offer == [None, None]:
            continue
        for n in card_names(c) & wanted:
            cur = best.setdefault(n, [None, None])
            for i, v in enumerate(offer):
                if v is not None and (cur[i] is None or v < cur[i]):
                    cur[i] = v
    return best


def main():
    formats = sys.argv[1:] or FORMATS
    cards_of = {}
    for f in formats:
        path = os.path.join(REPO, 'src', 'data', f, 'cards.json')
        if os.path.exists(path):
            cards_of[f] = json.load(open(path, encoding='utf-8'))
    wanted = set().union(*cards_of.values()) if cards_of else set()
    best = cheapest(wanted)
    stamp = SCRYFALL_BULK + '.updated_at'
    date = open(stamp).read()[:10] if os.path.exists(stamp) else None
    for f, cards in cards_of.items():
        out = {n: [round(v, 2) if v is not None else None for v in best[n]] for n in sorted(cards) if n in best}
        json.dump({'date': date, 'cards': out}, open(os.path.join(REPO, 'src', 'data', f, 'prices.json'), 'w', encoding='utf-8'),
                  ensure_ascii=False, separators=(',', ':'))
        none = sorted(n for n in cards if n not in best)
        print(f, len(out), 'priced', len(none), 'without price', none[:8])


if __name__ == '__main__':
    main()

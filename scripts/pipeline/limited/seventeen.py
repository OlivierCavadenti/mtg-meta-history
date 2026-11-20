"""Usage: python3 scripts/pipeline/limited/seventeen.py SET [SET ...] [--file PATH]

Reads 17Lands' public game data dump of a set (Premier Draft, CC BY 4.0,
https://www.17lands.com/public_datasets), streamed from its S3 URL (or a local copy with --file),
and writes data-src/limited/stats/{set}.json:

- per color combination (main colors, splashes folded in, as on 17Lands' deck color page):
  games, game wins, drafts, 7-win runs;
- per combination kept (the ten two-color pairs, plus any other combination with 3%+ of games):
  the cards its decks play, with inclusion rate and the game win rate of the decks playing them,
  and one real 7-win deck (the most typical of the combination's 7-win decks).

Rows of the dump are games; a draft is a run of the event (Premier Draft: up to 7 wins or 3 losses).
"""
import collections, csv, gzip, io, json, os, sys, urllib.request

HERE = os.path.dirname(os.path.abspath(__file__))
REPO = os.path.dirname(os.path.dirname(os.path.dirname(HERE)))
OUT = os.path.join(REPO, 'data-src', 'limited', 'stats')
URL = 'https://17lands-public.s3.amazonaws.com/analysis_data/game_data/game_data_public.{}.PremierDraft.csv.gz'
PAIRS = ['WU', 'UB', 'BR', 'RG', 'WG', 'WB', 'UR', 'BG', 'WR', 'UG']
ORDER = 'WUBRG'
BASICS = {'Plains', 'Island', 'Swamp', 'Mountain', 'Forest', 'Wastes'}
MIN_SHARE = 3.0  # % of games for a combination other than the ten pairs
PRINTS = os.environ.get('MTG_PRINTS', os.path.join(REPO, '.pipeline', 'prints.json'))
_colors = None


def card_colors(name):
    """Colors of a nonland card from the Scryfall printings index ('' for lands and unknowns)."""
    global _colors
    if _colors is None:
        _colors = {}
        for k, v in json.load(open(PRINTS)).items():
            if 'land' not in v['info']['t'].lower().split('//')[0]:
                _colors[k] = v['info']['k'] or ''
                _colors.setdefault(k.encode('ascii', 'replace').decode(), v['info']['k'] or '')
    return _colors.get(name, '')


def deck_colors(deck, names):
    """Main colors of a deck when the dump has no main_colors column (Kaldheim, Strixhaven):
    colors of at least 4 nonland cards; fewer is a splash, folded in as on 17Lands."""
    count = collections.Counter()
    for j, n in deck:
        for c in card_colors(names[j]):
            count[c] += n
    return norm(''.join(c for c, n in count.items() if n >= 4))


def num(v):
    return int(float(v)) if v else 0


def norm(colors):
    return ''.join(c for c in ORDER if c in colors)


def process(code, path=None):
    if path:
        stream = gzip.open(path, 'rt', newline='', encoding='utf-8')
        modified = ''
    else:
        resp = urllib.request.urlopen(URL.format(code.upper()), timeout=120)
        modified = resp.headers.get('Last-Modified', '')
        stream = io.TextIOWrapper(gzip.GzipFile(fileobj=resp), encoding='utf-8', newline='')
    first_line = stream.readline()
    # some dumps are a tar archive inside the gzip: the CSV starts after the 512-byte tar header
    first_line = first_line.split('\x00')[-1]
    header = next(csv.reader([first_line]))
    H = {h: i for i, h in enumerate(header)}
    deck_cols = [(i, h[5:]) for i, h in enumerate(header) if h.startswith('deck_')]
    side_cols = [(H.get('sideboard_' + name), name) for _, name in deck_cols]
    names = [name for _, name in deck_cols]
    i_draft, i_time, i_build, i_won = H['draft_id'], H['draft_time'], H['build_index'], H['won']
    i_main = H.get('main_colors')
    skipped = 0
    games = collections.Counter()
    wins = collections.Counter()
    drafts = {}  # draft id -> [colors, wins, games, build, deck, side, date]
    first = last = None
    n = 0
    for line in stream:
        p = line.rstrip('\r\n').split(',')
        if len(p) != len(header):
            p = next(csv.reader([line]), [])
            if len(p) != len(header):
                skipped += 1  # tar padding at the end of the archive, truncated lines
                continue
        n += 1
        won = p[i_won] in ('True', '1', '1.0')
        date = p[i_time][:10]
        if first is None or date < first:
            first = date
        if last is None or date > last:
            last = date
        d = drafts.get(p[i_draft])
        build = num(p[i_build])
        if d is None or build > d[3]:
            deck = tuple((j, num(p[i])) for j, (i, _) in enumerate(deck_cols) if p[i] not in ('0', '', '0.0'))
            side = tuple((j, num(p[i])) for j, (i, _) in enumerate(side_cols) if i is not None and p[i] not in ('0', '', '0.0'))
            colors = norm(p[i_main]) if i_main is not None else deck_colors(deck, names)
            if d is None:
                d = drafts[p[i_draft]] = [colors, 0, 0, build, deck, side, date]
            else:
                d[0], d[3], d[4], d[5] = colors, build, deck, side
        colors = norm(p[i_main]) if i_main is not None else d[0]
        games[colors] += 1
        wins[colors] += won
        d[1] += won
        d[2] += 1
    total = sum(games.values())
    per = collections.defaultdict(list)
    for d in drafts.values():
        per[d[0]].append(d)
    combos = []
    for colors in sorted(games, key=lambda c: -games[c]):
        share = 100 * games[colors] / total
        if colors not in PAIRS and share < MIN_SHARE:
            continue
        ds = per[colors]
        trophies = [d for d in ds if d[1] >= 7]
        # cards: inclusion among the combination's decks, game win rate of the decks playing them
        inc = collections.Counter()
        g_with = collections.Counter()
        w_with = collections.Counter()
        t_inc = collections.Counter()
        for d in ds:
            for j, _ in d[4]:
                inc[j] += 1
                g_with[j] += d[2]
                w_with[j] += d[1]
                t_inc[j] += d[1] >= 7
        cards = []
        for j, k in inc.items():
            if names[j] in BASICS or k < max(20, 0.05 * len(ds)):
                continue
            cards.append({'name': names[j], 'inclusion': round(100 * k / len(ds), 1),
                          'winRate': round(100 * w_with[j] / g_with[j], 1), 'games': g_with[j],
                          'trophyInclusion': round(100 * t_inc[j] / len(trophies), 1) if trophies else 0})
        cards.sort(key=lambda c: (-c['winRate'], -c['inclusion']))
        rep = None
        if trophies:
            # the most typical 7-win deck: highest summed inclusion of its spells among 7-win decks
            def score(d):
                return sum(t_inc[j] for j, _ in d[4] if names[j] not in BASICS)
            best = max(trophies, key=lambda d: (score(d), d[1], d[6]))
            rep = {'record': f'{best[1]}-{best[2] - best[1]}', 'date': best[6],
                   'main': [[c, names[j]] for j, c in sorted(best[4], key=lambda x: names[x[0]])],
                   'side': [[c, names[j]] for j, c in sorted(best[5], key=lambda x: names[x[0]]) if names[j] not in BASICS]}
        combos.append({'colors': colors, 'games': games[colors], 'wins': wins[colors],
                       'winRate': round(100 * wins[colors] / games[colors], 2), 'share': round(share, 2),
                       'drafts': len(ds), 'trophies': len(trophies), 'cards': cards[:40], 'rep': rep})
    out = {'set': code.lower(), 'format': 'PremierDraft', 'source': URL.format(code.upper()), 'lastModified': modified,
           'colorsDerived': i_main is None,
           'first': first, 'last': last, 'games': total, 'drafts': len(drafts),
           'winRate': round(100 * sum(wins.values()) / total, 2), 'combos': combos}
    os.makedirs(OUT, exist_ok=True)
    json.dump(out, open(os.path.join(OUT, f'{code.lower()}.json'), 'w'), ensure_ascii=False, indent=1)
    print(code, n, 'games', len(drafts), 'drafts', first, last, len(combos), 'combinations',
          f'({skipped} malformed lines skipped)' if skipped else '', 'colors derived from decks' if i_main is None else '', flush=True)


if __name__ == '__main__':
    args = sys.argv[1:]
    path = None
    if '--file' in args:
        path = args[args.index('--file') + 1]
        args = args[:args.index('--file')]
    for code in args:
        process(code, path)

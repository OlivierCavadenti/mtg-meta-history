"""Extract decklist blocks from pages downloaded by fetch_wayback.py.

    python3 -X utf8 scripts/wayback/extract_lists.py wayback wayback/lists.json [url-substring ...]

For each page: its title, intro text and every block of "N Card" lines, with the header lines
printed before it (player, place, deck name) and the main deck / sideboard split (by the Sideboard
tables' sideboard column, an explicit "Sideboard" line, or the 60th card).
"""
import html, json, os, re, sys

D = sys.argv[1]
idx = json.load(open(os.path.join(D, 'index.json')))
only = sys.argv[3:]
CARD = re.compile(r'^\s*(\d{1,2})\s*x?\s+([A-ZÆ][^\t]{1,60}?)\s*(?:\(\w+\))?\s*$')
SIDE = re.compile(r'^\s*(side ?board|sb)\b', re.I)
TOTAL = re.compile(r'^\s*\d+\s+(lands?|creatures?|other spells|spells|non-?creature spells|sideboard( cards?)?|cards?|total)\s*$', re.I)
SECTION = re.compile(r'^\s*(main ?deck|main|deck|creatures?|lands?|spells?|other spells|instants?|sorceries|artifacts?|enchantments?|non-?creature)'
                     r'\s*[:(]?\s*\d*\s*\)?\s*:?\s*$', re.I)


def decode(raw):
    try:
        return raw.decode('utf-8')
    except UnicodeDecodeError:
        return raw.decode('cp1252', errors='replace')


def text_lines(raw):
    t = decode(raw)
    t = re.sub(r'(?is)<(script|style)\b.*?</\1>', '', t)
    t = re.sub(r'(?is)<!--.*?-->', '', t)
    # only markup breaks lines, except inside <pre>
    # (a card name wrapped onto an indented line is joined back)
    t = re.sub(r'(?is)<pre\b[^>]*>.*?</pre>',
               lambda m: re.sub(r'[ \t]*\r?\n[ \t]{2,}(?=[A-Za-z])', ' ', m.group(0)).replace('\n', '<br>'), t)
    t = re.sub(r'[\r\n\t]+', ' ', t)
    # the sideboard column of Sideboard deck tables has its own background
    t = re.sub(r'(?i)<td\b[^>]*(statback|#CCFFCC)[^>]*>', '<br>Sideboard:<br>', t)
    t = re.sub(r'(?i)<br\s*/?>|</?(p|tr|div|h\d|li|table|pre|center|blockquote)\b[^>]*>', '\n', t)
    t = re.sub(r'(?i)</td>', '\n', t)
    t = html.unescape(re.sub(r'<[^>]+>', '', t)).replace('\xa0', ' ')
    return [' '.join(l.split()) for l in t.split('\n')]


def title_of(raw):
    m = re.search(r'(?is)<title>(.*?)</title>', decode(raw))
    return ' '.join(html.unescape(m.group(1)).split()) if m else ''


def split(cards, side_at):
    if side_at is not None:
        return cards[:side_at], cards[side_at:]
    tot = 0
    for i, (n, _) in enumerate(cards):
        tot += n
        if tot >= 60 and i + 1 < len(cards):
            rest = sum(c[0] for c in cards[i + 1:])
            if tot == 60 or rest <= 15:
                return cards[:i + 1], cards[i + 1:]
    return cards, []


out = []
for k, v in idx.items():
    if only and not any(s.lower() in k for s in only):
        continue
    raw = open(os.path.join(D, v['file']), 'rb').read()
    lines = text_lines(raw)
    blocks, cur, side_at, header, gap = [], [], None, [], 0
    body_start = next((i for i, l in enumerate(lines) if 'PRINTABLE VERSION' in l), 0)
    for l in lines[body_start:]:
        if not l:
            continue
        m = CARD.match(l)
        if m and not re.match(r'^\d+\s*(st|nd|rd|th|-|/)', l):
            cur.append([int(m.group(1)), m.group(2).strip()])
            gap = 0
            continue
        if cur and SIDE.match(l):
            side_at = len(cur)
            rest = re.sub(r'^\s*(side ?board|sb)\s*:?\s*\(?\d*\)?\s*:?', '', l, flags=re.I).strip()
            m2 = CARD.match(rest) if rest else None
            if m2:
                cur.append([int(m2.group(1)), m2.group(2).strip()])
            continue
        if cur and (SECTION.match(l) or TOTAL.match(l)):
            continue
        if cur and gap < 1 and len(l) < 25 and sum(c[0] for c in cur) < 60:
            gap += 1  # a stray label inside a list
            continue
        if cur:
            if sum(c[0] for c in cur) >= 40:
                main, side = split(cur, side_at)
                blocks.append({'header': header[-6:], 'main': main, 'side': side,
                               'n_main': sum(c[0] for c in main), 'n_side': sum(c[0] for c in side)})
                header = []
            cur, side_at, gap = [], None, 0
        header.append(l)
    if cur and sum(c[0] for c in cur) >= 40:
        main, side = split(cur, side_at)
        blocks.append({'header': header[-6:], 'main': main, 'side': side,
                       'n_main': sum(c[0] for c in main), 'n_side': sum(c[0] for c in side)})
    intro = ' '.join(l for l in lines[body_start:body_start + 60] if l)[:1500]
    out.append({'url': v['original'], 'wayback': v['wayback'], 'title': title_of(raw), 'intro': intro, 'blocks': blocks})
json.dump(out, open(sys.argv[2], 'w'), indent=1, ensure_ascii=False)
print(len(out), 'pages,', sum(len(p['blocks']) for p in out), 'lists')
for p in out:
    if p['blocks']:
        print(f"  {len(p['blocks']):3} {p['url']}  " + ' '.join(f"{b['n_main']}/{b['n_side']}" for b in p['blocks'][:12]))

# AGENTS.md — Building or extending a format's deck encyclopedia

The site lists every archetype that performed in a format, season by season, each with a real
decklist. Content is produced by a small pipeline (`scripts/pipeline/`, Python 3 stdlib) plus an
editorial pass that a human or an agent performs per season.

Scraped results are committed in `data-src/{format}/results.json`. Work files (candidates, cached
decklists, Scryfall bulk and printings index) go to `.pipeline/` (git-ignored); override the
per-format work dir with `MTG_PIPELINE_WORK=/some/dir`. To add new tournaments to a published
format, follow `UPDATING.md` (weekly incremental update).

## 1. Scrape tournament results

```bash
python3 scripts/pipeline/scrape_search.py 1994 2026
```

Queries mtgtop8's search for Standard decks at Professional + Major events per year (+ Competitive
up to 2004, where data is sparse) → `data-src/standard/results.json`. Years already scraped are
skipped; `--refresh` scrapes them again.

## 2. Group by season

```bash
python3 scripts/pipeline/cluster.py
```

Seasons are defined in `scripts/pipeline/seasons.json` (keep in sync with
`src/data/standard/seasons.ts`). Produces `.pipeline/candidates/{season}.json`: each mtgtop8 deck
title with result counts and best finishes.

## 3. Editorial pass (one season at a time)

Output: `data-src/standard/editorial/{season}.json`, an array of:

```json
{
  "name": "Ghazi-Glare",
  "slug": "ghazi-glare",
  "archetype": "midrange",
  "titles": ["Ghazi Glare"],
  "rep": 253153,
  "cover": "Glare of Subdual",
  "keyCards": ["Glare of Subdual", "Vitu-Ghazi, the City-Tree", "Selesnya Guildmage"],
  "summary": { "fr": "…", "en": "…" },
  "why": { "fr": ["…", "…"], "en": ["…", "…"] }
}
```

- Merge mtgtop8 titles that are the same archetype (`titles`). A title belongs to one deck only.
- To move single results filed under the wrong title, use `"include": [deck ids]` on the deck that
  should own them (they are removed from every other deck of the season) and `"exclude": [deck ids]`
  to drop results from a deck. `deckinfo.py SEASON "Title" --all` lists every result with its id.
- Inclusion: up to 2009, every archetype with a top 8; from 2010, top8 ≥ 3, or an event win, or a
  top 4 at a Pro Tour / Worlds / World or Regional Championship.
- `rep` (optional): mtgtop8 deck id of the list to show; defaults to the best finish at the
  biggest event.
- `cover` and `keyCards` must be in the representative list. `cover` is a non-land card.
- Texts: 1–2 sentence summary, 2–3 bullets ≤ 110 chars, FR + EN, historian tone, no numbers.

Tools:

```bash
python3 scripts/pipeline/deckinfo.py 2005-rav "Ghazi Glare" "GW Glare"   # merged stats + rep list
python3 scripts/pipeline/check_editorial.py 2005-rav                     # validate a season
```

## 3b. Corrections and sourced additions

- **Ranks that are not finishes** are ignored automatically: when many players share rank 1 or 2
  in one event (league weekends, Arena 7-win lists, standings pages), those ranks do not count as
  top 8s or wins (World Magic Cup winning teams excepted).
- **Wrong dates**: `data-src/standard/date-fixes.json` maps an mtgtop8 event id to its real date,
  with a source, or `"drop": true` with a reason to exclude a non-competitive event. Years written in an event name also override a stored date more than a year off.
- **Seasons mtgtop8 barely covers** (1990s, 2004-05…): add results from period sources in
  `data-src/standard/extra/{season}.json` (format documented in `scripts/pipeline/common.py`,
  `load_extra`). A list must be copied from a page that shows it card by card; its URL is
  mandatory and becomes the deck's source link. A result without a list counts in stats only.
  Reachable period sources so far: classicdojo.org (Dojo tournament reports, 1996 – Dec 1998) and
  the StarCityGames deck database from Oct 2002 (`https://ajax.starcitygames.com/decks/deck/N/user-display`
  returns the list behind `https://starcitygames.com/decklists/deck/?id=N`). Wizards' *Sideboard*
  coverage of 1999 – 2002 (US Regionals 1999, 2001, 2002; State Championships 1999 – 2001; Regionals
  2000 top 8s; Australian, New Zealand and other Nationals) is read through web.archive.org, which the
  cloud build environment cannot reach: run `scripts/wayback/fetch_wayback.py` on a local machine
  (pages listed in `scripts/wayback/seeds.json`), then `extract_lists.py` and `sideboard_to_extra.py`
  (dry run first; `--write` merges into the extra files). Lists printed without a deck name get an
  `Unnamed <colours>` title: attach them to archetypes with `include`, never with `titles`.

## 4. Card data and build

```bash
python3 scripts/pipeline/fetch_scryfall.py   # Scryfall "default_cards" bulk → .pipeline/default.jsonl.gz
python3 scripts/pipeline/prints.py           # → .pipeline/prints.json, shared by every format
python3 scripts/pipeline/build.py
npm run validate:content && npm run typecheck
```

`build.py` writes `src/data/standard/decks/{season}.json` and `src/data/standard/cards.json`.
Card art uses the newest regular printing released before the end of the season in which the card
first appears, so a 1997 deck shows 1997 frames.

## Formats

Every script reads `MTG_FORMAT` (default `standard`). Each format has its own seasons file
(`scripts/pipeline/seasons.json` for Standard, `seasons.{format}.json` otherwise), editorial layer
(`data-src/{format}/`), output (`src/data/{format}/`) and work dir (`.pipeline/{format}`).
The Scryfall printings index is shared (`.pipeline/prints.json`, or `MTG_PRINTS`).
Competitive-level events are added for years where Professional and Major coverage is thin:
`COMPETITIVE_YEARS` in `common.py` (Modern 2011-2013 and 2020-2021, Premodern 2020-2024);
`MTG_COMPETITIVE_YEARS=2011,2012` overrides it.

## Adding another format

1. Generalise the format code (`ST`) in `scrape_search.py` / `common.py`.
2. Define its seasons (`seasons.json` + `src/data/{format}/seasons.ts`).
3. Run the pipeline into `src/data/{format}/`, extend `src/data/load.ts`, set `ready: true` in
   `src/data/formats.ts`.

## Rules

- Never invent results or statistics. Numbers on the site come from the scraped data.
- Decklists come from public mtgtop8 tournament pages only.
- Bans: official Banned & Restricted announcements (MTG Wiki timeline as index).

## Limited

Limited has its own pipeline (`scripts/pipeline/limited/`), fed by 17Lands' public game data
(Premier Draft on MTG Arena, CC BY 4.0, https://www.17lands.com/public_datasets), never by the
17Lands API or its deck pages (their usage guidelines and robots.txt). Sets: from Kaldheim (2021),
the first set with a public game dump, in `scripts/pipeline/seasons.limited.json`.

```bash
python3 scripts/pipeline/limited/seventeen.py khm stx      # dump → data-src/limited/stats/{set}.json
python3 scripts/pipeline/limited/build_limited.py --check  # stats + editorial: report only
python3 scripts/pipeline/limited/build_limited.py          # → src/data/limited/
```

- A season is a set; a deck is a color combination (main colors, splashes folded in): the ten
  pairs, plus any other combination with 3%+ of games. Its list is a real 7-win deck from the
  dump (the most typical one). Its slug is the guild / shard / wedge name, so the Archetypes
  view follows a color pair across sets.
- Stats: game win rate, share of games, 7-win runs; the site cites 17Lands at the top of the page.
  The sample is 17Lands users, stronger than average: rates compare within a set.
- Editorial (`data-src/limited/editorial/{set}.json`): `colors`, `name` (guild + the set's theme
  for the pair, from its signpost uncommons), `archetype`, `summary`, `why`, `keyCards`, `cover`
  (in the 7-win deck). Same writing rules; never write a percentage (the site prints them).
- 17Lands asks third-party sites to wait 12 days after a set's Arena release before showing its
  data; the public dumps come out later than that.

### Limited before 17Lands (2011–2020)

Sets from Innistrad to Zendikar Rising (`scripts/pipeline/seasons.limited-history.json`) have no
public game data. Their editorial entries describe the design archetypes: same fields plus
`sources` (1–3 https URLs actually read: Scryfall signposts, mtg.wiki, Wizards articles, free
strategy articles) and an optional `tier` (1 only when a source ranks it among the best, 3 when a
source calls it weak). No decklist, no numbers; `build_limited.py --check {set}` validates them.

## Pioneer

`MTG_FORMAT=pioneer`, seasons in `scripts/pipeline/seasons.pioneer.json` (season "2020" starts on
2019-10-21, the format's announcement), bans in `src/data/pioneer/seasons.ts`. Competitive-level
events are scraped for 2019–2021 and 2025–2026, when Professional and Major events were rare.
Inclusion: top 8 ≥ 5, or a win at a Pro Tour / Players Tour / World / Regional / Arena
Championship / Grand Prix, or a top 4 at a Pro Tour or Worlds.

# AGENTS.md — Building or extending a format's deck encyclopedia

The site lists every archetype that performed in a format, season by season, each with a real
decklist. Content is produced by a small pipeline (`scripts/pipeline/`, Python 3 stdlib) plus an
editorial pass that a human or an agent performs per season.

Work files (scraped results, cached decklists, Scryfall bulk index) go to `.pipeline/`
(git-ignored). Override with `MTG_PIPELINE_WORK=/some/dir`.

## 1. Scrape tournament results

```bash
python3 scripts/pipeline/scrape_search.py 1994 2026
```

Queries mtgtop8's search for Standard decks at Professional + Major events per year (+ Competitive
up to 2004, where data is sparse) → `.pipeline/search.json`.

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

## 4. Card data and build

```bash
python3 scripts/pipeline/prints.py      # needs .pipeline/default.jsonl.gz (Scryfall "default_cards" bulk)
python3 scripts/pipeline/build.py
npm run validate:content && npm run typecheck
```

`build.py` writes `src/data/standard/decks/{season}.json` and `src/data/standard/cards.json`.
Card art uses the newest regular printing released before the end of the season in which the card
first appears, so a 1997 deck shows 1997 frames.

## Adding another format

1. Generalise the format code (`ST`) in `scrape_search.py` / `common.py`.
2. Define its seasons (`seasons.json` + `src/data/{format}/seasons.ts`).
3. Run the pipeline into `src/data/{format}/`, extend `src/data/load.ts`, set `ready: true` in
   `src/data/formats.ts`.

## Rules

- Never invent results or statistics. Numbers on the site come from the scraped data.
- Decklists come from public mtgtop8 tournament pages only.
- Bans: official Banned & Restricted announcements (MTG Wiki timeline as index).

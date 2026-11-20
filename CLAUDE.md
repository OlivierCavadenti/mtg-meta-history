# CLAUDE.md — MTG Meta History

How to maintain and extend the site with Claude Code.

## Project overview

A static Vue 3 + TypeScript deck encyclopedia of competitive Magic: The Gathering, by format.
A format bar at the top; each format lists EVERY archetype that performed, season by season,
chronologically. Each deck has a real tournament decklist, one or two sentences of text, key
cards and 2–3 bullets on why it performed. A second view ("Staples") is a full-page grid of
card images in the order cards became staples. Little text, lots of cards.

No backend. Deck data is generated JSON committed in `src/data/`.

## Commands

```bash
npm install
npm run dev               # dev server
npm run build             # type-check + production build
npm run typecheck         # TypeScript only
npm run validate:content  # validate generated deck data
```

## Structure

- `src/data/types.ts` — shared types (`Deck`, `CardInfo`, `Season`…)
- `src/data/formats.ts` — the format bar (`ready: false` shows "in progress")
- `src/data/standard/seasons.ts` — Standard seasons (open with the autumn set) and bans
- `src/data/modern/seasons.ts` — Modern seasons (calendar years, no rotation) and bans; same layout under `src/data/modern/`
- `src/data/premodern/seasons.ts` — Premodern seasons (calendar years, 2020–21 grouped; fixed pool 4th Edition–Scourge, old-frame printings via `PRINT_CUTOFF` in `build.py`) and bans
- `src/data/standard/decks/{season}.json` — GENERATED, one file per season
- `src/data/standard/cards.json` — GENERATED card data (mana cost, mana value, type, colors, Scryfall image id)
- `src/data/load.ts` — lazy loader for a format
- `src/components/` — `DeckTile`, `DeckList` (bar-style decklist), `CardRow`, `ManaCost`, `ColorPips`…
- `src/pages/` — `FormatPage` (listing), `DeckPage`, `StaplesPage`, `ColorsPage` (color evolution, small multiples; data in `src/lib/colorStats.ts`)
- `ArchetypesPage` / `ArchetypePage` — an archetype across seasons (lifelines, core, card-by-card evolution); built in `src/lib/lineage.ts` from the editorial `slug`, so keep one slug per archetype across seasons
- `data-src/standard/editorial/{season}.json` — hand-written editorial layer (names, merges, texts)
- `scripts/pipeline/` — data pipeline (Python 3, stdlib only), one format at a time via `MTG_FORMAT` (standard | modern | premodern). See `AGENTS.md`.

## Data pipeline (summary)

1. `scrape_search.py` — mtgtop8 results (Professional + Major events) per year → `data-src/{format}/results.json` (`--refresh` to re-scrape)
2. `cluster.py` — group results by season and mtgtop8 deck title → `candidates/`
3. editorial pass (human or agent) → `data-src/standard/editorial/{season}.json`
   (`deckinfo.py` to inspect a merged archetype, `check_editorial.py` to validate)
4. `prints.py` — Scryfall bulk data → printings index (era-appropriate art)
5. `build.py` — merges everything into `src/data/standard/`

Weekly incremental update (new tournaments, new decks, new seasons, bans): `UPDATING.md`,
`bash scripts/pipeline/weekly.sh refresh|build`. Scraped results are committed in
`data-src/{format}/results.json`.

Stats shown on the site (top 8s, wins, share of top 8s) are computed from the scraped mtgtop8
results only. Never type numbers by hand.

## Writing style for deck texts

- Tournament historian, not copywriter. Facts first. Very short.
- `summary`: 1–2 sentences. `why`: 2–3 bullets ≤ 110 chars. FR and EN.
- No superlatives without sourcing, no invented statistics or win rates, no emoji.
- Card names stay in English in both languages.

## CSS rules

- Use variables from `tokens.css` — never hardcode colors, spacing or fonts
- No Tailwind, no CSS-in-JS, no CSS modules; hand-written CSS in `<style scoped>`
- Tone: editorial, archival, paper and ink — a printed magazine, not a SaaS dashboard.
  Fonts: Source Serif 4 (body, captions in italic) and Archivo Narrow (headings, deck names), from Google Fonts
- Avoid generic "AI UI" tics: tiny uppercase letter-spaced labels, black pill badges, boxed
  toggle buttons, big-number stat tiles. Prefer sentence case, italic serif captions, underlined
  text links, rules (`border-top`) to separate sections
- No decorative gradients, no glassmorphism, no soft-shadow rounded cards.
  Exceptions: the image mask that fades card art into the decklist row; the faint pointer sheen
  on tilting card images; card images (physical objects) may use `--shadow-card` / `--shadow-lift`
- Printed-matter details: paper grain (`--grain`), double rules (masthead, colophon), passe-partout
  frames around art, drop cap on the deck summary, old-style figures in running text
- Motion is discreet and purposeful, always via `--ease-out`, and disabled under
  `prefers-reduced-motion`. Use the directives in `src/lib/directives.ts`: `v-reveal` (scroll-in,
  staggered by index), `v-fade` (image fade on load), `v-tilt` (card leans toward the pointer).
  Do not combine `v-reveal` and `v-tilt` on the same element (both use `transform`)
- Charts: hand-drawn SVG, no chart library. Five Magic colors overlaid fail colorblind checks
  (white, red, green share a lightness), so color trends are small multiples on a shared scale,
  each panel named by its mana symbol; series hues are `--series-*` tokens
- Card images and art come from the Scryfall CDN (`cards.scryfall.io`); mana symbols from `svgs.scryfall.io`

## Forbidden patterns

- No emoji in data or UI
- No `any` types
- No inline styles except dynamic values
- No new npm dependencies without strong justification
- No decklists copied from premium/paywalled content (mtgtop8 public tournament results only)

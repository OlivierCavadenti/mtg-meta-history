# AGENTS.md — Research Protocol for Adding Year+Format Entries

This document defines the protocol for an AI agent to research and create a new year+format data entry for MTG Meta History.

## Trigger

The agent receives a request like:

```
Add Standard 2005.
Add Modern 2019.
Add Legacy 2012.
Add Vintage 2003.
```

## Objective

Identify the dominant decks of a given year and format, break the year into meta eras, source everything, and produce a valid `YearFormatEntry` TypeScript file.

---

## Step 1: Establish the legal context

For the requested year and format, determine:

- Which sets were legal at the start of the year
- Which sets were released during the year
- When rotation occurred (if applicable, e.g., Standard)
- Any bans or restrictions announced during the year
- Any rules changes that affected the format

Search for:
- Ban announcements on magic.wizards.com or DailyMTG
- Set release dates on Wikipedia or Scryfall
- Format legality timelines

## Step 2: Identify major competitive events

Find the major tournaments held during the year for this format:

- Pro Tour / Players Tour / Mythic Championship
- World Championship
- Grand Prix / MagicFest
- National Championships
- SCG Opens / Invitationals (for US-centric formats)
- MTGO Championships / Challenges
- Arena Championships (2020+)

For each event, note:
- Date
- Format
- Winner and Top 8 decks
- Metagame breakdown if available

Sources to search:
- magic.wizards.com/en/events/coverage/
- mtgtop8.com
- mtggoldfish.com/tournament/
- mtgdecks.net

## Step 3: Identify dominant archetypes

From tournament results and articles, identify:

- Which decks won the most events
- Which decks appeared most frequently in Top 8s
- Which decks were described as "the deck to beat"
- Which decks caused bans
- Which decks had the highest metagame share

Cross-reference across multiple sources. A deck is "dominant" if:
- Multiple sources agree it was the top performer
- It appeared consistently in Top 8s across multiple events
- Articles from the period explicitly describe it as dominant

## Step 4: Break the year into meta eras

Divide the year into periods where the metagame was relatively stable. Natural breakpoints:

- Set releases
- Ban announcements
- Major tournament results that shifted the meta
- Rotation dates

Each era should have:
- A name (e.g., "Hogaak Summer", "Jund Era")
- A start and end month (YYYY-MM format)
- 1-3 dominant decks
- 2-5 challengers
- Key cards with their roles
- A summary paragraph
- Why the dominant decks were dominant (bullet points)
- Why the era ended
- Confidence level
- At least one source

## Step 5: Document bans

For each ban during the year:
- Date (YYYY-MM-DD)
- Cards banned
- Explanation
- Official source URL

## Step 6: Create representative deck entries

For each major deck of the year:
- Name
- Slug: `{deck-name-kebab}-{format}-{year}`
- Period it was dominant
- Archetype classification
- Summary (2-3 sentences)
- Key cards (5-8 cards)
- Source link to decklists (MTGTop8, MTGGoldfish, event coverage)

## Step 7: Write the file

Create `src/data/years/{year}.{format}.ts` following this template:

```typescript
import type { YearFormatEntry } from '../types'

export const {format}{year}: YearFormatEntry = {
  year: {year},
  format: '{format}',
  title: '{Format} {Year}',
  subtitle: '{evocative one-liner}',
  shortLabel: '{2-4 word label}',
  summary: '{3-5 sentence overview}',
  headlineDeck: '{main deck of the year}',
  eras: [
    // ... MetaEra objects
  ],
  bans: [
    // ... BanEntry objects (if any)
  ],
  representativeDecks: [
    // ... RepresentativeDeck objects
  ],
}
```

## Step 8: Register the entry

Add the import and entry to `src/data/years/index.ts`:

```typescript
import { {format}{year} } from './{year}.{format}'

// Add to allEntries array:
const allEntries: YearFormatEntry[] = [
  // ... existing entries
  {format}{year},
]
```

## Step 9: Validate

Run:
```bash
npm run validate:content
npm run typecheck
```

Fix any errors before considering the entry complete.

---

## Source priorities

In order of reliability:

1. **Official Wizards announcements** — Ban announcements, event coverage on magic.wizards.com
2. **Tournament results** — MTGTop8, MTGGoldfish tournament pages, event coverage
3. **Contemporary articles** — Articles written during the period by known authors
4. **Metagame analyses** — MTGGoldfish metagame pages, format breakdowns
5. **Retrospective articles** — Later analyses of historical periods
6. **Community consensus** — Forum discussions, Reddit threads (lowest confidence)

### Recommended search targets

- mtgtop8.com — Tournament results and metagame breakdowns
- mtggoldfish.com — Metagame shares, deck prices, tournament results
- magic.wizards.com — Official coverage, ban announcements
- magic.gg — Recent event coverage
- mtgdecks.net — Additional tournament results
- starcitygames.com — Articles and tournament results
- channelfireball.com — Articles from the period

For older formats:
- themanadrain.com — Vintage community
- mtgthesource.com — Legacy community
- oldschool-mtg.blogspot.com — Old School community
- premodernmagic.com — Premodern community

## Confidence guidelines

- **high**: 3+ concordant sources, clear tournament data, well-documented period
- **medium**: 1-2 solid sources, some gaps in data, or minor disagreements between sources
- **low**: Pre-internet era, limited tournament data, community formats with sparse records, or significant historical debate

## Editorial tone

### Good examples

> "Tooth and Nail became the defining big-mana deck of the post-Affinity format."

> "Jund was one of the most consistently performing midrange decks in Standard history, though its exact metagame share varied by region."

> "The ban of Hogaak, Arisen Necropolis in August 2019 ended one of Modern's most dramatic periods of format warping."

### Bad examples

> "This insane deck completely destroyed everything in its path!"

> "Affinity was literally the most broken deck ever printed."

> "Everyone knows this was the best deck."

### Rules

- No superlatives without sourcing
- No invented statistics or percentages
- Flag conflicting sources in the `note` field
- Use hedging language for uncertain claims: "appears to have been", "was widely considered", "sources suggest"
- Write as a historian, not a hype writer
- No promotional language, no excitement markers
- Short, dense paragraphs

## Intellectual property

- Card names and deck names are factual references — acceptable
- Do not copy full decklists from other sites — link to them instead
- A "core package" of 5-10 key cards is acceptable as textual reference
- No official logos, card images, mana symbols, or artwork
- No large passages copied from articles
- No premium/paywalled content reproduced

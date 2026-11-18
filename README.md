# MTG Meta History

An encyclopedia of competitive Magic: The Gathering decks, by format. Every archetype that
performed, season by season, with its real tournament decklist, key cards and a few lines on
why it worked. Plus a full-page wall of every format staple, in chronological order.

Standard is complete from 1994 to today. Other formats are in progress.

## Quick start

```bash
npm install
npm run dev
```

## Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Development server |
| `npm run build` | Type-check and production build |
| `npm run typecheck` | TypeScript only |
| `npm run validate:content` | Validate generated deck data |

## Data

- Tournament results and decklists: [MTGTop8](https://www.mtgtop8.com) (public event pages)
- Seasons MTGTop8 barely covers (1996–2007): [Classic Dojo archive](https://classicdojo.org) tournament
  reports and the [StarCityGames deck database](https://starcitygames.com/decklists/), each list linked
  to the page that publishes it
- Card data and images: [Scryfall](https://scryfall.com)
- Bans: official Banned & Restricted announcements

The pipeline that builds the data is documented in `AGENTS.md`.

## Tech stack

Vue 3, TypeScript, Vite, Vue Router, hand-written CSS. No backend.

## License

Editorial commentary on publicly available competitive results. Card names and images are
property of Wizards of the Coast. Not affiliated with Wizards of the Coast.

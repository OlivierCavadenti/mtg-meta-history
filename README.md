# MTG Meta History

An encyclopedia of competitive Magic: The Gathering decks, by format. Every archetype that
performed, season by season, with its real tournament decklist, key cards and a few lines on
why it worked. Plus a full-page wall of every format staple, in chronological order.

Standard is complete from 1994 to today, Modern from 2011 to today. Other formats are in progress.

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

MTG Meta History is unofficial Fan Content permitted under the Fan Content Policy. Not
approved/endorsed by Wizards. Portions of the materials used are property of Wizards of the
Coast. ©Wizards of the Coast LLC.

Editorial texts are commentary on publicly available competitive results. Card data and images
come from Scryfall; tournament results and decklists from the sources listed above.

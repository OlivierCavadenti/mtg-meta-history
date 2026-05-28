# MTG Meta History

An editorial archive of competitive Magic: The Gathering metagames. Browse by year, format, or archetype. Find out what deck you had to beat in any given season of competitive Magic.

## Quick start

```bash
npm install
npm run dev
```

Open http://localhost:5173 in your browser.

## Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Type-check and build for production |
| `npm run preview` | Preview production build |
| `npm run typecheck` | Run TypeScript type checking |
| `npm run validate:content` | Validate all data entries |

## Adding content

Each year+format combination is a single TypeScript file in `src/data/years/`.

### To add a new year

1. Create `src/data/years/{year}.{format}.ts` (e.g., `2019.modern.ts`)
2. Export a `YearFormatEntry` object following the type in `src/data/types.ts`
3. Import and register it in `src/data/years/index.ts`
4. Run `npm run validate:content` to check your entry

See `AGENTS.md` for a complete research protocol and writing guidelines.

### Using Claude Code to add entries

```
En suivant AGENTS.md, ajoute Standard 2006. Cherche sur le web, croise les sources, et cree le fichier.
```

```
Following AGENTS.md, add Modern 2019. Research Hogaak Summer, Urza, and the major bans.
```

## Tech stack

- Vue 3 + TypeScript
- Vite
- Vue Router
- Hand-written CSS (no Tailwind)
- Data as TypeScript files (no backend)

## Roadmap

- **V1** — Static timeline with TypeScript data (current)
- **V2** — Import from Markdown/MDX
- **V3** — Full-text search
- **V4** — Cross-era deck comparison
- **V5** — Historical gauntlet mode
- **V6** — Community contributions

## License

Content is editorial commentary on publicly available competitive results. Card names are property of Wizards of the Coast / Hasbro. No official imagery is used.

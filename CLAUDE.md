# CLAUDE.md — MTG Meta History

This file explains how to maintain and extend the mtg-meta-history project with Claude Code.

## Project overview

A static Vue 3 + TypeScript site documenting competitive Magic: The Gathering metagames by year and format. No backend. Data lives in TypeScript files.

## Commands

```bash
npm install
npm run dev          # Start dev server
npm run build        # Type-check + production build
npm run typecheck    # TypeScript only
npm run validate:content  # Validate all data entries
```

## Project structure

- `src/data/types.ts` — All shared TypeScript types (YearFormatEntry, MetaEra, etc.)
- `src/data/years/*.ts` — One file per year+format (e.g., `2005.standard.ts`)
- `src/data/years/index.ts` — Registry that imports and exposes all entries
- `src/data/formats.ts` — Format definitions and colors
- `src/data/archetypes/index.ts` — Archetype glossary data
- `src/components/` — Reusable Vue components
- `src/pages/` — Route-level page components
- `src/lib/` — Utility functions (timeline, scoring, validation)
- `src/styles/` — CSS files (tokens, base, layout, timeline)
- `scripts/validate-content.ts` — Content validation script

## How to add a new year+format

1. Create `src/data/years/{year}.{format}.ts`
2. Export a named constant of type `YearFormatEntry`
3. Import and add it to the `allEntries` array in `src/data/years/index.ts`
4. Run `npm run validate:content` to check the entry
5. Run `npm run typecheck` to verify types

### Naming conventions

- File: `{year}.{format}.ts` (e.g., `2019.modern.ts`)
- Export: `{format}{year}` in camelCase (e.g., `modern2019`)
- Deck slugs: `{deck-name}-{format}-{year}` in kebab-case
- Era IDs: `{year}-{format-abbreviation}-{short-name}` (e.g., `2019-mod-hogaak`)

## CSS rules

- Use variables from `tokens.css` — never hardcode colors, spacing, or fonts
- No Tailwind, no CSS-in-JS, no CSS modules
- Hand-written CSS in component `<style scoped>` blocks
- Keep the visual tone: editorial, dense, archival — not SaaS, not AI-generated
- No gradients, no glassmorphism, no rounded cards with soft shadows
- Borders: thin, solid, using `var(--line)` or `var(--line-light)`
- Typography: serif for body (Georgia), condensed sans for headings (Arial Narrow)
- Color palette: warm paper tones, dark ink, muted accents by format

## Writing style for data entries

- Write like a tournament historian, not a marketing copywriter
- Use specific, factual language: "deck to beat", "defining deck", "one of the top performers"
- Never use superlatives without sourcing: no "the best deck ever" or "completely broken"
- Structure: facts first, analysis second, speculation clearly marked
- Every MetaEra must have at least one source
- Every ban should reference an official announcement
- Use `confidence: 'low'` when sources are scarce or contradictory
- Prefer short, dense paragraphs over long prose

## Forbidden patterns

- No emoji in data or UI
- No official Wizards logos, card images, or mana symbols
- No copied decklists from premium content
- No invented statistics or win rates without sources
- No `any` types in TypeScript
- No inline styles except truly one-off cases
- No new npm dependencies without strong justification

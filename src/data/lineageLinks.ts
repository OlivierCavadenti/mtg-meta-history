import type { FormatId } from './types'

/**
 * Archetypes that turned into another one under a new name (same engine, new cards), so their
 * history pages point to each other. Keyed by format, then by slug.
 */
export const SUCCESSORS: Partial<Record<FormatId, Record<string, string>>> = {
  modern: {
    // After Modern Horizons 3 (June 2024) the Urza-lands deck adopts Eldrazi Temple and Ugin's
    // Labyrinth; coverage and mtgtop8 then file it as Eldrazi Tron.
    tron: 'eldrazi-tron',
    // Birthing Pod is banned in January 2015: the creature-chain decks move to Chord of Calling
    // (Kiki Chord) and to Collected Company (Abzan Company)
    'kiki-pod': 'kiki-chord',
    'melira-pod': 'abzan-company',
    // Abzan Company's toolbox turns into Heliod, Sun-Crowned + Walking Ballista (2020)
    'abzan-company': 'heliod-company',
  },
}

export function successorOf(format: FormatId, slug: string): string | undefined {
  return SUCCESSORS[format]?.[slug]
}

export function predecessorsOf(format: FormatId, slug: string): string[] {
  return Object.entries(SUCCESSORS[format] ?? {})
    .filter(([, to]) => to === slug)
    .map(([from]) => from)
}

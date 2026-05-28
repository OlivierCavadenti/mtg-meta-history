import type { ArchetypeType, RepresentativeDeck, FormatId } from '../data/types'
import { getAllEntries } from '../data/years'

export type DeckInfoLookup = {
  name: string
  archetype?: ArchetypeType
  summary?: string
  keyCards: string[]
  source?: { url: string; title?: string }
  appearances: { year: number; format: string; era: string }[]
}

function guessArchetype(name: string): ArchetypeType | undefined {
  const lower = name.toLowerCase()
  if (/aggro|red deck wins|sligh|weenie|stompy|burn|atarka|mice|prowess|convoke|hatred|suicide|naya runes|deadguy|atarka|blitz|kithkin|boat brew/.test(lower)) return 'aggro'
  if (/control|teachings|draw-go|wake|caw-blade|psychatog|approach|esper|grixis|jeskai|azorius|martyr|proclamation/.test(lower)) return 'control'
  if (/combo|prosbloom|dragonstorm|heartbeat|twin|tooth and nail|reveillark|rally|saheeli|marvel|nexus|fires|reclamation|omniscience|epiphany|cauldron|excruciator|bargain|replenish|memory jar|tinker|academy|hightide|storm/.test(lower)) return 'combo'
  if (/midrange|jund|abzan|rock|golgari|rakdos|sultai|bg /.test(lower)) return 'midrange'
  if (/tempo|delver|merfolk|faeries|rogues|pixie|dimir/.test(lower)) return 'tempo'
  if (/ramp|valakut|tron|landfall|domain|scapeshift|titan|omnath|wolf run/.test(lower)) return 'ramp'
  if (/prison|stax|lantern|stasis|smokestack/.test(lower)) return 'prison'
  return undefined
}

export type LookupContext = {
  year?: number
  format?: FormatId
}

export function lookupDeck(name: string, context?: LookupContext): DeckInfoLookup {
  const entries = getAllEntries()
  const appearances: DeckInfoLookup['appearances'] = []
  let bestRepresentative: RepresentativeDeck | undefined

  for (const entry of entries) {
    for (const era of entry.eras) {
      const dominant = era.dominantDecks.includes(name)
      const challenger = era.challengers.includes(name)
      if (dominant || challenger) {
        appearances.push({ year: entry.year, format: entry.format, era: era.name })
      }
    }
  }

  // 1. Prefer exact name match in the same year+format
  if (context?.year != null) {
    const sameYear = entries.find((e) => e.year === context.year && (!context.format || e.format === context.format))
    if (sameYear) {
      bestRepresentative = sameYear.representativeDecks.find((d) => d.name === name)
      // 2. Loose match in same year (e.g., "UW Control" matches "Loconto UW Control")
      if (!bestRepresentative) {
        const lower = name.toLowerCase()
        bestRepresentative = sameYear.representativeDecks.find((d) =>
          d.name.toLowerCase().includes(lower) || lower.includes(d.name.toLowerCase())
        )
      }
    }
  }

  // 3. Fallback: exact name match anywhere
  if (!bestRepresentative) {
    for (const entry of entries) {
      const rep = entry.representativeDecks.find((d) => d.name === name)
      if (rep) {
        bestRepresentative = rep
        break
      }
    }
  }

  if (bestRepresentative) {
    return {
      name: bestRepresentative.name,
      archetype: bestRepresentative.archetype,
      summary: bestRepresentative.summary,
      keyCards: bestRepresentative.keyCards,
      source: bestRepresentative.source,
      appearances,
    }
  }

  // 4. Final fallback: synthesize from key cards of eras where the deck appeared
  const keyCards: string[] = []
  for (const entry of entries) {
    if (context?.year != null && entry.year !== context.year) continue
    for (const era of entry.eras) {
      if (era.dominantDecks.includes(name)) {
        for (const kc of era.keyCards) {
          if (!keyCards.includes(kc.name)) keyCards.push(kc.name)
          if (keyCards.length >= 6) break
        }
      }
      if (keyCards.length >= 6) break
    }
    if (keyCards.length >= 6) break
  }

  return {
    name,
    archetype: guessArchetype(name),
    keyCards,
    appearances,
  }
}

export function findRepresentativeSlug(name: string, context?: LookupContext): string | undefined {
  const entries = getAllEntries()

  // Prefer same-year match first
  if (context?.year != null) {
    const sameYear = entries.find((e) => e.year === context.year && (!context.format || e.format === context.format))
    if (sameYear) {
      const exact = sameYear.representativeDecks.find((d) => d.name === name)
      if (exact) return exact.slug
      const lower = name.toLowerCase()
      const loose = sameYear.representativeDecks.find((d) =>
        d.name.toLowerCase().includes(lower) || lower.includes(d.name.toLowerCase())
      )
      if (loose) return loose.slug
    }
  }

  // Fallback: search all years
  for (const entry of entries) {
    const rep = entry.representativeDecks.find((d) => d.name === name)
    if (rep) return rep.slug
  }
  return undefined
}

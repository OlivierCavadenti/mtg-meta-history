import type { ArchetypeType, RepresentativeDeck } from '../data/types'
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

export function lookupDeck(name: string): DeckInfoLookup {
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
    if (!bestRepresentative) {
      const rep = entry.representativeDecks.find((d) => d.name === name)
      if (rep) bestRepresentative = rep
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

  // Fallback: gather key cards from eras where the deck appeared as dominant
  const keyCards: string[] = []
  for (const entry of entries) {
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

export function findRepresentativeSlug(name: string): string | undefined {
  const entries = getAllEntries()
  for (const entry of entries) {
    const rep = entry.representativeDecks.find((d) => d.name === name)
    if (rep) return rep.slug
  }
  return undefined
}

import type { YearFormatEntry, MetaEra } from '../data/types'

export function countSources(entry: YearFormatEntry): number {
  let count = 0
  for (const era of entry.eras) {
    count += era.sources.length
  }
  if (entry.bans) {
    for (const ban of entry.bans) {
      if (ban.source) count++
    }
  }
  return count
}

export function averageConfidence(entry: YearFormatEntry): number {
  const scores = { high: 3, medium: 2, low: 1 }
  if (entry.eras.length === 0) return 0
  const total = entry.eras.reduce((sum, era) => sum + scores[era.confidence], 0)
  return total / entry.eras.length
}

export function eraCount(entry: YearFormatEntry): number {
  return entry.eras.length
}

export function dominantDecks(era: MetaEra): string[] {
  return era.dominantDecks
}

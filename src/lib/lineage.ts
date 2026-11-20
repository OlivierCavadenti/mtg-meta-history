import type { Deck, FormatData, SeasonWithDecks } from '../data/types'
import { BASIC_LANDS } from './cards'

/** A deck id is `{slug}-{season}`: the slug names the archetype across seasons. */
export function slugOf(deck: Deck): string {
  return deck.id.endsWith(`-${deck.season}`) ? deck.id.slice(0, -(deck.season.length + 1)) : deck.id
}

export type LineageEntry = { deck: Deck; season: SeasonWithDecks }

export type Lineage = {
  slug: string
  /** name of the most recent entry */
  name: string
  /** oldest first */
  entries: LineageEntry[]
  top8: number
  wins: number
}

/** Every archetype of a format, keyed by slug, entries in chronological order. */
export function buildLineages(data: FormatData): Map<string, Lineage> {
  const map = new Map<string, Lineage>()
  for (const season of data.seasons) {
    for (const deck of season.decks) {
      const slug = slugOf(deck)
      let l = map.get(slug)
      if (!l) {
        l = { slug, name: deck.name, entries: [], top8: 0, wins: 0 }
        map.set(slug, l)
      }
      l.entries.push({ deck, season })
      l.name = deck.name
      l.top8 += deck.stats.top8
      l.wins += deck.stats.wins
    }
  }
  return map
}

export type CardTrack = {
  name: string
  /** copies in the main deck of each entry's representative list (0 = absent) */
  counts: number[]
  /** number of entries that play the card */
  seasons: number
  first: number
}

/**
 * Card-by-card evolution of the representative main decks (basic lands left out).
 * Rows are sorted: cards played the longest first, then by first appearance.
 */
export function cardTracks(lineage: Lineage): CardTrack[] {
  const n = lineage.entries.length
  const byName = new Map<string, number[]>()
  lineage.entries.forEach(({ deck }, i) => {
    for (const [count, name] of deck.list.main) {
      if (BASIC_LANDS.has(name)) continue
      if (!byName.has(name)) byName.set(name, new Array<number>(n).fill(0))
      byName.get(name)![i] += count
    }
  })
  return [...byName.entries()]
    .map(([name, counts]) => ({
      name,
      counts,
      seasons: counts.filter((c) => c > 0).length,
      first: counts.findIndex((c) => c > 0),
    }))
    .sort((a, b) => b.seasons - a.seasons || a.first - b.first || a.name.localeCompare(b.name))
}

/** Cards in at least 60% of the entries (and at least two): the archetype's core. */
export function coreCards(tracks: CardTrack[], entries: number): CardTrack[] {
  if (entries < 2) return []
  return tracks.filter((t) => t.seasons >= Math.max(2, Math.ceil(entries * 0.6)))
}

import type { FormatData } from '../data/types'
import { BASIC_LANDS } from './cards'

export type StapleSeason = {
  id: string
  start: string
  end?: string
  set: string
  /** Limited: set code */
  code?: string
  /** newest first: by the first result of a performing deck playing the card */
  cards: { name: string; decks: number; since: string }[]
}

/**
 * A card is a staple of a season when it appears in the main deck of at least
 * max(2, 15% of the season's decks), or is a key card of a top-tier deck.
 * Each card is listed once, in the first season where it qualifies.
 * Within a season, cards are ordered newest first by `since`: the earliest first
 * result among the season's decks that play the card (main deck or sideboard).
 */
export function computeStaples(data: FormatData): StapleSeason[] {
  const seen = new Set<string>()
  return data.seasons.map((s) => {
    const counts = new Map<string, number>()
    const since = new Map<string, string>()
    for (const d of s.decks) {
      for (const [, name] of d.list.main) {
        if (BASIC_LANDS.has(name)) continue
        counts.set(name, (counts.get(name) ?? 0) + 1)
      }
      for (const [, name] of [...d.list.main, ...d.list.side]) {
        const prev = since.get(name)
        if (!prev || d.first < prev) since.set(name, d.first)
      }
    }
    const threshold = Math.max(2, Math.ceil(s.decks.length * 0.15))
    const picked = new Map<string, number>()
    for (const [name, n] of counts) if (n >= threshold) picked.set(name, n)
    for (const d of s.decks) {
      if (d.tier > 2) continue
      for (const name of d.keyCards) if (!BASIC_LANDS.has(name)) picked.set(name, counts.get(name) ?? 1)
    }
    const cards = [...picked.entries()]
      .filter(([name]) => !seen.has(name))
      .map(([name, decks]) => ({ name, decks, since: since.get(name) ?? s.start }))
      .sort((a, b) => b.since.localeCompare(a.since) || b.decks - a.decks || a.name.localeCompare(b.name))
    for (const c of cards) seen.add(c.name)
    return { id: s.id, start: s.start, end: s.end, set: s.set, code: s.code, cards }
  }).filter((s) => s.cards.length > 0)
}

export type CardUsage = {
  name: string
  /** seasons (oldest first) in which at least one performing deck plays the card in its main deck */
  seasons: string[]
  /** performing decks, all seasons together, that play it */
  decks: number
  firstStart: string
  last: { start: string; end?: string }
}

/**
 * The most-played cards of a format over its whole history: ranked by the number of seasons
 * in which a performing deck played them (reprinted cards rise to the top), then by decks.
 * Basic lands are left out.
 */
export function cardUsage(data: FormatData): CardUsage[] {
  const by = new Map<string, CardUsage>()
  for (const s of data.seasons) {
    const seen = new Set<string>()
    for (const d of s.decks) {
      for (const [, name] of d.list.main) {
        if (BASIC_LANDS.has(name)) continue
        let u = by.get(name)
        if (!u) {
          u = { name, seasons: [], decks: 0, firstStart: s.start, last: { start: s.start, end: s.end } }
          by.set(name, u)
        }
        u.decks++
        if (!seen.has(name)) {
          seen.add(name)
          u.seasons.push(s.id)
          u.last = { start: s.start, end: s.end }
        }
      }
    }
  }
  return [...by.values()].sort((a, b) => b.seasons.length - a.seasons.length || b.decks - a.decks || a.name.localeCompare(b.name))
}

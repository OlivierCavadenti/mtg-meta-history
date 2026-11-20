import type { Deck, FormatData } from '../data/types'
import { deckWeight } from './deckStats'

export const COLOR_KEYS = ['W', 'U', 'B', 'R', 'G'] as const
export type ColorKey = (typeof COLOR_KEYS)[number]

export type ColorPoint = {
  season: string
  start: string
  end?: string
  /** top 8 finishes recorded for the season's decks (denominator; Limited: 17Lands games) */
  total: number
  /** share (0-100) of those top 8s taken by decks playing each color */
  share: Record<ColorKey, number>
  /** the season's decks playing each color, most top 8s first (for the tooltip) */
  decks: Record<ColorKey, Deck[]>
}

/** Seasons whose sample is too thin to read a trend from (drawn dashed and hollow). */
export const THIN_SAMPLE = 40

/**
 * Color presence per season: the share of the season's top 8 finishes taken by
 * decks that play a color. A two-color deck counts for both, so the five shares
 * add up to more than 100: each line reads on its own.
 */
export function colorSeries(data: FormatData): ColorPoint[] {
  return data.seasons.map((s) => {
    const total = s.decks.reduce((n, d) => n + deckWeight(d), 0)
    const share = {} as Record<ColorKey, number>
    const decks = {} as Record<ColorKey, Deck[]>
    for (const c of COLOR_KEYS) {
      const playing = s.decks.filter((d) => d.colors.includes(c))
      const n = playing.reduce((sum, d) => sum + deckWeight(d), 0)
      share[c] = total ? (100 * n) / total : 0
      decks[c] = playing.slice().sort((a, b) => deckWeight(b) - deckWeight(a))
    }
    return { season: s.id, start: s.start, end: s.end, total, share, decks }
  }).filter((p) => p.total > 0) // Limited design archetypes (2011-2020) carry no numbers
}

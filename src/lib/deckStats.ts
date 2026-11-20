import type { Deck } from '../data/types'

/** Weight of a deck in its season: top 8s, or games played for Limited (17Lands). */
export function deckWeight(d: Deck): number {
  return d.limited ? d.limited.games : d.stats.top8
}

/** Ranking within a season: share of top 8s, or game win rate for Limited. */
export function deckScore(d: Deck): number {
  return d.limited ? d.limited.winRate : d.stats.share
}

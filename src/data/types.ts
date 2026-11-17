export type FormatId = 'standard' | 'pioneer' | 'modern' | 'legacy' | 'vintage' | 'pauper'

export type Archetype = 'aggro' | 'midrange' | 'control' | 'combo' | 'tempo' | 'ramp'

export type L10n = { fr: string; en: string }

/** [count, card name] */
export type CardLine = [number, string]

export type CardKind =
  | 'creature'
  | 'planeswalker'
  | 'battle'
  | 'instant'
  | 'sorcery'
  | 'artifact'
  | 'enchantment'
  | 'land'
  | 'other'

/** Compact card record generated from Scryfall data. */
export type CardInfo = {
  /** mana cost, Scryfall notation: "{1}{B}" */
  m: string
  /** mana value */
  c: number
  t: CardKind
  /** colors, WUBRG letters */
  k: string
  /** Scryfall image id (printing chosen to match the era the card was first played in) */
  i: string
}

export type DeckList = {
  main: CardLine[]
  side: CardLine[]
  player: string
  event: string
  rank: string
  date: string
  /** mtgtop8 deck page */
  url: string
}

export type Deck = {
  id: string
  name: string
  season: string
  archetype: Archetype
  colors: string
  /** 1 = deck to beat, 2 = top tier, 3 = solid performer */
  tier: 1 | 2 | 3
  /** first and last recorded result in the season (ISO dates) */
  first: string
  last: string
  /** counts from mtgtop8 high-level events in the season */
  stats: { results: number; top8: number; wins: number; share: number }
  summary: L10n
  why: { fr: string[]; en: string[] }
  keyCards: string[]
  cover: string
  list: DeckList
}

export type Ban = { date: string; cards: string[] }

export type Season = {
  id: string
  /** ISO date of the season-opening set release */
  start: string
  /** first set of the season */
  set: string
  bans: Ban[]
}

/** end = start of the following season (undefined for the current one) */
export type SeasonWithDecks = Season & { end?: string; decks: Deck[] }

export type FormatData = {
  seasons: SeasonWithDecks[]
  cards: Record<string, CardInfo>
}

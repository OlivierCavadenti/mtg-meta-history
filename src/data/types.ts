export type FormatId =
  | 'standard'
  | 'modern'
  | 'legacy'
  | 'vintage'
  | 'extended'
  | 'pioneer'
  | 'old-school'
  | 'premodern'

export type ArchetypeType =
  | 'aggro'
  | 'control'
  | 'combo'
  | 'midrange'
  | 'tempo'
  | 'ramp'
  | 'prison'
  | 'hybrid'

export type Source = {
  title: string
  url: string
  publisher?: string
  date?: string
  note?: string
}

export type KeyCard = {
  name: string
  role: string
}

export type MetaEra = {
  id: string
  name: string
  start: string
  end: string
  dominantDecks: string[]
  challengers: string[]
  keyCards: KeyCard[]
  summary: string
  whyItDominated: string[]
  whyItEnded: string
  confidence: 'high' | 'medium' | 'low'
  sources: Source[]
}

export type BanEntry = {
  date: string
  cards: string[]
  explanation: string
  source?: Source
}

export type SetRelease = {
  date: string
  name: string
  code: string
  note?: string
}

export type DecklistEntry = {
  count: number
  name: string
}

export type Decklist = {
  mainboard: DecklistEntry[]
  sideboard?: DecklistEntry[]
  player?: string
  event?: string
  date?: string
  source?: Source
}

export type RepresentativeDeck = {
  name: string
  slug: string
  period: string
  archetype: ArchetypeType
  summary: string
  keyCards: string[]
  decklist?: Decklist
  source?: Source
}

export type YearFormatEntry = {
  year: number
  format: FormatId
  title: string
  subtitle: string
  shortLabel: string
  summary: string
  headlineDeck: string
  eras: MetaEra[]
  bans?: BanEntry[]
  setReleases?: SetRelease[]
  representativeDecks: RepresentativeDeck[]
}

export type DeckProfile = {
  slug: string
  name: string
  formats: FormatId[]
  years: number[]
  archetype: ArchetypeType
  gameplan: string
  keyCards: KeyCard[]
  matchups: { deck: string; rating: 'favorable' | 'even' | 'unfavorable'; note?: string }[]
  mainWeakness: string
  whyDominant: string
  whyDeclined: string
  coreCards?: string[]
  decklistUrl?: string
  sources: Source[]
}

export const FORMAT_LABELS: Record<FormatId, string> = {
  standard: 'Standard',
  modern: 'Modern',
  legacy: 'Legacy',
  vintage: 'Vintage',
  extended: 'Extended',
  pioneer: 'Pioneer',
  'old-school': 'Old School',
  premodern: 'Premodern',
}

export const FORMAT_ORDER: FormatId[] = [
  'standard',
  'modern',
  'pioneer',
  'legacy',
  'vintage',
  'extended',
  'old-school',
  'premodern',
]

export const ARCHETYPE_LABELS: Record<ArchetypeType, string> = {
  aggro: 'Aggro',
  control: 'Control',
  combo: 'Combo',
  midrange: 'Midrange',
  tempo: 'Tempo',
  ramp: 'Ramp',
  prison: 'Prison',
  hybrid: 'Hybrid',
}

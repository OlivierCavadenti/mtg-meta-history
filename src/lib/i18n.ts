import { ref } from 'vue'
import type { Archetype, L10n } from '../data/types'

export type Locale = 'en' | 'fr'

const STORAGE_KEY = 'mtg-meta-locale'

function initialLocale(): Locale {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored === 'fr' || stored === 'en') return stored
  } catch {
    /* storage unavailable */
  }
  return typeof navigator !== 'undefined' && navigator.language.startsWith('en') ? 'en' : 'fr'
}

export const locale = ref<Locale>(initialLocale())

export function toggleLocale() {
  locale.value = locale.value === 'en' ? 'fr' : 'en'
  try {
    localStorage.setItem(STORAGE_KEY, locale.value)
  } catch {
    /* storage unavailable */
  }
  document.documentElement.lang = locale.value
}

const STRINGS = {
  decks: { fr: 'Decks', en: 'Decks' },
  staples: { fr: 'Staples', en: 'Staples' },
  soon: { fr: 'En préparation', en: 'In progress' },
  soonText: { fr: "L'encyclopédie de ce format arrive. Standard est complet.", en: 'This format is being compiled. Standard is complete.' },
  loading: { fr: 'Chargement…', en: 'Loading…' },
  bans: { fr: 'Bannis', en: 'Banned' },
  decksCount: { fr: 'decks', en: 'decks' },
  top8: { fr: 'top 8', en: 'top 8' },
  wins: { fr: 'victoires', en: 'wins' },
  win: { fr: 'victoire', en: 'win' },
  deckToBeat: { fr: 'Deck à battre', en: 'Deck to beat' },
  tier1: { fr: 'Tier 1', en: 'Tier 1' },
  why1: { fr: 'Pourquoi il dominait', en: 'Why it dominated' },
  why: { fr: 'Pourquoi il performait', en: 'Why it performed' },
  whyLimited: { fr: 'Bilan', en: 'Assessment' },
  keyCards: { fr: 'Cartes clés', en: 'Key cards' },
  cards: { fr: 'cartes', en: 'cards' },
  spells: { fr: 'sorts', en: 'spells' },
  lands: { fr: 'Terrains', en: 'Lands' },
  landsLower: { fr: 'terrains', en: 'lands' },
  sideboard: { fr: 'Sideboard', en: 'Sideboard' },
  restOfPool: { fr: 'Reste du pool', en: 'Rest of the pool' },
  designArchetype: { fr: 'Archétype de design', en: 'Design archetype' },
  sourcesLabel: { fr: 'Sources', en: 'Sources' },
  noDataBefore: {
    fr: 'Pas de chiffres ni de decklist : 17Lands ne publie ses données qu’à partir de Kaldheim (2021).',
    en: 'No numbers or decklist: 17Lands publishes its data from Kaldheim (2021) on.',
  },
  list: { fr: 'Liste', en: 'List' },
  visual: { fr: 'Cartes', en: 'Cards' },
  copy: { fr: 'Copier la liste', en: 'Copy list' },
  copied: { fr: 'Copiée', en: 'Copied' },
  source: { fr: 'Liste source', en: 'Source list' },
  season: { fr: 'Saison', en: 'Season' },
  share: { fr: 'des top 8', en: 'of top 8s' },
  results: { fr: 'résultats', en: 'results' },
  seasonOpens: { fr: 'ouvre la saison', en: 'opens the season' },
  all: { fr: 'Tous', en: 'All' },
  sortRecent: { fr: 'Chronologique', en: 'Chronological' },
  sortTop: { fr: 'Dominance', en: 'Dominance' },
  colorsView: { fr: 'Couleurs', en: 'Colors' },
  colorsIntroLimited: {
    fr: 'Part des parties 17Lands jouées par les decks de chaque couleur, extension par extension (Premier Draft). Un deck bicolore compte pour ses deux couleurs.',
    en: 'Share of 17Lands games played by decks of each color, set by set (Premier Draft). A two-color deck counts for both colors.',
  },
  colorsIntro: {
    fr: 'Part des top 8 prise par les decks jouant chaque couleur, saison par saison. Un deck bicolore compte pour ses deux couleurs.',
    en: 'Share of top 8 finishes taken by decks playing each color, season by season. A two-color deck counts for both colors.',
  },
  colorsThin: { fr: 'Trait pointillé : saison peu documentée (moins de 40 top 8).', en: 'Dashed: thinly documented season (fewer than 40 top 8s).' },
  chart: { fr: 'Graphique', en: 'Chart' },
  table: { fr: 'Tableau', en: 'Table' },
  colorC: { fr: 'Incolore', en: 'Colorless' },
  topDecks: { fr: 'Decks principaux', en: 'Main decks' },
  ofTop8: { fr: 'des top 8', en: 'of top 8s' },
  seasonTotal: { fr: 'top 8 dans la saison', en: 'top 8s in the season' },
  archetypes: { fr: 'Archétypes', en: 'Archetypes' },
  archetypesIntroLimited: {
    fr: 'combinaisons de couleurs suivies d’extension en extension : une ligne par paire (ou trio), une case par extension, plus foncée quand elle est plus jouée.',
    en: 'color combinations followed from set to set: one row per pair (or trio), one cell per set, darker when more played.',
  },
  archetypesIntro: {
    fr: "archétypes présents sur plusieurs saisons. Chaque ligne suit un archétype à travers toute l'histoire du format.",
    en: 'archetypes that lasted more than one season. Each row follows one archetype across the whole history of the format.',
  },
  archetypesRecentIntro: {
    fr: "Les archétypes du plus récent au plus ancien, selon leur premier résultat (y compris ceux d'une seule saison).",
    en: 'Archetypes from newest to oldest, by their first result (including single-season ones).',
  },
  becomes: { fr: 'Se poursuit en', en: 'Continues as' },
  cameFrom: { fr: 'Issu de', en: 'Grew out of' },
  sortLongest: { fr: 'Les plus durables', en: 'Longest-lived' },
  sortLatest: { fr: 'Les plus récents', en: 'Most recent' },
  sortName: { fr: 'Alphabétique', en: 'A–Z' },
  showSingle: { fr: 'inclure ceux d’une seule saison', en: 'include single-season decks' },
  seasonsPlural: { fr: 'saisons', en: 'seasons' },
  seasonSingular: { fr: 'saison', en: 'season' },
  timeline: { fr: 'Saisons', en: 'Seasons' },
  timelineCaption: {
    fr: "Une colonne par saison où l'archétype a performé : part des top 8 (barre, même échelle pour toutes les saisons) et liste de référence.",
    en: 'One column per season the archetype performed in: share of top 8s (bar, one scale for every season) and its reference list.',
  },
  core: { fr: 'Le cœur', en: 'The core' },
  coreCaption: {
    fr: 'Les cartes présentes dans au moins 60 % des listes de référence de l’archétype.',
    en: "Cards present in at least 60% of the archetype's reference lists.",
  },
  evolution: { fr: 'Évolution carte par carte', en: 'Card-by-card evolution' },
  evolutionCaption: {
    fr: 'Nombre d’exemplaires dans le deck principal de la liste de référence de chaque saison (terrains de base exclus).',
    en: "Copies in the main deck of each season's reference list (basic lands left out).",
  },
  cardWord: { fr: 'Carte', en: 'Card' },
  showAllCards: { fr: 'Afficher aussi les cartes d’une seule saison', en: 'Also show single-season cards' },
  showRecurring: { fr: 'Ne garder que les cartes récurrentes', en: 'Recurring cards only' },
  archetypeHistory: { fr: "Toute l'histoire de", en: 'The full history of' },
  byPlayed: { fr: 'Les plus joués', en: 'Most played' },
  playedIntro: {
    fr: 'cartes classées par nombre de saisons où un deck performant les a jouées : les cartes rééditées remontent en tête.',
    en: 'cards ranked by the number of seasons in which a performing deck played them: reprinted cards rise to the top.',
  },
  showMore: { fr: 'Afficher plus', en: 'Show more' },
  bySeason: { fr: 'Par saison', en: 'By season' },
  byColor: { fr: 'Par couleur', en: 'By color' },
  byType: { fr: 'Par type', en: 'By type' },
  colorW: { fr: 'Blanc', en: 'White' },
  colorU: { fr: 'Bleu', en: 'Blue' },
  colorB: { fr: 'Noir', en: 'Black' },
  colorR: { fr: 'Rouge', en: 'Red' },
  colorG: { fr: 'Vert', en: 'Green' },
  colorM: { fr: 'Multicolore', en: 'Multicolor' },
  typeCreature: { fr: 'Créatures', en: 'Creatures' },
  typePlaneswalker: { fr: 'Planeswalkers', en: 'Planeswalkers' },
  typeInstant: { fr: 'Éphémères', en: 'Instants' },
  typeSorcery: { fr: 'Rituels', en: 'Sorceries' },
  typeEnchantment: { fr: 'Enchantements', en: 'Enchantments' },
  typeArtifact: { fr: 'Artefacts', en: 'Artifacts' },
  typeBattle: { fr: 'Batailles', en: 'Battles' },
  typeOther: { fr: 'Autres', en: 'Other' },
  notFound: { fr: 'Page introuvable.', en: 'Page not found.' },
  back: { fr: 'Retour', en: 'Back' },
  prev: { fr: 'Précédent', en: 'Previous' },
  next: { fr: 'Suivant', en: 'Next' },
  footer: {
    fr: 'Résultats et listes : MTGTop8, Classic Dojo, StarCityGames. Limited : données publiques 17Lands (CC BY 4.0). Images et prix : Scryfall.',
    en: 'Results and lists: MTGTop8, Classic Dojo, StarCityGames. Limited: 17Lands public data (CC BY 4.0). Images and prices: Scryfall.',
  },
  staplesIntro: { fr: 'cartes devenues incontournables, des plus récentes aux plus anciennes', en: 'cards that became format staples, newest first' },
  winRate: { fr: 'de victoires', en: 'win rate' },
  sortWinRate: { fr: 'Taux de victoire', en: 'Win rate' },
  sortPlayed: { fr: 'Les plus joués', en: 'Most played' },
  ofGames: { fr: 'des parties', en: 'of games' },
  gamesWord: { fr: 'parties', en: 'games' },
  draftsWord: { fr: 'drafts', en: 'drafts' },
  trophyDecks: { fr: 'decks à 7 victoires', en: '7-win decks' },
  trophyDeck: { fr: 'Deck à 7 victoires', en: '7-win deck' },
  setAverage: { fr: 'moyenne de l’extension', en: 'set average' },
  premierDraft: { fr: 'Premier Draft sur MTG Arena', en: 'Premier Draft on MTG Arena' },
  limitedSourceA: {
    fr: 'Taux de victoire, parts des parties et decks à 7 victoires calculés à partir des',
    en: 'Win rates, shares of games and 7-win decks computed from',
  },
  limitedSourceLink: { fr: 'données publiques de 17Lands', en: '17Lands public data' },
  limitedSourceB: {
    fr: '(Premier Draft sur MTG Arena, licence CC BY 4.0). L’échantillon réunit les joueurs équipés du traqueur 17Lands, plus forts que la moyenne : les taux se comparent au sein d’une même extension. Avant Kaldheim (2021), les archétypes viennent du design des extensions et de sources citées, sans chiffres.',
    en: '(Premier Draft on MTG Arena, CC BY 4.0 license). The sample is players using the 17Lands tracker, stronger than average: compare rates within a set. Before Kaldheim (2021), archetypes come from the sets\' design and cited sources, without numbers.',
  },
  seasonTotalLimited: { fr: 'parties dans l’extension', en: 'games in the set' },
  timelineCaptionLimited: {
    fr: 'Une colonne par extension : part des parties jouées par la combinaison de couleurs (barre, même échelle partout), son taux de victoire et un deck à 7 victoires.',
    en: 'One column per set: share of games played by the color combination (bar, one scale throughout), its win rate and a 7-win deck.',
  },
  setsPlural: { fr: 'extensions', en: 'sets' },
  // deck page: current price and stores
  priceTitle: { fr: 'Ce deck aujourd’hui', en: 'This deck today' },
  priceOn: { fr: 'sur', en: 'on' },
  priceCards: { fr: 'cartes, sideboard compris, à l’impression la moins chère de chaque carte', en: 'cards, sideboard included, at the cheapest printing of each card' },
  priceSource: { fr: 'Estimation d’après les cotes Scryfall du', en: 'Estimate from Scryfall prices of' },
  priceMissingOne: { fr: 'carte sans cote', en: 'card without a price' },
  priceMissingMany: { fr: 'cartes sans cote', en: 'cards without a price' },
  priciest: { fr: 'Le plus cher', en: 'Most expensive' },
  buy: { fr: 'Acheter', en: 'Buy' },
  cardmarketHint: { fr: 'copie la liste, à coller dans une liste d’envies', en: 'copies the list, paste it into a wants list' },
  cardmarketCopied: { fr: 'liste copiée, collez-la dans une nouvelle liste d’envies', en: 'list copied, paste it into a new wants list' },
  // deck page: every result of the archetype in the season
  resultsTitle: { fr: 'Tous les résultats', en: 'Every result' },
  resultsCaptionA: { fr: 'résultats en tournoi', en: 'tournament results' },
  resultsCaptionB: { fr: 'dont', en: 'including' },
  resultsCaptionC: { fr: 'Chaque tournoi mène à la liste publiée.', en: 'Each event links to the published list.' },
  oldestFirst: { fr: 'plus anciens d’abord', en: 'oldest first' },
  newestFirst: { fr: 'plus récents d’abord', en: 'newest first' },
  top8Only: { fr: 'top 8 seulement', en: 'top 8s only' },
  everyFinish: { fr: 'tous les classements', en: 'every finish' },
  shownAbove: { fr: 'liste ci-dessus', en: 'list above' },
  showAll: { fr: 'Tout afficher', en: 'Show all' },
  colDate: { fr: 'Date', en: 'Date' },
  colRank: { fr: 'Place', en: 'Finish' },
  colPlayer: { fr: 'Joueur', en: 'Player' },
  colEvent: { fr: 'Tournoi', en: 'Event' },
} satisfies Record<string, L10n>

export type StringKey = keyof typeof STRINGS

export function t(key: StringKey): string {
  return STRINGS[key][locale.value]
}

export function tx(text: L10n): string {
  return text[locale.value] || text.en
}

const ARCHETYPES: Record<Archetype, L10n> = {
  aggro: { fr: 'Aggro', en: 'Aggro' },
  midrange: { fr: 'Midrange', en: 'Midrange' },
  control: { fr: 'Contrôle', en: 'Control' },
  combo: { fr: 'Combo', en: 'Combo' },
  tempo: { fr: 'Tempo', en: 'Tempo' },
  ramp: { fr: 'Rampe', en: 'Ramp' },
}

export function archetypeLabel(a: Archetype): string {
  return tx(ARCHETYPES[a])
}

export function formatDate(iso: string, withDay = true): string {
  const d = new Date(iso + 'T00:00:00Z')
  return d.toLocaleDateString(locale.value === 'fr' ? 'fr-FR' : 'en-US', {
    day: withDay ? 'numeric' : undefined,
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  })
}

export function formatNumber(n: number): string {
  return n.toLocaleString(locale.value === 'fr' ? 'fr-FR' : 'en-US', { maximumFractionDigits: 1 })
}

export function formatMonth(iso: string): string {
  const d = new Date(iso + 'T00:00:00Z')
  return d.toLocaleDateString(locale.value === 'fr' ? 'fr-FR' : 'en-US', { month: 'short', year: 'numeric', timeZone: 'UTC' })
}

/** Last calendar year a season covers ("2025-08-01" running to today -> current year). */
export function seasonEndYear(start: string, nextStart?: string): number {
  const y1 = Number(start.slice(0, 4))
  const y2 = nextStart
    ? Number(nextStart.slice(0, 4)) - (nextStart.slice(5) === '01-01' ? 1 : 0)
    : new Date().getUTCFullYear()
  return Math.max(y1, y2)
}

/** "2005-10-07" + next start -> "2005–06" */
export function seasonYears(start: string, nextStart?: string): string {
  const y1 = Number(start.slice(0, 4))
  // a season ending on January 1st ends the previous year
  const y2 = nextStart
    ? Number(nextStart.slice(0, 4)) - (nextStart.slice(5) === '01-01' ? 1 : 0)
    : new Date().getUTCFullYear()
  if (y2 <= y1) return String(y1)
  return `${y1}–${String(y2).slice(2)}`
}

type SeasonLike = { start: string; end?: string; set: string; code?: string }

/** Heading of a season: its years ("2005–06"), or its set for Limited. */
export function seasonTitle(s: SeasonLike): string {
  return s.code ? s.set : seasonYears(s.start, s.end)
}

/** Short label (jumps, axes): years, or the set code for Limited. */
export function seasonShort(s: SeasonLike): string {
  return s.code ?? seasonYears(s.start, s.end)
}

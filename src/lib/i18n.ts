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
  keyCards: { fr: 'Cartes clés', en: 'Key cards' },
  cards: { fr: 'cartes', en: 'cards' },
  spells: { fr: 'sorts', en: 'spells' },
  lands: { fr: 'Terrains', en: 'Lands' },
  landsLower: { fr: 'terrains', en: 'lands' },
  sideboard: { fr: 'Sideboard', en: 'Sideboard' },
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
  archetypesIntro: {
    fr: "archétypes présents sur plusieurs saisons. Chaque ligne suit un archétype à travers toute l'histoire du format.",
    en: 'archetypes that lasted more than one season. Each row follows one archetype across the whole history of the format.',
  },
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
    fr: 'Résultats et listes : MTGTop8, Classic Dojo, StarCityGames. Images : Scryfall.',
    en: 'Results and lists: MTGTop8, Classic Dojo, StarCityGames. Images: Scryfall.',
  },
  staplesIntro: { fr: 'cartes devenues incontournables, des plus récentes aux plus anciennes', en: 'cards that became format staples, newest first' },
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

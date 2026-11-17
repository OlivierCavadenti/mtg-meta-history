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
  bySeason: { fr: 'Par saison', en: 'By season' },
  byColor: { fr: 'Par couleur', en: 'By color' },
  byType: { fr: 'Par type', en: 'By type' },
  colorW: { fr: 'Blanc', en: 'White' },
  colorU: { fr: 'Bleu', en: 'Blue' },
  colorB: { fr: 'Noir', en: 'Black' },
  colorR: { fr: 'Rouge', en: 'Red' },
  colorG: { fr: 'Vert', en: 'Green' },
  colorM: { fr: 'Multicolore', en: 'Multicolor' },
  colorC: { fr: 'Incolore', en: 'Colorless' },
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
    fr: "Résultats et listes : MTGTop8. Images : Scryfall. Les noms de cartes appartiennent à Wizards of the Coast ; site non affilié.",
    en: 'Results and lists: MTGTop8. Images: Scryfall. Card names belong to Wizards of the Coast; not affiliated.',
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

import { ref, computed } from 'vue'

export type Locale = 'en' | 'fr'

const STORAGE_KEY = 'mtg-meta-locale'

function getInitialLocale(): Locale {
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored === 'fr' || stored === 'en') return stored
    if (navigator.language.startsWith('fr')) return 'fr'
  }
  return 'en'
}

export const locale = ref<Locale>(getInitialLocale())

export function setLocale(l: Locale) {
  locale.value = l
  if (typeof window !== 'undefined') {
    localStorage.setItem(STORAGE_KEY, l)
  }
}

export function toggleLocale() {
  setLocale(locale.value === 'en' ? 'fr' : 'en')
}

const translations: Record<string, Record<Locale, string>> = {
  'site.title': { en: 'MTG Meta History', fr: 'MTG Meta History' },
  'site.subtitle': { en: 'The decks that defined each era of Magic.', fr: 'Les decks qui ont défini chaque ère de Magic.' },
  'site.description': {
    en: 'An editorial archive of competitive Magic: The Gathering metagames. Browse by year, format, or archetype. Find out what deck you had to beat in any given season of competitive Magic.',
    fr: 'Une archive éditoriale des métagames compétitifs de Magic: The Gathering. Naviguez par année, format ou archétype. Découvrez quel deck il fallait battre à chaque saison du Magic compétitif.',
  },
  'site.footer': {
    en: 'MTG Meta History — An editorial archive of competitive Magic: The Gathering metagames.',
    fr: 'MTG Meta History — Une archive éditoriale des métagames compétitifs de Magic: The Gathering.',
  },
  'site.footer.legal': {
    en: 'Card names and deck names are used as factual references. No official imagery or logos are used. This site is not affiliated with Wizards of the Coast.',
    fr: 'Les noms de cartes et de decks sont utilisés comme références factuelles. Aucune image ou logo officiel n\'est utilisé. Ce site n\'est pas affilié à Wizards of the Coast.',
  },

  'nav.timeline': { en: 'Timeline', fr: 'Chronologie' },
  'nav.decks': { en: 'Decks', fr: 'Decks' },
  'nav.formats': { en: 'Formats', fr: 'Formats' },
  'nav.glossary': { en: 'Glossary', fr: 'Glossaire' },
  'nav.about': { en: 'About', fr: 'À propos' },

  'home.browse_format': { en: 'Browse by format', fr: 'Parcourir par format' },
  'home.documented_years': { en: 'Documented years', fr: 'Années documentées' },
  'home.random_era': { en: 'Random era', fr: 'Ère au hasard' },
  'home.deck_to_beat': { en: 'Deck to beat', fr: 'Deck à battre' },
  'home.start_exploring': { en: 'Start exploring', fr: 'Commencer l\'exploration' },
  'home.full_timeline': { en: 'Full Timeline', fr: 'Chronologie complète' },

  'year.formats': { en: 'Formats', fr: 'Formats' },
  'year.bans': { en: 'Bans & restrictions', fr: 'Interdictions et restrictions' },
  'year.no_data': { en: 'No data documented for this year yet.', fr: 'Aucune donnée documentée pour cette année.' },
  'year.back_timeline': { en: 'Back to timeline', fr: 'Retour à la chronologie' },

  'yearformat.meta_eras': { en: 'Meta eras', fr: 'Ères du métagame' },
  'yearformat.representative_decks': { en: 'Representative decks', fr: 'Decks représentatifs' },
  'yearformat.all_formats_for': { en: 'All formats for', fr: 'Tous les formats pour' },
  'yearformat.no_data': { en: 'No data available for this format and year.', fr: 'Aucune donnée disponible pour ce format et cette année.' },

  'era.why_dominated': { en: 'Why it dominated', fr: 'Pourquoi il dominait' },
  'era.why_ended': { en: 'Why it ended', fr: 'Pourquoi ça s\'est terminé' },
  'era.key_cards': { en: 'Key cards', fr: 'Cartes clés' },
  'era.card': { en: 'Card', fr: 'Carte' },
  'era.role': { en: 'Role', fr: 'Rôle' },
  'era.sources': { en: 'Sources', fr: 'Sources' },

  'deck.format': { en: 'Format', fr: 'Format' },
  'deck.year': { en: 'Year', fr: 'Année' },
  'deck.archetype': { en: 'Archetype', fr: 'Archétype' },
  'deck.period': { en: 'Period', fr: 'Période' },
  'deck.summary': { en: 'Summary', fr: 'Résumé' },
  'deck.key_cards': { en: 'Key cards', fr: 'Cartes clés' },
  'deck.decklists': { en: 'Decklists', fr: 'Listes de deck' },
  'deck.decklist_pending': { en: 'Decklist coming soon', fr: 'Decklist en cours d\'ajout' },
  'deck.view_decklists': { en: 'View representative decklists', fr: 'Voir les listes représentatives' },
  'deck.not_found': { en: 'Deck not found', fr: 'Deck introuvable' },
  'deck.no_match': { en: 'No deck matching', fr: 'Aucun deck correspondant à' },
  'deck.in_archive': { en: 'in the archive', fr: 'dans l\'archive' },

  'formats.title': { en: 'Formats', fr: 'Formats' },
  'formats.subtitle': { en: 'Browse the archive by competitive format.', fr: 'Parcourez l\'archive par format compétitif.' },
  'formats.years_documented': { en: 'year(s) documented', fr: 'année(s) documentée(s)' },
  'formats.no_years': { en: 'No years documented for', fr: 'Aucune année documentée pour' },
  'formats.yet': { en: 'yet', fr: 'pour l\'instant' },
  'formats.documented_years': { en: 'Documented years', fr: 'Années documentées' },
  'formats.all': { en: 'All formats', fr: 'Tous les formats' },

  'glossary.title': { en: 'Glossary', fr: 'Glossaire' },
  'glossary.subtitle': { en: 'Archetype definitions and competitive terminology.', fr: 'Définitions des archétypes et terminologie compétitive.' },
  'glossary.archetypes': { en: 'Archetypes', fr: 'Archétypes' },
  'glossary.terms': { en: 'Terms', fr: 'Termes' },
  'glossary.examples': { en: 'Examples', fr: 'Exemples' },

  'about.title': { en: 'About', fr: 'À propos' },
  'about.subtitle': { en: 'What this project is and why it exists.', fr: 'Ce qu\'est ce projet et pourquoi il existe.' },
  'about.idea': { en: 'The idea', fr: 'L\'idée' },
  'about.idea.p1': {
    en: 'MTG Meta History is an editorial archive of competitive Magic: The Gathering metagames. The goal is to answer one question for any given year and format:',
    fr: 'MTG Meta History est une archive éditoriale des métagames compétitifs de Magic: The Gathering. L\'objectif est de répondre à une question pour chaque année et format :',
  },
  'about.idea.p2': {
    en: 'This is not a decklist database. It is an attempt to document the history of competitive metagames: which decks defined each era, why they dominated, and what eventually displaced them.',
    fr: 'Ce n\'est pas une base de données de decklists. C\'est une tentative de documenter l\'histoire des métagames compétitifs : quels decks ont défini chaque ère, pourquoi ils dominaient, et ce qui les a finalement remplacés.',
  },
  'about.approach': { en: 'Approach', fr: 'Approche' },
  'about.approach.p1': {
    en: 'Each year-format entry is researched using tournament results, coverage articles, ban announcements, and community archives. Data is split into meta eras reflecting how the competitive landscape shifted throughout the year.',
    fr: 'Chaque entrée année-format est recherchée à partir de résultats de tournois, d\'articles de couverture, d\'annonces d\'interdiction et d\'archives communautaires. Les données sont découpées en ères de métagame reflétant l\'évolution du paysage compétitif au cours de l\'année.',
  },
  'about.approach.p2': {
    en: 'Every era carries a confidence rating. Where sources are abundant and concordant, confidence is high. For older formats or periods with limited coverage, confidence is noted as medium or low.',
    fr: 'Chaque ère porte un niveau de confiance. Lorsque les sources sont abondantes et concordantes, la confiance est élevée. Pour les formats anciens ou les périodes peu couvertes, la confiance est notée comme moyenne ou basse.',
  },
  'about.not': { en: 'What this is not', fr: 'Ce que ce n\'est pas' },
  'about.contributing': { en: 'Contributing', fr: 'Contribuer' },
  'about.contributing.p': {
    en: 'See the project README and AGENTS.md for instructions on how to add year-format entries with proper sourcing and editorial tone.',
    fr: 'Consultez le README du projet et AGENTS.md pour les instructions sur l\'ajout d\'entrées année-format avec les sources appropriées et le ton éditorial.',
  },

  'filter.all': { en: 'All', fr: 'Tous' },
  'filter.label': { en: 'Filter', fr: 'Filtre' },

  'confidence.high': { en: 'High confidence', fr: 'Confiance élevée' },
  'confidence.medium': { en: 'Medium confidence', fr: 'Confiance moyenne' },
  'confidence.low': { en: 'Low confidence', fr: 'Confiance basse' },

  'ban.date': { en: 'Date', fr: 'Date' },
  'ban.cards': { en: 'Cards', fr: 'Cartes' },
  'ban.explanation': { en: 'Explanation', fr: 'Explication' },

  'notfound.title': { en: '404', fr: '404' },
  'notfound.subtitle': { en: 'Page not found.', fr: 'Page introuvable.' },
  'notfound.back': { en: 'Back to home', fr: 'Retour à l\'accueil' },

  'no_results': { en: 'No data for this filter yet.', fr: 'Aucune donnée pour ce filtre.' },
}

export function t(key: string): string {
  const entry = translations[key]
  if (!entry) return key
  return entry[locale.value] || entry.en || key
}

export function useI18n() {
  return {
    locale,
    t: (key: string) => computed(() => {
      const entry = translations[key]
      if (!entry) return key
      return entry[locale.value] || entry.en || key
    }),
    setLocale,
    toggleLocale,
  }
}

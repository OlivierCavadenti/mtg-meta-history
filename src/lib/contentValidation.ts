import type { YearFormatEntry, FormatId } from '../data/types'

const VALID_FORMATS: FormatId[] = [
  'standard', 'modern', 'legacy', 'vintage', 'extended', 'pioneer', 'old-school', 'premodern',
]

export type ValidationError = {
  path: string
  message: string
}

export function validateEntry(entry: YearFormatEntry): ValidationError[] {
  const errors: ValidationError[] = []
  const prefix = `${entry.year}.${entry.format}`

  if (entry.year < 1993 || entry.year > new Date().getFullYear() + 1) {
    errors.push({ path: prefix, message: `Invalid year: ${entry.year}` })
  }

  if (!VALID_FORMATS.includes(entry.format)) {
    errors.push({ path: prefix, message: `Invalid format: ${entry.format}` })
  }

  if (!entry.title.trim()) {
    errors.push({ path: prefix, message: 'Missing title' })
  }

  if (!entry.summary.trim()) {
    errors.push({ path: prefix, message: 'Missing summary' })
  }

  if (entry.eras.length === 0) {
    errors.push({ path: prefix, message: 'No eras defined' })
  }

  const slugs = new Set<string>()

  for (const era of entry.eras) {
    const eraPath = `${prefix} > ${era.id}`

    if (!era.start || !era.end) {
      errors.push({ path: eraPath, message: 'Missing start or end date' })
    }

    if (era.dominantDecks.length === 0) {
      errors.push({ path: eraPath, message: 'No dominant decks listed' })
    }

    if (!era.confidence) {
      errors.push({ path: eraPath, message: 'Missing confidence level' })
    }

    if (era.sources.length === 0) {
      errors.push({ path: eraPath, message: 'No sources provided' })
    }
  }

  for (const deck of entry.representativeDecks) {
    if (slugs.has(deck.slug)) {
      errors.push({ path: prefix, message: `Duplicate deck slug: ${deck.slug}` })
    }
    slugs.add(deck.slug)

    if (deck.keyCards.length === 0) {
      errors.push({ path: `${prefix} > deck:${deck.slug}`, message: 'No key cards listed' })
    }
  }

  return errors
}

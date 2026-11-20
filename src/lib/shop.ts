import type { CardLine, DeckList, PriceFile } from '../data/types'
import type { Locale } from './i18n'

export type Currency = 'EUR' | 'USD'

export type DeckPrice = {
  total: number
  /** cards in the list (copies) without a price in this currency */
  missing: number
  /** priced lines, most expensive first */
  lines: { name: string; count: number; sub: number }[]
}

/** Main deck and sideboard as one shopping list, copies added up. */
export function buyList(list: DeckList): CardLine[] {
  const counts = new Map<string, number>()
  for (const [n, name] of [...list.main, ...list.side]) counts.set(name, (counts.get(name) ?? 0) + n)
  return [...counts].map(([name, n]): CardLine => [n, name])
}

export function deckPrice(lines: CardLine[], prices: PriceFile, currency: Currency): DeckPrice {
  const i = currency === 'EUR' ? 0 : 1
  let total = 0
  let missing = 0
  const priced: DeckPrice['lines'] = []
  for (const [count, name] of lines) {
    const p = prices.cards[name]?.[i]
    if (p == null) {
      missing += count
      continue
    }
    total += count * p
    priced.push({ name, count, sub: count * p })
  }
  priced.sort((a, b) => b.sub - a.sub)
  return { total, missing, lines: priced }
}

export function formatPrice(value: number, currency: Currency, locale: Locale): string {
  return value.toLocaleString(locale === 'fr' ? 'fr-FR' : 'en-US', {
    style: 'currency',
    currency,
    // whole units once the amount makes cents irrelevant
    maximumFractionDigits: value >= 100 ? 0 : 2,
    minimumFractionDigits: value >= 100 ? 0 : 2,
  })
}

/** "4 Lightning Bolt" lines, the format every store import accepts. */
export function listText(lines: CardLine[], separator = '\n'): string {
  return lines.map(([n, name]) => `${n} ${name}`).join(separator)
}

/** TCGplayer Mass Entry, prefilled. */
export function tcgplayerUrl(lines: CardLine[]): string {
  return `https://www.tcgplayer.com/massentry?productline=Magic&c=${encodeURIComponent(listText(lines, '||'))}`
}

/** Card Kingdom Deck Builder, prefilled. */
export function cardKingdomUrl(lines: CardLine[]): string {
  return `https://www.cardkingdom.com/builder?c=${encodeURIComponent(listText(lines))}`
}

/** Cardmarket has no prefilled import: its wants lists take a pasted list. */
export function cardmarketWantsUrl(locale: Locale): string {
  return `https://www.cardmarket.com/${locale}/Magic/Wants`
}

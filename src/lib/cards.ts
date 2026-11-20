import type { CardInfo } from '../data/types'

const CDN = 'https://cards.scryfall.io'

export type ImageVersion = 'art_crop' | 'normal' | 'large' | 'small'

/** Pass as `season` to get the newest regular printing (Universes Beyond reprints excluded). */
export const LATEST_PRINTING = 'latest'

/** Image of a card as printed during `season` (the deck's season) when known. */
export function cardImage(info: CardInfo | undefined, name: string, version: ImageVersion = 'normal', season?: string): string {
  if (info?.i) {
    const id = season === LATEST_PRINTING ? info.n || info.i : (season && info.e?.[season]) || info.i
    return `${CDN}/${version}/front/${id[0]}/${id[1]}/${id}.jpg`
  }
  return `https://api.scryfall.com/cards/named?exact=${encodeURIComponent(name)}&format=image&version=${version}`
}

export function scryfallSearch(name: string): string {
  return `https://scryfall.com/search?q=${encodeURIComponent(`!"${name}"`)}`
}

/** "{2}{W/U}{B}" -> ["2", "WU", "B"] (Scryfall symbol file names) */
export function manaSymbols(cost: string): string[] {
  const out: string[] = []
  const re = /\{([^}]+)\}/g
  let m: RegExpExecArray | null
  while ((m = re.exec(cost))) out.push(m[1].replace('/', ''))
  return out
}

export function symbolUrl(sym: string): string {
  return `https://svgs.scryfall.io/card-symbols/${encodeURIComponent(sym)}.svg`
}

export const BASIC_LANDS = new Set([
  'Plains', 'Island', 'Swamp', 'Mountain', 'Forest', 'Wastes',
  'Snow-Covered Plains', 'Snow-Covered Island', 'Snow-Covered Swamp', 'Snow-Covered Mountain', 'Snow-Covered Forest',
])

/** CSS custom property holding the row color of a card. */
export function cardTone(info: CardInfo | undefined): string {
  if (!info) return 'var(--tone-c)'
  if (info.t === 'land') return 'var(--tone-land)'
  const k = info.k
  if (k.length > 1) return 'var(--tone-m)'
  if (k.length === 0) return 'var(--tone-c)'
  return `var(--tone-${k.toLowerCase()})`
}

export function colorOrder(colors: string): string {
  const order = 'WUBRG'
  return [...colors].sort((a, b) => order.indexOf(a) - order.indexOf(b)).join('')
}

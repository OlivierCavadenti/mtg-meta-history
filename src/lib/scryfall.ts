const SCRYFALL_IMAGE_BASE = 'https://api.scryfall.com/cards/named'

export type ScryfallImageVersion = 'small' | 'normal' | 'large' | 'art_crop' | 'png' | 'border_crop'

// Always use the named API endpoint with version=normal/large to get the canonical
// card frame image. The bulk dump's image_uris sometimes points to showcase or
// borderless printings which can look like art-only renderings.
export function scryfallImageUrl(cardName: string, version: ScryfallImageVersion = 'normal'): string {
  return `${SCRYFALL_IMAGE_BASE}?exact=${encodeURIComponent(cardName)}&format=image&version=${version}`
}

export function scryfallCardUrl(cardName: string): string {
  return `https://scryfall.com/search?q=!"${encodeURIComponent(cardName)}"`
}

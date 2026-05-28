import { getCardImage } from './cardTypes'

const SCRYFALL_IMAGE_BASE = 'https://api.scryfall.com/cards/named'

export type ScryfallImageVersion = 'small' | 'normal' | 'large' | 'art_crop' | 'png' | 'border_crop'

export function scryfallImageUrl(cardName: string, version: ScryfallImageVersion = 'normal'): string {
  // Prefer direct CDN URL from the bulk index when available
  if (version === 'normal' || version === 'large') {
    const cached = getCardImage(cardName, version)
    if (cached) return cached
  }
  // Fallback to the API redirect endpoint
  return `${SCRYFALL_IMAGE_BASE}?exact=${encodeURIComponent(cardName)}&format=image&version=${version}`
}

export function scryfallCardUrl(cardName: string): string {
  return `https://scryfall.com/search?q=!"${encodeURIComponent(cardName)}"`
}

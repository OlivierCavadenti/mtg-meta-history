import type { FormatId } from './types'

export type FormatDef = {
  id: FormatId
  label: string
  /** true when the deck encyclopedia for this format is complete */
  ready: boolean
}

export const FORMATS: FormatDef[] = [
  { id: 'standard', label: 'Standard', ready: true },
  { id: 'pioneer', label: 'Pioneer', ready: true },
  { id: 'modern', label: 'Modern', ready: true },
  { id: 'legacy', label: 'Legacy', ready: true },
  { id: 'vintage', label: 'Vintage', ready: true },
  { id: 'pauper', label: 'Pauper', ready: true },
  { id: 'premodern', label: 'Premodern', ready: true },
  { id: 'limited', label: 'Limited', ready: true },
]

export function getFormat(id: string): FormatDef | undefined {
  return FORMATS.find((f) => f.id === id)
}

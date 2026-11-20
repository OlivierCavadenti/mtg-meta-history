import type { FormatId } from './types'

export type FormatDef = {
  id: FormatId
  label: string
  /** true when the deck encyclopedia for this format is complete */
  ready: boolean
}

export const FORMATS: FormatDef[] = [
  { id: 'standard', label: 'Standard', ready: true },
  { id: 'pioneer', label: 'Pioneer', ready: false },
  { id: 'modern', label: 'Modern', ready: true },
  { id: 'legacy', label: 'Legacy', ready: false },
  { id: 'vintage', label: 'Vintage', ready: false },
  { id: 'pauper', label: 'Pauper', ready: false },
  { id: 'premodern', label: 'Premodern', ready: true },
]

export function getFormat(id: string): FormatDef | undefined {
  return FORMATS.find((f) => f.id === id)
}

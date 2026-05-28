import type { FormatId } from './types'

export type FormatInfo = {
  id: FormatId
  name: string
  description: string
  yearsActive: string
  color: string
}

export const formats: FormatInfo[] = [
  {
    id: 'standard',
    name: 'Standard',
    description: 'The rotating format. Two to three years of the most recent sets.',
    yearsActive: '1995-present',
    color: 'var(--standard)',
  },
  {
    id: 'modern',
    name: 'Modern',
    description: 'Non-rotating. Cards from Eighth Edition and Mirrodin forward.',
    yearsActive: '2011-present',
    color: 'var(--modern)',
  },
  {
    id: 'pioneer',
    name: 'Pioneer',
    description: 'Non-rotating. Cards from Return to Ravnica forward.',
    yearsActive: '2019-present',
    color: 'var(--pioneer)',
  },
  {
    id: 'legacy',
    name: 'Legacy',
    description: 'Eternal format with a banlist. Nearly all printed cards are legal.',
    yearsActive: '1995-present',
    color: 'var(--legacy)',
  },
  {
    id: 'vintage',
    name: 'Vintage',
    description: 'The oldest format. Most cards legal, many restricted to one copy.',
    yearsActive: '1993-present',
    color: 'var(--vintage)',
  },
  {
    id: 'extended',
    name: 'Extended',
    description: 'A rotating format larger than Standard. Discontinued in 2013.',
    yearsActive: '1997-2013',
    color: 'var(--extended)',
  },
  {
    id: 'old-school',
    name: 'Old School',
    description: 'Community format using cards from 1993-1994.',
    yearsActive: '2007-present',
    color: 'var(--old-school)',
  },
  {
    id: 'premodern',
    name: 'Premodern',
    description: 'Community format using cards from Fourth Edition through Scourge.',
    yearsActive: '2012-present',
    color: 'var(--premodern)',
  },
]

export function getFormat(id: FormatId): FormatInfo | undefined {
  return formats.find((f) => f.id === id)
}

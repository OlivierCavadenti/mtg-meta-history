import type { YearFormatEntry, MetaEra } from '../data/types'
import { getAllEntries } from '../data/years'

export type TimelineItem = {
  year: number
  format: string
  era: MetaEra
  entry: YearFormatEntry
}

export function buildTimeline(): TimelineItem[] {
  const entries = getAllEntries()
  const items: TimelineItem[] = []
  for (const entry of entries) {
    for (const era of entry.eras) {
      items.push({ year: entry.year, format: entry.format, era, entry })
    }
  }
  return items.sort((a, b) => a.era.start.localeCompare(b.era.start))
}

export function getEraMonths(era: MetaEra): number {
  const [startYear, startMonth] = era.start.split('-').map(Number)
  const [endYear, endMonth] = era.end.split('-').map(Number)
  return (endYear - startYear) * 12 + (endMonth - startMonth)
}

import type { Source } from '../types'

export const commonSources: Record<string, Source> = {
  mtgtop8: {
    title: 'MTGTop8',
    url: 'https://www.mtgtop8.com/',
    publisher: 'MTGTop8',
    note: 'Tournament results and metagame breakdowns.',
  },
  mtggoldfish: {
    title: 'MTGGoldfish',
    url: 'https://www.mtggoldfish.com/',
    publisher: 'MTGGoldfish',
    note: 'Metagame shares, deck prices, and tournament results.',
  },
  wizards: {
    title: 'Wizards of the Coast',
    url: 'https://magic.wizards.com/',
    publisher: 'Wizards of the Coast',
    note: 'Official event coverage, ban announcements, and format rules.',
  },
}

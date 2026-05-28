import type { YearFormatEntry, FormatId } from '../types'
import { locale } from '../../lib/i18n'

import { standard1996 } from './1996.standard'
import { standard1997 } from './1997.standard'
import { standard1998 } from './1998.standard'
import { standard1999 } from './1999.standard'
import { standard2000 } from './2000.standard'
import { standard2001 } from './2001.standard'
import { standard2002 } from './2002.standard'
import { standard2003 } from './2003.standard'
import { standard2004 } from './2004.standard'
import { standard2005 } from './2005.standard'
import { standard2006 } from './2006.standard'
import { standard2007 } from './2007.standard'
import { standard2008 } from './2008.standard'
import { standard2009 } from './2009.standard'
import { standard2010 } from './2010.standard'
import { legacy2010 } from './2010.legacy'
import { extended2010 } from './2010.extended'
import { standard2011 } from './2011.standard'
import { legacy2011 } from './2011.legacy'
import { standard2012 } from './2012.standard'
import { standard2013 } from './2013.standard'
import { standard2014 } from './2014.standard'
import { standard2015 } from './2015.standard'
import { standard2016 } from './2016.standard'
import { standard2017 } from './2017.standard'
import { standard2018 } from './2018.standard'
import { standard2019 } from './2019.standard'
import { standard2020 } from './2020.standard'
import { standard2021 } from './2021.standard'
import { standard2022 } from './2022.standard'
import { standard2023 } from './2023.standard'
import { standard2024 } from './2024.standard'
import { standard2025 } from './2025.standard'
import { standard2026 } from './2026.standard'

import { standard1996Fr } from './1996.standard.fr'
import { standard1997Fr } from './1997.standard.fr'
import { standard1998Fr } from './1998.standard.fr'
import { standard1999Fr } from './1999.standard.fr'
import { standard2000Fr } from './2000.standard.fr'
import { standard2001Fr } from './2001.standard.fr'
import { standard2002Fr } from './2002.standard.fr'
import { standard2003Fr } from './2003.standard.fr'
import { standard2004Fr } from './2004.standard.fr'
import { standard2005Fr } from './2005.standard.fr'
import { standard2006Fr } from './2006.standard.fr'
import { standard2007Fr } from './2007.standard.fr'
import { standard2008Fr } from './2008.standard.fr'
import { standard2009Fr } from './2009.standard.fr'
import { standard2010Fr } from './2010.standard.fr'
import { legacy2010Fr } from './2010.legacy.fr'
import { extended2010Fr } from './2010.extended.fr'
import { standard2011Fr } from './2011.standard.fr'
import { legacy2011Fr } from './2011.legacy.fr'
import { standard2012Fr } from './2012.standard.fr'
import { standard2013Fr } from './2013.standard.fr'
import { standard2014Fr } from './2014.standard.fr'
import { standard2015Fr } from './2015.standard.fr'
import { standard2016Fr } from './2016.standard.fr'
import { standard2017Fr } from './2017.standard.fr'
import { standard2018Fr } from './2018.standard.fr'
import { standard2019Fr } from './2019.standard.fr'
import { standard2020Fr } from './2020.standard.fr'
import { standard2021Fr } from './2021.standard.fr'
import { standard2022Fr } from './2022.standard.fr'
import { standard2023Fr } from './2023.standard.fr'
import { standard2024Fr } from './2024.standard.fr'
import { standard2025Fr } from './2025.standard.fr'
import { standard2026Fr } from './2026.standard.fr'

const entriesEn: YearFormatEntry[] = [
  standard1996, standard1997, standard1998, standard1999,
  standard2000, standard2001, standard2002, standard2003, standard2004,
  standard2005, standard2006, standard2007, standard2008, standard2009,
  standard2010, legacy2010, extended2010,
  standard2011, legacy2011,
  standard2012, standard2013, standard2014, standard2015,
  standard2016, standard2017, standard2018, standard2019,
  standard2020, standard2021, standard2022, standard2023, standard2024, standard2025, standard2026,
]

const entriesFr: YearFormatEntry[] = [
  standard1996Fr, standard1997Fr, standard1998Fr, standard1999Fr,
  standard2000Fr, standard2001Fr, standard2002Fr, standard2003Fr, standard2004Fr,
  standard2005Fr, standard2006Fr, standard2007Fr, standard2008Fr, standard2009Fr,
  standard2010Fr, legacy2010Fr, extended2010Fr,
  standard2011Fr, legacy2011Fr,
  standard2012Fr, standard2013Fr, standard2014Fr, standard2015Fr,
  standard2016Fr, standard2017Fr, standard2018Fr, standard2019Fr,
  standard2020Fr, standard2021Fr, standard2022Fr, standard2023Fr, standard2024Fr, standard2025Fr, standard2026Fr,
]

function getEntries(): YearFormatEntry[] {
  return locale.value === 'fr' ? entriesFr : entriesEn
}

export function getAllEntries(): YearFormatEntry[] {
  return getEntries()
}

export function getEntry(year: number, format: FormatId): YearFormatEntry | undefined {
  return getEntries().find((e) => e.year === year && e.format === format)
}

export function getEntriesByYear(year: number): YearFormatEntry[] {
  return getEntries().filter((e) => e.year === year)
}

export function getEntriesByFormat(format: FormatId): YearFormatEntry[] {
  return getEntries().filter((e) => e.format === format).sort((a, b) => a.year - b.year)
}

export function getAvailableYears(): number[] {
  return [...new Set(getEntries().map((e) => e.year))].sort((a, b) => a - b)
}

export function getAvailableFormats(): FormatId[] {
  return [...new Set(getEntries().map((e) => e.format))]
}

export function findDeckBySlug(slug: string): { deck: YearFormatEntry['representativeDecks'][0]; entry: YearFormatEntry } | undefined {
  for (const entry of getEntries()) {
    const deck = entry.representativeDecks.find((d) => d.slug === slug)
    if (deck) return { deck, entry }
  }
  return undefined
}

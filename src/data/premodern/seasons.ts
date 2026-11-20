import type { Season } from '../types'

// Premodern: a community format whose card pool is fixed (Fourth Edition to Scourge, 1995–2003)
// and does not rotate. One season per calendar year of tournament data on mtgtop8; 2020 and
// 2021 are grouped (the first year has only a handful of results).
// Ids must match scripts/pipeline/seasons.premodern.json.
//
// Bans: from the official announcements on premodernmagic.com (blog, "Ban list" category).
// Only bans announced during the covered years are listed (Yawgmoth's Bargain, 2019, predates
// the data; the 2022 update only unbanned Show and Tell).
export const PREMODERN_SEASONS: Season[] = [
  { id: '2021', start: '2020-01-01', set: 'Fourth Edition – Scourge', bans: [] },
  { id: '2022', start: '2022-01-01', set: 'Fourth Edition – Scourge', bans: [] },
  { id: '2023', start: '2023-01-01', set: 'Fourth Edition – Scourge', bans: [
    // https://premodernmagic.com/blog/ban-list-update-2023/
    { date: '2023-07-15', cards: ['Land Tax'] },
  ] },
  { id: '2024', start: '2024-01-01', set: 'Fourth Edition – Scourge', bans: [] },
  { id: '2025', start: '2025-01-01', set: 'Fourth Edition – Scourge', bans: [] },
  { id: '2026', start: '2026-01-01', set: 'Fourth Edition – Scourge', bans: [
    // https://premodernmagic.com/blog/ban-list-update-2026/
    { date: '2026-01-18', cards: ['Parallax Tide'] },
  ] },
]

import type { Season } from '../types'

// Pioneer does not rotate: one season per calendar year. The format was announced on October 21,
// 2019; its first months are grouped with 2020. `set` names the set that opened the year.
// Ids must match scripts/pipeline/seasons.pioneer.json.
//
// Bans: from the official Banned & Restricted announcements (magicthegathering.com), as compiled
// in the MTG Wiki timeline (mtg.wiki/page/Banned_and_restricted_cards/Timeline). The initial ban
// list of the five fetch lands (October 21, 2019) and unbans are not listed.
export const PIONEER_SEASONS: Season[] = [
  { id: '2020', start: '2019-10-21', set: 'Throne of Eldraine', bans: [
    { date: '2019-11-04', cards: ['Felidar Guardian', 'Leyline of Abundance', 'Oath of Nissa'] },
    { date: '2019-11-11', cards: ['Veil of Summer'] },
    { date: '2019-12-02', cards: ['Field of the Dead', 'Once Upon a Time', "Smuggler's Copter"] },
    { date: '2019-12-16', cards: ['Oko, Thief of Crowns', 'Nexus of Fate'] },
    { date: '2020-08-03', cards: ['Inverter of Truth', 'Kethis, the Hidden Hand', 'Underworld Breach', 'Walking Ballista'] },
  ] },
  { id: '2021', start: '2021-01-01', set: 'Kaldheim', bans: [
    { date: '2021-02-15', cards: ['Balustrade Spy', 'Teferi, Time Raveler', 'Undercity Informer', "Uro, Titan of Nature's Wrath", 'Wilderness Reclamation'] },
  ] },
  { id: '2022', start: '2022-01-01', set: 'Kamigawa: Neon Dynasty', bans: [
    { date: '2022-03-07', cards: ['Lurrus of the Dream-Den'] },
    { date: '2022-06-07', cards: ['Expressive Iteration', 'Winota, Joiner of Forces'] },
  ] },
  { id: '2023', start: '2023-01-01', set: 'Phyrexia: All Will Be One', bans: [
    { date: '2023-12-04', cards: ['Karn, the Great Creator', 'Geological Appraiser'] },
  ] },
  { id: '2024', start: '2024-01-01', set: 'Murders at Karlov Manor', bans: [
    { date: '2024-08-26', cards: ['Amalia Benavides Aguirre', 'Sorin, Imperious Bloodlord'] },
    { date: '2024-12-16', cards: ['Jegantha, the Wellspring'] },
  ] },
  { id: '2025', start: '2025-01-01', set: 'Aetherdrift', bans: [
    { date: '2025-11-10', cards: ['Heartfire Hero'] },
  ] },
  { id: '2026', start: '2026-01-01', set: 'Lorwyn Eclipsed', bans: [
    { date: '2026-05-18', cards: ['Cori-Steel Cutter'] },
  ] },
]

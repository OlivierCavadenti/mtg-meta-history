import type { Season } from '../types'

// Legacy does not rotate: one season per calendar year. The format became independent of
// Vintage on September 20, 2004 (formerly Type 1.5); mtgtop8 has few results before 2007, so
// the first months are grouped with 2005 and 2006. `set` names the set that shaped the year.
// Ids must match scripts/pipeline/seasons.legacy.json.
//
// Bans: Legacy bans only (unbans and the format's initial list are not listed), from the
// official Banned & Restricted announcements as compiled in the MTG Wiki timeline
// (mtg.wiki/page/Banned_and_restricted_cards/Timeline). The May 2024 ban of every card that
// brings a sticker or an Attraction into the game names no card and is left out. Dates carry
// month precision only (day set to 01).
export const LEGACY_SEASONS: Season[] = [
  { id: '2006', start: '2004-09-20', set: 'Coldsnap', bans: [
    { date: '2005-09-01', cards: ['Imperial Seal'] },
  ] },
  { id: '2007', start: '2007-01-01', set: 'Future Sight', bans: [
    { date: '2007-06-01', cards: ['Flash'] },
    { date: '2007-09-01', cards: ['Shahrazad'] },
  ] },
  { id: '2008', start: '2008-01-01', set: 'Lorwyn', bans: [
    { date: '2008-09-01', cards: ['Time Vault'] },
  ] },
  { id: '2009', start: '2009-01-01', set: 'Zendikar', bans: [] },
  { id: '2010', start: '2010-01-01', set: 'Rise of the Eldrazi', bans: [
    { date: '2010-06-01', cards: ['Mystical Tutor'] },
    { date: '2010-12-01', cards: ['Survival of the Fittest'] },
  ] },
  { id: '2011', start: '2011-01-01', set: 'New Phyrexia', bans: [
    { date: '2011-09-01', cards: ['Mental Misstep'] },
  ] },
  { id: '2012', start: '2012-01-01', set: 'Innistrad', bans: [] },
  { id: '2013', start: '2013-01-01', set: 'Return to Ravnica', bans: [] },
  { id: '2014', start: '2014-01-01', set: 'Khans of Tarkir', bans: [] },
  { id: '2015', start: '2015-01-01', set: 'Magic Origins', bans: [
    { date: '2015-01-01', cards: ['Treasure Cruise'] },
    { date: '2015-09-01', cards: ['Dig Through Time'] },
  ] },
  { id: '2016', start: '2016-01-01', set: 'Oath of the Gatewatch', bans: [] },
  { id: '2017', start: '2017-01-01', set: 'Kaladesh', bans: [
    { date: '2017-04-01', cards: ["Sensei's Divining Top"] },
  ] },
  { id: '2018', start: '2018-01-01', set: 'Dominaria', bans: [
    { date: '2018-07-01', cards: ['Deathrite Shaman', 'Gitaxian Probe'] },
  ] },
  { id: '2019', start: '2019-01-01', set: 'Modern Horizons', bans: [
    { date: '2019-11-01', cards: ['Wrenn and Six'] },
  ] },
  { id: '2020', start: '2020-01-01', set: 'Ikoria', bans: [
    { date: '2020-03-01', cards: ['Underworld Breach'] },
    { date: '2020-05-01', cards: ['Lurrus of the Dream-Den', 'Zirda, the Dawnwaker'] },
  ] },
  { id: '2021', start: '2021-01-01', set: 'Modern Horizons 2', bans: [
    { date: '2021-02-01', cards: ["Arcum's Astrolabe", 'Dreadhorde Arcanist', 'Oko, Thief of Crowns'] },
  ] },
  { id: '2022', start: '2022-01-01', set: 'Dominaria United', bans: [
    { date: '2022-01-01', cards: ['Ragavan, Nimble Pilferer'] },
  ] },
  { id: '2023', start: '2023-01-01', set: 'The Lord of the Rings', bans: [
    { date: '2023-03-01', cards: ['Expressive Iteration', 'White Plume Adventurer'] },
  ] },
  { id: '2024', start: '2024-01-01', set: 'Modern Horizons 3', bans: [
    { date: '2024-08-01', cards: ['Grief'] },
    { date: '2024-12-01', cards: ['Psychic Frog', 'Vexing Bauble'] },
  ] },
  { id: '2025', start: '2025-01-01', set: 'Final Fantasy', bans: [
    { date: '2025-03-01', cards: ['Sowing Mycospawn', 'Troll of Khazad-dûm'] },
  ] },
  { id: '2026', start: '2026-01-01', set: 'Lorwyn Eclipsed', bans: [
    { date: '2026-05-01', cards: ['Undercity Informer'] },
    { date: '2026-06-01', cards: ['Candelabra of Tawnos'] },
    { date: '2026-08-01', cards: ['The Fantasticar'] },
  ] },
]

import type { Season } from '../types'

// Vintage does not rotate. mtgtop8 has few Vintage results before 2012 (none in 2006 or 2009),
// so 2003-2005, 2006-2008 and 2009-2011 are grouped; one season per calendar year afterwards.
// `set` names the set that shaped the season. Ids must match scripts/pipeline/seasons.vintage.json.
//
// Vintage restricts cards (one copy allowed) far more often than it bans them: `restricted`
// marks restrictions, the others are bans. Unrestrictions are not listed. Source: the official
// Banned & Restricted announcements as compiled in the MTG Wiki timeline
// (mtg.wiki/page/Banned_and_restricted_cards/Timeline). The May 2024 ban of every card that
// brings a sticker or an Attraction into the game names no card and is left out. Dates carry
// month precision only (day set to 01).
export const VINTAGE_SEASONS: Season[] = [
  { id: '2005', start: '2003-01-01', set: 'Mirrodin', bans: [
    { date: '2003-03-01', cards: ['Earthcraft', 'Entomb'], restricted: true },
    { date: '2003-06-01', cards: ['Gush', "Mind's Desire"], restricted: true },
    { date: '2003-12-01', cards: ['Burning Wish', 'Chrome Mox', "Lion's Eye Diamond"], restricted: true },
    { date: '2005-03-01', cards: ['Trinisphere'], restricted: true },
    { date: '2005-09-01', cards: ['Imperial Seal', 'Personal Tutor'], restricted: true },
  ] },
  { id: '2008', start: '2006-01-01', set: 'Future Sight', bans: [
    { date: '2007-06-01', cards: ['Gifts Ungiven'], restricted: true },
    { date: '2007-09-01', cards: ['Shahrazad'] },
    { date: '2008-06-01', cards: ['Brainstorm', 'Flash', 'Gush', 'Merchant Scroll', 'Ponder'], restricted: true },
    { date: '2008-09-01', cards: ['Time Vault'], restricted: true },
  ] },
  { id: '2011', start: '2009-01-01', set: 'Rise of the Eldrazi', bans: [
    { date: '2009-06-01', cards: ['Thirst for Knowledge'], restricted: true },
  ] },
  { id: '2012', start: '2012-01-01', set: 'Innistrad', bans: [] },
  { id: '2013', start: '2013-01-01', set: 'Return to Ravnica', bans: [] },
  { id: '2014', start: '2014-01-01', set: 'Khans of Tarkir', bans: [] },
  { id: '2015', start: '2015-01-01', set: 'Fate Reforged', bans: [
    { date: '2015-01-01', cards: ['Treasure Cruise'], restricted: true },
    { date: '2015-09-01', cards: ['Chalice of the Void', 'Dig Through Time'], restricted: true },
  ] },
  { id: '2016', start: '2016-01-01', set: 'Oath of the Gatewatch', bans: [
    { date: '2016-04-01', cards: ['Lodestone Golem'], restricted: true },
  ] },
  { id: '2017', start: '2017-01-01', set: 'Kaladesh', bans: [
    { date: '2017-04-01', cards: ['Gitaxian Probe', 'Gush'], restricted: true },
    { date: '2017-08-01', cards: ['Thorn of Amethyst', 'Monastery Mentor'], restricted: true },
  ] },
  { id: '2018', start: '2018-01-01', set: 'Dominaria', bans: [] },
  { id: '2019', start: '2019-01-01', set: 'War of the Spark', bans: [
    { date: '2019-08-01', cards: ['Karn, the Great Creator', 'Mental Misstep', 'Golgari Grave-Troll', 'Mystic Forge'], restricted: true },
    { date: '2019-11-01', cards: ['Narset, Parter of Veils'], restricted: true },
  ] },
  { id: '2020', start: '2020-01-01', set: 'Ikoria', bans: [
    { date: '2020-05-01', cards: ['Lurrus of the Dream-Den'] },
  ] },
  { id: '2021', start: '2021-01-01', set: 'Modern Horizons 2', bans: [] },
  { id: '2022', start: '2022-01-01', set: 'Dominaria United', bans: [] },
  { id: '2023', start: '2023-01-01', set: 'The Lord of the Rings', bans: [] },
  { id: '2024', start: '2024-01-01', set: 'Modern Horizons 3', bans: [
    { date: '2024-08-01', cards: ["Urza's Saga", 'Vexing Bauble'], restricted: true },
  ] },
  { id: '2025', start: '2025-01-01', set: 'Final Fantasy', bans: [] },
  { id: '2026', start: '2026-01-01', set: 'Lorwyn Eclipsed', bans: [
    { date: '2026-08-01', cards: ['The Fantasticar'], restricted: true },
  ] },
]

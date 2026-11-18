import type { Season } from '../types'

// Modern does not rotate: one season per calendar year (the first opens when the format
// was sanctioned, August 2011). `set` names the set that shaped the year.
// Ids must match scripts/pipeline/seasons.modern.json.
//
// Bans: Modern bans only (unbans are not listed), from the official Banned & Restricted
// announcements as compiled in the MTG Wiki timeline
// (mtg.fandom.com/wiki/Banned_and_restricted_cards/Timeline). The format's initial ban list
// (August 2011) is omitted. Dates carry month precision only (day set to 01).
export const MODERN_SEASONS: Season[] = [
  { id: '2011', start: '2011-08-01', set: 'Innistrad', bans: [
    { date: '2011-09-01', cards: ['Blazing Shoal', 'Cloudpost', "Green Sun's Zenith", 'Ponder', 'Preordain', 'Rite of Flame'] },
    { date: '2011-12-01', cards: ['Punishing Fire', 'Wild Nacatl'] },
  ] },
  { id: '2012', start: '2012-01-01', set: 'Return to Ravnica', bans: [] },
  { id: '2013', start: '2013-01-01', set: 'Theros', bans: [
    { date: '2013-01-01', cards: ['Bloodbraid Elf', 'Seething Song'] },
    { date: '2013-05-01', cards: ['Second Sunrise'] },
  ] },
  { id: '2014', start: '2014-01-01', set: 'Khans of Tarkir', bans: [
    { date: '2014-02-01', cards: ['Deathrite Shaman'] },
  ] },
  { id: '2015', start: '2015-01-01', set: 'Battle for Zendikar', bans: [
    { date: '2015-01-01', cards: ['Dig Through Time', 'Treasure Cruise', 'Birthing Pod'] },
  ] },
  { id: '2016', start: '2016-01-01', set: 'Oath of the Gatewatch', bans: [
    { date: '2016-01-01', cards: ['Splinter Twin', 'Summer Bloom'] },
    { date: '2016-04-01', cards: ['Eye of Ugin'] },
  ] },
  { id: '2017', start: '2017-01-01', set: 'Amonkhet', bans: [
    { date: '2017-01-01', cards: ['Gitaxian Probe', 'Golgari Grave-Troll'] },
  ] },
  { id: '2018', start: '2018-01-01', set: 'Dominaria', bans: [] },
  { id: '2019', start: '2019-01-01', set: 'Modern Horizons', bans: [
    { date: '2019-01-01', cards: ['Krark-Clan Ironworks'] },
    { date: '2019-07-01', cards: ['Bridge from Below'] },
    { date: '2019-08-01', cards: ['Hogaak, Arisen Necropolis', 'Faithless Looting'] },
  ] },
  { id: '2020', start: '2020-01-01', set: 'Ikoria', bans: [
    { date: '2020-01-01', cards: ['Oko, Thief of Crowns', 'Mox Opal', 'Mycosynth Lattice'] },
    { date: '2020-03-01', cards: ['Once Upon a Time'] },
    { date: '2020-07-01', cards: ["Arcum's Astrolabe"] },
  ] },
  { id: '2021', start: '2021-01-01', set: 'Modern Horizons 2', bans: [
    { date: '2021-02-01', cards: ['Field of the Dead', 'Mystic Sanctuary', 'Simian Spirit Guide', "Tibalt's Trickery", "Uro, Titan of Nature's Wrath"] },
  ] },
  { id: '2022', start: '2022-01-01', set: "The Brothers' War", bans: [
    { date: '2022-03-01', cards: ['Lurrus of the Dream-Den'] },
    { date: '2022-10-01', cards: ['Yorion, Sky Nomad'] },
  ] },
  { id: '2023', start: '2023-01-01', set: 'The Lord of the Rings', bans: [
    { date: '2023-12-01', cards: ['Fury', 'Up the Beanstalk'] },
  ] },
  { id: '2024', start: '2024-01-01', set: 'Modern Horizons 3', bans: [
    { date: '2024-03-01', cards: ['Violent Outburst'] },
    { date: '2024-08-01', cards: ['Grief', 'Nadu, Winged Wisdom'] },
    { date: '2024-12-01', cards: ['Amped Raptor', 'Jegantha, the Wellspring', 'The One Ring'] },
  ] },
  { id: '2025', start: '2025-01-01', set: 'Final Fantasy', bans: [
    { date: '2025-03-01', cards: ['Underworld Breach'] },
  ] },
  { id: '2026', start: '2026-01-01', set: 'Lorwyn Eclipsed', bans: [
    { date: '2026-05-01', cards: ["Phlage, Titan of Fire's Fury", 'Lotus Field'] },
  ] },
]

import type { Season } from '../types'

// Standard is split into seasons that open with the autumn set release
// (the historical rotation point). Season ids are referenced by the generated
// deck files in ./decks/{id}.json.
//
// Bans: Standard bans only, from the official Banned & Restricted announcements
// as compiled in the MTG Wiki timeline (mtg.fandom.com/wiki/Banned_and_restricted_cards/Timeline).
// Restrictions (pre-1997 Type II) are omitted.
export const STANDARD_SEASONS: Season[] = [
  { id: '1994', start: '1994-01-01', set: 'Revised · Fourth Edition', bans: [
    { date: '1995-11-01', cards: ['Channel'] },
  ] },
  { id: '1996', start: '1996-01-01', set: 'Ice Age · Alliances', bans: [
    { date: '1996-02-01', cards: ['Mind Twist'] },
  ] },
  { id: '1996-mir', start: '1996-10-08', set: 'Mirage', bans: [
    { date: '1997-06-01', cards: ['Zuran Orb'] },
  ] },
  { id: '1997-tmp', start: '1997-10-14', set: 'Tempest', bans: [] },
  { id: '1998-usg', start: '1998-10-12', set: "Urza's Saga", bans: [
    { date: '1998-12-01', cards: ['Tolarian Academy', 'Windfall'] },
    { date: '1999-03-01', cards: ['Dream Halls', 'Earthcraft', 'Fluctuator', 'Lotus Petal', 'Recurring Nightmare', 'Time Spiral', 'Memory Jar'] },
    { date: '1999-06-01', cards: ['Mind Over Matter'] },
  ] },
  { id: '1999-mmq', start: '1999-10-04', set: 'Mercadian Masques', bans: [] },
  { id: '2000-inv', start: '2000-10-02', set: 'Invasion', bans: [] },
  { id: '2001-ody', start: '2001-10-01', set: 'Odyssey', bans: [] },
  { id: '2002-ons', start: '2002-10-07', set: 'Onslaught', bans: [] },
  { id: '2003-mrd', start: '2003-10-02', set: 'Mirrodin', bans: [
    { date: '2004-06-20', cards: ['Skullclamp'] },
  ] },
  { id: '2004-chk', start: '2004-10-01', set: 'Champions of Kamigawa', bans: [
    { date: '2005-03-20', cards: ['Arcbound Ravager', 'Disciple of the Vault', 'Ancient Den', 'Darksteel Citadel', 'Great Furnace', 'Seat of the Synod', 'Tree of Tales', 'Vault of Whispers'] },
  ] },
  { id: '2005-rav', start: '2005-10-07', set: 'Ravnica', bans: [] },
  { id: '2006-tsp', start: '2006-10-06', set: 'Time Spiral', bans: [] },
  { id: '2007-lrw', start: '2007-10-12', set: 'Lorwyn', bans: [] },
  { id: '2008-ala', start: '2008-10-03', set: 'Shards of Alara', bans: [] },
  { id: '2009-zen', start: '2009-10-02', set: 'Zendikar', bans: [] },
  { id: '2010-som', start: '2010-10-01', set: 'Scars of Mirrodin', bans: [
    { date: '2011-06-20', cards: ['Jace, the Mind Sculptor', 'Stoneforge Mystic'] },
  ] },
  { id: '2011-isd', start: '2011-09-30', set: 'Innistrad', bans: [] },
  { id: '2012-rtr', start: '2012-10-05', set: 'Return to Ravnica', bans: [] },
  { id: '2013-ths', start: '2013-09-27', set: 'Theros', bans: [] },
  { id: '2014-ktk', start: '2014-09-26', set: 'Khans of Tarkir', bans: [] },
  { id: '2015-bfz', start: '2015-10-02', set: 'Battle for Zendikar', bans: [] },
  { id: '2016-kld', start: '2016-09-30', set: 'Kaladesh', bans: [
    { date: '2017-01-09', cards: ['Emrakul, the Promised End', "Smuggler's Copter", 'Reflector Mage'] },
    { date: '2017-04-26', cards: ['Felidar Guardian'] },
    { date: '2017-06-13', cards: ['Aetherworks Marvel'] },
  ] },
  { id: '2017-xln', start: '2017-09-29', set: 'Ixalan', bans: [
    { date: '2018-01-15', cards: ['Attune with Aether', 'Rogue Refiner', 'Ramunap Ruins', 'Rampaging Ferocidon'] },
  ] },
  { id: '2018-grn', start: '2018-10-05', set: 'Guilds of Ravnica', bans: [] },
  { id: '2019-eld', start: '2019-10-04', set: 'Throne of Eldraine', bans: [
    { date: '2019-10-21', cards: ['Field of the Dead'] },
    { date: '2019-11-18', cards: ['Oko, Thief of Crowns', 'Once Upon a Time', 'Veil of Summer'] },
    { date: '2020-06-01', cards: ['Agent of Treachery', 'Fires of Invention'] },
    { date: '2020-08-03', cards: ['Cauldron Familiar', 'Growth Spiral', 'Teferi, Time Raveler', 'Wilderness Reclamation'] },
  ] },
  { id: '2020-znr', start: '2020-09-25', set: 'Zendikar Rising', bans: [
    { date: '2020-09-28', cards: ["Uro, Titan of Nature's Wrath"] },
    { date: '2020-10-12', cards: ['Omnath, Locus of Creation', 'Lucky Clover', 'Escape to the Wilds'] },
  ] },
  { id: '2021-mid', start: '2021-09-24', set: 'Innistrad: Midnight Hunt', bans: [
    { date: '2022-01-25', cards: ["Alrund's Epiphany", 'Divide by Zero', 'Faceless Haven'] },
  ] },
  { id: '2022-dmu', start: '2022-09-09', set: 'Dominaria United', bans: [
    { date: '2022-10-10', cards: ['The Meathook Massacre'] },
    { date: '2023-05-29', cards: ['Fable of the Mirror-Breaker', 'Invoke Despair', 'Reckoner Bankbuster'] },
  ] },
  { id: '2023-woe', start: '2023-09-08', set: 'Wilds of Eldraine', bans: [] },
  { id: '2024-blb', start: '2024-08-02', set: 'Bloomburrow', bans: [
    { date: '2025-06-30', cards: ['Cori-Steel Cutter', "Abuelo's Awakening", 'Monstrous Rage', 'Heartfire Hero', 'Up the Beanstalk', 'Hopeless Nightmare', "This Town Ain't Big Enough"] },
  ] },
  { id: '2025-eoe', start: '2025-08-01', set: 'Edge of Eternities', bans: [
    { date: '2025-11-10', cards: ['Vivi Ornitier', 'Screaming Nemesis', "Proft's Eidetic Memory"] },
    { date: '2026-08-01', cards: ['Badgermole Cub', "Stormchaser's Talent", 'Gran-Gran'] },
  ] },
]

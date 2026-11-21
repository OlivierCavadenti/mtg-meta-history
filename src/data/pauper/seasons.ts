import type { Season } from '../types'

// Pauper (commons only) does not rotate. It has been a Magic Online format since December 2008
// and a sanctioned paper format since June 2019; mtgtop8 records its results from 2016, so the
// first season groups 2016 and 2017. One season per calendar year afterwards. `set` names the set
// that shaped the year. Ids must match scripts/pipeline/seasons.pauper.json.
//
// Bans: Pauper bans only (unbans are not listed; bans before 2016 predate the data), from the
// official Banned & Restricted announcements as compiled in the MTG Wiki timeline
// (mtg.wiki/page/Banned_and_restricted_cards/Timeline). The May 2024 ban of every card that
// brings a sticker or an Attraction into the game is reduced to the one card it named. Dates
// carry month precision only (day set to 01).
export const PAUPER_SEASONS: Season[] = [
  { id: '2017', start: '2016-01-01', set: 'Conspiracy: Take the Crown', bans: [
    { date: '2016-01-01', cards: ['Cloud of Faeries'] },
    { date: '2016-11-01', cards: ['Peregrine Drake'] },
  ] },
  { id: '2018', start: '2018-01-01', set: 'Dominaria', bans: [] },
  { id: '2019', start: '2019-01-01', set: 'Modern Horizons', bans: [
    { date: '2019-05-01', cards: ['Gush', 'Gitaxian Probe', 'Daze'] },
    { date: '2019-06-01', cards: ['High Tide', 'Hymn to Tourach', 'Sinkhole'] },
    { date: '2019-10-01', cards: ["Arcum's Astrolabe"] },
  ] },
  { id: '2020', start: '2020-01-01', set: 'Commander 2020', bans: [
    { date: '2020-07-01', cards: ['Expedition Map', 'Mystic Sanctuary'] },
  ] },
  { id: '2021', start: '2021-01-01', set: 'Modern Horizons 2', bans: [
    { date: '2021-01-01', cards: ['Fall from Favor'] },
    { date: '2021-09-01', cards: ['Chatterstorm', "Sojourner's Companion"] },
  ] },
  { id: '2022', start: '2022-01-01', set: 'Kamigawa: Neon Dynasty', bans: [
    { date: '2022-01-01', cards: ['Atog', "Bonder's Ornament", 'Prophetic Prism'] },
    { date: '2022-03-01', cards: ['Galvanic Relay', 'Disciple of the Vault'] },
    { date: '2022-09-01', cards: ['Aarakocra Sneak', 'Stirring Bard', 'Underdark Explorer', 'Vicious Battlerager'] },
  ] },
  { id: '2023', start: '2023-01-01', set: 'The Lord of the Rings: Tales of Middle-earth', bans: [
    { date: '2023-12-01', cards: ['Monastery Swiftspear'] },
  ] },
  { id: '2024', start: '2024-01-01', set: 'Modern Horizons 3', bans: [
    { date: '2024-05-01', cards: ['All That Glitters'] },
    { date: '2024-06-01', cards: ['Cranial Ram'] },
  ] },
  { id: '2025', start: '2025-01-01', set: 'Tarkir: Dragonstorm', bans: [
    { date: '2025-03-01', cards: ['Basking Broodscale', 'Kuldotha Rebirth', 'Deadly Dispute'] },
  ] },
  { id: '2026', start: '2026-01-01', set: 'Teenage Mutant Ninja Turtles', bans: [
    { date: '2026-06-01', cards: ['Seeker of Skybreak'] },
    { date: '2026-09-01', cards: ['Narcomoeba', 'Price of Progress'] },
  ] },
]

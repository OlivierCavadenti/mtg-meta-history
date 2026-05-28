const DECK_COLORS: Record<string, string> = {
  // Mono-color
  'Mono-Red': 'R', 'Mono-Red Aggro': 'R', 'Sligh': 'R', 'Red Deck Wins': 'R',
  'Boros Deck Wins': 'RW', 'Flores Red Deck Wins': 'R', 'Deadguy Red': 'R',
  'Ramunap Red': 'R', 'Atarka Red': 'RG',
  'Mono-Blue': 'U', 'Mono-Blue Tempo': 'U', 'Mono-Blue Tron': 'U', 'Mono-Blue Pickles': 'U',
  'Mono-Blue Devotion': 'U',
  'Mono-Black': 'B', 'Mono-Black Devotion': 'B', 'Mono-Black Control': 'B', 'MBC': 'B',
  'Suicide Black': 'B', 'Necropotence': 'B',
  'Mono-White': 'W', 'White Weenie': 'W', 'Mono-White Aggro': 'W',
  'Mono-Green': 'G', 'Mono-Green Aggro': 'G', 'Mono-Green Food': 'G', 'Mono-Green Beacon': 'G',
  'Mono-Green Landfall': 'G', 'Steel Leaf Stompy': 'G',

  // Two-color
  'UW Control': 'WU', 'UW Delver': 'WU', 'Azorius Control': 'WU', 'Azorius Soldiers': 'WU',
  'UW Caw-Blade': 'WU', 'Caw-Blade': 'WU', 'Darkblade': 'WUB',
  'UB Faeries': 'UB', 'Faeries': 'UB', 'UB Teachings': 'UB', 'UB Control': 'UB',
  'UB Midrange': 'UB', 'Dimir Midrange': 'UB', 'Dimir Rogues': 'UB', 'Dimir Demons': 'UB',
  'Psychatog': 'UB',
  'BR Aggro': 'BR', 'Rakdos Sacrifice': 'BR', 'Rakdos Midrange': 'BR', 'Machine Head': 'BR',
  'RG Aggro': 'RG', 'Gruul Aggro': 'RG', 'Gruul Adventures': 'RG', 'Gruul Mice': 'RG',
  'Gruul Prowess': 'RG',
  'GW Tokens': 'GW', 'Selesnya Landfall': 'GW', 'GW Slide': 'GW', 'Erhnam-Geddon': 'GW',
  'BW Aggro': 'WB', 'Hand in Hand': 'WB', 'Orzhov': 'WB',
  'UG Madness': 'UG', 'UG Survival Madness': 'UG', 'Simic Rhythm': 'UG',
  'Izzet Drakes': 'UR', 'Izzet Prowess': 'UR', 'Izzet Epiphany': 'UR', 'Izzet Dragons': 'UR',
  'Izzet Cauldron': 'UR',
  'BG Elves': 'BG', 'Golgari Midrange': 'BG',
  'RW Aggro': 'RW', 'Boros Aggro': 'RW', 'Boros Convoke': 'RW', 'Naya Runes': 'RWG',

  // Three-color
  'Jund': 'BRG', 'Jund Midrange': 'BRG',
  'Esper Control': 'WUB', 'Esper Midrange': 'WUB', 'Esper Doom': 'WUB',
  'Esper Legends': 'WUB', 'Esper Dragons': 'WUB', 'Esper Pixie': 'WUB', 'Solar Flare': 'WUB',
  'Esper Hero': 'WUB',
  'Grixis Midrange': 'UBR', 'Grixis': 'UBR', 'Grixis Control': 'UBR',
  'Naya': 'RGW', 'Naya Adventures': 'RGW', 'Naya Lightsaber': 'RGW', 'Zoo': 'RGW',
  'Naya Blitz': 'RGW',
  'Abzan Midrange': 'WBG', 'Abzan': 'WBG', 'Abzan Aggro': 'WBG', 'Doran': 'WBG',
  'Doran Rock': 'WBG',
  'Jeskai Fires': 'URW', 'Jeskai Tempo': 'URW', 'Jeskai Control': 'URW',
  'Jeskai Hinata': 'URW', 'Jeskai Black': 'URBW', 'Dark Jeskai': 'URBW',
  'UWR Flash': 'URW', 'UWR Control': 'URW',
  'Temur Reclamation': 'URG', 'Temur Energy': 'URG', 'RUG Delver': 'URG', 'RUG Control': 'URG',
  'Sultai Midrange': 'UBG', 'Sultai Ultimatum': 'UBG', 'BUG Delver': 'UBG',
  'Team America': 'UBG', 'Sultai Ramp': 'UBG',
  'Mardu Vehicles': 'RWB',

  // Special
  'Tooth and Nail': 'G', 'Ghazi-Glare': 'GW',
  'Heartbeat Combo': 'UG', 'ProsBloom': 'UBG',
  'Dragonstorm': 'R', 'Splinter Twin': 'UR',
  'Ravager Affinity': 'C', 'Affinity': 'C', 'Tempered Steel': 'W',
  'Valakut Ramp': 'RG', 'Mythic Conscription': 'WUG',
  'Omnath Adventures': 'WURG', 'Omnath Ramp': 'WURG',
  'Greater Gifts': 'WBG', 'Reveillark': 'WU',
  'Bant Company': 'WUG', 'Bant Control': 'WUG', 'Next Level Bant': 'WUG',
  'Fires of Yavimaya': 'RG', 'Fires': 'RG',
  'Counter-Rebel': 'WU', 'Rebels': 'W',
  'Go-Mar': 'WUB', 'Nether-Go': 'UB',
  'Wake': 'WUG', 'Mirari\'s Wake': 'WUG',
  'Goblin Bidding': 'R', 'Astral Slide': 'RW',
  'Draw-Go': 'U', 'Stasis': 'U',
  'CounterTop': 'WU', 'Merfolk': 'U', 'ANT': 'UB',
  'UW Stoneblade': 'WU', 'Maverick': 'WG',
  'Rally the Ancestors': 'WUBG', '4-Color Rally': 'WUBG',
  'Aetherworks Marvel': 'URG', 'Temur Marvel': 'URG',
  '4-Color Saheeli': 'WURG',
  'Five-Color Control': 'WUBRG', 'Domain Ramp': 'WUBRG', 'Domain Overlords': 'WUBRG',
  'Replenish': 'WU', 'Bargain': 'B', 'Tolarian Academy': 'U',
  'Recurring Nightmare': 'BG', 'Living Death': 'B',
  'Hatred': 'B',
  'Rising Waters': 'U',
  'GR Kessig Ramp': 'RG',
  'Wolf Run Ramp': 'RG',
  'The Aristocrats': 'RWB',
  'Azorius Omniscience': 'WU',
  'Dimir Excruciator': 'UB',

  // Legacy/Extended
  'GW Survival': 'GW', 'BUG Survival': 'UBG',
  '4-Color Control': 'WUBR',
  'Scapeshift': 'URG',
  'Loconto UW Control': 'WU',
  'Counter-Post': 'WU',
}

export function getDeckColors(deckName: string): string {
  if (DECK_COLORS[deckName]) return DECK_COLORS[deckName]

  const lower = deckName.toLowerCase()
  if (lower.includes('mono-red') || lower.includes('red aggro') || lower.includes('red deck')) return 'R'
  if (lower.includes('mono-blue')) return 'U'
  if (lower.includes('mono-black')) return 'B'
  if (lower.includes('mono-white')) return 'W'
  if (lower.includes('mono-green')) return 'G'
  if (lower.includes('jund')) return 'BRG'
  if (lower.includes('esper')) return 'WUB'
  if (lower.includes('grixis')) return 'UBR'
  if (lower.includes('naya')) return 'RGW'
  if (lower.includes('abzan')) return 'WBG'
  if (lower.includes('jeskai') || lower.includes('uwr')) return 'URW'
  if (lower.includes('temur') || lower.includes('rug')) return 'URG'
  if (lower.includes('sultai') || lower.includes('bug')) return 'UBG'
  if (lower.includes('mardu')) return 'RWB'
  if (lower.includes('boros')) return 'RW'
  if (lower.includes('izzet')) return 'UR'
  if (lower.includes('dimir')) return 'UB'
  if (lower.includes('gruul')) return 'RG'
  if (lower.includes('selesnya')) return 'GW'
  if (lower.includes('orzhov')) return 'WB'
  if (lower.includes('simic')) return 'UG'
  if (lower.includes('azorius') || lower.includes('uw ')) return 'WU'
  if (lower.includes('golgari') || lower.includes('bg ')) return 'BG'
  if (lower.includes('rakdos') || lower.includes('br ')) return 'BR'
  if (lower.includes('domain') || lower.includes('five-color') || lower.includes('5c')) return 'WUBRG'

  return ''
}

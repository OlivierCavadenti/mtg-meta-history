import type { ArchetypeType } from '../types'

export type ArchetypeInfo = {
  id: ArchetypeType
  name: string
  description: string
  examples: string[]
}

export const archetypes: ArchetypeInfo[] = [
  {
    id: 'aggro',
    name: 'Aggro',
    description: 'Wins by deploying cheap, efficient threats and attacking before the opponent can stabilize. Prioritizes speed and damage output.',
    examples: ['Boros Deck Wins', 'White Weenie', 'Mono-Red Aggro', 'Affinity'],
  },
  {
    id: 'control',
    name: 'Control',
    description: 'Wins by answering the opponent\'s threats with removal and counterspells, then deploying a few powerful finishers once the game is locked up.',
    examples: ['UW Control', 'Draw-Go', 'Esper Control', 'Mono-Blue'],
  },
  {
    id: 'combo',
    name: 'Combo',
    description: 'Wins by assembling a specific combination of cards that either wins the game immediately or generates an insurmountable advantage.',
    examples: ['Splinter Twin', 'Heartbeat Combo', 'Storm', 'Temur Reclamation'],
  },
  {
    id: 'midrange',
    name: 'Midrange',
    description: 'Wins through efficient threats and flexible answers. Aims to out-value aggro and out-pressure control, adapting its role depending on the matchup.',
    examples: ['Jund', 'Abzan', 'The Rock', 'Ghazi-Glare'],
  },
  {
    id: 'tempo',
    name: 'Tempo',
    description: 'Wins by deploying a cheap threat early and protecting it with disruption (counters, bounce, removal) while the opponent stumbles on mana or resources.',
    examples: ['Delver', 'Dimir Rogues', 'Faeries', 'Merfolk'],
  },
  {
    id: 'ramp',
    name: 'Ramp',
    description: 'Wins by accelerating mana production to cast game-ending spells far ahead of schedule. Trades early-game presence for late-game dominance.',
    examples: ['Tooth and Nail', 'Valakut Ramp', 'Tron', 'Omnath Ramp'],
  },
  {
    id: 'prison',
    name: 'Prison',
    description: 'Wins by preventing the opponent from executing their gameplan through lock pieces, resource denial, or repeated disruption.',
    examples: ['Stax', 'Lantern Control', 'Turbo Stasis', 'Death & Taxes'],
  },
  {
    id: 'hybrid',
    name: 'Hybrid',
    description: 'Combines elements of two or more archetypes. Often pairs a fair game with a combo finish, or mixes aggro pressure with control elements.',
    examples: ['Mythic Conscription', 'Caw-Blade', 'Splinter Twin (tempo-combo)', 'Death\'s Shadow'],
  },
]

export function getArchetype(id: ArchetypeType): ArchetypeInfo | undefined {
  return archetypes.find((a) => a.id === id)
}

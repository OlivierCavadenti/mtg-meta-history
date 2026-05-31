import type { YearFormatEntry } from '../types'

export const standard2010: YearFormatEntry = {
  year: 2010,
  format: 'standard',
  title: 'Standard 2010',
  subtitle: 'The Jund year',
  shortLabel: 'Jund & Jace',
  summary:
    'Standard 2010 opened with Jund as the clear deck to beat, a position it held for much of the year. The release of Worldwake brought Jace, the Mind Sculptor, enabling Mythic Conscription and UW Control to challenge Jund\'s dominance. The autumn rotation with Scars of Mirrodin shifted the landscape toward Valakut Ramp and renewed control strategies.',
  headlineDeck: 'Jund',
  eras: [
    {
      id: '2010-std-jund',
      name: 'Jund Era',
      start: '2010-01',
      end: '2010-04',
      dominantDecks: ['Jund'],
      challengers: ['Naya', 'Boros Bushwhacker', 'UW Control', 'Vampires'],
      keyCards: [
        { name: 'Bloodbraid Elf', role: 'Card advantage through cascade' },
        { name: 'Blightning', role: 'Discard plus damage' },
        { name: 'Sprouting Thrinax', role: 'Resilient threat' },
        { name: 'Putrid Leech', role: 'Efficient two-drop' },
        { name: 'Maelstrom Pulse', role: 'Versatile removal' },
      ],
      summary:
        'Jund was the defining deck of early 2010 Standard. Cascading Bloodbraid Elf into Blightning or removal gave the deck an unmatched combination of card advantage and pressure. Every other strategy was measured by its Jund matchup.',
      whyItDominated: [
        'Bloodbraid Elf cascade generated consistent two-for-ones',
        'Blightning attacked both hand and life total',
        'Sprouting Thrinax punished removal-heavy strategies',
        'The deck had no truly dead matchups in the field',
      ],
      whyItEnded:
        'Worldwake introduced Jace, the Mind Sculptor. Control and combo decks built around Jace began to match or exceed Jund\'s midrange power, shifting the meta toward blue strategies.',
      confidence: 'high',
      sources: [
        {
          title: 'Pro Tour San Diego 2010 coverage',
          publisher: 'Wizards of the Coast',
          url: 'https://mtg.fandom.com/wiki/2010_Pro_Tour_Season',
          date: '2010-02-19',
          note: 'Key event of the Jund-dominated era. Jund was the most-played deck.',
        },
        {
          title: 'MTGTop8 - Standard 2010 metagame',
          publisher: 'MTGTop8',
          url: 'https://www.mtgtop8.com/format?f=ST',
          note: 'Tournament results confirming Jund as the top-performing archetype.',
        },
      ],
    },
    {
      id: '2010-std-mythic',
      name: 'Mythic / Jace Era',
      start: '2010-04',
      end: '2010-10',
      dominantDecks: ['Mythic Conscription', 'UW Control'],
      challengers: ['Jund', 'Naya Allies', 'Mono-Red', 'Next Level Bant'],
      keyCards: [
        { name: 'Jace, the Mind Sculptor', role: 'Card selection, bounce, and win condition' },
        { name: 'Sovereigns of Lost Alara', role: 'Fetched Eldrazi Conscription on attack' },
        { name: 'Eldrazi Conscription', role: 'One-shot kill aura' },
        { name: 'Noble Hierarch', role: 'Mana acceleration and exalted' },
        { name: 'Baneslayer Angel', role: 'Premium finisher' },
      ],
      summary:
        'Jace, the Mind Sculptor\'s arrival reshaped Standard. Mythic Conscription combined Jace with Sovereigns of Lost Alara to create a deck that could both control the game and threaten a one-shot kill. UW Control leveraged Jace alongside Day of Judgment and planeswalker suites. Jund remained competitive but no longer commanded the format.',
      whyItDominated: [
        'Jace, the Mind Sculptor provided unmatched card advantage and board control',
        'Sovereigns into Conscription threatened lethal from minimal board states',
        'Noble Hierarch accelerated into both Jace and Sovereigns',
        'The deck combined tempo, card advantage, and a combo finish',
      ],
      whyItEnded:
        'The October 2010 rotation removed Alara block (including Bloodbraid Elf, Sovereigns, and Noble Hierarch) and M10. The meta reset around Scars of Mirrodin.',
      confidence: 'high',
      sources: [
        {
          title: 'US Nationals 2010 coverage',
          publisher: 'Wizards of the Coast',
          url: 'https://mtg.fandom.com/wiki/National_Championship',
          date: '2010-08-20',
          note: 'Shows diversity of Jace-based archetypes in mid-2010.',
        },
      ],
    },
    {
      id: '2010-std-valakut',
      name: 'Valakut Ramp Emerges',
      start: '2010-10',
      end: '2010-12',
      dominantDecks: ['Valakut Ramp'],
      challengers: ['UW Control', 'White Weenie Quest', 'Vampires', 'RUG Control'],
      keyCards: [
        { name: 'Valakut, the Molten Pinnacle', role: 'Win condition as a land' },
        { name: 'Primeval Titan', role: 'Fetched Mountains and Valakut copies' },
        { name: 'Cultivate', role: 'Ramp spell' },
        { name: 'Jace, the Mind Sculptor', role: 'Control win condition (still legal)' },
      ],
      summary:
        'After rotation, Valakut Ramp emerged as the new deck to beat. Primeval Titan fetching Valakut, the Molten Pinnacle created a ramp deck that could deal 18+ damage from a single resolved six-drop. UW Control and various aggro strategies competed for the rest of the field.',
      whyItDominated: [
        'Primeval Titan plus Valakut was often immediately lethal',
        'Ramp spells provided consistency reaching six mana',
        'The deck punished slow starts and durdling',
        'Land-based win conditions dodged most interaction',
      ],
      whyItEnded:
        'The format continued to evolve in early 2011 with Mirrodin Besieged and eventually Caw-Blade took over. Jace remained dominant but the supporting cast changed.',
      confidence: 'high',
      sources: [
        {
          title: 'Worlds 2010 coverage',
          publisher: 'Wizards of the Coast',
          url: 'https://mtg.fandom.com/wiki/2010_World_Championships',
          date: '2010-12-09',
          note: 'World Championship showing the post-rotation Standard metagame.',
        },
      ],
    },
  ],
  setReleases: [
    { date: '2010-02-05', name: 'Worldwake', code: 'WWK', note: 'Introduced Jace, the Mind Sculptor' },
    { date: '2010-04-23', name: 'Rise of the Eldrazi', code: 'ROE' },
    { date: '2010-07-16', name: 'Magic 2011', code: 'M11' },
    { date: '2010-10-01', name: 'Scars of Mirrodin', code: 'SOM', note: 'Standard rotation: Shards of Alara block and M10 rotate out' },
  ],
  representativeDecks: [
    {
      name: 'Jund',
      slug: 'jund-standard-2010',
      period: 'Jund Era',
      archetype: 'midrange',
      summary:
        'The defining midrange deck of 2010 Standard. Bloodbraid Elf cascades into Blightning, Maelstrom Pulse, or Lightning Bolt for two-for-one value every turn. Putrid Leech and Sprouting Thrinax fill the curve with resilient bodies. Grinds out fair decks but pressured by dedicated combo and burn.',
      keyCards: ['Bloodbraid Elf', 'Blightning', 'Sprouting Thrinax', 'Putrid Leech', 'Maelstrom Pulse', 'Lightning Bolt'],
      decklistPending: true,
    },
    {
      name: 'Mythic Conscription',
      slug: 'mythic-conscription-standard-2010',
      period: 'Mythic / Jace Era',
      archetype: 'hybrid',
      summary:
        'A green-white-blue ramp-aggro hybrid that uses Noble Hierarch and Knight of the Reliquary to ramp into Sovereigns of Lost Alara, fetching Eldrazi Conscription for a one-shot kill. Jace, the Mind Sculptor protects the combo. Explosive but vulnerable to instant-speed removal.',
      keyCards: ['Jace, the Mind Sculptor', 'Sovereigns of Lost Alara', 'Eldrazi Conscription', 'Noble Hierarch', 'Knight of the Reliquary'],
      decklistPending: true,
    },
    {
      name: 'UW Control',
      slug: 'uw-control-standard-2010',
      period: 'Mythic / Jace Era',
      archetype: 'control',
      summary:
        'A blue-white control deck anchored by Jace, the Mind Sculptor as the format\'s premier planeswalker. Day of Judgment sweeps creatures, Wall of Omens cantrips and blocks, Baneslayer Angel closes from a stable board. Outvalues fair decks but pressured by Jund\'s cascade and combo.',
      keyCards: ['Jace, the Mind Sculptor', 'Day of Judgment', 'Wall of Omens', 'Baneslayer Angel', 'Oblivion Ring'],
      decklistPending: true,
    },
    {
      name: 'Valakut Ramp',
      slug: 'valakut-ramp-standard-2010',
      period: 'Valakut Ramp Emerges',
      archetype: 'ramp',
      summary:
        'A red-green ramp deck that uses Cultivate and Oracle of Mul Daya to accelerate into Primeval Titan fetching Valakut, the Molten Pinnacle and a Mountain for direct damage. Avenger of Zendikar closes via landfall tokens. Inevitable but vulnerable to fast clocks and counterspells.',
      keyCards: ['Valakut, the Molten Pinnacle', 'Primeval Titan', 'Cultivate', 'Oracle of Mul Daya', 'Avenger of Zendikar'],
      decklistPending: true,
    },
  
    {
      name: 'Naya',
      slug: 'naya-standard-2010',
      period: 'Jund Era',
      archetype: 'midrange',
      summary:
        'A red-green-white midrange deck where Knight of the Reliquary scales with sacrificed lands and Bloodbraid Elf cascades into value. Ranger of Eos refills with one-drops, Baneslayer Angel stabilizes, Noble Hierarch accelerates. Balanced between aggro and midrange but pressured by sweepers.',
      keyCards: ['Knight of the Reliquary', 'Bloodbraid Elf', 'Ranger of Eos', 'Baneslayer Angel', 'Noble Hierarch'],
      decklistPending: true,
    },
    {
      name: 'Boros Bushwhacker',
      slug: 'boros-bushwhacker-standard-2010',
      period: 'Jund Era',
      archetype: 'aggro',
      summary:
        'A red-white landfall aggro deck that floods the board with Steppe Lynx and Plated Geopede, then ends games with Goblin Bushwhacker giving haste and a global pump. Lightning Bolt clears blockers, Ranger of Eos refills. Punishes slow openings but folds to early sweepers.',
      keyCards: ['Goblin Bushwhacker', 'Steppe Lynx', 'Plated Geopede', 'Lightning Bolt', 'Ranger of Eos'],
      decklistPending: true,
    },
    {
      name: 'Vampires',
      slug: 'vampires-standard-2010',
      period: 'Jace, the Mind Sculptor',
      archetype: 'aggro',
      summary:
        'A mono-black tribal aggro-midrange shell built on Vampire Lacerator and Vampire Nighthawk for early pressure with lifelink and deathtouch. Bloodghast recurs from the graveyard via landfall, Gatekeeper of Malakir removes a creature on cast, Malakir Bloodwitch drains for the win. Resilient against fair decks but vulnerable to exile removal.',
      keyCards: ['Bloodghast', 'Vampire Nighthawk', 'Gatekeeper of Malakir', 'Malakir Bloodwitch', 'Vampire Lacerator'],
      decklistPending: true,
    },
    {
      name: 'Naya Allies',
      slug: 'naya-allies-standard-2010',
      period: 'Mythic / Jace Era',
      archetype: 'aggro',
      summary:
        'A red-green-white Ally tribal deck that snowballs board state — every new Ally pumps Hada Freeblade and Kazandu Blademaster while triggering Talus Paladin\'s lifelink and Ondu Cleric\'s life gain. Harabaz Druid ramps multicolor. Grows fast but folds to sweepers.',
      keyCards: ['Hada Freeblade', 'Kazandu Blademaster', 'Ondu Cleric', 'Talus Paladin', 'Harabaz Druid'],
      decklistPending: true,
    },
    {
      name: 'Mono-Red',
      slug: 'mono-red-standard-2010',
      period: 'Mythic / Jace Era',
      archetype: 'aggro',
      summary:
        'A mono-red aggro deck running Goblin Guide, Plated Geopede, and Ball Lightning backed by Lightning Bolt and Searing Blaze for burn. Aims to deal twenty damage by turn four. Punishes greedy mana bases but vulnerable to lifegain and early sweepers.',
      keyCards: ['Goblin Guide', 'Lightning Bolt', 'Searing Blaze', 'Plated Geopede', 'Ball Lightning'],
      decklistPending: true,
    },
    {
      name: 'Next Level Bant',
      slug: 'next-level-bant-standard-2010',
      period: 'Mythic / Jace Era',
      archetype: 'midrange',
      summary:
        'A green-white-blue midrange deck that ramps with Noble Hierarch into Knight of the Reliquary and Jace, the Mind Sculptor. Stoneforge Mystic tutors equipment, Baneslayer Angel stabilizes. Strong against fair midrange but pressured by combo and burn.',
      keyCards: ['Noble Hierarch', 'Jace, the Mind Sculptor', 'Knight of the Reliquary', 'Stoneforge Mystic', 'Baneslayer Angel'],
      decklistPending: true,
    },
    {
      name: 'White Weenie Quest',
      slug: 'white-weenie-quest-standard-2010',
      period: 'Valakut Ramp Emerges',
      archetype: 'aggro',
      summary:
        'A mono-white artifact aggro deck that races to four artifacts on Quest for the Holy Relic, then tutors Argentum Armor to crush the opponent. Mox Opal accelerates, Stoneforge Mystic acts as backup tutor, Steppe Lynx applies early pressure. Explosive but fragile to artifact removal.',
      keyCards: ['Quest for the Holy Relic', 'Argentum Armor', 'Stoneforge Mystic', 'Steppe Lynx', 'Mox Opal'],
      decklistPending: true,
    },
    {
      name: 'RUG Control',
      slug: 'rug-control-standard-2010',
      period: 'Valakut Ramp Emerges',
      archetype: 'control',
      summary:
        'A red-blue-green control deck that uses Lightning Bolt and Mana Leak for cheap interaction while Jace, the Mind Sculptor builds card advantage. Frost Titan and Inferno Titan close as flexible six-drops. Outvalues fair decks but slow against combo.',
      keyCards: ['Jace, the Mind Sculptor', 'Lightning Bolt', 'Mana Leak', 'Frost Titan', 'Inferno Titan'],
      decklistPending: true,
    },
  ],
}

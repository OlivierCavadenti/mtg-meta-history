import type { YearFormatEntry } from '../types'

export const standard2003: YearFormatEntry = {
  year: 2003,
  format: 'standard',
  title: 'Standard 2003',
  subtitle: 'Goblins, Wake, and the cycling machine',
  shortLabel: 'Goblin Bidding era',
  summary:
    'Standard 2003 showcased one of the most balanced and diverse competitive formats in Magic history. The Onslaught-Odyssey intersection created a metagame where Goblin Bidding, Mirari\'s Wake, UG Madness, Mono-Black Control, and Astral Slide all competed at the highest level. Daniel Zink won Worlds 2003 in Berlin with Wake, but every major archetype had representation in the Top 8. The arrival of Mirrodin in October introduced artifacts that would eventually warp the format beyond recognition.',
  headlineDeck: 'Goblin Bidding',
  eras: [
    {
      id: '2003-std-tribal',
      name: 'Tribal Diversity',
      start: '2003-01',
      end: '2003-06',
      dominantDecks: ['Goblin Bidding', 'Wake'],
      challengers: ['UG Madness', 'Mono-Black Control', 'Astral Slide'],
      keyCards: [
        { name: 'Goblin Piledriver', role: 'Explosive damage that scaled with other Goblins' },
        { name: 'Patriarch\'s Bidding', role: 'Mass tribal reanimation, returned all Goblins from graveyard' },
        { name: 'Goblin Warchief', role: 'Haste and cost reduction for all Goblins' },
        { name: 'Mirari\'s Wake', role: 'Mana doubling and creature pump for control finishers' },
        { name: 'Astral Slide', role: 'Cycling trigger that blinked creatures for board control' },
      ],
      summary:
        'Legions in February added critical tribal creatures, completing Goblin Bidding as a top-tier strategy. The deck swarmed with cheap Goblins, then used Patriarch\'s Bidding to bring them all back after a board wipe. Wake decks went over the top with doubled mana and Decree of Justice. Astral Slide used cycling cards and Lightning Rift for incremental value. UG Madness and MBC remained competitive holdovers from 2002. This era represented a rare competitive equilibrium.',
      whyItDominated: [
        'Goblin Bidding combined aggro speed with a midgame recovery plan via Patriarch\'s Bidding',
        'Wake decks controlled the game then generated overwhelming card and mana advantage',
        'Astral Slide created inevitability through cycling triggers and Eternal Dragon recursion',
        'No single deck could beat all others, keeping the metagame healthy',
      ],
      whyItEnded:
        'Scourge in May and Eighth Edition in July provided incremental additions but didn\'t fundamentally shift the balance. The real change came with Mirrodin in October.',
      confidence: 'medium',
      sources: [
        {
          title: 'World Championship Decks/2003',
          publisher: 'MTG Wiki',
          url: 'https://mtg.fandom.com/wiki/World_Championship_Decks/2003',
          note: 'Daniel Zink won Worlds 2003 with Wake. Top 8 featured Wake, UG Madness, Astral Slide, Goblin Bidding, and Reanimator.',
        },
        {
          title: 'Worlds 2003 Standard event',
          publisher: 'MTGTop8',
          url: 'https://www.mtgtop8.com/event?e=9174&f=ST',
          note: 'Standard results from Worlds 2003 in Berlin.',
        },
      ],
    },
    {
      id: '2003-std-worlds',
      name: 'The Wake Championship',
      start: '2003-06',
      end: '2003-10',
      dominantDecks: ['Wake'],
      challengers: ['Goblin Bidding', 'Astral Slide', 'UW Control', 'Mono-Black Control'],
      keyCards: [
        { name: 'Decree of Justice', role: 'Uncounterable token generation via cycling, or hard-cast finisher' },
        { name: 'Eternal Dragon', role: 'Recursive threat that also fixed mana from the graveyard' },
        { name: 'Wrath of God', role: 'Board sweeper that reset aggro strategies' },
        { name: 'Compulsion', role: 'Card filtering that improved draw quality every turn' },
      ],
      summary:
        'Wake consolidated its position as the format\'s premier control deck heading into Worlds. Daniel Zink piloted the archetype to the 2003 World Championship in Berlin, defeating Jin Okamoto (also on Wake) in the finals. The deck used Mirari\'s Wake to double mana, then deployed Decree of Justice tokens or hard-cast threats to close the game. The Top 8 featured remarkable diversity: Wake, UG Madness, Astral Slide, Goblin Bidding, and Reanimator all appeared.',
      whyItDominated: [
        'Decree of Justice was nearly impossible to answer when cycled at end of turn',
        'Mirari\'s Wake plus Wrath of God meant the deck could sweep and rebuild faster than opponents',
        'Eternal Dragon provided recursive value in long games',
        'Compulsion smoothed draws and dumped flashback cards into the graveyard',
      ],
      whyItEnded:
        'Mirrodin\'s arrival in October brought artifact-centric strategies and the Urzatron. The rotation removed Odyssey block, taking Wild Mongrel, Psychatog, Cabal Coffers, and the entire madness engine with it.',
      confidence: 'medium',
      sources: [
        {
          title: 'Worlds 2003 coverage - Daniel Zink',
          publisher: 'MTG Wiki',
          url: 'https://mtg.fandom.com/wiki/World_Championship_Decks/2003',
          date: '2003-08-10',
          note: 'Daniel Zink won Worlds 2003 in Berlin with Wake, defeating Jin Okamoto in the finals.',
        },
      ],
    },
    {
      id: '2003-std-mirrodin',
      name: 'Goblin Bidding and Early Affinity',
      start: '2003-10',
      end: '2003-12',
      dominantDecks: ['Goblin Bidding', 'Affinity'],
      challengers: ['Wake', 'Astral Slide', 'UW Control'],
      keyCards: [
        { name: 'Chrome Mox', role: 'Free mana acceleration at the cost of a card' },
        { name: 'Isochron Scepter', role: 'Imprinted instants for repeatable effects' },
        { name: 'Oblivion Stone', role: 'Flexible board wipe for control decks' },
        { name: 'Broodstar', role: 'Massive flying affinity creature' },
      ],
      summary:
        'Mirrodin arrived with powerful artifact synergies. Early Affinity builds using Broodstar and artifact lands began to appear. Chrome Mox provided free acceleration for aggressive decks. The artifact lands seemed innocuous at first but would prove to be the foundation of the most dominant deck in Standard history. Goblin Bidding remained strong with the addition of new tools, but the seeds of Affinity\'s dominance were planted.',
      whyItDominated: [
        'Goblin Bidding retained its speed and Patriarch\'s Bidding recursion',
        'Early Affinity builds showed the potential of free mana from artifact lands',
        'Chrome Mox accelerated existing aggro strategies',
        'The format was still adapting to the power level of Mirrodin\'s artifact theme',
      ],
      whyItEnded:
        'Darksteel in February 2004 would add Arcbound Ravager and Skullclamp, transforming Affinity from a competitive deck into the most oppressive strategy Standard had seen since Combo Winter.',
      confidence: 'medium',
      sources: [
        {
          title: 'MTGTop8 - Standard late 2003',
          publisher: 'MTGTop8',
          url: 'https://www.mtgtop8.com/format?f=ST',
          note: 'Tournament results showing the early Mirrodin Standard metagame.',
        },
      ],
    },
  ],
  bans: [],
  setReleases: [
    { date: '2003-02-03', name: 'Legions', code: 'LGN', note: 'All-creature set completing tribal themes, adds Goblin Warchief' },
    { date: '2003-05-26', name: 'Scourge', code: 'SCG' },
    { date: '2003-07-28', name: 'Eighth Edition', code: '8ED' },
    { date: '2003-10-02', name: 'Mirrodin', code: 'MRD', note: 'Standard rotation: Odyssey block rotates out. Artifact block begins' },
  ],
  representativeDecks: [
    {
      name: 'Goblin Bidding',
      slug: 'goblin-bidding-standard-2003',
      period: 'Tribal Diversity',
      archetype: 'aggro',
      summary:
        'A red-black tribal aggro-combo using a critical mass of Goblins amplified by Goblin Warchief and Goblin Piledriver. Patriarch\'s Bidding returns every Goblin from the graveyard for a lethal swarm after a sweeper. Skirk Prospector and Siege-Gang Commander provide a backup burn finish. Crushes slow decks but vulnerable to graveyard hate.',
      keyCards: ['Goblin Piledriver', 'Goblin Warchief', 'Patriarch\'s Bidding', 'Skirk Prospector', 'Siege-Gang Commander'],
      decklistPending: true,
      source: {
        title: 'Worlds 2003 - Wolfgang Eder Goblin Bidding',
        publisher: 'MTG Wiki',
        url: 'https://mtg.fandom.com/wiki/World_Championship_Decks/2003',
      },
    },
    {
      name: 'Wake',
      slug: 'wake-standard-2003',
      period: 'The Wake Championship',
      archetype: 'control',
      summary:
        'A green-white-blue control deck that doubles mana with Mirari\'s Wake to fuel Decree of Justice for soldier armies and Wrath of God for sweepers. Eternal Dragon recurs as a finisher and cycler. Inevitable late game but slow against fast aggro.',
      keyCards: ['Mirari\'s Wake', 'Decree of Justice', 'Wrath of God', 'Compulsion', 'Eternal Dragon'],
      decklistPending: true,
      source: {
        title: 'Worlds 2003 - Daniel Zink Wake',
        publisher: 'MTG Wiki',
        url: 'https://mtg.fandom.com/wiki/World_Championship_Decks/2003',
      },
    },
    {
      name: 'Astral Slide',
      slug: 'astral-slide-standard-2003',
      period: 'Tribal Diversity',
      archetype: 'control',
      summary:
        'A control deck that loops creatures and cyclers with Astral Slide for repeated value, while Lightning Rift burns the opponent for every cycle. Eternal Dragon and Wrath of God lock down the board. Outvalues fair midrange but vulnerable to enchantment removal and fast combo.',
      keyCards: ['Astral Slide', 'Lightning Rift', 'Eternal Dragon', 'Wrath of God', 'Renewed Faith'],
      decklistPending: true,
      source: {
        title: 'MTGTop8 - Astral Slide decklists 2003',
        publisher: 'MTGTop8',
        url: 'https://www.mtgtop8.com/format?f=ST',
      },
    },
    {
      name: 'UG Madness',
      slug: 'ug-madness-standard-2003',
      period: 'Tribal Diversity',
      archetype: 'tempo',
      summary:
        'A blue-green tempo deck powered by madness — discarding Basking Rootwalla and Arrogant Wurm to Wild Mongrel for cheap explosive plays. Circular Logic counters key spells, Wonder grants flying. Fast and resilient, but folds to mass removal and graveyard hate.',
      keyCards: ['Wild Mongrel', 'Basking Rootwalla', 'Circular Logic', 'Arrogant Wurm', 'Wonder'],
      decklistPending: true,
      source: {
        title: 'Worlds 2003 - Dave Humpherys UG Madness',
        publisher: 'MTG Wiki',
        url: 'https://mtg.fandom.com/wiki/World_Championship_Decks/2003',
      },
    },
  ],
}

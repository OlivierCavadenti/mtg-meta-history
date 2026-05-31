import type { YearFormatEntry } from '../types'

export const standard2009: YearFormatEntry = {
  year: 2009,
  format: 'standard',
  title: 'Standard 2009',
  subtitle: 'From Faeries to Jund',
  shortLabel: 'Jund cascade era',
  summary:
    'The year began with Faeries still atop the metagame, but the format shifted dramatically across three phases. Gabriel Nassif won Pro Tour Kyoto in February with Five-Color Control, showcasing the power of Cruel Ultimatum. Alara Reborn in April unleashed Bloodbraid Elf and cascade, seeding the Jund archetype. After Zendikar rotated out Lorwyn block and Tenth Edition in October, Jund exploded into dominance, placing three players into the World Championship Top 8 in Rome where Andre Coimbra won with Naya Lightsaber.',
  headlineDeck: 'Jund',
  eras: [
    {
      id: '2009-std-faeries-five',
      name: 'Faeries vs. Five-Color Control',
      start: '2009-01',
      end: '2009-04',
      dominantDecks: ['UB Faeries', 'Five-Color Control'],
      challengers: ['BW Tokens', 'Kithkin Aggro', 'Boat Brew (RW)', 'Red Deck Wins'],
      keyCards: [
        { name: 'Bitterblossom', role: 'Persistent token engine for Faeries' },
        { name: 'Cruel Ultimatum', role: 'Seven-mana game-ending spell for Five-Color Control' },
        { name: 'Cryptic Command', role: 'Versatile counter and tempo play in both archetypes' },
        { name: 'Spectral Procession', role: 'Token generator powering BW Tokens and Kithkin' },
        { name: 'Reveillark', role: 'Value creature recurring threats from graveyard' },
      ],
      summary:
        'The early 2009 metagame was defined by the rivalry between UB Faeries and Five-Color Control. Gabriel Nassif won Pro Tour Kyoto in February with Five-Color Control, defeating Luis Scott-Vargas (BW Tokens) in the finals. The deck leveraged Vivid lands and Reflecting Pool to cast Cruel Ultimatum, Cryptic Command, and Esper Charm. Faeries remained a top contender with Bitterblossom, while aggressive decks like Boat Brew (Reveillark plus Ranger of Eos) and Kithkin kept the control decks honest.',
      whyItDominated: [
        'Cruel Ultimatum generated an insurmountable advantage when resolved',
        'Five-Color Control had answers to every strategy thanks to its broad card pool',
        'Faeries still had the best tempo gameplan in the format with flash threats',
        'Nassif\'s Pro Tour win legitimized Five-Color Control as the co-best deck',
      ],
      whyItEnded:
        'Alara Reborn introduced cascade cards, particularly Bloodbraid Elf, that would reshape the metagame by providing consistent two-for-one value that outclassed both Faeries\' tempo and control\'s card advantage.',
      confidence: 'high',
      sources: [
        {
          title: 'Pro Tour Kyoto 2009 coverage',
          publisher: 'MTGTop8',
          url: 'https://www.mtgtop8.com/event?e=411&f=ST',
          date: '2009-02-28',
          note: 'Gabriel Nassif won with Five-Color Control. Top 8 included Faeries, BW Tokens, and Kithkin.',
        },
        {
          title: 'Feature Article - Pro Tour: Kyoto Tournament Report (1st)',
          publisher: 'Star City Games',
          url: 'https://articles.starcitygames.com/articles/feature-article-pro-tour-kyoto-tournament-report-1st/',
          note: 'Nassif\'s own tournament report detailing his Five-Color Control strategy.',
        },
      ],
    },
    {
      id: '2009-std-cascade',
      name: 'Cascade Summer',
      start: '2009-04',
      end: '2009-10',
      dominantDecks: ['Jund (Pre-Rotation)', 'UB Faeries'],
      challengers: ['Five-Color Control', 'Kithkin', 'BW Tokens', 'Elves Combo', 'Time Sieve Combo'],
      keyCards: [
        { name: 'Bloodbraid Elf', role: 'Four-mana cascade threat generating two-for-one value' },
        { name: 'Maelstrom Pulse', role: 'Versatile removal hitting any nonland permanent' },
        { name: 'Bituminous Blast', role: 'Five-mana cascade removal spell' },
        { name: 'Anathemancer', role: 'Punished greedy manabases from the sideboard' },
        { name: 'Sprouting Thrinax', role: 'Resilient three-drop leaving behind tokens on death' },
      ],
      summary:
        'Alara Reborn\'s all-multicolor design introduced Bloodbraid Elf, Maelstrom Pulse, and Bituminous Blast. Jund began to coalesce as an archetype, playing the most efficient Jund-colored threats alongside cascade spells that generated consistent card advantage. Faeries still competed thanks to Bitterblossom, and Five-Color Control remained viable. M10 in July replaced Tenth Edition and introduced new cards but did not trigger a rotation. The meta was diverse but Jund was rising.',
      whyItDominated: [
        'Bloodbraid Elf cascading into Blightning or Maelstrom Pulse was devastating',
        'Cascade guaranteed two spells for the cost of one, outgrinding other fair decks',
        'Sprouting Thrinax and Putrid Leech provided resilient early threats',
        'Maelstrom Pulse answered any problematic permanent including planeswalkers',
      ],
      whyItEnded:
        'The October rotation with Zendikar removed Lorwyn block, Shadowmoor block, and Tenth Edition. Faeries lost Bitterblossom, Mistbind Clique, and Cryptic Command, effectively ending the archetype. Jund gained new tools and became the format\'s clear best deck.',
      confidence: 'high',
      sources: [
        {
          title: 'Bloodbraid Elf - MTG Throwback Thursday (2009)',
          publisher: 'Pojo.com',
          url: 'https://www.pojo.com/bloodbraid-elf-mtg-throwback-thursday-2009/',
          note: 'Retrospective on Bloodbraid Elf\'s impact as the number one card of 2009.',
        },
        {
          title: 'Alara Reborn Upgrades to the Standard Metagame',
          publisher: 'The Game I Hate',
          url: 'https://ihatemtg.wordpress.com/2009/05/13/metagameroundup/',
          date: '2009-05-13',
          note: 'Analysis of how Alara Reborn cards reshaped the Standard metagame.',
        },
      ],
    },
    {
      id: '2009-std-jund',
      name: 'Jund Dominance',
      start: '2009-10',
      end: '2009-12',
      dominantDecks: ['Jund'],
      challengers: ['Naya Lightsaber', 'Boros Bushwhacker', 'Mono-White Tokens', 'Spread \'Em (UW Spreading Seas)'],
      keyCards: [
        { name: 'Bloodbraid Elf', role: 'Cascade value engine and hasty threat' },
        { name: 'Sprouting Thrinax', role: 'Resilient creature generating tokens' },
        { name: 'Maelstrom Pulse', role: 'Universal permanent removal' },
        { name: 'Lightning Bolt', role: 'Efficient burn returned via M10' },
        { name: 'Broodmate Dragon', role: 'Top-end finisher creating two 4/4 bodies' },
        { name: 'Putrid Leech', role: 'Aggressive two-drop with pump ability' },
      ],
      summary:
        'After Zendikar rotated out Lorwyn-Shadowmoor and Tenth Edition, Jund became the undisputed best deck. Every card in the deck generated value: Bloodbraid Elf cascaded into Blightning or removal, Sprouting Thrinax left behind tokens, and Broodmate Dragon created two bodies. The deck was so dominant that Worlds 2009 in Rome saw three Jund players in the Top 8. Andre Coimbra won with Naya Lightsaber, one of the few decks fast and powerful enough to go over the top of Jund.',
      whyItDominated: [
        'Every creature generated card advantage through cascade, tokens, or recursion',
        'Lightning Bolt and Maelstrom Pulse gave the deck premium removal',
        'Blightning cascaded off Bloodbraid Elf devastated opponents\' hands',
        'The manabase from Shards of Alara provided consistent three-color support',
        'No single strategy could reliably beat Jund without losing to the rest of the field',
      ],
      whyItEnded:
        'Jund continued dominating well into 2010, only declining after Worldwake brought additional tools to competing archetypes and eventually Alara block rotated.',
      confidence: 'high',
      sources: [
        {
          title: '2009 World Championships coverage',
          publisher: 'MTG Wiki',
          url: 'https://mtg.fandom.com/wiki/2009_World_Championships',
          date: '2009-11-22',
          note: 'Three Jund players in Top 8. Andre Coimbra won with Naya Lightsaber. David Reitbauer finished 2nd with Jund.',
        },
        {
          title: 'Jund (2009) vs. Mono-Black Devotion (2013) - Best Standard Deck Ever',
          publisher: 'MTGGoldfish',
          url: 'https://www.mtggoldfish.com/articles/jund-2009-vs-mono-black-devotion-2013-best-standard-deck-ever-top-64',
          note: 'Analysis ranking 2009 Jund among the best Standard decks of all time.',
        },
        {
          title: 'MTGTop8 - Worlds 2009 Standard results',
          publisher: 'MTGTop8',
          url: 'https://www.mtgtop8.com/event?e=443&f=ST',
          note: 'Standard Top 8 from the 2009 World Championship in Rome.',
        },
      ],
    },
  ],
  bans: [],
  setReleases: [
    { date: '2009-02-06', name: 'Conflux', code: 'CON' },
    { date: '2009-04-30', name: 'Alara Reborn', code: 'ARB', note: 'First all-multicolor set. Introduced Bloodbraid Elf and Maelstrom Pulse' },
    { date: '2009-07-17', name: 'Magic 2010', code: 'M10', note: 'Core set rebranded with new cards. Lightning Bolt returned to Standard' },
    { date: '2009-10-02', name: 'Zendikar', code: 'ZEN', note: 'Standard rotation: Lorwyn block, Shadowmoor block, and Tenth Edition rotate out' },
  ],
  representativeDecks: [
    {
      name: 'Five-Color Control',
      slug: 'five-color-control-standard-2009',
      period: 'Faeries vs. Five-Color Control',
      archetype: 'control',
      summary:
        'An updated five-color control deck powered by Reflecting Pool and Vivid lands, with Cruel Ultimatum as the haymaker. Cryptic Command and Esper Charm provide interaction, Broodmate Dragon closes games. Outvalues fair decks but vulnerable to fast aggro and hand disruption.',
      keyCards: ['Cruel Ultimatum', 'Cryptic Command', 'Esper Charm', 'Broodmate Dragon', 'Reflecting Pool', 'Vivid Creek'],
      decklistPending: true,
      source: {
        title: 'Pro Tour Kyoto 2009 - Gabriel Nassif (1st)',
        publisher: 'MTGTop8',
        url: 'https://mtgtop8.com/event?e=411&d=138503&f=ST',
        date: '2009-02-28',
      },
    },
    {
      name: 'Jund',
      slug: 'jund-standard-2009',
      period: 'Jund Dominance',
      archetype: 'midrange',
      summary:
        'A black-red-green midrange deck powered by Bloodbraid Elf cascading into haymakers like Blightning and Maelstrom Pulse. Sprouting Thrinax and Lightning Bolt fill the curve with value. Grinds out fair decks but vulnerable to dedicated combo and pure card advantage engines.',
      keyCards: ['Bloodbraid Elf', 'Sprouting Thrinax', 'Maelstrom Pulse', 'Blightning', 'Lightning Bolt', 'Putrid Leech'],
      decklistPending: true,
      source: {
        title: 'Worlds 2009 - Jund decklist by David Reitbauer',
        publisher: 'MTG Cards Realm',
        url: 'https://mtg.cardsrealm.com/en-bz/decks/kpk3-jund-david-reitbauer-worlds-2009',
        date: '2009-11-22',
      },
    },
    {
      name: 'UB Faeries',
      slug: 'ub-faeries-standard-2009',
      period: 'Faeries vs. Five-Color Control',
      archetype: 'tempo',
      summary:
        'A blue-black tempo deck running Bitterblossom for a flying token army and Spellstutter Sprite, Cryptic Command, and Mistbind Clique for repeated tempo plays. Scion of Oona protects the board. Strong against fair midrange but pressured by Volcanic Fallout and fast aggro.',
      keyCards: ['Bitterblossom', 'Mistbind Clique', 'Spellstutter Sprite', 'Cryptic Command', 'Scion of Oona', 'Thoughtseize'],
      decklistPending: true,
      source: {
        title: 'MTGTop8 - Standard early 2009 Faeries results',
        publisher: 'MTGTop8',
        url: 'https://www.mtgtop8.com/format?f=ST',
      },
    },
    {
      name: 'Naya Lightsaber',
      slug: 'naya-lightsaber-standard-2009',
      period: 'Jund Dominance',
      archetype: 'aggro',
      summary:
        'A red-green-white aggro-midrange deck centered on Baneslayer Angel as the format\'s premier four-drop, with Wild Nacatl and Woolly Thoctar applying early pressure. Ranger of Eos refills the hand with one-drops, Lightning Bolt clears blockers. Strong against fair midrange but vulnerable to combo.',
      keyCards: ['Baneslayer Angel', 'Woolly Thoctar', 'Wild Nacatl', 'Ranger of Eos', 'Lightning Bolt', 'Path to Exile'],
      decklistPending: true,
      source: {
        title: 'Worlds 2009 - Naya Lightsaber by Andre Coimbra (1st)',
        publisher: 'MTGTop8',
        url: 'https://www.mtgtop8.com/event?e=443&d=253193&f=ST',
        date: '2009-11-22',
      },
    },
  ],
}

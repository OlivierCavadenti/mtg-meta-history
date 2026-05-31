import type { YearFormatEntry } from '../types'

export const standard2002: YearFormatEntry = {
  year: 2002,
  format: 'standard',
  title: 'Standard 2002',
  subtitle: 'Psychatog and the graveyard',
  shortLabel: 'Psychatog era',
  summary:
    'Standard 2002 was defined by the Odyssey-Invasion intersection, where graveyard mechanics met powerful gold cards. Psychatog emerged as the format\'s signature deck, combining countermagic, card draw, and a single devastating finisher. UG Madness offered a tempo alternative, using Wild Mongrel and madness cards for hyper-efficient aggression. Mono-Black Control leveraged Cabal Coffers for enormous mana. By autumn, Onslaught\'s tribal themes began to appear, but the year belonged to Psychatog. Carlos Romao won the 2002 World Championship with the deck, posting a perfect 6-0 Standard record.',
  headlineDeck: 'Psychatog',
  eras: [
    {
      id: '2002-std-atog',
      name: 'The Rise of Psychatog',
      start: '2002-01',
      end: '2002-05',
      dominantDecks: ['Psychatog'],
      challengers: ['UG Madness', 'Mono-Black Control', 'Opposition'],
      keyCards: [
        { name: 'Psychatog', role: 'Finisher that grew by consuming hand and graveyard' },
        { name: 'Upheaval', role: 'Reset button that bounced all permanents, played with floating mana into Psychatog' },
        { name: 'Fact or Fiction', role: 'Premium card selection, often yielding four-plus cards of value' },
        { name: 'Counterspell', role: 'Hard counter, the backbone of blue control' },
      ],
      summary:
        'Psychatog decks combined blue-black control elements with a lethal finisher. The signature play was floating mana, casting Upheaval to bounce everything, then replaying Psychatog and feeding it the entire graveyard. Fact or Fiction provided card advantage that fueled both the control game and the Psychatog kill. The deck demanded precise play and rewarded experienced pilots.',
      whyItDominated: [
        'Upheaval plus Psychatog was a near-guaranteed win if resolved',
        'Fact or Fiction provided card advantage that outclassed other draw spells',
        'The UB shell had access to premium countermagic and removal',
        'Psychatog itself required no other cards to threaten lethal once the graveyard was full',
      ],
      whyItEnded:
        'Judgment in May brought new tools that diversified the format. Mirari\'s Wake decks rose as a powerful control alternative, and the metagame adjusted around the Psychatog threat.',
      confidence: 'medium',
      sources: [
        {
          title: 'World Championship Decks/2002',
          publisher: 'MTG Wiki',
          url: 'https://mtg.fandom.com/wiki/World_Championship_Decks/2002',
          note: 'Carlos Romao won Worlds 2002 with Psychatog, going 6-0 in Standard with a 12-0 game record.',
        },
        {
          title: 'MTGTop8 - Standard 2002 metagame',
          publisher: 'MTGTop8',
          url: 'https://www.mtgtop8.com/format?f=ST',
          note: 'Tournament results showing Psychatog and UG Madness as top archetypes.',
        },
      ],
    },
    {
      id: '2002-std-diversity',
      name: 'Madness and Wake',
      start: '2002-05',
      end: '2002-10',
      dominantDecks: ['Psychatog', 'UG Madness'],
      challengers: ['Wake', 'Mono-Black Control', 'Squirrel Opposition'],
      keyCards: [
        { name: 'Wild Mongrel', role: 'Discard outlet enabling madness for free or reduced cost' },
        { name: 'Basking Rootwalla', role: 'Free creature when discarded via madness' },
        { name: 'Circular Logic', role: 'Counterspell enabled by madness for a single blue mana' },
        { name: 'Mirari\'s Wake', role: 'Doubled mana and pumped creatures, engine for control decks' },
        { name: 'Cabal Coffers', role: 'Massive mana generation for mono-black strategies' },
      ],
      summary:
        'The mid-year format featured remarkable diversity. UG Madness offered a tempo-aggro plan that could deploy threats for free via the madness mechanic. Mirari\'s Wake decks used the enchantment to double their mana and overwhelm opponents. Mono-Black Control with Cabal Coffers generated enormous mana for Corrupt and Mind Sludge. Squirrel Opposition used Squirrel Nest and Opposition to lock down the board. Carlos Romao\'s dominant Worlds performance cemented Psychatog as the year\'s defining deck.',
      whyItDominated: [
        'UG Madness deployed threats at reduced cost while holding up countermagic',
        'Wild Mongrel enabled the entire madness engine at no card disadvantage',
        'Wake decks leveraged doubled mana to cast multiple spells per turn',
        'Mono-Black Control punished multicolor decks with targeted discard and Corrupt',
      ],
      whyItEnded:
        'Onslaught arrived in October, introducing tribal mechanics and creature types that would define the next year. The rotation removed Invasion block and Seventh Edition, taking Fires, Fact or Fiction, and Flametongue Kavu with them.',
      confidence: 'medium',
      sources: [
        {
          title: 'Worlds 2002 - Carlos Romao Psychatog',
          publisher: 'MTGGoldfish',
          url: 'https://www.mtggoldfish.com/deck/5693683',
          note: 'Carlos Romao\'s winning Psychatog decklist from the 2002 World Championship.',
        },
        {
          title: 'World Championship Decks/2002',
          publisher: 'MTG Wiki',
          url: 'https://mtg.fandom.com/wiki/World_Championship_Decks/2002',
          note: 'Includes Squirrel Opposition, Red Zone 2K2, and other championship decks.',
        },
      ],
    },
    {
      id: '2002-std-onslaught',
      name: 'Psychatog and UG Madness Persist',
      start: '2002-10',
      end: '2002-12',
      dominantDecks: ['Psychatog', 'UG Madness'],
      challengers: ['Goblin Sligh', 'Mono-Black Control', 'Wake'],
      keyCards: [
        { name: 'Goblin Piledriver', role: 'Explosive Goblin payoff that hit harder with each ally' },
        { name: 'Onslaught fetchlands', role: 'Mana fixing that thinned the deck' },
        { name: 'Wrath of God', role: 'Essential sweeper against tribal creature strategies' },
      ],
      summary:
        'Onslaught introduced tribal synergies that would define Standard for years. Goblins appeared as an aggressive tribe, with Goblin Piledriver threatening enormous damage. The fetchlands improved mana consistency across all archetypes. However, the Odyssey-era decks remained dominant through year\'s end, as the tribal strategies needed more support from Legions and Scourge to reach their peak.',
      whyItDominated: [
        'Psychatog and UG Madness had established, refined strategies that new decks couldn\'t immediately match',
        'Onslaught fetchlands improved existing archetypes more than they created new ones',
        'Tribal strategies needed additional support sets to reach critical mass',
        'The graveyard-based decks from Odyssey remained powerful in the new card pool',
      ],
      whyItEnded:
        'Legions in early 2003 would provide the tribal creature density that Goblins and other tribes needed to compete. Goblin Bidding would emerge as the premier aggro deck of the format.',
      confidence: 'medium',
      sources: [
        {
          title: 'MTGTop8 - Standard late 2002',
          publisher: 'MTGTop8',
          url: 'https://www.mtgtop8.com/format?f=ST',
          note: 'Tournament results from the Onslaught-era Standard transition period.',
        },
      ],
    },
  ],
  bans: [],
  setReleases: [
    { date: '2002-02-04', name: 'Torment', code: 'TOR', note: 'Black-aligned set, completes the madness mechanic with Basking Rootwalla and Circular Logic' },
    { date: '2002-05-27', name: 'Judgment', code: 'JUD', note: 'Green/white-aligned set, introduces Mirari\'s Wake' },
    { date: '2002-10-07', name: 'Onslaught', code: 'ONS', note: 'Standard rotation: Invasion block and Seventh Edition rotate out. Tribal themes begin' },
  ],
  representativeDecks: [
    {
      name: 'Psychatog',
      slug: 'psychatog-standard-2002',
      period: 'The Rise of Psychatog',
      archetype: 'control',
      summary:
        'A blue-black control deck that uses Psychatog as a one-card kill — pumping itself by exiling graveyard cards and discarding the hand. Counterspell and Fact or Fiction build advantage, Upheaval resets the board into a lethal Psychatog turn. Devastating against fair decks but vulnerable to graveyard hate and discard.',
      keyCards: ['Psychatog', 'Upheaval', 'Fact or Fiction', 'Counterspell', 'Nightscape Familiar'],
      decklistPending: true,
      source: {
        title: 'Carlos Romao Psychatog - Worlds 2002',
        publisher: 'MTGGoldfish',
        url: 'https://www.mtggoldfish.com/deck/5693683',
      },
    },
    {
      name: 'UG Madness',
      slug: 'ug-madness-standard-2002',
      period: 'Madness and Wake',
      archetype: 'tempo',
      summary:
        'A blue-green tempo deck that abuses madness costs — discarding Basking Rootwalla and Arrogant Wurm to Wild Mongrel for cheap, fast threats. Circular Logic backs up the board while Wonder grants flying from the graveyard. Aggressive and resilient, but folds to early sweepers and graveyard hate.',
      keyCards: ['Wild Mongrel', 'Basking Rootwalla', 'Circular Logic', 'Arrogant Wurm', 'Wonder'],
      decklistPending: true,
      source: {
        title: 'MTGTop8 - UG Madness decklists 2002',
        publisher: 'MTGTop8',
        url: 'https://www.mtgtop8.com/format?f=ST',
      },
    },
    {
      name: 'Mono-Black Control',
      slug: 'mbc-standard-2002',
      period: 'Madness and Wake',
      archetype: 'control',
      summary:
        'A mono-black control deck powered by Cabal Coffers producing massive mana, fueling Corrupt and Mind Sludge as both removal and finishers. Mutilate sweeps small creatures and Nantuko Shade scales with mana. Inevitable against most decks but vulnerable to fast aggro and counterspell-heavy control.',
      keyCards: ['Cabal Coffers', 'Corrupt', 'Mind Sludge', 'Mutilate', 'Nantuko Shade'],
      decklistPending: true,
      source: {
        title: 'MTGTop8 - Mono-Black Control 2002',
        publisher: 'MTGTop8',
        url: 'https://www.mtgtop8.com/format?f=ST',
      },
    },
    {
      name: 'Wake',
      slug: 'wake-standard-2002',
      period: 'Madness and Wake',
      archetype: 'control',
      summary:
        'A green-white-blue control deck centered on Mirari\'s Wake doubling mana and pumping creatures. Wrath of God resets, Roar of the Wurm produces hard-to-kill 6/6 tokens via flashback, and Compulsion plus Deep Analysis refill the hand. Inevitable against fair decks but slow against fast combo.',
      keyCards: ['Mirari\'s Wake', 'Wrath of God', 'Roar of the Wurm', 'Compulsion', 'Deep Analysis'],
      decklistPending: true,
      source: {
        title: 'MTGTop8 - Wake decklists 2002',
        publisher: 'MTGTop8',
        url: 'https://www.mtgtop8.com/format?f=ST',
      },
    },
  ],
}

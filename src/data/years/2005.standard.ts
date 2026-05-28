import type { YearFormatEntry } from '../types'

export const standard2005: YearFormatEntry = {
  year: 2005,
  format: 'standard',
  title: 'Standard 2005',
  subtitle: 'The fall of Affinity',
  shortLabel: 'Affinity ban year',
  summary:
    'The year began under Affinity\'s shadow. After the March bannings gutted the archetype, the format opened wide. Tooth and Nail emerged as the deck to beat through spring and summer, leveraging Urza lands to power out game-ending threats. By autumn, Ravnica\'s arrival brought Ghazi-Glare into contention, closing out the year with a new kind of board-control strategy.',
  headlineDeck: 'Tooth and Nail',
  eras: [
    {
      id: '2005-std-affinity',
      name: "Affinity's Last Days",
      start: '2005-01',
      end: '2005-03',
      dominantDecks: ['Ravager Affinity'],
      challengers: ['Tooth and Nail', 'Mono-Green Beacon', 'White Weenie'],
      keyCards: [
        { name: 'Arcbound Ravager', role: 'Modular payoff and sacrifice engine' },
        { name: 'Cranial Plating', role: 'One-shot damage enabler' },
        { name: 'Disciple of the Vault', role: 'Drain on sacrifice loops' },
      ],
      summary:
        'Affinity remained the deck to beat at the start of 2005. Its combination of fast mana, free creatures, and Arcbound Ravager made it the dominant strategy for over a year. The format warped heavily around it, with most decks forced to devote significant sideboard slots to artifact hate.',
      whyItDominated: [
        'Artifact lands provided free mana acceleration',
        'Arcbound Ravager enabled explosive turns and resilient board states',
        'Cranial Plating threatened lethal damage as early as turn three',
        'The deck punished slow or underprepared opponents consistently',
      ],
      whyItEnded:
        'Wizards banned Arcbound Ravager, Disciple of the Vault, and all six artifact lands in the March 2005 Banned & Restricted update, effectively removing the deck from competitive play.',
      confidence: 'high',
      sources: [
        {
          title: 'March 1, 2005 Banned and Restricted Announcement',
          publisher: 'Wizards of the Coast',
          url: 'https://mtg.fandom.com/wiki/Banned_and_restricted_cards/Timeline',
          date: '2005-03-01',
          note: 'Announced bans of Arcbound Ravager, Disciple of the Vault, and the six artifact lands in Standard.',
        },
        {
          title: 'MTGTop8 - Standard 2005 metagame',
          publisher: 'MTGTop8',
          url: 'https://www.mtgtop8.com/format?f=ST',
          note: 'Tournament results showing Affinity dominance in early 2005.',
        },
      ],
    },
    {
      id: '2005-std-tooth',
      name: 'Tooth & Tron Summer',
      start: '2005-03',
      end: '2005-10',
      dominantDecks: ['Tooth and Nail'],
      challengers: ['Mono-Blue Tron', 'Jushi Blue', 'Flores Red Deck Wins', 'Viridian Rats'],
      keyCards: [
        { name: 'Tooth and Nail', role: 'Game-ending tutor and cheat into play' },
        { name: 'Urza\'s Tower', role: 'Big mana enabler (Urzatron)' },
        { name: 'Sakura-Tribe Elder', role: 'Ramp and early defense' },
        { name: 'Sundering Titan', role: 'Mana denial finisher' },
        { name: 'Kiki-Jiki, Mirror Breaker', role: 'Combo kill with Sundering Titan or Mephidross Vampire' },
      ],
      summary:
        'With Affinity gone, Tooth and Nail became the defining mana engine of the format. The Urzatron shell powered out nine-mana spells reliably by turn four or five. The "entwined" Tooth and Nail fetched and deployed two creatures, typically Sundering Titan plus Kiki-Jiki for devastating effect. Control decks and aggro variants competed for second place.',
      whyItDominated: [
        'Urzatron provided unmatched mana acceleration in the post-Affinity format',
        'Tooth and Nail entwined was often an immediate game-winner',
        'Sakura-Tribe Elder and Sylvan Scrying provided consistency',
        'The deck could pivot between Sundering Titan (vs. control) and combo kills',
      ],
      whyItEnded:
        'The arrival of Ravnica: City of Guilds in October 2005 brought powerful new multicolor strategies. The manabase improvements and new threats shifted the meta toward board-control decks like Ghazi-Glare.',
      confidence: 'high',
      sources: [
        {
          title: 'Pro Tour Philadelphia 2005 coverage',
          publisher: 'Wizards of the Coast',
          url: 'https://mtg.fandom.com/wiki/2005_Pro_Tour_Season',
          date: '2005-05-07',
          note: 'One of the defining events of the Tooth and Nail era in Standard.',
        },
        {
          title: 'MTGTop8 - Standard Kamigawa-Mirrodin block era',
          publisher: 'MTGTop8',
          url: 'https://www.mtgtop8.com/format?f=ST',
          note: 'Shows Tooth and Nail as a top-performing archetype through mid-2005.',
        },
      ],
    },
    {
      id: '2005-std-ravnica',
      name: 'Ravnica Begins',
      start: '2005-10',
      end: '2005-12',
      dominantDecks: ['Ghazi-Glare'],
      challengers: ['Boros Deck Wins', 'Heartbeat Combo', 'Greater Gifts', 'Zoo'],
      keyCards: [
        { name: 'Glare of Subdual', role: 'Repeatable tap effect locking down opposing boards' },
        { name: 'Vitu-Ghazi, the City-Tree', role: 'Token generation engine' },
        { name: 'Selesnya Guildmage', role: 'Token generation and pump' },
        { name: 'Loxodon Hierarch', role: 'Efficient beater with lifegain' },
      ],
      summary:
        'Ravnica introduced powerful multicolor cards and a dramatically improved manabase. Ghazi-Glare emerged as the deck to beat, using Glare of Subdual and token generators to control the board while building an insurmountable position. The deck showcased Ravnica\'s Selesnya guild at its peak.',
      whyItDominated: [
        'Glare of Subdual shut down opposing creatures repeatedly',
        'Token generators provided both blockers and tappers',
        'Loxodon Hierarch stabilized against aggro',
        'Ravnica duals enabled consistent three-color manabases for the first time in years',
      ],
      whyItEnded:
        'The meta continued to evolve with Guildpact and Dissension in 2006, shifting toward new strategies. Ghazi-Glare remained competitive but shared the stage with Heartbeat Combo, Greater Gifts, and aggro variants.',
      confidence: 'high',
      sources: [
        {
          title: 'Worlds 2005 coverage',
          publisher: 'Wizards of the Coast',
          url: 'https://mtg.fandom.com/wiki/2005_World_Championships',
          date: '2005-12-01',
          note: 'World Championship results showing late-2005 Standard metagame.',
        },
      ],
    },
  ],
  bans: [
    {
      date: '2005-03-20',
      cards: [
        'Arcbound Ravager',
        'Disciple of the Vault',
        'Darksteel Citadel',
        'Great Furnace',
        'Seat of the Synod',
        'Tree of Tales',
        'Vault of Whispers',
        'Ancient Den',
      ],
      explanation:
        'Affinity had dominated Standard for over a year. The artifact lands, Arcbound Ravager, and Disciple of the Vault were banned to remove the archetype and allow the rest of the format to develop.',
      source: {
        title: 'March 1, 2005 Banned and Restricted Announcement',
        publisher: 'Wizards of the Coast',
        url: 'https://mtg.fandom.com/wiki/Banned_and_restricted_cards/Timeline',
        date: '2005-03-01',
      },
    },
  ],
  setReleases: [
    { date: '2005-02-04', name: 'Betrayers of Kamigawa', code: 'BOK' },
    { date: '2005-06-03', name: 'Saviors of Kamigawa', code: 'SOK' },
    { date: '2005-07-29', name: 'Ninth Edition', code: '9ED' },
    { date: '2005-10-07', name: 'Ravnica: City of Guilds', code: 'RAV', note: 'Standard rotation: Onslaught block and Eighth Edition rotate out' },
  ],
  representativeDecks: [
    {
      name: 'Ravager Affinity',
      slug: 'ravager-affinity-standard-2005',
      period: "Affinity's Last Days",
      archetype: 'aggro',
      summary:
        'The lingering Affinity shell that survived multiple bans, still abusing Arcbound Ravager, Cranial Plating, and Disciple of the Vault for explosive starts. Frogmite and Myr Enforcer cost nothing with enough artifacts on board. One of the format\'s fastest clocks but increasingly hated out.',
      keyCards: ['Arcbound Ravager', 'Cranial Plating', 'Disciple of the Vault', 'Frogmite', 'Myr Enforcer'],
      source: {
        title: 'MTGTop8 Affinity decklists 2005',
        publisher: 'MTGTop8',
        url: 'https://www.mtgtop8.com/format?f=ST',
      },
    },
    {
      name: 'Tooth and Nail',
      slug: 'tooth-and-nail-standard-2005',
      period: 'Tooth & Tron Summer',
      archetype: 'ramp',
      summary:
        'A green ramp deck assembling the Urzatron — Urza\'s Tower, Urza\'s Mine, Urza\'s Power Plant — to power out Tooth and Nail entwined for two giants. Sundering Titan locks the opponent\'s mana. Inevitable in late game but vulnerable to fast clocks and land destruction.',
      keyCards: ['Tooth and Nail', "Urza's Tower", "Urza's Mine", "Urza's Power Plant", 'Sundering Titan', 'Kiki-Jiki, Mirror Breaker'],
      source: {
        title: 'MTGTop8 Tooth and Nail decklists 2005',
        publisher: 'MTGTop8',
        url: 'https://www.mtgtop8.com/format?f=ST',
      },
    },
    {
      name: 'Ghazi-Glare',
      slug: 'ghazi-glare-standard-2005',
      period: 'Ravnica Begins',
      archetype: 'midrange',
      summary:
        'A green-white midrange deck that uses Glare of Subdual to tap down the opponent\'s board while Selesnya Guildmage churns out tokens for Vitu-Ghazi, the City-Tree. Loxodon Hierarch stabilizes life and trades cleanly. Strong against creature decks but pressured by burn and sweepers.',
      keyCards: ['Glare of Subdual', 'Vitu-Ghazi, the City-Tree', 'Selesnya Guildmage', 'Loxodon Hierarch', 'Wood Elves'],
      source: {
        title: 'Worlds 2005 Ghazi-Glare decklists',
        publisher: 'Wizards of the Coast',
        url: 'https://mtg.fandom.com/wiki/2005_World_Championships',
      },
    },
  ],
}

import type { YearFormatEntry } from '../types'

export const standard2014: YearFormatEntry = {
  year: 2014,
  format: 'standard',
  title: 'Standard 2014',
  subtitle: 'Devotion meets the Khans',
  shortLabel: 'Devotion & Khans',
  summary:
    'Standard 2014 split into two distinct halves. The first was defined by Theros devotion strategies: Mono-Black Devotion dominated the field with Pack Rat, Gray Merchant of Asphodel, and Thoughtseize, while Mono-Blue Devotion leveraged Thassa and Master of Waves. UW Control with Sphinx\'s Revelation rounded out the top tier. The September rotation brought Khans of Tarkir and a dramatic shift to wedge-based strategies, with Abzan Midrange and its centerpiece Siege Rhino emerging as the new deck to beat.',
  headlineDeck: 'Mono-Black Devotion',
  eras: [
    {
      id: '2014-std-devotion',
      name: 'The Devotion Meta',
      start: '2014-01',
      end: '2014-09',
      dominantDecks: ['Mono-Black Devotion'],
      challengers: ['Mono-Blue Devotion', 'UW Control', 'Monsters', 'Jund Monsters', 'Burn'],
      keyCards: [
        { name: 'Pack Rat', role: 'Self-replicating threat that won games on its own' },
        { name: 'Gray Merchant of Asphodel', role: 'Devotion payoff draining massive life totals' },
        { name: 'Thoughtseize', role: 'Premium hand disruption protecting the game plan' },
        { name: 'Desecration Demon', role: 'Undercosted evasive threat feeding devotion' },
        { name: 'Underworld Connections', role: 'Card advantage engine and devotion source' },
      ],
      summary:
        'Mono-Black Devotion was the defining deck of early 2014 Standard. It accounted for over 20% of top finishes and combined efficient removal, hand disruption, and the devastating Gray Merchant drain. Mono-Blue Devotion was the primary aggressive foil, using Thassa\'s unblockable ability and Master of Waves to go wide. UW Control with Sphinx\'s Revelation and Supreme Verdict kept both in check, while GR Monsters offered a midrange alternative with Polukranos and Stormbreath Dragon.',
      whyItDominated: [
        'Pack Rat created an army from any hand, making even bad draws threatening',
        'Gray Merchant of Asphodel provided a non-combat win condition that swung races dramatically',
        'Thoughtseize stripped the opponent\'s best card while adding devotion',
        'The deck had excellent removal in Hero\'s Downfall and Devour Flesh',
        'Underworld Connections provided inevitability against control decks',
      ],
      whyItEnded:
        'The September 2014 rotation removed Return to Ravnica block and Magic 2014 from Standard. Khans of Tarkir introduced powerful wedge strategies that completely reshaped the metagame around three-color decks with fetch lands.',
      confidence: 'high',
      sources: [
        {
          title: 'Pro Tour Theros coverage',
          publisher: 'Wizards of the Coast',
          url: 'https://mtg.fandom.com/wiki/Pro_Tour_Theros',
          date: '2013-10-13',
          note: 'Jérémy Dezani won Pro Tour Theros with Mono-Blue Devotion, establishing the devotion metagame that carried into 2014.',
        },
        {
          title: 'MTGTop8 - Standard Devotion to Black decklists',
          publisher: 'MTGTop8',
          url: 'https://www.mtgtop8.com/archetype?a=333',
          note: 'Mono-Black Devotion accounted for over 20% of top finishes in early 2014.',
        },
        {
          title: 'Pro Tour Journey into Nyx coverage',
          publisher: 'Wizards of the Coast',
          url: 'https://mtg.fandom.com/wiki/Pro_Tour_Journey_into_Nyx',
          date: '2014-05-18',
          note: 'Block Constructed PT, but Standard side events confirmed the devotion metagame through spring 2014.',
        },
      ],
    },
    {
      id: '2014-std-khans',
      name: 'Abzan and Siege Rhino',
      start: '2014-09',
      end: '2014-12',
      dominantDecks: ['Abzan Midrange'],
      challengers: ['Jeskai Tempo', 'Mardu Midrange', 'Sultai Control', 'UB Control', 'Temur Monsters'],
      keyCards: [
        { name: 'Siege Rhino', role: 'Three-for-one: 4/5 trample with drain 3 on entry' },
        { name: 'Mantis Rider', role: 'Hasty evasive threat for Jeskai' },
        { name: 'Thoughtseize', role: 'Key disruption surviving rotation' },
        { name: 'Wingmate Roc', role: 'Raid-enabled flying threat generating tokens' },
        { name: 'Dig Through Time', role: 'Delve-powered card selection for control and tempo' },
      ],
      summary:
        'Khans of Tarkir revolutionized Standard with its wedge-based mana and powerful gold cards. Ari Lax won Pro Tour Khans of Tarkir with Abzan Midrange, showcasing Siege Rhino as the format\'s best card. Jeskai Tempo leveraged Mantis Rider and burn spells, while Mardu and Sultai offered alternative wedge strategies. The fetch land mana base enabled ambitious three-color decks across the board. Shahar Shenhar won the 2014 World Championship playing Sidisi Whip, demonstrating the format\'s diversity.',
      whyItDominated: [
        'Siege Rhino was the most efficient creature in the format, combining size, evasion, and a drain effect',
        'Abzan\'s removal suite included Abzan Charm, Hero\'s Downfall, and Thoughtseize',
        'Fetch lands plus tri-lands created consistent three-color manabases',
        'Courser of Kruphix and Sylvan Caryatid provided ramp and card advantage',
        'The deck adapted flexibly between midrange and control configurations',
      ],
      whyItEnded:
        'Abzan remained dominant into early 2015 but the metagame continued to evolve with Fate Reforged. New tools allowed challengers to compete more effectively against the Siege Rhino shell.',
      confidence: 'high',
      sources: [
        {
          title: 'Pro Tour Khans of Tarkir coverage',
          publisher: 'Wizards of the Coast',
          url: 'https://mtg.fandom.com/wiki/Pro_Tour_Khans_of_Tarkir',
          date: '2014-10-12',
          note: 'Ari Lax won with Abzan Midrange. Top 8 featured 3 Jeskai, 2 Abzan, 1 UB Control, 1 Jeskai Ascendancy Combo.',
        },
        {
          title: '2014 World Championship coverage',
          publisher: 'Wizards of the Coast',
          url: 'https://mtg.fandom.com/wiki/2014_World_Championship',
          date: '2014-12-07',
          note: 'Shahar Shenhar won his second World Championship. Standard portion showcased post-Khans diversity.',
        },
        {
          title: 'Standard Breakdown of Pro Tour: Khans of Tarkir',
          publisher: 'MTGGoldfish',
          url: 'https://www.mtggoldfish.com/articles/standard-breakdown-of-pro-tour-khans-of-tarkir',
          note: 'Detailed metagame breakdown showing Abzan and Jeskai as top performers.',
        },
      ],
    },
  ],
  setReleases: [
    { date: '2014-02-07', name: 'Born of the Gods', code: 'BNG' },
    { date: '2014-05-02', name: 'Journey into Nyx', code: 'JOU' },
    { date: '2014-07-18', name: 'Magic 2015', code: 'M15' },
    { date: '2014-09-26', name: 'Khans of Tarkir', code: 'KTK', note: 'Standard rotation: Return to Ravnica block and Magic 2014 rotate out' },
  ],
  representativeDecks: [
    {
      name: 'Mono-Black Devotion',
      slug: 'mono-black-devotion-standard-2014',
      period: 'The Devotion Meta',
      archetype: 'midrange',
      summary:
        'A mono-black midrange deck built on Pack Rat snowballing, Gray Merchant of Asphodel for a closing drain, and Desecration Demon as a flying clock. Thoughtseize, Hero\'s Downfall, and Underworld Connections provide disruption and card advantage. Grindy and resilient but pressured by exile removal and aggressive decks.',
      keyCards: ['Pack Rat', 'Gray Merchant of Asphodel', 'Thoughtseize', 'Desecration Demon', 'Underworld Connections', "Hero's Downfall"],
      decklistPending: true,
      source: {
        title: 'MTGTop8 - Standard Devotion to Black decklists',
        publisher: 'MTGTop8',
        url: 'https://www.mtgtop8.com/archetype?a=333',
      },
    },
    {
      name: 'Mono-Blue Devotion',
      slug: 'mono-blue-devotion-standard-2014',
      period: 'The Devotion Meta',
      archetype: 'aggro',
      summary:
        'A mono-blue tempo-aggro deck that builds devotion via Cloudfin Raptor, Frostburn Weird, and Nightveil Specter to animate Thassa, God of the Sea and explode with Master of Waves. Tidebinder Mage taps key creatures. Fast and resilient but vulnerable to red sweepers.',
      keyCards: ['Thassa, God of the Sea', 'Master of Waves', 'Tidebinder Mage', 'Nightveil Specter', 'Cloudfin Raptor'],
      decklistPending: true,
      source: {
        title: 'Pro Tour Theros coverage',
        publisher: 'Wizards of the Coast',
        url: 'https://mtg.fandom.com/wiki/Pro_Tour_Theros',
      },
    },
    {
      name: 'UW Control',
      slug: 'uw-control-standard-2014',
      period: 'The Devotion Meta',
      archetype: 'control',
      summary:
        'A blue-white control deck anchored by Sphinx\'s Revelation for late-game card advantage and life gain. Supreme Verdict sweeps uncounterably, Detention Sphere exiles permanents, Jace and Elspeth control planeswalker board. Inevitable but slow against fast aggro and combo.',
      keyCards: ["Sphinx's Revelation", 'Supreme Verdict', 'Detention Sphere', 'Jace, Architect of Thought', 'Elspeth, Sun\'s Champion'],
      decklistPending: true,
      source: {
        title: 'MTGTop8 - Standard UW Control decklists',
        publisher: 'MTGTop8',
        url: 'https://www.mtgtop8.com/format?f=ST',
      },
    },
    {
      name: 'Abzan Midrange',
      slug: 'abzan-midrange-standard-2014',
      period: 'Abzan and Siege Rhino',
      archetype: 'midrange',
      summary:
        'A black-green-white midrange deck centered on Siege Rhino as a four-mana drain-plus-body and Courser of Kruphix as a Lightning Bolt-proof blocker with incidental life and card advantage. Thoughtseize disrupts, Abzan Charm provides flexible answers, Wingmate Roc closes. Dominates fair midrange.',
      keyCards: ['Siege Rhino', 'Courser of Kruphix', 'Sylvan Caryatid', 'Thoughtseize', 'Abzan Charm', 'Wingmate Roc'],
      decklistPending: true,
      source: {
        title: 'Pro Tour Khans of Tarkir coverage',
        publisher: 'Wizards of the Coast',
        url: 'https://mtg.fandom.com/wiki/Pro_Tour_Khans_of_Tarkir',
      },
    },
    {
      name: 'Jeskai Tempo',
      slug: 'jeskai-tempo-standard-2014',
      period: 'Abzan and Siege Rhino',
      archetype: 'tempo',
      summary:
        'A blue-red-white tempo deck built on Mantis Rider as a three-mana flying haste threat backed by Stoke the Flames and Jeskai Charm for cheap interaction. Goblin Rabblemaster floods the board, Dig Through Time refills the hand. Fast and punishing but pressured by sweepers.',
      keyCards: ['Mantis Rider', 'Jeskai Charm', 'Stoke the Flames', 'Goblin Rabblemaster', 'Dig Through Time'],
      decklistPending: true,
      source: {
        title: 'Pro Tour Khans of Tarkir Top 8',
        publisher: 'Wizards of the Coast',
        url: 'https://mtg.fandom.com/wiki/Pro_Tour_Khans_of_Tarkir',
      },
    },
  
    {
      name: 'Monsters',
      slug: 'monsters-standard-2014',
      period: 'The Devotion Meta',
      archetype: 'midrange',
      summary:
        'A red-green big-creature midrange deck running Stormbreath Dragon, Polukranos, and Domri Rade for ramp, fight, and card advantage. Xenagos, the Reveler ramps and tokens. Punishes slow setups but pressured by control with sweepers.',
      keyCards: ['Stormbreath Dragon', 'Polukranos, World Eater', 'Domri Rade', 'Xenagos, the Reveler', 'Sylvan Caryatid'],
      decklistPending: true,
    },
    {
      name: 'Jund Monsters',
      slug: 'jund-monsters-standard-2014',
      period: 'The Devotion Meta',
      archetype: 'midrange',
      summary:
        'A black-red-green big-creature midrange deck blending Monsters\' threats — Stormbreath Dragon, Polukranos, Courser of Kruphix — with black removal in Hero\'s Downfall. Domri Rade fights and refills. Strong against fair decks but pressured by efficient sweepers.',
      keyCards: ['Stormbreath Dragon', 'Polukranos, World Eater', 'Domri Rade', 'Courser of Kruphix', 'Hero\'s Downfall'],
      decklistPending: true,
    },
    {
      name: 'Burn',
      slug: 'burn-standard-2014',
      period: 'The Devotion Meta',
      archetype: 'aggro',
      summary:
        'A mono-red burn-aggro shell that combines efficient creatures like Eidolon of the Great Revel and Stormbreath Dragon with cheap burn — Lightning Strike, Magma Jet, Searing Blood. Aims to deal twenty damage by turn four through reach. Punishes greedy mana bases but folds to lifegain.',
      keyCards: ['Eidolon of the Great Revel', 'Lightning Strike', 'Magma Jet', 'Searing Blood', 'Stormbreath Dragon'],
      decklistPending: true,
    },
    {
      name: 'Mardu Midrange',
      slug: 'mardu-midrange-standard-2014',
      period: 'Pack Rat',
      archetype: 'midrange',
      summary:
        'A black-red-white midrange deck that produces tokens via Sorin, Solemn Visitor and Goblin Rabblemaster, then sacrifices them to Butcher of the Horde for haste-lifelink-vigilance. Crackling Doom doubles as removal and burn, Hero\'s Downfall handles anything. Versatile but pressured by sweepers.',
      keyCards: ['Butcher of the Horde', 'Crackling Doom', 'Hero\'s Downfall', 'Sorin, Solemn Visitor', 'Goblin Rabblemaster'],
      decklistPending: true,
    },
    {
      name: 'Sultai Control',
      slug: 'sultai-control-standard-2014',
      period: 'Pack Rat',
      archetype: 'control',
      summary:
        'A blue-black-green delve-control deck that fills the graveyard for cheap Murderous Cut and Dig Through Time, with Tasigur and Sidisi, Brood Tyrant as graveyard-loving threats. Hero\'s Downfall removes anything. Strong against fair decks but pressured by graveyard hate.',
      keyCards: ['Sidisi, Brood Tyrant', 'Hero\'s Downfall', 'Murderous Cut', 'Dig Through Time', 'Tasigur, the Golden Fang'],
      decklistPending: true,
    },
    {
      name: 'UB Control',
      slug: 'ub-control-standard-2014',
      period: 'Pack Rat',
      archetype: 'control',
      summary:
        'A blue-black control deck built on Dig Through Time and Dissolve for selection and counter-magic, with Hero\'s Downfall for removal. Pearl Lake Ancient is an uncounterable bounce-protected finisher, Perilous Vault exiles everything. Inevitable but slow against fast combo.',
      keyCards: ['Dissolve', 'Dig Through Time', 'Hero\'s Downfall', 'Pearl Lake Ancient', 'Perilous Vault'],
      decklistPending: true,
    },
    {
      name: 'Temur Monsters',
      slug: 'temur-monsters-standard-2014',
      period: 'Pack Rat',
      archetype: 'midrange',
      summary:
        'A blue-red-green big-creature midrange deck that lands Savage Knuckleblade, Stormbreath Dragon, and Polukranos as efficient threats. Sarkhan, the Dragonspeaker becomes a haste Dragon. Punishes slow control but pressured by sweepers and lifegain.',
      keyCards: ['Savage Knuckleblade', 'Stormbreath Dragon', 'Polukranos, World Eater', 'Sarkhan, the Dragonspeaker', 'Crater\'s Claws'],
      decklistPending: true,
    },
  ],
}

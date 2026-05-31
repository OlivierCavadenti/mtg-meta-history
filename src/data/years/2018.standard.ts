import type { YearFormatEntry } from '../types'

export const standard2018: YearFormatEntry = {
  year: 2018,
  format: 'standard',
  title: 'Standard 2018',
  subtitle: 'Post-Energy bans to Guilds of Ravnica',
  shortLabel: 'Energy bans & Chainwhirler summer',
  summary:
    'The year opened with emergency bans dismantling both Temur Energy and Ramunap Red. The post-ban format found balance briefly before Dominaria\'s Goblin Chainwhirler and Teferi, Hero of Dominaria reshaped Standard around red aggro and UW Control. Pro Tour Dominaria was dominated by red-based decks, with seven of the Top 8 running four copies of Chainwhirler. The autumn rotation and Guilds of Ravnica brought the healthiest metagame in years, with Golgari Midrange, Jeskai Control, Izzet Drakes, and Boros Aggro all competing at the top.',
  headlineDeck: 'Mono-Red Aggro',
  eras: [
    {
      id: '2018-std-post-energy',
      name: 'Post-Energy Rebuilding',
      start: '2018-01',
      end: '2018-04',
      dominantDecks: ['Mono-Red Aggro (Hazoret)'],
      challengers: ['UB Midrange', 'God-Pharaoh\'s Gift (UW)', 'UW Approach', 'Grixis Energy', 'WB Vehicles'],
      keyCards: [
        { name: 'Hazoret the Fervent', role: 'Indestructible top-end threat for red aggro' },
        { name: 'God-Pharaoh\'s Gift', role: 'Artifact reanimation engine creating 4/4 tokens' },
        { name: 'Approach of the Second Sun', role: 'Alternate win condition for UW Control' },
        { name: 'The Scarab God', role: 'Recursive threat and card advantage for UB Midrange' },
        { name: 'Bomat Courier', role: 'Card advantage engine for aggressive red decks' },
      ],
      summary:
        'After the January 15 bans gutted both Temur Energy and Ramunap Red, the metagame opened up dramatically. Mono-Red rebuilt around Hazoret the Fervent and proved resilient, while UB Midrange leveraging The Scarab God rose as a premier threat. God-Pharaoh\'s Gift decks offered a powerful artifact-based reanimation strategy, and UW Approach provided a control option with a unique win condition. The format was diverse but Red remained the deck to beat.',
      whyItDominated: [
        'Hazoret the Fervent was nearly impossible to remove efficiently',
        'Red aggro retained strong card quality even after losing Ramunap Ruins',
        'The Scarab God provided inevitability for midrange and control shells',
        'No single deck established clear dominance, keeping the meta diverse',
      ],
      whyItEnded:
        'Dominaria\'s release in April 2018 introduced Goblin Chainwhirler, Teferi, Hero of Dominaria, and Karn, Scion of Urza, dramatically reshaping the metagame around new powerful threats.',
      confidence: 'high',
      sources: [
        {
          title: 'Banned and Restricted Update, January 15 2018',
          publisher: 'MTGGoldfish',
          url: 'https://www.mtggoldfish.com/articles/banned-and-restricted-update-january-15-2018-attune-refiner-ferocidon-ramunap-ruins-banned',
          date: '2018-01-15',
          note: 'Coverage of the Energy and Ramunap Red bans.',
        },
        {
          title: 'Metagame Mentor: What\'s Next for a Post-Bans Standard?',
          publisher: 'Magic.gg',
          url: 'https://www.magic.gg/news/metagame-mentor-whats-next-for-a-post-bans-standard',
          note: 'Metagame analysis after the January 2018 bans.',
        },
      ],
    },
    {
      id: '2018-std-dominaria',
      name: 'Chainwhirler Summer',
      start: '2018-04',
      end: '2018-10',
      dominantDecks: ['Mono-Red Aggro', 'RB Aggro'],
      challengers: ['UW Control (Teferi)', 'Steel Leaf Stompy', 'BG Constrictor', 'UW God-Pharaoh\'s Gift'],
      keyCards: [
        { name: 'Goblin Chainwhirler', role: 'Board-warping three-drop that punished X/1 creatures' },
        { name: 'Teferi, Hero of Dominaria', role: 'Card advantage and removal engine for UW Control' },
        { name: 'Karn, Scion of Urza', role: 'Colorless card advantage planeswalker' },
        { name: 'Steel Leaf Champion', role: 'Efficient 5/4 threat for mono-green aggro' },
        { name: 'Winding Constrictor', role: '+1/+1 counter synergy engine for BG decks' },
      ],
      summary:
        'Dominaria transformed Standard with a suite of all-time powerful cards. Goblin Chainwhirler warped the metagame so thoroughly that seven of the Pro Tour Dominaria Top 8 decks ran four copies. Wyatt Darby won Pro Tour Dominaria with Mono-Red, defeating BR Aggro in the finals. Meanwhile, Teferi, Hero of Dominaria established UW Control as a premier archetype. Steel Leaf Stompy offered a green-based answer to the red-dominated metagame, while BG Constrictor provided midrange resilience.',
      whyItDominated: [
        'Goblin Chainwhirler\'s ETB wiped out token strategies and X/1 creatures',
        'Red decks had exceptional card quality with Hazoret, Chainwhirler, Glorybringer, and Chandra',
        'Teferi, Hero of Dominaria single-handedly made UW Control tier one',
        'Triple-colored mana costs (RRR, GGG) rewarded mono-colored strategies',
      ],
      whyItEnded:
        'The autumn rotation removed Kaladesh and Amonkhet blocks, taking Hazoret the Fervent, The Scarab God, and much of the red-black shell. Guilds of Ravnica provided powerful new multicolor tools.',
      confidence: 'high',
      sources: [
        {
          title: 'Pro Tour Dominaria',
          publisher: 'MTG Wiki (Fandom)',
          url: 'https://mtg.fandom.com/wiki/Pro_Tour_Dominaria',
          date: '2018-06-01',
          note: 'Seven of Top 8 decks ran four Goblin Chainwhirler. Won by Wyatt Darby on Mono-Red.',
        },
        {
          title: 'Pro Tour Dominaria: By the Numbers',
          publisher: 'MTGGoldfish',
          url: 'https://www.mtggoldfish.com/articles/pro-tour-dominaria-by-the-numbers',
          date: '2018-06-03',
          note: 'BR Aggro 14%, BR Midrange 12%, Mono-Red 10%, Mono-Green 9% of the field.',
        },
      ],
    },
    {
      id: '2018-std-grn',
      name: 'Golgari Midrange',
      start: '2018-10',
      end: '2018-12',
      dominantDecks: ['Golgari Midrange'],
      challengers: ['Jeskai Control', 'Mono-Red Aggro', 'Boros Aggro', 'Izzet Drakes', 'Mono-Blue Tempo'],
      keyCards: [
        { name: 'Jadelight Ranger', role: 'Explore-based value creature for Golgari' },
        { name: 'Vivien Reid', role: 'Card advantage and removal for green midrange' },
        { name: 'Teferi, Hero of Dominaria', role: 'Continued cornerstone of Jeskai Control' },
        { name: 'Arclight Phoenix', role: 'Recursive threat powering Izzet Drakes' },
        { name: 'Crackling Drake', role: 'Scaling threat rewarding spell-heavy strategies' },
      ],
      summary:
        'The Guilds of Ravnica rotation created the healthiest Standard in years. Golgari Midrange held the largest metagame share at around 22% at Pro Tour GRN, but the format was remarkably diverse. Jeskai Control, Izzet Drakes (powered by Arclight Phoenix), Boros Aggro, Mono-Red, and Mono-Blue Tempo all competed at the highest level. Two players posted perfect Standard records at the Pro Tour: Guillaume Gauthier on Mono-Blue Tempo and Pascal Vieren on Izzet Phoenix.',
      whyItDominated: [
        'Golgari\'s explore package provided consistent card quality and graveyard synergy',
        'Jeskai Control leveraged Teferi alongside efficient Ravnica-era removal',
        'Arclight Phoenix gave Izzet Drakes a recursive threat that punished slow starts',
        'The shockland manabase enabled diverse multicolor strategies',
      ],
      whyItEnded:
        'Ravnica Allegiance in January 2019 added new guilds and powerful cards like Hydroid Krasis, shifting the metagame toward Sultai Midrange and Esper Control.',
      confidence: 'high',
      sources: [
        {
          title: 'Pro Tour Guilds of Ravnica',
          publisher: 'MTG Wiki (Fandom)',
          url: 'https://mtg.fandom.com/wiki/Pro_Tour_Guilds_of_Ravnica',
          date: '2018-11-09',
          note: 'Golgari Midrange at 22% of the field. Diverse Top 8 with multiple archetypes.',
        },
        {
          title: 'PT Guilds of Ravnica Standard Deck Power Rankings',
          publisher: 'Hipsters of the Coast',
          url: 'https://www.hipstersofthecoast.com/2018/11/pt-guilds-of-ravnica-mtg-standard-deck-power-rankings/',
          note: 'Analysis of deck performance across the Pro Tour.',
        },
      ],
    },
  ],
  bans: [
    {
      date: '2018-01-19',
      cards: [
        'Attune with Aether',
        'Rogue Refiner',
        'Rampaging Ferocidon',
        'Ramunap Ruins',
      ],
      explanation:
        'Temur Energy had dominated Standard for almost half a year, and even with Rivals of Ixalan on the horizon, Wizards concluded the deck would remain too strong. Attune with Aether and Rogue Refiner were banned to dismantle Energy. Ramunap Ruins and Rampaging Ferocidon were banned to weaken Ramunap Red, which was the winningest deck with Energy keeping it in check.',
      source: {
        title: 'Banned and Restricted Update, January 15 2018',
        publisher: 'Wizards of the Coast',
        url: 'https://www.mtggoldfish.com/articles/banned-and-restricted-update-january-15-2018-attune-refiner-ferocidon-ramunap-ruins-banned',
        date: '2018-01-15',
      },
    },
  ],
  setReleases: [
    { date: '2018-01-19', name: 'Rivals of Ixalan', code: 'RIX' },
    { date: '2018-04-27', name: 'Dominaria', code: 'DOM', note: 'Introduced Teferi, Hero of Dominaria and Goblin Chainwhirler' },
    { date: '2018-07-13', name: 'Core Set 2019', code: 'M19', note: 'Included Nexus of Fate as Buy-a-Box promo' },
    { date: '2018-10-05', name: 'Guilds of Ravnica', code: 'GRN', note: 'Standard rotation: Kaladesh and Amonkhet blocks rotate out' },
  ],
  representativeDecks: [
    {
      name: 'Mono-Red Aggro (Hazoret)',
      slug: 'mono-red-hazoret-standard-2018',
      period: 'Post-Energy Rebuilding',
      archetype: 'aggro',
      summary:
        'A mono-red aggro shell centered on Hazoret the Fervent as an indestructible four-drop, with Bomat Courier for card advantage, Goblin Chainwhirler as a value three-drop and one-toughness sweeper, and Glorybringer to close. Chandra, Torch of Defiance ramps and burns. Punishes slow decks but vulnerable to lifegain.',
      keyCards: ['Hazoret the Fervent', 'Bomat Courier', 'Goblin Chainwhirler', 'Glorybringer', 'Chandra, Torch of Defiance'],
      decklistPending: true,
      source: {
        title: 'Pro Tour Dominaria Top 8',
        publisher: 'Wizards of the Coast',
        url: 'https://mtg.fandom.com/wiki/Pro_Tour_Dominaria',
      },
    },
    {
      name: 'UW Control (Teferi)',
      slug: 'uw-control-teferi-standard-2018',
      period: 'Chainwhirler Summer',
      archetype: 'control',
      summary:
        'A blue-white control deck built around Teferi, Hero of Dominaria as the inevitability engine — untapping lands, exiling threats, and ultimately drawing the deck. Seal Away and Settle the Wreckage answer creatures, Search for Azcanta filters and refills. Inevitable late game but slow against fast combo.',
      keyCards: ['Teferi, Hero of Dominaria', 'Seal Away', 'Settle the Wreckage', 'Search for Azcanta', 'Teferi, Hero of Dominaria'],
      decklistPending: true,
      source: {
        title: 'Pro Tour Dominaria coverage',
        publisher: 'Wizards of the Coast',
        url: 'https://mtg.fandom.com/wiki/Pro_Tour_Dominaria',
      },
    },
    {
      name: 'Golgari Midrange',
      slug: 'golgari-midrange-standard-2018',
      period: 'Golgari Midrange',
      archetype: 'midrange',
      summary:
        'A black-green midrange deck centered on Jadelight Ranger explore growth, Wildgrowth Walker gaining life on explore, and Ravenous Chupacabra removing creatures on entry. Vivien Reid handles flyers and refills, Find // Finality serves as flexible utility. Grindy but pressured by combo.',
      keyCards: ['Jadelight Ranger', 'Wildgrowth Walker', 'Vivien Reid', 'Ravenous Chupacabra', 'Find // Finality'],
      decklistPending: true,
      source: {
        title: 'Pro Tour Guilds of Ravnica',
        publisher: 'MTG Wiki (Fandom)',
        url: 'https://mtg.fandom.com/wiki/Pro_Tour_Guilds_of_Ravnica',
      },
    },
    {
      name: 'Izzet Drakes',
      slug: 'izzet-drakes-standard-2018',
      period: 'Golgari Midrange',
      archetype: 'tempo',
      summary:
        'A blue-red tempo deck that fills the graveyard with cantrips like Chart a Course and Radical Idea to scale Crackling Drake and Enigma Drake, then returns Arclight Phoenix from the graveyard for free with three spells per turn. Explosive but vulnerable to graveyard hate.',
      keyCards: ['Arclight Phoenix', 'Crackling Drake', 'Enigma Drake', 'Chart a Course', 'Radical Idea'],
      decklistPending: true,
      source: {
        title: 'PT Guilds of Ravnica Standard Deck Power Rankings',
        publisher: 'Hipsters of the Coast',
        url: 'https://www.hipstersofthecoast.com/2018/11/pt-guilds-of-ravnica-mtg-standard-deck-power-rankings/',
      },
    },
  
    {
      name: 'UB Midrange',
      slug: 'ub-midrange-standard-2018',
      period: 'Post-Energy Rebuilding',
      archetype: 'midrange',
      summary:
        'A blue-black midrange deck anchored by The Scarab God as a recurring finisher and Champion of Wits for early card filter. Glimmer of Genius refills, Vraska\'s Contempt exiles anything, Fatal Push handles cheap threats. Grindy and resilient but slow against fast combo.',
      keyCards: ['The Scarab God', 'Glimmer of Genius', 'Vraska\'s Contempt', 'Fatal Push', 'Champion of Wits'],
      decklistPending: true,
    },
    {
      name: 'God-Pharaoh\'s Gift (UW)',
      slug: 'god-pharaohs-gift-uw-standard-2018',
      period: 'Post-Energy Rebuilding',
      archetype: 'combo',
      summary:
        'A blue-white reanimator combo deck that cheats God-Pharaoh\'s Gift into play via Refurbish or Gate to the Afterlife, then loops creatures from the graveyard for repeated 4/4 hasty Angel tokens. Champion of Wits filters and feeds the bin. Devastating but vulnerable to graveyard hate.',
      keyCards: ['God-Pharaoh\'s Gift', 'Refurbish', 'Angel of Invention', 'Champion of Wits', 'Gate to the Afterlife'],
      decklistPending: true,
    },
    {
      name: 'UW Approach',
      slug: 'uw-approach-standard-2018',
      period: 'Post-Energy Rebuilding',
      archetype: 'control',
      summary:
        'A blue-white control deck built on Approach of the Second Sun as the alternate win condition. Settle the Wreckage and Fumigate sweep, Glimmer of Genius and Torrential Gearhulk provide card advantage. Inevitable but vulnerable to fast aggro and combo.',
      keyCards: ['Approach of the Second Sun', 'Settle the Wreckage', 'Fumigate', 'Glimmer of Genius', 'Torrential Gearhulk'],
      decklistPending: true,
    },
    {
      name: 'Grixis Energy',
      slug: 'grixis-energy-standard-2018',
      period: 'Post-Energy Rebuilding',
      archetype: 'midrange',
      summary:
        'A blue-red-black midrange-energy deck centered on The Scarab God as a recurring threat, supported by Glimmer of Genius and Harnessed Lightning. Fatal Push handles cheap threats, Whirler Virtuoso builds energy and bodies. Grindy and resilient but pressured by exile removal.',
      keyCards: ['The Scarab God', 'Glimmer of Genius', 'Harnessed Lightning', 'Fatal Push', 'Whirler Virtuoso'],
      decklistPending: true,
    },
    {
      name: 'WB Vehicles',
      slug: 'wb-vehicles-standard-2018',
      period: 'Post-Energy Rebuilding',
      archetype: 'aggro',
      summary:
        'A white-black aggro deck that crews Heart of Kiran with cheap creatures like Toolcraft Exemplar and Scrapheap Scrounger. Gideon of the Trials doubles as a planeswalker, Fatal Push removes blockers. Fast and resilient but pressured by efficient removal on crews.',
      keyCards: ['Heart of Kiran', 'Toolcraft Exemplar', 'Scrapheap Scrounger', 'Gideon of the Trials', 'Fatal Push'],
      decklistPending: true,
    },
    {
      name: 'Mono-Red Aggro',
      slug: 'mono-red-aggro-standard-2018',
      period: 'Chainwhirler Summer',
      archetype: 'aggro',
      summary:
        'A mono-red aggro shell built around Hazoret the Fervent backed by Goblin Chainwhirler as a one-toughness sweeper and three-power body. Bomat Courier provides card advantage, Earthshaker Khenra punishes ground blockers, Rampaging Ferocidon blocks lifegain. Punishes slow decks but vulnerable to sweepers.',
      keyCards: ['Hazoret the Fervent', 'Goblin Chainwhirler', 'Bomat Courier', 'Earthshaker Khenra', 'Rampaging Ferocidon'],
      decklistPending: true,
    },
    {
      name: 'RB Aggro',
      slug: 'rb-aggro-standard-2018',
      period: 'Chainwhirler Summer',
      archetype: 'aggro',
      summary:
        'A red-black aggro deck combining Hazoret the Fervent with Scrapheap Scrounger as a recurring threat and Unlicensed Disintegration as removal-plus-burn. Goblin Chainwhirler sweeps small creatures, Bomat Courier draws cards. Resilient against fair decks but pressured by lifegain.',
      keyCards: ['Hazoret the Fervent', 'Scrapheap Scrounger', 'Goblin Chainwhirler', 'Unlicensed Disintegration', 'Bomat Courier'],
      decklistPending: true,
    },
    {
      name: 'Steel Leaf Stompy',
      slug: 'steel-leaf-stompy-standard-2018',
      period: 'Chainwhirler Summer',
      archetype: 'aggro',
      summary:
        'A mono-green aggro deck powered by Llanowar Elves\' turn-one ramp into Steel Leaf Champion — an uncolored-attack-protected three-power three-drop. Ghalta, Primal Hunger comes down cheaply, Blossoming Defense protects threats. Fast and resilient but pressured by sweepers.',
      keyCards: ['Steel Leaf Champion', 'Llanowar Elves', 'Ghalta, Primal Hunger', 'Resilient Khenra', 'Blossoming Defense'],
      decklistPending: true,
    },
    {
      name: 'BG Constrictor',
      slug: 'bg-constrictor-standard-2018',
      period: 'Chainwhirler Summer',
      archetype: 'midrange',
      summary:
        'A black-green midrange deck centered on Winding Constrictor doubling counters from Walking Ballista, Verdurous Gearhulk, and Rishkar, Peema Renegade. Fatal Push handles threats cheaply. Resilient but pressured by sweepers.',
      keyCards: ['Winding Constrictor', 'Walking Ballista', 'Verdurous Gearhulk', 'Rishkar, Peema Renegade', 'Fatal Push'],
      decklistPending: true,
    },
    {
      name: 'UW God-Pharaoh\'s Gift',
      slug: 'uw-god-pharaohs-gift-standard-2018',
      period: 'Chainwhirler Summer',
      archetype: 'combo',
      summary:
        'A blue-white reanimator combo deck that fetches God-Pharaoh\'s Gift via Gate to the Afterlife or Refurbish, then exiles creatures from the graveyard for 4/4 hasty Angel tokens. Champion of Wits self-mills and refills. Powerful engine but vulnerable to exile-based graveyard hate.',
      keyCards: ['God-Pharaoh\'s Gift', 'Refurbish', 'Angel of Invention', 'Champion of Wits', 'Gate to the Afterlife'],
      decklistPending: true,
    },
    {
      name: 'Jeskai Control',
      slug: 'jeskai-control-standard-2018',
      period: 'Golgari Midrange',
      archetype: 'control',
      summary:
        'A blue-red-white control deck anchored by Teferi, Hero of Dominaria as the inevitable game-ender. Niv-Mizzet, Parun draws cards on counterspells and burns, Justice Strike and Lava Coil handle threats. Strong against creature decks but slow against fast combo.',
      keyCards: ['Teferi, Hero of Dominaria', 'Niv-Mizzet, Parun', 'Justice Strike', 'Lava Coil', 'Settle the Wreckage'],
      decklistPending: true,
    },
    {
      name: 'Boros Aggro',
      slug: 'boros-aggro-standard-2018',
      period: 'Golgari Midrange',
      archetype: 'aggro',
      summary:
        'A red-white aggro deck powered by Legion Warboss producing menace tokens and Tajic, Legion\'s Edge protecting the team. History of Benalia produces Knight tokens, Heroic Reinforcements pumps and floods the board. Punishes slow decks but vulnerable to sweepers.',
      keyCards: ['Legion Warboss', 'Goblin Chainwhirler', 'Tajic, Legion\'s Edge', 'History of Benalia', 'Heroic Reinforcements'],
      decklistPending: true,
    },
    {
      name: 'Mono-Blue Tempo',
      slug: 'mono-blue-tempo-standard-2018',
      period: 'Golgari Midrange',
      archetype: 'tempo',
      summary:
        'A mono-blue tempo deck that suits up Tempest Djinn and Siren Stormtamer with Curious Obsession for card advantage on attack. Dive Down protects threats from removal, Wizard\'s Retort counters key spells. Punishes greedy decks but vulnerable to sweepers and lifegain.',
      keyCards: ['Tempest Djinn', 'Curious Obsession', 'Siren Stormtamer', 'Dive Down', 'Wizard\'s Retort'],
      decklistPending: true,
    },
  ],
}

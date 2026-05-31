import type { YearFormatEntry } from '../types'

export const standard2016: YearFormatEntry = {
  year: 2016,
  format: 'standard',
  title: 'Standard 2016',
  subtitle: 'From Rally to Energy',
  shortLabel: 'Collected Company era',
  summary:
    'The year began with Rally the Ancestors and Collected Company dominating the BFZ-Khans Standard. After the April rotation under the new two-block model, GW Tokens and Bant Company took over, with Steve Rubin winning Pro Tour Shadows over Innistrad on GW Tokens. Bant Company remained the deck to beat through summer. Kaladesh arrived in October, launching the Energy era: Pro Tour Kaladesh was defined by Aetherworks Marvel cheating out Emrakul and Smuggler\'s Copter appearing in nearly every aggressive deck. The format closed the year under mounting pressure, with bans looming in January 2017.',
  headlineDeck: 'Bant Company',
  eras: [
    {
      id: '2016-std-rally',
      name: 'Rally & Company Winter',
      start: '2016-01',
      end: '2016-04',
      dominantDecks: ['4-Color Rally', 'Bant Company'],
      challengers: ['Atarka Red', 'Abzan Aggro', 'Jeskai Black', 'Mardu Green'],
      keyCards: [
        { name: 'Rally the Ancestors', role: 'Mass reanimation combo finisher' },
        { name: 'Collected Company', role: 'Instant-speed creature deployment engine' },
        { name: 'Jace, Vryn\'s Prodigy', role: 'Card selection and flashback enabler' },
        { name: 'Reflector Mage', role: 'Tempo swing on a creature' },
        { name: 'Nantuko Husk', role: 'Sacrifice outlet for Rally combos' },
      ],
      summary:
        '4-Color Rally was the most feared deck in early 2016 Standard, using Collected Company and Rally the Ancestors to fill the graveyard and then reanimate a lethal board featuring Zulaport Cutthroat drain triggers. Bant Company leveraged Collected Company with Reflector Mage for a more tempo-oriented approach. Atarka Red provided aggressive pressure. Pro Tour Oath of the Gatewatch in February featured Modern, but the Standard metagame was shaped by these archetypes at GPs and SCG events.',
      whyItDominated: [
        'Rally the Ancestors could win from an empty board with a full graveyard',
        'Collected Company provided card advantage at instant speed',
        'Jace, Vryn\'s Prodigy enabled graveyard setup and flashback',
        'Zulaport Cutthroat drain triggers made blocking irrelevant',
      ],
      whyItEnded:
        'The April 2016 Standard rotation removed Khans of Tarkir and Fate Reforged from the format under the new two-block rotation model. Rally the Ancestors, Jace, Vryn\'s Prodigy, and many key cards rotated out, completely reshaping the metagame.',
      confidence: 'high',
      sources: [
        {
          title: 'MTGTop8 - Standard Rally the Ancestors decklists',
          publisher: 'MTGTop8',
          url: 'https://mtgtop8.com/archetype?a=535',
          note: 'Tournament results showing 4-Color Rally dominance in early 2016.',
        },
        {
          title: 'Pro Tour Oath of the Gatewatch: By the Meta',
          publisher: 'MTGGoldfish',
          url: 'https://www.mtggoldfish.com/articles/pro-tour-oath-of-the-gatewatch-by-the-meta',
          date: '2016-02-07',
          note: 'Metagame analysis of the PT OGW era.',
        },
      ],
    },
    {
      id: '2016-std-soi',
      name: 'Bant Company Summer',
      start: '2016-04',
      end: '2016-10',
      dominantDecks: ['Bant Company', 'GW Tokens'],
      challengers: ['BW Control', 'Humans', 'Mono-White Humans', 'BG Delirium'],
      keyCards: [
        { name: 'Collected Company', role: 'Instant-speed creature deployment engine' },
        { name: 'Reflector Mage', role: 'Tempo creature bouncing threats' },
        { name: 'Spell Queller', role: 'Flash creature that exiled spells' },
        { name: 'Nissa, Voice of Zendikar', role: 'Token generation and anthem for GW Tokens' },
        { name: 'Gideon, Ally of Zendikar', role: 'Planeswalker threat and anthem' },
        { name: 'Dromoka\'s Command', role: 'Versatile combat trick and removal' },
      ],
      summary:
        'After the April rotation, Bant Company emerged as the clear best deck, combining Collected Company with Spell Queller and Reflector Mage. Steve Rubin won Pro Tour Shadows over Innistrad in Madrid with GW Tokens, featuring Nissa, Voice of Zendikar and Gideon, Ally of Zendikar. The Top 8 showcased eight different archetypes, but Bant Company and GW Tokens dominated the ensuing months. Eldritch Moon in July added Spell Queller and Emrakul, the Promised End, further strengthening Bant Company and spawning BG Delirium strategies.',
      whyItDominated: [
        'Collected Company into Spell Queller or Reflector Mage was backbreaking',
        'The deck had both aggressive and defensive modes',
        'GW Tokens generated overwhelming board presence with planeswalkers',
        'Spell Queller added a counter-magic element to creature decks',
      ],
      whyItEnded:
        'Kaladesh released in October 2016, bringing Smuggler\'s Copter, the energy mechanic, and Aetherworks Marvel. Collected Company rotated with the Dragons of Tarkir and Magic Origins sets in the September rotation, fundamentally changing what was viable.',
      confidence: 'high',
      sources: [
        {
          title: 'Pro Tour Shadows over Innistrad Top 8 Decklists',
          publisher: 'MTGGoldfish',
          url: 'https://www.mtggoldfish.com/articles/pro-tour-shadows-over-innistrad-top-8-decklists',
          date: '2016-04-24',
          note: 'Steve Rubin won with GW Tokens. Top 8 had 8 different archetypes.',
        },
        {
          title: 'Pro Tour Shadows over Innistrad',
          publisher: 'MTG Wiki',
          url: 'https://mtg.fandom.com/wiki/Pro_Tour_Shadows_over_Innistrad',
          date: '2016-04-22',
          note: 'Official coverage of the Pro Tour in Madrid.',
        },
      ],
    },
    {
      id: '2016-std-kaladesh',
      name: 'Aetherworks Marvel Emerges',
      start: '2016-10',
      end: '2016-12',
      dominantDecks: ['Aetherworks Marvel', 'UW Flash'],
      challengers: ['BG Delirium', 'Mardu Vehicles', 'RW Vehicles', 'Temur Aetherworks'],
      keyCards: [
        { name: 'Aetherworks Marvel', role: 'Cheated Emrakul or Ulamog into play off energy' },
        { name: 'Smuggler\'s Copter', role: 'Ubiquitous 2-mana vehicle with looting' },
        { name: 'Emrakul, the Promised End', role: 'Game-ending threat via Marvel or Delirium' },
        { name: 'Ishkanah, Grafwidow', role: 'Defensive delirium payoff' },
        { name: 'Torrential Gearhulk', role: 'Flash finisher for control decks' },
      ],
      summary:
        'Kaladesh transformed Standard with the energy mechanic and powerful artifacts. Pro Tour Kaladesh in Honolulu (October 14-16) saw Shota Yasooka win with a Grixis Control deck featuring Torrential Gearhulk, but the metagame was dominated by Aetherworks Marvel decks spinning into Emrakul, the Promised End on turn four. Smuggler\'s Copter appeared in virtually every aggressive and midrange deck. BG Delirium with Ishkanah remained competitive. The format grew increasingly warped around these cards, leading to emergency bans in January 2017.',
      whyItDominated: [
        'Aetherworks Marvel could deploy Emrakul as early as turn four',
        'Smuggler\'s Copter was the best two-drop in every creature deck',
        'Energy had no natural counterplay — opponents could not interact with energy counters',
        'The combination of combo (Marvel) and tempo (Copter) left little room for other strategies',
      ],
      whyItEnded:
        'On January 9, 2017, Wizards banned Smuggler\'s Copter, Emrakul, the Promised End, and Reflector Mage from Standard in an unprecedented mid-season ban announcement. This was the first Standard ban since Jace, the Mind Sculptor and Stoneforge Mystic in 2011.',
      confidence: 'high',
      sources: [
        {
          title: 'Pro Tour Kaladesh',
          publisher: 'MTG Wiki',
          url: 'https://mtg.fandom.com/wiki/Pro_Tour_Kaladesh',
          date: '2016-10-16',
          note: 'Shota Yasooka won. 466 players, second-largest individual Pro Tour ever.',
        },
        {
          title: 'Pro Tour Kaladesh: By the Numbers',
          publisher: 'MTGGoldfish',
          url: 'https://www.mtggoldfish.com/articles/pro-tour-kaladesh-by-the-numbers',
          date: '2016-10-16',
          note: 'Metagame breakdown showing Aetherworks Marvel and Smuggler\'s Copter dominance.',
        },
      ],
    },
  ],
  setReleases: [
    { date: '2016-01-22', name: 'Oath of the Gatewatch', code: 'OGW' },
    { date: '2016-04-08', name: 'Shadows over Innistrad', code: 'SOI', note: 'Standard rotation: Khans of Tarkir and Fate Reforged rotate out (new two-block model)' },
    { date: '2016-07-22', name: 'Eldritch Moon', code: 'EMN' },
    { date: '2016-09-30', name: 'Kaladesh', code: 'KLD', note: 'Standard rotation: Dragons of Tarkir and Magic Origins rotate out. Energy mechanic introduced.' },
  ],
  representativeDecks: [
    {
      name: '4-Color Rally',
      slug: '4-color-rally-standard-2016',
      period: 'Rally & Company Winter',
      archetype: 'combo',
      summary:
        'A four-color combo deck that uses Collected Company to assemble cheap creatures, then loops Rally the Ancestors with Zulaport Cutthroat and Nantuko Husk for infinite drain. Jace, Vryn\'s Prodigy mills the deck. Devastating combo but vulnerable to exile graveyard hate.',
      keyCards: ['Rally the Ancestors', 'Collected Company', 'Zulaport Cutthroat', 'Nantuko Husk', 'Jace, Vryn\'s Prodigy'],
      decklistPending: true,
      source: {
        title: 'MTGTop8 Rally the Ancestors decklists',
        publisher: 'MTGTop8',
        url: 'https://mtgtop8.com/archetype?a=535',
      },
    },
    {
      name: 'Bant Company',
      slug: 'bant-company-standard-2016',
      period: 'Bant Company Summer',
      archetype: 'tempo',
      summary:
        'A green-white-blue tempo deck that flashes in Spell Queller and Reflector Mage at instant speed via Collected Company. Sylvan Advocate scales late-game, Dromoka\'s Command provides flexible utility. Disrupts on every turn but pressured by sweepers.',
      keyCards: ['Collected Company', 'Spell Queller', 'Reflector Mage', 'Sylvan Advocate', 'Dromoka\'s Command'],
      decklistPending: true,
      source: {
        title: 'Pro Tour Shadows over Innistrad Standard decks',
        publisher: 'MTGGoldfish',
        url: 'https://www.mtggoldfish.com/tournament/pro-tour-shadows-over-innistrad',
      },
    },
    {
      name: 'GW Tokens',
      slug: 'gw-tokens-standard-2016',
      period: 'Bant Company Summer',
      archetype: 'midrange',
      summary:
        'A green-white tokens deck powered by Nissa, Voice of Zendikar and Gideon, Ally of Zendikar producing armies of tokens. Archangel Avacyn flips into a sweeper, Hangarback Walker scales and dies into Thopters. Goes wide quickly but vulnerable to sweepers.',
      keyCards: ['Nissa, Voice of Zendikar', 'Gideon, Ally of Zendikar', 'Archangel Avacyn', 'Hangarback Walker', 'Secure the Wastes'],
      decklistPending: true,
      source: {
        title: 'Pro Tour Shadows over Innistrad Top 8 Decklists',
        publisher: 'MTGGoldfish',
        url: 'https://www.mtggoldfish.com/articles/pro-tour-shadows-over-innistrad-top-8-decklists',
      },
    },
    {
      name: 'Aetherworks Marvel',
      slug: 'aetherworks-marvel-standard-2016',
      period: 'Aetherworks Marvel Emerges',
      archetype: 'combo',
      summary:
        'A combo deck that builds energy through Attune with Aether and Woodweaver\'s Puzzleknot to activate Aetherworks Marvel and cheat Emrakul, the Promised End or Ulamog into play. Goldfishes turn four reliably but vulnerable to counterspells and the eventual Marvel ban.',
      keyCards: ['Aetherworks Marvel', 'Emrakul, the Promised End', 'Woodweaver\'s Puzzleknot', 'Attune with Aether', 'Ulamog, the Ceaseless Hunger'],
      decklistPending: true,
      source: {
        title: 'Pro Tour Kaladesh metagame breakdown',
        publisher: 'MTGGoldfish',
        url: 'https://www.mtggoldfish.com/articles/pro-tour-kaladesh-by-the-numbers',
      },
    },
  
    {
      name: 'Atarka Red',
      slug: 'atarka-red-standard-2016',
      period: 'Rally & Company Winter',
      archetype: 'aggro',
      summary:
        'A red-green hyper-aggro deck that combines Monastery Swiftspear and Abbot of Keral Keep with prowess triggers from Atarka\'s Command, Become Immense, and Temur Battle Rage for one-shot kills. Explosive but folds to fast lifegain and blockers.',
      keyCards: ['Atarka\'s Command', 'Become Immense', 'Temur Battle Rage', 'Monastery Swiftspear', 'Abbot of Keral Keep'],
      decklistPending: true,
    },
    {
      name: 'Abzan Aggro',
      slug: 'abzan-aggro-standard-2016',
      period: 'Rally & Company Winter',
      archetype: 'aggro',
      summary:
        'A black-green-white aggro shell built on Warden of the First Tree and Anafenza, the Foremost for early pressure, Siege Rhino for value, and Dromoka\'s Command for flexible utility. Wingmate Roc closes with a flying army. Resilient but pressured by sweepers.',
      keyCards: ['Warden of the First Tree', 'Anafenza, the Foremost', 'Siege Rhino', 'Dromoka\'s Command', 'Wingmate Roc'],
      decklistPending: true,
    },
    {
      name: 'Jeskai Black',
      slug: 'jeskai-black-standard-2016',
      period: 'Rally & Company Winter',
      archetype: 'midrange',
      summary:
        'A blue-red-white-black midrange-tempo deck combining Jace, Vryn\'s Prodigy with Mantis Rider, backed by Crackling Doom, Kolaghan\'s Command, and Dig Through Time. Versatile interaction and finishers. Strong against fair midrange but slow against pure combo.',
      keyCards: ['Jace, Vryn\'s Prodigy', 'Mantis Rider', 'Crackling Doom', 'Kolaghan\'s Command', 'Dig Through Time'],
      decklistPending: true,
    },
    {
      name: 'Mardu Green',
      slug: 'mardu-green-standard-2016',
      period: 'Rally & Company Winter',
      archetype: 'midrange',
      summary:
        'A black-red-white-green midrange shell that adds Den Protector to a Mardu base for recurring value. Siege Rhino and Wingmate Roc serve as finishers, Crackling Doom and Sorin, Solemn Visitor support the midrange game. Resilient but pressured by sweepers.',
      keyCards: ['Siege Rhino', 'Crackling Doom', 'Sorin, Solemn Visitor', 'Wingmate Roc', 'Den Protector'],
      decklistPending: true,
    },
    {
      name: 'BW Control',
      slug: 'bw-control-standard-2016',
      period: 'Bant Company Summer',
      archetype: 'control',
      summary:
        'A black-white control deck built on Languish as a one-sided sweeper against small creatures, Gideon, Ally of Zendikar as a flexible planeswalker, and Read the Bones for card advantage. Sorin, Grim Nemesis closes the game. Strong against fair decks but pressured by combo.',
      keyCards: ['Languish', 'Gideon, Ally of Zendikar', 'Sorin, Grim Nemesis', 'Read the Bones', 'Ultimate Price'],
      decklistPending: true,
    },
    {
      name: 'Humans',
      slug: 'humans-standard-2016',
      period: 'Bant Company Summer',
      archetype: 'aggro',
      summary:
        'A mono-white Human tribal aggro deck centered on Thalia\'s Lieutenant scaling with each Human and Always Watching giving vigilance and a global pump. Thraben Inspector and Town Gossipmonger provide cheap bodies, Archangel Avacyn closes. Strong against burn and removal-light decks.',
      keyCards: ['Thalia\'s Lieutenant', 'Always Watching', 'Thraben Inspector', 'Town Gossipmonger', 'Archangel Avacyn'],
      decklistPending: true,
    },
    {
      name: 'Mono-White Humans',
      slug: 'mono-white-humans-standard-2016',
      period: 'Bant Company Summer',
      archetype: 'aggro',
      summary:
        'A mono-white Human tribal aggro shell that swarms with Thraben Inspector and Town Gossipmonger, pumped by Always Watching. Declaration in Stone exiles problem creatures, Archangel Avacyn flips into a sweeper. Punishes slow openings but vulnerable to sweepers.',
      keyCards: ['Thraben Inspector', 'Town Gossipmonger', 'Always Watching', 'Declaration in Stone', 'Archangel Avacyn'],
      decklistPending: true,
    },
    {
      name: 'BG Delirium',
      slug: 'bg-delirium-standard-2016',
      period: 'Bant Company Summer',
      archetype: 'midrange',
      summary:
        'A black-green midrange deck that aims for delirium — four card types in the graveyard — to power up Ishkanah, Grafwidow and Grim Flayer. Liliana, the Last Hope mills and removes blockers, Traverse the Ulvenwald tutors threats. Grindy but vulnerable to graveyard hate.',
      keyCards: ['Ishkanah, Grafwidow', 'Liliana, the Last Hope', 'Grim Flayer', 'Traverse the Ulvenwald', 'Vessel of Nascency'],
      decklistPending: true,
    },
    {
      name: 'UW Flash',
      slug: 'uw-flash-standard-2016',
      period: 'Aetherworks Marvel Emerges',
      archetype: 'tempo',
      summary:
        'A blue-white tempo deck built on Spell Queller and Reflector Mage as flash interaction-plus-bodies. Selfless Spirit protects against sweepers, Smuggler\'s Copter provides a vehicle clock and looting, Archangel Avacyn closes with flash. Strong against fair decks but pressured by combo.',
      keyCards: ['Spell Queller', 'Reflector Mage', 'Selfless Spirit', 'Smuggler\'s Copter', 'Archangel Avacyn'],
      decklistPending: true,
    },
    {
      name: 'Mardu Vehicles',
      slug: 'mardu-vehicles-standard-2016',
      period: 'Aetherworks Marvel Emerges',
      archetype: 'aggro',
      summary:
        'A black-red-white aggro deck that crews Heart of Kiran and Smuggler\'s Copter with cheap creatures like Toolcraft Exemplar and Scrapheap Scrounger. Gideon, Ally of Zendikar serves as both creature and planeswalker. Fast and resilient but pressured by efficient removal on crews.',
      keyCards: ['Heart of Kiran', 'Smuggler\'s Copter', 'Toolcraft Exemplar', 'Scrapheap Scrounger', 'Gideon, Ally of Zendikar'],
      decklistPending: true,
    },
    {
      name: 'RW Vehicles',
      slug: 'rw-vehicles-standard-2016',
      period: 'Aetherworks Marvel Emerges',
      archetype: 'aggro',
      summary:
        'A red-white aggro deck centered on crewing Smuggler\'s Copter and Cultivator\'s Caravan with cheap creatures like Toolcraft Exemplar and Inventor\'s Apprentice. Gideon closes as a planeswalker-creature. Strong tempo with looting but pressured by artifact removal.',
      keyCards: ['Smuggler\'s Copter', 'Toolcraft Exemplar', 'Inventor\'s Apprentice', 'Cultivator\'s Caravan', 'Gideon, Ally of Zendikar'],
      decklistPending: true,
    },
    {
      name: 'Temur Aetherworks',
      slug: 'temur-aetherworks-standard-2016',
      period: 'Aetherworks Marvel Emerges',
      archetype: 'combo',
      summary:
        'A blue-red-green combo deck that builds energy through Attune with Aether, Woodweaver\'s Puzzleknot, and Rogue Refiner to spin Aetherworks Marvel and cheat Ulamog, the Ceaseless Hunger into play. Reliable goldfish but vulnerable to counterspells and disruption.',
      keyCards: ['Aetherworks Marvel', 'Ulamog, the Ceaseless Hunger', 'Woodweaver\'s Puzzleknot', 'Attune with Aether', 'Rogue Refiner'],
      decklistPending: true,
    },
  ],
}

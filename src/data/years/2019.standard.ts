import type { YearFormatEntry } from '../types'

export const standard2019: YearFormatEntry = {
  year: 2019,
  format: 'standard',
  title: 'Standard 2019',
  subtitle: 'From Ravnica Allegiance to the Oko catastrophe',
  shortLabel: 'Oko ban year',
  summary:
    'Standard 2019 swung from one of the best metagames in years to one of the most warped. The Ravnica Allegiance era saw diverse competition between Esper Control, Sultai Midrange, Mono-Blue Tempo, Mono-Red, and Simic Nexus. War of the Spark introduced Teferi, Time Raveler, Narset, and Nissa Who Shakes the World, accelerating planeswalker-centric strategies. Then Throne of Eldraine arrived and Oko, Thief of Crowns shattered the format. After Field of the Dead was banned in October, Oko Food decks consumed nearly 70% of the Mythic Championship V field. On November 18, Wizards banned Oko, Once Upon a Time, and Veil of Summer in the most aggressive Standard ban action since Energy.',
  headlineDeck: 'Oko Food (Simic/Sultai)',
  eras: [
    {
      id: '2019-std-rna',
      name: 'Sultai and Esper',
      start: '2019-01',
      end: '2019-05',
      dominantDecks: ['Sultai Midrange', 'Esper Control'],
      challengers: ['Mono-Blue Tempo', 'Mono-Red Aggro', 'Simic Nexus', 'Izzet Phoenix', 'White Aggro'],
      keyCards: [
        { name: 'Hydroid Krasis', role: 'Scalable card draw and lifegain threat for Sultai' },
        { name: 'Teferi, Hero of Dominaria', role: 'Win condition and card advantage engine for Esper' },
        { name: 'Curious Obsession', role: 'Card draw enchantment enabling Mono-Blue Tempo' },
        { name: 'Nexus of Fate', role: 'Extra turn spell powering Simic Nexus combo' },
        { name: 'Tempest Djinn', role: 'Efficient evasive threat for Mono-Blue' },
      ],
      summary:
        'Ravnica Allegiance brought Hydroid Krasis, Absorb, and new guild tools that elevated Sultai Midrange and Esper Control to the top. Mythic Championship Cleveland showcased a remarkably healthy format: Autumn Burchett won with Mono-Blue Tempo, defeating Yoshihiko Ikawa on Esper Control 3-2 in the finals. Three of the Top 8 played Mono-Blue Tempo. Sultai Midrange was the most popular deck but couldn\'t break into the Top 8. Simic Nexus used Wilderness Reclamation and Nexus of Fate for a powerful combo finish, and Nexus of Fate was banned in Best-of-One on Arena in February.',
      whyItDominated: [
        'Hydroid Krasis gave Sultai an uncounterable card advantage engine',
        'Esper Control combined Teferi with efficient Ravnica-era removal and counterspells',
        'Mono-Blue Tempo punished slow starts with Curious Obsession and cheap counterspells',
        'No single deck exceeded 25% of the metagame, maintaining diversity',
      ],
      whyItEnded:
        'War of the Spark in May 2019 introduced a wave of powerful planeswalkers, especially Teferi, Time Raveler, Narset, Parter of Veils, and Nissa, Who Shakes the World, which fundamentally changed how the format operated.',
      confidence: 'high',
      sources: [
        {
          title: 'Mythic Championship Cleveland 2019',
          publisher: 'MTG Wiki (Fandom)',
          url: 'https://mtg.fandom.com/wiki/Mythic_Championship_Cleveland_2019',
          date: '2019-02-22',
          note: 'Won by Autumn Burchett on Mono-Blue Tempo. Diverse Top 8 including Esper, Izzet Phoenix, Gruul Aggro, and Simic Nexus.',
        },
        {
          title: 'Autumn Burchett Wins Mythic Championship I Cleveland',
          publisher: 'Hipsters of the Coast',
          url: 'https://www.hipstersofthecoast.com/2019/02/autumn-burchett-wins-mythic-championship-i-cleveland/',
          date: '2019-02-24',
          note: 'Burchett defeated Ikawa (Esper Control) 3-2 in the finals.',
        },
      ],
    },
    {
      id: '2019-std-war',
      name: 'Teferi and Nissa Planeswalkers',
      start: '2019-05',
      end: '2019-10',
      dominantDecks: ['Esper Hero', 'Simic Nexus'],
      challengers: ['Mono-Red Aggro', 'Esper Control', 'Bant Ramp (Nissa)', 'Gruul Aggro', 'Vampires'],
      keyCards: [
        { name: 'Teferi, Time Raveler', role: 'Shut down instant-speed interaction and bounced threats' },
        { name: 'Narset, Parter of Veils', role: 'Card draw restriction that punished control mirrors' },
        { name: 'Nissa, Who Shakes the World', role: 'Mana doubler and threat generator for green ramp' },
        { name: 'Hero of Precinct One', role: 'Token engine for multicolor Esper Hero builds' },
        { name: 'Wilderness Reclamation', role: 'Mana engine enabling Nexus of Fate loops' },
      ],
      summary:
        'War of the Spark flooded Standard with 36 planeswalkers, and three immediately reshaped the format. Teferi, Time Raveler eliminated instant-speed play for opponents, Narset, Parter of Veils punished card draw, and Nissa, Who Shakes the World turbocharged green ramp. Esper Hero combined Hero of Precinct One with the powerful Esper planeswalker suite. Simic Nexus continued to leverage Wilderness Reclamation for combo kills. Core Set 2020 added Chandra, Awakened Inferno and Field of the Dead, setting the stage for the autumn crisis.',
      whyItDominated: [
        'Teferi, Time Raveler warped the format by shutting down instant-speed interaction',
        'Narset provided card selection while denying opponents extra draws',
        'Nissa doubled green mana production and created 3/3 haste threats',
        'The planeswalker density made removal-light strategies unviable',
      ],
      whyItEnded:
        'Throne of Eldraine\'s rotation in October brought Oko, Thief of Crowns and Field of the Dead, which quickly overwhelmed all existing strategies.',
      confidence: 'high',
      sources: [
        {
          title: 'The Year of the Banhammer',
          publisher: 'Cardmarket',
          url: 'https://www.cardmarket.com/en/Insight/Articles/The-Year-of-the-Banhammer',
          note: 'Retrospective on the 2019 Standard ban wave including War of the Spark context.',
        },
      ],
    },
    {
      id: '2019-std-oko',
      name: 'The Oko Crisis',
      start: '2019-10',
      end: '2019-12',
      dominantDecks: ['Oko Food (Simic/Sultai/Bant)'],
      challengers: ['Fires of Invention', 'Jeskai Fires', 'Adventures (Golgari)', 'Mono-Red Aggro'],
      keyCards: [
        { name: 'Oko, Thief of Crowns', role: 'Format-warping planeswalker that neutralized opposing threats' },
        { name: 'Once Upon a Time', role: 'Free cantrip providing unmatched turn-one consistency for green' },
        { name: 'Veil of Summer', role: 'One-mana protection spell that invalidated blue and black interaction' },
        { name: 'Gilded Goose', role: 'Turn-one Food producer enabling turn-two Oko' },
        { name: 'Wicked Wolf', role: 'Repeatable removal creature synergizing with Food tokens' },
        { name: 'Field of the Dead', role: 'Zombie token generator that dominated before Oko took over' },
      ],
      summary:
        'Throne of Eldraine unleashed the most dominant Standard card since Jace, the Mind Sculptor. Oko, Thief of Crowns turned opposing creatures and artifacts into 3/3 Elks, neutralizing nearly every strategy. First, Field of the Dead with Golos, Tireless Pilgrim dominated (42% of Mythic Championship V), prompting a ban on October 21. But Oko Food decks immediately filled the vacuum, representing nearly 70% of the Mythic Championship Richmond field. Only Simic Flash had a favorable matchup against Food. On November 18, Wizards banned Oko, Once Upon a Time, and Veil of Summer, the most aggressive Standard ban action since the Energy bans of January 2018.',
      whyItDominated: [
        'Oko\'s +1 ability turned any opposing threat into a vanilla 3/3, invalidating entire strategies',
        'At 3 mana with high starting loyalty, Oko was nearly impossible to remove through combat',
        'Once Upon a Time gave green decks unmatched consistency on turn one',
        'Veil of Summer shut down the primary interactive tools (blue counters and black removal)',
        'Gilded Goose enabled turn-two Oko, creating an overwhelming tempo advantage',
      ],
      whyItEnded:
        'Wizards banned Oko, Thief of Crowns, Once Upon a Time, and Veil of Summer on November 18, 2019. This followed the Field of the Dead ban from October 21. The post-ban metagame opened up to Fires of Invention, Adventures, and other strategies.',
      confidence: 'high',
      sources: [
        {
          title: 'November 18, 2019, Banned and Restricted Announcement',
          publisher: 'Wizards of the Coast',
          url: 'https://magic.wizards.com/en/news/announcements/november-18-2019-banned-and-restricted-announcement',
          date: '2019-11-18',
          note: 'Banned Oko, Thief of Crowns; Once Upon a Time; and Veil of Summer in Standard.',
        },
        {
          title: 'Oko, Thief of Crowns, Once Upon a Time and Veil of Summer Banned in Standard',
          publisher: 'MTG Arena Zone',
          url: 'https://mtgazone.com/oko-thief-of-crowns-once-upon-a-time-and-veil-of-summer-banned-in-standard/',
          date: '2019-11-18',
          note: 'Food decks represented nearly 70% of the Mythic Championship Richmond field.',
        },
        {
          title: 'Standard Bannings in 2019: Feature or Bug?',
          publisher: 'MTGGoldfish',
          url: 'https://www.mtggoldfish.com/articles/standard-bannings-in-2019-feature-or-bug',
          note: 'Analysis of the unprecedented ban frequency in 2019 Standard.',
        },
      ],
    },
  ],
  bans: [
    {
      date: '2019-02-14',
      cards: ['Nexus of Fate'],
      explanation:
        'Nexus of Fate was banned in MTG Arena Best-of-One formats due to the tedious and abusive loop patterns it enabled. Players could chain multiple Nexus of Fate casts to earn timeouts, then rope opponents. This was the first format-specific Standard ban.',
      source: {
        title: 'MTG Arena Banned and Restricted Announcement',
        publisher: 'Wizards of the Coast',
        url: 'https://magic.wizards.com/en/news/announcements/mtg-arena-banned-and-restricted-announcement-2019-02-14',
        date: '2019-02-14',
      },
    },
    {
      date: '2019-10-21',
      cards: ['Field of the Dead'],
      explanation:
        'Field of the Dead ramp decks represented 42% of the Mythic Championship V field and maintained high win rates. The card created undesirable play patterns with Golos, Tireless Pilgrim generating free Zombie tokens that overwhelmed opponents.',
      source: {
        title: 'October 21, 2019, Banned and Restricted Announcement',
        publisher: 'Wizards of the Coast',
        url: 'https://magic.wizards.com/en/news/announcements/october-21-2019-banned-and-restricted-announcement',
        date: '2019-10-21',
      },
    },
    {
      date: '2019-11-18',
      cards: ['Oko, Thief of Crowns', 'Once Upon a Time', 'Veil of Summer'],
      explanation:
        'Oko Food decks dominated Standard after Field of the Dead\'s ban, representing nearly 70% of the Mythic Championship Richmond field. Oko\'s ability to Elk opposing permanents invalidated most strategies. Once Upon a Time and Veil of Summer were additionally banned to address green\'s systemic overrepresentation in the metagame. This was the most aggressive Standard ban action since the Energy bans of January 2018.',
      source: {
        title: 'November 18, 2019, Banned and Restricted Announcement',
        publisher: 'Wizards of the Coast',
        url: 'https://magic.wizards.com/en/news/announcements/november-18-2019-banned-and-restricted-announcement',
        date: '2019-11-18',
      },
    },
  ],
  setReleases: [
    { date: '2019-01-25', name: 'Ravnica Allegiance', code: 'RNA', note: 'Introduced Hydroid Krasis and new guild mechanics' },
    { date: '2019-05-03', name: 'War of the Spark', code: 'WAR', note: '36 planeswalkers including Teferi, Time Raveler, Narset, and Nissa' },
    { date: '2019-07-12', name: 'Core Set 2020', code: 'M20', note: 'Introduced Field of the Dead and Chandra, Awakened Inferno' },
    { date: '2019-10-04', name: 'Throne of Eldraine', code: 'ELD', note: 'Standard rotation. Introduced Oko, Thief of Crowns, Once Upon a Time, and Veil of Summer' },
  ],
  representativeDecks: [
    {
      name: 'Mono-Blue Tempo',
      slug: 'mono-blue-tempo-standard-2019',
      period: 'Sultai and Esper',
      archetype: 'tempo',
      summary:
        'A mono-blue tempo deck that pairs Curious Obsession on Tempest Djinn or Siren Stormtamer for card advantage on attack. Spell Pierce protects key turns, Merfolk Trickster provides flash interaction. Punishes greedy decks but vulnerable to sweepers and lifegain.',
      keyCards: ['Curious Obsession', 'Tempest Djinn', 'Spell Pierce', 'Siren Stormtamer', 'Merfolk Trickster'],
      source: {
        title: 'Mythic Championship Cleveland 2019',
        publisher: 'MTG Wiki (Fandom)',
        url: 'https://mtg.fandom.com/wiki/Mythic_Championship_Cleveland_2019',
      },
    },
    {
      name: 'Esper Control',
      slug: 'esper-control-standard-2019',
      period: 'Sultai and Esper',
      archetype: 'control',
      summary:
        'A blue-black-white control deck anchored by Teferi, Hero of Dominaria as the inevitable closer. Absorb counters and gains life, Kaya\'s Wrath sweeps creatures, Thought Erasure disrupts. Search for Azcanta filters early. Strong against fair decks but slow against fast combo.',
      keyCards: ['Teferi, Hero of Dominaria', 'Absorb', 'Kaya\'s Wrath', 'Thought Erasure', 'Search for Azcanta'],
      source: {
        title: 'Mythic Championship Cleveland 2019',
        publisher: 'MTG Wiki (Fandom)',
        url: 'https://mtg.fandom.com/wiki/Mythic_Championship_Cleveland_2019',
      },
    },
    {
      name: 'Sultai Midrange',
      slug: 'sultai-midrange-standard-2019',
      period: 'Sultai and Esper',
      archetype: 'midrange',
      summary:
        'A blue-black-green midrange deck centered on Hydroid Krasis as a scaling X-spell finisher with card advantage and lifegain. Jadelight Ranger explores into value, Wildgrowth Walker gains life, Vivien Reid handles flyers. Find // Finality provides flexible utility.',
      keyCards: ['Hydroid Krasis', 'Jadelight Ranger', 'Wildgrowth Walker', 'Vivien Reid', 'Find // Finality'],
      source: {
        title: 'Mythic Championship Cleveland 2019',
        publisher: 'MTG Wiki (Fandom)',
        url: 'https://mtg.fandom.com/wiki/Mythic_Championship_Cleveland_2019',
      },
    },
    {
      name: 'Oko Food',
      slug: 'oko-food-standard-2019',
      period: 'The Oko Crisis',
      archetype: 'midrange',
      summary:
        'A green-blue Food-based midrange deck powered by Oko, Thief of Crowns producing Elk and stealing threats. Gilded Goose makes Food tokens, Wicked Wolf eats Food for fights and growth, Once Upon a Time tutors creatures or lands. Nissa closes. Oko\'s power-level eventually led to its ban.',
      keyCards: ['Oko, Thief of Crowns', 'Gilded Goose', 'Wicked Wolf', 'Once Upon a Time', 'Nissa, Who Shakes the World'],
      source: {
        title: 'November 18, 2019 Banned and Restricted Announcement',
        publisher: 'Wizards of the Coast',
        url: 'https://magic.wizards.com/en/news/announcements/november-18-2019-banned-and-restricted-announcement',
      },
    },
  
    {
      name: 'Mono-Red Aggro',
      slug: 'mono-red-aggro-standard-2019',
      period: 'Sultai and Esper',
      archetype: 'aggro',
      summary:
        'A mono-red aggro deck that pumps Runaway Steam-Kin and Goblin Chainwhirler while burning out the opponent with Skewer the Critics and Light Up the Stage for free card advantage. Experimental Frenzy converts mana into spells. Punishes slow openings but vulnerable to lifegain.',
      keyCards: ['Goblin Chainwhirler', 'Runaway Steam-Kin', 'Light Up the Stage', 'Skewer the Critics', 'Experimental Frenzy'],
    },
    {
      name: 'Simic Nexus',
      slug: 'simic-nexus-standard-2019',
      period: 'Sultai and Esper',
      archetype: 'combo',
      summary:
        'A blue-green combo deck that uses Wilderness Reclamation to double mana and Nexus of Fate to take infinite turns, eventually killing with Hydroid Krasis. Search for Azcanta filters, Root Snare protects life. Inevitable but slow against fast combo and counterspells.',
      keyCards: ['Nexus of Fate', 'Wilderness Reclamation', 'Search for Azcanta', 'Root Snare', 'Hydroid Krasis'],
    },
    {
      name: 'Izzet Phoenix',
      slug: 'izzet-phoenix-standard-2019',
      period: 'Sultai and Esper',
      archetype: 'tempo',
      summary:
        'A blue-red tempo-combo deck that fills the graveyard with Opt and Chart a Course, returning Arclight Phoenix for free after three spells in a turn. Crackling Drake scales with spells, Lightning Strike provides reach. Explosive but vulnerable to graveyard hate.',
      keyCards: ['Arclight Phoenix', 'Crackling Drake', 'Opt', 'Lightning Strike', 'Chart a Course'],
    },
    {
      name: 'White Aggro',
      slug: 'white-aggro-standard-2019',
      period: 'Sultai and Esper',
      archetype: 'aggro',
      summary:
        'A mono-white aggro shell powered by Benalish Marshal and History of Benalia for global pumps and Knight tokens. Venerated Loxodon convokes into a massive boost, Knight of Grace beats up on black, Dauntless Bodyguard protects key threats. Strong wide-board pressure but vulnerable to sweepers.',
      keyCards: ['History of Benalia', 'Benalish Marshal', 'Venerated Loxodon', 'Knight of Grace', 'Dauntless Bodyguard'],
    },
    {
      name: 'Esper Hero',
      slug: 'esper-hero-standard-2019',
      period: 'Teferi and Nissa Planeswalkers',
      archetype: 'midrange',
      summary:
        'A blue-black-white midrange deck that uses Hero of Precinct One to produce a multicolor token every spell. Teferi, Time Raveler and Narset, Parter of Veils control the opponent\'s options, Thought Erasure provides hand disruption. Grindy and resilient but vulnerable to sweepers.',
      keyCards: ['Hero of Precinct One', 'Teferi, Time Raveler', 'Narset, Parter of Veils', 'Thought Erasure', 'Hero\'s Downfall'],
    },
    {
      name: 'Bant Ramp (Nissa)',
      slug: 'bant-ramp-nissa-standard-2019',
      period: 'Teferi and Nissa Planeswalkers',
      archetype: 'ramp',
      summary:
        'A green-white-blue ramp deck powered by Llanowar Elves and Nissa, Who Shakes the World animating lands as five/five threats. Hydroid Krasis scales as an X-spell finisher with card advantage and lifegain, Teferi, Hero of Dominaria provides inevitability. Strong against fair decks.',
      keyCards: ['Nissa, Who Shakes the World', 'Hydroid Krasis', 'Teferi, Hero of Dominaria', 'Llanowar Elves', 'Growth Spiral'],
    },
    {
      name: 'Gruul Aggro',
      slug: 'gruul-aggro-standard-2019',
      period: 'Teferi and Nissa Planeswalkers',
      archetype: 'aggro',
      summary:
        'A red-green aggro shell that ramps with Llanowar Elves into Gruul Spellbreaker and Rekindling Phoenix as resilient threats. Goblin Chainwhirler sweeps small creatures, Domri, Anarch of Bolas refills and pumps. Strong against control but pressured by sweepers.',
      keyCards: ['Llanowar Elves', 'Gruul Spellbreaker', 'Rekindling Phoenix', 'Goblin Chainwhirler', 'Domri, Anarch of Bolas'],
    },
    {
      name: 'Vampires',
      slug: 'vampires-standard-2019',
      period: 'Teferi and Nissa Planeswalkers',
      archetype: 'aggro',
      summary:
        'A black-white Vampire tribal aggro deck where Sorin, Imperious Bloodlord cheats expensive Vampires into play. Champion of Dusk draws for each Vampire, Knight of the Ebon Legion scales, Legion Lieutenant pumps the team. Adanto Vanguard provides indestructible pressure. Strong against fair decks.',
      keyCards: ['Sorin, Imperious Bloodlord', 'Champion of Dusk', 'Knight of the Ebon Legion', 'Legion Lieutenant', 'Adanto Vanguard'],
    },
    {
      name: 'Oko Food (Simic/Sultai/Bant)',
      slug: 'oko-food-simic-sultai-bant-standard-2019',
      period: 'The Oko Crisis',
      archetype: 'midrange',
      summary:
        'A green-blue (often splashing black or white) Food shell that abuses Oko, Thief of Crowns producing Elk and stealing threats. Gilded Goose generates Food, Wicked Wolf eats Food to fight, Nissa animates lands. Dominated every fair matchup until Oko was banned.',
      keyCards: ['Oko, Thief of Crowns', 'Gilded Goose', 'Wicked Wolf', 'Nissa, Who Shakes the World', 'Hydroid Krasis'],
    },
    {
      name: 'Fires of Invention',
      slug: 'fires-of-invention-standard-2019',
      period: 'The Oko Crisis',
      archetype: 'combo',
      summary:
        'A four/five-color combo-control deck that resolves Fires of Invention to cast two spells free per turn. Cavalier of Flame loots and pumps, Kenrith, the Returned King provides win conditions, Deafening Clarion sweeps. Teferi, Time Raveler protects from instants. Powerful but vulnerable to disenchant effects.',
      keyCards: ['Fires of Invention', 'Cavalier of Flame', 'Kenrith, the Returned King', 'Deafening Clarion', 'Teferi, Time Raveler'],
    },
    {
      name: 'Jeskai Fires',
      slug: 'jeskai-fires-standard-2019',
      period: 'The Oko Crisis',
      archetype: 'combo',
      summary:
        'A blue-red-white combo-control deck that resolves Fires of Invention then unloads multiple haymakers per turn — Cavalier of Flame, Kenrith, Teferi, Time Raveler. Deafening Clarion sweeps. Powerful late-game but vulnerable to fast aggro and disenchant.',
      keyCards: ['Fires of Invention', 'Cavalier of Flame', 'Teferi, Time Raveler', 'Deafening Clarion', 'Kenrith, the Returned King'],
    },
    {
      name: 'Adventures (Golgari)',
      slug: 'adventures-golgari-standard-2019',
      period: 'The Oko Crisis',
      archetype: 'midrange',
      summary:
        'A black-green Adventure midrange deck centered on Edgewall Innkeeper drawing a card every Adventure creature cast. Lovestruck Beast and Murderous Rider are efficient threats with utility Adventures. Foulmire Knight and Order of Midnight grind value. Grindy and resilient against fair decks.',
      keyCards: ['Edgewall Innkeeper', 'Lovestruck Beast', 'Murderous Rider', 'Foulmire Knight', 'Order of Midnight'],
    },
  ],
}

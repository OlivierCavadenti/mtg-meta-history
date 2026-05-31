import type { YearFormatEntry } from '../types'

export const extended2010: YearFormatEntry = {
  year: 2010,
  format: 'extended',
  title: 'Extended 2010',
  subtitle: 'The New Extended era begins',
  shortLabel: 'New Extended',
  summary:
    'Extended 2010 was a year of dramatic upheaval. The early PTQ season was dominated by Thopter Depths under the old seven-year card pool, but in June Wizards announced a radical format change: Extended would shrink to only four years of sets. This reset wiped out the entire existing metagame. The "new Extended" debuted at Pro Tour Amsterdam in September, where Paul Rietzl\'s White Weenie triumphed over a field of Doran, Scapeshift, Faeries, and control decks. By Worlds in December, the format had diversified further with 4-Color Control, Tempered Steel, and various Jund and Scapeshift builds competing for dominance.',
  headlineDeck: 'White Weenie',
  eras: [
    {
      id: '2010-ext-pre-amsterdam',
      name: 'New Extended Takes Shape',
      start: '2010-07',
      end: '2010-09',
      dominantDecks: ['Faeries', 'Scapeshift'],
      challengers: ['Doran', 'White Weenie', 'Jund', 'Mythic Bant', 'Goblins'],
      keyCards: [
        { name: 'Bitterblossom', role: 'Persistent token generator for Faeries' },
        { name: 'Cryptic Command', role: 'Versatile counterspell and tempo tool' },
        { name: 'Scapeshift', role: 'Combo kill with Valakut, the Molten Pinnacle' },
        { name: 'Doran, the Siege Tower', role: 'Efficient beater enabling toughness-matters aggro' },
        { name: 'Figure of Destiny', role: 'Scalable one-drop for White Weenie' },
      ],
      summary:
        'After the June 2010 rotation announcement shrunk Extended from seven years to four, the entire metagame reset. The new card pool spanned Lorwyn/Shadowmoor block through Magic 2011, removing Dark Depths, Thopter Foundry/Sword of the Meek, and many other staples. Players scrambled to solve the new format. Faeries and Scapeshift were identified early as the decks to beat, with Doran, White Weenie, and Zoo-style decks forming the initial gauntlet heading into Pro Tour Amsterdam.',
      whyItDominated: [
        'Faeries carried over from old Extended with Bitterblossom and Cryptic Command still legal',
        'Scapeshift offered a resilient combo kill that was hard to interact with',
        'The format reset meant few established counters to these strategies existed',
        'Online PTQ testing identified Faeries and Scapeshift as the leading archetypes',
      ],
      whyItEnded:
        'Pro Tour Amsterdam revealed that the format was more open than expected. Paul Rietzl\'s White Weenie and Brian Kibler\'s Doran proved that aggressive strategies could beat the expected combo and control decks, reshaping the metagame.',
      confidence: 'medium',
      sources: [
        {
          title: 'Pro Tour Amsterdam 2010 coverage',
          publisher: 'MTGTop8',
          url: 'https://mtgtop8.com/event?e=464&f=EX',
          date: '2010-09-05',
          note: 'Top 8 decklists from PT Amsterdam, the first major event of new Extended.',
        },
        {
          title: 'PV\'s Playhouse - Examining the MTGO Extended PTQs',
          publisher: 'Star City Games',
          url: 'https://articles.starcitygames.com/articles/pvs-playhouse-examining-the-mtgo-extended-ptqs/',
          note: 'Analysis of online PTQ results identifying Faeries and Scapeshift as the early frontrunners.',
        },
      ],
    },
    {
      id: '2010-ext-post-amsterdam',
      name: 'Post-Amsterdam Diversification',
      start: '2010-09',
      end: '2010-12',
      dominantDecks: ['4-Color Control', 'Faeries', 'Scapeshift'],
      challengers: ['White Weenie', 'Jund', 'Tempered Steel', 'Elves', 'GW Trap Ramp', 'Cruel Control'],
      keyCards: [
        { name: 'Jace, the Mind Sculptor', role: 'Card advantage and win condition for control' },
        { name: 'Cryptic Command', role: 'Premier counterspell in blue decks' },
        { name: 'Valakut, the Molten Pinnacle', role: 'Combo kill land for Scapeshift and Wargate builds' },
        { name: 'Tempered Steel', role: 'Anthem for artifact aggro' },
        { name: 'Punishing Fire', role: 'Recurring removal with Grove of the Burnwillows' },
      ],
      summary:
        'After Pro Tour Amsterdam, the format continued to develop with the addition of Scars of Mirrodin in October. The Worlds Extended portion in December showcased a diverse field: Luis Scott-Vargas piloted 4-Color Control, Faeries remained a staple, and Scapeshift variants (including Wargate and Prismatic builds) offered consistent combo kills. Tempered Steel emerged as a new aggressive option using Scars of Mirrodin cards. Jund and various control shells rounded out a healthy, if short-lived, metagame.',
      whyItDominated: [
        'Multiple viable archetypes kept the format diverse and competitive',
        'Jace, the Mind Sculptor anchored powerful control strategies',
        'Scapeshift provided a consistent combo finish resistant to creature removal',
        'Faeries adapted with flexible sideboards to handle the diverse field',
      ],
      whyItEnded:
        'Extended continued into 2011 but was already losing relevance as a competitive format. Wizards would eventually replace it with Modern in 2011, signaling the end of Extended as a Pro Tour format.',
      confidence: 'medium',
      sources: [
        {
          title: 'Worlds 2010 - Top Extended Decks',
          publisher: 'MTGTop8',
          url: 'https://mtgtop8.com/event?e=799&f=EX',
          date: '2010-12-12',
          note: 'Extended decklists from the 2010 World Championships in Chiba, Japan.',
        },
        {
          title: 'Extended metagame 2010',
          publisher: 'MTGTop8',
          url: 'https://mtgtop8.com/format?f=EX&meta=94',
          note: 'Aggregate metagame data for Extended events in 2010.',
        },
      ],
    },
  ],
  setReleases: [
    { date: '2010-04-23', name: 'Rise of the Eldrazi', code: 'ROE' },
    { date: '2010-07-16', name: 'Magic 2011', code: 'M11' },
    { date: '2010-10-01', name: 'Scars of Mirrodin', code: 'SOM' },
  ],
  representativeDecks: [
    {
      name: 'White Weenie',
      slug: 'white-weenie-extended-2010',
      period: 'New Extended Takes Shape',
      archetype: 'aggro',
      summary:
        'A mono-white aggro shell built on cheap efficient creatures like Figure of Destiny and Knight of the White Orchid pumped by Honor of the Pure. Brave the Elements protects the team and pushes through lethal. Student of Warfare scales as a one-drop into late game. Punishes slow control but vulnerable to sweepers and lifegain.',
      keyCards: ['Figure of Destiny', 'Knight of the White Orchid', 'Honor of the Pure', 'Brave the Elements', 'Student of Warfare', 'Ranger of Eos'],
      decklistPending: true,
      source: {
        title: 'WW - Paul Rietzl, PT Amsterdam 2010',
        publisher: 'MTGTop8',
        url: 'https://mtgtop8.com/event?e=464&d=198954&f=EX',
        date: '2010-09-05',
      },
    },
    {
      name: 'Doran',
      slug: 'doran-extended-2010',
      period: 'New Extended Takes Shape',
      archetype: 'midrange',
      summary:
        'A black-green-white midrange deck built around Doran, the Siege Tower turning toughness into power. Knight of the Reliquary scales with lands in the graveyard, Treefolk Harbinger tutors up Doran, and Thoughtseize strips key spells. Grinds fair decks but pressured by burn and combo.',
      keyCards: ['Doran, the Siege Tower', 'Knight of the Reliquary', 'Treefolk Harbinger', 'Thoughtseize', 'Murmuring Bosk', 'Putrid Leech'],
      decklistPending: true,
      source: {
        title: 'Doran - Brian Kibler, PT Amsterdam 2010',
        publisher: 'MTGTop8',
        url: 'https://mtgtop8.com/event?e=464&d=198960&f=EX',
        date: '2010-09-05',
      },
    },
    {
      name: 'Faeries',
      slug: 'faeries-extended-2010',
      period: 'Post-Amsterdam Diversification',
      archetype: 'tempo',
      summary:
        'A blue-black tempo deck running Bitterblossom for a flying token army backed by Spellstutter Sprite, Cryptic Command, and Mistbind Clique. Vendilion Clique disrupts at instant speed. Strong against fair midrange and control but vulnerable to fast aggro and Volcanic Fallout.',
      keyCards: ['Bitterblossom', 'Cryptic Command', 'Spellstutter Sprite', 'Mistbind Clique', 'Vendilion Clique', 'Thoughtseize'],
      decklistPending: true,
    },
    {
      name: '4-Color Control',
      slug: 'four-color-control-extended-2010',
      period: 'Post-Amsterdam Diversification',
      archetype: 'control',
      summary:
        'A four-color control deck anchored by Jace, the Mind Sculptor and Cryptic Command for flexible interaction, with Cruel Ultimatum as the game-ending engine. Punishing Fire plus Grove of the Burnwillows provides recurring removal. Outvalues fair decks but slow against fast combo.',
      keyCards: ['Jace, the Mind Sculptor', 'Cryptic Command', 'Cruel Ultimatum', 'Punishing Fire', 'Grove of the Burnwillows', 'Esper Charm'],
      decklistPending: true,
      source: {
        title: '4-Color Control - Luis Scott-Vargas, Worlds 2010',
        publisher: 'MTGTop8',
        url: 'https://mtgtop8.com/event?e=799&f=EX',
        date: '2010-12-12',
      },
    },
    {
      name: 'Scapeshift',
      slug: 'scapeshift-extended-2010',
      period: 'Post-Amsterdam Diversification',
      archetype: 'combo',
      summary:
        'A blue-red-green combo deck that ramps to seven lands then casts Scapeshift to sacrifice them all, fetching Valakut, the Molten Pinnacle and enough Mountains to deal lethal damage. Prismatic Omen and Wargate provide consistency. Goldfishes turn five reliably but vulnerable to counterspells and land destruction.',
      keyCards: ['Scapeshift', 'Valakut, the Molten Pinnacle', 'Wargate', 'Prismatic Omen', 'Sakura-Tribe Elder', 'Search for Tomorrow'],
      decklistPending: true,
    },
  
    {
      name: 'Jund',
      slug: 'jund-extended-2010',
      period: 'New Extended Takes Shape',
      archetype: 'midrange',
      summary:
        'A black-red-green midrange deck powered by Bloodbraid Elf cascading into Blightning, Maelstrom Pulse, or Lightning Bolt. Sprouting Thrinax provides resilient bodies. Grinds out fair decks through card advantage and removal but pressured by dedicated combo.',
      keyCards: ['Bloodbraid Elf', 'Blightning', 'Maelstrom Pulse', 'Sprouting Thrinax', 'Lightning Bolt'],
      decklistPending: true,
    },
    {
      name: 'Mythic Bant',
      slug: 'mythic-bant-extended-2010',
      period: 'New Extended Takes Shape',
      archetype: 'midrange',
      summary:
        'A green-white-blue midrange deck accelerated by Noble Hierarch into Knight of the Reliquary and Rafiq of the Many. Baneslayer Angel stabilizes life while Path to Exile handles big threats. Strong board presence but pressured by combo and dedicated removal.',
      keyCards: ['Noble Hierarch', 'Knight of the Reliquary', 'Rafiq of the Many', 'Baneslayer Angel', 'Path to Exile'],
      decklistPending: true,
    },
    {
      name: 'Goblins',
      slug: 'goblins-extended-2010',
      period: 'New Extended Takes Shape',
      archetype: 'aggro',
      summary:
        'A mono-red Goblin tribal deck that cheats threats into play with Goblin Lackey, tutors via Goblin Matron, and refills with Goblin Ringleader. Siege-Gang Commander and Mogg Fanatic close games. Punishes slow openings but vulnerable to sweepers and lifegain.',
      keyCards: ['Goblin Lackey', 'Goblin Matron', 'Goblin Ringleader', 'Mogg Fanatic', 'Siege-Gang Commander'],
      decklistPending: true,
    },
    {
      name: 'Tempered Steel',
      slug: 'tempered-steel-extended-2010',
      period: 'Post-Amsterdam Diversification',
      archetype: 'aggro',
      summary:
        'A mono-white artifact aggro deck where Tempered Steel pumps a board of cheap artifact creatures like Memnite, Signal Pest, and Vault Skirge. Glint Hawk Idol provides evasion. Goldfishes turn four with a wide board but vulnerable to sweepers and artifact removal.',
      keyCards: ['Tempered Steel', 'Memnite', 'Signal Pest', 'Vault Skirge', 'Glint Hawk Idol'],
      decklistPending: true,
    },
    {
      name: 'Elves',
      slug: 'elves-extended-2010',
      period: 'Post-Amsterdam Diversification',
      archetype: 'combo',
      summary:
        'A mono-green Elf combo deck that chains Heritage Druid and Nettle Sentinel with Glimpse of Nature to draw the deck, then closes with Regal Force or Craterhoof-style finishers. Elvish Visionary provides cantrips. Goldfishes turn three but fragile to sweepers and disruption.',
      keyCards: ['Heritage Druid', 'Nettle Sentinel', 'Glimpse of Nature', 'Elvish Visionary', 'Regal Force'],
      decklistPending: true,
    },
    {
      name: 'GW Trap Ramp',
      slug: 'gw-trap-ramp-extended-2010',
      period: 'Post-Amsterdam Diversification',
      archetype: 'ramp',
      summary:
        'A green-white ramp deck that uses Summoning Trap to cheat Primeval Titan or Eldrazi Conscription\'d Sovereigns of Lost Alara into play. Cultivate ramps the mana base. Crushes slow decks but vulnerable to counterspells and fast clocks.',
      keyCards: ['Summoning Trap', 'Primeval Titan', 'Cultivate', 'Eldrazi Conscription', 'Sovereigns of Lost Alara'],
      decklistPending: true,
    },
    {
      name: 'Cruel Control',
      slug: 'cruel-control-extended-2010',
      period: 'Post-Amsterdam Diversification',
      archetype: 'control',
      summary:
        'A four-color control deck anchored by Cruel Ultimatum as the game-ending haymaker. Cryptic Command, Esper Charm, and Wrath of God answer the board, Volcanic Fallout sweeps small creatures. Outvalues fair decks but slow against fast combo.',
      keyCards: ['Cruel Ultimatum', 'Cryptic Command', 'Volcanic Fallout', 'Esper Charm', 'Wrath of God'],
      decklistPending: true,
    },
  ],
}

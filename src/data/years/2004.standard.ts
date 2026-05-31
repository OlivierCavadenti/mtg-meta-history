import type { YearFormatEntry } from '../types'

export const standard2004: YearFormatEntry = {
  year: 2004,
  format: 'standard',
  title: 'Standard 2004',
  subtitle: 'The Affinity apocalypse',
  shortLabel: 'Affinity dominance',
  summary:
    'Standard 2004 was the year Affinity consumed the format. Darksteel\'s February release added Arcbound Ravager, and Skullclamp turned every creature deck into a card-drawing machine. After Skullclamp was banned in June — the first Standard ban in five years — Affinity only grew stronger with Cranial Plating from Fifth Dawn. The metagame collapsed into two categories: Affinity and anti-Affinity. Julien Nuijten, at fifteen years old, won Worlds 2004 in San Francisco with a Green-White Astral Slide deck specifically built to destroy artifacts. Champions of Kamigawa arrived in October but could not unseat the artifact juggernaut.',
  headlineDeck: 'Affinity',
  eras: [
    {
      id: '2004-std-skullclamp',
      name: 'The Skullclamp Era',
      start: '2004-01',
      end: '2004-06',
      dominantDecks: ['Affinity', 'Goblin Bidding'],
      challengers: ['Tooth and Nail', 'Astral Slide', 'UW Control'],
      keyCards: [
        { name: 'Skullclamp', role: 'Drew two cards whenever an equipped creature died, warped every creature deck' },
        { name: 'Arcbound Ravager', role: 'Sacrifice outlet with modular, distributed counters on death' },
        { name: 'Disciple of the Vault', role: 'Drained life whenever an artifact went to the graveyard' },
        { name: 'Goblin Sharpshooter', role: 'Machine-gunned opponents with Skullclamp-fueled card draw' },
      ],
      summary:
        'Darksteel\'s February arrival brought Arcbound Ravager and Skullclamp, both of which proved format-warping. Skullclamp was particularly egregious: for one mana to equip, it turned every 1-toughness creature into a cantrip that drew two cards. Both Affinity and Goblin Bidding abused it mercilessly. Affinity used artifact lands for free mana, Ravager as a sacrifice engine, and Disciple of the Vault to drain opponents. The format became oppressive enough that Wizards issued an emergency ban of Skullclamp effective June 20, 2004 — the first Standard ban since the Urza era.',
      whyItDominated: [
        'Skullclamp provided unprecedented card advantage for just one mana',
        'Arcbound Ravager\'s modular ability made Affinity boards resilient to removal',
        'Artifact lands provided free acceleration that no other deck could match',
        'Disciple of the Vault turned every artifact sacrifice into direct damage',
      ],
      whyItEnded:
        'Wizards banned Skullclamp on June 1, 2004, effective June 20. It was the first Standard ban in five years, and acknowledged how warped the format had become.',
      confidence: 'high',
      sources: [
        {
          title: 'On This Date: The Banning of Skullclamp (June 1st, 2004)',
          publisher: 'Card Kingdom',
          url: 'https://blog.cardkingdom.com/on-this-date-in-magic-history-the-banning-of-skullclamp/',
          date: '2004-06-01',
          note: 'Announcement of Skullclamp ban in Standard and Mirrodin Block Constructed.',
        },
        {
          title: 'Skullclamp, We Hardly Knew Ye',
          publisher: 'Wizards of the Coast',
          url: 'https://magic.wizards.com/en/articles/archive/skullclamp-we-hardly-knew-ye-2004-06-04',
          date: '2004-06-04',
          note: 'Official article explaining the reasoning behind the Skullclamp ban.',
        },
      ],
    },
    {
      id: '2004-std-affinity-peak',
      name: 'Affinity Unbound',
      start: '2004-06',
      end: '2004-10',
      dominantDecks: ['Affinity'],
      challengers: ['Tooth and Nail', 'Goblin Bidding', 'Big Red', 'Astral Slide'],
      keyCards: [
        { name: 'Cranial Plating', role: 'Lethal damage enabler, often dealt ten-plus damage in a single attack' },
        { name: 'Arcbound Ravager', role: 'Sacrifice engine distributing modular counters' },
        { name: 'Disciple of the Vault', role: 'Life drain on every artifact death' },
        { name: 'Shrapnel Blast', role: 'Five damage for two mana by sacrificing an artifact' },
      ],
      summary:
        'With Skullclamp gone, many expected Affinity to weaken. Instead, Fifth Dawn provided Cranial Plating, which replaced Skullclamp\'s card advantage with raw damage output. A single Cranial Plating on an evasive creature routinely dealt ten or more damage. The format devolved into "Affinity or anti-Affinity" — most competitive decks were either running the artifact engine or dedicating half their sideboard to beating it. Tooth and Nail emerged as the premier Affinity counter, using Viridian Shaman and Oxidize.',
      whyItDominated: [
        'Cranial Plating threatened lethal damage as early as turn three',
        'Artifact lands meant Affinity deployed threats faster than any other strategy',
        'Arcbound Ravager made the board difficult to interact with profitably',
        'Shrapnel Blast provided reach that closed games through blockers',
      ],
      whyItEnded:
        'Champions of Kamigawa arrived in October but couldn\'t dethrone Affinity. The deck continued to dominate through the end of 2004 and into early 2005, until the massive March 2005 bannings finally ended it.',
      confidence: 'high',
      sources: [
        {
          title: 'World Championship Decks/2004',
          publisher: 'MTG Wiki',
          url: 'https://mtg.fandom.com/wiki/World_Championship_Decks/2004',
          note: 'Julien Nuijten won Worlds 2004 with GW Astral Slide, defeating Aeo Paquette on Affinity in the finals.',
        },
        {
          title: 'Worlds 2004 Standard event',
          publisher: 'MTGTop8',
          url: 'https://mtgtop8.com/event?e=9243&f=ST',
          note: 'Standard results from Worlds 2004 in San Francisco.',
        },
      ],
    },
    {
      id: '2004-std-kamigawa',
      name: 'Affinity Reigns Through Kamigawa',
      start: '2004-10',
      end: '2004-12',
      dominantDecks: ['Affinity'],
      challengers: ['Tooth and Nail', 'Green-White Slide', 'Ponza'],
      keyCards: [
        { name: 'Sakura-Tribe Elder', role: 'Ramp and chump blocker from Champions of Kamigawa' },
        { name: 'Kodama\'s Reach', role: 'Efficient land searching for ramp strategies' },
        { name: 'Viridian Shaman', role: 'Artifact destruction on a body, key anti-Affinity tool' },
      ],
      summary:
        'Champions of Kamigawa brought legendary creatures and the splice onto Arcane mechanic, but neither could challenge Affinity\'s stranglehold. Sakura-Tribe Elder and Kodama\'s Reach strengthened Tooth and Nail as the primary anti-Affinity deck. Julien Nuijten\'s Worlds victory with Green-White Slide proved that beating Affinity was possible — but only with a deck specifically designed for it. The format would remain under Affinity\'s shadow until the March 2005 mass bannings.',
      whyItDominated: [
        'Affinity had survived the Skullclamp ban and gained Cranial Plating',
        'Champions of Kamigawa was deliberately lower-powered and couldn\'t match artifact synergies',
        'The artifact land manabase gave Affinity a structural advantage no new set could overcome',
        'Only decks with heavy artifact hate could compete consistently',
      ],
      whyItEnded:
        'Wizards announced massive bannings in March 2005: Arcbound Ravager, Disciple of the Vault, and all six artifact lands were removed from Standard, ending Affinity as a viable deck.',
      confidence: 'high',
      sources: [
        {
          title: 'Darksteel - MTG Wiki',
          publisher: 'MTG Wiki',
          url: 'https://mtg.fandom.com/wiki/Darksteel',
          note: 'Documents the impact of Darksteel on the Standard format and Affinity\'s rise.',
        },
        {
          title: 'MTGTop8 - Standard late 2004',
          publisher: 'MTGTop8',
          url: 'https://www.mtgtop8.com/format?f=ST',
          note: 'Tournament results showing Affinity dominance through the end of 2004.',
        },
      ],
    },
  ],
  bans: [
    {
      date: '2004-06-20',
      cards: ['Skullclamp'],
      explanation:
        'Skullclamp warped every creature deck in Standard by providing two cards for every creature that died while equipped. It was the first Standard ban in five years, reflecting how severely the card distorted competitive play.',
      source: {
        title: 'Skullclamp, We Hardly Knew Ye',
        publisher: 'Wizards of the Coast',
        url: 'https://magic.wizards.com/en/articles/archive/skullclamp-we-hardly-knew-ye-2004-06-04',
        date: '2004-06-01',
      },
    },
  ],
  setReleases: [
    { date: '2004-02-06', name: 'Darksteel', code: 'DST', note: 'Introduces Arcbound Ravager and Skullclamp' },
    { date: '2004-06-04', name: 'Fifth Dawn', code: '5DN', note: 'Introduces Cranial Plating' },
    { date: '2004-10-01', name: 'Champions of Kamigawa', code: 'CHK', note: 'Standard rotation: Onslaught block and Eighth Edition rotate out' },
  ],
  representativeDecks: [
    {
      name: 'Ravager Affinity',
      slug: 'ravager-affinity-standard-2004',
      period: 'Affinity Unbound',
      archetype: 'aggro',
      summary:
        'The infamous affinity aggro deck powered by Arcbound Ravager eating artifacts to grow huge or stack +1/+1 counters via modular. Cranial Plating turns any artifact creature into a one-shot kill, Disciple of the Vault drains incidentally, and Frogmite and Myr Enforcer come down for nothing. Goldfishes on turn three but folds to artifact removal.',
      keyCards: ['Arcbound Ravager', 'Cranial Plating', 'Disciple of the Vault', 'Frogmite', 'Myr Enforcer'],
      decklistPending: true,
      source: {
        title: 'Worlds 2004 - Aeo Paquette Affinity',
        publisher: 'MTG Wiki',
        url: 'https://mtg.fandom.com/wiki/World_Championship_Decks/2004',
      },
    },
    {
      name: 'Skullclamp Affinity',
      slug: 'skullclamp-affinity-standard-2004',
      period: 'The Skullclamp Era',
      archetype: 'aggro',
      summary:
        'A version of Affinity that doubles down with Skullclamp on cheap 1-toughness artifact creatures like Ornithopter and Arcbound Worker, turning them into massive card advantage engines. Arcbound Ravager and Disciple of the Vault provide the kill. So explosive that Skullclamp was banned mid-format.',
      keyCards: ['Skullclamp', 'Arcbound Ravager', 'Disciple of the Vault', 'Arcbound Worker', 'Ornithopter'],
      decklistPending: true,
      source: {
        title: '2004 Skullclamp Affinity',
        publisher: 'Deckstats',
        url: 'https://deckstats.net/decks/114208/1456240-2004-skullclamp-affinity/en',
      },
    },
    {
      name: 'Tooth and Nail',
      slug: 'tooth-and-nail-standard-2004',
      period: 'Affinity Unbound',
      archetype: 'ramp',
      summary:
        'A green ramp deck that assembles the Urzatron lands to cast Tooth and Nail with entwine, putting two game-ending creatures like Darksteel Colossus into play. Viridian Shaman and Oxidize handle Affinity. Inevitable against fair decks but vulnerable to fast clocks and counterspells.',
      keyCards: ['Tooth and Nail', 'Urza\'s Tower', 'Viridian Shaman', 'Oxidize', 'Darksteel Colossus'],
      decklistPending: true,
      source: {
        title: 'MTGTop8 - Tooth and Nail 2004',
        publisher: 'MTGTop8',
        url: 'https://www.mtgtop8.com/format?f=ST',
      },
    },
    {
      name: 'Green-White Slide',
      slug: 'gw-slide-standard-2004',
      period: 'Affinity Reigns Through Kamigawa',
      archetype: 'control',
      summary:
        'A green-white toolbox control that loops creatures with Astral Slide for repeated value. Viridian Shaman and Eternal Witness recur, Oxidize and Wrath of God answer the board. Strong against Affinity and creature decks but slow against pure combo.',
      keyCards: ['Astral Slide', 'Viridian Shaman', 'Eternal Witness', 'Wrath of God', 'Oxidize'],
      decklistPending: true,
      source: {
        title: 'Worlds 2004 - Julien Nuijten GW Slide',
        publisher: 'MTG Wiki',
        url: 'https://mtg.fandom.com/wiki/World_Championship_Decks/2004',
      },
    },
  ],
}

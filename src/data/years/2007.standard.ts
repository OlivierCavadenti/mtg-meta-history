import type { YearFormatEntry } from '../types'

export const standard2007: YearFormatEntry = {
  year: 2007,
  format: 'standard',
  title: 'Standard 2007',
  subtitle: 'Time Spiral creativity and the Lorwyn shift',
  shortLabel: 'Dragonstorm to Doran',
  summary:
    'Standard 2007 was defined by the Time Spiral-Ravnica format, one of the most skill-intensive environments in the game\'s history. Dragonstorm carried momentum from its Worlds 2006 victory, but UB Teachings rose as the premier control deck, using Mystical Teachings to find silver-bullet instants. Mono-Blue Pickles introduced a morph-based soft lock with Brine Elemental and Vesuvan Shapeshifter. Gruul Aggro and Dredge kept the format honest. The Lorwyn rotation in October brought tribal strategies and the first planeswalkers, culminating in Uri Peleg\'s Doran Rock victory at Worlds 2007 in New York.',
  headlineDeck: 'UB Teachings',
  eras: [
    {
      id: '2007-std-dragonstorm',
      name: 'Dragonstorm Winter',
      start: '2007-01',
      end: '2007-04',
      dominantDecks: ['Dragonstorm', 'UB Teachings'],
      challengers: ['Dredge', 'Boros Deck Wins', 'Gruul Aggro', 'UW Martyr-Proclamation'],
      keyCards: [
        { name: 'Dragonstorm', role: 'Storm finisher fetching lethal dragons' },
        { name: 'Mystical Teachings', role: 'Instant-speed tutor finding silver bullets' },
        { name: 'Damnation', role: 'Black Wrath of God from Planar Chaos' },
        { name: 'Sulfur Elemental', role: 'Flash creature punishing white weenie strategies' },
        { name: 'Martyr of Sands', role: 'Massive lifegain engine paired with Proclamation of Rebirth' },
      ],
      summary:
        'The format entering 2007 was dominated by the Dragonstorm menace from Worlds 2006. UB Teachings quickly rose as its foil, using Mystical Teachings to find the right answer at the right time, whether that was countermagic, removal, or win conditions. Planar Chaos in February added Damnation (giving black its own Wrath) and Sulfur Elemental. Dredge exploited the graveyard with Stinkweed Imp and Life from the Loam. UW Martyr-Proclamation used Martyr of Sands with Proclamation of Rebirth to gain massive life totals, stalling aggressive strategies indefinitely.',
      whyItDominated: [
        'Dragonstorm remained a consistent turn-four kill threat',
        'Mystical Teachings gave UB control decks unprecedented flexibility in finding answers',
        'Damnation from Planar Chaos gave black-based control a premier sweeper',
        'The combo-control dynamic created a rich metagame requiring careful deck selection',
      ],
      whyItEnded:
        'Future Sight in May introduced new tools that diversified the format further. Tarmogoyf powered up aggressive strategies, and Mono-Blue Pickles emerged as a third major archetype.',
      confidence: 'high',
      sources: [
        {
          title: 'MTGTop8 - Standard early 2007',
          publisher: 'MTGTop8',
          url: 'https://www.mtgtop8.com/format?f=ST',
          note: 'Tournament results showing Dragonstorm and UB Teachings as top decks in early 2007.',
        },
        {
          title: 'Down And Dirty - The Top 10 Decks of 2007',
          publisher: 'Star City Games',
          url: 'https://articles.starcitygames.com/articles/down-and-dirty-the-top-10-decks-of-2007/',
          note: 'Retrospective ranking of the top Standard decks across the 2007 season.',
        },
      ],
    },
    {
      id: '2007-std-pickles',
      name: 'Pickles and Goyf Summer',
      start: '2007-04',
      end: '2007-10',
      dominantDecks: ['UB/UBx Teachings', 'Mono-Blue Pickles'],
      challengers: ['Gruul Aggro', 'Dragonstorm', 'UG Tarmogoyf Aggro', 'Dredge', 'Angelfire'],
      keyCards: [
        { name: 'Brine Elemental', role: 'Morph lock piece preventing opponent from untapping' },
        { name: 'Vesuvan Shapeshifter', role: 'Copies Brine Elemental to repeat the lock each turn' },
        { name: 'Tarmogoyf', role: 'Undercosted beater growing with card types in graveyards' },
        { name: 'Mystical Teachings', role: 'Toolbox tutor backbone of UBx control' },
        { name: 'Teferi, Mage of Zhalfir', role: 'Flash lord shutting down opponent\'s instant-speed plays' },
      ],
      summary:
        'Future Sight\'s release in May brought Tarmogoyf, which immediately warped aggressive strategies, and strengthened the morph package. Mono-Blue Pickles leveraged the Brine Elemental plus Vesuvan Shapeshifter lock to prevent opponents from ever untapping again. Teferi, Mage of Zhalfir was a key card in both Pickles and Teachings shells, effectively blanking the opponent\'s instants. Guillaume Wafo-Tapa had won PT Yokohama in April with Teachings in Block Constructed, validating the archetype\'s power. Tenth Edition arrived in July as the new core set. The format was considered highly skill-testing, rewarding tight play and sideboard construction.',
      whyItDominated: [
        'The Brine Elemental plus Vesuvan Shapeshifter lock was nearly impossible to escape once assembled',
        'Teferi, Mage of Zhalfir turned off instant-speed interaction for the opponent',
        'Tarmogoyf gave aggressive decks a threat that outclassed everything at its mana cost',
        'Mystical Teachings allowed control decks to play a toolbox of one-of answers',
      ],
      whyItEnded:
        'Lorwyn released in October 2007, rotating out the entire Ravnica block and Coldsnap. This massive rotation replaced multicolor guild strategies with tribal synergies and introduced the first planeswalker cards.',
      confidence: 'high',
      sources: [
        {
          title: 'Spotlight on Future Sight - Impact on Standard',
          publisher: 'Star City Games',
          url: 'http://www.starcitygames.com/magic/standard/14091-Spotlight-on-Future-Sight-8212-Future-Sight8217s-Impact-on-Standard.html',
          note: 'Analysis of Future Sight\'s impact on the Standard metagame.',
        },
        {
          title: 'MTGTop8 - Standard mid-2007',
          publisher: 'MTGTop8',
          url: 'https://www.mtgtop8.com/format?f=ST',
          note: 'Tournament results showing Pickles and Teachings dominance in mid-2007.',
        },
      ],
    },
    {
      id: '2007-std-lorwyn',
      name: 'Doran Rock and Dragonstorm',
      start: '2007-10',
      end: '2007-12',
      dominantDecks: ['Doran Rock', 'Dragonstorm'],
      challengers: ['Elves', 'Mannequin (UB Makeshift Mannequin)', 'Mono-Red Aggro', 'Teachings'],
      keyCards: [
        { name: 'Doran, the Siege Tower', role: 'Three-mana 5/5 warping creature combat' },
        { name: 'Garruk Wildspeaker', role: 'First generation planeswalker generating beasts and untapping lands' },
        { name: 'Liliana Vess', role: 'First generation planeswalker providing tutoring and discard' },
        { name: 'Thoughtseize', role: 'Premium hand disruption reprinted in Lorwyn' },
        { name: 'Makeshift Mannequin', role: 'Instant-speed reanimation enabling flash threats' },
      ],
      summary:
        'Lorwyn\'s October release was transformative. It introduced the first planeswalker cards (Garruk, Liliana, Jace, Chandra, Ajani) and powerful tribal synergies. Doran Rock emerged as the deck to beat, combining Doran, the Siege Tower (a 0/5 that made toughness count as power) with Garruk Wildspeaker and Thoughtseize. Dragonstorm persisted thanks to Spinerock Knoll providing an alternative way to cheat the spell into play. Uri Peleg won the 2007 World Championships in New York with Doran Rock, defeating Patrick Chapin\'s Dragonstorm 3-1 in the final. The Top 8 also featured Gabriel Nassif on Dragonstorm, Katsuhiro Mori on Elves, and Kotaro Otsuka on Mannequin.',
      whyItDominated: [
        'Doran, the Siege Tower was a 5/5 for three mana that reshaped combat math',
        'Garruk Wildspeaker provided ramp, tokens, and an Overrun ultimate',
        'Thoughtseize gave black-based decks surgical hand disruption',
        'Planeswalkers were a new card type that opponents struggled to answer efficiently',
      ],
      whyItEnded:
        'The metagame continued to evolve into 2008 with Morningtide providing additional tribal support and new strategies.',
      confidence: 'high',
      sources: [
        {
          title: '2007 World Championships',
          publisher: 'MTG Wiki',
          url: 'https://mtg.fandom.com/wiki/2007_World_Championships',
          date: '2007-12-09',
          note: 'Uri Peleg won Worlds 2007 with Doran Rock, defeating Patrick Chapin\'s Dragonstorm 3-1.',
        },
        {
          title: 'Worlds 2007 (New York) Standard Top 8',
          publisher: 'MTGTop8',
          url: 'https://mtgtop8.com/event?e=117&f=ST',
          date: '2007-12-09',
          note: 'Complete top 8 decklists from the 2007 World Championships Standard portion.',
        },
      ],
    },
  ],
  bans: [],
  setReleases: [
    { date: '2007-02-02', name: 'Planar Chaos', code: 'PLC' },
    { date: '2007-05-04', name: 'Future Sight', code: 'FUT' },
    { date: '2007-07-13', name: 'Tenth Edition', code: '10E' },
    { date: '2007-10-12', name: 'Lorwyn', code: 'LRW', note: 'Standard rotation: Ravnica block and Coldsnap rotate out. First planeswalker cards printed.' },
  ],
  representativeDecks: [
    {
      name: 'UB Teachings',
      slug: 'ub-teachings-standard-2007',
      period: 'Dragonstorm Winter',
      archetype: 'control',
      summary:
        'A blue-black control deck centered on Mystical Teachings as a flexible toolbox tutor for instants. Teferi, Mage of Zhalfir prevents opposing flash and counterspell tricks, Damnation sweeps, and Careful Consideration refills the hand. Grindy and inevitable against fair decks but slow against fast combo.',
      keyCards: ['Mystical Teachings', 'Teferi, Mage of Zhalfir', 'Damnation', 'Careful Consideration', 'Tendrils of Corruption'],
      decklistPending: true,
      source: {
        title: 'Down And Dirty - The Top 10 Decks of 2007',
        publisher: 'Star City Games',
        url: 'https://articles.starcitygames.com/articles/down-and-dirty-the-top-10-decks-of-2007/',
      },
    },
    {
      name: 'Mono-Blue Pickles',
      slug: 'mono-blue-pickles-standard-2007',
      period: 'Pickles and Goyf Summer',
      archetype: 'hybrid',
      summary:
        'A blue control-combo hybrid that uses Brine Elemental\'s morph trigger with Vesuvan Shapeshifter to lock the opponent out of untapping. Willbender redirects key spells. Teferi protects the lock at instant speed. Inevitable when the combo lands but vulnerable to fast clocks and removal on key pieces.',
      keyCards: ['Brine Elemental', 'Vesuvan Shapeshifter', 'Teferi, Mage of Zhalfir', 'Willbender', 'Fathom Seer'],
      decklistPending: true,
      source: {
        title: 'MTGTop8 Pickles decklists 2007',
        publisher: 'MTGTop8',
        url: 'https://www.mtgtop8.com/format?f=ST',
      },
    },
    {
      name: 'Dragonstorm',
      slug: 'dragonstorm-standard-2007',
      period: 'Dragonstorm Winter',
      archetype: 'combo',
      summary:
        'A red ritual combo that chains Rite of Flame, Seething Song, and Lotus Bloom into a massive Dragonstorm for two or more Bogardan Hellkites. Reliable goldfish on turn four. Vulnerable to counterspells, hand disruption, and graveyard hate.',
      keyCards: ['Dragonstorm', 'Bogardan Hellkite', 'Rite of Flame', 'Seething Song', 'Lotus Bloom'],
      decklistPending: true,
      source: {
        title: 'Worlds 2007 Dragonstorm decklists',
        publisher: 'MTGTop8',
        url: 'https://mtgtop8.com/event?e=117&f=ST',
      },
    },
    {
      name: 'Gruul Aggro',
      slug: 'gruul-aggro-standard-2007',
      period: 'Pickles and Goyf Summer',
      archetype: 'aggro',
      summary:
        'A red-green aggro shell anchored by Tarmogoyf as the most efficient threat in the format. Kird Ape and Mogg Fanatic apply early pressure, Call of the Herd and Char close games. Punishes slow openings but vulnerable to early lifegain and efficient sweepers.',
      keyCards: ['Tarmogoyf', 'Kird Ape', 'Mogg Fanatic', 'Char', 'Call of the Herd'],
      decklistPending: true,
      source: {
        title: 'MTGTop8 Gruul decklists 2007',
        publisher: 'MTGTop8',
        url: 'https://www.mtgtop8.com/format?f=ST',
      },
    },
    {
      name: 'Doran Rock',
      slug: 'doran-rock-standard-2007',
      period: 'Doran Rock and Dragonstorm',
      archetype: 'midrange',
      summary:
        'A black-green-white midrange deck that uses Doran, the Siege Tower to turn high-toughness creatures like Tarmogoyf into massive attackers. Thoughtseize strips key spells, Garruk Wildspeaker ramps and pumps the team. Resilient and flexible, but pressured by burn and sweepers.',
      keyCards: ['Doran, the Siege Tower', 'Garruk Wildspeaker', 'Thoughtseize', 'Tarmogoyf', 'Shriekmaw'],
      decklistPending: true,
      source: {
        title: 'Doran Rock - Uri Peleg - Worlds 2007',
        publisher: 'MTGTop8',
        url: 'https://www.mtgtop8.com/event?e=117&d=108520&f=ST',
      },
    },
  ],
}

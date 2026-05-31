import type { YearFormatEntry } from '../types'

export const standard2011: YearFormatEntry = {
  year: 2011,
  format: 'standard',
  title: 'Standard 2011',
  subtitle: 'The year of Caw-Blade and the banhammer',
  shortLabel: 'Caw-Blade & Bans',
  summary:
    'Standard 2011 was defined by the rise, peak, and fall of Caw-Blade. The deck combined Jace, the Mind Sculptor, Stoneforge Mystic, Squadron Hawk, and powerful Equipment into the most dominant Standard archetype in years. New Phyrexia\'s Batterskull pushed it over the edge, leading to the first Standard bans since 2005. The post-ban format opened up dramatically, and the autumn rotation with Innistrad brought an entirely new metagame featuring Solar Flare, Tempered Steel, and aggressive strategies.',
  headlineDeck: 'Caw-Blade',
  eras: [
    {
      id: '2011-std-cawblade-rises',
      name: 'Caw-Blade Rises',
      start: '2011-01',
      end: '2011-03',
      dominantDecks: ['UW Caw-Blade'],
      challengers: ['Valakut Ramp', 'RUG Control', 'Boros', 'Vampires'],
      keyCards: [
        { name: 'Jace, the Mind Sculptor', role: 'Card selection, bounce, and win condition' },
        { name: 'Stoneforge Mystic', role: 'Equipment tutor that cheated Equipment into play' },
        { name: 'Squadron Hawk', role: 'Consistent card advantage and Jace synergy' },
        { name: 'Sword of Feast and Famine', role: 'Untapped lands on hit, enabling double-spell turns' },
        { name: 'Spell Pierce', role: 'Cheap protection for key permanents' },
      ],
      summary:
        'Caw-Blade was the central deck of early 2011 Standard, combining the card selection of Jace, the Mind Sculptor with Squadron Hawk\'s consistency and powerful Equipment. Ben Stark won Pro Tour Paris in February 2011, and six of the Top 8 decks were UW Control variants. The deck\'s name came from "Caw" (Squadron Hawk) and "Blade" (Sword of Feast and Famine). Stoneforge Mystic could tutor for and deploy Equipment at instant speed, giving the deck a potent tempo advantage.',
      whyItDominated: [
        'Jace, the Mind Sculptor provided unmatched card selection and a win condition in one card',
        'Stoneforge Mystic turned a two-drop into a repeatable Equipment tutor and cheated Equipment into play',
        'Squadron Hawk refilled the hand while providing bodies to carry Swords',
        'Sword of Feast and Famine untapped lands, allowing the pilot to deploy threats and hold up countermagic simultaneously',
        'The deck had strong game against both aggro and control',
      ],
      whyItEnded:
        'New Phyrexia released in May 2011, adding Batterskull to the deck. Rather than declining, Caw-Blade became even more dominant, transitioning into the next era.',
      confidence: 'high',
      sources: [
        {
          title: 'Pro Tour Paris 2011 coverage',
          publisher: 'MTGTop8',
          url: 'https://www.mtgtop8.com/event?e=1016&f=ST',
          date: '2011-02-13',
          note: 'Six of the Top 8 decks at Pro Tour Paris were UW Control variants. Ben Stark won the event.',
        },
        {
          title: 'Caw-Blade deck tech',
          publisher: 'Wizards of the Coast',
          url: 'https://magic.wizards.com/en/news/feature/caw-blade-2011-03-01',
          date: '2011-03-01',
          note: 'Official Wizards article on the Caw-Blade archetype.',
        },
      ],
    },
    {
      id: '2011-std-cawblade-dominance',
      name: 'Caw-Blade Dominance',
      start: '2011-03',
      end: '2011-06',
      dominantDecks: ['UW Caw-Blade', 'Darkblade'],
      challengers: ['Valakut Ramp', 'Splinter Twin', 'Mono-Red', 'Vampires'],
      keyCards: [
        { name: 'Batterskull', role: 'Self-recurring lifelinked threat via Stoneforge Mystic' },
        { name: 'Sword of War and Peace', role: 'Protection from red and white, punished full hands' },
        { name: 'Jace, the Mind Sculptor', role: 'Dominant planeswalker enabling card advantage and control' },
        { name: 'Stoneforge Mystic', role: 'Deployed Batterskull as early as turn three' },
        { name: 'Dismember', role: 'Free removal spell from New Phyrexia, used by and against Caw-Blade' },
      ],
      summary:
        'New Phyrexia\'s release in May 2011 pushed Caw-Blade from the best deck to an oppressive force. Batterskull gave Stoneforge Mystic a target that was a threat on its own, creating a situation where the Mystic had to be answered on turn two or the opponent faced a 4/4 vigilance lifelink creature on turn three. "Darkblade" variants splashed black for removal and Inquisition of Kozilek. At Grand Prix Singapore, 88% of Day 2 decks contained Jace, the Mind Sculptor and nearly 70% contained Stoneforge Mystic. Tournament attendance declined as players grew frustrated with the format\'s homogeneity.',
      whyItDominated: [
        'Batterskull gave Stoneforge Mystic a target that demanded an immediate answer',
        'Jace appeared in 88% of Day 2 decks at Grand Prix Singapore',
        'The deck had no reliably bad matchups in the field',
        'Answers to Batterskull were limited since it bounced to hand when threatened',
        'Darkblade variants added discard to strip opposing answers preemptively',
      ],
      whyItEnded:
        'Wizards of the Coast banned Jace, the Mind Sculptor and Stoneforge Mystic from Standard effective July 1, 2011. It was the first Standard ban since 2005.',
      confidence: 'high',
      sources: [
        {
          title: 'Standard Bannings Explained',
          publisher: 'Wizards of the Coast',
          url: 'https://magic.wizards.com/en/news/feature/standard-bannings-explained-2011-06-20-0',
          date: '2011-06-20',
          note: 'Official explanation of the Jace and Stoneforge bans, citing GP Singapore metagame data.',
        },
        {
          title: 'The Dominance of Caw Blade',
          publisher: 'Medium',
          url: 'https://medium.com/@nikkolasbaker/the-dominance-of-caw-blade-dig-through-time-f1ce18c945c2',
          note: 'Historical retrospective on the Caw-Blade era.',
        },
        {
          title: 'Grand Prix Singapore 2011',
          publisher: 'MTGTop8',
          url: 'https://www.mtgtop8.com/event?e=1658&f=ST',
          note: 'Tournament results showing Caw-Blade dominance.',
        },
      ],
    },
    {
      id: '2011-std-post-ban',
      name: 'Post-Ban Summer',
      start: '2011-07',
      end: '2011-09',
      dominantDecks: ['Valakut Ramp', 'Splinter Twin'],
      challengers: ['Tempered Steel', 'UB Control', 'Mono-Red', 'Birthing Pod'],
      keyCards: [
        { name: 'Primeval Titan', role: 'Fetched Valakut and Mountains for lethal damage' },
        { name: 'Splinter Twin', role: 'Combo enchantment creating infinite hasty copies with Deceiver Exarch' },
        { name: 'Deceiver Exarch', role: 'Flash creature that comboed with Splinter Twin for infinite tokens' },
        { name: 'Tempered Steel', role: 'Anthem for artifact creatures, enabling fast aggro' },
        { name: 'Solemn Simulacrum', role: 'Ramp and card draw, widely played across strategies' },
      ],
      summary:
        'With Jace and Stoneforge gone, Standard diversified dramatically. Valakut Ramp emerged as the early frontrunner, comprising 22% of the metagame at Japanese Nationals and putting up strong results. Splinter Twin combo decks offered a fast clock that punished slow starts. Tempered Steel provided aggressive pressure through artifact creatures. Ali Aintrazi won US Nationals with UB Control, the only non-Caw-Blade deck in a Top 8 that still reflected the shadow of the banned archetype. The format rewarded diverse strategies in a way the Caw-Blade era had not.',
      whyItDominated: [
        'Valakut Ramp could kill reliably on turn five or six with Primeval Titan',
        'Splinter Twin threatened a turn-four combo kill, forcing opponents to hold up removal',
        'Tempered Steel deployed multiple artifact creatures and pumped them for fast aggro wins',
        'No single deck held more than 25% of the metagame, making the field diverse',
      ],
      whyItEnded:
        'The September 2011 rotation removed Zendikar block (Valakut, Stoneforge) and M11. Innistrad\'s release introduced new mechanics and strategies, resetting the format.',
      confidence: 'high',
      sources: [
        {
          title: 'US Nationals 2011 coverage',
          publisher: 'MTGTop8',
          url: 'https://www.mtgtop8.com/event?e=1897&f=ST',
          date: '2011-08-05',
          note: 'Ali Aintrazi won US Nationals 2011 with UB Control.',
        },
        {
          title: 'M12 Standard: Winners and Losers',
          publisher: 'CoolStuffInc',
          url: 'https://www.coolstuffinc.com/a/m12-standard-winners-and-losers',
          note: 'Analysis of the post-ban Standard metagame.',
        },
      ],
    },
    {
      id: '2011-std-innistrad',
      name: 'Tempered Steel and Solar Flare',
      start: '2011-09',
      end: '2011-12',
      dominantDecks: ['Tempered Steel', 'GW Tokens'],
      challengers: ['Solar Flare', 'GR Kessig Ramp', 'Mono-Red', 'UW Delver', 'GW Aggro'],
      keyCards: [
        { name: 'Tempered Steel', role: 'Anthem turning artifact creatures into lethal threats' },
        { name: 'Unburial Rites', role: 'Reanimation spell with flashback enabling Solar Flare' },
        { name: 'Elesh Norn, Grand Cenobite', role: 'Reanimation target that wiped small creature boards' },
        { name: 'Kessig Wolf Run', role: 'Land-based pump for Primeval Titan and other threats' },
        { name: 'Garruk Relentless', role: 'Planeswalker generating tokens and tutoring creatures' },
        { name: 'Geist of Saint Traft', role: 'Hexproof threat enabling tempo strategies' },
      ],
      summary:
        'Innistrad\'s release in September 2011 transformed Standard again. Tempered Steel carried over as a proven aggressive strategy and placed four copies in the Worlds Top 8. Solar Flare, an Esper reanimator deck using Unburial Rites and Elesh Norn, Grand Cenobite, became a premier control option. GR Kessig Ramp, featuring Kessig Wolf Run and Primeval Titan, won the World Championship in the hands of Junya Iyanaga. Early appearances of UW Delver hinted at what would become the dominant deck of 2012. The format was diverse and rewarded tight play across multiple viable archetypes.',
      whyItDominated: [
        'Tempered Steel was fast and resilient, with four copies in the Worlds 2011 Top 8',
        'Solar Flare used Unburial Rites to reanimate Elesh Norn, locking out aggro strategies',
        'Kessig Wolf Run gave ramp decks a mana sink that turned any creature into a lethal threat',
        'The format supported aggro, control, midrange, and combo strategies simultaneously',
      ],
      whyItEnded:
        'The metagame continued evolving into 2012. Delver of Secrets and the supporting Innistrad cards would come to dominate in the new year, but through December 2011 the format remained open.',
      confidence: 'high',
      sources: [
        {
          title: 'Worlds 2011 Standard Top 8',
          publisher: 'MTGTop8',
          url: 'https://www.mtgtop8.com/event?e=2245&f=ST',
          date: '2011-11-20',
          note: 'Junya Iyanaga won Worlds 2011 with GR Kessig Ramp. Four Tempered Steel decks in Top 8.',
        },
        {
          title: 'Examining Solar Flare',
          publisher: 'CoolStuffInc',
          url: 'https://www.coolstuffinc.com/a/examining-solar-flare',
          note: 'Analysis of the Solar Flare archetype in Innistrad Standard.',
        },
      ],
    },
  ],
  bans: [
    {
      date: '2011-06-20',
      cards: ['Jace, the Mind Sculptor', 'Stoneforge Mystic'],
      explanation:
        'Jace, the Mind Sculptor appeared in 88% of Day 2 decks at Grand Prix Singapore. Stoneforge Mystic appeared in nearly 70%. The format had become stagnant, with tournament attendance declining. Wizards cited the lack of a diverse metagame and the inability of printed answers to adequately address these cards. The bans took effect July 1, 2011, marking the first Standard bans since Arcbound Ravager and the artifact lands in 2005.',
      source: {
        title: 'Standard Bannings Explained',
        publisher: 'Wizards of the Coast',
        url: 'https://magic.wizards.com/en/news/feature/standard-bannings-explained-2011-06-20-0',
        date: '2011-06-20',
      },
    },
  ],
  setReleases: [
    { date: '2011-02-04', name: 'Mirrodin Besieged', code: 'MBS' },
    { date: '2011-05-13', name: 'New Phyrexia', code: 'NPH', note: 'Introduced Batterskull and Mental Misstep' },
    { date: '2011-07-15', name: 'Magic 2012', code: 'M12' },
    { date: '2011-09-30', name: 'Innistrad', code: 'ISD', note: 'Standard rotation: Zendikar block and M11 rotate out' },
  ],
  representativeDecks: [
    {
      name: 'UW Caw-Blade',
      slug: 'uw-caw-blade-standard-2011',
      period: 'Caw-Blade Rises',
      archetype: 'tempo',
      summary:
        'The dominant Standard archetype of 2011. Squadron Hawk tutors more Hawks, equipped with Sword of Feast and Famine for a recurring lock — Stoneforge Mystic tutors equipment, Jace, the Mind Sculptor controls the top. Mana Leak counters key threats. Grinds and dominates fair decks but pressured by Splinter Twin combo.',
      keyCards: ['Jace, the Mind Sculptor', 'Stoneforge Mystic', 'Squadron Hawk', 'Sword of Feast and Famine', 'Mana Leak', 'Preordain'],
      decklistPending: true,
      source: {
        title: 'Pro Tour Paris 2011 - Ben Stark Caw-Blade',
        publisher: 'MTGTop8',
        url: 'https://www.mtgtop8.com/event?e=1016&f=ST',
        date: '2011-02-13',
      },
    },
    {
      name: 'Darkblade',
      slug: 'darkblade-standard-2011',
      period: 'Caw-Blade Dominance',
      archetype: 'tempo',
      summary:
        'A blue-black-white variant of Caw-Blade that swaps white removal for Inquisition of Kozilek hand disruption. Batterskull provides a recurring lifelink finisher tutored by Stoneforge Mystic. Jace, the Mind Sculptor controls the long game. Strong against fair decks but slow against combo.',
      keyCards: ['Batterskull', 'Jace, the Mind Sculptor', 'Stoneforge Mystic', 'Inquisition of Kozilek', 'Squadron Hawk', 'Sword of War and Peace'],
      decklistPending: true,
    },
    {
      name: 'Valakut Ramp',
      slug: 'valakut-ramp-standard-2011',
      period: 'Post-Ban Summer',
      archetype: 'ramp',
      summary:
        'A red-green ramp deck that uses Rampant Growth and Solemn Simulacrum to accelerate into Primeval Titan fetching Valakut, the Molten Pinnacle plus Mountains for direct damage. Green Sun\'s Zenith tutors creatures flexibly. Inevitable but vulnerable to fast clocks and counterspells.',
      keyCards: ['Valakut, the Molten Pinnacle', 'Primeval Titan', 'Solemn Simulacrum', 'Green Sun\'s Zenith', 'Rampant Growth'],
      decklistPending: true,
    },
    {
      name: 'Splinter Twin Combo',
      slug: 'splinter-twin-standard-2011',
      period: 'Post-Ban Summer',
      archetype: 'combo',
      summary:
        'A blue-red combo deck that targets Deceiver Exarch or Pestermite with Splinter Twin for infinite hasty copies. Mana Leak and Dispel protect the combo turn, Ponder finds pieces, Dismember removes blockers. Goldfishes turn four but vulnerable to instant-speed removal.',
      keyCards: ['Splinter Twin', 'Deceiver Exarch', 'Pestermite', 'Mana Leak', 'Ponder', 'Dismember'],
      decklistPending: true,
    },
    {
      name: 'Tempered Steel',
      slug: 'tempered-steel-standard-2011',
      period: 'Tempered Steel and Solar Flare',
      archetype: 'aggro',
      summary:
        'A mono-white artifact aggro deck where Tempered Steel pumps a board of cheap artifact creatures like Memnite, Signal Pest, and Vault Skirge. Etched Champion is uncounterable and protected from colors, Glint Hawk Idol provides evasion. Goldfishes turn four but vulnerable to sweepers and artifact removal.',
      keyCards: ['Tempered Steel', 'Signal Pest', 'Vault Skirge', 'Memnite', 'Glint Hawk Idol', 'Etched Champion'],
      decklistPending: true,
      source: {
        title: 'Worlds 2011 Top 8',
        publisher: 'MTGTop8',
        url: 'https://www.mtgtop8.com/event?e=2245&f=ST',
        date: '2011-11-20',
      },
    },
    {
      name: 'Solar Flare',
      slug: 'solar-flare-standard-2011',
      period: 'Tempered Steel and Solar Flare',
      archetype: 'control',
      summary:
        'A blue-black-white reanimator-control hybrid that mills Elesh Norn, Grand Cenobite into the graveyard via Forbidden Alchemy, then returns her with Unburial Rites for a one-sided sweeper. Sun Titan recurs key permanents, Day of Judgment resets. Powerful but slow against fast combo.',
      keyCards: ['Unburial Rites', 'Elesh Norn, Grand Cenobite', 'Sun Titan', 'Forbidden Alchemy', 'Day of Judgment', 'Liliana of the Veil'],
      decklistPending: true,
      source: {
        title: 'Examining Solar Flare',
        publisher: 'CoolStuffInc',
        url: 'https://www.coolstuffinc.com/a/examining-solar-flare',
      },
    },
    {
      name: 'GR Kessig Ramp',
      slug: 'gr-kessig-ramp-standard-2011',
      period: 'Tempered Steel and Solar Flare',
      archetype: 'ramp',
      summary:
        'A red-green ramp deck that uses Solemn Simulacrum and Rampant Growth to fuel Primeval Titan fetching Kessig Wolf Run, then pumps a creature for lethal trample damage. Inkmoth Nexus provides a backup poison kill. Inevitable but vulnerable to counterspells and fast clocks.',
      keyCards: ['Primeval Titan', 'Inferno Titan', 'Kessig Wolf Run', 'Inkmoth Nexus', 'Green Sun\'s Zenith', 'Solemn Simulacrum'],
      decklistPending: true,
      source: {
        title: 'Worlds 2011 Top 8',
        publisher: 'MTGTop8',
        url: 'https://www.mtgtop8.com/event?e=2245&f=ST',
        date: '2011-11-20',
      },
    },
  
    {
      name: 'RUG Control',
      slug: 'rug-control-standard-2011',
      period: 'Caw-Blade Rises',
      archetype: 'control',
      summary:
        'A red-blue-green control deck centered on Jace, the Mind Sculptor with Lightning Bolt and Mana Leak for cheap interaction. Lotus Cobra ramps the mana base, Inferno Titan closes as a flexible six-drop. Outvalues fair decks but slow against combo.',
      keyCards: ['Jace, the Mind Sculptor', 'Lightning Bolt', 'Mana Leak', 'Inferno Titan', 'Lotus Cobra'],
      decklistPending: true,
    },
    {
      name: 'Boros',
      slug: 'boros-standard-2011',
      period: 'Caw-Blade Rises',
      archetype: 'aggro',
      summary:
        'A red-white aggro shell built on Goblin Guide for early pressure and Squadron Hawks equipped with Sword of Body and Mind. Stoneforge Mystic tutors the equipment, Lightning Bolt closes games. Strong tempo with a flying clock but pressured by sweepers.',
      keyCards: ['Goblin Guide', 'Squadron Hawk', 'Stoneforge Mystic', 'Lightning Bolt', 'Sword of Body and Mind'],
      decklistPending: true,
    },
    {
      name: 'Vampires',
      slug: 'vampires-standard-2011',
      period: 'Caw-Blade Rises',
      archetype: 'aggro',
      summary:
        'A black aggro shell built on Bloodghast recursion, Vampire Nighthawk\'s lifelink, and Gatekeeper of Malakir as a removal-on-arrival. Kalastria Highborn drains incrementally, Inquisition of Kozilek strips key spells. Resilient against fair decks but vulnerable to exile removal.',
      keyCards: ['Bloodghast', 'Vampire Nighthawk', 'Gatekeeper of Malakir', 'Kalastria Highborn', 'Inquisition of Kozilek'],
      decklistPending: true,
    },
    {
      name: 'Splinter Twin',
      slug: 'splinter-twin-deck-standard-2011',
      period: 'Jace, the Mind Sculptor',
      archetype: 'combo',
      summary:
        'A blue-red combo deck that combines Splinter Twin with Deceiver Exarch or Pestermite for infinite hasty tokens. Mana Leak and Dispel protect the combo, Ponder smooths the draw. Goldfishes turn four but vulnerable to instant-speed removal on the targeted creature.',
      keyCards: ['Splinter Twin', 'Deceiver Exarch', 'Pestermite', 'Mana Leak', 'Dispel'],
      decklistPending: true,
    },
    {
      name: 'Mono-Red',
      slug: 'mono-red-standard-2011',
      period: 'Jace, the Mind Sculptor',
      archetype: 'aggro',
      summary:
        'A mono-red aggro deck running Goblin Guide and Chandra\'s Phoenix for repeatable threats backed by Lightning Bolt, Searing Blaze, and Koth of the Hammer for burn and ramp. Aims to deal twenty damage by turn four. Punishes slow draws but vulnerable to lifegain.',
      keyCards: ['Goblin Guide', 'Lightning Bolt', 'Searing Blaze', 'Koth of the Hammer', 'Chandra\'s Phoenix'],
      decklistPending: true,
    },
    {
      name: 'UB Control',
      slug: 'ub-control-standard-2011',
      period: 'Batterskull',
      archetype: 'control',
      summary:
        'A blue-black control deck anchored by Jace, the Mind Sculptor with Mana Leak and Doom Blade for interaction. Inquisition of Kozilek strips threats preemptively, Grave Titan closes as a token-generating finisher. Outvalues fair decks but slow against combo.',
      keyCards: ['Jace, the Mind Sculptor', 'Mana Leak', 'Inquisition of Kozilek', 'Grave Titan', 'Doom Blade'],
      decklistPending: true,
    },
    {
      name: 'Birthing Pod',
      slug: 'birthing-pod-standard-2011',
      period: 'Batterskull',
      archetype: 'midrange',
      summary:
        'A green midrange-toolbox deck that uses Birthing Pod to sacrifice a creature and tutor the next CMC up. Acidic Slime destroys lands and enchantments, Solemn Simulacrum ramps, Wurmcoil Engine closes. Phyrexian Metamorph copies anything. Flexible but pressured by fast aggro and discard.',
      keyCards: ['Birthing Pod', 'Phyrexian Metamorph', 'Acidic Slime', 'Solemn Simulacrum', 'Wurmcoil Engine'],
      decklistPending: true,
    },
    {
      name: 'GW Tokens',
      slug: 'gw-tokens-standard-2011',
      period: 'Primeval Titan',
      archetype: 'midrange',
      summary:
        'A green-white token deck that floods the board with Garruk Relentless, Garruk, Primal Hunter, and Hero of Bladehold tokens. Mikaeus, the Lunarch grows the army with proliferate-style counters. Goes wide quickly but vulnerable to sweepers.',
      keyCards: ['Garruk Relentless', 'Garruk, Primal Hunter', 'Mikaeus, the Lunarch', 'Hero of Bladehold', 'Sword of Feast and Famine'],
      decklistPending: true,
    },
    {
      name: 'UW Delver',
      slug: 'uw-delver-standard-2011',
      period: 'Primeval Titan',
      archetype: 'tempo',
      summary:
        'A blue-white tempo deck centered on Delver of Secrets flipping early and Geist of Saint Traft as an unblockable clock with hexproof. Mana Leak and Vapor Snag maintain tempo, Snapcaster Mage flashbacks spells. Strong against fair decks but pressured by sweepers.',
      keyCards: ['Delver of Secrets', 'Snapcaster Mage', 'Mana Leak', 'Vapor Snag', 'Geist of Saint Traft'],
      decklistPending: true,
    },
    {
      name: 'GW Aggro',
      slug: 'gw-aggro-standard-2011',
      period: 'Primeval Titan',
      archetype: 'aggro',
      summary:
        'A green-white aggro deck where Hero of Bladehold produces a wide army, Mirran Crusader and Garruk Relentless apply pressure, and Sword of War and Peace pushes through chip damage. Sun Titan recurs key threats. Strong against fair midrange but pressured by sweepers.',
      keyCards: ['Hero of Bladehold', 'Garruk Relentless', 'Mirran Crusader', 'Sword of War and Peace', 'Sun Titan'],
      decklistPending: true,
    },
  ],
}

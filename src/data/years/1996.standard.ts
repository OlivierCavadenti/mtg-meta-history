import type { YearFormatEntry } from '../types'

export const standard1996: YearFormatEntry = {
  year: 1996,
  format: 'standard',
  title: 'Standard 1996',
  subtitle: 'The Black Summer',
  shortLabel: 'Necropotence dominance',
  summary:
    'The year that gave competitive Magic its first true boogeyman. Necropotence decks dominated Type 2 throughout 1996, converting life into cards at a rate nothing else could match. The first Pro Tour in February saw Michael Loconto win with UW Control, but by summer mono-black Necropotence was the undisputed deck to beat. Erhnam-Geddon and White Weenie fought for scraps. The arrival of Alliances in June and Mirage in October gradually reshaped the card pool, but Necropotence remained the defining card of the year.',
  headlineDeck: 'Necropotence',
  eras: [
    {
      id: '1996-std-proto',
      name: 'The First Pro Tour',
      start: '1996-01',
      end: '1996-04',
      dominantDecks: ['UW Control', 'Necropotence'],
      challengers: ['Erhnam-Geddon', 'White Weenie', 'Stasis'],
      keyCards: [
        { name: 'Necropotence', role: 'Card advantage engine, trading life for cards' },
        { name: 'Swords to Plowshares', role: 'Premium removal in white-based decks' },
        { name: 'Wrath of God', role: 'Sweeper for UW Control' },
        { name: 'Hymn to Tourach', role: 'Efficient discard in black decks' },
      ],
      summary:
        'The inaugural Pro Tour New York in February 1996 was won by Michael Loconto piloting a UW Control deck featuring Swords to Plowshares, Wrath of God, and Serra Angel as a finisher. The field was diverse by later standards, but Necropotence was already emerging as the most powerful engine in the format. Ice Age and Fourth Edition defined the card pool.',
      whyItDominated: [
        'The Pro Tour was brand-new and the metagame was still forming',
        'UW Control had strong answers to early threats with Swords to Plowshares and Wrath of God',
        'Necropotence decks were rising but not yet fully optimized',
        'The card pool from Ice Age and Fourth Edition rewarded both control and aggro-control strategies',
      ],
      whyItEnded:
        'As the competitive community grew and optimized decklists, Necropotence builds became increasingly dominant through spring and summer, pushing out less efficient strategies.',
      confidence: 'medium',
      sources: [
        {
          title: 'Pro Tour New York 1996',
          publisher: 'Wizards of the Coast',
          url: 'https://mtg.fandom.com/wiki/Pro_Tour_New_York_1996',
          date: '1996-02-17',
          note: 'First Pro Tour ever held. Won by Michael Loconto with UW Control.',
        },
        {
          title: 'The History of Necropotence',
          publisher: 'MTG Wiki',
          url: 'https://mtg.fandom.com/wiki/Necropotence_(deck)',
          note: 'Overview of Necropotence deck history in competitive Magic.',
        },
      ],
    },
    {
      id: '1996-std-necro',
      name: 'The Black Summer',
      start: '1996-04',
      end: '1996-10',
      dominantDecks: ['Necropotence'],
      challengers: ['Erhnam-Geddon', 'White Weenie', 'Stasis', 'UW Control'],
      keyCards: [
        { name: 'Necropotence', role: 'Draw engine converting life to massive card advantage' },
        { name: 'Hymn to Tourach', role: 'Random discard shredding opponent hands' },
        { name: 'Hypnotic Specter', role: 'Evasive threat with discard on damage' },
        { name: 'Drain Life', role: 'Removal and life recovery' },
        { name: 'Dark Ritual', role: 'Fast mana enabling turn-one Necropotence or Hypnotic Specter' },
      ],
      summary:
        'The period known as "The Black Summer" saw mono-black Necropotence decks dominate Type 2 to a degree rarely seen before or since. Dark Ritual into Necropotence on turn one was the format\'s most feared opening. The deck refilled its hand every turn, burying opponents under card advantage while Hymn to Tourach and Hypnotic Specter shredded opposing resources. Erhnam-Geddon (green-white midrange using Erhnam Djinn and Armageddon) was the main challenger but struggled against the raw power of Necropotence.',
      whyItDominated: [
        'Necropotence provided unmatched card advantage at the cost of life',
        'Dark Ritual enabled devastating turn-one plays',
        'Hymn to Tourach and Hypnotic Specter created a discard lock',
        'The deck had both inevitability and speed, a rare combination',
      ],
      whyItEnded:
        'The arrival of Alliances in June introduced new tools, and Mirage in October rotated the card pool. However, Necropotence itself remained legal and potent well beyond this era. The metagame slowly adapted with more targeted hate cards.',
      confidence: 'medium',
      sources: [
        {
          title: 'The Black Summer - MTG History',
          publisher: 'MTG Wiki',
          url: 'https://mtg.fandom.com/wiki/Black_Summer',
          note: 'Historical overview of the Necropotence-dominated summer of 1996.',
        },
        {
          title: '1996 World Championships',
          publisher: 'Wizards of the Coast',
          url: 'https://mtg.fandom.com/wiki/1996_World_Championships',
          date: '1996-08-18',
          note: 'Tom Chanpheng won Worlds 1996 with White Weenie, one of the few non-Necro victories.',
        },
      ],
    },
    {
      id: '1996-std-alliances',
      name: 'Alliances and Mirage Arrive',
      start: '1996-10',
      end: '1996-12',
      dominantDecks: ['Necropotence'],
      challengers: ['Erhnam-Geddon', 'White Weenie', 'UW Control', 'Pump Knights'],
      keyCards: [
        { name: 'Necropotence', role: 'Still the dominant card advantage engine' },
        { name: 'Force of Will', role: 'Free counterspell from Alliances' },
        { name: 'Erhnam Djinn', role: 'Efficient beater in green-white builds' },
        { name: 'Armageddon', role: 'Mana denial after deploying threats' },
      ],
      summary:
        'Alliances brought Force of Will and other powerful cards to the format, while Mirage\'s October release began reshaping the card pool. Necropotence decks remained dominant but the field diversified slightly. Force of Will gave blue decks a free answer to turn-one Necropotence, though mono-black remained the deck to beat heading into 1997.',
      whyItDominated: [
        'Necropotence\'s fundamental power level remained unmatched',
        'New sets added tools but no direct answer to the card advantage engine',
        'The discard suite remained devastating against slower strategies',
      ],
      whyItEnded:
        'The format continued into 1997 with eventual rotation and banning considerations. Necropotence would remain a force until it finally left the card pool.',
      confidence: 'low',
      sources: [
        {
          title: 'Alliances set release',
          publisher: 'MTG Wiki',
          url: 'https://mtg.fandom.com/wiki/Alliances',
          date: '1996-06-10',
          note: 'Release of Alliances, introducing Force of Will to the format.',
        },
        {
          title: 'Mirage set release',
          publisher: 'MTG Wiki',
          url: 'https://mtg.fandom.com/wiki/Mirage',
          date: '1996-10-07',
          note: 'Release of Mirage, beginning the Mirage block.',
        },
      ],
    },
  ],
  setReleases: [
    { date: '1996-06-10', name: 'Alliances', code: 'ALL' },
    { date: '1996-10-07', name: 'Mirage', code: 'MIR', note: 'Standard rotation begins to formalize' },
  ],
  representativeDecks: [
    {
      name: 'Necropotence',
      slug: 'necropotence-standard-1996',
      period: 'The Black Summer',
      archetype: 'aggro',
      summary:
        'A mono-black deck built around Necropotence as an unmatched card advantage engine, fuelled by life payment and refilled by Dark Ritual into early threats. Hymn to Tourach and Hypnotic Specter shred opposing hands while Drain Life closes the game and recovers life. Crushes slower midrange and control, but vulnerable to fast white aggression and dedicated graveyard or enchantment hate.',
      keyCards: ['Necropotence', 'Dark Ritual', 'Hymn to Tourach', 'Hypnotic Specter', 'Drain Life', 'Order of the Ebon Hand'],
    },
    {
      name: 'Loconto UW Control',
      slug: 'loconto-uw-control-standard-1996',
      period: 'The First Pro Tour',
      archetype: 'control',
      summary:
        'A classic blue-white control shell that trades one-for-one until the late game. Swords to Plowshares and Wrath of God answer creatures cheaply, Counterspell protects key turns, and Serra Angel ends the game from a stable board. Strong against creature decks but pressured by fast discard and resilient card advantage engines like Necropotence.',
      keyCards: ['Swords to Plowshares', 'Wrath of God', 'Counterspell', 'Serra Angel', 'Adarkar Wastes'],
      source: {
        title: 'Pro Tour New York 1996 results',
        publisher: 'Wizards of the Coast',
        url: 'https://mtg.fandom.com/wiki/Pro_Tour_New_York_1996',
        date: '1996-02-17',
      },
    },
    {
      name: 'Erhnam-Geddon',
      slug: 'erhnam-geddon-standard-1996',
      period: 'The Black Summer',
      archetype: 'midrange',
      summary:
        'A green-white midrange shell that lands an efficient threat like Erhnam Djinn, then strands the opponent with Armageddon. Swords to Plowshares handles early creatures and Sylvan Library smooths draws. Punishes greedy mana bases and slow setups, but struggles against Necropotence engines that refuel through the mana denial.',
      keyCards: ['Erhnam Djinn', 'Armageddon', 'Swords to Plowshares', 'Sylvan Library', 'Strip Mine'],
    },
    {
      name: 'Stasis',
      slug: 'stasis-standard-1996',
      period: 'The Black Summer',
      archetype: 'prison',
      summary:
        'A prison strategy that resolves Stasis to freeze the opponent\'s permanents, then sustains the lock with Howling Mine and Boomerang on Stasis to skip upkeeps. Kismet slows whatever slips through. Devastating against fair decks that cannot remove the enchantment, but folds to enchantment hate and fast clocks.',
      keyCards: ['Stasis', 'Kismet', 'Boomerang', 'Howling Mine', 'Chronatog'],
    },
  ],
}

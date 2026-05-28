import type { YearFormatEntry } from '../types'

export const legacy2011: YearFormatEntry = {
  year: 2011,
  format: 'legacy',
  title: 'Legacy 2011',
  subtitle: 'The Mental Misstep year',
  shortLabel: 'Misstep & Delver',
  summary:
    'Legacy 2011 was defined by a single card printed and banned within the same calendar year. After the December 2010 banning of Survival of the Fittest, the format entered a healthy period of CounterTop, Team America, Merfolk, and combo diversity. New Phyrexia\'s Mental Misstep warped the format from May onward, pushing blue deck representation to record highs and crushing non-blue strategies. Its September ban, combined with Innistrad\'s Delver of Secrets and Snapcaster Mage, ushered in a new era of tempo dominance that would shape Legacy for years to come.',
  headlineDeck: 'RUG Delver',
  eras: [
    {
      id: '2011-leg-post-survival',
      name: 'Post-Survival',
      start: '2011-01',
      end: '2011-05',
      dominantDecks: ['CounterTop', 'Merfolk', 'Team America'],
      challengers: ['ANT', 'Show and Tell', 'Junk', 'Goblins', 'MUD', 'NO RUG'],
      keyCards: [
        { name: 'Counterbalance', role: 'Soft lock with Sensei\'s Divining Top' },
        { name: 'Sensei\'s Divining Top', role: 'Library manipulation and lock piece' },
        { name: 'Aether Vial', role: 'Uncounterable creature deployment for Merfolk' },
        { name: 'Tarmogoyf', role: 'Efficient threat in BUG tempo shells' },
        { name: 'Force of Will', role: 'Format-defining free counterspell' },
        { name: 'Natural Order', role: 'Combo finish in NO RUG and Bant variants' },
      ],
      summary:
        'With Survival of the Fittest banned in December 2010, the format opened up considerably. CounterTop (Counterbalance plus Sensei\'s Divining Top) emerged as a pillar of the format, locking opponents out of casting spells. Merfolk was the most-played deck at roughly 10% of the field, offering a strong tribal aggro plan backed by disruption. Team America (BUG Delver/tempo) and combo decks like ANT and Show and Tell filled out a genuinely diverse metagame. Only 48% of winning decks played Force of Will, a historically low number indicating real non-blue viability.',
      whyItDominated: [
        'CounterTop provided a near-unbeatable soft lock against many strategies',
        'Merfolk combined clock pressure with Daze and Force of Will disruption',
        'Team America leveraged Hymn to Tourach and Tarmogoyf as an efficient tempo package',
        'The format lacked a single dominant deck, rewarding metagame reads',
      ],
      whyItEnded:
        'New Phyrexia released in May 2011, introducing Mental Misstep. The free Phyrexian-mana counterspell immediately warped deckbuilding and invalidated many non-blue strategies that relied on one-mana spells.',
      confidence: 'high',
      sources: [
        {
          title: '2011 Legacy Year In Review',
          publisher: 'Star City Games',
          url: 'https://articles.starcitygames.com/articles/2011-legacy-year-in-review/',
          date: '2011-12-30',
          note: 'Comprehensive metagame data showing pre-Misstep archetype percentages: Merfolk 10.3%, Junk 9.7%, CounterTop 7.4%.',
        },
        {
          title: 'Instant Analysis - SCG Indianapolis Legacy Open 2011',
          publisher: 'Eternal Central',
          url: 'https://www.eternalcentral.com/instant-analysis-scg-indianapolis-legacy-open-2011/',
          date: '2011-02-06',
          note: 'CounterTop won this 266-player event. Format diversity visible in top finishes.',
        },
      ],
    },
    {
      id: '2011-leg-mental-misstep',
      name: 'Mental Misstep Era',
      start: '2011-05',
      end: '2011-09',
      dominantDecks: ['Merfolk', 'NO RUG', 'UW Stoneblade'],
      challengers: ['Hive Mind', 'UW Landstill', 'Zoo', 'CounterTop', 'Dredge', 'Painter'],
      keyCards: [
        { name: 'Mental Misstep', role: 'Free counter for one-mana spells; format-warping' },
        { name: 'Stoneforge Mystic', role: 'Equipment tutor enabling Stoneblade archetypes' },
        { name: 'Batterskull', role: 'Primary Stoneforge target from New Phyrexia' },
        { name: 'Lord of Atlantis', role: 'Core Merfolk lord in the format\'s most-played deck' },
        { name: 'Natural Order', role: 'Progenitus kill in NO RUG builds' },
      ],
      summary:
        'Mental Misstep\'s arrival in May 2011 fundamentally reshaped Legacy. The card appeared in 76.3% of winning decklists, making it the most ubiquitous spell since Brainstorm. Blue decks grew more dominant than ever, as they could play Misstep alongside their existing suite of free counters. Non-blue strategies relying on one-mana spells--Goblins, Junk, High Tide, Affinity--collapsed. Merfolk surged to 12.5% of the field. GP Providence (1,178 players) saw James Rynkiewicz win with Zenith Bant, while NO RUG and UW Stoneblade became format pillars. The Stoneblade archetype family, powered by Stoneforge Mystic fetching Batterskull, represented over 8% of the field.',
      whyItDominated: [
        'Mental Misstep countered key one-mana spells (Brainstorm, Swords to Plowshares, Aether Vial, Goblin Lackey) for free',
        'Blue decks incorporated Misstep most effectively alongside Force of Will and Daze',
        'Non-blue decks that relied on one-drops were disproportionately punished',
        'Stoneforge Mystic into Batterskull gave blue-white decks a compact threat package',
      ],
      whyItEnded:
        'Wizards of the Coast banned Mental Misstep on September 20, 2011, effective October 1. The stated reason: instead of helping non-blue decks fight combo as intended, the card made blue decks more dominant than ever. The DCI aimed to restore pre-Misstep diversity.',
      confidence: 'high',
      sources: [
        {
          title: 'Too Much Information - Grand Prix Providence',
          publisher: 'Star City Games',
          url: 'https://articles.starcitygames.com/articles/too-much-information-grand-prix-providence/',
          date: '2011-05-29',
          note: 'GP Providence metagame data: 1,178 players, Merfolk 14.48%, Team America 9.65%. Bant won the event.',
        },
        {
          title: 'Instant Analysis - SCG Orlando Legacy Open 2011',
          publisher: 'Eternal Central',
          url: 'https://www.eternalcentral.com/instant-analysis-scg-orlando-legacy-open-2011/',
          date: '2011-05-15',
          note: 'First major Legacy event with Mental Misstep legal. 146 players.',
        },
        {
          title: '2011 Legacy Year In Review',
          publisher: 'Star City Games',
          url: 'https://articles.starcitygames.com/articles/2011-legacy-year-in-review/',
          date: '2011-12-30',
          note: 'Mental Misstep appeared in 76.3% of winning decks during this period.',
        },
      ],
    },
    {
      id: '2011-leg-post-misstep',
      name: 'Post-Misstep',
      start: '2011-09',
      end: '2011-12',
      dominantDecks: ['RUG Delver', 'UW Stoneblade'],
      challengers: ['Maverick', 'Reanimator', 'ANT', 'Esper Stoneblade', 'UR Delver', 'Dredge'],
      keyCards: [
        { name: 'Delver of Secrets', role: 'Efficient one-mana flipped threat from Innistrad' },
        { name: 'Snapcaster Mage', role: 'Spell recursion and tempo from Innistrad' },
        { name: 'Stoneforge Mystic', role: 'Equipment tutor anchoring Blade archetypes' },
        { name: 'Nimble Mongoose', role: 'Shroud threat in Canadian Threshold shells' },
        { name: 'Knight of the Reliquary', role: 'Key threat in Maverick, the premier non-blue deck' },
      ],
      summary:
        'The banning of Mental Misstep coincided with Innistrad\'s release, which delivered two cards that would define Legacy for years: Delver of Secrets and Snapcaster Mage. Players quickly discovered that the Canadian Threshold shell (RUG tempo with Nimble Mongoose, Daze, Stifle, and Wasteland) was the ideal home for Delver. RUG Delver won three consecutive SCG Opens and established itself as the clear best deck by year\'s end at 12.3% of the field. UW Stoneblade remained powerful at 14.4%. Naya Maverick emerged as the first non-blue tier-one deck since Goblins, and aggro-control strategies surged from 21% to over 50% of the metagame. The format was faster, more interactive, and more tempo-oriented than ever.',
      whyItDominated: [
        'Delver of Secrets provided a 3/2 flyer for one mana in spell-heavy decks',
        'Snapcaster Mage gave tempo decks card advantage without sacrificing speed',
        'The Canadian Threshold shell was perfectly suited for Delver plus Wasteland plus Daze',
        'UW Stoneblade offered a more controlling alternative with Stoneforge Mystic',
      ],
      whyItEnded:
        'The era did not end within 2011. RUG Delver and Stoneblade continued to dominate into 2012, with Delver of Secrets becoming the defining creature of Legacy tempo strategies for years.',
      confidence: 'high',
      sources: [
        {
          title: 'Analyzing The Legacy Metagame',
          publisher: 'Star City Games',
          url: 'https://articles.starcitygames.com/articles/analyzing-the-legacy-metagame/',
          date: '2011-11-15',
          note: 'RUG Tempo won three consecutive SCG Opens and was the clear best deck.',
        },
        {
          title: '2011 Legacy Year In Review',
          publisher: 'Star City Games',
          url: 'https://articles.starcitygames.com/articles/2011-legacy-year-in-review/',
          date: '2011-12-30',
          note: 'Post-ban data: UW Blade 14.4%, RUG Tempo 12.3%, aggro-control at 50.4% of metagame.',
        },
        {
          title: 'The Legacy of Innistrad',
          publisher: 'Untap Leagues',
          url: 'https://untapleagues.com/the-legacy-of-innistrad/',
          note: 'Analysis of Delver and Snapcaster Mage entering the Legacy format.',
        },
      ],
    },
  ],
  bans: [
    {
      date: '2011-09-20',
      cards: ['Mental Misstep'],
      explanation:
        'Mental Misstep was designed with Phyrexian mana to let non-blue decks fight combo, similar to Force of Will. Instead, it made blue decks more dominant than ever. The card appeared in over 76% of winning decklists, and non-blue strategies declined sharply. The DCI banned it to restore the diverse metagame that existed before its printing.',
      source: {
        title: 'Explanation of September 2011 B&R Changes',
        publisher: 'Wizards of the Coast',
        url: 'https://magic.wizards.com/en/news/feature/explanation-september-2011-br-changes-2011-09-20-0',
        date: '2011-09-20',
      },
    },
  ],
  setReleases: [
    { date: '2011-02-04', name: 'Mirrodin Besieged', code: 'MBS' },
    { date: '2011-05-13', name: 'New Phyrexia', code: 'NPH', note: 'Introduced Mental Misstep' },
    { date: '2011-09-30', name: 'Innistrad', code: 'ISD', note: 'Delver of Secrets and Snapcaster Mage' },
  ],
  representativeDecks: [
    {
      name: 'CounterTop',
      slug: 'countertop-legacy-2011',
      period: 'Post-Survival',
      archetype: 'control',
      summary:
        'A blue-green-white control deck that uses Counterbalance plus Sensei\'s Divining Top to lock cheap spells. Tarmogoyf and Jace, the Mind Sculptor provide threats and card advantage, Force of Will and Swords to Plowshares back up the lock. Dominates fair decks but vulnerable to high-cost threats.',
      keyCards: ['Counterbalance', 'Sensei\'s Divining Top', 'Force of Will', 'Tarmogoyf', 'Swords to Plowshares', 'Jace, the Mind Sculptor'],
      source: {
        title: 'Instant Analysis - SCG Indianapolis Legacy Open 2011',
        publisher: 'Eternal Central',
        url: 'https://www.eternalcentral.com/instant-analysis-scg-indianapolis-legacy-open-2011/',
        date: '2011-02-06',
      },
    },
    {
      name: 'Merfolk',
      slug: 'merfolk-legacy-2011',
      period: 'Mental Misstep Era',
      archetype: 'aggro',
      summary:
        'A mono-blue tribal aggro deck that drops creatures via Aether Vial and pumps the team with Lord of Atlantis and Merrow Reejerey. Force of Will, Daze, and Mental Misstep protect the clock. Punishes slow decks but pressured by sweepers and lifegain.',
      keyCards: ['Lord of Atlantis', 'Merrow Reejerey', 'Aether Vial', 'Force of Will', 'Daze', 'Mental Misstep', 'Cursecatcher'],
      source: {
        title: 'Too Much Information - Grand Prix Providence',
        publisher: 'Star City Games',
        url: 'https://articles.starcitygames.com/articles/too-much-information-grand-prix-providence/',
        date: '2011-05-29',
      },
    },
    {
      name: 'Zenith Bant',
      slug: 'zenith-bant-legacy-2011',
      period: 'Mental Misstep Era',
      archetype: 'midrange',
      summary:
        'A green-white-blue midrange-combo hybrid that uses Green Sun\'s Zenith and Natural Order to tutor up Progenitus or Knight of the Reliquary. Noble Hierarch accelerates, Swords to Plowshares handles threats. Flexible toolbox but vulnerable to graveyard hate and discard.',
      keyCards: ['Green Sun\'s Zenith', 'Natural Order', 'Knight of the Reliquary', 'Noble Hierarch', 'Progenitus', 'Swords to Plowshares'],
      source: {
        title: 'Grand Prix Providence Top 8',
        publisher: 'MTGTop8',
        url: 'https://mtgtop8.com/event?e=1632&f=LE',
        date: '2011-05-29',
      },
    },
    {
      name: 'Team America',
      slug: 'team-america-legacy-2011',
      period: 'Post-Survival',
      archetype: 'tempo',
      summary:
        'A blue-black-green tempo-disruption deck that combines Tarmogoyf and Tombstalker as cheap threats with Hymn to Tourach for hand disruption. Wasteland and Daze attack the mana, Force of Will protects key turns. Strong against greedy decks but pressured by Counterbalance.',
      keyCards: ['Tarmogoyf', 'Tombstalker', 'Hymn to Tourach', 'Force of Will', 'Daze', 'Wasteland', 'Dark Confidant'],
    },
    {
      name: 'UW Stoneblade',
      slug: 'uw-stoneblade-legacy-2011',
      period: 'Post-Misstep',
      archetype: 'control',
      summary:
        'A blue-white control deck that uses Stoneforge Mystic to tutor up Batterskull for a recurring lifegain finisher. Jace, the Mind Sculptor and Snapcaster Mage generate card advantage, Swords to Plowshares answers creatures. Strong against fair decks but pressured by fast combo.',
      keyCards: ['Stoneforge Mystic', 'Batterskull', 'Jace, the Mind Sculptor', 'Snapcaster Mage', 'Swords to Plowshares', 'Force of Will'],
      source: {
        title: '2011 Legacy Year In Review',
        publisher: 'Star City Games',
        url: 'https://articles.starcitygames.com/articles/2011-legacy-year-in-review/',
        date: '2011-12-30',
      },
    },
    {
      name: 'RUG Delver',
      slug: 'rug-delver-legacy-2011',
      period: 'Post-Misstep',
      archetype: 'tempo',
      summary:
        'A blue-red-green tempo deck built on Delver of Secrets, Nimble Mongoose, and Tarmogoyf — cheap powerful threats protected by Daze, Force of Will, and Snapcaster Mage flashbacks. Lightning Bolt clears blockers. Punishes greedy mana bases but vulnerable to sweepers.',
      keyCards: ['Delver of Secrets', 'Nimble Mongoose', 'Tarmogoyf', 'Snapcaster Mage', 'Lightning Bolt', 'Daze', 'Force of Will', 'Wasteland', 'Stifle'],
      source: {
        title: 'Analyzing The Legacy Metagame',
        publisher: 'Star City Games',
        url: 'https://articles.starcitygames.com/articles/analyzing-the-legacy-metagame/',
        date: '2011-11-15',
      },
    },
    {
      name: 'ANT',
      slug: 'ant-legacy-2011',
      period: 'Post-Survival',
      archetype: 'combo',
      summary:
        'A black storm combo that chains Dark Ritual, Lion\'s Eye Diamond, and Infernal Tutor to assemble a lethal Tendrils of Agony. Ad Nauseam draws the deck, Brainstorm smooths consistency. Goldfishes turn one or two but vulnerable to discard, counters, and graveyard hate.',
      keyCards: ['Ad Nauseam', 'Tendrils of Agony', 'Infernal Tutor', 'Lion\'s Eye Diamond', 'Dark Ritual', 'Brainstorm', 'Ponder'],
    },
    {
      name: 'Maverick',
      slug: 'maverick-legacy-2011',
      period: 'Post-Misstep',
      archetype: 'midrange',
      summary:
        'A green-white midrange deck that tutors creatures with Green Sun\'s Zenith and Knight of the Reliquary fetching utility lands. Mother of Runes protects key threats, Thalia, Guardian of Thraben slows the opponent\'s spells, Noble Hierarch accelerates. Resilient but pressured by combo and burn.',
      keyCards: ['Knight of the Reliquary', 'Green Sun\'s Zenith', 'Mother of Runes', 'Noble Hierarch', 'Thalia, Guardian of Thraben', 'Wasteland', 'Swords to Plowshares'],
      source: {
        title: '2011 Legacy Year In Review',
        publisher: 'Star City Games',
        url: 'https://articles.starcitygames.com/articles/2011-legacy-year-in-review/',
        date: '2011-12-30',
        note: 'Maverick noted as the first non-blue tier-one deck since Goblins.',
      },
    },
  
    {
      name: 'Show and Tell',
      slug: 'show-and-tell-legacy-2011',
      period: 'Post-Survival',
      archetype: 'combo',
      summary:
        'A blue combo deck that uses Show and Tell or Sneak Attack to cheat Emrakul, the Aeons Torn into play on turn three for a one-shot kill. Ponder smooths draws, Force of Will protects the combo turn. Devastating goldfish but vulnerable to disruption.',
      keyCards: ['Show and Tell', 'Emrakul, the Aeons Torn', 'Sneak Attack', 'Ponder', 'Force of Will'],
    },
    {
      name: 'Junk',
      slug: 'junk-legacy-2011',
      period: 'Post-Survival',
      archetype: 'midrange',
      summary:
        'A black-green-white midrange deck combining Tarmogoyf and Knight of the Reliquary as efficient threats with Stoneforge Mystic for equipment, Swords to Plowshares for removal, and Thoughtseize for disruption. Grindy and resilient but slow against combo.',
      keyCards: ['Tarmogoyf', 'Knight of the Reliquary', 'Stoneforge Mystic', 'Swords to Plowshares', 'Thoughtseize'],
    },
    {
      name: 'Goblins',
      slug: 'goblins-legacy-2011',
      period: 'Post-Survival',
      archetype: 'aggro',
      summary:
        'A mono-red Goblin tribal deck that cheats threats with Goblin Lackey, tutors via Goblin Matron, and refills with Goblin Ringleader. Aether Vial drops creatures at instant speed, Wasteland attacks the mana base. Punishes fair decks but pressured by sweepers.',
      keyCards: ['Goblin Lackey', 'Goblin Ringleader', 'Goblin Matron', 'Aether Vial', 'Wasteland'],
    },
    {
      name: 'MUD',
      slug: 'mud-legacy-2011',
      period: 'Post-Survival',
      archetype: 'prison',
      summary:
        'A mono-brown prison deck built on Metalworker producing massive mana for Wurmcoil Engine and Karn, Silver Golem. Trinisphere and Chalice of the Void lock out cheap spells. Devastating against blue decks but vulnerable to land destruction and dedicated artifact hate.',
      keyCards: ['Metalworker', 'Wurmcoil Engine', 'Trinisphere', 'Chalice of the Void', 'Karn, Silver Golem'],
    },
    {
      name: 'NO RUG',
      slug: 'no-rug-legacy-2011',
      period: 'Post-Survival',
      archetype: 'combo',
      summary:
        'A blue-green combo deck that uses Natural Order to sacrifice a creature like Noble Hierarch for Progenitus on turn two or three. Tarmogoyf provides a backup clock, Force of Will protects the combo. Fast and disruptive but vulnerable to graveyard and exile hate.',
      keyCards: ['Natural Order', 'Progenitus', 'Noble Hierarch', 'Tarmogoyf', 'Force of Will'],
    },
    {
      name: 'Hive Mind',
      slug: 'hive-mind-legacy-2011',
      period: 'Counterbalance',
      archetype: 'combo',
      summary:
        'A blue combo deck that resolves Show and Tell putting Hive Mind into play, then casts Pact of Negation or Slaughter Pact — copies of which the opponent cannot pay upkeep on. Force of Will protects the combo turn. Devastating goldfish but vulnerable to graveyard hate and disruption.',
      keyCards: ['Hive Mind', 'Pact of Negation', 'Slaughter Pact', 'Show and Tell', 'Force of Will'],
    },
    {
      name: 'UW Landstill',
      slug: 'uw-landstill-legacy-2011',
      period: 'Counterbalance',
      archetype: 'control',
      summary:
        'A blue-white control deck centered on Standstill plus manlands like Mishra\'s Factory and Mutavault — the opponent breaks parity unfavorably while the Landstill player attacks with lands. Swords to Plowshares and Force of Will hold the board. Slow but grindy against fair decks.',
      keyCards: ['Standstill', 'Mishra\'s Factory', 'Mutavault', 'Swords to Plowshares', 'Force of Will'],
    },
    {
      name: 'Zoo',
      slug: 'zoo-legacy-2011',
      period: 'Counterbalance',
      archetype: 'aggro',
      summary:
        'A red-green-white aggro deck packing efficient one- and two-drops — Wild Nacatl, Tarmogoyf, Knight of the Reliquary — backed by Lightning Bolt and Path to Exile. Aims to deal twenty damage by turn four. Punishes slow decks but vulnerable to sweepers and lifegain.',
      keyCards: ['Wild Nacatl', 'Tarmogoyf', 'Knight of the Reliquary', 'Lightning Bolt', 'Path to Exile'],
    },
    {
      name: 'Dredge',
      slug: 'dredge-legacy-2011',
      period: 'Counterbalance',
      archetype: 'combo',
      summary:
        'A graveyard combo that abuses dredge to mill the library, generating Narcomoeba and Ichorid recursion. Dread Return reanimates a finisher, Bridge from Below produces Zombie tokens, Cabal Therapy strips disruption. Devastating goldfish but folds to graveyard hate.',
      keyCards: ['Bridge from Below', 'Narcomoeba', 'Ichorid', 'Dread Return', 'Cabal Therapy'],
    },
    {
      name: 'Painter',
      slug: 'painter-legacy-2011',
      period: 'Counterbalance',
      archetype: 'combo',
      summary:
        'A red combo deck that pairs Painter\'s Servant naming a color with Grindstone for a one-shot mill-out. Imperial Recruiter tutors combo pieces, Goblin Welder recurs artifacts, Red Elemental Blast doubles as protection. Devastating against blue but vulnerable to artifact removal.',
      keyCards: ['Painter\'s Servant', 'Grindstone', 'Imperial Recruiter', 'Goblin Welder', 'Red Elemental Blast'],
    },
    {
      name: 'Reanimator',
      slug: 'reanimator-legacy-2011',
      period: 'Mental Misstep Era',
      archetype: 'combo',
      summary:
        'A black reanimator combo that discards Griselbrand or Iona via Entomb, then resurrects them with Reanimate or Exhume on turn one. Griselbrand draws into more combo, Iona shuts off a color. Devastating goldfish but folds to graveyard hate.',
      keyCards: ['Entomb', 'Reanimate', 'Exhume', 'Griselbrand', 'Iona, Shield of Emeria'],
    },
    {
      name: 'Esper Stoneblade',
      slug: 'esper-stoneblade-legacy-2011',
      period: 'Mental Misstep Era',
      archetype: 'control',
      summary:
        'A blue-black-white control deck that uses Stoneforge Mystic to tutor Batterskull while Jace, the Mind Sculptor builds card advantage. Swords to Plowshares and Thoughtseize provide flexible interaction. Strong against fair decks but vulnerable to fast combo.',
      keyCards: ['Stoneforge Mystic', 'Batterskull', 'Jace, the Mind Sculptor', 'Swords to Plowshares', 'Thoughtseize'],
    },
    {
      name: 'UR Delver',
      slug: 'ur-delver-legacy-2011',
      period: 'Mental Misstep Era',
      archetype: 'tempo',
      summary:
        'A blue-red tempo deck centered on Delver of Secrets flipping early backed by Lightning Bolt, Daze, and Force of Will. Ponder smooths draws and helps stack the top for Delver. Punishes greedy mana bases but vulnerable to sweepers and lifegain.',
      keyCards: ['Delver of Secrets', 'Lightning Bolt', 'Daze', 'Force of Will', 'Ponder'],
    },
  ],
}

import type { YearFormatEntry } from '../types'

export const legacy2010: YearFormatEntry = {
  year: 2010,
  format: 'legacy',
  title: 'Legacy 2010',
  subtitle: 'The Rise and Fall of Survival',
  shortLabel: 'Survival & CounterTop',
  summary:
    'Legacy 2010 began as a diverse format defined by CounterTop control, Zoo aggro, and storm combo before Survival of the Fittest—supercharged by Vengevine from Rise of the Eldrazi—consumed the metagame. By autumn, Survival variants occupied an outsized share of top finishes at StarCityGames Legacy Opens, prompting Wizards of the Coast to ban the card in December. Grand Prix Madrid and Grand Prix Columbus bookended the pre-Survival and post-Survival eras, with Tomoharu Saito notably top-finishing both events with different archetypes.',
  headlineDeck: 'Survival of the Fittest',
  eras: [
    {
      id: '2010-leg-pre-roe',
      name: 'Pre-Rise of Eldrazi',
      start: '2010-01',
      end: '2010-04',
      dominantDecks: ['CounterTop', 'Zoo'],
      challengers: ['Ad Nauseam Tendrils', 'Merfolk', 'Reanimator', 'Canadian Threshold'],
      keyCards: [
        { name: 'Counterbalance', role: 'Soft lock with Sensei\'s Divining Top' },
        { name: 'Sensei\'s Divining Top', role: 'Library manipulation and CounterBalance enabler' },
        { name: 'Tarmogoyf', role: 'Efficient threat across multiple archetypes' },
        { name: 'Wild Nacatl', role: 'Core Zoo one-drop' },
        { name: 'Ad Nauseam', role: 'Storm combo engine drawing into Tendrils of Agony' },
        { name: 'Aether Vial', role: 'Uncounterable creature deployment for Merfolk' },
      ],
      summary:
        'Early 2010 Legacy was a balanced metagame anchored by CounterTop control and Zoo aggro, with combo decks such as Ad Nauseam Tendrils and Reanimator keeping the field honest. Grand Prix Madrid in February 2010 drew 2,227 players and showcased this diversity: the top eight included Reanimator (winner Andreas Muller), two ANT lists (including Tomoharu Saito), three Zoo decks, and two Natural Order Bant builds. Merfolk was a consistent performer at StarCityGames Legacy Opens, regularly appearing in top-eight brackets and punishing CounterTop\'s Island-heavy manabase with Islandwalk lords.',
      whyItDominated: [
        'CounterTop provided a soft lock against much of the format via Counterbalance plus Sensei\'s Divining Top',
        'Zoo had the raw speed to punish slower strategies and combo decks that stumbled',
        'ANT offered a fast combo kill that could race both CounterTop and Zoo with proper disruption',
        'Merfolk preyed on blue-heavy metagames with Islandwalk and Aether Vial',
      ],
      whyItEnded:
        'The release of Rise of the Eldrazi in April 2010 introduced Vengevine, which combined with Survival of the Fittest to create an engine that outclassed the existing metagame pillars.',
      confidence: 'high',
      sources: [
        {
          title: 'Grand Prix Madrid 2010 results',
          publisher: 'MTGTop8',
          url: 'https://www.mtgtop8.com/event?e=461',
          date: '2010-02-28',
          note: 'Top 8 featured Reanimator, ANT, Zoo, and Natural Order Bant—representative of the diverse pre-Survival metagame.',
        },
        {
          title: 'A Deeper Look at CounterTop in Legacy',
          publisher: 'Star City Games',
          url: 'https://articles.starcitygames.com/articles/a-deeper-look-at-countertop-in-legacy/',
          note: 'Analysis of CounterTop performance at SCG Legacy Opens in early 2010.',
        },
        {
          title: 'So Many Insane Plays — Your Complete Guide to Legacy: The 50 Decks of Legacy',
          publisher: 'Star City Games',
          url: 'https://articles.starcitygames.com/articles/so-many-insane-plays-your-complete-guide-to-legacy-the-50-decks-of-legacy/',
          note: 'Stephen Menendian\'s comprehensive overview of the Legacy metagame, including GP Madrid breakdown.',
        },
      ],
    },
    {
      id: '2010-leg-survival-summer',
      name: 'Survival Summer',
      start: '2010-05',
      end: '2010-09',
      dominantDecks: ['UG Survival Madness', 'GW Survival'],
      challengers: ['CounterTop', 'Merfolk', 'Ad Nauseam Tendrils', 'Team America'],
      keyCards: [
        { name: 'Survival of the Fittest', role: 'Repeatable creature tutor that also filled the graveyard' },
        { name: 'Vengevine', role: 'Recursive threat that returned from the graveyard when creatures were cast' },
        { name: 'Basking Rootwalla', role: 'Free creature via madness, triggered Vengevine recursion' },
        { name: 'Wild Mongrel', role: 'Discard outlet for madness creatures' },
        { name: 'Noble Hierarch', role: 'Mana acceleration in GW builds' },
        { name: 'Aquamoeba', role: 'Additional discard outlet in UG builds' },
      ],
      summary:
        'Vengevine\'s printing in Rise of the Eldrazi transformed Survival of the Fittest from a fringe toolbox card into one of Legacy\'s most format-warping engines. The interaction was devastating: Survival discarded Vengevine to find Basking Rootwalla (cast for free via madness), then casting two creatures in a turn returned all Vengevines from the graveyard to the battlefield. Caleb Durward pioneered the UG Madness version and placed third-fourth at Grand Prix Columbus in August 2010 with 1,296 players. Saito won that same event with Merfolk, demonstrating that the format was not yet fully consumed, but Survival was clearly ascendant.',
      whyItDominated: [
        'Survival of the Fittest combined with Vengevine created a recursive threat engine that was difficult to interact with profitably',
        'Basking Rootwalla provided free creatures that triggered Vengevine returns at no mana cost',
        'The deck could generate lethal board states as early as turn two with proper sequencing',
        'Existing removal suites were ill-equipped to handle recurring hasty four-power creatures',
      ],
      whyItEnded:
        'Rather than ending, Survival\'s dominance intensified. New builds emerged in autumn, including Necrotic Ooze combo variants, and the deck\'s metagame share continued to grow through the fall SCG Open season.',
      confidence: 'high',
      sources: [
        {
          title: 'Grand Prix Columbus 2010 results',
          publisher: 'MTGTop8',
          url: 'https://www.mtgtop8.com/event?e=460&f=LE',
          date: '2010-08-01',
          note: 'Caleb Durward placed 3rd-4th with UG Madness (Survival). Saito won with Merfolk.',
        },
        {
          title: 'Instant Analysis — SCG Charlotte $5K Legacy',
          publisher: 'Eternal Central',
          url: 'https://www.eternalcentral.com/instant-analysis-scg-charlotte-5k-legacy/',
          note: 'Nick Spagnolo won SCG Charlotte with an innovative UG Survival build featuring Trinket Mage.',
        },
        {
          title: 'Vengevine Survival Legacy Archive decks',
          publisher: 'TCDecks',
          url: 'https://www.tcdecks.net/archetype.php?archetype=Vengevine+Survival&format=Legacy+Archive',
          note: 'Archive of Vengevine Survival decklists from 2010 tournament results.',
        },
      ],
    },
    {
      id: '2010-leg-survival-ban',
      name: 'Survival Dominance & Ban',
      start: '2010-10',
      end: '2010-12',
      dominantDecks: ['GW Survival', 'BUG Survival (Necrotic Ooze)'],
      challengers: ['CounterTop', 'Merfolk', 'Dredge', 'Belcher'],
      keyCards: [
        { name: 'Survival of the Fittest', role: 'Format-warping tutor engine' },
        { name: 'Vengevine', role: 'Recursive hasty threat' },
        { name: 'Necrotic Ooze', role: 'Combo kill piece that copied activated abilities of creatures in all graveyards' },
        { name: 'Triskelion', role: 'Combo piece with Necrotic Ooze providing a damage-based win condition' },
        { name: 'Phyrexian Devourer', role: 'Combo piece with Necrotic Ooze providing unbounded power' },
      ],
      summary:
        'By autumn 2010, Survival of the Fittest decks had fractured into multiple variants—GW aggressive builds, UG Madness, and a new BUG combo version using Necrotic Ooze with Triskelion and Phyrexian Devourer in the graveyard for an instant-kill combo. At SCG Nashville, Survival variants occupied four of the top eight and five of the top sixteen slots. The 2010 World Championship Sunday Legacy event in Chiba still featured a CounterTop winner (Kazuho Sasou) alongside a GW Survival list in the top four, illustrating that while the format was not mono-deck, Survival\'s share was unsustainable. On December 20, 2010, Wizards of the Coast announced the banning of Survival of the Fittest, effective January 1, 2011, citing that it had "caused the competitive format to become significantly less diverse."',
      whyItDominated: [
        'Multiple Survival builds attacked from different angles, making it difficult to sideboard against the archetype as a whole',
        'The Necrotic Ooze combo variant added an instant-kill combo line on top of the existing Vengevine beatdown plan',
        'Survival of the Fittest found whichever creature was needed for the situation, providing unmatched flexibility',
        'The deck\'s recursive elements rendered traditional one-for-one removal ineffective',
      ],
      whyItEnded:
        'Wizards of the Coast banned Survival of the Fittest on December 20, 2010, effective January 1, 2011. The ban immediately removed the format\'s most dominant engine and ushered in a new era of Legacy diversity. Time Spiral was unbanned in the same announcement.',
      confidence: 'high',
      sources: [
        {
          title: 'Survival of the Fittest Banned in Legacy, No Changes in Vintage',
          publisher: 'Eternal Central',
          url: 'https://www.eternalcentral.com/survival-of-the-fittest-banned-in-legacy-no-changes-in-vintage/',
          date: '2010-12-20',
          note: 'Coverage of the December 20, 2010 ban announcement. Erik Lauer: "Survival of the Fittest decks have been outperforming other decks in Legacy."',
        },
        {
          title: 'Instant Analysis — SCG Kansas City & San Jose Legacy Opens',
          publisher: 'Eternal Central',
          url: 'https://www.eternalcentral.com/instant-analysis-scg-kansas-city-san-jose-legacy-opens/',
          note: 'Metagame analysis showing Survival\'s dominance in late 2010 SCG events.',
        },
        {
          title: '2010 Worlds Sunday Legacy results',
          publisher: 'MTGTop8',
          url: 'https://www.mtgtop8.com/event?e=807&f=LE',
          date: '2010-12-16',
          note: 'CounterTop won the event but GW Survival placed in the top four.',
        },
        {
          title: 'Focus on Legacy — Combating Survival',
          publisher: 'Eternal Central',
          url: 'https://www.eternalcentral.com/focus-on-legacy-combating-survival/',
          note: 'Analysis of the challenges the Legacy community faced in adapting to Survival dominance.',
        },
      ],
    },
  ],
  bans: [
    {
      date: '2010-12-20',
      cards: ['Survival of the Fittest'],
      explanation:
        'Survival of the Fittest was banned for causing a significant reduction in Legacy format diversity. Multiple Survival variants—GW aggro, UG Madness, and BUG Necrotic Ooze combo—collectively dominated top finishes at major events throughout the second half of 2010. The DCI stated that the card had "caused the competitive format to become significantly less diverse." Time Spiral was unbanned in the same announcement.',
      source: {
        title: 'Survival of the Fittest Banned in Legacy, No Changes in Vintage',
        publisher: 'Eternal Central',
        url: 'https://www.eternalcentral.com/survival-of-the-fittest-banned-in-legacy-no-changes-in-vintage/',
        date: '2010-12-20',
        note: 'Ban effective January 1, 2011.',
      },
    },
  ],
  setReleases: [
    { date: '2010-02-05', name: 'Worldwake', code: 'WWK' },
    { date: '2010-04-23', name: 'Rise of the Eldrazi', code: 'ROE', note: 'Vengevine enabled Survival strategies' },
    { date: '2010-10-01', name: 'Scars of Mirrodin', code: 'SOM' },
  ],
  representativeDecks: [
    {
      name: 'CounterTop',
      slug: 'countertop-legacy-2010',
      period: 'Pre-Rise of Eldrazi',
      archetype: 'control',
      summary:
        'A blue-green-white control shell that uses Counterbalance plus Sensei\'s Divining Top to lock low-cost spells off the stack. Tarmogoyf serves as the efficient clock, Force of Will and Swords to Plowshares back up the lock. Dominates fair decks built on cheap spells but vulnerable to high-cost threats and discard.',
      keyCards: ['Counterbalance', 'Sensei\'s Divining Top', 'Tarmogoyf', 'Force of Will', 'Swords to Plowshares', 'Natural Order'],
    },
    {
      name: 'UG Survival Madness',
      slug: 'ug-survival-madness-legacy-2010',
      period: 'Survival Summer',
      archetype: 'aggro',
      summary:
        'A blue-green aggro deck that uses Survival of the Fittest to dump Vengevine into the graveyard, then triggers its recursion by casting Basking Rootwalla and Aquamoeba. Wild Mongrel enables madness discards. Explosive against fair decks but vulnerable to graveyard hate.',
      keyCards: ['Survival of the Fittest', 'Vengevine', 'Basking Rootwalla', 'Wild Mongrel', 'Aquamoeba', 'Force of Will'],
    },
    {
      name: 'GW Survival',
      slug: 'gw-survival-legacy-2010',
      period: 'Survival Dominance & Ban',
      archetype: 'midrange',
      summary:
        'A green-white midrange shell built around Survival of the Fittest tutoring up Vengevine and silver-bullet creatures. Noble Hierarch accelerates, Fauna Shaman provides a backup engine, Qasali Pridemage handles artifacts and enchantments. Flexible toolbox but folds to graveyard hate.',
      keyCards: ['Survival of the Fittest', 'Vengevine', 'Noble Hierarch', 'Fauna Shaman', 'Qasali Pridemage', 'Knight of the Reliquary'],
    },
    {
      name: 'BUG Survival (Necrotic Ooze Combo)',
      slug: 'bug-survival-ooze-legacy-2010',
      period: 'Survival Dominance & Ban',
      archetype: 'combo',
      summary:
        'A blue-black-green combo deck that uses Survival of the Fittest to fill the graveyard with creatures, then plays Necrotic Ooze granting it Phyrexian Devourer plus Triskelion abilities for an infinite damage loop. Vengevine provides a backup plan. Devastating when assembled but vulnerable to graveyard hate.',
      keyCards: ['Survival of the Fittest', 'Necrotic Ooze', 'Triskelion', 'Phyrexian Devourer', 'Vengevine', 'Force of Will'],
    },
    {
      name: 'Merfolk',
      slug: 'merfolk-legacy-2010',
      period: 'Pre-Rise of Eldrazi',
      archetype: 'aggro',
      summary:
        'A mono-blue tribal aggro deck that drops creatures cheaply via Aether Vial and pumps the team with Lord of Atlantis. Cursecatcher provides cheap counter-protection, Silvergill Adept replaces itself, Force of Will protects the clock. Punishes slow decks but pressured by sweepers and lifegain.',
      keyCards: ['Lord of Atlantis', 'Aether Vial', 'Cursecatcher', 'Silvergill Adept', 'Force of Will', 'Wasteland'],
    },
    {
      name: 'Ad Nauseam Tendrils',
      slug: 'ant-legacy-2010',
      period: 'Pre-Rise of Eldrazi',
      archetype: 'combo',
      summary:
        'A black storm combo deck that chains Dark Ritual, Lion\'s Eye Diamond, and Infernal Tutor to assemble a lethal Tendrils of Agony. Ad Nauseam refills the hand by paying life. Goldfishes turn one or two but vulnerable to discard, counterspells, and graveyard hate.',
      keyCards: ['Ad Nauseam', 'Tendrils of Agony', 'Lion\'s Eye Diamond', 'Infernal Tutor', 'Dark Ritual', 'Brainstorm'],
    },
  
    {
      name: 'Zoo',
      slug: 'zoo-legacy-2010',
      period: 'Pre-Rise of Eldrazi',
      archetype: 'aggro',
      summary:
        'A red-green-white aggro deck packing the most efficient one-drops in the format — Wild Nacatl, Kird Ape, Steppe Lynx — backed by Tarmogoyf and Lightning Bolt. Aims to deal twenty damage by turn four. Punishes slow openings but vulnerable to sweepers and lifegain.',
      keyCards: ['Wild Nacatl', 'Tarmogoyf', 'Lightning Bolt', 'Kird Ape', 'Steppe Lynx'],
    },
    {
      name: 'Reanimator',
      slug: 'reanimator-legacy-2010',
      period: 'Pre-Rise of Eldrazi',
      archetype: 'combo',
      summary:
        'A black reanimator combo deck that discards Iona, Shield of Emeria or Inkwell Leviathan, then resurrects them with Reanimate or Exhume on turn one. Iona shuts off a color entirely. Devastating goldfish but folds to graveyard hate and counterspells.',
      keyCards: ['Reanimate', 'Exhume', 'Iona, Shield of Emeria', 'Inkwell Leviathan', 'Entomb'],
    },
    {
      name: 'Canadian Threshold',
      slug: 'canadian-threshold-legacy-2010',
      period: 'Pre-Rise of Eldrazi',
      archetype: 'tempo',
      summary:
        'A blue-red-green tempo deck built on cheap threats like Nimble Mongoose and Tarmogoyf protected by Daze and Force of Will. Lightning Bolt clears blockers and burns out the opponent. Punishes greedy mana bases but vulnerable to sweepers and lifegain.',
      keyCards: ['Nimble Mongoose', 'Tarmogoyf', 'Daze', 'Force of Will', 'Lightning Bolt'],
    },
    {
      name: 'Team America',
      slug: 'team-america-legacy-2010',
      period: 'Counterbalance',
      archetype: 'tempo',
      summary:
        'A blue-black-green tempo-disruption deck that lands Tombstalker as a cheap finisher while Stifle, Wasteland, and Daze attack the opponent\'s mana base. Dark Confidant grinds card advantage. Force of Will backs up the clock. Strong against greedy decks but pressured by Counterbalance and lifegain.',
      keyCards: ['Tombstalker', 'Dark Confidant', 'Stifle', 'Wasteland', 'Force of Will'],
    },
    {
      name: 'BUG Survival (Necrotic Ooze)',
      slug: 'bug-survival-necrotic-ooze-legacy-2010',
      period: 'Survival of the Fittest',
      archetype: 'combo',
      summary:
        'A blue-black-green combo deck that uses Survival of the Fittest to stock the graveyard with Phyrexian Devourer, Triskelion, and Vampire Hexmage, then plays Necrotic Ooze for an infinite damage combo. Reliable and disruptive but vulnerable to graveyard hate.',
      keyCards: ['Survival of the Fittest', 'Necrotic Ooze', 'Phyrexian Devourer', 'Triskelion', 'Vampire Hexmage'],
    },
    {
      name: 'Dredge',
      slug: 'dredge-legacy-2010',
      period: 'Survival of the Fittest',
      archetype: 'combo',
      summary:
        'A graveyard combo deck that abuses dredge to mill the deck, generating Narcomoeba and Ichorid recursion. Dread Return reanimates a finisher while Bridge from Below produces Zombie tokens. Cabal Therapy strips disruption. Devastating goldfish but folds to graveyard hate.',
      keyCards: ['Bridge from Below', 'Narcomoeba', 'Ichorid', 'Dread Return', 'Cabal Therapy'],
    },
    {
      name: 'Belcher',
      slug: 'belcher-legacy-2010',
      period: 'Survival of the Fittest',
      archetype: 'combo',
      summary:
        'A red mono-land combo deck that runs only one or two basic lands plus Land Grant tutors, accelerates with Lion\'s Eye Diamond and Rite of Flame, and wins by activating Goblin Charbelcher for lethal or casting Empty the Warrens. Pure goldfish but extremely vulnerable to disruption.',
      keyCards: ['Goblin Charbelcher', 'Empty the Warrens', 'Land Grant', 'Lion\'s Eye Diamond', 'Rite of Flame'],
    },
  ],
}

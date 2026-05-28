import type { YearFormatEntry } from '../types'

export const standard2012: YearFormatEntry = {
  year: 2012,
  format: 'standard',
  title: 'Standard 2012',
  subtitle: 'Delver dominance and the rise of Thragtusk',
  shortLabel: 'Delver & Thragtusk',
  summary:
    'Standard 2012 was a tale of two formats split by October rotation. The first nine months belonged to UW Delver, which leveraged Delver of Secrets, Snapcaster Mage, and cheap Phyrexian mana spells into the most efficient tempo shell in years. Brian Kibler won Pro Tour Dark Ascension with Wolf Run Ramp, but Delver remained the deck to beat through the summer. When Return to Ravnica arrived in October, the format transformed completely. Thragtusk and Restoration Angel became the defining cards, powering Jund Midrange, Bant Control, and UWR Flash into a diverse but midrange-heavy metagame.',
  headlineDeck: 'UW Delver',
  eras: [
    {
      id: '2012-std-delver',
      name: 'The Delver Era',
      start: '2012-01',
      end: '2012-05',
      dominantDecks: ['UW Delver'],
      challengers: ['Wolf Run Ramp', 'UB Zombies', 'RG Aggro', 'Esper Spirits'],
      keyCards: [
        { name: 'Delver of Secrets', role: 'One-mana 3/2 flier when flipped, the format-defining threat' },
        { name: 'Snapcaster Mage', role: 'Flashback on any instant or sorcery, enabling tempo and value' },
        { name: 'Geist of Saint Traft', role: 'Hexproof three-drop that attacked for six with its Angel token' },
        { name: 'Vapor Snag', role: 'One-mana bounce spell that doubled as a tempo play and life drain' },
        { name: 'Ponder', role: 'Set up Delver flips and ensured consistent draws' },
        { name: 'Gitaxian Probe', role: 'Free information and spell count for Delver' },
      ],
      summary:
        'UW Delver was the defining deck of early 2012 Standard. The deck combined a one-mana 3/2 flier with the best cheap spells in the format, including Phyrexian mana staples like Gitaxian Probe, Vapor Snag, and Gut Shot. Ponder set up Delver flips with near-certainty. Snapcaster Mage provided flashback value, and Geist of Saint Traft offered a hexproof clock. The deck could deploy a threat on turn one and protect it with countermagic and bounce for the rest of the game. At Pro Tour Dark Ascension in February, Brian Kibler won with Wolf Run Ramp, but Delver variants dominated the broader metagame throughout the spring.',
      whyItDominated: [
        'Delver of Secrets was the most efficient creature in the format at one mana for a 3/2 flier',
        'Ponder virtually guaranteed Delver flips while smoothing draws',
        'Phyrexian mana spells like Gitaxian Probe and Gut Shot were effectively free',
        'Snapcaster Mage provided card advantage while maintaining tempo',
        'Geist of Saint Traft was nearly impossible to remove profitably',
        'Mana Leak and Vapor Snag protected threats cheaply',
      ],
      whyItEnded:
        'Avacyn Restored in May 2012 introduced new tools that shifted the metagame. Cavern of Souls neutered countermagic, and Restoration Angel provided powerful enter-the-battlefield value. Delver remained strong but faced increasing competition.',
      confidence: 'high',
      sources: [
        {
          title: 'Pro Tour Dark Ascension coverage',
          publisher: 'MTGTop8',
          url: 'https://mtgtop8.com/event?e=2518',
          date: '2012-02-12',
          note: 'Brian Kibler won with Wolf Run Ramp. Jon Finkel made Top 8 with Delver Spirits. Multiple Delver variants in the field.',
        },
        {
          title: 'Pro Tour Dark Ascension - MTG Wiki',
          publisher: 'Fandom',
          url: 'https://mtg.fandom.com/wiki/Pro_Tour_Dark_Ascension',
          date: '2012-02-12',
          note: 'Top 8 included Kibler (Wolf Run Ramp), PV (Wolf Run Ramp), Jon Finkel (Delver Spirits), and Matthew Costa (UW Delver).',
        },
      ],
    },
    {
      id: '2012-std-avr-summer',
      name: 'Delver and Naya Pod',
      start: '2012-05',
      end: '2012-10',
      dominantDecks: ['UW Delver', 'Naya Pod'],
      challengers: ['Wolf Run Ramp', 'UB Zombies', 'RG Aggro', 'Delver-Pike variants'],
      keyCards: [
        { name: 'Restoration Angel', role: 'Flash flicker effect that reset enter-the-battlefield triggers' },
        { name: 'Cavern of Souls', role: 'Uncounterable creatures, weakened Delver\'s countermagic plan' },
        { name: "Runechanter's Pike", role: 'Turned Delver into a massive first-strike threat in spell-heavy builds' },
        { name: 'Bonfire of the Damned', role: 'Miracle sweeper that punished go-wide strategies' },
        { name: 'Zealous Conscripts', role: 'Stole permanents on entry, combo piece with Kiki-Jiki in Pod' },
      ],
      summary:
        'Avacyn Restored reshaped the metagame without dethroning Delver. Cavern of Souls gave creature decks immunity to countermagic, and Restoration Angel created powerful blink chains with cards like Blade Splicer and Huntmaster of the Fells. Bonfire of the Damned added a devastating miracle element. UW Delver adapted with Runechanter\'s Pike builds that turned even a flipped Delver into a lethal first-striker. Naya Pod with Birthing Pod chains gained ground. At the 2012 Players Championship in August, Yuuya Watanabe won the inaugural event. The format was diverse but Delver remained the most-played archetype heading into rotation.',
      whyItDominated: [
        'UW Delver adapted to the new metagame with Runechanter\'s Pike for massive damage',
        'Restoration Angel created powerful synergies across multiple archetypes',
        'Cavern of Souls pushed the format toward creature-based strategies',
        'Bonfire of the Damned punished small creature strategies and rewarded ramp',
        'No single deck achieved Caw-Blade levels of dominance, keeping the format healthy',
      ],
      whyItEnded:
        'The October 2012 rotation removed Scars of Mirrodin block and Magic 2012, eliminating Ponder, Vapor Snag, Gitaxian Probe, Mana Leak, and other key Delver enablers. Return to Ravnica brought a completely new Standard format.',
      confidence: 'high',
      sources: [
        {
          title: '2012 Players Championship',
          publisher: 'Fandom',
          url: 'https://mtg.fandom.com/wiki/2012_Players_Championship',
          date: '2012-08-31',
          note: 'Yuuya Watanabe won the inaugural Players Championship in Seattle.',
        },
        {
          title: 'Will Delver Remain Dominant?',
          publisher: 'PureMTGO',
          url: 'https://puremtgo.com/articles/will-delver-remain-dominant',
          note: 'Analysis of Delver\'s dominance and its metagame share through summer 2012.',
        },
      ],
    },
    {
      id: '2012-std-rtr',
      name: 'Thragtusk Midrange Wars',
      start: '2012-10',
      end: '2012-12',
      dominantDecks: ['Jund Midrange', 'Bant Control'],
      challengers: ['UWR Flash', 'BR Zombies', 'Mono-Red Aggro', 'Selesnya Aggro'],
      keyCards: [
        { name: 'Thragtusk', role: 'Five-mana value creature: lifegain on entry, Beast token on exit' },
        { name: 'Restoration Angel', role: 'Blinked Thragtusk for repeated value and board presence' },
        { name: 'Huntmaster of the Fells', role: 'Two-for-one creature with lifegain and repeatable transform value' },
        { name: 'Olivia Voldaren', role: 'Removal engine and board domination in Jund' },
        { name: "Sphinx's Revelation", role: 'Massive card draw and lifegain that defined control mirrors' },
      ],
      summary:
        'Return to Ravnica completely transformed Standard. With Delver\'s cheap spells gone, the format slowed down and became midrange-oriented. Thragtusk and Restoration Angel formed the defining engine: flickering Thragtusk gained five life and left behind a 3/3 Beast token. Jund Midrange combined this with Huntmaster of the Fells, Olivia Voldaren, and Bonfire of the Damned. Bant Control leveraged Sphinx\'s Revelation for massive card advantage. UWR Flash used Snapcaster Mage, Restoration Angel, and countermagic to play a reactive game. The shockland manabase from Return to Ravnica enabled consistent three-color decks across the format.',
      whyItDominated: [
        'Thragtusk plus Restoration Angel was the most powerful value engine in the format',
        'Jund combined the best removal, creatures, and planeswalkers in three colors',
        'Sphinx\'s Revelation gave control decks an unbeatable late-game card advantage engine',
        'Return to Ravnica shocklands enabled reliable three-color manabases',
        'The format rewarded midrange grinding over fast aggro strategies',
      ],
      whyItEnded:
        'The metagame continued evolving into 2013 with the release of Gatecrash, which introduced new guilds and archetypes including The Aristocrats and Naya Blitz.',
      confidence: 'high',
      sources: [
        {
          title: 'Thragtusk: Beat \'Em or Join \'Em?',
          publisher: 'Quiet Speculation',
          url: 'https://www.quietspeculation.com/2012/11/thragtusk-beat-em-or-join-em/',
          date: '2012-11',
          note: 'Analysis of Thragtusk\'s dominance in post-rotation Standard.',
        },
        {
          title: 'The New Best Decks With Return To Ravnica',
          publisher: 'Star City Games',
          url: 'https://articles.starcitygames.com/articles/the-new-best-decks-with-return-to-ravnica/',
          note: 'Early metagame analysis after Return to Ravnica rotation.',
        },
      ],
    },
  ],
  setReleases: [
    { date: '2012-02-03', name: 'Dark Ascension', code: 'DKA' },
    { date: '2012-05-04', name: 'Avacyn Restored', code: 'AVR', note: 'Introduced Restoration Angel, Cavern of Souls, and Bonfire of the Damned' },
    { date: '2012-07-13', name: 'Magic 2013', code: 'M13', note: 'Introduced Thragtusk' },
    { date: '2012-10-05', name: 'Return to Ravnica', code: 'RTR', note: 'Standard rotation: Scars of Mirrodin block and M12 rotate out' },
  ],
  representativeDecks: [
    {
      name: 'UW Delver',
      slug: 'uw-delver-standard-2012',
      period: 'The Delver Era',
      archetype: 'tempo',
      summary:
        'A blue-white tempo deck built on Delver of Secrets and Geist of Saint Traft as cheap, hard-to-block clocks. Mana Leak, Vapor Snag, and Snapcaster Mage maintain tempo and refund interaction. Ponder smooths the deck. Punishes greedy draws but pressured by sweepers and lifegain.',
      keyCards: ['Delver of Secrets', 'Snapcaster Mage', 'Geist of Saint Traft', 'Ponder', 'Vapor Snag', 'Mana Leak'],
      source: {
        title: 'UW Delver decklists 2012',
        publisher: 'MTGGoldfish',
        url: 'https://www.mtggoldfish.com/deck/896946',
      },
    },
    {
      name: 'Wolf Run Ramp',
      slug: 'wolf-run-ramp-standard-2012',
      period: 'The Delver Era',
      archetype: 'ramp',
      summary:
        'A red-green ramp deck that uses Green Sun\'s Zenith to find Primeval Titan, which fetches Kessig Wolf Run for a one-shot lethal trample swing. Huntmaster of the Fells provides midrange value, Inferno Titan closes. Galvanic Blast removes blockers. Inevitable but vulnerable to counterspells.',
      keyCards: ['Primeval Titan', 'Inferno Titan', 'Kessig Wolf Run', 'Huntmaster of the Fells', 'Green Sun\'s Zenith', 'Galvanic Blast'],
      source: {
        title: 'Pro Tour Dark Ascension - Brian Kibler',
        publisher: 'MTGTop8',
        url: 'https://mtgtop8.com/event?e=2518',
        date: '2012-02-12',
      },
    },
    {
      name: 'UB Zombies',
      slug: 'ub-zombies-standard-2012',
      period: 'The Delver Era',
      archetype: 'aggro',
      summary:
        'A blue-black Zombie tribal aggro deck centered on Gravecrawler returning from the graveyard and Geralf\'s Messenger draining on entry. Phantasmal Image copies key Zombies, Tragic Slip and Mortarpod remove blockers. Fast and resilient but vulnerable to exile removal.',
      keyCards: ['Gravecrawler', 'Geralf\'s Messenger', 'Diregraf Ghoul', 'Phantasmal Image', 'Tragic Slip', 'Mortarpod'],
      source: {
        title: 'MTGTop8 Standard 2012 Zombies decklists',
        publisher: 'MTGTop8',
        url: 'https://www.mtgtop8.com/format?f=ST',
      },
    },
    {
      name: 'Jund Midrange',
      slug: 'jund-midrange-standard-2012',
      period: 'Thragtusk Midrange Wars',
      archetype: 'midrange',
      summary:
        'A black-red-green midrange deck powered by Thragtusk for a five/three plus lifegain trigger and Huntmaster of the Fells for repeated value. Olivia Voldaren controls the board, Bonfire of the Damned sweeps from a miracle topdeck. Garruk closes. Grindy and resilient against fair decks.',
      keyCards: ['Thragtusk', 'Huntmaster of the Fells', 'Olivia Voldaren', 'Bonfire of the Damned', 'Farseek', 'Garruk, Primal Hunter'],
      source: {
        title: 'Jund Midrange - Reid Duke',
        publisher: 'MTGTop8',
        url: 'https://www.mtgtop8.com/event?e=5383&d=231085&f=ST',
      },
    },
    {
      name: 'Bant Control',
      slug: 'bant-control-standard-2012',
      period: 'Thragtusk Midrange Wars',
      archetype: 'control',
      summary:
        'A blue-white-green control deck centered on Sphinx\'s Revelation as the late-game refill. Thragtusk stabilizes life, Restoration Angel blinks it for extra value, Supreme Verdict sweeps uncounterably. Jace, Architect of Thought controls planeswalkers and the board. Outvalues fair decks but slow against fast combo.',
      keyCards: ['Sphinx\'s Revelation', 'Thragtusk', 'Restoration Angel', 'Supreme Verdict', 'Jace, Architect of Thought', 'Farseek'],
      source: {
        title: 'The New Best Decks With Return To Ravnica',
        publisher: 'Star City Games',
        url: 'https://articles.starcitygames.com/articles/the-new-best-decks-with-return-to-ravnica/',
      },
    },
    {
      name: 'UWR Flash',
      slug: 'uwr-flash-standard-2012',
      period: 'Thragtusk Midrange Wars',
      archetype: 'tempo',
      summary:
        'A blue-white-red tempo-control deck built on Snapcaster Mage and Restoration Angel triggering flicker effects for value. Sphinx\'s Revelation refills the hand, Searing Spear and Azorius Charm provide flexible interaction, Boros Reckoner stabilizes. Strong against fair midrange but pressured by combo.',
      keyCards: ['Snapcaster Mage', 'Restoration Angel', 'Boros Reckoner', 'Searing Spear', 'Azorius Charm', 'Sphinx\'s Revelation'],
      source: {
        title: 'MTGTop8 UWR Flash decklists',
        publisher: 'MTGTop8',
        url: 'https://www.mtgtop8.com/archetype?a=266&meta=74',
      },
    },
  
    {
      name: 'RG Aggro',
      slug: 'rg-aggro-standard-2012',
      period: 'The Delver Era',
      archetype: 'aggro',
      summary:
        'A red-green aggro deck powered by Strangleroot Geist\'s haste and undying, Huntmaster of the Fells flipping for value, and Hellrider for finishing burn. Birds of Paradise accelerates, Garruk, Primal Hunter draws cards. Strong against control but pressured by sweepers and lifegain.',
      keyCards: ['Strangleroot Geist', 'Huntmaster of the Fells', 'Hellrider', 'Birds of Paradise', 'Garruk, Primal Hunter'],
    },
    {
      name: 'Esper Spirits',
      slug: 'esper-spirits-standard-2012',
      period: 'The Delver Era',
      archetype: 'tempo',
      summary:
        'A blue-white-black Spirit tribal tempo deck that pumps Drogskol Captain with flying Spirit creatures. Geist of Saint Traft serves as the unblockable clock, Lingering Souls floods the board with flying tokens, Mana Leak protects key turns, Snapcaster Mage flashbacks instants. Strong against fair decks but vulnerable to sweepers.',
      keyCards: ['Drogskol Captain', 'Geist of Saint Traft', 'Lingering Souls', 'Mana Leak', 'Snapcaster Mage'],
    },
    {
      name: 'Naya Pod',
      slug: 'naya-pod-standard-2012',
      period: 'Delver of Secrets',
      archetype: 'midrange',
      summary:
        'A red-green-white toolbox deck that uses Birthing Pod to climb the curve — sacrificing Restoration Angel into Thragtusk into Avacyn, Angel of Hope. Huntmaster of the Fells provides incidental value. Highly flexible but pressured by fast aggro and discard.',
      keyCards: ['Birthing Pod', 'Restoration Angel', 'Huntmaster of the Fells', 'Thragtusk', 'Avacyn, Angel of Hope'],
    },
    {
      name: 'Delver-Pike variants',
      slug: 'delver-pike-variants-standard-2012',
      period: 'Delver of Secrets',
      archetype: 'tempo',
      summary:
        'A blue-based tempo deck built on Delver of Secrets and Runechanter\'s Pike — turning a one-drop or a Snapcaster Mage into a one-shot lethal threat. Vapor Snag and Mana Leak maintain tempo. Fast and punishing but vulnerable to sweepers and lifegain.',
      keyCards: ['Delver of Secrets', 'Runechanter\'s Pike', 'Snapcaster Mage', 'Vapor Snag', 'Mana Leak'],
    },
    {
      name: 'BR Zombies',
      slug: 'br-zombies-standard-2012',
      period: 'Restoration Angel',
      archetype: 'aggro',
      summary:
        'A black-red Zombie tribal aggro deck where Gravecrawler returns from the graveyard, Falkenrath Aristocrat sacrifices for triggers, and Lightning Mauler grants haste. Geralf\'s Messenger drains on entry. Resilient and explosive but vulnerable to exile-based removal.',
      keyCards: ['Gravecrawler', 'Geralf\'s Messenger', 'Diregraf Ghoul', 'Falkenrath Aristocrat', 'Lightning Mauler'],
    },
    {
      name: 'Mono-Red Aggro',
      slug: 'mono-red-aggro-standard-2012',
      period: 'Restoration Angel',
      archetype: 'aggro',
      summary:
        'A mono-red aggro deck built on Stromkirk Noble\'s vampire growth and Hellrider\'s combat damage trigger. Searing Spear, Pillar of Flame, and Thunderous Wrath provide reach. Pillar of Flame exiles to fight Zombie recursion. Punishes slow openings but vulnerable to lifegain.',
      keyCards: ['Stromkirk Noble', 'Hellrider', 'Searing Spear', 'Pillar of Flame', 'Thunderous Wrath'],
    },
    {
      name: 'Selesnya Aggro',
      slug: 'selesnya-aggro-standard-2012',
      period: 'Restoration Angel',
      archetype: 'aggro',
      summary:
        'A green-white aggro deck running Loxodon Smiter as an uncounterable three-drop, Call of the Conclave for tokens, and Centaur Healer for lifegain stability. Sublime Archangel pumps the team via exalted, Selesnya Charm provides flexibility. Resilient against burn but pressured by sweepers.',
      keyCards: ['Loxodon Smiter', 'Centaur Healer', 'Call of the Conclave', 'Sublime Archangel', 'Selesnya Charm'],
    },
  ],
}

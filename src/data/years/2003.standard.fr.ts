import type { YearFormatEntry } from '../types'

export const standard2003Fr: YearFormatEntry = {
  year: 2003,
  format: 'standard',
  title: 'Standard 2003',
  subtitle: 'Goblins, Wake et la machine cycling',
  shortLabel: 'L\'ère Goblin Bidding',
  summary:
    'Le Standard 2003 a présenté l\'un des formats compétitifs les plus équilibrés et diversifiés de l\'histoire de Magic. L\'intersection Onslaught-Odyssey a créé un métagame où Goblin Bidding, Mirari\'s Wake, UG Madness, Mono-Black Control et Astral Slide se disputaient tous le plus haut niveau. Daniel Zink a remporté les Worlds 2003 à Berlin avec Wake, mais chaque archétype majeur avait sa représentation dans le Top 8. L\'arrivée de Mirrodin en octobre a introduit des artefacts qui allaient finalement déformer le format au-delà de toute reconnaissance.',
  headlineDeck: 'Goblin Bidding',
  eras: [
    {
      id: '2003-std-tribal',
      name: 'Diversité tribale',
      start: '2003-01',
      end: '2003-06',
      dominantDecks: ['Goblin Bidding', 'Wake'],
      challengers: ['UG Madness', 'Mono-Black Control', 'Astral Slide'],
      keyCards: [
        { name: 'Goblin Piledriver', role: 'Dégâts explosifs qui montaient avec chaque autre Goblin' },
        { name: 'Patriarch\'s Bidding', role: 'Réanimation tribale de masse, ramenait tous les Goblins du cimetière' },
        { name: 'Goblin Warchief', role: 'Célérité et réduction de coût pour tous les Goblins' },
        { name: 'Mirari\'s Wake', role: 'Doublement du mana et boost de créatures pour les finisseurs contrôle' },
        { name: 'Astral Slide', role: 'Déclencheur de cycling qui faisait clignoter les créatures pour le contrôle du plateau' },
      ],
      summary:
        'Legions en février a ajouté des créatures tribales essentielles, complétant Goblin Bidding comme stratégie de premier rang. Le deck submergeait avec des Goblins bon marché, puis utilisait Patriarch\'s Bidding pour tous les ramener après un board wipe. Les decks Wake prenaient l\'avantage avec un mana doublé et Decree of Justice. Astral Slide utilisait les cartes cycling et Lightning Rift pour de la valeur incrémentale. UG Madness et MBC restaient des stratégies compétitives héritées de 2002. Cette ère représentait un rare équilibre compétitif.',
      whyItDominated: [
        'Goblin Bidding combinait la vitesse aggro avec un plan de récupération midgame via Patriarch\'s Bidding',
        'Les decks Wake contrôlaient la partie puis généraient un avantage écrasant en cartes et en mana',
        'Astral Slide créait de l\'inévitabilité via les déclencheurs cycling et la récursion d\'Eternal Dragon',
        'Aucun deck ne pouvait battre tous les autres, maintenant un métagame sain',
      ],
      whyItEnded:
        'Scourge en mai et la Huitième Édition en juillet ont apporté des ajouts incrémentaux mais n\'ont pas fondamentalement modifié l\'équilibre. Le vrai changement est venu avec Mirrodin en octobre.',
      confidence: 'medium',
      sources: [
        {
          title: 'World Championship Decks/2003',
          publisher: 'MTG Wiki',
          url: 'https://mtg.fandom.com/wiki/World_Championship_Decks/2003',
          note: 'Daniel Zink a remporté les Worlds 2003 avec Wake. Le Top 8 comprenait Wake, UG Madness, Astral Slide, Goblin Bidding et Reanimator.',
        },
        {
          title: 'Worlds 2003 Standard event',
          publisher: 'MTGTop8',
          url: 'https://www.mtgtop8.com/event?e=9174&f=ST',
          note: 'Résultats Standard des Worlds 2003 à Berlin.',
        },
      ],
    },
    {
      id: '2003-std-worlds',
      name: 'Le championnat Wake',
      start: '2003-06',
      end: '2003-10',
      dominantDecks: ['Wake'],
      challengers: ['Goblin Bidding', 'Astral Slide', 'UW Control', 'Mono-Black Control'],
      keyCards: [
        { name: 'Decree of Justice', role: 'Génération de jetons incontrôlable via cycling, ou finisseur hard-cast' },
        { name: 'Eternal Dragon', role: 'Menace récursive qui fixait aussi le mana depuis le cimetière' },
        { name: 'Wrath of God', role: 'Sweeper qui réinitialisait les stratégies aggro' },
        { name: 'Compulsion', role: 'Filtrage de cartes qui améliorait la qualité de pioche chaque tour' },
      ],
      summary:
        'Wake a consolidé sa position comme le deck contrôle de référence du format à l\'approche des Worlds. Daniel Zink a piloté l\'archétype jusqu\'au titre de Champion du Monde 2003 à Berlin, battant Jin Okamoto (également sur Wake) en finale. Le deck utilisait Mirari\'s Wake pour doubler le mana, puis déployait des jetons Decree of Justice ou des menaces hard-cast pour fermer la partie. Le Top 8 affichait une diversité remarquable : Wake, UG Madness, Astral Slide, Goblin Bidding et Reanimator étaient tous représentés.',
      whyItDominated: [
        'Decree of Justice était presque impossible à contrer lorsqu\'il était cyclé en fin de tour',
        'Mirari\'s Wake plus Wrath of God signifiait que le deck pouvait sweeper et reconstruire plus vite que les adversaires',
        'Eternal Dragon fournissait une valeur récursive dans les parties longues',
        'Compulsion lissait les tirages et envoyait les cartes flashback au cimetière',
      ],
      whyItEnded:
        'L\'arrivée de Mirrodin en octobre a apporté des stratégies centrées sur les artefacts et l\'Urzatron. La rotation a retiré le bloc Odyssey, emportant Wild Mongrel, Psychatog, Cabal Coffers et l\'intégralité du moteur madness.',
      confidence: 'medium',
      sources: [
        {
          title: 'Worlds 2003 coverage - Daniel Zink',
          publisher: 'MTG Wiki',
          url: 'https://mtg.fandom.com/wiki/World_Championship_Decks/2003',
          date: '2003-08-10',
          note: 'Daniel Zink a remporté les Worlds 2003 à Berlin avec Wake, battant Jin Okamoto en finale.',
        },
      ],
    },
    {
      id: '2003-std-mirrodin',
      name: 'Goblin Bidding et les débuts d\'Affinity',
      start: '2003-10',
      end: '2003-12',
      dominantDecks: ['Goblin Bidding', 'Affinity'],
      challengers: ['Wake', 'Astral Slide', 'UW Control'],
      keyCards: [
        { name: 'Chrome Mox', role: 'Accélération de mana gratuite au prix d\'une carte' },
        { name: 'Isochron Scepter', role: 'Éphémères imprimés pour des effets répétables' },
        { name: 'Oblivion Stone', role: 'Board wipe flexible pour les decks contrôle' },
        { name: 'Broodstar', role: 'Créature volante massive avec affinity' },
      ],
      summary:
        'Mirrodin est arrivé avec de puissantes synergies artefact. Les premiers builds Affinity utilisant Broodstar et les terrains artefacts ont commencé à apparaître. Chrome Mox fournissait une accélération gratuite pour les decks agressifs. Les terrains artefacts semblaient anodins au début mais allaient s\'avérer être le socle du deck le plus dominant de l\'histoire du Standard. Goblin Bidding restait fort avec l\'ajout de nouveaux outils, mais les graines de la domination d\'Affinity étaient plantées.',
      whyItDominated: [
        'Goblin Bidding conservait sa vitesse et la récursion de Patriarch\'s Bidding',
        'Les premiers builds Affinity montraient le potentiel du mana gratuit des terrains artefacts',
        'Chrome Mox accélérait les stratégies aggro existantes',
        'Le format s\'adaptait encore au niveau de puissance du thème artefact de Mirrodin',
      ],
      whyItEnded:
        'Darksteel en février 2004 ajouterait Arcbound Ravager et Skullclamp, transformant Affinity d\'un deck compétitif en la stratégie la plus oppressive que le Standard ait connue depuis le Combo Winter.',
      confidence: 'medium',
      sources: [
        {
          title: 'MTGTop8 - Standard late 2003',
          publisher: 'MTGTop8',
          url: 'https://www.mtgtop8.com/format?f=ST',
          note: 'Résultats de tournois montrant le métagame Standard des débuts de Mirrodin.',
        },
      ],
    },
  ],
  bans: [],
  setReleases: [
    { date: '2003-02-03', name: 'Legions', code: 'LGN', note: 'Extension entièrement créature complétant les thèmes tribaux, ajoute Goblin Warchief' },
    { date: '2003-05-26', name: 'Scourge', code: 'SCG' },
    { date: '2003-07-28', name: 'Eighth Edition', code: '8ED' },
    { date: '2003-10-02', name: 'Mirrodin', code: 'MRD', note: 'Rotation du Standard : le bloc Odyssey sort du format. Le bloc artefact commence' },
  ],
  representativeDecks: [
    {
      name: 'Goblin Bidding',
      slug: 'goblin-bidding-standard-2003',
      period: 'Diversité tribale',
      archetype: 'aggro',
      summary:
        'Un aggro-combo tribal rouge-noir utilisant une masse critique de Goblins amplifiée par Goblin Warchief et Goblin Piledriver. Patriarch\'s Bidding renvoie tous les Goblins depuis le graveyard pour un swarm létal après un sweeper. Skirk Prospector et Siege-Gang Commander fournissent un finish de burn de secours. Écrase les decks lents mais vulnérable à la hate graveyard.',
      keyCards: ['Goblin Piledriver', 'Goblin Warchief', 'Patriarch\'s Bidding', 'Skirk Prospector', 'Siege-Gang Commander'],
      decklistPending: true,
      source: {
        title: 'Worlds 2003 - Wolfgang Eder Goblin Bidding',
        publisher: 'MTG Wiki',
        url: 'https://mtg.fandom.com/wiki/World_Championship_Decks/2003',
      },
    },
    {
      name: 'Wake',
      slug: 'wake-standard-2003',
      period: 'Le championnat Wake',
      archetype: 'control',
      summary:
        'Un deck control vert-blanc-bleu qui double le mana avec Mirari\'s Wake pour alimenter Decree of Justice et ses armées de soldats, et Wrath of God pour les sweepers. Eternal Dragon revient comme finisher et cycleur. Inévitable en late game mais lent face à l\'aggro rapide.',
      keyCards: ['Mirari\'s Wake', 'Decree of Justice', 'Wrath of God', 'Compulsion', 'Eternal Dragon'],
      decklistPending: true,
      source: {
        title: 'Worlds 2003 - Daniel Zink Wake',
        publisher: 'MTG Wiki',
        url: 'https://mtg.fandom.com/wiki/World_Championship_Decks/2003',
      },
    },
    {
      name: 'Astral Slide',
      slug: 'astral-slide-standard-2003',
      period: 'Diversité tribale',
      archetype: 'control',
      summary:
        'Un deck control qui loop des créatures et des cyclers avec Astral Slide pour de la value répétée, pendant que Lightning Rift brûle l\'adversaire à chaque cycle. Eternal Dragon et Wrath of God verrouillent le board. Outvalue le midrange fair mais vulnérable au removal d\'enchantement et au combo rapide.',
      keyCards: ['Astral Slide', 'Lightning Rift', 'Eternal Dragon', 'Wrath of God', 'Renewed Faith'],
      decklistPending: true,
      source: {
        title: 'MTGTop8 - Astral Slide decklists 2003',
        publisher: 'MTGTop8',
        url: 'https://www.mtgtop8.com/format?f=ST',
      },
    },
    {
      name: 'UG Madness',
      slug: 'ug-madness-standard-2003',
      period: 'Diversité tribale',
      archetype: 'tempo',
      summary:
        'Un deck tempo bleu-vert alimenté par madness — défaussant Basking Rootwalla et Arrogant Wurm à Wild Mongrel pour des jeux explosifs bon marché. Circular Logic contre les sorts clés, Wonder donne vol. Rapide et résistant, mais s\'effondre face au mass removal et à la hate graveyard.',
      keyCards: ['Wild Mongrel', 'Basking Rootwalla', 'Circular Logic', 'Arrogant Wurm', 'Wonder'],
      decklistPending: true,
      source: {
        title: 'Worlds 2003 - Dave Humpherys UG Madness',
        publisher: 'MTG Wiki',
        url: 'https://mtg.fandom.com/wiki/World_Championship_Decks/2003',
      },
    },
  ],
}

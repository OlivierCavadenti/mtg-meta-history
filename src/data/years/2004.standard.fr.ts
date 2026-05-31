import type { YearFormatEntry } from '../types'

export const standard2004Fr: YearFormatEntry = {
  year: 2004,
  format: 'standard',
  title: 'Standard 2004',
  subtitle: 'L\'apocalypse Affinity',
  shortLabel: 'La domination d\'Affinity',
  summary:
    'Le Standard 2004 a été l\'année où Affinity a dévoré le format. La sortie de Darksteel en février a ajouté Arcbound Ravager, et Skullclamp a transformé chaque deck créature en machine à piocher. Après le bannissement de Skullclamp en juin — le premier bannissement en Standard depuis cinq ans — Affinity n\'a fait que se renforcer avec Cranial Plating de Fifth Dawn. Le métagame s\'est effondré en deux catégories : Affinity et anti-Affinity. Julien Nuijten, à quinze ans, a remporté les Worlds 2004 à San Francisco avec un deck Green-White Astral Slide spécifiquement conçu pour détruire les artefacts. Champions of Kamigawa est arrivé en octobre mais n\'a pas pu détrôner le mastodonte artefact.',
  headlineDeck: 'Affinity',
  eras: [
    {
      id: '2004-std-skullclamp',
      name: 'L\'ère Skullclamp',
      start: '2004-01',
      end: '2004-06',
      dominantDecks: ['Affinity', 'Goblin Bidding'],
      challengers: ['Tooth and Nail', 'Astral Slide', 'UW Control'],
      keyCards: [
        { name: 'Skullclamp', role: 'Piochait deux cartes à chaque mort de créature équipée, déformait chaque deck créature' },
        { name: 'Arcbound Ravager', role: 'Outlet de sacrifice avec modular, distribuait les marqueurs à sa mort' },
        { name: 'Disciple of the Vault', role: 'Drainait la vie à chaque artefact envoyé au cimetière' },
        { name: 'Goblin Sharpshooter', role: 'Mitraillait les adversaires avec la pioche alimentée par Skullclamp' },
      ],
      summary:
        'L\'arrivée de Darksteel en février a apporté Arcbound Ravager et Skullclamp, tous deux déformant le format. Skullclamp était particulièrement abusif : pour un mana d\'équipement, il transformait chaque créature à 1 d\'endurance en cantrip piochant deux cartes. Affinity et Goblin Bidding l\'exploitaient sans merci. Affinity utilisait les terrains artefacts pour du mana gratuit, Ravager comme moteur de sacrifice et Disciple of the Vault pour drainer les adversaires. Le format est devenu suffisamment oppressif pour que Wizards émette un bannissement d\'urgence de Skullclamp effectif le 20 juin 2004 — le premier bannissement en Standard depuis l\'ère Urza.',
      whyItDominated: [
        'Skullclamp fournissait un avantage de cartes sans précédent pour un seul mana',
        'La capacité modular d\'Arcbound Ravager rendait les boards Affinity résilients au removal',
        'Les terrains artefacts fournissaient une accélération gratuite qu\'aucun autre deck ne pouvait égaler',
        'Disciple of the Vault transformait chaque sacrifice d\'artefact en dégâts directs',
      ],
      whyItEnded:
        'Wizards a banni Skullclamp le 1er juin 2004, effectif le 20 juin. C\'était le premier bannissement en Standard depuis cinq ans, reconnaissant à quel point la carte avait déformé le jeu compétitif.',
      confidence: 'high',
      sources: [
        {
          title: 'On This Date: The Banning of Skullclamp (June 1st, 2004)',
          publisher: 'Card Kingdom',
          url: 'https://blog.cardkingdom.com/on-this-date-in-magic-history-the-banning-of-skullclamp/',
          date: '2004-06-01',
          note: 'Annonce du bannissement de Skullclamp en Standard et Mirrodin Block Constructed.',
        },
        {
          title: 'Skullclamp, We Hardly Knew Ye',
          publisher: 'Wizards of the Coast',
          url: 'https://magic.wizards.com/en/articles/archive/skullclamp-we-hardly-knew-ye-2004-06-04',
          date: '2004-06-04',
          note: 'Article officiel expliquant les raisons du bannissement de Skullclamp.',
        },
      ],
    },
    {
      id: '2004-std-affinity-peak',
      name: 'Affinity déchaîné',
      start: '2004-06',
      end: '2004-10',
      dominantDecks: ['Affinity'],
      challengers: ['Tooth and Nail', 'Goblin Bidding', 'Big Red', 'Astral Slide'],
      keyCards: [
        { name: 'Cranial Plating', role: 'Source de dégâts létaux, infligeait souvent dix dégâts ou plus en une seule attaque' },
        { name: 'Arcbound Ravager', role: 'Moteur de sacrifice distribuant les marqueurs modular' },
        { name: 'Disciple of the Vault', role: 'Drain de vie à chaque mort d\'artefact' },
        { name: 'Shrapnel Blast', role: 'Cinq dégâts pour deux manas en sacrifiant un artefact' },
      ],
      summary:
        'Avec la disparition de Skullclamp, beaucoup s\'attendaient à ce qu\'Affinity s\'affaiblisse. Au contraire, Fifth Dawn a fourni Cranial Plating, qui a remplacé l\'avantage de cartes de Skullclamp par des dégâts bruts. Un seul Cranial Plating sur une créature évasive infligeait couramment dix dégâts ou plus. Le format a dégénéré en « Affinity ou anti-Affinity » — la plupart des decks compétitifs jouaient soit le moteur artefact, soit consacraient la moitié de leur réserve à le battre. Tooth and Nail a émergé comme le principal counter d\'Affinity, utilisant Viridian Shaman et Oxidize.',
      whyItDominated: [
        'Cranial Plating menaçait des dégâts létaux dès le troisième tour',
        'Les terrains artefacts signifiaient qu\'Affinity déployait ses menaces plus vite que toute autre stratégie',
        'Arcbound Ravager rendait le plateau difficile à gérer de manière profitable',
        'Shrapnel Blast fournissait du reach qui fermait les parties à travers les bloqueurs',
      ],
      whyItEnded:
        'Champions of Kamigawa est arrivé en octobre mais n\'a pas pu détrôner Affinity. Le deck a continué à dominer jusqu\'à la fin de 2004 et au début de 2005, jusqu\'aux bannissements massifs de mars 2005 qui y ont enfin mis un terme.',
      confidence: 'high',
      sources: [
        {
          title: 'World Championship Decks/2004',
          publisher: 'MTG Wiki',
          url: 'https://mtg.fandom.com/wiki/World_Championship_Decks/2004',
          note: 'Julien Nuijten a remporté les Worlds 2004 avec GW Astral Slide, battant Aeo Paquette sur Affinity en finale.',
        },
        {
          title: 'Worlds 2004 Standard event',
          publisher: 'MTGTop8',
          url: 'https://mtgtop8.com/event?e=9243&f=ST',
          note: 'Résultats Standard des Worlds 2004 à San Francisco.',
        },
      ],
    },
    {
      id: '2004-std-kamigawa',
      name: 'Affinity règne malgré Kamigawa',
      start: '2004-10',
      end: '2004-12',
      dominantDecks: ['Affinity'],
      challengers: ['Tooth and Nail', 'Green-White Slide', 'Ponza'],
      keyCards: [
        { name: 'Sakura-Tribe Elder', role: 'Ramp et bloqueur sacrificiel de Champions of Kamigawa' },
        { name: 'Kodama\'s Reach', role: 'Recherche de terrains efficace pour les stratégies ramp' },
        { name: 'Viridian Shaman', role: 'Destruction d\'artefact sur un corps, outil anti-Affinity clé' },
      ],
      summary:
        'Champions of Kamigawa a apporté des créatures légendaires et la mécanique splice onto Arcane, mais aucune ne pouvait contester l\'emprise d\'Affinity. Sakura-Tribe Elder et Kodama\'s Reach ont renforcé Tooth and Nail comme le deck anti-Affinity principal. La victoire de Julien Nuijten aux Worlds avec Green-White Slide a prouvé que battre Affinity était possible — mais uniquement avec un deck spécifiquement conçu pour cela. Le format resterait sous l\'ombre d\'Affinity jusqu\'aux bannissements massifs de mars 2005.',
      whyItDominated: [
        'Affinity avait survécu au bannissement de Skullclamp et gagné Cranial Plating',
        'Champions of Kamigawa était volontairement moins puissant et ne pouvait pas rivaliser avec les synergies artefact',
        'La base de mana en terrains artefacts donnait à Affinity un avantage structurel qu\'aucune nouvelle extension ne pouvait surmonter',
        'Seuls les decks avec une forte haine anti-artefact pouvaient rivaliser de manière constante',
      ],
      whyItEnded:
        'Wizards a annoncé des bannissements massifs en mars 2005 : Arcbound Ravager, Disciple of the Vault et les six terrains artefacts ont été retirés du Standard, mettant fin à Affinity comme deck viable.',
      confidence: 'high',
      sources: [
        {
          title: 'Darksteel - MTG Wiki',
          publisher: 'MTG Wiki',
          url: 'https://mtg.fandom.com/wiki/Darksteel',
          note: 'Documente l\'impact de Darksteel sur le format Standard et l\'ascension d\'Affinity.',
        },
        {
          title: 'MTGTop8 - Standard late 2004',
          publisher: 'MTGTop8',
          url: 'https://www.mtgtop8.com/format?f=ST',
          note: 'Résultats de tournois montrant la domination d\'Affinity jusqu\'à la fin de 2004.',
        },
      ],
    },
  ],
  bans: [
    {
      date: '2004-06-20',
      cards: ['Skullclamp'],
      explanation:
        'Skullclamp déformait chaque deck créature du Standard en fournissant deux cartes pour chaque créature mourant équipée. C\'était le premier bannissement en Standard depuis cinq ans, reflétant la sévérité avec laquelle la carte avait distordu le jeu compétitif.',
      source: {
        title: 'Skullclamp, We Hardly Knew Ye',
        publisher: 'Wizards of the Coast',
        url: 'https://magic.wizards.com/en/articles/archive/skullclamp-we-hardly-knew-ye-2004-06-04',
        date: '2004-06-01',
      },
    },
  ],
  setReleases: [
    { date: '2004-02-06', name: 'Darksteel', code: 'DST', note: 'Introduit Arcbound Ravager et Skullclamp' },
    { date: '2004-06-04', name: 'Fifth Dawn', code: '5DN', note: 'Introduit Cranial Plating' },
    { date: '2004-10-01', name: 'Champions of Kamigawa', code: 'CHK', note: 'Rotation du Standard : le bloc Onslaught et la Huitième Édition sortent du format' },
  ],
  representativeDecks: [
    {
      name: 'Ravager Affinity',
      slug: 'ravager-affinity-standard-2004',
      period: 'Affinity déchaîné',
      archetype: 'aggro',
      summary:
        'Le tristement célèbre deck aggro affinity alimenté par Arcbound Ravager qui mange des artefacts pour grossir ou empiler des marqueurs +1/+1 via modular. Cranial Plating transforme tout artifact creature en kill en un coup, Disciple of the Vault draine au passage, et Frogmite et Myr Enforcer arrivent pour presque rien. Goldfish au tour trois mais s\'effondre face au removal d\'artefact.',
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
      period: 'L\'ère Skullclamp',
      archetype: 'aggro',
      summary:
        'Une version d\'Affinity qui en remet une couche avec Skullclamp sur des artifact creatures à 1 d\'endurance bon marché comme Ornithopter et Arcbound Worker, les transformant en moteurs massifs de card advantage. Arcbound Ravager et Disciple of the Vault fournissent le kill. Si explosif que Skullclamp a été banni en cours de format.',
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
      period: 'Affinity déchaîné',
      archetype: 'ramp',
      summary:
        'Un deck ramp vert qui assemble les terrains Urzatron pour jouer Tooth and Nail avec entwine, mettant en jeu deux créatures gagnantes comme Darksteel Colossus. Viridian Shaman et Oxidize gèrent Affinity. Inévitable face aux decks fair mais vulnérable aux clocks rapides et aux contresorts.',
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
      period: 'Affinity règne malgré Kamigawa',
      archetype: 'control',
      summary:
        'Un toolbox-control vert-blanc qui loop des créatures avec Astral Slide pour de la value répétée. Viridian Shaman et Eternal Witness reviennent, Oxidize et Wrath of God répondent au board. Solide contre Affinity et les decks de créatures mais lent face au combo pur.',
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

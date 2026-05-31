import type { YearFormatEntry } from '../types'

export const standard2005Fr: YearFormatEntry = {
  year: 2005,
  format: 'standard',
  title: 'Standard 2005',
  subtitle: 'La chute d\'Affinity',
  shortLabel: 'Année des bannissements d\'Affinity',
  summary:
    'L\'année a débuté sous l\'ombre d\'Affinity. Après les bannissements de mars qui ont décimé l\'archétype, le format s\'est largement ouvert. Tooth and Nail s\'est imposé comme le deck à battre au printemps et durant l\'été, exploitant les terrains Urza pour alimenter des menaces déterminantes. À l\'automne, l\'arrivée de Ravnica a propulsé Ghazi-Glare sur le devant de la scène, clôturant l\'année avec une nouvelle stratégie de contrôle du plateau.',
  headlineDeck: 'Tooth and Nail',
  eras: [
    {
      id: '2005-std-affinity',
      name: 'Les derniers jours d\'Affinity',
      start: '2005-01',
      end: '2005-03',
      dominantDecks: ['Ravager Affinity'],
      challengers: ['Tooth and Nail', 'Mono-Green Beacon', 'White Weenie'],
      keyCards: [
        { name: 'Arcbound Ravager', role: 'Récompense modulaire et moteur de sacrifice' },
        { name: 'Cranial Plating', role: 'Source de dégâts létaux en un coup' },
        { name: 'Disciple of the Vault', role: 'Drain de vie sur les boucles de sacrifice' },
      ],
      summary:
        'Affinity restait le deck à battre au début de 2005. Sa combinaison de mana rapide, de créatures gratuites et d\'Arcbound Ravager en faisait la stratégie dominante depuis plus d\'un an. Le format se déformait lourdement autour du deck, la plupart des adversaires devant consacrer une part importante de leur réserve à la haine anti-artefact.',
      whyItDominated: [
        'Les terrains artefacts fournissaient une accélération de mana gratuite',
        'Arcbound Ravager permettait des tours explosifs et des board states résilients',
        'Cranial Plating menaçait des dégâts létaux dès le troisième tour',
        'Le deck punissait systématiquement les adversaires lents ou mal préparés',
      ],
      whyItEnded:
        'Wizards a banni Arcbound Ravager, Disciple of the Vault et les six terrains artefacts lors de la mise à jour des interdictions et restrictions de mars 2005, éliminant de fait le deck du jeu compétitif.',
      confidence: 'high',
      sources: [
        {
          title: 'March 1, 2005 Banned and Restricted Announcement',
          publisher: 'Wizards of the Coast',
          url: 'https://mtg.fandom.com/wiki/Banned_and_restricted_cards/Timeline',
          date: '2005-03-01',
          note: 'Annonce des bannissements d\'Arcbound Ravager, Disciple of the Vault et des six terrains artefacts en Standard.',
        },
        {
          title: 'MTGTop8 - Standard 2005 metagame',
          publisher: 'MTGTop8',
          url: 'https://www.mtgtop8.com/format?f=ST',
          note: 'Résultats de tournois montrant la domination d\'Affinity début 2005.',
        },
      ],
    },
    {
      id: '2005-std-tooth',
      name: 'L\'été Tooth & Tron',
      start: '2005-03',
      end: '2005-10',
      dominantDecks: ['Tooth and Nail'],
      challengers: ['Mono-Blue Tron', 'Jushi Blue', 'Flores Red Deck Wins', 'Viridian Rats'],
      keyCards: [
        { name: 'Tooth and Nail', role: 'Tuteur et mise en jeu de fin de partie' },
        { name: 'Urza\'s Tower', role: 'Source de gros mana (Urzatron)' },
        { name: 'Sakura-Tribe Elder', role: 'Ramp et défense précoce' },
        { name: 'Sundering Titan', role: 'Finisseur par déni de mana' },
        { name: 'Kiki-Jiki, Mirror Breaker', role: 'Combo létale avec Sundering Titan ou Mephidross Vampire' },
      ],
      summary:
        'Avec la disparition d\'Affinity, Tooth and Nail est devenu le moteur de mana définissant le format. Le socle Urzatron permettait de lancer des sorts à neuf manas de manière fiable dès le quatrième ou cinquième tour. Le Tooth and Nail « entwine » cherchait et déployait deux créatures, typiquement Sundering Titan et Kiki-Jiki pour un effet dévastateur. Les decks contrôle et les variantes aggro se disputaient la deuxième place.',
      whyItDominated: [
        'L\'Urzatron offrait une accélération de mana inégalée dans le format post-Affinity',
        'Tooth and Nail entwine gagnait souvent la partie immédiatement',
        'Sakura-Tribe Elder et Sylvan Scrying apportaient de la régularité',
        'Le deck pouvait s\'adapter entre Sundering Titan (contre le contrôle) et des combos létales',
      ],
      whyItEnded:
        'L\'arrivée de Ravnica : Cité des Guildes en octobre 2005 a introduit de puissantes stratégies multicolores. Les améliorations de la base de mana et les nouvelles menaces ont orienté le méta vers des decks de contrôle du plateau comme Ghazi-Glare.',
      confidence: 'high',
      sources: [
        {
          title: 'Pro Tour Philadelphia 2005 coverage',
          publisher: 'Wizards of the Coast',
          url: 'https://mtg.fandom.com/wiki/2005_Pro_Tour_Season',
          date: '2005-05-07',
          note: 'L\'un des événements phares de l\'ère Tooth and Nail en Standard.',
        },
        {
          title: 'MTGTop8 - Standard Kamigawa-Mirrodin block era',
          publisher: 'MTGTop8',
          url: 'https://www.mtgtop8.com/format?f=ST',
          note: 'Tooth and Nail figurait parmi les archétypes les plus performants mi-2005.',
        },
      ],
    },
    {
      id: '2005-std-ravnica',
      name: 'Les débuts de Ravnica',
      start: '2005-10',
      end: '2005-12',
      dominantDecks: ['Ghazi-Glare'],
      challengers: ['Boros Deck Wins', 'Heartbeat Combo', 'Greater Gifts', 'Zoo'],
      keyCards: [
        { name: 'Glare of Subdual', role: 'Effet d\'engagement répétable verrouillant le plateau adverse' },
        { name: 'Vitu-Ghazi, the City-Tree', role: 'Moteur de génération de jetons' },
        { name: 'Selesnya Guildmage', role: 'Génération de jetons et renforcement' },
        { name: 'Loxodon Hierarch', role: 'Attaquant efficace avec gain de vie' },
      ],
      summary:
        'Ravnica a introduit des cartes multicolores puissantes et une base de mana considérablement améliorée. Ghazi-Glare s\'est imposé comme le deck à battre, utilisant Glare of Subdual et des générateurs de jetons pour contrôler le plateau tout en construisant une position insurmontable. Le deck incarnait la guilde Selesnya de Ravnica à son apogée.',
      whyItDominated: [
        'Glare of Subdual neutralisait les créatures adverses de façon répétée',
        'Les générateurs de jetons fournissaient à la fois des bloqueurs et des engageurs',
        'Loxodon Hierarch stabilisait contre l\'aggro',
        'Les terrains doubles de Ravnica permettaient pour la première fois depuis des années des bases de mana tricolores fiables',
      ],
      whyItEnded:
        'Le méta a continué d\'évoluer avec Pacte des Guildes et Dissension en 2006, ouvrant la voie à de nouvelles stratégies. Ghazi-Glare est resté compétitif mais partageait la scène avec Heartbeat Combo, Greater Gifts et des variantes aggro.',
      confidence: 'high',
      sources: [
        {
          title: 'Worlds 2005 coverage',
          publisher: 'Wizards of the Coast',
          url: 'https://mtg.fandom.com/wiki/2005_World_Championships',
          date: '2005-12-01',
          note: 'Résultats du Championnat du Monde montrant le métagame Standard de fin 2005.',
        },
      ],
    },
  ],
  bans: [
    {
      date: '2005-03-20',
      cards: [
        'Arcbound Ravager',
        'Disciple of the Vault',
        'Darksteel Citadel',
        'Great Furnace',
        'Seat of the Synod',
        'Tree of Tales',
        'Vault of Whispers',
        'Ancient Den',
      ],
      explanation:
        'Affinity avait dominé le Standard pendant plus d\'un an. Les terrains artefacts, Arcbound Ravager et Disciple of the Vault ont été bannis pour éliminer l\'archétype et permettre au reste du format de se développer.',
      source: {
        title: 'March 1, 2005 Banned and Restricted Announcement',
        publisher: 'Wizards of the Coast',
        url: 'https://mtg.fandom.com/wiki/Banned_and_restricted_cards/Timeline',
        date: '2005-03-01',
      },
    },
  ],
  setReleases: [
    { date: '2005-02-04', name: 'Betrayers of Kamigawa', code: 'BOK' },
    { date: '2005-06-03', name: 'Saviors of Kamigawa', code: 'SOK' },
    { date: '2005-07-29', name: 'Ninth Edition', code: '9ED' },
    { date: '2005-10-07', name: 'Ravnica: City of Guilds', code: 'RAV', note: 'Rotation du Standard : le bloc Onslaught et la Huitième Édition sortent du format' },
  ],
  representativeDecks: [
    {
      name: 'Ravager Affinity',
      slug: 'ravager-affinity-standard-2005',
      period: "Les derniers jours d'Affinity",
      archetype: 'aggro',
      summary:
        'Le shell Affinity persistant qui a survécu à plusieurs bannissements, abusant toujours d\'Arcbound Ravager, Cranial Plating et Disciple of the Vault pour des départs explosifs. Frogmite et Myr Enforcer coûtent rien avec assez d\'artefacts en jeu. L\'un des clocks les plus rapides du format mais de plus en plus haté.',
      keyCards: ['Arcbound Ravager', 'Cranial Plating', 'Disciple of the Vault', 'Frogmite', 'Myr Enforcer'],
      decklistPending: true,
      source: {
        title: 'MTGTop8 Affinity decklists 2005',
        publisher: 'MTGTop8',
        url: 'https://www.mtgtop8.com/format?f=ST',
      },
    },
    {
      name: 'Tooth and Nail',
      slug: 'tooth-and-nail-standard-2005',
      period: 'L\'été Tooth & Tron',
      archetype: 'ramp',
      summary:
        'Un deck ramp vert qui assemble l\'Urzatron — Urza\'s Tower, Urza\'s Mine, Urza\'s Power Plant — pour sortir Tooth and Nail en entwine et amener deux géants. Sundering Titan verrouille le mana adverse. Inévitable en late game mais vulnérable aux clocks rapides et à la destruction de terrains.',
      keyCards: ['Tooth and Nail', "Urza's Tower", "Urza's Mine", "Urza's Power Plant", 'Sundering Titan', 'Kiki-Jiki, Mirror Breaker'],
      decklistPending: true,
      source: {
        title: 'MTGTop8 Tooth and Nail decklists 2005',
        publisher: 'MTGTop8',
        url: 'https://www.mtgtop8.com/format?f=ST',
      },
    },
    {
      name: 'Ghazi-Glare',
      slug: 'ghazi-glare-standard-2005',
      period: 'Les débuts de Ravnica',
      archetype: 'midrange',
      summary:
        'Un deck midrange vert-blanc qui utilise Glare of Subdual pour tapper le board adverse pendant que Selesnya Guildmage produit des tokens pour Vitu-Ghazi, the City-Tree. Loxodon Hierarch stabilise les points de vie et trade proprement. Solide contre les decks de créatures mais pressé par le burn et les sweepers.',
      keyCards: ['Glare of Subdual', 'Vitu-Ghazi, the City-Tree', 'Selesnya Guildmage', 'Loxodon Hierarch', 'Wood Elves'],
      decklistPending: true,
      source: {
        title: 'Worlds 2005 Ghazi-Glare decklists',
        publisher: 'Wizards of the Coast',
        url: 'https://mtg.fandom.com/wiki/2005_World_Championships',
      },
    },
  ],
}

import type { YearFormatEntry } from '../types'

export const standard2016Fr: YearFormatEntry = {
  year: 2016,
  format: 'standard',
  title: 'Standard 2016',
  subtitle: 'Du Rally à l\'Energy',
  shortLabel: 'Ère Collected Company',
  summary:
    'L\'année a débuté avec Rally the Ancestors et Collected Company dominant le Standard BFZ-Khans. Après la rotation d\'avril sous le nouveau modèle à deux blocs, GW Tokens et Bant Company ont pris le relais, Steve Rubin remportant le Pro Tour Shadows over Innistrad avec GW Tokens. Bant Company est resté le deck à battre tout l\'été. Kaladesh est arrivé en octobre, inaugurant l\'ère Energy : le Pro Tour Kaladesh fut défini par Aetherworks Marvel propulsant Emrakul et Smuggler\'s Copter présent dans presque tous les decks agressifs. Le format a terminé l\'année sous pression croissante, avec des bannissements imminents en janvier 2017.',
  headlineDeck: 'Bant Company',
  eras: [
    {
      id: '2016-std-rally',
      name: 'L\'hiver Rally & Company',
      start: '2016-01',
      end: '2016-04',
      dominantDecks: ['4-Color Rally', 'Bant Company'],
      challengers: ['Atarka Red', 'Abzan Aggro', 'Jeskai Black', 'Mardu Green'],
      keyCards: [
        { name: 'Rally the Ancestors', role: 'Finisseur combo par réanimation de masse' },
        { name: 'Collected Company', role: 'Moteur de déploiement de créatures à vitesse instantanée' },
        { name: 'Jace, Vryn\'s Prodigy', role: 'Sélection de cartes et activation de flashback' },
        { name: 'Reflector Mage', role: 'Swing de tempo sur une créature' },
        { name: 'Nantuko Husk', role: 'Débouché de sacrifice pour les combos Rally' },
      ],
      summary:
        '4-Color Rally était le deck le plus redouté du Standard début 2016, utilisant Collected Company et Rally the Ancestors pour remplir le cimetière puis réanimer un board létal grâce aux triggers de drain de Zulaport Cutthroat. Bant Company exploitait Collected Company avec Reflector Mage pour une approche plus orientée tempo. Atarka Red apportait une pression agressive. Le Pro Tour Oath of the Gatewatch en février portait sur le Modern, mais le métagame Standard était façonné par ces archétypes lors des GPs et événements SCG.',
      whyItDominated: [
        'Rally the Ancestors pouvait gagner à partir d\'un board vide avec un cimetière plein',
        'Collected Company fournissait de l\'avantage de cartes à vitesse instantanée',
        'Jace, Vryn\'s Prodigy préparait le cimetière et activait le flashback',
        'Les triggers de drain de Zulaport Cutthroat rendaient le blocage sans importance',
      ],
      whyItEnded:
        'La rotation du Standard d\'avril 2016 a retiré Khans of Tarkir et Fate Reforged du format sous le nouveau modèle de rotation à deux blocs. Rally the Ancestors, Jace, Vryn\'s Prodigy et de nombreuses cartes clés ont quitté le format, remodelant complètement le métagame.',
      confidence: 'high',
      sources: [
        {
          title: 'MTGTop8 - Standard Rally the Ancestors decklists',
          publisher: 'MTGTop8',
          url: 'https://mtgtop8.com/archetype?a=535',
          note: 'Résultats de tournois montrant la domination de 4-Color Rally début 2016.',
        },
        {
          title: 'Pro Tour Oath of the Gatewatch: By the Meta',
          publisher: 'MTGGoldfish',
          url: 'https://www.mtggoldfish.com/articles/pro-tour-oath-of-the-gatewatch-by-the-meta',
          date: '2016-02-07',
          note: 'Analyse du métagame de l\'ère PT OGW.',
        },
      ],
    },
    {
      id: '2016-std-soi',
      name: 'L\'été Bant Company',
      start: '2016-04',
      end: '2016-10',
      dominantDecks: ['Bant Company', 'GW Tokens'],
      challengers: ['BW Control', 'Humans', 'Mono-White Humans', 'BG Delirium'],
      keyCards: [
        { name: 'Collected Company', role: 'Moteur de déploiement de créatures à vitesse instantanée' },
        { name: 'Reflector Mage', role: 'Créature tempo renvoyant les menaces' },
        { name: 'Spell Queller', role: 'Créature flash exilant les sorts' },
        { name: 'Nissa, Voice of Zendikar', role: 'Génération de jetons et renforcement pour GW Tokens' },
        { name: 'Gideon, Ally of Zendikar', role: 'Menace planeswalker et renforcement' },
        { name: 'Dromoka\'s Command', role: 'Trick de combat et removal polyvalent' },
      ],
      summary:
        'Après la rotation d\'avril, Bant Company s\'est imposé comme le meilleur deck, combinant Collected Company avec Spell Queller et Reflector Mage. Steve Rubin a remporté le Pro Tour Shadows over Innistrad à Madrid avec GW Tokens, mettant en vedette Nissa, Voice of Zendikar et Gideon, Ally of Zendikar. Le Top 8 présentait huit archétypes différents, mais Bant Company et GW Tokens ont dominé les mois suivants. Eldritch Moon en juillet a ajouté Spell Queller et Emrakul, the Promised End, renforçant davantage Bant Company et faisant naître les stratégies BG Delirium.',
      whyItDominated: [
        'Collected Company révélant Spell Queller ou Reflector Mage était dévastateur',
        'Le deck avait à la fois des modes offensifs et défensifs',
        'GW Tokens générait une présence de board écrasante grâce aux planeswalkers',
        'Spell Queller ajoutait un élément de contresort aux decks de créatures',
      ],
      whyItEnded:
        'Kaladesh est sorti en octobre 2016, apportant Smuggler\'s Copter, la mécanique energy et Aetherworks Marvel. Collected Company a quitté le format avec la rotation de Dragons of Tarkir et Magic Origins en septembre, changeant fondamentalement ce qui était viable.',
      confidence: 'high',
      sources: [
        {
          title: 'Pro Tour Shadows over Innistrad Top 8 Decklists',
          publisher: 'MTGGoldfish',
          url: 'https://www.mtggoldfish.com/articles/pro-tour-shadows-over-innistrad-top-8-decklists',
          date: '2016-04-24',
          note: 'Steve Rubin a gagné avec GW Tokens. Le Top 8 comptait 8 archétypes différents.',
        },
        {
          title: 'Pro Tour Shadows over Innistrad',
          publisher: 'MTG Wiki',
          url: 'https://mtg.fandom.com/wiki/Pro_Tour_Shadows_over_Innistrad',
          date: '2016-04-22',
          note: 'Couverture officielle du Pro Tour à Madrid.',
        },
      ],
    },
    {
      id: '2016-std-kaladesh',
      name: 'L\'émergence d\'Aetherworks Marvel',
      start: '2016-10',
      end: '2016-12',
      dominantDecks: ['Aetherworks Marvel', 'UW Flash'],
      challengers: ['BG Delirium', 'Mardu Vehicles', 'RW Vehicles', 'Temur Aetherworks'],
      keyCards: [
        { name: 'Aetherworks Marvel', role: 'Propulsait Emrakul ou Ulamog grâce à l\'energy' },
        { name: 'Smuggler\'s Copter', role: 'Vehicle omniprésent à 2 manas avec looting' },
        { name: 'Emrakul, the Promised End', role: 'Menace décisive via Marvel ou delirium' },
        { name: 'Ishkanah, Grafwidow', role: 'Récompense défensive de delirium' },
        { name: 'Torrential Gearhulk', role: 'Finisseur flash pour les decks contrôle' },
      ],
      summary:
        'Kaladesh a transformé le Standard avec la mécanique energy et des artefacts puissants. Le Pro Tour Kaladesh à Honolulu (14-16 octobre) a vu Shota Yasooka gagner avec un deck Grixis Control mettant en vedette Torrential Gearhulk, mais le métagame était dominé par les decks Aetherworks Marvel propulsant Emrakul, the Promised End dès le quatrième tour. Smuggler\'s Copter apparaissait dans pratiquement tous les decks agressifs et midrange. BG Delirium avec Ishkanah restait compétitif. Le format devenait de plus en plus déformé autour de ces cartes, menant aux bannissements d\'urgence de janvier 2017.',
      whyItDominated: [
        'Aetherworks Marvel pouvait déployer Emrakul dès le quatrième tour',
        'Smuggler\'s Copter était le meilleur two-drop dans chaque deck de créatures',
        'L\'energy n\'avait aucun contre-jeu naturel — les adversaires ne pouvaient pas interagir avec les compteurs d\'energy',
        'La combinaison de combo (Marvel) et de tempo (Copter) ne laissait que peu de place aux autres stratégies',
      ],
      whyItEnded:
        'Le 9 janvier 2017, Wizards a banni Smuggler\'s Copter, Emrakul, the Promised End et Reflector Mage du Standard dans une annonce de bannissement sans précédent en milieu de saison. C\'était le premier bannissement en Standard depuis Jace, the Mind Sculptor et Stoneforge Mystic en 2011.',
      confidence: 'high',
      sources: [
        {
          title: 'Pro Tour Kaladesh',
          publisher: 'MTG Wiki',
          url: 'https://mtg.fandom.com/wiki/Pro_Tour_Kaladesh',
          date: '2016-10-16',
          note: 'Shota Yasooka a gagné. 466 joueurs, deuxième plus grand Pro Tour individuel de tous les temps.',
        },
        {
          title: 'Pro Tour Kaladesh: By the Numbers',
          publisher: 'MTGGoldfish',
          url: 'https://www.mtggoldfish.com/articles/pro-tour-kaladesh-by-the-numbers',
          date: '2016-10-16',
          note: 'Analyse du métagame montrant la domination d\'Aetherworks Marvel et Smuggler\'s Copter.',
        },
      ],
    },
  ],
  setReleases: [
    { date: '2016-01-22', name: 'Oath of the Gatewatch', code: 'OGW' },
    { date: '2016-04-08', name: 'Shadows over Innistrad', code: 'SOI', note: 'Rotation du Standard : Khans of Tarkir et Fate Reforged sortent du format (nouveau modèle à deux blocs)' },
    { date: '2016-07-22', name: 'Eldritch Moon', code: 'EMN' },
    { date: '2016-09-30', name: 'Kaladesh', code: 'KLD', note: 'Rotation du Standard : Dragons of Tarkir et Magic Origins sortent du format. Introduction de la mécanique energy.' },
  ],
  representativeDecks: [
    {
      name: '4-Color Rally',
      slug: '4-color-rally-standard-2016',
      period: 'L\'hiver Rally & Company',
      archetype: 'combo',
      summary:
        'Un deck combo quatre couleurs qui utilise Collected Company pour assembler des créatures bon marché, puis loop Rally the Ancestors avec Zulaport Cutthroat et Nantuko Husk pour un drain infini. Jace, Vryn\'s Prodigy mille le deck. Combo dévastateur mais vulnérable à la hate graveyard d\'exil.',
      keyCards: ['Rally the Ancestors', 'Collected Company', 'Zulaport Cutthroat', 'Nantuko Husk', 'Jace, Vryn\'s Prodigy'],
      decklistPending: true,
      source: {
        title: 'MTGTop8 Rally the Ancestors decklists',
        publisher: 'MTGTop8',
        url: 'https://mtgtop8.com/archetype?a=535',
      },
    },
    {
      name: 'Bant Company',
      slug: 'bant-company-standard-2016',
      period: 'L\'été Bant Company',
      archetype: 'tempo',
      summary:
        'Un deck tempo vert-blanc-bleu qui flash Spell Queller et Reflector Mage à instant speed via Collected Company. Sylvan Advocate scale en late game, Dromoka\'s Command fournit l\'utilité flexible. Disrupt chaque tour mais pressé par les sweepers.',
      keyCards: ['Collected Company', 'Spell Queller', 'Reflector Mage', 'Sylvan Advocate', 'Dromoka\'s Command'],
      decklistPending: true,
      source: {
        title: 'Pro Tour Shadows over Innistrad Standard decks',
        publisher: 'MTGGoldfish',
        url: 'https://www.mtggoldfish.com/tournament/pro-tour-shadows-over-innistrad',
      },
    },
    {
      name: 'GW Tokens',
      slug: 'gw-tokens-standard-2016',
      period: 'L\'été Bant Company',
      archetype: 'midrange',
      summary:
        'Un deck tokens vert-blanc alimenté par Nissa, Voice of Zendikar et Gideon, Ally of Zendikar produisant des armées de tokens. Archangel Avacyn flip en sweeper, Hangarback Walker scale et meurt en Thopters. Va large rapidement mais vulnérable aux sweepers.',
      keyCards: ['Nissa, Voice of Zendikar', 'Gideon, Ally of Zendikar', 'Archangel Avacyn', 'Hangarback Walker', 'Secure the Wastes'],
      decklistPending: true,
      source: {
        title: 'Pro Tour Shadows over Innistrad Top 8 Decklists',
        publisher: 'MTGGoldfish',
        url: 'https://www.mtggoldfish.com/articles/pro-tour-shadows-over-innistrad-top-8-decklists',
      },
    },
    {
      name: 'Aetherworks Marvel',
      slug: 'aetherworks-marvel-standard-2016',
      period: 'L\'émergence d\'Aetherworks Marvel',
      archetype: 'combo',
      summary:
        'Un deck combo qui construit de l\'energy via Attune with Aether et Woodweaver\'s Puzzleknot pour activer Aetherworks Marvel et tricher Emrakul, the Promised End ou Ulamog en jeu. Goldfish au tour quatre de manière fiable mais vulnérable aux contresorts et au ban éventuel de Marvel.',
      keyCards: ['Aetherworks Marvel', 'Emrakul, the Promised End', 'Woodweaver\'s Puzzleknot', 'Attune with Aether', 'Ulamog, the Ceaseless Hunger'],
      decklistPending: true,
      source: {
        title: 'Pro Tour Kaladesh metagame breakdown',
        publisher: 'MTGGoldfish',
        url: 'https://www.mtggoldfish.com/articles/pro-tour-kaladesh-by-the-numbers',
      },
    },
  
    {
      name: 'Atarka Red',
      slug: 'atarka-red-standard-2016',
      period: 'L\'hiver Rally & Company',
      archetype: 'aggro',
      summary:
        'Un deck hyper-aggro rouge-vert qui combine Monastery Swiftspear et Abbot of Keral Keep avec les triggers prowess d\'Atarka\'s Command, Become Immense et Temur Battle Rage pour des kills en un coup. Explosif mais s\'effondre face au lifegain rapide et aux blockers.',
      keyCards: ['Atarka\'s Command', 'Become Immense', 'Temur Battle Rage', 'Monastery Swiftspear', 'Abbot of Keral Keep'],
      decklistPending: true,
    },
    {
      name: 'Abzan Aggro',
      slug: 'abzan-aggro-standard-2016',
      period: 'L\'hiver Rally & Company',
      archetype: 'aggro',
      summary:
        'Un shell aggro noir-vert-blanc bâti sur Warden of the First Tree et Anafenza, the Foremost pour la pression précoce, Siege Rhino pour la value, et Dromoka\'s Command pour l\'utilité flexible. Wingmate Roc conclut avec une armée volante. Résistant mais pressé par les sweepers.',
      keyCards: ['Warden of the First Tree', 'Anafenza, the Foremost', 'Siege Rhino', 'Dromoka\'s Command', 'Wingmate Roc'],
      decklistPending: true,
    },
    {
      name: 'Jeskai Black',
      slug: 'jeskai-black-standard-2016',
      period: 'L\'hiver Rally & Company',
      archetype: 'midrange',
      summary:
        'Un deck midrange-tempo bleu-rouge-blanc-noir combinant Jace, Vryn\'s Prodigy avec Mantis Rider, soutenus par Crackling Doom, Kolaghan\'s Command et Dig Through Time. Interaction et finishers polyvalents. Solide contre le midrange fair mais lent face au combo pur.',
      keyCards: ['Jace, Vryn\'s Prodigy', 'Mantis Rider', 'Crackling Doom', 'Kolaghan\'s Command', 'Dig Through Time'],
      decklistPending: true,
    },
    {
      name: 'Mardu Green',
      slug: 'mardu-green-standard-2016',
      period: 'L\'hiver Rally & Company',
      archetype: 'midrange',
      summary:
        'Un shell midrange noir-rouge-blanc-vert qui ajoute Den Protector à une base Mardu pour de la value récurrente. Siege Rhino et Wingmate Roc servent de finishers, Crackling Doom et Sorin, Solemn Visitor soutiennent le jeu midrange. Résistant mais pressé par les sweepers.',
      keyCards: ['Siege Rhino', 'Crackling Doom', 'Sorin, Solemn Visitor', 'Wingmate Roc', 'Den Protector'],
      decklistPending: true,
    },
    {
      name: 'BW Control',
      slug: 'bw-control-standard-2016',
      period: 'L\'été Bant Company',
      archetype: 'control',
      summary:
        'Un deck control noir-blanc bâti sur Languish comme sweeper unilatéral contre les petites créatures, Gideon, Ally of Zendikar comme planeswalker flexible, et Read the Bones pour le card advantage. Sorin, Grim Nemesis conclut. Solide contre les decks fair mais pressé par le combo.',
      keyCards: ['Languish', 'Gideon, Ally of Zendikar', 'Sorin, Grim Nemesis', 'Read the Bones', 'Ultimate Price'],
      decklistPending: true,
    },
    {
      name: 'Humans',
      slug: 'humans-standard-2016',
      period: 'L\'été Bant Company',
      archetype: 'aggro',
      summary:
        'Un deck aggro tribal Human mono-blanc centré sur Thalia\'s Lieutenant scalant avec chaque Human et Always Watching donnant vigilance et un pump global. Thraben Inspector et Town Gossipmonger fournissent des corps bon marché, Archangel Avacyn conclut. Solide contre le burn et les decks light en removal.',
      keyCards: ['Thalia\'s Lieutenant', 'Always Watching', 'Thraben Inspector', 'Town Gossipmonger', 'Archangel Avacyn'],
      decklistPending: true,
    },
    {
      name: 'Mono-White Humans',
      slug: 'mono-white-humans-standard-2016',
      period: 'L\'été Bant Company',
      archetype: 'aggro',
      summary:
        'Un shell aggro tribal Human mono-blanc qui swarm avec Thraben Inspector et Town Gossipmonger, pumpés par Always Watching. Declaration in Stone exile les créatures problématiques, Archangel Avacyn flip en sweeper. Punit les ouvertures lentes mais vulnérable aux sweepers.',
      keyCards: ['Thraben Inspector', 'Town Gossipmonger', 'Always Watching', 'Declaration in Stone', 'Archangel Avacyn'],
      decklistPending: true,
    },
    {
      name: 'BG Delirium',
      slug: 'bg-delirium-standard-2016',
      period: 'L\'été Bant Company',
      archetype: 'midrange',
      summary:
        'Un deck midrange noir-vert qui vise le delirium — quatre types de cartes au graveyard — pour activer Ishkanah, Grafwidow et Grim Flayer. Liliana, the Last Hope mille et retire les blockers, Traverse the Ulvenwald tutore les menaces. Grindy mais vulnérable à la hate graveyard.',
      keyCards: ['Ishkanah, Grafwidow', 'Liliana, the Last Hope', 'Grim Flayer', 'Traverse the Ulvenwald', 'Vessel of Nascency'],
      decklistPending: true,
    },
    {
      name: 'UW Flash',
      slug: 'uw-flash-standard-2016',
      period: 'L\'émergence d\'Aetherworks Marvel',
      archetype: 'tempo',
      summary:
        'Un deck tempo bleu-blanc bâti sur Spell Queller et Reflector Mage comme interaction-plus-corps flash. Selfless Spirit protège des sweepers, Smuggler\'s Copter fournit un clock véhicule et du looting, Archangel Avacyn conclut en flash. Solide contre les decks fair mais pressé par le combo.',
      keyCards: ['Spell Queller', 'Reflector Mage', 'Selfless Spirit', 'Smuggler\'s Copter', 'Archangel Avacyn'],
      decklistPending: true,
    },
    {
      name: 'Mardu Vehicles',
      slug: 'mardu-vehicles-standard-2016',
      period: 'L\'émergence d\'Aetherworks Marvel',
      archetype: 'aggro',
      summary:
        'Un deck aggro noir-rouge-blanc qui équipage Heart of Kiran et Smuggler\'s Copter avec des créatures bon marché comme Toolcraft Exemplar et Scrapheap Scrounger. Gideon, Ally of Zendikar sert à la fois de créature et planeswalker. Rapide et résistant mais pressé par le removal efficace sur les équipages.',
      keyCards: ['Heart of Kiran', 'Smuggler\'s Copter', 'Toolcraft Exemplar', 'Scrapheap Scrounger', 'Gideon, Ally of Zendikar'],
      decklistPending: true,
    },
    {
      name: 'RW Vehicles',
      slug: 'rw-vehicles-standard-2016',
      period: 'L\'émergence d\'Aetherworks Marvel',
      archetype: 'aggro',
      summary:
        'Un deck aggro rouge-blanc centré sur l\'équipage de Smuggler\'s Copter et Cultivator\'s Caravan avec des créatures bon marché comme Toolcraft Exemplar et Inventor\'s Apprentice. Gideon conclut comme planeswalker-créature. Tempo fort avec du looting mais pressé par le removal d\'artefact.',
      keyCards: ['Smuggler\'s Copter', 'Toolcraft Exemplar', 'Inventor\'s Apprentice', 'Cultivator\'s Caravan', 'Gideon, Ally of Zendikar'],
      decklistPending: true,
    },
    {
      name: 'Temur Aetherworks',
      slug: 'temur-aetherworks-standard-2016',
      period: 'L\'émergence d\'Aetherworks Marvel',
      archetype: 'combo',
      summary:
        'Un deck combo bleu-rouge-vert qui construit de l\'energy via Attune with Aether, Woodweaver\'s Puzzleknot et Rogue Refiner pour spin Aetherworks Marvel et tricher Ulamog, the Ceaseless Hunger en jeu. Goldfish fiable mais vulnérable aux contresorts et à la disruption.',
      keyCards: ['Aetherworks Marvel', 'Ulamog, the Ceaseless Hunger', 'Woodweaver\'s Puzzleknot', 'Attune with Aether', 'Rogue Refiner'],
      decklistPending: true,
    },
  ],
}

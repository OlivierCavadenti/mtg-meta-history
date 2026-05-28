import type { YearFormatEntry } from '../types'

export const extended2010Fr: YearFormatEntry = {
  year: 2010,
  format: 'extended',
  title: 'Extended 2010',
  subtitle: 'L\'ère du nouvel Extended commence',
  shortLabel: 'Nouvel Extended',
  summary:
    'L\'Extended 2010 a été une année de bouleversements majeurs. Le début de la saison PTQ était dominé par Thopter Depths sous l\'ancien pool de cartes de sept ans, mais en juin, Wizards a annoncé un changement radical du format : l\'Extended serait réduit à seulement quatre années d\'extensions. Cette réinitialisation a balayé l\'intégralité du métagame existant. Le « nouvel Extended » a fait ses débuts au Pro Tour Amsterdam en septembre, où le White Weenie de Paul Rietzl a triomphé face à un champ composé de Doran, Scapeshift, Faeries et divers decks de contrôle. Au Championnat du Monde en décembre, le format s\'était encore diversifié avec 4-Color Control, Tempered Steel et diverses builds Jund et Scapeshift se disputant la domination.',
  headlineDeck: 'White Weenie',
  eras: [
    {
      id: '2010-ext-pre-amsterdam',
      name: 'Le nouvel Extended prend forme',
      start: '2010-07',
      end: '2010-09',
      dominantDecks: ['Faeries', 'Scapeshift'],
      challengers: ['Doran', 'White Weenie', 'Jund', 'Mythic Bant', 'Goblins'],
      keyCards: [
        { name: 'Bitterblossom', role: 'Générateur persistant de jetons pour Faeries' },
        { name: 'Cryptic Command', role: 'Contresort polyvalent et outil de tempo' },
        { name: 'Scapeshift', role: 'Kill combo avec Valakut, the Molten Pinnacle' },
        { name: 'Doran, the Siege Tower', role: 'Attaquant efficace permettant un aggro basé sur la toughness' },
        { name: 'Figure of Destiny', role: 'Créature à un mana évolutive pour White Weenie' },
      ],
      summary:
        'Après l\'annonce de rotation de juin 2010 réduisant l\'Extended de sept à quatre ans, l\'ensemble du métagame a été réinitialisé. Le nouveau pool de cartes couvrait les blocs Lorwyn/Shadowmoor jusqu\'à Magic 2011, éliminant Dark Depths, Thopter Foundry/Sword of the Meek et de nombreux autres incontournables. Les joueurs se sont empressés de résoudre le nouveau format. Faeries et Scapeshift ont été rapidement identifiés comme les decks à battre, Doran, White Weenie et les decks de type Zoo formant le gauntlet initial à l\'approche du Pro Tour Amsterdam.',
      whyItDominated: [
        'Faeries a survécu à la transition depuis l\'ancien Extended avec Bitterblossom et Cryptic Command toujours légaux',
        'Scapeshift offrait un kill combo résilient difficile à contrer',
        'La réinitialisation du format signifiait que peu de stratégies établies pour contrer ces decks existaient',
        'Les tests PTQ en ligne ont identifié Faeries et Scapeshift comme les archétypes de tête',
      ],
      whyItEnded:
        'Le Pro Tour Amsterdam a révélé que le format était plus ouvert que prévu. Le White Weenie de Paul Rietzl et le Doran de Brian Kibler ont prouvé que les stratégies agressives pouvaient battre les decks combo et contrôle attendus, remodelant le métagame.',
      confidence: 'medium',
      sources: [
        {
          title: 'Pro Tour Amsterdam 2010 coverage',
          publisher: 'MTGTop8',
          url: 'https://mtgtop8.com/event?e=464&f=EX',
          date: '2010-09-05',
          note: 'Decklists du top 8 du PT Amsterdam, premier événement majeur du nouvel Extended.',
        },
        {
          title: 'PV\'s Playhouse - Examining the MTGO Extended PTQs',
          publisher: 'Star City Games',
          url: 'https://articles.starcitygames.com/articles/pvs-playhouse-examining-the-mtgo-extended-ptqs/',
          note: 'Analyse des résultats de PTQ en ligne identifiant Faeries et Scapeshift comme les favoris initiaux.',
        },
      ],
    },
    {
      id: '2010-ext-post-amsterdam',
      name: 'Diversification post-Amsterdam',
      start: '2010-09',
      end: '2010-12',
      dominantDecks: ['4-Color Control', 'Faeries', 'Scapeshift'],
      challengers: ['White Weenie', 'Jund', 'Tempered Steel', 'Elves', 'GW Trap Ramp', 'Cruel Control'],
      keyCards: [
        { name: 'Jace, the Mind Sculptor', role: 'Card advantage et condition de victoire pour le contrôle' },
        { name: 'Cryptic Command', role: 'Contresort de référence dans les decks bleus' },
        { name: 'Valakut, the Molten Pinnacle', role: 'Terrain de kill combo pour Scapeshift et les builds Wargate' },
        { name: 'Tempered Steel', role: 'Hymne pour l\'aggro d\'artefacts' },
        { name: 'Punishing Fire', role: 'Removal récurrent avec Grove of the Burnwillows' },
      ],
      summary:
        'Après le Pro Tour Amsterdam, le format a continué à évoluer avec l\'ajout de Scars of Mirrodin en octobre. La portion Extended du Championnat du Monde en décembre a présenté un champ diversifié : Luis Scott-Vargas pilotait un 4-Color Control, Faeries restait un pilier, et les variantes Scapeshift (incluant les versions Wargate et Prismatic) offraient des kills combo réguliers. Tempered Steel a émergé comme une nouvelle option agressive utilisant les cartes de Scars of Mirrodin. Jund et diverses coques de contrôle complétaient un métagame sain, bien qu\'éphémère.',
      whyItDominated: [
        'De multiples archétypes viables maintenaient le format diversifié et compétitif',
        'Jace, the Mind Sculptor ancrait de puissantes stratégies de contrôle',
        'Scapeshift fournissait une fin de partie combo régulière résistante au removal de créatures',
        'Faeries s\'adaptait avec des sideboards flexibles pour gérer le champ diversifié',
      ],
      whyItEnded:
        'L\'Extended a continué en 2011 mais perdait déjà de sa pertinence en tant que format compétitif. Wizards allait finalement le remplacer par le Modern en 2011, signalant la fin de l\'Extended en tant que format de Pro Tour.',
      confidence: 'medium',
      sources: [
        {
          title: 'Worlds 2010 - Top Extended Decks',
          publisher: 'MTGTop8',
          url: 'https://mtgtop8.com/event?e=799&f=EX',
          date: '2010-12-12',
          note: 'Decklists Extended du Championnat du Monde 2010 à Chiba, au Japon.',
        },
        {
          title: 'Extended metagame 2010',
          publisher: 'MTGTop8',
          url: 'https://mtgtop8.com/format?f=EX&meta=94',
          note: 'Données agrégées du métagame pour les événements Extended en 2010.',
        },
      ],
    },
  ],
  setReleases: [
    { date: '2010-04-23', name: 'Rise of the Eldrazi', code: 'ROE' },
    { date: '2010-07-16', name: 'Magic 2011', code: 'M11' },
    { date: '2010-10-01', name: 'Scars of Mirrodin', code: 'SOM' },
  ],
  representativeDecks: [
    {
      name: 'White Weenie',
      slug: 'white-weenie-extended-2010',
      period: 'Le nouvel Extended prend forme',
      archetype: 'aggro',
      summary:
        'Un shell aggro mono-blanc bâti sur des créatures efficaces bon marché comme Figure of Destiny et Knight of the White Orchid pumpées par Honor of the Pure. Brave the Elements protège l\'équipe et fait passer le létal. Student of Warfare scale en late game. Punit le control lent mais vulnérable aux sweepers et au lifegain.',
      keyCards: ['Figure of Destiny', 'Knight of the White Orchid', 'Honor of the Pure', 'Brave the Elements', 'Student of Warfare', 'Ranger of Eos'],
      source: {
        title: 'WW - Paul Rietzl, PT Amsterdam 2010',
        publisher: 'MTGTop8',
        url: 'https://mtgtop8.com/event?e=464&d=198954&f=EX',
        date: '2010-09-05',
      },
    },
    {
      name: 'Doran',
      slug: 'doran-extended-2010',
      period: 'Le nouvel Extended prend forme',
      archetype: 'midrange',
      summary:
        'Un deck midrange noir-vert-blanc bâti autour de Doran, the Siege Tower transformant l\'endurance en force. Knight of the Reliquary scale avec les terrains au graveyard, Treefolk Harbinger tutore Doran, et Thoughtseize strip les sorts clés. Grind les decks fair mais pressé par le burn et le combo.',
      keyCards: ['Doran, the Siege Tower', 'Knight of the Reliquary', 'Treefolk Harbinger', 'Thoughtseize', 'Murmuring Bosk', 'Putrid Leech'],
      source: {
        title: 'Doran - Brian Kibler, PT Amsterdam 2010',
        publisher: 'MTGTop8',
        url: 'https://mtgtop8.com/event?e=464&d=198960&f=EX',
        date: '2010-09-05',
      },
    },
    {
      name: 'Faeries',
      slug: 'faeries-extended-2010',
      period: 'Diversification post-Amsterdam',
      archetype: 'tempo',
      summary:
        'Un deck tempo bleu-noir qui joue Bitterblossom pour une armée de tokens volants, soutenue par Spellstutter Sprite, Cryptic Command et Mistbind Clique. Vendilion Clique disrupt à instant speed. Solide contre le midrange et control fair mais vulnérable à l\'aggro rapide et à Volcanic Fallout.',
      keyCards: ['Bitterblossom', 'Cryptic Command', 'Spellstutter Sprite', 'Mistbind Clique', 'Vendilion Clique', 'Thoughtseize'],
    },
    {
      name: '4-Color Control',
      slug: 'four-color-control-extended-2010',
      period: 'Diversification post-Amsterdam',
      archetype: 'control',
      summary:
        'Un deck control quatre couleurs ancré par Jace, the Mind Sculptor et Cryptic Command pour de l\'interaction flexible, avec Cruel Ultimatum comme moteur gagnant. Punishing Fire plus Grove of the Burnwillows fournit du removal récurrent. Outvalue les decks fair mais lent face au combo rapide.',
      keyCards: ['Jace, the Mind Sculptor', 'Cryptic Command', 'Cruel Ultimatum', 'Punishing Fire', 'Grove of the Burnwillows', 'Esper Charm'],
      source: {
        title: '4-Color Control - Luis Scott-Vargas, Worlds 2010',
        publisher: 'MTGTop8',
        url: 'https://mtgtop8.com/event?e=799&f=EX',
        date: '2010-12-12',
      },
    },
    {
      name: 'Scapeshift',
      slug: 'scapeshift-extended-2010',
      period: 'Diversification post-Amsterdam',
      archetype: 'combo',
      summary:
        'Un deck combo bleu-rouge-vert qui rampe à sept terrains puis joue Scapeshift pour les sacrifier tous, fetchant Valakut, the Molten Pinnacle et assez de Mountains pour infliger les dégâts létaux. Prismatic Omen et Wargate fournissent la consistance. Goldfish au tour cinq de manière fiable mais vulnérable aux contresorts et à la destruction de terrains.',
      keyCards: ['Scapeshift', 'Valakut, the Molten Pinnacle', 'Wargate', 'Prismatic Omen', 'Sakura-Tribe Elder', 'Search for Tomorrow'],
    },
  
    {
      name: 'Jund',
      slug: 'jund-extended-2010',
      period: 'Le nouvel Extended prend forme',
      archetype: 'midrange',
      summary:
        'Un deck midrange noir-rouge-vert alimenté par Bloodbraid Elf qui cascade dans Blightning, Maelstrom Pulse ou Lightning Bolt. Sprouting Thrinax fournit des corps résilients. Grind les decks fair via card advantage et removal mais pressé par le combo dédié.',
      keyCards: ['Bloodbraid Elf', 'Blightning', 'Maelstrom Pulse', 'Sprouting Thrinax', 'Lightning Bolt'],
    },
    {
      name: 'Mythic Bant',
      slug: 'mythic-bant-extended-2010',
      period: 'Le nouvel Extended prend forme',
      archetype: 'midrange',
      summary:
        'Un deck midrange vert-blanc-bleu accéléré par Noble Hierarch dans Knight of the Reliquary et Rafiq of the Many. Baneslayer Angel stabilise les points de vie pendant que Path to Exile gère les grosses menaces. Forte présence sur le board mais pressé par le combo et le removal dédié.',
      keyCards: ['Noble Hierarch', 'Knight of the Reliquary', 'Rafiq of the Many', 'Baneslayer Angel', 'Path to Exile'],
    },
    {
      name: 'Goblins',
      slug: 'goblins-extended-2010',
      period: 'Le nouvel Extended prend forme',
      archetype: 'aggro',
      summary:
        'Un deck tribal mono-rouge Goblin qui triche des menaces en jeu avec Goblin Lackey, tutore via Goblin Matron, et recharge avec Goblin Ringleader. Siege-Gang Commander et Mogg Fanatic concluent. Punit les ouvertures lentes mais vulnérable aux sweepers et au lifegain.',
      keyCards: ['Goblin Lackey', 'Goblin Matron', 'Goblin Ringleader', 'Mogg Fanatic', 'Siege-Gang Commander'],
    },
    {
      name: 'Tempered Steel',
      slug: 'tempered-steel-extended-2010',
      period: 'Diversification post-Amsterdam',
      archetype: 'aggro',
      summary:
        'Un deck aggro artefact mono-blanc où Tempered Steel pump un board de créatures artefact bon marché comme Memnite, Signal Pest et Vault Skirge. Glint Hawk Idol fournit de l\'évasion. Goldfish au tour quatre avec un board large mais vulnérable aux sweepers et au removal d\'artefact.',
      keyCards: ['Tempered Steel', 'Memnite', 'Signal Pest', 'Vault Skirge', 'Glint Hawk Idol'],
    },
    {
      name: 'Elves',
      slug: 'elves-extended-2010',
      period: 'Diversification post-Amsterdam',
      archetype: 'combo',
      summary:
        'Un deck combo Elfe mono-vert qui enchaîne Heritage Druid et Nettle Sentinel avec Glimpse of Nature pour piocher le deck, puis conclut avec Regal Force ou des finishers type Craterhoof. Elvish Visionary fournit des cantrips. Goldfish au tour trois mais fragile aux sweepers et à la disruption.',
      keyCards: ['Heritage Druid', 'Nettle Sentinel', 'Glimpse of Nature', 'Elvish Visionary', 'Regal Force'],
    },
    {
      name: 'GW Trap Ramp',
      slug: 'gw-trap-ramp-extended-2010',
      period: 'Diversification post-Amsterdam',
      archetype: 'ramp',
      summary:
        'Un deck ramp vert-blanc qui utilise Summoning Trap pour tricher Primeval Titan ou un Sovereigns of Lost Alara avec Eldrazi Conscription en jeu. Cultivate rampe la manabase. Écrase les decks lents mais vulnérable aux contresorts et aux clocks rapides.',
      keyCards: ['Summoning Trap', 'Primeval Titan', 'Cultivate', 'Eldrazi Conscription', 'Sovereigns of Lost Alara'],
    },
    {
      name: 'Cruel Control',
      slug: 'cruel-control-extended-2010',
      period: 'Diversification post-Amsterdam',
      archetype: 'control',
      summary:
        'Un deck control quatre couleurs ancré par Cruel Ultimatum comme haymaker gagnant. Cryptic Command, Esper Charm et Wrath of God répondent au board, Volcanic Fallout balaie les petites créatures. Outvalue les decks fair mais lent face au combo rapide.',
      keyCards: ['Cruel Ultimatum', 'Cryptic Command', 'Volcanic Fallout', 'Esper Charm', 'Wrath of God'],
    },
  ],
}

import type { YearFormatEntry } from '../types'

export const standard2018Fr: YearFormatEntry = {
  year: 2018,
  format: 'standard',
  title: 'Standard 2018',
  subtitle: 'De l\'après-Energy au Guilds of Ravnica',
  shortLabel: 'Bannissements Energy & été Chainwhirler',
  summary:
    'L\'année a débuté par des bannissements d\'urgence démantelant Temur Energy et Ramunap Red. Le format post-ban a brièvement trouvé un équilibre avant que Dominaria, avec Goblin Chainwhirler et Teferi, Hero of Dominaria, ne remodèle le Standard autour de l\'aggro rouge et du UW Control. Le Pro Tour Dominaria a été dominé par les decks à base de rouge, avec sept des Top 8 jouant quatre copies de Chainwhirler. La rotation d\'automne et Guilds of Ravnica ont apporté le métagame le plus sain depuis des années, avec Golgari Midrange, Jeskai Control, Izzet Drakes et Boros Aggro en lice au sommet.',
  headlineDeck: 'Mono-Red Aggro',
  eras: [
    {
      id: '2018-std-post-energy',
      name: 'Reconstruction post-Energy',
      start: '2018-01',
      end: '2018-04',
      dominantDecks: ['Mono-Red Aggro (Hazoret)'],
      challengers: ['UB Midrange', 'God-Pharaoh\'s Gift (UW)', 'UW Approach', 'Grixis Energy', 'WB Vehicles'],
      keyCards: [
        { name: 'Hazoret the Fervent', role: 'Menace indestructible en haut de courbe pour l\'aggro rouge' },
        { name: 'God-Pharaoh\'s Gift', role: 'Moteur de réanimation par artefact créant des jetons 4/4' },
        { name: 'Approach of the Second Sun', role: 'Condition de victoire alternative pour le UW Control' },
        { name: 'The Scarab God', role: 'Menace récurrente et avantage en cartes pour le UB Midrange' },
        { name: 'Bomat Courier', role: 'Moteur d\'avantage en cartes pour les decks rouges agressifs' },
      ],
      summary:
        'Après les bannissements du 15 janvier qui ont décimé Temur Energy et Ramunap Red, le métagame s\'est largement ouvert. Mono-Red s\'est reconstruit autour de Hazoret the Fervent et a prouvé sa résilience, tandis que UB Midrange exploitant The Scarab God s\'est imposé comme une menace de premier plan. Les decks God-Pharaoh\'s Gift offraient une puissante stratégie de réanimation par artefact, et UW Approach proposait une option contrôle avec une condition de victoire unique. Le format était diversifié mais le Rouge restait le deck à battre.',
      whyItDominated: [
        'Hazoret the Fervent était quasiment impossible à gérer efficacement',
        'L\'aggro rouge conservait une excellente qualité de cartes même après la perte de Ramunap Ruins',
        'The Scarab God offrait une inévitabilité aux shells midrange et contrôle',
        'Aucun deck ne dominait clairement, maintenant la diversité du méta',
      ],
      whyItEnded:
        'La sortie de Dominaria en avril 2018 a introduit Goblin Chainwhirler, Teferi, Hero of Dominaria et Karn, Scion of Urza, remodelant drastiquement le métagame autour de nouvelles menaces puissantes.',
      confidence: 'high',
      sources: [
        {
          title: 'Banned and Restricted Update, January 15 2018',
          publisher: 'MTGGoldfish',
          url: 'https://www.mtggoldfish.com/articles/banned-and-restricted-update-january-15-2018-attune-refiner-ferocidon-ramunap-ruins-banned',
          date: '2018-01-15',
          note: 'Couverture des bannissements Energy et Ramunap Red.',
        },
        {
          title: 'Metagame Mentor: What\'s Next for a Post-Bans Standard?',
          publisher: 'Magic.gg',
          url: 'https://www.magic.gg/news/metagame-mentor-whats-next-for-a-post-bans-standard',
          note: 'Analyse du métagame après les bannissements de janvier 2018.',
        },
      ],
    },
    {
      id: '2018-std-dominaria',
      name: 'L\'été Chainwhirler',
      start: '2018-04',
      end: '2018-10',
      dominantDecks: ['Mono-Red Aggro', 'RB Aggro'],
      challengers: ['UW Control (Teferi)', 'Steel Leaf Stompy', 'BG Constrictor', 'UW God-Pharaoh\'s Gift'],
      keyCards: [
        { name: 'Goblin Chainwhirler', role: 'Trois-drop déformant le plateau qui punissait les créatures X/1' },
        { name: 'Teferi, Hero of Dominaria', role: 'Moteur d\'avantage en cartes et de removal pour le UW Control' },
        { name: 'Karn, Scion of Urza', role: 'Planeswalker incolore générateur d\'avantage en cartes' },
        { name: 'Steel Leaf Champion', role: 'Menace 5/4 efficace pour le mono-vert aggro' },
        { name: 'Winding Constrictor', role: 'Moteur de synergie +1/+1 counters pour les decks BG' },
      ],
      summary:
        'Dominaria a transformé le Standard avec une série de cartes historiquement puissantes. Goblin Chainwhirler a déformé le métagame au point que sept des Top 8 du Pro Tour Dominaria en jouaient quatre copies. Wyatt Darby a remporté le Pro Tour Dominaria avec Mono-Red, battant un BR Aggro en finale. Pendant ce temps, Teferi, Hero of Dominaria a établi le UW Control comme archétype de premier plan. Steel Leaf Stompy offrait une réponse verte au méta dominé par le rouge, tandis que BG Constrictor apportait de la résilience midrange.',
      whyItDominated: [
        'L\'ETB de Goblin Chainwhirler anéantissait les stratégies à base de jetons et les créatures X/1',
        'Les decks rouges bénéficiaient d\'une qualité de cartes exceptionnelle avec Hazoret, Chainwhirler, Glorybringer et Chandra',
        'Teferi, Hero of Dominaria a propulsé à lui seul le UW Control au tier one',
        'Les coûts de mana triples (RRR, GGG) récompensaient les stratégies monochromes',
      ],
      whyItEnded:
        'La rotation d\'automne a retiré les blocs Kaladesh et Amonkhet, emportant Hazoret the Fervent, The Scarab God et une grande partie du shell rouge-noir. Guilds of Ravnica a fourni de nouveaux outils multicolores puissants.',
      confidence: 'high',
      sources: [
        {
          title: 'Pro Tour Dominaria',
          publisher: 'MTG Wiki (Fandom)',
          url: 'https://mtg.fandom.com/wiki/Pro_Tour_Dominaria',
          date: '2018-06-01',
          note: 'Sept des Top 8 jouaient quatre Goblin Chainwhirler. Gagné par Wyatt Darby sur Mono-Red.',
        },
        {
          title: 'Pro Tour Dominaria: By the Numbers',
          publisher: 'MTGGoldfish',
          url: 'https://www.mtggoldfish.com/articles/pro-tour-dominaria-by-the-numbers',
          date: '2018-06-03',
          note: 'BR Aggro 14 %, BR Midrange 12 %, Mono-Red 10 %, Mono-Green 9 % du field.',
        },
      ],
    },
    {
      id: '2018-std-grn',
      name: 'Golgari Midrange',
      start: '2018-10',
      end: '2018-12',
      dominantDecks: ['Golgari Midrange'],
      challengers: ['Jeskai Control', 'Mono-Red Aggro', 'Boros Aggro', 'Izzet Drakes', 'Mono-Blue Tempo'],
      keyCards: [
        { name: 'Jadelight Ranger', role: 'Créature explore générant de la valeur pour Golgari' },
        { name: 'Vivien Reid', role: 'Avantage en cartes et removal pour le green midrange' },
        { name: 'Teferi, Hero of Dominaria', role: 'Pilier incontournable du Jeskai Control' },
        { name: 'Arclight Phoenix', role: 'Menace récursive alimentant les Izzet Drakes' },
        { name: 'Crackling Drake', role: 'Menace à taille variable récompensant les stratégies lourdes en sorts' },
      ],
      summary:
        'La rotation Guilds of Ravnica a engendré le Standard le plus sain depuis des années. Golgari Midrange détenait la plus grande part du métagame avec environ 22 % au Pro Tour GRN, mais le format était remarquablement diversifié. Jeskai Control, Izzet Drakes (porté par Arclight Phoenix), Boros Aggro, Mono-Red et Mono-Blue Tempo rivalisaient tous au plus haut niveau. Deux joueurs ont affiché un parcours parfait en Standard au Pro Tour : Guillaume Gauthier sur Mono-Blue Tempo et Pascal Vieren sur Izzet Phoenix.',
      whyItDominated: [
        'Le package explore de Golgari offrait une qualité de cartes constante et une synergie cimetière',
        'Jeskai Control exploitait Teferi aux côtés d\'un removal efficace de l\'ère Ravnica',
        'Arclight Phoenix offrait aux Izzet Drakes une menace récursive punissant les départs lents',
        'La base de mana en shocklands permettait des stratégies multicolores diversifiées',
      ],
      whyItEnded:
        'Ravnica Allegiance en janvier 2019 a ajouté de nouvelles guildes et des cartes puissantes comme Hydroid Krasis, faisant évoluer le métagame vers le Sultai Midrange et l\'Esper Control.',
      confidence: 'high',
      sources: [
        {
          title: 'Pro Tour Guilds of Ravnica',
          publisher: 'MTG Wiki (Fandom)',
          url: 'https://mtg.fandom.com/wiki/Pro_Tour_Guilds_of_Ravnica',
          date: '2018-11-09',
          note: 'Golgari Midrange à 22 % du field. Top 8 diversifié avec de multiples archétypes.',
        },
        {
          title: 'PT Guilds of Ravnica Standard Deck Power Rankings',
          publisher: 'Hipsters of the Coast',
          url: 'https://www.hipstersofthecoast.com/2018/11/pt-guilds-of-ravnica-mtg-standard-deck-power-rankings/',
          note: 'Analyse des performances des decks au Pro Tour.',
        },
      ],
    },
  ],
  bans: [
    {
      date: '2018-01-19',
      cards: [
        'Attune with Aether',
        'Rogue Refiner',
        'Rampaging Ferocidon',
        'Ramunap Ruins',
      ],
      explanation:
        'Temur Energy avait dominé le Standard pendant près de six mois, et même avec l\'arrivée de Rivals of Ixalan, Wizards a conclu que le deck resterait trop puissant. Attune with Aether et Rogue Refiner ont été bannis pour démanteler Energy. Ramunap Ruins et Rampaging Ferocidon ont été bannis pour affaiblir Ramunap Red, le deck le plus victorieux du format, qu\'Energy seul parvenait à contenir.',
      source: {
        title: 'Banned and Restricted Update, January 15 2018',
        publisher: 'Wizards of the Coast',
        url: 'https://www.mtggoldfish.com/articles/banned-and-restricted-update-january-15-2018-attune-refiner-ferocidon-ramunap-ruins-banned',
        date: '2018-01-15',
      },
    },
  ],
  setReleases: [
    { date: '2018-01-19', name: 'Rivals of Ixalan', code: 'RIX' },
    { date: '2018-04-27', name: 'Dominaria', code: 'DOM', note: 'Introduction de Teferi, Hero of Dominaria et Goblin Chainwhirler' },
    { date: '2018-07-13', name: 'Core Set 2019', code: 'M19', note: 'Inclut Nexus of Fate en promo Buy-a-Box' },
    { date: '2018-10-05', name: 'Guilds of Ravnica', code: 'GRN', note: 'Rotation du Standard : les blocs Kaladesh et Amonkhet sortent du format' },
  ],
  representativeDecks: [
    {
      name: 'Mono-Red Aggro (Hazoret)',
      slug: 'mono-red-hazoret-standard-2018',
      period: 'Reconstruction post-Energy',
      archetype: 'aggro',
      summary:
        'Un shell aggro mono-rouge centré sur Hazoret the Fervent comme quatre-drop indestructible, avec Bomat Courier pour le card advantage, Goblin Chainwhirler comme trois-drop value et sweeper d\'un d\'endurance, et Glorybringer pour conclure. Chandra, Torch of Defiance rampe et burn. Punit les decks lents mais vulnérable au lifegain.',
      keyCards: ['Hazoret the Fervent', 'Bomat Courier', 'Goblin Chainwhirler', 'Glorybringer', 'Chandra, Torch of Defiance'],
      source: {
        title: 'Pro Tour Dominaria Top 8',
        publisher: 'Wizards of the Coast',
        url: 'https://mtg.fandom.com/wiki/Pro_Tour_Dominaria',
      },
    },
    {
      name: 'UW Control (Teferi)',
      slug: 'uw-control-teferi-standard-2018',
      period: 'L\'été Chainwhirler',
      archetype: 'control',
      summary:
        'Un deck control bleu-blanc bâti autour de Teferi, Hero of Dominaria comme moteur d\'inévitabilité — untappant les terrains, exilant les menaces, et finalement piochant le deck. Seal Away et Settle the Wreckage répondent aux créatures, Search for Azcanta filtre et recharge. Inévitable en late game mais lent face au combo rapide.',
      keyCards: ['Teferi, Hero of Dominaria', 'Seal Away', 'Settle the Wreckage', 'Search for Azcanta', 'Teferi, Hero of Dominaria'],
      source: {
        title: 'Pro Tour Dominaria coverage',
        publisher: 'Wizards of the Coast',
        url: 'https://mtg.fandom.com/wiki/Pro_Tour_Dominaria',
      },
    },
    {
      name: 'Golgari Midrange',
      slug: 'golgari-midrange-standard-2018',
      period: 'Golgari Midrange',
      archetype: 'midrange',
      summary:
        'Un deck midrange noir-vert centré sur la croissance par explore de Jadelight Ranger, Wildgrowth Walker gagnant des points de vie via explore, et Ravenous Chupacabra retirant les créatures à l\'arrivée. Vivien Reid gère les flyers et recharge, Find // Finality sert d\'utilité flexible. Grindy mais pressé par le combo.',
      keyCards: ['Jadelight Ranger', 'Wildgrowth Walker', 'Vivien Reid', 'Ravenous Chupacabra', 'Find // Finality'],
      source: {
        title: 'Pro Tour Guilds of Ravnica',
        publisher: 'MTG Wiki (Fandom)',
        url: 'https://mtg.fandom.com/wiki/Pro_Tour_Guilds_of_Ravnica',
      },
    },
    {
      name: 'Izzet Drakes',
      slug: 'izzet-drakes-standard-2018',
      period: 'Golgari Midrange',
      archetype: 'tempo',
      summary:
        'Un deck tempo bleu-rouge qui remplit le graveyard avec des cantrips comme Chart a Course et Radical Idea pour faire grossir Crackling Drake et Enigma Drake, puis ramène Arclight Phoenix du graveyard gratuitement avec trois sorts par tour. Explosif mais vulnérable à la hate graveyard.',
      keyCards: ['Arclight Phoenix', 'Crackling Drake', 'Enigma Drake', 'Chart a Course', 'Radical Idea'],
      source: {
        title: 'PT Guilds of Ravnica Standard Deck Power Rankings',
        publisher: 'Hipsters of the Coast',
        url: 'https://www.hipstersofthecoast.com/2018/11/pt-guilds-of-ravnica-mtg-standard-deck-power-rankings/',
      },
    },
  
    {
      name: 'UB Midrange',
      slug: 'ub-midrange-standard-2018',
      period: 'Reconstruction post-Energy',
      archetype: 'midrange',
      summary:
        'Un deck midrange bleu-noir ancré par The Scarab God comme finisher récurrent et Champion of Wits pour le filtrage précoce. Glimmer of Genius recharge, Vraska\'s Contempt exile n\'importe quoi, Fatal Push gère les menaces bon marché. Grindy et résistant mais lent face au combo rapide.',
      keyCards: ['The Scarab God', 'Glimmer of Genius', 'Vraska\'s Contempt', 'Fatal Push', 'Champion of Wits'],
    },
    {
      name: 'God-Pharaoh\'s Gift (UW)',
      slug: 'god-pharaohs-gift-uw-standard-2018',
      period: 'Reconstruction post-Energy',
      archetype: 'combo',
      summary:
        'Un deck reanimator-combo bleu-blanc qui triche God-Pharaoh\'s Gift en jeu via Refurbish ou Gate to the Afterlife, puis loop les créatures du graveyard pour des tokens Angel 4/4 hasté répétés. Champion of Wits filtre et nourrit le graveyard. Dévastateur mais vulnérable à la hate graveyard.',
      keyCards: ['God-Pharaoh\'s Gift', 'Refurbish', 'Angel of Invention', 'Champion of Wits', 'Gate to the Afterlife'],
    },
    {
      name: 'UW Approach',
      slug: 'uw-approach-standard-2018',
      period: 'Reconstruction post-Energy',
      archetype: 'control',
      summary:
        'Un deck control bleu-blanc bâti sur Approach of the Second Sun comme win condition alternative. Settle the Wreckage et Fumigate balaient, Glimmer of Genius et Torrential Gearhulk fournissent le card advantage. Inévitable mais vulnérable à l\'aggro rapide et au combo.',
      keyCards: ['Approach of the Second Sun', 'Settle the Wreckage', 'Fumigate', 'Glimmer of Genius', 'Torrential Gearhulk'],
    },
    {
      name: 'Grixis Energy',
      slug: 'grixis-energy-standard-2018',
      period: 'Reconstruction post-Energy',
      archetype: 'midrange',
      summary:
        'Un deck midrange-energy bleu-rouge-noir centré sur The Scarab God comme menace récurrente, soutenu par Glimmer of Genius et Harnessed Lightning. Fatal Push gère les menaces bon marché, Whirler Virtuoso construit energy et corps. Grindy et résistant mais pressé par le removal d\'exil.',
      keyCards: ['The Scarab God', 'Glimmer of Genius', 'Harnessed Lightning', 'Fatal Push', 'Whirler Virtuoso'],
    },
    {
      name: 'WB Vehicles',
      slug: 'wb-vehicles-standard-2018',
      period: 'Reconstruction post-Energy',
      archetype: 'aggro',
      summary:
        'Un deck aggro blanc-noir qui équipage Heart of Kiran avec des créatures bon marché comme Toolcraft Exemplar et Scrapheap Scrounger. Gideon of the Trials double comme planeswalker, Fatal Push retire les blockers. Rapide et résistant mais pressé par le removal efficace sur les équipages.',
      keyCards: ['Heart of Kiran', 'Toolcraft Exemplar', 'Scrapheap Scrounger', 'Gideon of the Trials', 'Fatal Push'],
    },
    {
      name: 'Mono-Red Aggro',
      slug: 'mono-red-aggro-standard-2018',
      period: 'L\'été Chainwhirler',
      archetype: 'aggro',
      summary:
        'Un shell aggro mono-rouge bâti autour d\'Hazoret the Fervent, soutenu par Goblin Chainwhirler comme sweeper d\'1 d\'endurance et corps à 3 de force. Bomat Courier fournit le card advantage, Earthshaker Khenra punit les blockers au sol, Rampaging Ferocidon bloque le lifegain. Punit les decks lents mais vulnérable aux sweepers.',
      keyCards: ['Hazoret the Fervent', 'Goblin Chainwhirler', 'Bomat Courier', 'Earthshaker Khenra', 'Rampaging Ferocidon'],
    },
    {
      name: 'RB Aggro',
      slug: 'rb-aggro-standard-2018',
      period: 'L\'été Chainwhirler',
      archetype: 'aggro',
      summary:
        'Un deck aggro rouge-noir combinant Hazoret the Fervent avec Scrapheap Scrounger comme menace récurrente et Unlicensed Disintegration comme removal-plus-burn. Goblin Chainwhirler balaie les petites créatures, Bomat Courier pioche. Résistant face aux decks fair mais pressé par le lifegain.',
      keyCards: ['Hazoret the Fervent', 'Scrapheap Scrounger', 'Goblin Chainwhirler', 'Unlicensed Disintegration', 'Bomat Courier'],
    },
    {
      name: 'Steel Leaf Stompy',
      slug: 'steel-leaf-stompy-standard-2018',
      period: 'L\'été Chainwhirler',
      archetype: 'aggro',
      summary:
        'Un deck aggro mono-vert alimenté par le ramp au tour un de Llanowar Elves vers Steel Leaf Champion — un trois-drop à trois de force protégé contre les attaques incolores. Ghalta, Primal Hunger arrive à bas coût, Blossoming Defense protège les menaces. Rapide et résistant mais pressé par les sweepers.',
      keyCards: ['Steel Leaf Champion', 'Llanowar Elves', 'Ghalta, Primal Hunger', 'Resilient Khenra', 'Blossoming Defense'],
    },
    {
      name: 'BG Constrictor',
      slug: 'bg-constrictor-standard-2018',
      period: 'L\'été Chainwhirler',
      archetype: 'midrange',
      summary:
        'Un deck midrange noir-vert centré sur Winding Constrictor doublant les marqueurs de Walking Ballista, Verdurous Gearhulk et Rishkar, Peema Renegade. Fatal Push gère les menaces à bas coût. Résistant mais pressé par les sweepers.',
      keyCards: ['Winding Constrictor', 'Walking Ballista', 'Verdurous Gearhulk', 'Rishkar, Peema Renegade', 'Fatal Push'],
    },
    {
      name: 'UW God-Pharaoh\'s Gift',
      slug: 'uw-god-pharaohs-gift-standard-2018',
      period: 'L\'été Chainwhirler',
      archetype: 'combo',
      summary:
        'Un deck reanimator-combo bleu-blanc qui fetch God-Pharaoh\'s Gift via Gate to the Afterlife ou Refurbish, puis exile les créatures du graveyard pour des tokens Angel 4/4 hasté. Champion of Wits se mille et recharge. Moteur puissant mais vulnérable à la hate graveyard d\'exil.',
      keyCards: ['God-Pharaoh\'s Gift', 'Refurbish', 'Angel of Invention', 'Champion of Wits', 'Gate to the Afterlife'],
    },
    {
      name: 'Jeskai Control',
      slug: 'jeskai-control-standard-2018',
      period: 'Golgari Midrange',
      archetype: 'control',
      summary:
        'Un deck control bleu-rouge-blanc ancré par Teferi, Hero of Dominaria comme finisher inévitable. Niv-Mizzet, Parun pioche sur les contresorts et burn, Justice Strike et Lava Coil gèrent les menaces. Solide contre les decks de créatures mais lent face au combo rapide.',
      keyCards: ['Teferi, Hero of Dominaria', 'Niv-Mizzet, Parun', 'Justice Strike', 'Lava Coil', 'Settle the Wreckage'],
    },
    {
      name: 'Boros Aggro',
      slug: 'boros-aggro-standard-2018',
      period: 'Golgari Midrange',
      archetype: 'aggro',
      summary:
        'Un deck aggro rouge-blanc alimenté par Legion Warboss produisant des tokens menace et Tajic, Legion\'s Edge protégeant l\'équipe. History of Benalia produit des tokens Knight, Heroic Reinforcements pump et inonde le board. Punit les decks lents mais vulnérable aux sweepers.',
      keyCards: ['Legion Warboss', 'Goblin Chainwhirler', 'Tajic, Legion\'s Edge', 'History of Benalia', 'Heroic Reinforcements'],
    },
    {
      name: 'Mono-Blue Tempo',
      slug: 'mono-blue-tempo-standard-2018',
      period: 'Golgari Midrange',
      archetype: 'tempo',
      summary:
        'Un deck tempo mono-bleu qui équipe Tempest Djinn et Siren Stormtamer avec Curious Obsession pour du card advantage à l\'attaque. Dive Down protège les menaces du removal, Wizard\'s Retort contre les sorts clés. Punit les decks gourmands mais vulnérable aux sweepers et au lifegain.',
      keyCards: ['Tempest Djinn', 'Curious Obsession', 'Siren Stormtamer', 'Dive Down', 'Wizard\'s Retort'],
    },
  ],
}

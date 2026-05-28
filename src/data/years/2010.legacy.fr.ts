import type { YearFormatEntry } from '../types'

export const legacy2010Fr: YearFormatEntry = {
  year: 2010,
  format: 'legacy',
  title: 'Legacy 2010',
  subtitle: 'L\'ascension et la chute de Survival',
  shortLabel: 'Survival & CounterTop',
  summary:
    'Le Legacy 2010 a débuté comme un format diversifié défini par le contrôle CounterTop, l\'aggro Zoo et le combo storm, avant que Survival of the Fittest — dopé par Vengevine issu de Rise of the Eldrazi — ne dévore le métagame. À l\'automne, les variantes Survival occupaient une part disproportionnée des meilleurs résultats lors des StarCityGames Legacy Opens, poussant Wizards of the Coast à interdire la carte en décembre. Les Grand Prix Madrid et Columbus ont encadré les ères pré-Survival et post-Survival, Tomoharu Saito terminant notamment dans les meilleurs résultats des deux événements avec des archétypes différents.',
  headlineDeck: 'Survival of the Fittest',
  eras: [
    {
      id: '2010-leg-pre-roe',
      name: 'Avant Rise of the Eldrazi',
      start: '2010-01',
      end: '2010-04',
      dominantDecks: ['CounterTop', 'Zoo'],
      challengers: ['Ad Nauseam Tendrils', 'Merfolk', 'Reanimator', 'Canadian Threshold'],
      keyCards: [
        { name: 'Counterbalance', role: 'Soft lock avec Sensei\'s Divining Top' },
        { name: 'Sensei\'s Divining Top', role: 'Manipulation de bibliothèque et activateur de Counterbalance' },
        { name: 'Tarmogoyf', role: 'Menace efficace présente dans de multiples archétypes' },
        { name: 'Wild Nacatl', role: 'Créature à un mana de base pour Zoo' },
        { name: 'Ad Nauseam', role: 'Moteur combo storm piochant vers Tendrils of Agony' },
        { name: 'Aether Vial', role: 'Déploiement de créatures impossible à contrecarrer pour Merfolk' },
      ],
      summary:
        'Le Legacy du début 2010 présentait un métagame équilibré ancré par le contrôle CounterTop et l\'aggro Zoo, avec des decks combo tels que Ad Nauseam Tendrils et Reanimator maintenant l\'honnêteté du format. Le Grand Prix Madrid de février 2010 a attiré 2 227 joueurs et a mis en lumière cette diversité : le top huit comprenait Reanimator (vainqueur Andreas Muller), deux listes ANT (dont Tomoharu Saito), trois decks Zoo et deux builds Natural Order Bant. Merfolk était un performeur régulier aux StarCityGames Legacy Opens, apparaissant fréquemment dans les top huit et punissant la base de mana riche en îles de CounterTop grâce aux seigneurs avec la islandwalk.',
      whyItDominated: [
        'CounterTop fournissait un soft lock contre une grande partie du format grâce à Counterbalance et Sensei\'s Divining Top',
        'Zoo avait la vitesse brute nécessaire pour punir les stratégies lentes et les decks combo qui trébuchaient',
        'ANT offrait un kill combo rapide capable de devancer à la fois CounterTop et Zoo avec la bonne disruption',
        'Merfolk exploitait les métagames saturés de bleu grâce à la islandwalk et Aether Vial',
      ],
      whyItEnded:
        'La sortie de Rise of the Eldrazi en avril 2010 a introduit Vengevine, qui combiné avec Survival of the Fittest a créé un moteur surpassant les piliers existants du métagame.',
      confidence: 'high',
      sources: [
        {
          title: 'Grand Prix Madrid 2010 results',
          publisher: 'MTGTop8',
          url: 'https://www.mtgtop8.com/event?e=461',
          date: '2010-02-28',
          note: 'Le top 8 comprenait Reanimator, ANT, Zoo et Natural Order Bant — représentatif du métagame diversifié d\'avant Survival.',
        },
        {
          title: 'A Deeper Look at CounterTop in Legacy',
          publisher: 'Star City Games',
          url: 'https://articles.starcitygames.com/articles/a-deeper-look-at-countertop-in-legacy/',
          note: 'Analyse des performances de CounterTop aux SCG Legacy Opens du début 2010.',
        },
        {
          title: 'So Many Insane Plays — Your Complete Guide to Legacy: The 50 Decks of Legacy',
          publisher: 'Star City Games',
          url: 'https://articles.starcitygames.com/articles/so-many-insane-plays-your-complete-guide-to-legacy-the-50-decks-of-legacy/',
          note: 'Tour d\'horizon complet du métagame Legacy par Stephen Menendian, incluant l\'analyse du GP Madrid.',
        },
      ],
    },
    {
      id: '2010-leg-survival-summer',
      name: 'L\'été Survival',
      start: '2010-05',
      end: '2010-09',
      dominantDecks: ['UG Survival Madness', 'GW Survival'],
      challengers: ['CounterTop', 'Merfolk', 'Ad Nauseam Tendrils', 'Team America'],
      keyCards: [
        { name: 'Survival of the Fittest', role: 'Tuteur de créature réutilisable qui remplissait aussi le graveyard' },
        { name: 'Vengevine', role: 'Menace récurrente qui revenait du graveyard quand des créatures étaient lancées' },
        { name: 'Basking Rootwalla', role: 'Créature gratuite via la madness, déclenchant la récursion de Vengevine' },
        { name: 'Wild Mongrel', role: 'Possibilité de discard pour les créatures à madness' },
        { name: 'Noble Hierarch', role: 'Accélération de mana dans les builds GW' },
        { name: 'Aquamoeba', role: 'Possibilité de discard supplémentaire dans les builds UG' },
      ],
      summary:
        'L\'impression de Vengevine dans Rise of the Eldrazi a transformé Survival of the Fittest d\'une carte à boîte à outils marginale en l\'un des moteurs les plus déformants du Legacy. L\'interaction était dévastatrice : Survival défaussait Vengevine pour trouver Basking Rootwalla (lancé gratuitement via la madness), puis le lancement de deux créatures dans un tour ramenait tous les Vengevine du graveyard sur le champ de bataille. Caleb Durward a été le pionnier de la version UG Madness et a terminé troisième-quatrième au Grand Prix Columbus en août 2010, qui comptait 1 296 joueurs. Saito a remporté ce même événement avec Merfolk, démontrant que le format n\'était pas encore entièrement dominé, mais Survival était clairement en pleine ascension.',
      whyItDominated: [
        'Survival of the Fittest combiné avec Vengevine créait un moteur de menaces récurrentes contre lequel il était difficile d\'interagir de manière profitable',
        'Basking Rootwalla fournissait des créatures gratuites qui déclenchaient le retour de Vengevine sans coût de mana',
        'Le deck pouvait générer des board states létaux dès le deuxième tour avec un séquençage approprié',
        'Les suites de removal existantes étaient mal équipées pour gérer des créatures récurrentes à haste de quatre de power',
      ],
      whyItEnded:
        'Plutôt que de prendre fin, la domination de Survival s\'est intensifiée. De nouvelles constructions sont apparues à l\'automne, incluant des variantes combo avec Necrotic Ooze, et la part de métagame du deck a continué de croître tout au long de la saison automnale des SCG Opens.',
      confidence: 'high',
      sources: [
        {
          title: 'Grand Prix Columbus 2010 results',
          publisher: 'MTGTop8',
          url: 'https://www.mtgtop8.com/event?e=460&f=LE',
          date: '2010-08-01',
          note: 'Caleb Durward a terminé 3e-4e avec UG Madness (Survival). Saito a gagné avec Merfolk.',
        },
        {
          title: 'Instant Analysis — SCG Charlotte $5K Legacy',
          publisher: 'Eternal Central',
          url: 'https://www.eternalcentral.com/instant-analysis-scg-charlotte-5k-legacy/',
          note: 'Nick Spagnolo a remporté le SCG Charlotte avec un build innovant UG Survival incluant Trinket Mage.',
        },
        {
          title: 'Vengevine Survival Legacy Archive decks',
          publisher: 'TCDecks',
          url: 'https://www.tcdecks.net/archetype.php?archetype=Vengevine+Survival&format=Legacy+Archive',
          note: 'Archive de decklists Vengevine Survival issues des résultats de tournois de 2010.',
        },
      ],
    },
    {
      id: '2010-leg-survival-ban',
      name: 'Domination de Survival et interdiction',
      start: '2010-10',
      end: '2010-12',
      dominantDecks: ['GW Survival', 'BUG Survival (Necrotic Ooze)'],
      challengers: ['CounterTop', 'Merfolk', 'Dredge', 'Belcher'],
      keyCards: [
        { name: 'Survival of the Fittest', role: 'Moteur de tuteur déformant le format' },
        { name: 'Vengevine', role: 'Menace récurrente à haste' },
        { name: 'Necrotic Ooze', role: 'Pièce de combo kill copiant les capacités activées des créatures dans tous les graveyards' },
        { name: 'Triskelion', role: 'Pièce de combo avec Necrotic Ooze fournissant une condition de victoire basée sur les blessures' },
        { name: 'Phyrexian Devourer', role: 'Pièce de combo avec Necrotic Ooze fournissant un power illimité' },
      ],
      summary:
        'À l\'automne 2010, les decks Survival of the Fittest s\'étaient fragmentés en de multiples variantes — builds aggressives GW, UG Madness, et une nouvelle version combo BUG utilisant Necrotic Ooze avec Triskelion et Phyrexian Devourer dans le graveyard pour un combo de kill instantané. Au SCG Nashville, les variantes Survival occupaient quatre des huit premières places et cinq des seize premières. L\'événement Legacy du dimanche du Championnat du Monde 2010 à Chiba a tout de même vu un vainqueur CounterTop (Kazuho Sasou) aux côtés d\'une liste GW Survival dans le top quatre, illustrant que si le format n\'était pas mono-deck, la part de Survival était insoutenable. Le 20 décembre 2010, Wizards of the Coast a annoncé l\'interdiction de Survival of the Fittest, effective au 1er janvier 2011, déclarant que la carte avait « provoqué une réduction significative de la diversité du format compétitif ».',
      whyItDominated: [
        'Les multiples builds Survival attaquaient sous des angles différents, rendant difficile le sideboard contre l\'archétype dans son ensemble',
        'La variante combo Necrotic Ooze ajoutait une ligne de kill combo instantané en plus du plan de beatdown Vengevine existant',
        'Survival of the Fittest trouvait la créature nécessaire selon la situation, offrant une flexibilité inégalée',
        'Les éléments récursifs du deck rendaient le removal traditionnel un-pour-un inefficace',
      ],
      whyItEnded:
        'Wizards of the Coast a interdit Survival of the Fittest le 20 décembre 2010, mesure effective au 1er janvier 2011. L\'interdiction a immédiatement supprimé le moteur le plus dominant du format et a inauguré une nouvelle ère de diversité en Legacy. Time Spiral a été retiré de la liste des interdictions dans la même annonce.',
      confidence: 'high',
      sources: [
        {
          title: 'Survival of the Fittest Banned in Legacy, No Changes in Vintage',
          publisher: 'Eternal Central',
          url: 'https://www.eternalcentral.com/survival-of-the-fittest-banned-in-legacy-no-changes-in-vintage/',
          date: '2010-12-20',
          note: 'Couverture de l\'annonce d\'interdiction du 20 décembre 2010. Erik Lauer : « Les decks Survival of the Fittest ont surpassé les autres decks en Legacy. »',
        },
        {
          title: 'Instant Analysis — SCG Kansas City & San Jose Legacy Opens',
          publisher: 'Eternal Central',
          url: 'https://www.eternalcentral.com/instant-analysis-scg-kansas-city-san-jose-legacy-opens/',
          note: 'Analyse du métagame montrant la domination de Survival lors des événements SCG de fin 2010.',
        },
        {
          title: '2010 Worlds Sunday Legacy results',
          publisher: 'MTGTop8',
          url: 'https://www.mtgtop8.com/event?e=807&f=LE',
          date: '2010-12-16',
          note: 'CounterTop a remporté l\'événement mais GW Survival s\'est placé dans le top quatre.',
        },
        {
          title: 'Focus on Legacy — Combating Survival',
          publisher: 'Eternal Central',
          url: 'https://www.eternalcentral.com/focus-on-legacy-combating-survival/',
          note: 'Analyse des défis auxquels la communauté Legacy a été confrontée pour s\'adapter à la domination de Survival.',
        },
      ],
    },
  ],
  bans: [
    {
      date: '2010-12-20',
      cards: ['Survival of the Fittest'],
      explanation:
        'Survival of the Fittest a été interdit pour avoir provoqué une réduction significative de la diversité du format Legacy. Plusieurs variantes Survival — GW aggro, UG Madness et BUG combo Necrotic Ooze — ont collectivement dominé les meilleurs résultats des événements majeurs tout au long du second semestre 2010. Le DCI a déclaré que la carte avait « provoqué une réduction significative de la diversité du format compétitif ». Time Spiral a été retiré de la liste des interdictions dans la même annonce.',
      source: {
        title: 'Survival of the Fittest Banned in Legacy, No Changes in Vintage',
        publisher: 'Eternal Central',
        url: 'https://www.eternalcentral.com/survival-of-the-fittest-banned-in-legacy-no-changes-in-vintage/',
        date: '2010-12-20',
        note: 'Interdiction effective au 1er janvier 2011.',
      },
    },
  ],
  setReleases: [
    { date: '2010-02-05', name: 'Worldwake', code: 'WWK' },
    { date: '2010-04-23', name: 'Rise of the Eldrazi', code: 'ROE', note: 'Vengevine a rendu possibles les stratégies Survival' },
    { date: '2010-10-01', name: 'Scars of Mirrodin', code: 'SOM' },
  ],
  representativeDecks: [
    {
      name: 'CounterTop',
      slug: 'countertop-legacy-2010',
      period: 'Avant Rise of the Eldrazi',
      archetype: 'control',
      summary:
        'Un shell control bleu-vert-blanc qui utilise Counterbalance plus Sensei\'s Divining Top pour lock les sorts à bas coût hors de la stack. Tarmogoyf sert de clock efficace, Force of Will et Swords to Plowshares soutiennent le lock. Domine les decks fair bâtis sur des sorts bon marché mais vulnérable aux menaces à haut coût et à la discard.',
      keyCards: ['Counterbalance', 'Sensei\'s Divining Top', 'Tarmogoyf', 'Force of Will', 'Swords to Plowshares', 'Natural Order'],
    },
    {
      name: 'UG Survival Madness',
      slug: 'ug-survival-madness-legacy-2010',
      period: 'L\'été Survival',
      archetype: 'aggro',
      summary:
        'Un deck aggro bleu-vert qui utilise Survival of the Fittest pour dump Vengevine au graveyard, puis déclenche sa récurrence en jouant Basking Rootwalla et Aquamoeba. Wild Mongrel permet les défausses madness. Explosif face aux decks fair mais vulnérable à la hate graveyard.',
      keyCards: ['Survival of the Fittest', 'Vengevine', 'Basking Rootwalla', 'Wild Mongrel', 'Aquamoeba', 'Force of Will'],
    },
    {
      name: 'GW Survival',
      slug: 'gw-survival-legacy-2010',
      period: 'Domination de Survival et interdiction',
      archetype: 'midrange',
      summary:
        'Un shell midrange vert-blanc bâti autour de Survival of the Fittest tutorant Vengevine et des créatures silver-bullet. Noble Hierarch accélère, Fauna Shaman fournit un moteur de secours, Qasali Pridemage gère artefacts et enchantements. Toolbox flexible mais s\'effondre face à la hate graveyard.',
      keyCards: ['Survival of the Fittest', 'Vengevine', 'Noble Hierarch', 'Fauna Shaman', 'Qasali Pridemage', 'Knight of the Reliquary'],
    },
    {
      name: 'BUG Survival (Necrotic Ooze Combo)',
      slug: 'bug-survival-ooze-legacy-2010',
      period: 'Domination de Survival et interdiction',
      archetype: 'combo',
      summary:
        'Un deck combo bleu-noir-vert qui utilise Survival of the Fittest pour remplir le graveyard de créatures, puis joue Necrotic Ooze lui octroyant les capacités de Phyrexian Devourer plus Triskelion pour une boucle de dégâts infinis. Vengevine fournit un plan de secours. Dévastateur une fois assemblé mais vulnérable à la hate graveyard.',
      keyCards: ['Survival of the Fittest', 'Necrotic Ooze', 'Triskelion', 'Phyrexian Devourer', 'Vengevine', 'Force of Will'],
    },
    {
      name: 'Merfolk',
      slug: 'merfolk-legacy-2010',
      period: 'Avant Rise of the Eldrazi',
      archetype: 'aggro',
      summary:
        'Un deck aggro tribal mono-bleu qui pose des créatures à bas coût via Aether Vial et pump l\'équipe avec Lord of Atlantis. Cursecatcher fournit une counter-protection bon marché, Silvergill Adept se remplace, Force of Will protège le clock. Punit les decks lents mais pressé par les sweepers et le lifegain.',
      keyCards: ['Lord of Atlantis', 'Aether Vial', 'Cursecatcher', 'Silvergill Adept', 'Force of Will', 'Wasteland'],
    },
    {
      name: 'Ad Nauseam Tendrils',
      slug: 'ant-legacy-2010',
      period: 'Avant Rise of the Eldrazi',
      archetype: 'combo',
      summary:
        'Un deck combo storm noir qui enchaîne Dark Ritual, Lion\'s Eye Diamond et Infernal Tutor pour assembler un Tendrils of Agony létal. Ad Nauseam recharge la main en payant des points de vie. Goldfish au tour un ou deux mais vulnérable à la discard, aux contresorts et à la hate graveyard.',
      keyCards: ['Ad Nauseam', 'Tendrils of Agony', 'Lion\'s Eye Diamond', 'Infernal Tutor', 'Dark Ritual', 'Brainstorm'],
    },
  
    {
      name: 'Zoo',
      slug: 'zoo-legacy-2010',
      period: 'Avant Rise of the Eldrazi',
      archetype: 'aggro',
      summary:
        'Un deck aggro rouge-vert-blanc emballant les un-drops les plus efficaces du format — Wild Nacatl, Kird Ape, Steppe Lynx — soutenus par Tarmogoyf et Lightning Bolt. Vise à infliger vingt dégâts au tour quatre. Punit les ouvertures lentes mais vulnérable aux sweepers et au lifegain.',
      keyCards: ['Wild Nacatl', 'Tarmogoyf', 'Lightning Bolt', 'Kird Ape', 'Steppe Lynx'],
    },
    {
      name: 'Reanimator',
      slug: 'reanimator-legacy-2010',
      period: 'Avant Rise of the Eldrazi',
      archetype: 'combo',
      summary:
        'Un deck combo reanimator noir qui défausse Iona, Shield of Emeria ou Inkwell Leviathan, puis les ressuscite avec Reanimate ou Exhume au tour un. Iona coupe entièrement une couleur. Goldfish dévastateur mais s\'effondre face à la hate graveyard et aux contresorts.',
      keyCards: ['Reanimate', 'Exhume', 'Iona, Shield of Emeria', 'Inkwell Leviathan', 'Entomb'],
    },
    {
      name: 'Canadian Threshold',
      slug: 'canadian-threshold-legacy-2010',
      period: 'Avant Rise of the Eldrazi',
      archetype: 'tempo',
      summary:
        'Un deck tempo bleu-rouge-vert bâti sur des menaces bon marché comme Nimble Mongoose et Tarmogoyf protégées par Daze et Force of Will. Lightning Bolt dégage les blockers et finit l\'adversaire au burn. Punit les manabases gourmandes mais vulnérable aux sweepers et au lifegain.',
      keyCards: ['Nimble Mongoose', 'Tarmogoyf', 'Daze', 'Force of Will', 'Lightning Bolt'],
    },
    {
      name: 'Team America',
      slug: 'team-america-legacy-2010',
      period: 'L\'été Survival',
      archetype: 'tempo',
      summary:
        'Un deck tempo-disruption bleu-noir-vert qui pose Tombstalker comme finisher bon marché pendant que Stifle, Wasteland et Daze attaquent la manabase adverse. Dark Confidant grind du card advantage. Force of Will soutient le clock. Solide contre les decks gourmands mais pressé par Counterbalance et le lifegain.',
      keyCards: ['Tombstalker', 'Dark Confidant', 'Stifle', 'Wasteland', 'Force of Will'],
    },
    {
      name: 'BUG Survival (Necrotic Ooze)',
      slug: 'bug-survival-necrotic-ooze-legacy-2010',
      period: 'Domination de Survival et interdiction',
      archetype: 'combo',
      summary:
        'Un deck combo bleu-noir-vert qui utilise Survival of the Fittest pour stocker le graveyard avec Phyrexian Devourer, Triskelion et Vampire Hexmage, puis joue Necrotic Ooze pour un combo de dégâts infinis. Fiable et disruptif mais vulnérable à la hate graveyard.',
      keyCards: ['Survival of the Fittest', 'Necrotic Ooze', 'Phyrexian Devourer', 'Triskelion', 'Vampire Hexmage'],
    },
    {
      name: 'Dredge',
      slug: 'dredge-legacy-2010',
      period: 'Domination de Survival et interdiction',
      archetype: 'combo',
      summary:
        'Un deck combo graveyard qui abuse de dredge pour miller le deck, générant la récurrence de Narcomoeba et Ichorid. Dread Return réanime un finisher pendant que Bridge from Below produit des tokens Zombie. Cabal Therapy strip la disruption. Goldfish dévastateur mais s\'effondre face à la hate graveyard.',
      keyCards: ['Bridge from Below', 'Narcomoeba', 'Ichorid', 'Dread Return', 'Cabal Therapy'],
    },
    {
      name: 'Belcher',
      slug: 'belcher-legacy-2010',
      period: 'Domination de Survival et interdiction',
      archetype: 'combo',
      summary:
        'Un deck combo rouge quasi sans terrains qui ne joue qu\'un ou deux basics plus des tuteurs Land Grant, accélère avec Lion\'s Eye Diamond et Rite of Flame, et gagne en activant Goblin Charbelcher pour le létal ou en jouant Empty the Warrens. Pur goldfish mais extrêmement vulnérable à la disruption.',
      keyCards: ['Goblin Charbelcher', 'Empty the Warrens', 'Land Grant', 'Lion\'s Eye Diamond', 'Rite of Flame'],
    },
  ],
}

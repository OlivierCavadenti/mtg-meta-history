import type { YearFormatEntry } from '../types'

export const legacy2011Fr: YearFormatEntry = {
  year: 2011,
  format: 'legacy',
  title: 'Legacy 2011',
  subtitle: 'L\'année de Mental Misstep',
  shortLabel: 'Misstep & Delver',
  summary:
    'Le Legacy 2011 fut défini par une seule carte imprimée et bannie au cours de la même année civile. Après le bannissement de Survival of the Fittest en décembre 2010, le format connut une période saine avec CounterTop, Team America, Merfolk et une diversité de decks combo. Mental Misstep, issu de New Phyrexia, déforma le format à partir de mai, poussant la représentation des decks bleus à des niveaux records et écrasant les stratégies non-bleues. Son bannissement en septembre, combiné à l\'arrivée de Delver of Secrets et Snapcaster Mage avec Innistrad, inaugura une nouvelle ère de domination tempo qui allait façonner le Legacy pour les années à venir.',
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
        { name: 'Counterbalance', role: 'Soft lock couplé à Sensei\'s Divining Top' },
        { name: 'Sensei\'s Divining Top', role: 'Manipulation de bibliothèque et pièce de verrou' },
        { name: 'Aether Vial', role: 'Déploiement de créatures incontrable pour Merfolk' },
        { name: 'Tarmogoyf', role: 'Menace efficace dans les shells tempo BUG' },
        { name: 'Force of Will', role: 'Contresort gratuit définissant le format' },
        { name: 'Natural Order', role: 'Finition combo dans les variantes NO RUG et Bant' },
      ],
      summary:
        'Avec le bannissement de Survival of the Fittest en décembre 2010, le format s\'ouvrit considérablement. CounterTop (Counterbalance plus Sensei\'s Divining Top) émergea comme un pilier du format, verrouillant les adversaires hors du lancement de sorts. Merfolk était le deck le plus joué avec environ 10 % du champ de tournoi, offrant un plan tribal aggro solide soutenu par de la perturbation. Team America (BUG Delver/tempo) et les decks combo comme ANT et Show and Tell complétaient un métagame authentiquement diversifié. Seuls 48 % des decks gagnants jouaient Force of Will, un chiffre historiquement bas indiquant une réelle viabilité des stratégies non-bleues.',
      whyItDominated: [
        'CounterTop fournissait un soft lock quasi imbattable contre de nombreuses stratégies',
        'Merfolk combinait pression d\'horloge avec Daze et Force of Will comme perturbation',
        'Team America exploitait Hymn to Tourach et Tarmogoyf comme package tempo efficace',
        'Le format ne comptait pas de deck dominant unique, récompensant les lectures de métagame',
      ],
      whyItEnded:
        'New Phyrexia sortit en mai 2011, introduisant Mental Misstep. Ce contresort gratuit à mana phyrexian déforma immédiatement la construction de decks et invalida de nombreuses stratégies non-bleues reposant sur des sorts à un mana.',
      confidence: 'high',
      sources: [
        {
          title: '2011 Legacy Year In Review',
          publisher: 'Star City Games',
          url: 'https://articles.starcitygames.com/articles/2011-legacy-year-in-review/',
          date: '2011-12-30',
          note: 'Données complètes du métagame montrant les pourcentages d\'archétypes pré-Misstep : Merfolk 10,3 %, Junk 9,7 %, CounterTop 7,4 %.',
        },
        {
          title: 'Instant Analysis - SCG Indianapolis Legacy Open 2011',
          publisher: 'Eternal Central',
          url: 'https://www.eternalcentral.com/instant-analysis-scg-indianapolis-legacy-open-2011/',
          date: '2011-02-06',
          note: 'CounterTop remporta cet événement de 266 joueurs. La diversité du format visible dans les meilleurs résultats.',
        },
      ],
    },
    {
      id: '2011-leg-mental-misstep',
      name: 'L\'ère Mental Misstep',
      start: '2011-05',
      end: '2011-09',
      dominantDecks: ['Merfolk', 'NO RUG', 'UW Stoneblade'],
      challengers: ['Hive Mind', 'UW Landstill', 'Zoo', 'CounterTop', 'Dredge', 'Painter'],
      keyCards: [
        { name: 'Mental Misstep', role: 'Contresort gratuit pour les sorts à un mana ; déformant le format' },
        { name: 'Stoneforge Mystic', role: 'Tuteur d\'équipement permettant les archétypes Stoneblade' },
        { name: 'Batterskull', role: 'Cible principale de Stoneforge issue de New Phyrexia' },
        { name: 'Lord of Atlantis', role: 'Seigneur Merfolk central dans le deck le plus joué du format' },
        { name: 'Natural Order', role: 'Kill via Progenitus dans les builds NO RUG' },
      ],
      summary:
        'L\'arrivée de Mental Misstep en mai 2011 remodela fondamentalement le Legacy. La carte apparaissait dans 76,3 % des listes gagnantes, en faisant le sort le plus omniprésent depuis Brainstorm. Les decks bleus devinrent plus dominants que jamais, pouvant jouer Misstep aux côtés de leur suite existante de contresorts gratuits. Les stratégies non-bleues reposant sur des sorts à un mana -- Goblins, Junk, High Tide, Affinity -- s\'effondrèrent. Merfolk grimpa à 12,5 % du champ de tournoi. Au GP Providence (1 178 joueurs), James Rynkiewicz l\'emporta avec Zenith Bant, tandis que NO RUG et UW Stoneblade devinrent des piliers du format. La famille d\'archétypes Stoneblade, propulsée par Stoneforge Mystic cherchant Batterskull, représentait plus de 8 % du champ.',
      whyItDominated: [
        'Mental Misstep contrait gratuitement les sorts clés à un mana (Brainstorm, Swords to Plowshares, Aether Vial, Goblin Lackey)',
        'Les decks bleus intégraient Misstep le plus efficacement aux côtés de Force of Will et Daze',
        'Les decks non-bleus reposant sur des un-drops étaient pénalisés de manière disproportionnée',
        'Stoneforge Mystic cherchant Batterskull offrait aux decks bleu-blanc un package de menaces compact',
      ],
      whyItEnded:
        'Wizards of the Coast interdit Mental Misstep le 20 septembre 2011, effectif au 1er octobre. La raison invoquée : au lieu d\'aider les decks non-bleus à combattre le combo comme prévu, la carte avait rendu les decks bleus plus dominants que jamais. Le DCI visait à restaurer le métagame diversifié qui existait avant son impression.',
      confidence: 'high',
      sources: [
        {
          title: 'Too Much Information - Grand Prix Providence',
          publisher: 'Star City Games',
          url: 'https://articles.starcitygames.com/articles/too-much-information-grand-prix-providence/',
          date: '2011-05-29',
          note: 'Données du métagame du GP Providence : 1 178 joueurs, Merfolk 14,48 %, Team America 9,65 %. Bant remporta l\'événement.',
        },
        {
          title: 'Instant Analysis - SCG Orlando Legacy Open 2011',
          publisher: 'Eternal Central',
          url: 'https://www.eternalcentral.com/instant-analysis-scg-orlando-legacy-open-2011/',
          date: '2011-05-15',
          note: 'Premier événement Legacy majeur avec Mental Misstep légal. 146 joueurs.',
        },
        {
          title: '2011 Legacy Year In Review',
          publisher: 'Star City Games',
          url: 'https://articles.starcitygames.com/articles/2011-legacy-year-in-review/',
          date: '2011-12-30',
          note: 'Mental Misstep apparaissait dans 76,3 % des decks gagnants durant cette période.',
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
        { name: 'Delver of Secrets', role: 'Menace efficace à un mana transformée, issue d\'Innistrad' },
        { name: 'Snapcaster Mage', role: 'Récursion de sorts et tempo, issu d\'Innistrad' },
        { name: 'Stoneforge Mystic', role: 'Tuteur d\'équipement ancrant les archétypes Blade' },
        { name: 'Nimble Mongoose', role: 'Menace avec linceul dans les shells Canadian Threshold' },
        { name: 'Knight of the Reliquary', role: 'Menace clé dans Maverick, le premier deck non-bleu de premier plan' },
      ],
      summary:
        'Le bannissement de Mental Misstep coïncida avec la sortie d\'Innistrad, qui livra deux cartes appelées à définir le Legacy pendant des années : Delver of Secrets et Snapcaster Mage. Les joueurs découvrirent rapidement que le shell Canadian Threshold (tempo RUG avec Nimble Mongoose, Daze, Stifle et Wasteland) était le foyer idéal pour Delver. RUG Delver remporta trois SCG Opens consécutifs et s\'établit comme le meilleur deck incontesté en fin d\'année à 12,3 % du champ de tournoi. UW Stoneblade restait puissant à 14,4 %. Naya Maverick émergea comme le premier deck non-bleu de premier plan depuis Goblins, et les stratégies aggro-control passèrent de 21 % à plus de 50 % du métagame. Le format était plus rapide, plus interactif et plus orienté tempo que jamais.',
      whyItDominated: [
        'Delver of Secrets fournissait un volant 3/2 pour un mana dans les decks riches en sorts',
        'Snapcaster Mage offrait du card advantage aux decks tempo sans sacrifier la vitesse',
        'Le shell Canadian Threshold convenait parfaitement à Delver combiné avec Wasteland et Daze',
        'UW Stoneblade offrait une alternative plus contrôlante avec Stoneforge Mystic',
      ],
      whyItEnded:
        'L\'ère ne prit pas fin en 2011. RUG Delver et Stoneblade continuèrent de dominer en 2012, Delver of Secrets devenant la créature définissant les stratégies tempo du Legacy pour les années suivantes.',
      confidence: 'high',
      sources: [
        {
          title: 'Analyzing The Legacy Metagame',
          publisher: 'Star City Games',
          url: 'https://articles.starcitygames.com/articles/analyzing-the-legacy-metagame/',
          date: '2011-11-15',
          note: 'RUG Tempo remporta trois SCG Opens consécutifs et était le meilleur deck incontesté.',
        },
        {
          title: '2011 Legacy Year In Review',
          publisher: 'Star City Games',
          url: 'https://articles.starcitygames.com/articles/2011-legacy-year-in-review/',
          date: '2011-12-30',
          note: 'Données post-bannissement : UW Blade 14,4 %, RUG Tempo 12,3 %, aggro-control à 50,4 % du métagame.',
        },
        {
          title: 'The Legacy of Innistrad',
          publisher: 'Untap Leagues',
          url: 'https://untapleagues.com/the-legacy-of-innistrad/',
          note: 'Analyse de l\'entrée de Delver et Snapcaster Mage dans le format Legacy.',
        },
      ],
    },
  ],
  bans: [
    {
      date: '2011-09-20',
      cards: ['Mental Misstep'],
      explanation:
        'Mental Misstep avait été conçu avec du mana phyrexian pour permettre aux decks non-bleus de combattre le combo, à l\'image de Force of Will. Au lieu de cela, la carte rendit les decks bleus plus dominants que jamais. Elle apparaissait dans plus de 76 % des listes gagnantes, et les stratégies non-bleues déclinèrent fortement. Le DCI l\'interdit pour restaurer le métagame diversifié qui existait avant son impression.',
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
    { date: '2011-05-13', name: 'New Phyrexia', code: 'NPH', note: 'Introduction de Mental Misstep' },
    { date: '2011-09-30', name: 'Innistrad', code: 'ISD', note: 'Delver of Secrets et Snapcaster Mage' },
  ],
  representativeDecks: [
    {
      name: 'CounterTop',
      slug: 'countertop-legacy-2011',
      period: 'Post-Survival',
      archetype: 'control',
      summary:
        'Un deck control bleu-vert-blanc qui utilise Counterbalance plus Sensei\'s Divining Top pour lock les sorts bon marché. Tarmogoyf et Jace, the Mind Sculptor fournissent les menaces et le card advantage, Force of Will et Swords to Plowshares soutiennent le lock. Domine les decks fair mais vulnérable aux menaces à haut coût.',
      keyCards: ['Counterbalance', 'Sensei\'s Divining Top', 'Force of Will', 'Tarmogoyf', 'Swords to Plowshares', 'Jace, the Mind Sculptor'],
      decklistPending: true,
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
      period: 'L\'ère Mental Misstep',
      archetype: 'aggro',
      summary:
        'Un deck aggro tribal mono-bleu qui pose des créatures via Aether Vial et pump l\'équipe avec Lord of Atlantis et Merrow Reejerey. Force of Will, Daze et Mental Misstep protègent le clock. Punit les decks lents mais pressé par les sweepers et le lifegain.',
      keyCards: ['Lord of Atlantis', 'Merrow Reejerey', 'Aether Vial', 'Force of Will', 'Daze', 'Mental Misstep', 'Cursecatcher'],
      decklistPending: true,
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
      period: 'L\'ère Mental Misstep',
      archetype: 'midrange',
      summary:
        'Un hybride midrange-combo vert-blanc-bleu qui utilise Green Sun\'s Zenith et Natural Order pour tutorer Progenitus ou Knight of the Reliquary. Noble Hierarch accélère, Swords to Plowshares gère les menaces. Toolbox flexible mais vulnérable à la hate graveyard et à la discard.',
      keyCards: ['Green Sun\'s Zenith', 'Natural Order', 'Knight of the Reliquary', 'Noble Hierarch', 'Progenitus', 'Swords to Plowshares'],
      decklistPending: true,
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
        'Un deck tempo-disruption bleu-noir-vert qui combine Tarmogoyf et Tombstalker comme menaces bon marché avec Hymn to Tourach pour la discard. Wasteland et Daze attaquent le mana, Force of Will protège les tours clés. Solide contre les decks gourmands mais pressé par Counterbalance.',
      keyCards: ['Tarmogoyf', 'Tombstalker', 'Hymn to Tourach', 'Force of Will', 'Daze', 'Wasteland', 'Dark Confidant'],
      decklistPending: true,
    },
    {
      name: 'UW Stoneblade',
      slug: 'uw-stoneblade-legacy-2011',
      period: 'Post-Misstep',
      archetype: 'control',
      summary:
        'Un deck control bleu-blanc qui utilise Stoneforge Mystic pour tutorer Batterskull comme finisher lifegain récurrent. Jace, the Mind Sculptor et Snapcaster Mage génèrent du card advantage, Swords to Plowshares répond aux créatures. Solide contre les decks fair mais pressé par le combo rapide.',
      keyCards: ['Stoneforge Mystic', 'Batterskull', 'Jace, the Mind Sculptor', 'Snapcaster Mage', 'Swords to Plowshares', 'Force of Will'],
      decklistPending: true,
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
        'Un deck tempo bleu-rouge-vert bâti sur Delver of Secrets, Nimble Mongoose et Tarmogoyf — menaces puissantes bon marché protégées par Daze, Force of Will et les flashbacks de Snapcaster Mage. Lightning Bolt dégage les blockers. Punit les manabases gourmandes mais vulnérable aux sweepers.',
      keyCards: ['Delver of Secrets', 'Nimble Mongoose', 'Tarmogoyf', 'Snapcaster Mage', 'Lightning Bolt', 'Daze', 'Force of Will', 'Wasteland', 'Stifle'],
      decklistPending: true,
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
        'Un combo storm noir qui enchaîne Dark Ritual, Lion\'s Eye Diamond et Infernal Tutor pour assembler un Tendrils of Agony létal. Ad Nauseam pioche le deck, Brainstorm lisse la consistance. Goldfish au tour un ou deux mais vulnérable à la discard, aux contresorts et à la hate graveyard.',
      keyCards: ['Ad Nauseam', 'Tendrils of Agony', 'Infernal Tutor', 'Lion\'s Eye Diamond', 'Dark Ritual', 'Brainstorm', 'Ponder'],
      decklistPending: true,
    },
    {
      name: 'Maverick',
      slug: 'maverick-legacy-2011',
      period: 'Post-Misstep',
      archetype: 'midrange',
      summary:
        'Un deck midrange vert-blanc qui tutore les créatures avec Green Sun\'s Zenith et Knight of the Reliquary fetchant les terrains utilitaires. Mother of Runes protège les menaces clés, Thalia, Guardian of Thraben ralentit les sorts adverses, Noble Hierarch accélère. Résistant mais pressé par le combo et le burn.',
      keyCards: ['Knight of the Reliquary', 'Green Sun\'s Zenith', 'Mother of Runes', 'Noble Hierarch', 'Thalia, Guardian of Thraben', 'Wasteland', 'Swords to Plowshares'],
      decklistPending: true,
      source: {
        title: '2011 Legacy Year In Review',
        publisher: 'Star City Games',
        url: 'https://articles.starcitygames.com/articles/2011-legacy-year-in-review/',
        date: '2011-12-30',
        note: 'Maverick noté comme le premier deck non-bleu de premier plan depuis Goblins.',
      },
    },
  
    {
      name: 'Show and Tell',
      slug: 'show-and-tell-legacy-2011',
      period: 'Post-Survival',
      archetype: 'combo',
      summary:
        'Un deck combo bleu qui utilise Show and Tell ou Sneak Attack pour tricher Emrakul, the Aeons Torn en jeu au tour trois pour un kill en un coup. Ponder lisse les pioches, Force of Will protège le tour combo. Goldfish dévastateur mais vulnérable à la disruption.',
      keyCards: ['Show and Tell', 'Emrakul, the Aeons Torn', 'Sneak Attack', 'Ponder', 'Force of Will'],
      decklistPending: true,
    },
    {
      name: 'Junk',
      slug: 'junk-legacy-2011',
      period: 'Post-Survival',
      archetype: 'midrange',
      summary:
        'Un deck midrange noir-vert-blanc combinant Tarmogoyf et Knight of the Reliquary comme menaces efficaces avec Stoneforge Mystic pour les équipements, Swords to Plowshares pour le removal, et Thoughtseize pour la disruption. Grindy et résistant mais lent face au combo.',
      keyCards: ['Tarmogoyf', 'Knight of the Reliquary', 'Stoneforge Mystic', 'Swords to Plowshares', 'Thoughtseize'],
      decklistPending: true,
    },
    {
      name: 'Goblins',
      slug: 'goblins-legacy-2011',
      period: 'Post-Survival',
      archetype: 'aggro',
      summary:
        'Un deck tribal Goblin mono-rouge qui triche des menaces avec Goblin Lackey, tutore via Goblin Matron, et recharge avec Goblin Ringleader. Aether Vial pose des créatures à instant speed, Wasteland attaque la manabase. Punit les decks fair mais pressé par les sweepers.',
      keyCards: ['Goblin Lackey', 'Goblin Ringleader', 'Goblin Matron', 'Aether Vial', 'Wasteland'],
      decklistPending: true,
    },
    {
      name: 'MUD',
      slug: 'mud-legacy-2011',
      period: 'Post-Survival',
      archetype: 'prison',
      summary:
        'Un deck prison mono-brun bâti sur Metalworker produisant un mana massif pour Wurmcoil Engine et Karn, Silver Golem. Trinisphere et Chalice of the Void lock les sorts bon marché. Dévastateur face aux decks bleus mais vulnérable à la destruction de terrains et à la hate artefact dédiée.',
      keyCards: ['Metalworker', 'Wurmcoil Engine', 'Trinisphere', 'Chalice of the Void', 'Karn, Silver Golem'],
      decklistPending: true,
    },
    {
      name: 'NO RUG',
      slug: 'no-rug-legacy-2011',
      period: 'Post-Survival',
      archetype: 'combo',
      summary:
        'Un deck combo bleu-vert qui utilise Natural Order pour sacrifier une créature comme Noble Hierarch contre Progenitus au tour deux ou trois. Tarmogoyf fournit un clock de secours, Force of Will protège le combo. Rapide et disruptif mais vulnérable à la hate graveyard et exil.',
      keyCards: ['Natural Order', 'Progenitus', 'Noble Hierarch', 'Tarmogoyf', 'Force of Will'],
      decklistPending: true,
    },
    {
      name: 'Hive Mind',
      slug: 'hive-mind-legacy-2011',
      period: 'L\'ère Mental Misstep',
      archetype: 'combo',
      summary:
        'Un deck combo bleu qui résout Show and Tell mettant Hive Mind en jeu, puis joue Pact of Negation ou Slaughter Pact — copies que l\'adversaire ne peut payer à l\'upkeep. Force of Will protège le tour combo. Goldfish dévastateur mais vulnérable à la hate graveyard et à la disruption.',
      keyCards: ['Hive Mind', 'Pact of Negation', 'Slaughter Pact', 'Show and Tell', 'Force of Will'],
      decklistPending: true,
    },
    {
      name: 'UW Landstill',
      slug: 'uw-landstill-legacy-2011',
      period: 'L\'ère Mental Misstep',
      archetype: 'control',
      summary:
        'Un deck control bleu-blanc centré sur Standstill plus des manlands comme Mishra\'s Factory et Mutavault — l\'adversaire casse la parité défavorablement pendant que le joueur Landstill attaque avec ses terrains. Swords to Plowshares et Force of Will tiennent le board. Lent mais grindy face aux decks fair.',
      keyCards: ['Standstill', 'Mishra\'s Factory', 'Mutavault', 'Swords to Plowshares', 'Force of Will'],
      decklistPending: true,
    },
    {
      name: 'Zoo',
      slug: 'zoo-legacy-2011',
      period: 'L\'ère Mental Misstep',
      archetype: 'aggro',
      summary:
        'Un deck aggro rouge-vert-blanc emballant des un et deux-drops efficaces — Wild Nacatl, Tarmogoyf, Knight of the Reliquary — soutenus par Lightning Bolt et Path to Exile. Vise à infliger vingt dégâts au tour quatre. Punit les decks lents mais vulnérable aux sweepers et au lifegain.',
      keyCards: ['Wild Nacatl', 'Tarmogoyf', 'Knight of the Reliquary', 'Lightning Bolt', 'Path to Exile'],
      decklistPending: true,
    },
    {
      name: 'Dredge',
      slug: 'dredge-legacy-2011',
      period: 'L\'ère Mental Misstep',
      archetype: 'combo',
      summary:
        'Un combo graveyard qui abuse de dredge pour miller la library, générant la récurrence de Narcomoeba et Ichorid. Dread Return réanime un finisher, Bridge from Below produit des tokens Zombie, Cabal Therapy strip la disruption. Goldfish dévastateur mais s\'effondre face à la hate graveyard.',
      keyCards: ['Bridge from Below', 'Narcomoeba', 'Ichorid', 'Dread Return', 'Cabal Therapy'],
      decklistPending: true,
    },
    {
      name: 'Painter',
      slug: 'painter-legacy-2011',
      period: 'L\'ère Mental Misstep',
      archetype: 'combo',
      summary:
        'Un deck combo rouge qui associe Painter\'s Servant nommant une couleur avec Grindstone pour un mill-out en un coup. Imperial Recruiter tutore les pièces combo, Goblin Welder recur les artefacts, Red Elemental Blast sert aussi de protection. Dévastateur face au bleu mais vulnérable au removal d\'artefact.',
      keyCards: ['Painter\'s Servant', 'Grindstone', 'Imperial Recruiter', 'Goblin Welder', 'Red Elemental Blast'],
      decklistPending: true,
    },
    {
      name: 'Reanimator',
      slug: 'reanimator-legacy-2011',
      period: 'Post-Misstep',
      archetype: 'combo',
      summary:
        'Un combo reanimator noir qui défausse Griselbrand ou Iona via Entomb, puis les ressuscite avec Reanimate ou Exhume au tour un. Griselbrand pioche dans plus de combo, Iona coupe une couleur. Goldfish dévastateur mais s\'effondre face à la hate graveyard.',
      keyCards: ['Entomb', 'Reanimate', 'Exhume', 'Griselbrand', 'Iona, Shield of Emeria'],
      decklistPending: true,
    },
    {
      name: 'Esper Stoneblade',
      slug: 'esper-stoneblade-legacy-2011',
      period: 'Post-Misstep',
      archetype: 'control',
      summary:
        'Un deck control bleu-noir-blanc qui utilise Stoneforge Mystic pour tutorer Batterskull pendant que Jace, the Mind Sculptor construit du card advantage. Swords to Plowshares et Thoughtseize fournissent l\'interaction flexible. Solide contre les decks fair mais vulnérable au combo rapide.',
      keyCards: ['Stoneforge Mystic', 'Batterskull', 'Jace, the Mind Sculptor', 'Swords to Plowshares', 'Thoughtseize'],
      decklistPending: true,
    },
    {
      name: 'UR Delver',
      slug: 'ur-delver-legacy-2011',
      period: 'Post-Misstep',
      archetype: 'tempo',
      summary:
        'Un deck tempo bleu-rouge centré sur Delver of Secrets flippant tôt, soutenu par Lightning Bolt, Daze et Force of Will. Ponder lisse les pioches et aide à stacker le top pour Delver. Punit les manabases gourmandes mais vulnérable aux sweepers et au lifegain.',
      keyCards: ['Delver of Secrets', 'Lightning Bolt', 'Daze', 'Force of Will', 'Ponder'],
      decklistPending: true,
    },
  ],
}

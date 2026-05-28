import type { YearFormatEntry } from '../types'

export const standard2002Fr: YearFormatEntry = {
  year: 2002,
  format: 'standard',
  title: 'Standard 2002',
  subtitle: 'Psychatog et le cimetière',
  shortLabel: 'L\'ère Psychatog',
  summary:
    'Le Standard 2002 a été défini par l\'intersection Odyssey-Invasion, où les mécaniques de cimetière rencontraient de puissantes cartes or. Psychatog a émergé comme le deck signature du format, combinant countermagic, pioche et un seul finisseur dévastateur. UG Madness offrait une alternative tempo, utilisant Wild Mongrel et les cartes madness pour une agression hyper-efficace. Mono-Black Control exploitait Cabal Coffers pour un mana énorme. À l\'automne, les thèmes tribaux d\'Onslaught ont commencé à apparaître, mais l\'année appartenait à Psychatog. Carlos Romao a remporté le Championnat du Monde 2002 avec le deck, affichant un bilan parfait de 6-0 en Standard.',
  headlineDeck: 'Psychatog',
  eras: [
    {
      id: '2002-std-atog',
      name: 'L\'ascension de Psychatog',
      start: '2002-01',
      end: '2002-05',
      dominantDecks: ['Psychatog'],
      challengers: ['UG Madness', 'Mono-Black Control', 'Opposition'],
      keyCards: [
        { name: 'Psychatog', role: 'Finisseur qui grossissait en consommant la main et le cimetière' },
        { name: 'Upheaval', role: 'Bouton de réinitialisation renvoyant tous les permanents, joué avec du mana flottant vers Psychatog' },
        { name: 'Fact or Fiction', role: 'Sélection de cartes premium, produisant souvent quatre cartes ou plus de valeur' },
        { name: 'Counterspell', role: 'Contresort absolu, l\'épine dorsale du contrôle bleu' },
      ],
      summary:
        'Les decks Psychatog combinaient des éléments de contrôle bleu-noir avec un finisseur létal. Le jeu signature consistait à faire flotter du mana, lancer Upheaval pour tout renvoyer, puis rejouer Psychatog et le nourrir avec l\'intégralité du cimetière. Fact or Fiction fournissait un avantage de cartes qui alimentait à la fois le jeu de contrôle et le kill Psychatog. Le deck exigeait un jeu précis et récompensait les pilotes expérimentés.',
      whyItDominated: [
        'Upheaval plus Psychatog était une victoire quasi garantie si résolu',
        'Fact or Fiction fournissait un avantage de cartes surclassant les autres sorts de pioche',
        'Le shell UB avait accès à un countermagic et un removal premium',
        'Psychatog lui-même ne nécessitait aucune autre carte pour menacer un kill létal une fois le cimetière plein',
      ],
      whyItEnded:
        'Judgment en mai a apporté de nouveaux outils qui ont diversifié le format. Les decks Mirari\'s Wake se sont imposés comme une alternative contrôle puissante, et le métagame s\'est ajusté autour de la menace Psychatog.',
      confidence: 'medium',
      sources: [
        {
          title: 'World Championship Decks/2002',
          publisher: 'MTG Wiki',
          url: 'https://mtg.fandom.com/wiki/World_Championship_Decks/2002',
          note: 'Carlos Romao a remporté les Worlds 2002 avec Psychatog, faisant 6-0 en Standard avec un bilan de 12-0 en parties.',
        },
        {
          title: 'MTGTop8 - Standard 2002 metagame',
          publisher: 'MTGTop8',
          url: 'https://www.mtgtop8.com/format?f=ST',
          note: 'Résultats de tournois montrant Psychatog et UG Madness comme archétypes dominants.',
        },
      ],
    },
    {
      id: '2002-std-diversity',
      name: 'Madness et Wake',
      start: '2002-05',
      end: '2002-10',
      dominantDecks: ['Psychatog', 'UG Madness'],
      challengers: ['Wake', 'Mono-Black Control', 'Squirrel Opposition'],
      keyCards: [
        { name: 'Wild Mongrel', role: 'Outlet de défausse activant madness gratuitement ou à coût réduit' },
        { name: 'Basking Rootwalla', role: 'Créature gratuite lorsqu\'elle est défaussée via madness' },
        { name: 'Circular Logic', role: 'Contresort activé par madness pour un seul mana bleu' },
        { name: 'Mirari\'s Wake', role: 'Doublait le mana et boostait les créatures, moteur des decks contrôle' },
        { name: 'Cabal Coffers', role: 'Génération de mana massive pour les stratégies mono-noires' },
      ],
      summary:
        'Le format en milieu d\'année affichait une diversité remarquable. UG Madness offrait un plan tempo-aggro capable de déployer des menaces gratuitement via la mécanique madness. Les decks Mirari\'s Wake utilisaient l\'enchantement pour doubler leur mana et submerger les adversaires. Mono-Black Control avec Cabal Coffers générait un mana énorme pour Corrupt et Mind Sludge. Squirrel Opposition utilisait Squirrel Nest et Opposition pour verrouiller le plateau. La performance dominante de Carlos Romao aux Worlds a cimenté Psychatog comme le deck définissant l\'année.',
      whyItDominated: [
        'UG Madness déployait des menaces à coût réduit tout en gardant du countermagic disponible',
        'Wild Mongrel activait l\'intégralité du moteur madness sans désavantage de cartes',
        'Les decks Wake exploitaient le mana doublé pour lancer plusieurs sorts par tour',
        'Mono-Black Control punissait les decks multicolores avec de la défausse ciblée et Corrupt',
      ],
      whyItEnded:
        'Onslaught est arrivé en octobre, introduisant les mécaniques tribales et les types de créatures qui définiraient l\'année suivante. La rotation a retiré le bloc Invasion et la Septième Édition, emportant Fires, Fact or Fiction et Flametongue Kavu.',
      confidence: 'medium',
      sources: [
        {
          title: 'Worlds 2002 - Carlos Romao Psychatog',
          publisher: 'MTGGoldfish',
          url: 'https://www.mtggoldfish.com/deck/5693683',
          note: 'La liste gagnante Psychatog de Carlos Romao au Championnat du Monde 2002.',
        },
        {
          title: 'World Championship Decks/2002',
          publisher: 'MTG Wiki',
          url: 'https://mtg.fandom.com/wiki/World_Championship_Decks/2002',
          note: 'Inclut Squirrel Opposition, Red Zone 2K2 et d\'autres decks de championnat.',
        },
      ],
    },
    {
      id: '2002-std-onslaught',
      name: 'Psychatog et UG Madness persistent',
      start: '2002-10',
      end: '2002-12',
      dominantDecks: ['Psychatog', 'UG Madness'],
      challengers: ['Goblin Sligh', 'Mono-Black Control', 'Wake'],
      keyCards: [
        { name: 'Goblin Piledriver', role: 'Payoff Goblin explosif qui frappait plus fort avec chaque allié' },
        { name: 'Onslaught fetchlands', role: 'Mana fixing qui affinait le deck' },
        { name: 'Wrath of God', role: 'Sweeper essentiel contre les stratégies tribales créatures' },
      ],
      summary:
        'Onslaught a introduit les synergies tribales qui définiraient le Standard pendant des années. Les Goblins sont apparus comme une tribu agressive, avec Goblin Piledriver menaçant des dégâts énormes. Les fetchlands ont amélioré la régularité du mana dans tous les archétypes. Cependant, les decks de l\'ère Odyssey sont restés dominants jusqu\'à la fin de l\'année, car les stratégies tribales avaient besoin de davantage de support de Legions et Scourge pour atteindre leur apogée.',
      whyItDominated: [
        'Psychatog et UG Madness disposaient de stratégies établies et affinées que les nouveaux decks ne pouvaient pas immédiatement égaler',
        'Les fetchlands d\'Onslaught amélioraient les archétypes existants plus qu\'ils n\'en créaient de nouveaux',
        'Les stratégies tribales nécessitaient des extensions de support supplémentaires pour atteindre la masse critique',
        'Les decks basés sur le cimetière d\'Odyssey restaient puissants dans le nouveau pool de cartes',
      ],
      whyItEnded:
        'Legions début 2003 fournirait la densité de créatures tribales dont les Goblins et les autres tribus avaient besoin pour rivaliser. Goblin Bidding émergerait comme le deck aggro de référence du format.',
      confidence: 'medium',
      sources: [
        {
          title: 'MTGTop8 - Standard late 2002',
          publisher: 'MTGTop8',
          url: 'https://www.mtgtop8.com/format?f=ST',
          note: 'Résultats de tournois de la période de transition Standard ère Onslaught.',
        },
      ],
    },
  ],
  bans: [],
  setReleases: [
    { date: '2002-02-04', name: 'Torment', code: 'TOR', note: 'Extension alignée noir, complète la mécanique madness avec Basking Rootwalla et Circular Logic' },
    { date: '2002-05-27', name: 'Judgment', code: 'JUD', note: 'Extension alignée vert/blanc, introduit Mirari\'s Wake' },
    { date: '2002-10-07', name: 'Onslaught', code: 'ONS', note: 'Rotation du Standard : le bloc Invasion et la Septième Édition sortent du format. Les thèmes tribaux commencent' },
  ],
  representativeDecks: [
    {
      name: 'Psychatog',
      slug: 'psychatog-standard-2002',
      period: 'L\'ascension de Psychatog',
      archetype: 'control',
      summary:
        'Un deck control bleu-noir qui utilise Psychatog comme kill en une carte — se boostant en exilant les cartes du graveyard et en défaussant la main. Counterspell et Fact or Fiction construisent l\'avantage, Upheaval reset le board vers un tour Psychatog létal. Dévastateur face aux decks fair mais vulnérable à la hate graveyard et à la discard.',
      keyCards: ['Psychatog', 'Upheaval', 'Fact or Fiction', 'Counterspell', 'Nightscape Familiar'],
      source: {
        title: 'Carlos Romao Psychatog - Worlds 2002',
        publisher: 'MTGGoldfish',
        url: 'https://www.mtggoldfish.com/deck/5693683',
      },
    },
    {
      name: 'UG Madness',
      slug: 'ug-madness-standard-2002',
      period: 'Madness et Wake',
      archetype: 'tempo',
      summary:
        'Un deck tempo bleu-vert qui abuse des coûts madness — défaussant Basking Rootwalla et Arrogant Wurm à Wild Mongrel pour des menaces rapides et bon marché. Circular Logic soutient le board pendant que Wonder donne vol depuis le graveyard. Agressif et résistant, mais s\'effondre face aux sweepers précoces et à la hate graveyard.',
      keyCards: ['Wild Mongrel', 'Basking Rootwalla', 'Circular Logic', 'Arrogant Wurm', 'Wonder'],
      source: {
        title: 'MTGTop8 - UG Madness decklists 2002',
        publisher: 'MTGTop8',
        url: 'https://www.mtgtop8.com/format?f=ST',
      },
    },
    {
      name: 'Mono-Black Control',
      slug: 'mbc-standard-2002',
      period: 'Madness et Wake',
      archetype: 'control',
      summary:
        'Un deck control mono-noir alimenté par Cabal Coffers produisant un mana massif, nourrissant Corrupt et Mind Sludge à la fois comme removal et finisher. Mutilate balaie les petites créatures et Nantuko Shade scale avec le mana. Inévitable face à la plupart des decks mais vulnérable à l\'aggro rapide et au control plein de contresorts.',
      keyCards: ['Cabal Coffers', 'Corrupt', 'Mind Sludge', 'Mutilate', 'Nantuko Shade'],
      source: {
        title: 'MTGTop8 - Mono-Black Control 2002',
        publisher: 'MTGTop8',
        url: 'https://www.mtgtop8.com/format?f=ST',
      },
    },
    {
      name: 'Wake',
      slug: 'wake-standard-2002',
      period: 'Madness et Wake',
      archetype: 'control',
      summary:
        'Un deck control vert-blanc-bleu centré sur Mirari\'s Wake qui double le mana et pump les créatures. Wrath of God reset, Decree of Justice produit une armée de tokens finisseurs, et Compulsion plus Deep Analysis rechargent la main. Inévitable face aux decks fair mais lent face au combo rapide.',
      keyCards: ['Mirari\'s Wake', 'Wrath of God', 'Decree of Justice', 'Compulsion', 'Deep Analysis'],
      source: {
        title: 'MTGTop8 - Wake decklists 2002',
        publisher: 'MTGTop8',
        url: 'https://www.mtgtop8.com/format?f=ST',
      },
    },
  ],
}

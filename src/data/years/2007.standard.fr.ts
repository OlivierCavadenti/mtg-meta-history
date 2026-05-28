import type { YearFormatEntry } from '../types'

export const standard2007Fr: YearFormatEntry = {
  year: 2007,
  format: 'standard',
  title: 'Standard 2007',
  subtitle: 'La créativité Time Spiral et le virage Lorwyn',
  shortLabel: 'De Dragonstorm a Doran',
  summary:
    'Le Standard 2007 était défini par le format Time Spiral-Ravnica, l\'un des environnements les plus exigeants en termes de compétences de l\'histoire du jeu. Dragonstorm portait l\'élan de sa victoire aux Worlds 2006, mais UB Teachings s\'est imposé comme le deck contrôle de référence, utilisant Mystical Teachings pour trouver des rituels à réponse unique. Mono-Blue Pickles a introduit un soft lock basé sur morph avec Brine Elemental et Vesuvan Shapeshifter. Gruul Aggro et Dredge maintenaient l\'honnêteté du format. La rotation Lorwyn en octobre a apporté des stratégies tribales et les premiers planeswalkers, culminant avec la victoire de Uri Peleg en Doran Rock aux Worlds 2007 à New York.',
  headlineDeck: 'UB Teachings',
  eras: [
    {
      id: '2007-std-dragonstorm',
      name: 'L\'hiver Dragonstorm',
      start: '2007-01',
      end: '2007-04',
      dominantDecks: ['Dragonstorm', 'UB Teachings'],
      challengers: ['Dredge', 'Boros Deck Wins', 'Gruul Aggro', 'UW Martyr-Proclamation'],
      keyCards: [
        { name: 'Dragonstorm', role: 'Finisseur storm cherchant des dragons létaux' },
        { name: 'Mystical Teachings', role: 'Tuteur à vitesse d\'instant trouvant des réponses ciblées' },
        { name: 'Damnation', role: 'Wrath of God noir issu de Planar Chaos' },
        { name: 'Sulfur Elemental', role: 'Créature flash punissant les stratégies white weenie' },
        { name: 'Martyr of Sands', role: 'Moteur de gain de vie massif associé à Proclamation of Rebirth' },
      ],
      summary:
        'Le format début 2007 était dominé par la menace Dragonstorm héritée des Worlds 2006. UB Teachings s\'est rapidement imposé comme son contrepoint, utilisant Mystical Teachings pour trouver la bonne réponse au bon moment, qu\'il s\'agisse de contresorts, de removal ou de conditions de victoire. Planar Chaos en février a ajouté Damnation (offrant au noir son propre Wrath) et Sulfur Elemental. Dredge exploitait le cimetière avec Stinkweed Imp et Life from the Loam. UW Martyr-Proclamation utilisait Martyr of Sands avec Proclamation of Rebirth pour atteindre des totaux de vie massifs, bloquant indéfiniment les stratégies agressives.',
      whyItDominated: [
        'Dragonstorm restait une menace constante de kill au tour quatre',
        'Mystical Teachings donnait aux decks contrôle UB une flexibilité sans précédent pour trouver des réponses',
        'Damnation de Planar Chaos offrait au contrôle à base noire un sweeper de premier plan',
        'La dynamique combo-contrôle créait un métagame riche exigeant un choix de deck minutieux',
      ],
      whyItEnded:
        'Future Sight en mai a introduit de nouveaux outils diversifiant davantage le format. Tarmogoyf a renforcé les stratégies agressives, et Mono-Blue Pickles est apparu comme un troisième archétype majeur.',
      confidence: 'high',
      sources: [
        {
          title: 'MTGTop8 - Standard debut 2007',
          publisher: 'MTGTop8',
          url: 'https://www.mtgtop8.com/format?f=ST',
          note: 'Résultats de tournois montrant Dragonstorm et UB Teachings comme top decks début 2007.',
        },
        {
          title: 'Down And Dirty - The Top 10 Decks of 2007',
          publisher: 'Star City Games',
          url: 'https://articles.starcitygames.com/articles/down-and-dirty-the-top-10-decks-of-2007/',
          note: 'Classement rétrospectif des meilleurs decks Standard de la saison 2007.',
        },
      ],
    },
    {
      id: '2007-std-pickles',
      name: 'L\'été Pickles et Goyf',
      start: '2007-04',
      end: '2007-10',
      dominantDecks: ['UB/UBx Teachings', 'Mono-Blue Pickles'],
      challengers: ['Gruul Aggro', 'Dragonstorm', 'UG Tarmogoyf Aggro', 'Dredge', 'Angelfire'],
      keyCards: [
        { name: 'Brine Elemental', role: 'Pièce de lock morph empêchant l\'adversaire de dégager' },
        { name: 'Vesuvan Shapeshifter', role: 'Copie Brine Elemental pour répéter le lock chaque tour' },
        { name: 'Tarmogoyf', role: 'Attaquant sous-coûté grandissant avec les types de cartes au cimetière' },
        { name: 'Mystical Teachings', role: 'Tuteur toolbox, épine dorsale du contrôle UBx' },
        { name: 'Teferi, Mage of Zhalfir', role: 'Seigneur du flash bloquant les actions à vitesse d\'instant de l\'adversaire' },
      ],
      summary:
        'La sortie de Future Sight en mai a apporté Tarmogoyf, qui a immédiatement transformé les stratégies agressives, et a renforcé le package morph. Mono-Blue Pickles exploitait le lock Brine Elemental plus Vesuvan Shapeshifter pour empêcher l\'adversaire de dégager ses permanents. Teferi, Mage of Zhalfir était une carte clé dans les shells Pickles et Teachings, neutralisant de facto les instants adverses. Guillaume Wafo-Tapa avait remporté le PT Yokohama en avril avec Teachings en Block Constructed, validant la puissance de l\'archétype. La Dixième Édition est arrivée en juillet comme nouvelle édition de base. Le format était considéré comme hautement exigeant, récompensant un jeu serré et une construction de sideboard rigoureuse.',
      whyItDominated: [
        'Le lock Brine Elemental plus Vesuvan Shapeshifter était quasi impossible à briser une fois assemblé',
        'Teferi, Mage of Zhalfir désactivait l\'interaction à vitesse d\'instant pour l\'adversaire',
        'Tarmogoyf donnait aux decks agressifs une menace surclassant tout à son coût de mana',
        'Mystical Teachings permettait aux decks contrôle de jouer une toolbox de réponses en exemplaire unique',
      ],
      whyItEnded:
        'Lorwyn est sorti en octobre 2007, faisant sortir l\'ensemble du bloc Ravnica et Coldsnap. Cette rotation massive a remplacé les stratégies multicolores de guilde par des synergies tribales et a introduit les premières cartes planeswalker.',
      confidence: 'high',
      sources: [
        {
          title: 'Spotlight on Future Sight - Impact on Standard',
          publisher: 'Star City Games',
          url: 'http://www.starcitygames.com/magic/standard/14091-Spotlight-on-Future-Sight-8212-Future-Sight8217s-Impact-on-Standard.html',
          note: 'Analyse de l\'impact de Future Sight sur le métagame Standard.',
        },
        {
          title: 'MTGTop8 - Standard mi-2007',
          publisher: 'MTGTop8',
          url: 'https://www.mtgtop8.com/format?f=ST',
          note: 'Résultats de tournois montrant la dominance de Pickles et Teachings mi-2007.',
        },
      ],
    },
    {
      id: '2007-std-lorwyn',
      name: 'Doran Rock et Dragonstorm',
      start: '2007-10',
      end: '2007-12',
      dominantDecks: ['Doran Rock', 'Dragonstorm'],
      challengers: ['Elves', 'Mannequin (UB Makeshift Mannequin)', 'Mono-Red Aggro', 'Teachings'],
      keyCards: [
        { name: 'Doran, the Siege Tower', role: 'Créature 5/5 à trois manas transformant le combat' },
        { name: 'Garruk Wildspeaker', role: 'Planeswalker de première génération générant des beasts et dégageant des terrains' },
        { name: 'Liliana Vess', role: 'Planeswalker de première génération offrant tuteur et défausse' },
        { name: 'Thoughtseize', role: 'Disruption de main premium réimprimée dans Lorwyn' },
        { name: 'Makeshift Mannequin', role: 'Réanimation à vitesse d\'instant permettant des menaces flash' },
      ],
      summary:
        'La sortie de Lorwyn en octobre a été transformatrice. Elle a introduit les premières cartes planeswalker (Garruk, Liliana, Jace, Chandra, Ajani) et de puissantes synergies tribales. Doran Rock est apparu comme le deck à battre, combinant Doran, the Siege Tower (un 0/5 qui faisait compter l\'endurance comme la force) avec Garruk Wildspeaker et Thoughtseize. Dragonstorm a persisté grâce à Spinerock Knoll offrant un moyen alternatif de tricher le sort en jeu. Uri Peleg a remporté les Championnats du Monde 2007 à New York avec Doran Rock, battant le Dragonstorm de Patrick Chapin 3-1 en finale. Le Top 8 comprenait aussi Gabriel Nassif sur Dragonstorm, Katsuhiro Mori sur Elves et Kotaro Otsuka sur Mannequin.',
      whyItDominated: [
        'Doran, the Siege Tower était un 5/5 pour trois manas qui redessinait les mathématiques de combat',
        'Garruk Wildspeaker fournissait ramp, jetons et un ultimate Overrun',
        'Thoughtseize donnait aux decks à base noire une disruption de main chirurgicale',
        'Les planeswalkers étaient un nouveau type de carte que les adversaires peinaient à gérer efficacement',
      ],
      whyItEnded:
        'Le métagame a continué d\'évoluer en 2008 avec Morningtide fournissant un soutien tribal supplémentaire et de nouvelles stratégies.',
      confidence: 'high',
      sources: [
        {
          title: '2007 World Championships',
          publisher: 'MTG Wiki',
          url: 'https://mtg.fandom.com/wiki/2007_World_Championships',
          date: '2007-12-09',
          note: 'Uri Peleg a remporté les Worlds 2007 avec Doran Rock, battant le Dragonstorm de Patrick Chapin 3-1.',
        },
        {
          title: 'Worlds 2007 (New York) Standard Top 8',
          publisher: 'MTGTop8',
          url: 'https://mtgtop8.com/event?e=117&f=ST',
          date: '2007-12-09',
          note: 'Listes complètes du top 8 de la portion Standard des Championnats du Monde 2007.',
        },
      ],
    },
  ],
  bans: [],
  setReleases: [
    { date: '2007-02-02', name: 'Planar Chaos', code: 'PLC' },
    { date: '2007-05-04', name: 'Future Sight', code: 'FUT' },
    { date: '2007-07-13', name: 'Tenth Edition', code: '10E' },
    { date: '2007-10-12', name: 'Lorwyn', code: 'LRW', note: 'Rotation du Standard : le bloc Ravnica et Coldsnap sortent du format. Premières cartes planeswalker imprimées.' },
  ],
  representativeDecks: [
    {
      name: 'UB Teachings',
      slug: 'ub-teachings-standard-2007',
      period: 'L\'hiver Dragonstorm',
      archetype: 'control',
      summary:
        'Un deck control bleu-noir centré sur Mystical Teachings comme tuteur toolbox flexible pour les instants. Teferi, Mage of Zhalfir empêche les flash et contresorts adverses, Damnation balaie, et Careful Consideration recharge la main. Grindy et inévitable face aux decks fair mais lent face au combo rapide.',
      keyCards: ['Mystical Teachings', 'Teferi, Mage of Zhalfir', 'Damnation', 'Careful Consideration', 'Tendrils of Corruption'],
      source: {
        title: 'Down And Dirty - The Top 10 Decks of 2007',
        publisher: 'Star City Games',
        url: 'https://articles.starcitygames.com/articles/down-and-dirty-the-top-10-decks-of-2007/',
      },
    },
    {
      name: 'Mono-Blue Pickles',
      slug: 'mono-blue-pickles-standard-2007',
      period: 'L\'été Pickles et Goyf',
      archetype: 'hybrid',
      summary:
        'Un hybride control-combo bleu qui utilise le trigger de morph de Brine Elemental avec Vesuvan Shapeshifter pour empêcher l\'adversaire d\'untap. Willbender redirige les sorts clés. Teferi protège le lock à instant speed. Inévitable quand le combo arrive mais vulnérable aux clocks rapides et au removal sur les pièces clés.',
      keyCards: ['Brine Elemental', 'Vesuvan Shapeshifter', 'Teferi, Mage of Zhalfir', 'Willbender', 'Fathom Seer'],
      source: {
        title: 'MTGTop8 Pickles decklists 2007',
        publisher: 'MTGTop8',
        url: 'https://www.mtgtop8.com/format?f=ST',
      },
    },
    {
      name: 'Dragonstorm',
      slug: 'dragonstorm-standard-2007',
      period: 'L\'hiver Dragonstorm',
      archetype: 'combo',
      summary:
        'Un combo rouge à base de rituels qui enchaîne Rite of Flame, Seething Song et Lotus Bloom dans un gros Dragonstorm pour deux Bogardan Hellkites ou plus. Goldfish fiable au tour quatre. Vulnérable aux contresorts, à la discard et à la hate graveyard.',
      keyCards: ['Dragonstorm', 'Bogardan Hellkite', 'Rite of Flame', 'Seething Song', 'Lotus Bloom'],
      source: {
        title: 'Worlds 2007 Dragonstorm decklists',
        publisher: 'MTGTop8',
        url: 'https://mtgtop8.com/event?e=117&f=ST',
      },
    },
    {
      name: 'Gruul Aggro',
      slug: 'gruul-aggro-standard-2007',
      period: 'L\'été Pickles et Goyf',
      archetype: 'aggro',
      summary:
        'Un shell aggro rouge-vert ancré par Tarmogoyf comme la menace la plus efficace du format. Kird Ape et Mogg Fanatic appliquent la pression précoce, Call of the Herd et Char concluent. Punit les ouvertures lentes mais vulnérable au lifegain précoce et aux sweepers efficaces.',
      keyCards: ['Tarmogoyf', 'Kird Ape', 'Mogg Fanatic', 'Char', 'Call of the Herd'],
      source: {
        title: 'MTGTop8 Gruul decklists 2007',
        publisher: 'MTGTop8',
        url: 'https://www.mtgtop8.com/format?f=ST',
      },
    },
    {
      name: 'Doran Rock',
      slug: 'doran-rock-standard-2007',
      period: 'Doran Rock et Dragonstorm',
      archetype: 'midrange',
      summary:
        'Un deck midrange noir-vert-blanc qui utilise Doran, the Siege Tower pour transformer des créatures à grande endurance comme Tarmogoyf en attaquants massifs. Thoughtseize strip les sorts clés, Garruk Wildspeaker rampe et pump l\'équipe. Résistant et flexible, mais pressé par le burn et les sweepers.',
      keyCards: ['Doran, the Siege Tower', 'Garruk Wildspeaker', 'Thoughtseize', 'Tarmogoyf', 'Shriekmaw'],
      source: {
        title: 'Doran Rock - Uri Peleg - Worlds 2007',
        publisher: 'MTGTop8',
        url: 'https://www.mtgtop8.com/event?e=117&d=108520&f=ST',
      },
    },
  ],
}

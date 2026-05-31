import type { YearFormatEntry } from '../types'

export const standard1997Fr: YearFormatEntry = {
  year: 1997,
  format: 'standard',
  title: 'Standard 1997',
  subtitle: 'ProsBloom et la montée de Sligh',
  shortLabel: 'Année du combo ProsBloom',
  summary:
    'Le Standard 1997 a vu l\'émergence de l\'un des premiers grands decks combo de Magic. Le ProsBloom de Mike Long (Prosperity plus Cadaverous Bloom) a remporté le Pro Tour Paris en avril, révélant un nouveau visage du Magic compétitif. En parallèle, les stratégies agressives se sont cristallisées autour de Sligh et Red Deck Wins, établissant l\'archétype aggro rouge qui perdurerait pendant des décennies. Les variantes Necropotence persistaient, Counter-Post contrôlait le late game, et White Weenie restait un pilier. La transition Mirage-Tempest en octobre a entraîné un changement majeur du pool de cartes.',
  headlineDeck: 'ProsBloom',
  eras: [
    {
      id: '1997-std-necro-late',
      name: 'Après l\'été noir',
      start: '1997-01',
      end: '1997-04',
      dominantDecks: ['Variantes Necropotence', 'Counter-Post'],
      challengers: ['White Weenie', 'Erhnam-Geddon', 'Sligh'],
      keyCards: [
        { name: 'Necropotence', role: 'Moteur d\'avantage en cartes, toujours le sort de pioche le plus puissant' },
        { name: 'Counterspell', role: 'Contresort dur ancrant le contrôle bleu' },
        { name: 'Kjeldoran Outpost', role: 'Générateur de jetons et condition de victoire pour Counter-Post' },
        { name: 'Incinerate', role: 'Brûlure efficace pour les decks aggro rouges' },
      ],
      summary:
        'Le début du Standard 1997 portait encore les séquelles de l\'été noir. Les decks Necropotence restaient compétitifs dans diverses configurations, tandis que Counter-Post (contrôle bleu-blanc utilisant Kjeldoran Outpost comme condition de victoire) offrait une alternative contrôle solide. Les decks aggro rouges de type Sligh gagnaient du terrain, prouvant qu\'une courbe basse soutenue par de la brûlure pouvait rivaliser avec les poids lourds du format.',
      whyItDominated: [
        'Necropotence continuait d\'offrir un avantage en cartes inégalé',
        'Counter-Post disposait de l\'inévitabilité grâce à la génération de jetons de Kjeldoran Outpost',
        'Le métagame s\'adaptait encore au pool de cartes de Mirage',
        'Aucun deck ne s\'était encore détaché du peloton',
      ],
      whyItEnded:
        'Le Pro Tour Paris en avril a mis en lumière ProsBloom, un deck combo radical qui a démontré que le format avait de la place pour des stratégies entièrement nouvelles au-delà de l\'aggro et du contrôle.',
      confidence: 'medium',
      sources: [
        {
          title: '1997 Pro Tour season overview',
          publisher: 'MTG Wiki',
          url: 'https://mtg.fandom.com/wiki/Pro_Tour',
          note: 'Aperçu de la saison compétitive 1997.',
        },
      ],
    },
    {
      id: '1997-std-prosbloom',
      name: 'La percée de ProsBloom',
      start: '1997-04',
      end: '1997-07',
      dominantDecks: ['ProsBloom'],
      challengers: ['Sligh', 'Necropotence', 'Counter-Post', 'White Weenie'],
      keyCards: [
        { name: 'Cadaverous Bloom', role: 'Moteur de mana convertissant les cartes en main en mana' },
        { name: 'Prosperity', role: 'Sort de pioche massive alimentant le combo' },
        { name: 'Squandered Resources', role: 'Accélération de mana sacrifiant des terrains' },
        { name: 'Natural Balance', role: 'Réinitialisation des terrains permettant les tours combo' },
        { name: 'Drain Life', role: 'Condition de victoire après génération massive de mana' },
      ],
      summary:
        'Mike Long a remporté le Pro Tour Paris en avril 1997 avec ProsBloom, un deck combo vert-noir qui utilisait Cadaverous Bloom pour convertir des cartes en mana, Prosperity pour se refaire une main, et Drain Life pour gagner en un seul tour. Le deck a marqué un tournant dans l\'histoire du Magic compétitif, prouvant que le combo pur pouvait l\'emporter au plus haut niveau. Il était également controversé en raison de la réputation de Long et de la complexité du deck.',
      whyItDominated: [
        'Cadaverous Bloom plus Prosperity créaient une boucle combo autoalimentée',
        'Le deck pouvait gagner à partir d\'une position de plateau apparemment nulle en un seul tour',
        'Les adversaires avaient peu d\'interactions avec le combo dans le pool de cartes existant',
        'Squandered Resources et Natural Balance fournissaient une génération de mana explosive',
      ],
      whyItEnded:
        'ProsBloom était puissant mais fragile et difficile à piloter. À mesure que le métagame s\'ajustait, les decks agressifs comme Sligh pouvaient souvent tuer avant que le combo ne s\'assemble. Le deck a vu sa représentation diminuer lors des événements suivants.',
      confidence: 'medium',
      sources: [
        {
          title: 'Pro Tour Paris 1997',
          publisher: 'Wizards of the Coast',
          url: 'https://mtg.fandom.com/wiki/Pro_Tour_Paris_1997',
          date: '1997-04-11',
          note: 'Remporté par Mike Long avec ProsBloom.',
        },
        {
          title: 'History of combo decks in Magic',
          publisher: 'MTG Wiki',
          url: 'https://mtg.fandom.com/wiki/Combo_deck',
          note: 'ProsBloom cité comme l\'un des premiers decks combo compétitifs.',
        },
      ],
    },
    {
      id: '1997-std-tempest',
      name: 'L\'arrivée de Tempest',
      start: '1997-10',
      end: '1997-12',
      dominantDecks: ['Sligh', 'Variantes Necropotence'],
      challengers: ['Counter-Sliver', 'White Weenie', 'Tradewind-Survival'],
      keyCards: [
        { name: 'Jackal Pup', role: 'One-drop agressif pour l\'aggro rouge' },
        { name: 'Cursed Scroll', role: 'Source de dégâts répétable pour l\'aggro main vide' },
        { name: 'Wasteland', role: 'Déni de mana dans les stratégies agressives et tempo' },
        { name: 'Counterspell', role: 'Toujours le contresort de référence' },
      ],
      summary:
        'Tempest est arrivé en octobre 1997, remodelant le Standard avec de nouvelles cartes puissantes. Jackal Pup et Cursed Scroll ont dopé Sligh, rendant l\'aggro rouge plus rapide et plus régulier. Wasteland offrait du déni de mana. Le format était en flux alors que les joueurs exploraient le pool de cartes élargi de Visions, la Cinquième Édition, Weatherlight et désormais Tempest.',
      whyItDominated: [
        'Tempest a apporté des créatures efficaces et des cartes utilitaires récompensant les stratégies agressives',
        'Cursed Scroll donnait aux decks aggro un moyen de clore les parties après avoir vidé leur main',
        'Wasteland punissait les bases de mana gourmandes',
        'Le métagame était instable alors que les joueurs s\'adaptaient au nouveau pool de cartes',
      ],
      whyItEnded:
        'Le format a continué d\'évoluer en 1998 avec Stronghold et l\'affinement des stratégies contrôle et combo.',
      confidence: 'low',
      sources: [
        {
          title: 'Tempest set release',
          publisher: 'MTG Wiki',
          url: 'https://mtg.fandom.com/wiki/Tempest',
          date: '1997-10-13',
          note: 'Sortie de Tempest, introduisant Wasteland, Cursed Scroll et d\'autres piliers du format.',
        },
        {
          title: '1997 World Championships',
          publisher: 'Wizards of the Coast',
          url: 'https://mtg.fandom.com/wiki/1997_World_Championships',
          date: '1997-08-13',
          note: 'Jakub Slemr a remporté les Worlds 1997. Champ mixte d\'aggro, contrôle et midrange.',
        },
      ],
    },
  ],
  setReleases: [
    { date: '1997-02-03', name: 'Visions', code: 'VIS' },
    { date: '1997-03-24', name: 'Cinquième Édition', code: '5ED' },
    { date: '1997-06-09', name: 'Weatherlight', code: 'WTH' },
    { date: '1997-10-13', name: 'Tempest', code: 'TMP', note: 'Rotation majeure du Standard : le bloc Ice Age sort du format' },
  ],
  representativeDecks: [
    {
      name: 'ProsBloom',
      slug: 'prosbloom-standard-1997',
      period: 'La percée de ProsBloom',
      archetype: 'combo',
      summary:
        'Un deck combo qui utilise Cadaverous Bloom pour convertir les cartes en main en mana flottant, puis enchaîne Prosperity pour piocher tout le deck avant de tuer avec un Drain Life massif. Squandered Resources transforme les terrains en mana supplémentaire pendant que Natural Balance recharge le board. Goldfish rapide contre les champs sans protection, mais vulnérable à la discard et aux contresorts.',
      keyCards: ['Cadaverous Bloom', 'Prosperity', 'Squandered Resources', 'Natural Balance', 'Drain Life'],
      decklistPending: true,
      source: {
        title: 'Pro Tour Paris 1997',
        publisher: 'Wizards of the Coast',
        url: 'https://mtg.fandom.com/wiki/Pro_Tour_Paris_1997',
        date: '1997-04-11',
      },
    },
    {
      name: 'Sligh',
      slug: 'sligh-standard-1997',
      period: 'L\'arrivée de Tempest',
      archetype: 'aggro',
      summary:
        'Le shell aggro rouge archétypal bâti sur une courbe de mana précisément réglée de créatures bon marché et de burn. Jackal Pup et Mogg Fanatic appliquent la pression précoce, Cursed Scroll offre du reach, et Ball Lightning conclut. Punit les ouvertures lentes et les terrains tapés, mais vulnérable au lifegain précoce et aux sweepers efficaces.',
      keyCards: ['Jackal Pup', 'Mogg Fanatic', 'Cursed Scroll', 'Incinerate', 'Ball Lightning'],
      decklistPending: true,
    },
    {
      name: 'Counter-Post',
      slug: 'counter-post-standard-1997',
      period: 'Après l\'été noir',
      archetype: 'control',
      summary:
        'Un deck control bleu-blanc qui utilise Kjeldoran Outpost comme moteur récurrent de tokens et win condition inévitable. Counterspell et Swords to Plowshares tiennent le board, Wrath of God reset, et Brainstorm lisse les pioches. Domine les stratégies de créatures fair mais peine face au combo rapide et à la discard pure.',
      keyCards: ['Kjeldoran Outpost', 'Counterspell', 'Swords to Plowshares', 'Wrath of God', 'Brainstorm'],
      decklistPending: true,
    },
    {
      name: 'White Weenie',
      slug: 'white-weenie-standard-1997',
      period: 'Après l\'été noir',
      archetype: 'aggro',
      summary:
        'Un shell aggro blanc efficace bâti sur Savannah Lions et Soltari Priest soutenus par Crusade pour des pumps globaux. Armageddon bloque l\'adversaire après avoir posé un board, tandis que Swords to Plowshares gère les menaces plus grosses. Bat le ramp lent et le control lourd, mais vulnérable aux sweepers précoces et au lifegain.',
      keyCards: ['Savannah Lions', 'Soltari Priest', 'Armageddon', 'Swords to Plowshares', 'Crusade'],
      decklistPending: true,
    },
  ],
}

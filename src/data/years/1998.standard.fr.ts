import type { YearFormatEntry } from '../types'

export const standard1998Fr: YearFormatEntry = {
  year: 1998,
  format: 'standard',
  title: 'Standard 1998',
  subtitle: 'Draw-Go, Recurring Nightmare et Tolarian Academy',
  shortLabel: 'Urza\'s Saga brise le Standard',
  summary:
    'Le Standard 1998 a offert une première moitié diversifiée dominée par Draw-Go control (construit autour de Forbid et Whispers of the Muse), les decks creature-combo Recurring Nightmare plus Survival of the Fittest, et les stratégies agressives Sligh et Suicide Black. Puis Urza\'s Saga est arrivé en octobre et a fracturé le format. Tolarian Academy, combiné avec du mana artefact gratuit, permettait des kills tour un et tour deux. L\'extension allait déclencher une vague sans précédent de bannissements d\'urgence, faisant de la fin 1998 le prélude à l\'infâme Combo Winter.',
  headlineDeck: 'Draw-Go',
  eras: [
    {
      id: '1998-std-drawgo',
      name: 'Draw-Go et Recurring Nightmare',
      start: '1998-01',
      end: '1998-06',
      dominantDecks: ['Draw-Go', 'RecSur'],
      challengers: ['Sligh', 'Suicide Black', 'Living Death', 'White Weenie'],
      keyCards: [
        { name: 'Forbid', role: 'Contresort avec buyback fournissant un verrou dur avec l\'avantage en cartes' },
        { name: 'Whispers of the Muse', role: 'Sort de pioche avec buyback pour un avantage incrémental' },
        { name: 'Recurring Nightmare', role: 'Moteur de réanimation répétable, activation incontrôlable' },
        { name: 'Survival of the Fittest', role: 'Tuteur de créatures remplissant le cimetière pour Recurring Nightmare' },
        { name: 'Hatred', role: 'Sort de kill en un coup pour Suicide Black, convertissant la vie en puissance' },
      ],
      summary:
        'La première moitié de 1998 présentait un métagame sain centré sur deux piliers. Draw-Go control utilisait Forbid avec buyback pour verrouiller les adversaires tandis que Whispers of the Muse générait l\'avantage en cartes. RecSur (Recurring Nightmare plus Survival of the Fittest) était un deck moteur basé sur les créatures capable de tutorer et réanimer des créatures de valeur de façon répétée. Sligh continuait de punir les départs lents, tandis que Suicide Black exploitait Hatred pour des kills explosifs. Living Death offrait une autre stratégie basée sur la réanimation.',
      whyItDominated: [
        'Forbid avec buyback créait un verrou de contresort quasi infranchissable en fin de partie',
        'Recurring Nightmare était effectivement incontrôlable puisqu\'il revenait en main dans le cadre de son coût',
        'Survival of the Fittest offrait une régularité inégalée pour les créatures',
        'Le format avait des équilibres clairs entre aggro, contrôle et decks moteur',
      ],
      whyItEnded:
        'Exodus en juin a ajouté de nouveaux outils, mais la vraie rupture est venue avec Urza\'s Saga en octobre, qui a introduit des cartes si puissantes qu\'elles ont déformé le format au-delà de toute reconnaissance.',
      confidence: 'medium',
      sources: [
        {
          title: '1998 World Championships',
          publisher: 'Wizards of the Coast',
          url: 'https://mtg.fandom.com/wiki/1998_World_Championships',
          date: '1998-08-12',
          note: 'Brian Selden a remporté les Worlds 1998 avec RecSur (Recurring Nightmare / Survival of the Fittest).',
        },
        {
          title: 'Draw-Go deck history',
          publisher: 'MTG Wiki',
          url: 'https://mtg.fandom.com/wiki/Draw-Go',
          note: 'Historique de l\'archétype Draw-Go dans le Standard de l\'ère Tempest.',
        },
      ],
    },
    {
      id: '1998-std-deadguy',
      name: 'L\'été agressif',
      start: '1998-06',
      end: '1998-10',
      dominantDecks: ['Sligh', 'Deadguy Red'],
      challengers: ['Draw-Go', 'Suicide Black', 'RecSur', 'Stompy'],
      keyCards: [
        { name: 'Jackal Pup', role: 'One-drop premium pour l\'aggro rouge' },
        { name: 'Cursed Scroll', role: 'Dégâts répétables quand la main est vide' },
        { name: 'Mogg Fanatic', role: 'One-drop polyvalent avec utilité de sacrifice' },
        { name: 'Ball Lightning', role: 'Six dégâts pour trois manas, clôturant les parties rapidement' },
        { name: 'Hatred', role: 'Kill instantané convertissant la vie en pump dans Suicide Black' },
      ],
      summary:
        'L\'été 1998 a vu les decks aggro rouges atteindre leur performance maximale. Deadguy Red, une version affinée de Sligh, combinait des créatures efficaces avec de la brûlure et Cursed Scroll pour l\'inévitabilité. Suicide Black restait dangereux avec Hatred offrant un potentiel de kill instantané. Le métagame était rapide et punitif, les decks contrôle devant survivre à un assaut précoce avant de stabiliser.',
      whyItDominated: [
        'L\'aggro rouge disposait de la courbe créature-brûlure la plus efficace du format',
        'Cursed Scroll offrait de la portée après avoir déployé toute la main',
        'Suicide Black menaçait des kills tour trois ou quatre avec Hatred',
        'Les decks contrôle ne pouvaient pas toujours stabiliser à temps contre les pioches optimales d\'aggro',
      ],
      whyItEnded:
        'Urza\'s Saga est sorti en octobre 1998, introduisant des stratégies combo si rapides que même Sligh ne pouvait pas les devancer.',
      confidence: 'medium',
      sources: [
        {
          title: 'Deadguy Red and Sligh history',
          publisher: 'MTG Wiki',
          url: 'https://mtg.fandom.com/wiki/Sligh',
          note: 'Évolution des decks aggro rouges à la fin des années 1990.',
        },
      ],
    },
    {
      id: '1998-std-academy',
      name: 'Tolarian Academy',
      start: '1998-10',
      end: '1998-12',
      dominantDecks: ['Tolarian Academy'],
      challengers: ['Draw-Go', 'Sligh', 'RecSur'],
      keyCards: [
        { name: 'Tolarian Academy', role: 'Engageait pour du mana égal au nombre d\'artefacts contrôlés, permettant un mana dégénéré' },
        { name: 'Windfall', role: 'Pioche massive refaisant la main après avoir déversé des artefacts' },
        { name: 'Mind Over Matter', role: 'Moteur de dégagement avec Tolarian Academy pour du mana infini' },
        { name: 'Voltaic Key', role: 'Dégageur d\'artefact permettant des engagements répétés de l\'Academy' },
        { name: 'Lotus Petal', role: 'Artefact gratuit accélérant l\'Academy et le compte d\'artefacts' },
      ],
      summary:
        'Urza\'s Saga est arrivé en octobre 1998 et a immédiatement brisé le Standard. Tolarian Academy, un terrain qui engageait pour du mana bleu égal au nombre d\'artefacts contrôlés, se combinait avec des artefacts gratuits comme Lotus Petal et Mox Diamond pour générer des quantités absurdes de mana dès les tours un et deux. Windfall refaisait la main, et Mind Over Matter ou Stroke of Genius fournissaient le kill. Le deck pouvait gagner au tour un dans de rares cas et menaçait régulièrement des kills tour deux ou trois. Il était clair en quelques semaines qu\'une action d\'urgence était nécessaire.',
      whyItDominated: [
        'Tolarian Academy produisait du mana à un rythme comparable au Power Nine',
        'Les artefacts gratuits comme Lotus Petal et Mana Vault alimentaient des tours précoces explosifs',
        'Windfall convertissait les déversements d\'artefacts en nouvelles mains pleines',
        'Le combo était plus rapide que pratiquement toute stratégie interactive du format',
      ],
      whyItEnded:
        'Tolarian Academy a été banni lors de la mise à jour d\'urgence de décembre 1998, avec Windfall et d\'autres facilitateurs. C\'était le début du cycle de bannissements du Combo Winter.',
      confidence: 'medium',
      sources: [
        {
          title: 'Combo Winter - MTG History',
          publisher: 'MTG Wiki',
          url: 'https://mtg.fandom.com/wiki/Combo_Winter',
          note: 'Aperçu complet de l\'ère combo du bloc Urza.',
        },
        {
          title: 'December 1998 Banned and Restricted Announcement',
          publisher: 'Wizards of the Coast',
          url: 'https://mtg.fandom.com/wiki/Banned_and_restricted_cards/Timeline',
          date: '1998-12-01',
          note: 'Bannissement d\'urgence de Tolarian Academy, Windfall et d\'autres cartes.',
        },
      ],
    },
  ],
  bans: [
    {
      date: '1998-12-01',
      cards: ['Tolarian Academy', 'Windfall', 'Dream Halls', 'Earthcraft', 'Fluctuator', 'Lotus Petal', 'Recurring Nightmare', 'Time Spiral'],
      explanation:
        'Les decks combo d\'Urza\'s Saga, en particulier ceux construits autour de Tolarian Academy, menaçaient des kills dès le premier tour. Wizards a émis un bannissement d\'urgence ciblant les pires contrevenants pour stabiliser le format. Recurring Nightmare a également été banni en raison de sa domination de longue date des stratégies basées sur les créatures.',
      source: {
        title: 'December 1998 Banned and Restricted Announcement',
        publisher: 'Wizards of the Coast',
        url: 'https://mtg.fandom.com/wiki/Banned_and_restricted_cards/Timeline',
        date: '1998-12-01',
      },
    },
  ],
  setReleases: [
    { date: '1998-03-02', name: 'Stronghold', code: 'STH' },
    { date: '1998-06-15', name: 'Exodus', code: 'EXO' },
    { date: '1998-10-12', name: "Urza's Saga", code: 'USG', note: 'Rotation du Standard : le bloc Mirage et la Cinquième Édition sortent du format. Introduction de Tolarian Academy et d\'autres pièces combo brisées.' },
  ],
  representativeDecks: [
    {
      name: 'Draw-Go',
      slug: 'draw-go-standard-1998',
      period: 'Draw-Go et Recurring Nightmare',
      archetype: 'control',
      summary:
        'Un deck de permission mono-bleu pur qui maintient Counterspell et Dismiss chaque tour tout en drainant les ressources adverses. Whispers of the Muse et Forbid rechargent la main indéfiniment, et Rainbow Efreet conclut depuis un board verrouillé. Écrase les decks fair mais s\'effondre face à la discard et aux menaces non-contrables.',
      keyCards: ['Forbid', 'Whispers of the Muse', 'Counterspell', 'Dismiss', 'Rainbow Efreet', 'Stalking Stones'],
      decklistPending: true,
      source: {
        title: 'Draw-Go archetype history',
        publisher: 'MTG Wiki',
        url: 'https://mtg.fandom.com/wiki/Draw-Go',
      },
    },
    {
      name: 'RecSur',
      slug: 'recsur-standard-1998',
      period: 'Draw-Go et Recurring Nightmare',
      archetype: 'combo',
      summary:
        'Un toolbox combo-midrange bâti sur Survival of the Fittest qui tutore les créatures vers le graveyard pour des loops avec Recurring Nightmare. Spirit of the Night et Verdant Force servent de cibles de réanimation gagnantes, pendant que Wall of Blossoms génère du card advantage incident. Grindy et flexible, mais vulnérable à la hate graveyard et au removal d\'enchantement.',
      keyCards: ['Recurring Nightmare', 'Survival of the Fittest', 'Spirit of the Night', 'Wall of Blossoms', 'Verdant Force'],
      decklistPending: true,
      source: {
        title: '1998 World Championships',
        publisher: 'Wizards of the Coast',
        url: 'https://mtg.fandom.com/wiki/1998_World_Championships',
        date: '1998-08-12',
      },
    },
    {
      name: 'Suicide Black',
      slug: 'suicide-black-standard-1998',
      period: 'L\'été agressif',
      archetype: 'aggro',
      summary:
        'Un build mono-noir hyper-agressif qui paie des points de vie librement pour des menaces rapides comme Dauthi Slayer et Sarcomancy. Dark Ritual alimente les ouvertures explosives et Hatred transforme toute créature non-bloquée en kill en un coup. Course les stratégies plus lentes, mais s\'effondre face au lifegain et à tout sweeper qui arrive à temps.',
      keyCards: ['Hatred', 'Dauthi Slayer', 'Dauthi Horror', 'Dark Ritual', 'Sarcomancy'],
      decklistPending: true,
    },
    {
      name: 'Tolarian Academy',
      slug: 'tolarian-academy-standard-1998',
      period: 'Tolarian Academy',
      archetype: 'combo',
      summary:
        'Un deck combo dégénéré qui explose grâce à Tolarian Academy produisant un mana massif avec des artefacts, puis enchaîne Windfall et Voltaic Key pour piocher et untap vers un kill. Mind Over Matter et Lotus Petal créent des loops de mana infini. L\'un des decks Standard les plus broken jamais vus, limité par la vitesse mais vulnérable à la hate artefact et aux contresorts.',
      keyCards: ['Tolarian Academy', 'Windfall', 'Mind Over Matter', 'Voltaic Key', 'Lotus Petal', 'Stroke of Genius'],
      decklistPending: true,
      source: {
        title: 'Combo Winter overview',
        publisher: 'MTG Wiki',
        url: 'https://mtg.fandom.com/wiki/Combo_Winter',
      },
    },
  ],
}

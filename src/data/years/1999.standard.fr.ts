import type { YearFormatEntry } from '../types'

export const standard1999Fr: YearFormatEntry = {
  year: 1999,
  format: 'standard',
  title: 'Standard 1999',
  subtitle: 'Le Combo Winter et les bannissements d\'urgence',
  shortLabel: 'Combo Winter',
  summary:
    'L\'année la plus tristement célèbre de l\'histoire du Standard. Malgré le bannissement de Tolarian Academy et d\'autres cartes en décembre 1998, le bloc Urza a continué de produire des decks combo dégénérés. Memory Jar a reçu le seul bannissement d\'urgence en cours de cycle de l\'histoire de Magic en mars 1999. Les decks combo Yawgmoth\'s Bargain et High Tide dominaient. Replenish a émergé comme un autre moteur puissant. Wizards a publié plusieurs vagues de bannissements tout au long de l\'année dans un effort sans précédent pour stabiliser le format. À l\'automne, Mercadian Masques est arrivé avec un niveau de puissance délibérément plus bas, et le Standard s\'est lentement rétabli.',
  headlineDeck: "Yawgmoth's Bargain",
  eras: [
    {
      id: '1999-std-combo-winter',
      name: 'Combo Winter',
      start: '1999-01',
      end: '1999-03',
      dominantDecks: ["Yawgmoth's Bargain", 'Memory Jar combo'],
      challengers: ['High Tide', 'Sligh', 'White Weenie', 'Draw-Go'],
      keyCards: [
        { name: "Yawgmoth's Bargain", role: 'Necropotence sous stéroïdes : payez de la vie, piochez des cartes instantanément' },
        { name: 'Memory Jar', role: 'Remplacement massif de main permettant des tours combo' },
        { name: 'Dark Ritual', role: 'Mana rapide permettant un Bargain précoce' },
        { name: 'Skirge Familiar', role: 'Moteur de mana défaussant les cartes piochées pour du mana noir' },
        { name: 'Soul Feast', role: 'Sort de drain comme condition de victoire dans le combo Bargain' },
      ],
      summary:
        'Même après les bannissements de décembre 1998, les decks combo du bloc Urza refusaient de mourir. Les decks Yawgmoth\'s Bargain pouvaient piocher toute leur bibliothèque en payant des points de vie, puis tuer avec Skirge Familiar et des effets de drain. Le combo Memory Jar fournissait encore un autre moteur de pioche brisé. High Tide utilisait Tolaria et des effets de dégagement pour générer du mana infini. La fréquentation des tournois a chuté alors que les joueurs se lassaient des miroirs combo non interactifs. Cette période est devenue le « Combo Winter », le métagame le plus infâme de l\'histoire de Magic.',
      whyItDominated: [
        'Yawgmoth\'s Bargain piochait des cartes encore plus vite que Necropotence sans restriction de fin de tour',
        'Memory Jar offrait sept nouvelles cartes aux deux joueurs mais les decks combo les exploitaient mieux',
        'Dark Ritual et le mana rapide permettaient des kills combo tour deux ou trois',
        'Les decks interactifs n\'avaient presque aucun outil pour stopper simultanément plusieurs axes combo',
      ],
      whyItEnded:
        'Memory Jar a reçu un bannissement d\'urgence le 1er mars 1999, la seule carte de l\'histoire de Magic à avoir reçu un bannissement d\'urgence entre les cycles d\'annonces réguliers. D\'autres bannissements ont suivi.',
      confidence: 'medium',
      sources: [
        {
          title: 'Combo Winter - MTG History',
          publisher: 'MTG Wiki',
          url: 'https://mtg.fandom.com/wiki/Combo_Winter',
          note: 'Aperçu complet de la période du Combo Winter.',
        },
        {
          title: 'Memory Jar emergency ban',
          publisher: 'Wizards of the Coast',
          url: 'https://mtg.fandom.com/wiki/Banned_and_restricted_cards/Timeline',
          date: '1999-03-01',
          note: 'Le seul bannissement d\'urgence de l\'histoire de Magic, émis en dehors du calendrier d\'annonces normal.',
        },
      ],
    },
    {
      id: '1999-std-bargain',
      name: 'Bargain et Replenish',
      start: '1999-03',
      end: '1999-07',
      dominantDecks: ["Yawgmoth's Bargain", 'Replenish'],
      challengers: ['Sligh', 'Stompy', 'Mono-Blue Control', 'White Weenie'],
      keyCards: [
        { name: "Yawgmoth's Bargain", role: 'Toujours le premier moteur de pioche malgré les autres bannissements' },
        { name: 'Replenish', role: 'Réanimation massive d\'enchantements permettant des plateaux puissants' },
        { name: 'Opalescence', role: 'Transformait les enchantements en créatures pour le kill Replenish' },
        { name: 'Parallax Wave', role: 'Removal répétable en synergie avec Opalescence' },
        { name: 'Attunement', role: 'Sélection de cartes envoyant les enchantements au cimetière pour Replenish' },
      ],
      summary:
        'Même après le bannissement d\'urgence de Memory Jar, le format est resté déformé. Yawgmoth\'s Bargain a continué d\'alimenter les decks combo jusqu\'à son bannissement final. Replenish a émergé comme un nouveau hybride combo-contrôle qui envoyait les enchantements au cimetière avec Attunement, puis lançait Replenish pour tous les ramener d\'un coup. Avec Opalescence, les enchantements devenaient des créatures pour une attaque létale. Wizards a continué de publier des bannissements pour maîtriser le format.',
      whyItDominated: [
        'Yawgmoth\'s Bargain restait légal malgré le carnage environnant',
        'Replenish offrait un axe combo différent, difficile à contrer simultanément',
        'Opalescence plus Parallax Wave créaient un verrou de plateau',
        'Les decks agressifs étaient rapides mais irréguliers contre plusieurs axes combo',
      ],
      whyItEnded:
        'Yawgmoth\'s Bargain a été banni en juin 1999. D\'autres restrictions tout au long de l\'année ont progressivement affaibli les stratégies combo restantes.',
      confidence: 'medium',
      sources: [
        {
          title: 'Replenish deck history',
          publisher: 'MTG Wiki',
          url: 'https://mtg.fandom.com/wiki/Replenish_(deck)',
          note: 'Aperçu de l\'archétype Replenish en Standard.',
        },
        {
          title: 'Banned and Restricted timeline 1999',
          publisher: 'Wizards of the Coast',
          url: 'https://mtg.fandom.com/wiki/Banned_and_restricted_cards/Timeline',
          note: 'Multiples annonces de bannissement tout au long de 1999.',
        },
      ],
    },
    {
      id: '1999-std-masques',
      name: 'La convalescence Mercadian Masques',
      start: '1999-10',
      end: '1999-12',
      dominantDecks: ['Replenish', 'Angry Hermit'],
      challengers: ['Sligh', 'Stompy', 'Accelerated Blue', 'Trinity Green'],
      keyCards: [
        { name: 'Replenish', role: 'Toujours puissant même dans le paysage post-bannissement' },
        { name: 'Rishadan Port', role: 'Déni de mana venant de Mercadian Masques' },
        { name: 'Deranged Hermit', role: 'Menace génératrice de jetons dans l\'aggro vert' },
        { name: 'Grim Monolith', role: 'Artefact de mana rapide, l\'un des rares survivants' },
      ],
      summary:
        'Mercadian Masques est arrivé en octobre 1999 avec un niveau de puissance délibérément plus bas pour contrebalancer le désastre du bloc Urza. La rotation a éliminé beaucoup des pires contrevenants, bien que Replenish ait persisté comme deck de tête utilisant les enchantements du bloc Urza. Rishadan Port de Masques a donné aux decks agressifs et tempo un nouvel outil de déni de mana. Le format a lentement commencé à se normaliser, bien qu\'il faudrait attendre 2000 pour que le Standard se remette pleinement du Combo Winter.',
      whyItDominated: [
        'Replenish avait encore accès aux enchantements puissants du bloc Urza',
        'Mercadian Masques était de faible puissance par conception, laissant intactes les stratégies plus anciennes',
        'Rishadan Port récompensait les stratégies agressives et tempo',
        'Le cycle de bannissements avait éliminé les pires contrevenants mais certaines cartes puissantes subsistaient',
      ],
      whyItEnded:
        'La rotation continue et l\'arrivée de Nemesis début 2000 ont davantage dilué le potentiel combo du bloc Urza. Le Standard est progressivement revenu à un état sain.',
      confidence: 'low',
      sources: [
        {
          title: 'Mercadian Masques release',
          publisher: 'MTG Wiki',
          url: 'https://mtg.fandom.com/wiki/Mercadian_Masques',
          date: '1999-10-04',
          note: 'Extension de puissance délibérément plus basse après le désastre du bloc Urza.',
        },
        {
          title: '1999 World Championships',
          publisher: 'Wizards of the Coast',
          url: 'https://mtg.fandom.com/wiki/1999_World_Championships',
          date: '1999-08-11',
          note: 'Kai Budde a remporté les Worlds 1999, début de son règne historique.',
        },
      ],
    },
  ],
  bans: [
    {
      date: '1999-03-01',
      cards: ['Memory Jar'],
      explanation:
        'Memory Jar a reçu le seul bannissement d\'urgence de l\'histoire de Magic, émis en dehors du calendrier d\'annonces normal. La carte permettait des tours combo brisés en conjonction avec d\'autres cartes du bloc Urza, et Wizards a agi avant qu\'elle ne puisse dominer la prochaine série de tournois majeurs.',
      source: {
        title: 'Memory Jar Emergency Ban',
        publisher: 'Wizards of the Coast',
        url: 'https://mtg.fandom.com/wiki/Banned_and_restricted_cards/Timeline',
        date: '1999-03-01',
      },
    },
    {
      date: '1999-06-01',
      cards: ['Mind Over Matter', 'Time Spiral', "Yawgmoth's Bargain", 'Windfall'],
      explanation:
        'Effort continu pour éliminer les moteurs combo restants du bloc Urza en Standard. Yawgmoth\'s Bargain était le pire contrevenant restant, permettant des kills en un tour grâce à une pioche massive.',
      source: {
        title: 'June 1999 Banned and Restricted Announcement',
        publisher: 'Wizards of the Coast',
        url: 'https://mtg.fandom.com/wiki/Banned_and_restricted_cards/Timeline',
        date: '1999-06-01',
      },
    },
  ],
  setReleases: [
    { date: '1999-02-15', name: "Urza's Legacy", code: 'ULG' },
    { date: '1999-04-21', name: 'Sixième Édition', code: '6ED', note: 'Refonte majeure des règles : les « changements de règles de la Sixième Édition »' },
    { date: '1999-06-07', name: "Urza's Destiny", code: 'UDS' },
    { date: '1999-10-04', name: 'Mercadian Masques', code: 'MMQ', note: 'Rotation du Standard : le bloc Tempest sort du format. Puissance délibérément réduite pour stabiliser le format.' },
  ],
  representativeDecks: [
    {
      name: "Yawgmoth's Bargain",
      slug: 'yawgmoths-bargain-standard-1999',
      period: 'Combo Winter',
      archetype: 'combo',
      summary:
        'Un deck combo mono-noir qui résout Yawgmoth\'s Bargain pour piocher toute la library en payant des points de vie, puis convertit les cartes en mana avec Skirge Familiar et tue via Soul Feast ou Drain Life. Dark Ritual permet des combos explosifs au tour deux. Goldfish dévastateur mais vulnérable aux contresorts et au lifegain.',
      keyCards: ["Yawgmoth's Bargain", 'Dark Ritual', 'Skirge Familiar', 'Soul Feast', 'Renounce'],
      decklistPending: true,
      source: {
        title: 'Combo Winter overview',
        publisher: 'MTG Wiki',
        url: 'https://mtg.fandom.com/wiki/Combo_Winter',
      },
    },
    {
      name: 'Memory Jar Combo',
      slug: 'memory-jar-combo-standard-1999',
      period: 'Combo Winter',
      archetype: 'combo',
      summary:
        'Un deck combo artefact qui utilise Tinker et Voltaic Key pour tricher Memory Jar en jeu, vider sa main dans Megrim et brûler l\'adversaire. Grim Monolith fournit de l\'accélération de mana supplémentaire. Goldfish au tour trois ou quatre de manière fiable, mais vulnérable aux contresorts et au removal d\'artefact.',
      keyCards: ['Memory Jar', 'Megrim', 'Tinker', 'Voltaic Key', 'Grim Monolith'],
      decklistPending: true,
    },
    {
      name: 'Replenish',
      slug: 'replenish-standard-1999',
      period: 'Bargain et Replenish',
      archetype: 'combo',
      summary:
        'Un deck combo qui mille les enchantements dans le graveyard avec Attunement, puis les ressuscite tous avec Replenish pour un board gagnant alimenté par Opalescence. Parallax Wave et Parallax Tide verrouillent l\'adversaire. Fragile face à la hate graveyard et au removal d\'enchantement, mais sinon difficile à arrêter.',
      keyCards: ['Replenish', 'Opalescence', 'Parallax Wave', 'Parallax Tide', 'Attunement'],
      decklistPending: true,
      source: {
        title: 'Replenish deck history',
        publisher: 'MTG Wiki',
        url: 'https://mtg.fandom.com/wiki/Replenish_(deck)',
      },
    },
    {
      name: 'Sligh',
      slug: 'sligh-standard-1999',
      period: 'Combo Winter',
      archetype: 'aggro',
      summary:
        'Un shell aggro rouge mis à jour avec une courbe basse précise, Jackal Pup et Mogg Fanatic en avant, et Ball Lightning, Hammer of Bogardan et Cursed Scroll fournissant le reach. Vise à infliger vingt dégâts avant que l\'adversaire ne se stabilise. Punit les terrains lents et les ouvertures tapées, mais vulnérable au lifegain et aux blockers efficaces.',
      keyCards: ['Jackal Pup', 'Mogg Fanatic', 'Cursed Scroll', 'Hammer of Bogardan', 'Ball Lightning'],
      decklistPending: true,
    },
  ],
}

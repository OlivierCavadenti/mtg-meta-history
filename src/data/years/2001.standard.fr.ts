import type { YearFormatEntry } from '../types'

export const standard2001Fr: YearFormatEntry = {
  year: 2001,
  format: 'standard',
  title: 'Standard 2001',
  subtitle: 'Le règne de Fires',
  shortLabel: 'Fires et l\'or d\'Invasion',
  summary:
    'Le Standard 2001 a été dominé par l\'ère Invasion-Masques. Fires of Yavimaya s\'est maintenu depuis fin 2000 comme le deck à battre, utilisant la célérité et des créatures green-red efficaces pour clore les parties rapidement. Le format s\'est construit autour de lui : Counter-Rebel tentait de prendre l\'avantage avec du countermagic et la chaîne Rebel, Go-Mar (contrôle Esper) utilisait Dromar et du removal, et Machine Head (BR) exploitait l\'angle métagame. Tom van de Logt a remporté les Worlds 2001 à Toronto avec Machine Head, prouvant que l\'aggro-contrôle pouvait battre le métagame. Le bloc Odyssey est arrivé en octobre, amorçant la transition vers des stratégies centrées sur le cimetière.',
  headlineDeck: 'Fires of Yavimaya',
  eras: [
    {
      id: '2001-std-fires',
      name: 'Le méta Fires',
      start: '2001-01',
      end: '2001-06',
      dominantDecks: ['Fires of Yavimaya'],
      challengers: ['Counter-Rebel', 'Go-Mar', 'Nether-Go', 'Machine Head'],
      keyCards: [
        { name: 'Fires of Yavimaya', role: 'Accordait la célérité à toutes les créatures' },
        { name: 'Blastoderm', role: '5/5 inciblable, le meilleur attaquant du format' },
        { name: 'Saproling Burst', role: 'Rafale de jetons qui terminait les parties avec Fires en jeu' },
        { name: 'Flametongue Kavu', role: 'Quatre dégâts à l\'arrivée, la créature removal de référence' },
        { name: 'Spiritmonger', role: 'Menace énorme d\'Apocalypse, souvent splashée' },
      ],
      summary:
        'Fires a poursuivi sa domination de fin 2000 durant la première moitié de 2001. Le deck était rapide, résilient et punissait les faux pas. Flametongue Kavu de Planeshift a ajouté une créature removal qui s\'intégrait parfaitement dans le shell agressif. Les decks contrôle se sont adaptés : Go-Mar (WUB) utilisait Dromar\'s Charm et Fact or Fiction, tandis que Nether-Go s\'appuyait sur Nether Spirit et Undermine. Counter-Rebel combinait la chaîne de tutoring Rebel avec du countermagic bleu pour un plan midrange d\'usure.',
      whyItDominated: [
        'Fires plus Saproling Burst créait des burst de dégâts énormes difficiles à contrer',
        'Flametongue Kavu de Planeshift ajoutait du removal greffé sur un corps',
        'L\'accélération de mana RG rendait le deck plus rapide que la plupart des adversaires',
        'L\'inciblabilité de Blastoderm le rendait résilient face aux decks contrôle chargés en removal',
      ],
      whyItEnded:
        'Apocalypse en juin a apporté Vindicate, Pernicious Deed et d\'autres réponses puissantes. Le métagame s\'est considérablement diversifié à mesure que les decks contrôle ont acquis de meilleurs outils pour gérer les départs agressifs de Fires.',
      confidence: 'medium',
      sources: [
        {
          title: 'World Championship Decks/2001',
          publisher: 'MTG Wiki',
          url: 'https://mtg.fandom.com/wiki/World_Championship_Decks/2001',
          note: 'Documente les quatre decks de championnat des Worlds 2001 à Toronto.',
        },
        {
          title: 'MTGTop8 - Standard events 2001',
          publisher: 'MTGTop8',
          url: 'https://www.mtgtop8.com/format?f=ST',
          note: 'Résultats de tournois montrant la domination de Fires début-milieu 2001.',
        },
      ],
    },
    {
      id: '2001-std-diversity',
      name: 'Machine Head et Dark Fires',
      start: '2001-06',
      end: '2001-10',
      dominantDecks: ['Fires of Yavimaya', 'Machine Head'],
      challengers: ['Go-Mar', 'Dark Fires', 'Opposition'],
      keyCards: [
        { name: 'Vindicate', role: 'Removal inconditionnel de permanent' },
        { name: 'Pernicious Deed', role: 'Board wipe modulable' },
        { name: 'Spiritmonger', role: 'Créature BG massive, difficile à éliminer' },
        { name: 'Fact or Fiction', role: 'Puissance de sélection de cartes pour le contrôle' },
      ],
      summary:
        'Apocalypse a apporté certaines des cartes or les plus puissantes de l\'histoire de Magic. Vindicate donnait aux decks BW un removal inconditionnel. Pernicious Deed fournissait un board wipe modulable. Spiritmonger ajoutait une menace massive à la paire de couleurs BG. Le format s\'est diversifié : Dark Fires splashait le noir pour Spiritmonger et Pernicious Deed, Machine Head (BR) utilisait Plague Spitter et Flametongue Kavu pour contrôler le plateau. Tom van de Logt qualifiait Machine Head de « deck qui bat le deck qui bat Fires » et l\'a chevauché jusqu\'au titre de Champion du Monde à Toronto.',
      whyItDominated: [
        'Plusieurs stratégies viables se disputaient le plus haut niveau, empêchant un seul deck de dominer',
        'Fires restait la stratégie aggro par défaut mais devait respecter davantage de réponses',
        'Machine Head exploitait sa position métagame en étant favorisé contre Fires et les decks bleus',
        'Pernicious Deed et Vindicate donnaient aux decks contrôle de vrais outils contre les stratégies créatures',
      ],
      whyItEnded:
        'L\'arrivée d\'Odyssey en octobre a fait sortir le bloc Masques et la Sixième Édition, emportant Rebels, Rising Waters et bon nombre des outils qui définissaient le format Invasion-Masques. Le bloc Odyssey, axé sur le cimetière, a ouvert un nouveau chapitre.',
      confidence: 'medium',
      sources: [
        {
          title: 'Worlds 2001 - Tom van de Logt Machine Head',
          publisher: 'MTG Wiki',
          url: 'https://mtg.fandom.com/wiki/Tom_van_de_Logt',
          date: '2001-08-12',
          note: 'Tom van de Logt a remporté les Worlds 2001 avec Machine Head (aggro-contrôle BR), affichant un bilan de 5-1 en Standard.',
        },
        {
          title: 'Worlds 2001 Standard event',
          publisher: 'MTGTop8',
          url: 'https://mtgtop8.com/event?e=9240&f=ST',
          note: 'Résultats de la portion Standard des Worlds 2001 à Toronto.',
        },
      ],
    },
    {
      id: '2001-std-odyssey',
      name: 'L\'émergence de Wild Mongrel et Psychatog',
      start: '2001-10',
      end: '2001-12',
      dominantDecks: ['Fires of Yavimaya'],
      challengers: ['UG Threshold', 'Psychatog', 'Opposition'],
      keyCards: [
        { name: 'Wild Mongrel', role: 'Outlet de défausse qui activait les synergies cimetière' },
        { name: 'Psychatog', role: 'Finisseur qui grossissait en consommant la main et le cimetière' },
        { name: 'Shadowmage Infiltrator', role: 'Créature d\'avantage de cartes (Finkel)' },
        { name: 'Call of the Herd', role: 'Deux corps pour une carte via flashback' },
      ],
      summary:
        'Odyssey a introduit le cimetière comme ressource avec flashback, threshold et des aperçus de madness. Wild Mongrel est devenu un staple instantané, activant les synergies de défausse dans tous les archétypes. Psychatog est apparu comme un finisseur combo-contrôle. Le plein potentiel de ces mécaniques n\'émergerait qu\'en 2002, mais les derniers mois de 2001 montraient déjà les signes clairs de l\'avenir centré sur le cimetière.',
      whyItDominated: [
        'Fires conservait son noyau agressif même après la rotation apportant de nouvelles cartes',
        'Les mécaniques cimetière d\'Odyssey étaient encore en exploration et n\'avaient pas atteint leur plein potentiel',
        'Wild Mongrel et Call of the Herd ajoutaient des créatures vertes de qualité aux shells existants',
        'Le format était en transition, sans qu\'un seul nouvel archétype soit encore pleinement établi',
      ],
      whyItEnded:
        'L\'arrivée de Torment début 2002 a complété le moteur madness. Psychatog et UG Madness allaient émerger comme les decks définissant le format, repoussant Fires hors des projecteurs.',
      confidence: 'medium',
      sources: [
        {
          title: 'MTGTop8 - Standard late 2001',
          publisher: 'MTGTop8',
          url: 'https://www.mtgtop8.com/format?f=ST',
          note: 'Résultats de tournois de la transition Standard ère Odyssey.',
        },
      ],
    },
  ],
  bans: [],
  setReleases: [
    { date: '2001-02-05', name: 'Planeshift', code: 'PLS' },
    { date: '2001-04-11', name: 'Seventh Edition', code: '7ED' },
    { date: '2001-06-04', name: 'Apocalypse', code: 'APC' },
    { date: '2001-10-01', name: 'Odyssey', code: 'ODY', note: 'Rotation du Standard : le bloc Masques et la Sixième Édition sortent du format' },
  ],
  representativeDecks: [
    {
      name: 'Fires of Yavimaya',
      slug: 'fires-standard-2001',
      period: 'Le méta Fires',
      archetype: 'aggro',
      summary:
        'Une évolution du Fires rouge-vert qui intègre Flametongue Kavu comme package removal-plus-menace. Fires of Yavimaya donne haste à Blastoderm et Saproling Burst pour une pression rapide. Solide contre le midrange fair mais vulnérable aux sweepers précoces et au control plein de contresorts.',
      keyCards: ['Fires of Yavimaya', 'Blastoderm', 'Saproling Burst', 'Flametongue Kavu', 'Birds of Paradise'],
      decklistPending: true,
      source: {
        title: 'Worlds 2001 - Jan Tomcani Dark Fires',
        publisher: 'MTG Wiki',
        url: 'https://mtg.fandom.com/wiki/World_Championship_Decks/2001',
      },
    },
    {
      name: 'Machine Head',
      slug: 'machine-head-standard-2001',
      period: 'Machine Head et Dark Fires',
      archetype: 'aggro',
      summary:
        'Un shell aggro-midrange noir-rouge bâti sur des créatures efficaces avec des déclencheurs d\'arrivée et du removal type burn. Plague Spitter et Flametongue Kavu balaient les petites créatures, Skizzik et Blazing Specter concluent, Terminate gère le reste. Punit l\'aggro large et le control lent, mais pressé par le lifegain et l\'aggro plus rapide.',
      keyCards: ['Plague Spitter', 'Flametongue Kavu', 'Skizzik', 'Blazing Specter', 'Terminate'],
      decklistPending: true,
      source: {
        title: 'World Championship Decks/2001 - Tom van de Logt',
        publisher: 'MTG Wiki',
        url: 'https://mtg.fandom.com/wiki/World_Championship_Decks/2001',
      },
    },
    {
      name: 'Go-Mar',
      slug: 'go-mar-standard-2001',
      period: 'Le méta Fires',
      archetype: 'control',
      summary:
        'Un shell control bleu-noir-blanc ancré par Dromar, the Banisher et la suite de charms multicolores. Fact or Fiction et Vindicate fournissent du card advantage flexible et des answers, pendant qu\'Absorb contre les menaces et gagne des points de vie. Excelle contre les decks de créatures et le midrange grindy, mais lent face au combo rapide.',
      keyCards: ['Dromar\'s Charm', 'Fact or Fiction', 'Absorb', 'Vindicate', 'Dromar, the Banisher'],
      decklistPending: true,
      source: {
        title: 'MTGTop8 - Go-Mar decklists 2001',
        publisher: 'MTGTop8',
        url: 'https://www.mtgtop8.com/format?f=ST',
      },
    },
    {
      name: 'Counter-Rebel',
      slug: 'counter-rebel-standard-2001',
      period: 'Le méta Fires',
      archetype: 'midrange',
      summary:
        'Un deck midrange bleu-blanc qui fusionne la chaîne Rebel avec de la permission. Lin Sivvi et le package Ramosian tutorent les menaces pendant qu\'Absorb et Fact or Fiction tiennent les stratégies adverses. Grind les decks fair mais lent face au combo et au removal dédié.',
      keyCards: ['Lin Sivvi, Defiant Hero', 'Absorb', 'Fact or Fiction', 'Ramosian Sergeant', 'Parallax Wave'],
      decklistPending: true,
      source: {
        title: 'MTGTop8 - Counter-Rebel 2001',
        publisher: 'MTGTop8',
        url: 'https://www.mtgtop8.com/format?f=ST',
      },
    },
  ],
}

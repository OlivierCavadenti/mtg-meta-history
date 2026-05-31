import type { YearFormatEntry } from '../types'

export const standard2017Fr: YearFormatEntry = {
  year: 2017,
  format: 'standard',
  title: 'Standard 2017',
  subtitle: 'L\'année des bannissements',
  shortLabel: 'Ère des bannissements Energy',
  summary:
    'Le Standard 2017 a été défini par une série de bannissements sans précédent. Janvier a vu Smuggler\'s Copter, Emrakul, the Promised End et Reflector Mage bannis. Mardu Vehicles a dominé le Pro Tour Aether Revolt avec six copies dans le Top 8. Le combo Saheeli-Felidar Guardian a déformé le format jusqu\'à un bannissement d\'urgence en avril. Aetherworks Marvel a été banni en juin. Une fois la poussière retombée, Temur Energy et Ramunap Red ont émergé comme les meilleurs decks durant la saison Ixalan. Le Pro Tour Ixalan a vu les variantes Energy constituer près de 50% du champ. L\'année s\'est terminée avec un nouveau bannissement imminent en janvier 2018.',
  headlineDeck: 'Temur Energy',
  eras: [
    {
      id: '2017-std-post-ban-1',
      name: 'Post-bannissement : Mardu Vehicles & Saheeli',
      start: '2017-01',
      end: '2017-04',
      dominantDecks: ['Mardu Vehicles', '4-Color Saheeli'],
      challengers: ['BG Constrictor', 'Jeskai Saheeli', 'Temur Dynavolt'],
      keyCards: [
        { name: 'Heart of Kiran', role: 'Vehicle puissant à 2 manas, piloté par des planeswalkers' },
        { name: 'Scrapheap Scrounger', role: 'Menace récursive pour les decks Vehicles' },
        { name: 'Gideon, Ally of Zendikar', role: 'Planeswalker pilotant Heart of Kiran' },
        { name: 'Saheeli Rai', role: 'Pièce de combo créant des copies infinies de Felidar Guardian' },
        { name: 'Felidar Guardian', role: 'Créature blink permettant le combo infini avec Saheeli Rai' },
        { name: 'Walking Ballista', role: 'Removal flexible et finisseur pour plusieurs archétypes' },
      ],
      summary:
        'Après les bannissements du 9 janvier de Smuggler\'s Copter, Emrakul et Reflector Mage, le format s\'est divisé entre Mardu Vehicles et le combo Saheeli-Felidar Guardian. Le Pro Tour Aether Revolt à Dublin (3-5 février) a été dominé par Mardu Vehicles : Lucas Esper Berthoud a gagné avec un record parfait de 10-0 en Standard, et six des huit decks du Top 8 étaient Mardu Vehicles. Pendant ce temps, 4-Color Saheeli menaçait d\'un combo infini au quatrième tour qui déformait la construction de decks. Le 26 avril, Wizards a publié un addendum d\'urgence bannissant Felidar Guardian, deux jours après avoir initialement annoncé aucun changement.',
      whyItDominated: [
        'Heart of Kiran plus Gideon fournissaient une horloge rapide et résiliente',
        'Scrapheap Scrounger revenait du cimetière de façon répétée',
        'Mardu Vehicles comptait six copies dans le Top 8 du Pro Tour Aether Revolt',
        'Saheeli-Felidar menaçait d\'un combo gagnant instantanément, forçant les adversaires à garder de l\'interaction',
      ],
      whyItEnded:
        'Felidar Guardian a été banni en urgence le 28 avril 2017, retirant le combo du format. La sortie d\'Amonkhet le 28 avril a apporté de nouvelles stratégies incluant le cycling et le tribal zombie.',
      confidence: 'high',
      sources: [
        {
          title: 'January 9, 2017 Banned and Restricted Announcement',
          publisher: 'Wizards of the Coast',
          url: 'https://magic.wizards.com/en/articles/archive/news/january-9-2017-banned-and-restricted-announcement-2017-01-09',
          date: '2017-01-09',
          note: 'Smuggler\'s Copter, Emrakul, the Promised End et Reflector Mage bannis en Standard.',
        },
        {
          title: 'Pro Tour Aether Revolt',
          publisher: 'MTG Wiki',
          url: 'https://mtg.fandom.com/wiki/Pro_Tour_Aether_Revolt',
          date: '2017-02-05',
          note: 'Lucas Esper Berthoud a gagné. Six decks Mardu Vehicles dans le Top 8.',
        },
        {
          title: 'Felidar Guardian Banned - Addendum to April 24 Announcement',
          publisher: 'MTGGoldfish',
          url: 'https://www.mtggoldfish.com/articles/banned-and-restricted-update-april-28-2017-felidar-guardian-banned',
          date: '2017-04-28',
          note: 'Bannissement d\'urgence de Felidar Guardian deux jours après avoir initialement annoncé aucun changement.',
        },
      ],
    },
    {
      id: '2017-std-marvel-summer',
      name: 'L\'été Marvel et son bannissement',
      start: '2017-04',
      end: '2017-07',
      dominantDecks: ['Temur Aetherworks Marvel', 'Mardu Vehicles'],
      challengers: ['Zombies', 'UR Control', 'Temur Energy'],
      keyCards: [
        { name: 'Aetherworks Marvel', role: 'Moteur de combo propulsant de grosses menaces en jeu' },
        { name: 'Ulamog, the Ceaseless Hunger', role: 'Récompense principale des activations de Marvel' },
        { name: 'Rogue Refiner', role: 'Génération d\'energy plus avantage de cartes' },
        { name: 'Attune with Aether', role: 'Fixation de mana et génération d\'energy' },
        { name: 'Glorybringer', role: 'Menace puissante avec haste d\'Amonkhet' },
      ],
      summary:
        'Avec Felidar Guardian parti et Amonkhet dans le format, les decks Aetherworks Marvel se sont orientés vers des builds Temur propulsant Ulamog, the Ceaseless Hunger. Le combo a de nouveau déformé le format, et le 13 juin 2017, Wizards a banni Aetherworks Marvel du Standard — la deuxième annonce de bannissement en six mois. Après le bannissement, le format s\'est brièvement ouvert avec Zombies, Mardu Vehicles et les builds émergentes de Temur Energy avant l\'arrivée d\'Hour of Devastation en juillet.',
      whyItDominated: [
        'Aetherworks Marvel pouvait déployer Ulamog dès le quatrième tour avec un bon spin',
        'La génération d\'energy n\'avait aucun contre-jeu du côté de l\'adversaire',
        'Le deck était suffisamment régulier pour déformer toute la construction de decks',
        'Même quand Marvel manquait, le socle Temur restait compétitif seul',
      ],
      whyItEnded:
        'Aetherworks Marvel a été banni du Standard le 19 juin 2017 (annoncé le 13 juin). Wizards a cité que le deck était « le deck le plus joué en Standard » et était « unfun » à cause de la variance du spin.',
      confidence: 'high',
      sources: [
        {
          title: 'Banned and Restricted Update, June 13 2017: Aetherworks Marvel Banned',
          publisher: 'MTGGoldfish',
          url: 'https://www.mtggoldfish.com/articles/banned-and-restricted-update-june-13-2017-aetherworks-marvel-banned',
          date: '2017-06-13',
          note: 'Aetherworks Marvel banni en Standard, effectif le 19 juin.',
        },
      ],
    },
    {
      id: '2017-std-energy-red',
      name: 'Temur Energy & Ramunap Red',
      start: '2017-07',
      end: '2017-12',
      dominantDecks: ['Temur Energy', 'Ramunap Red'],
      challengers: ['4-Color Energy', 'Sultai Energy', 'UW Approach', 'Mardu Vehicles', 'UW God-Pharaoh\'s Gift'],
      keyCards: [
        { name: 'Rogue Refiner', role: 'Energy plus pioche en une seule créature efficace' },
        { name: 'Attune with Aether', role: 'Energy et fixation de mana à un mana' },
        { name: 'Bristling Hydra', role: 'Payoff energy avec hexproof' },
        { name: 'The Scarab God', role: 'Finisseur résilient pour les builds energy bleu-noir' },
        { name: 'Hazoret the Fervent', role: 'Finisseur indestructible pour les decks rouges agressifs' },
        { name: 'Ramunap Ruins', role: 'Dégâts de reach gratuits depuis un emplacement de terrain' },
        { name: 'Longtusk Cub', role: 'Menace energy à deux manas qui grossissait rapidement' },
      ],
      summary:
        'Après tous les bannissements, le format s\'est installé dans un métagame à deux decks. Le Pro Tour Hour of Devastation à Kyoto (28-30 juillet) a été remporté par Paulo Vitor Damo da Rosa, avec Ramunap Red représentant 24,8% du champ du premier jour. Temur Energy a émergé comme le meilleur deck midrange, utilisant Rogue Refiner, Attune with Aether et Bristling Hydra. Au Pro Tour Ixalan à Albuquerque (3-5 novembre), les variantes Energy constituaient près de 50% du métagame, Seth Manfield remportant l\'épreuve avec Sultai Energy. Le format se dirigeait une fois de plus vers des bannissements.',
      whyItDominated: [
        'Temur Energy n\'avait aucun mauvais matchup et un socle midrange inégalé',
        'Attune with Aether et Rogue Refiner rendaient le socle energy trop régulier',
        'Ramunap Red punissait les decks lents et infligeait des dégâts gratuits via Ramunap Ruins',
        'Hazoret the Fervent était presque impossible à retirer pour de nombreux decks',
        'Les variantes Energy constituaient près de 50% du métagame du premier jour du Pro Tour Ixalan',
      ],
      whyItEnded:
        'Le 15 janvier 2018, Wizards a banni Attune with Aether, Rogue Refiner, Ramunap Ruins et Rampaging Ferocidon du Standard. C\'était la quatrième annonce de bannissement en Standard en un peu plus d\'un an, ciblant à la fois Temur Energy et Ramunap Red.',
      confidence: 'high',
      sources: [
        {
          title: 'Pro Tour Hour of Devastation',
          publisher: 'MTG Wiki',
          url: 'https://mtg.fandom.com/wiki/Pro_Tour_Hour_of_Devastation',
          date: '2017-07-30',
          note: 'Paulo Vitor Damo da Rosa a gagné. Ramunap Red représentait 24,8% du champ.',
        },
        {
          title: 'Pro Tour Ixalan: By the Numbers',
          publisher: 'MTGGoldfish',
          url: 'https://www.mtggoldfish.com/articles/pro-tour-ixalan-by-the-numbers',
          date: '2017-11-05',
          note: 'Les variantes Energy constituaient ~50% du métagame du premier jour. Seth Manfield a gagné avec Sultai Energy.',
        },
        {
          title: 'Banned and Restricted Update, January 15 2018',
          publisher: 'MTGGoldfish',
          url: 'https://www.mtggoldfish.com/articles/banned-and-restricted-update-january-15-2018-attune-refiner-ferocidon-ramunap-ruins-banned',
          date: '2018-01-15',
          note: 'Attune with Aether, Rogue Refiner, Ramunap Ruins, Rampaging Ferocidon bannis.',
        },
      ],
    },
  ],
  bans: [
    {
      date: '2017-01-20',
      cards: ['Smuggler\'s Copter', 'Emrakul, the Promised End', 'Reflector Mage'],
      explanation:
        'Smuggler\'s Copter déformait trop le format, apparaissant dans pratiquement tous les decks agressifs et midrange. Emrakul, the Promised End créait des patterns de jeu profondément frustrants via Aetherworks Marvel. Reflector Mage a été ciblé pour affaiblir UW Flash. C\'était le premier bannissement en Standard depuis Jace, the Mind Sculptor et Stoneforge Mystic en 2011.',
      source: {
        title: 'January 9, 2017 Banned and Restricted Announcement',
        publisher: 'Wizards of the Coast',
        url: 'https://magic.wizards.com/en/articles/archive/news/january-9-2017-banned-and-restricted-announcement-2017-01-09',
        date: '2017-01-09',
      },
    },
    {
      date: '2017-04-28',
      cards: ['Felidar Guardian'],
      explanation:
        'Felidar Guardian créait un combo infini avec Saheeli Rai qui déformait la construction de decks et le métagame. Wizards avait initialement annoncé aucun changement le 24 avril, mais a fait volte-face deux jours plus tard avec un addendum d\'urgence bannissant la carte à compter du 28 avril.',
      source: {
        title: 'Addendum to April 24, 2017 Banned and Restricted Announcement',
        publisher: 'Wizards of the Coast',
        url: 'https://magic.wizards.com/en/news/announcements/april-24-2017-banned-and-restricted-announcement-2017-04-24',
        date: '2017-04-26',
      },
    },
    {
      date: '2017-06-19',
      cards: ['Aetherworks Marvel'],
      explanation:
        'Aetherworks Marvel était le deck le plus joué en Standard et créait des expériences de jeu polarisantes. Le spin révélant Ulamog, the Ceaseless Hunger dès le quatrième tour laissait les adversaires impuissants. C\'était le troisième bannissement en Standard en six mois.',
      source: {
        title: 'Banned and Restricted Update, June 13 2017',
        publisher: 'MTGGoldfish',
        url: 'https://www.mtggoldfish.com/articles/banned-and-restricted-update-june-13-2017-aetherworks-marvel-banned',
        date: '2017-06-13',
      },
    },
  ],
  setReleases: [
    { date: '2017-01-20', name: 'Aether Revolt', code: 'AER' },
    { date: '2017-04-28', name: 'Amonkhet', code: 'AKH' },
    { date: '2017-07-14', name: 'Hour of Devastation', code: 'HOU' },
    { date: '2017-09-29', name: 'Ixalan', code: 'XLN', note: 'Rotation du Standard : Battle for Zendikar et Oath of the Gatewatch sortent du format' },
  ],
  representativeDecks: [
    {
      name: 'Mardu Vehicles',
      slug: 'mardu-vehicles-standard-2017',
      period: 'Post-bannissement : Mardu Vehicles & Saheeli',
      archetype: 'aggro',
      summary:
        'Un deck aggro véhicule noir-rouge-blanc qui équipage Heart of Kiran avec des créatures bon marché comme Toolcraft Exemplar et Scrapheap Scrounger. Walking Ballista scale pour removal et dégâts, Gideon double comme créature et planeswalker. Rapide et résistant face aux decks fair.',
      keyCards: ['Heart of Kiran', 'Gideon, Ally of Zendikar', 'Scrapheap Scrounger', 'Toolcraft Exemplar', 'Walking Ballista'],
      decklistPending: true,
      source: {
        title: 'Pro Tour Aether Revolt Top 8',
        publisher: 'MTG Wiki',
        url: 'https://mtg.fandom.com/wiki/Pro_Tour_Aether_Revolt',
      },
    },
    {
      name: '4-Color Saheeli',
      slug: '4-color-saheeli-standard-2017',
      period: 'Post-bannissement : Mardu Vehicles & Saheeli',
      archetype: 'combo',
      summary:
        'Un deck combo qui met Saheeli Rai et Felidar Guardian en jeu ensemble, flickerant Saheeli pour des copies hastées infinies. Rogue Refiner et Whirler Virtuoso construisent de l\'energy en plans de secours, Attune with Aether rampe. Combo en un coup au tour quatre mais vulnérable au removal à instant speed.',
      keyCards: ['Saheeli Rai', 'Felidar Guardian', 'Rogue Refiner', 'Whirler Virtuoso', 'Attune with Aether'],
      decklistPending: true,
      source: {
        title: 'Pro Tour Aether Revolt: By The Numbers',
        publisher: 'MTGGoldfish',
        url: 'https://www.mtggoldfish.com/articles/pro-tour-aether-revolt-by-the-numbers',
      },
    },
    {
      name: 'Temur Energy',
      slug: 'temur-energy-standard-2017',
      period: 'Temur Energy & Ramunap Red',
      archetype: 'midrange',
      summary:
        'Un deck midrange bleu-rouge-vert alimenté par l\'energy de Rogue Refiner et Attune with Aether, nourrissant la croissance de Longtusk Cub et l\'activation hexproof de Bristling Hydra. The Scarab God recur les créatures. Grindy et résistant mais pressé par les contresorts.',
      keyCards: ['Rogue Refiner', 'Attune with Aether', 'Bristling Hydra', 'Longtusk Cub', 'The Scarab God'],
      decklistPending: true,
      source: {
        title: 'Pro Tour Ixalan metagame breakdown',
        publisher: 'MTGGoldfish',
        url: 'https://www.mtggoldfish.com/articles/pro-tour-ixalan-by-the-numbers',
      },
    },
    {
      name: 'Ramunap Red',
      slug: 'ramunap-red-standard-2017',
      period: 'Temur Energy & Ramunap Red',
      archetype: 'aggro',
      summary:
        'Un deck aggro mono-rouge centré sur Hazoret the Fervent comme quatre-drop indestructible et Ramunap Ruins comme reach. Earthshaker Khenra et Ahn-Crop Crasher punissent les blockers au sol, Bomat Courier pioche des cartes supplémentaires. Punit les ouvertures lentes mais vulnérable au lifegain.',
      keyCards: ['Hazoret the Fervent', 'Ramunap Ruins', 'Earthshaker Khenra', 'Ahn-Crop Crasher', 'Bomat Courier'],
      decklistPending: true,
      source: {
        title: 'Pro Tour Hour of Devastation Standard decks',
        publisher: 'MTGGoldfish',
        url: 'https://www.mtggoldfish.com/tournament/pro-tour-hour-of-devastation',
      },
    },
  
    {
      name: 'BG Constrictor',
      slug: 'bg-constrictor-standard-2017',
      period: 'Post-bannissement : Mardu Vehicles & Saheeli',
      archetype: 'midrange',
      summary:
        'Un deck midrange noir-vert centré sur Winding Constrictor doublant les marqueurs +1/+1 de Walking Ballista, Verdurous Gearhulk et Rishkar, Peema Renegade. Fatal Push gère les menaces à bas coût. Grindy et résistant mais pressé par les sweepers.',
      keyCards: ['Winding Constrictor', 'Walking Ballista', 'Verdurous Gearhulk', 'Rishkar, Peema Renegade', 'Fatal Push'],
      decklistPending: true,
    },
    {
      name: 'Jeskai Saheeli',
      slug: 'jeskai-saheeli-standard-2017',
      period: 'Post-bannissement : Mardu Vehicles & Saheeli',
      archetype: 'combo',
      summary:
        'Un deck combo-control bleu-rouge-blanc qui associe Saheeli Rai à Felidar Guardian pour des copies hastées infinies, pendant que Torrential Gearhulk et Glimmer of Genius fournissent un plan B control. Harnessed Lightning retire les blockers. Combo solide avec plan B control mais vulnérable à la disruption.',
      keyCards: ['Saheeli Rai', 'Felidar Guardian', 'Torrential Gearhulk', 'Glimmer of Genius', 'Harnessed Lightning'],
      decklistPending: true,
    },
    {
      name: 'Temur Dynavolt',
      slug: 'temur-dynavolt-standard-2017',
      period: 'Post-bannissement : Mardu Vehicles & Saheeli',
      archetype: 'control',
      summary:
        'Un deck control bleu-rouge qui construit de l\'energy via Glimmer of Genius et Harnessed Lightning pour activer Dynavolt Tower comme burst récurrent de 3 dégâts. Torrential Gearhulk conclut en flashback les instants, Whirler Virtuoso fournit des corps. Solide contre les decks de créatures.',
      keyCards: ['Dynavolt Tower', 'Glimmer of Genius', 'Torrential Gearhulk', 'Harnessed Lightning', 'Whirler Virtuoso'],
      decklistPending: true,
    },
    {
      name: 'Temur Aetherworks Marvel',
      slug: 'temur-aetherworks-marvel-standard-2017',
      period: 'L\'été Marvel et son bannissement',
      archetype: 'combo',
      summary:
        'Un deck combo bleu-rouge-vert qui construit de l\'energy via Attune with Aether, Rogue Refiner et Woodweaver\'s Puzzleknot pour spin Aetherworks Marvel et tricher Ulamog, the Ceaseless Hunger en jeu. Goldfish fiable mais vulnérable aux contresorts.',
      keyCards: ['Aetherworks Marvel', 'Ulamog, the Ceaseless Hunger', 'Rogue Refiner', 'Attune with Aether', 'Woodweaver\'s Puzzleknot'],
      decklistPending: true,
    },
    {
      name: 'Zombies',
      slug: 'zombies-standard-2017',
      period: 'L\'été Marvel et son bannissement',
      archetype: 'aggro',
      summary:
        'Un deck aggro tribal Zombie mono-noir où Cryptbreaker pioche et produit des tokens, Lord of the Accursed et Diregraf Colossus pump l\'équipe, et Liliana\'s Mastery inonde le board. Dark Salvation retire les blockers et fait grandir l\'armée. Solide contre les decks fair mais pressé par l\'exil.',
      keyCards: ['Cryptbreaker', 'Lord of the Accursed', 'Diregraf Colossus', 'Dark Salvation', 'Liliana\'s Mastery'],
      decklistPending: true,
    },
    {
      name: 'UR Control',
      slug: 'ur-control-standard-2017',
      period: 'L\'été Marvel et son bannissement',
      archetype: 'control',
      summary:
        'Un deck control bleu-rouge bâti sur Torrential Gearhulk flashbackant Glimmer of Genius ou Harnessed Lightning pour la value. Disallow arrête n\'importe quoi, Magma Spray exile les petites menaces. Solide contre les decks de créatures mais lent face au combo rapide.',
      keyCards: ['Torrential Gearhulk', 'Glimmer of Genius', 'Harnessed Lightning', 'Disallow', 'Magma Spray'],
      decklistPending: true,
    },
    {
      name: '4-Color Energy',
      slug: '4-color-energy-standard-2017',
      period: 'Temur Energy & Ramunap Red',
      archetype: 'midrange',
      summary:
        'Un deck midrange energy quatre couleurs combinant les meilleures créatures energy — Rogue Refiner, Longtusk Cub, Bristling Hydra — avec The Scarab God comme finisher récurrent. Attune with Aether rampe et construit de l\'energy. Grindy et résistant mais pressé par les contresorts.',
      keyCards: ['Attune with Aether', 'Rogue Refiner', 'Longtusk Cub', 'Bristling Hydra', 'The Scarab God'],
      decklistPending: true,
    },
    {
      name: 'Sultai Energy',
      slug: 'sultai-energy-standard-2017',
      period: 'Temur Energy & Ramunap Red',
      archetype: 'midrange',
      summary:
        'Un deck midrange energy bleu-noir-vert bâti sur Rogue Refiner, The Scarab God et Vraska, Relic Seeker. Fatal Push retire les menaces à bas coût, Attune with Aether rampe. L\'eternalize de The Scarab God et son trigger d\'exil-Zombie le rendent presque intuable. Solide contre les decks fair.',
      keyCards: ['Attune with Aether', 'Rogue Refiner', 'The Scarab God', 'Vraska, Relic Seeker', 'Fatal Push'],
      decklistPending: true,
    },
    {
      name: 'UW Approach',
      slug: 'uw-approach-standard-2017',
      period: 'Temur Energy & Ramunap Red',
      archetype: 'control',
      summary:
        'Un deck control bleu-blanc bâti sur Approach of the Second Sun comme win condition alternative jouée deux fois. Settle the Wreckage et Fumigate balaient, Glimmer of Genius et Torrential Gearhulk fournissent le card advantage. Inévitable mais lent face au combo rapide.',
      keyCards: ['Approach of the Second Sun', 'Settle the Wreckage', 'Fumigate', 'Glimmer of Genius', 'Torrential Gearhulk'],
      decklistPending: true,
    },
    {
      name: 'UW God-Pharaoh\'s Gift',
      slug: 'uw-god-pharaohs-gift-standard-2017',
      period: 'Temur Energy & Ramunap Red',
      archetype: 'combo',
      summary:
        'Un deck reanimator-combo bleu-blanc qui remplit le graveyard avec Champion of Wits et Gate to the Afterlife pour fetcher God-Pharaoh\'s Gift, puis exile les créatures du graveyard pour des tokens Angel 4/4 hasté gratuits. Refurbish fournit une route de réanimation de secours. Moteur de value dévastateur mais vulnérable à la hate graveyard.',
      keyCards: ['God-Pharaoh\'s Gift', 'Refurbish', 'Angel of Invention', 'Champion of Wits', 'Gate to the Afterlife'],
      decklistPending: true,
    },
  ],
}

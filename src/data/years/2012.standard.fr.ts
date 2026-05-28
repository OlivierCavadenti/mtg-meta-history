import type { YearFormatEntry } from '../types'

export const standard2012Fr: YearFormatEntry = {
  year: 2012,
  format: 'standard',
  title: 'Standard 2012',
  subtitle: 'La domination de Delver et l\'essor de Thragtusk',
  shortLabel: 'Delver & Thragtusk',
  summary:
    'Le Standard 2012 fut l\'histoire de deux formats séparés par la rotation d\'octobre. Les neuf premiers mois appartenaient à UW Delver, qui exploitait Delver of Secrets, Snapcaster Mage et des sorts Phyrexian bon marché pour créer le shell tempo le plus efficace depuis des années. Brian Kibler remporta le Pro Tour Dark Ascension avec Wolf Run Ramp, mais Delver resta le deck à battre tout l\'été. À l\'arrivée de Return to Ravnica en octobre, le format se transforma complètement. Thragtusk et Restoration Angel devinrent les cartes déterminantes, propulsant Jund Midrange, Bant Control et UWR Flash dans un métagame diversifié mais orienté midrange.',
  headlineDeck: 'UW Delver',
  eras: [
    {
      id: '2012-std-delver',
      name: 'L\'ère Delver',
      start: '2012-01',
      end: '2012-05',
      dominantDecks: ['UW Delver'],
      challengers: ['Wolf Run Ramp', 'UB Zombies', 'RG Aggro', 'Esper Spirits'],
      keyCards: [
        { name: 'Delver of Secrets', role: 'Volant 3/2 à un mana une fois retourné, la menace définissant le format' },
        { name: 'Snapcaster Mage', role: 'Flashback sur tout éphémère ou rituel, permettant tempo et valeur' },
        { name: 'Geist of Saint Traft', role: 'Menace hexproof à trois manas attaquant pour six avec son jeton Ange' },
        { name: 'Vapor Snag', role: 'Sort de renvoi à un mana servant à la fois de jeu de tempo et de drain de vie' },
        { name: 'Ponder', role: 'Préparait les retournements de Delver et assurait des pioches régulières' },
        { name: 'Gitaxian Probe', role: 'Information gratuite et décompte de sorts pour Delver' },
      ],
      summary:
        'UW Delver était le deck emblématique du Standard début 2012. Le deck combinait un volant 3/2 à un mana avec les meilleurs sorts bon marché du format, incluant des incontournables à mana Phyrexian comme Gitaxian Probe, Vapor Snag et Gut Shot. Ponder préparait les retournements de Delver avec une quasi-certitude. Snapcaster Mage apportait de la valeur en flashback, et Geist of Saint Traft offrait une horloge hexproof. Le deck pouvait déployer une menace au premier tour et la protéger avec de la contremagic et du renvoi pour le reste de la partie. Au Pro Tour Dark Ascension en février, Brian Kibler gagna avec Wolf Run Ramp, mais les variantes Delver dominèrent le métagame général tout le printemps.',
      whyItDominated: [
        'Delver of Secrets était la créature la plus efficace du format à un mana pour un volant 3/2',
        'Ponder garantissait virtuellement les retournements de Delver tout en lissant les pioches',
        'Les sorts à mana Phyrexian comme Gitaxian Probe et Gut Shot étaient effectivement gratuits',
        'Snapcaster Mage apportait du card advantage tout en maintenant le tempo',
        'Geist of Saint Traft était quasi impossible à retirer de manière rentable',
        'Mana Leak et Vapor Snag protégeaient les menaces à moindre coût',
      ],
      whyItEnded:
        'Avacyn Restored en mai 2012 introduisit de nouveaux outils qui bouleversèrent le métagame. Cavern of Souls neutralisait la contremagic, et Restoration Angel offrait une valeur puissante sur les déclencheurs d\'entrée en jeu. Delver resta fort mais fit face à une concurrence croissante.',
      confidence: 'high',
      sources: [
        {
          title: 'Pro Tour Dark Ascension coverage',
          publisher: 'MTGTop8',
          url: 'https://mtgtop8.com/event?e=2518',
          date: '2012-02-12',
          note: 'Brian Kibler gagna avec Wolf Run Ramp. Jon Finkel atteignit le Top 8 avec Delver Spirits. Nombreuses variantes Delver dans le champ.',
        },
        {
          title: 'Pro Tour Dark Ascension - MTG Wiki',
          publisher: 'Fandom',
          url: 'https://mtg.fandom.com/wiki/Pro_Tour_Dark_Ascension',
          date: '2012-02-12',
          note: 'Le Top 8 incluait Kibler (Wolf Run Ramp), PV (Wolf Run Ramp), Jon Finkel (Delver Spirits) et Matthew Costa (UW Delver).',
        },
      ],
    },
    {
      id: '2012-std-avr-summer',
      name: 'Delver et Naya Pod',
      start: '2012-05',
      end: '2012-10',
      dominantDecks: ['UW Delver', 'Naya Pod'],
      challengers: ['Wolf Run Ramp', 'UB Zombies', 'RG Aggro', 'Variantes Delver-Pike'],
      keyCards: [
        { name: 'Restoration Angel', role: 'Effet flash de clignotement réinitialisant les déclencheurs d\'entrée en jeu' },
        { name: 'Cavern of Souls', role: 'Créatures non-contrecarrables, affaiblissant le plan de contremagic de Delver' },
        { name: "Runechanter's Pike", role: 'Transformait Delver en menace massive avec first strike dans les builds riches en sorts' },
        { name: 'Bonfire of the Damned', role: 'Balayage miracle punissant les stratégies de go-wide' },
        { name: 'Zealous Conscripts', role: 'Volait des permanents à l\'entrée en jeu, pièce combo avec Kiki-Jiki dans Pod' },
      ],
      summary:
        'Avacyn Restored remodela le métagame sans détrôner Delver. Cavern of Souls donna aux decks de créatures une immunité contre la contremagic, et Restoration Angel créa de puissantes chaînes de clignotement avec des cartes comme Blade Splicer et Huntmaster of the Fells. Bonfire of the Damned ajouta un élément miracle dévastateur. UW Delver s\'adapta avec des builds Runechanter\'s Pike transformant même un Delver retourné en attaquant létal avec first strike. Naya Pod avec des chaînes de Birthing Pod gagna du terrain. Au Players Championship 2012 en août, Yuuya Watanabe remporta l\'événement inaugural. Le format était diversifié mais Delver restait l\'archétype le plus joué à l\'approche de la rotation.',
      whyItDominated: [
        'UW Delver s\'adapta au nouveau métagame avec Runechanter\'s Pike pour des dégâts massifs',
        'Restoration Angel créait des synergies puissantes dans de multiples archétypes',
        'Cavern of Souls poussait le format vers des stratégies basées sur les créatures',
        'Bonfire of the Damned punissait les stratégies de petites créatures et récompensait le ramp',
        'Aucun deck n\'atteignit le niveau de domination de Caw-Blade, maintenant la santé du format',
      ],
      whyItEnded:
        'La rotation d\'octobre 2012 retira le bloc Scars of Mirrodin et Magic 2012, éliminant Ponder, Vapor Snag, Gitaxian Probe, Mana Leak et d\'autres facilitateurs clés de Delver. Return to Ravnica apporta un format Standard complètement nouveau.',
      confidence: 'high',
      sources: [
        {
          title: '2012 Players Championship',
          publisher: 'Fandom',
          url: 'https://mtg.fandom.com/wiki/2012_Players_Championship',
          date: '2012-08-31',
          note: 'Yuuya Watanabe remporta le Players Championship inaugural à Seattle.',
        },
        {
          title: 'Will Delver Remain Dominant?',
          publisher: 'PureMTGO',
          url: 'https://puremtgo.com/articles/will-delver-remain-dominant',
          note: 'Analyse de la domination de Delver et de sa part de métagame durant l\'été 2012.',
        },
      ],
    },
    {
      id: '2012-std-rtr',
      name: 'Les guerres midrange Thragtusk',
      start: '2012-10',
      end: '2012-12',
      dominantDecks: ['Jund Midrange', 'Bant Control'],
      challengers: ['UWR Flash', 'BR Zombies', 'Mono-Red Aggro', 'Selesnya Aggro'],
      keyCards: [
        { name: 'Thragtusk', role: 'Créature de valeur à cinq manas : gain de vie à l\'entrée, jeton Bête à la sortie' },
        { name: 'Restoration Angel', role: 'Clignotait Thragtusk pour une valeur répétée et une présence au plateau' },
        { name: 'Huntmaster of the Fells', role: 'Créature deux-pour-un avec gain de vie et valeur de transformation répétable' },
        { name: 'Olivia Voldaren', role: 'Moteur d\'élimination et domination du plateau dans Jund' },
        { name: "Sphinx's Revelation", role: 'Pioche de cartes massive et gain de vie définissant les miroirs contrôle' },
      ],
      summary:
        'Return to Ravnica transforma complètement le Standard. Avec la disparition des sorts bon marché de Delver, le format ralentit et devint orienté midrange. Thragtusk et Restoration Angel formaient le moteur déterminant : clignoter Thragtusk faisait gagner cinq points de vie et laissait un jeton Bête 3/3. Jund Midrange combinait cela avec Huntmaster of the Fells, Olivia Voldaren et Bonfire of the Damned. Bant Control exploitait Sphinx\'s Revelation pour un card advantage massif. UWR Flash utilisait Snapcaster Mage, Restoration Angel et de la contremagic pour un jeu réactif. La base de mana en shocklands de Return to Ravnica permettait des decks tricolores fiables dans tout le format.',
      whyItDominated: [
        'Thragtusk plus Restoration Angel formait le moteur de valeur le plus puissant du format',
        'Jund combinait les meilleurs sorts d\'élimination, créatures et planeswalkers dans trois couleurs',
        'Sphinx\'s Revelation offrait aux decks contrôle un moteur de card advantage imbattable en fin de partie',
        'Les shocklands de Return to Ravnica permettaient des bases de mana tricolores fiables',
        'Le format récompensait le grinding midrange plutôt que les stratégies aggro rapides',
      ],
      whyItEnded:
        'Le métagame continua d\'évoluer en 2013 avec la sortie de Gatecrash, qui introduisit de nouvelles guildes et archétypes incluant The Aristocrats et Naya Blitz.',
      confidence: 'high',
      sources: [
        {
          title: 'Thragtusk: Beat \'Em or Join \'Em?',
          publisher: 'Quiet Speculation',
          url: 'https://www.quietspeculation.com/2012/11/thragtusk-beat-em-or-join-em/',
          date: '2012-11',
          note: 'Analyse de la domination de Thragtusk dans le Standard post-rotation.',
        },
        {
          title: 'The New Best Decks With Return To Ravnica',
          publisher: 'Star City Games',
          url: 'https://articles.starcitygames.com/articles/the-new-best-decks-with-return-to-ravnica/',
          note: 'Analyse précoce du métagame après la rotation de Return to Ravnica.',
        },
      ],
    },
  ],
  setReleases: [
    { date: '2012-02-03', name: 'Dark Ascension', code: 'DKA' },
    { date: '2012-05-04', name: 'Avacyn Restored', code: 'AVR', note: 'Introduction de Restoration Angel, Cavern of Souls et Bonfire of the Damned' },
    { date: '2012-07-13', name: 'Magic 2013', code: 'M13', note: 'Introduction de Thragtusk' },
    { date: '2012-10-05', name: 'Return to Ravnica', code: 'RTR', note: 'Rotation du Standard : le bloc Scars of Mirrodin et M12 sortent du format' },
  ],
  representativeDecks: [
    {
      name: 'UW Delver',
      slug: 'uw-delver-standard-2012',
      period: 'L\'ère Delver',
      archetype: 'tempo',
      summary:
        'Un deck tempo bleu-blanc bâti sur Delver of Secrets et Geist of Saint Traft comme clocks bon marché et difficiles à bloquer. Mana Leak, Vapor Snag et Snapcaster Mage maintiennent le tempo et refondent l\'interaction. Ponder lisse le deck. Punit les pioches gourmandes mais pressé par les sweepers et le lifegain.',
      keyCards: ['Delver of Secrets', 'Snapcaster Mage', 'Geist of Saint Traft', 'Ponder', 'Vapor Snag', 'Mana Leak'],
      source: {
        title: 'UW Delver decklists 2012',
        publisher: 'MTGGoldfish',
        url: 'https://www.mtggoldfish.com/deck/896946',
      },
    },
    {
      name: 'Wolf Run Ramp',
      slug: 'wolf-run-ramp-standard-2012',
      period: 'L\'ère Delver',
      archetype: 'ramp',
      summary:
        'Un deck ramp rouge-vert qui utilise Green Sun\'s Zenith pour trouver Primeval Titan, qui fetch Kessig Wolf Run pour un trample létal en un coup. Huntmaster of the Fells fournit de la value midrange, Inferno Titan conclut. Galvanic Blast retire les blockers. Inévitable mais vulnérable aux contresorts.',
      keyCards: ['Primeval Titan', 'Inferno Titan', 'Kessig Wolf Run', 'Huntmaster of the Fells', 'Green Sun\'s Zenith', 'Galvanic Blast'],
      source: {
        title: 'Pro Tour Dark Ascension - Brian Kibler',
        publisher: 'MTGTop8',
        url: 'https://mtgtop8.com/event?e=2518',
        date: '2012-02-12',
      },
    },
    {
      name: 'UB Zombies',
      slug: 'ub-zombies-standard-2012',
      period: 'L\'ère Delver',
      archetype: 'aggro',
      summary:
        'Un deck aggro tribal Zombie bleu-noir centré sur Gravecrawler revenant du graveyard et Geralf\'s Messenger drainant à l\'arrivée. Phantasmal Image copie les Zombies clés, Tragic Slip et Mortarpod retirent les blockers. Rapide et résistant mais vulnérable au removal d\'exil.',
      keyCards: ['Gravecrawler', 'Geralf\'s Messenger', 'Diregraf Ghoul', 'Phantasmal Image', 'Tragic Slip', 'Mortarpod'],
      source: {
        title: 'MTGTop8 Standard 2012 Zombies decklists',
        publisher: 'MTGTop8',
        url: 'https://www.mtgtop8.com/format?f=ST',
      },
    },
    {
      name: 'Jund Midrange',
      slug: 'jund-midrange-standard-2012',
      period: 'Les guerres midrange Thragtusk',
      archetype: 'midrange',
      summary:
        'Un deck midrange noir-rouge-vert alimenté par Thragtusk pour un 5/3 plus un trigger de lifegain, et Huntmaster of the Fells pour de la value répétée. Olivia Voldaren contrôle le board, Bonfire of the Damned balaie depuis un miracle. Garruk conclut. Grindy et résistant face aux decks fair.',
      keyCards: ['Thragtusk', 'Huntmaster of the Fells', 'Olivia Voldaren', 'Bonfire of the Damned', 'Farseek', 'Garruk, Primal Hunter'],
      source: {
        title: 'Jund Midrange - Reid Duke',
        publisher: 'MTGTop8',
        url: 'https://www.mtgtop8.com/event?e=5383&d=231085&f=ST',
      },
    },
    {
      name: 'Bant Control',
      slug: 'bant-control-standard-2012',
      period: 'Les guerres midrange Thragtusk',
      archetype: 'control',
      summary:
        'Un deck control bleu-blanc-vert centré sur Sphinx\'s Revelation comme refill de late game. Thragtusk stabilise les points de vie, Restoration Angel le blink pour de la value supplémentaire, Supreme Verdict balaie de manière incontrable. Jace, Architect of Thought contrôle les planeswalkers et le board. Outvalue les decks fair mais lent face au combo rapide.',
      keyCards: ['Sphinx\'s Revelation', 'Thragtusk', 'Restoration Angel', 'Supreme Verdict', 'Jace, Architect of Thought', 'Farseek'],
      source: {
        title: 'The New Best Decks With Return To Ravnica',
        publisher: 'Star City Games',
        url: 'https://articles.starcitygames.com/articles/the-new-best-decks-with-return-to-ravnica/',
      },
    },
    {
      name: 'UWR Flash',
      slug: 'uwr-flash-standard-2012',
      period: 'Les guerres midrange Thragtusk',
      archetype: 'tempo',
      summary:
        'Un deck tempo-control bleu-blanc-rouge bâti sur Snapcaster Mage et Restoration Angel déclenchant des effets de flicker pour la value. Sphinx\'s Revelation recharge la main, Searing Spear et Azorius Charm fournissent l\'interaction flexible, Boros Reckoner stabilise. Solide contre le midrange fair mais pressé par le combo.',
      keyCards: ['Snapcaster Mage', 'Restoration Angel', 'Boros Reckoner', 'Searing Spear', 'Azorius Charm', 'Sphinx\'s Revelation'],
      source: {
        title: 'MTGTop8 UWR Flash decklists',
        publisher: 'MTGTop8',
        url: 'https://www.mtgtop8.com/archetype?a=266&meta=74',
      },
    },
  
    {
      name: 'RG Aggro',
      slug: 'rg-aggro-standard-2012',
      period: 'L\'ère Delver',
      archetype: 'aggro',
      summary:
        'Un deck aggro rouge-vert alimenté par le haste et l\'undying de Strangleroot Geist, Huntmaster of the Fells flippant pour de la value, et Hellrider pour finir au burn. Birds of Paradise accélère, Garruk, Primal Hunter pioche. Solide contre le control mais pressé par les sweepers et le lifegain.',
      keyCards: ['Strangleroot Geist', 'Huntmaster of the Fells', 'Hellrider', 'Birds of Paradise', 'Garruk, Primal Hunter'],
    },
    {
      name: 'Esper Spirits',
      slug: 'esper-spirits-standard-2012',
      period: 'L\'ère Delver',
      archetype: 'tempo',
      summary:
        'Un deck tempo tribal Spirit bleu-blanc-noir qui pump Drogskol Captain avec des créatures Spirit volantes. Geist of Saint Traft sert de clock imblocable, Lingering Souls inonde le board de tokens volants, Mana Leak protège les tours clés, Snapcaster Mage flashback les instants. Solide contre les decks fair mais vulnérable aux sweepers.',
      keyCards: ['Drogskol Captain', 'Geist of Saint Traft', 'Lingering Souls', 'Mana Leak', 'Snapcaster Mage'],
    },
    {
      name: 'Naya Pod',
      slug: 'naya-pod-standard-2012',
      period: 'Delver et Naya Pod',
      archetype: 'midrange',
      summary:
        'Un deck toolbox rouge-vert-blanc qui utilise Birthing Pod pour grimper la courbe — sacrifiant Restoration Angel pour Thragtusk pour Avacyn, Angel of Hope. Huntmaster of the Fells fournit de la value incidente. Très flexible mais pressé par l\'aggro rapide et la discard.',
      keyCards: ['Birthing Pod', 'Restoration Angel', 'Huntmaster of the Fells', 'Thragtusk', 'Avacyn, Angel of Hope'],
    },
    {
      name: 'Delver-Pike variants',
      slug: 'delver-pike-variants-standard-2012',
      period: 'Delver et Naya Pod',
      archetype: 'tempo',
      summary:
        'Un deck tempo basé sur le bleu, bâti sur Delver of Secrets et Runechanter\'s Pike — transformant un un-drop ou un Snapcaster Mage en menace létale en un coup. Vapor Snag et Mana Leak maintiennent le tempo. Rapide et punissant mais vulnérable aux sweepers et au lifegain.',
      keyCards: ['Delver of Secrets', 'Runechanter\'s Pike', 'Snapcaster Mage', 'Vapor Snag', 'Mana Leak'],
    },
    {
      name: 'BR Zombies',
      slug: 'br-zombies-standard-2012',
      period: 'Les guerres midrange Thragtusk',
      archetype: 'aggro',
      summary:
        'Un deck aggro tribal Zombie noir-rouge où Gravecrawler revient du graveyard, Falkenrath Aristocrat sacrifie pour des triggers, et Lightning Mauler donne haste. Geralf\'s Messenger draine à l\'arrivée. Résistant et explosif mais vulnérable au removal d\'exil.',
      keyCards: ['Gravecrawler', 'Geralf\'s Messenger', 'Diregraf Ghoul', 'Falkenrath Aristocrat', 'Lightning Mauler'],
    },
    {
      name: 'Mono-Red Aggro',
      slug: 'mono-red-aggro-standard-2012',
      period: 'Les guerres midrange Thragtusk',
      archetype: 'aggro',
      summary:
        'Un deck aggro mono-rouge bâti sur la croissance vampire de Stromkirk Noble et le trigger de dégâts d\'Hellrider. Searing Spear, Pillar of Flame et Thunderous Wrath fournissent le reach. Pillar of Flame exile pour contrer la récurrence Zombie. Punit les ouvertures lentes mais vulnérable au lifegain.',
      keyCards: ['Stromkirk Noble', 'Hellrider', 'Searing Spear', 'Pillar of Flame', 'Thunderous Wrath'],
    },
    {
      name: 'Selesnya Aggro',
      slug: 'selesnya-aggro-standard-2012',
      period: 'Les guerres midrange Thragtusk',
      archetype: 'aggro',
      summary:
        'Un deck aggro vert-blanc jouant Loxodon Smiter comme trois-drop incontrable, Call of the Conclave pour des tokens, et Centaur Healer pour la stabilité en lifegain. Sublime Archangel pump l\'équipe via exalted, Selesnya Charm fournit la flexibilité. Résistant face au burn mais pressé par les sweepers.',
      keyCards: ['Loxodon Smiter', 'Centaur Healer', 'Call of the Conclave', 'Sublime Archangel', 'Selesnya Charm'],
    },
  ],
}

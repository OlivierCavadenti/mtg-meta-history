import type { YearFormatEntry } from '../types'

export const standard2009Fr: YearFormatEntry = {
  year: 2009,
  format: 'standard',
  title: 'Standard 2009',
  subtitle: 'De Faeries à Jund',
  shortLabel: 'L\'ère du cascade Jund',
  summary:
    'L\'année a débuté avec Faeries toujours au sommet du métagame, mais le format a évolué de manière spectaculaire en trois phases. Gabriel Nassif a remporté le Pro Tour Kyoto en février avec Five-Color Control, démontrant la puissance de Cruel Ultimatum. Alara Reborn en avril a libéré Bloodbraid Elf et le cascade, semant l\'archétype Jund. Après que Zendikar a fait sortir le bloc Lorwyn et la Dixième Édition en octobre, Jund a explosé en domination, plaçant trois joueurs dans le Top 8 du Championnat du Monde à Rome où André Coimbra a gagné avec Naya Lightsaber.',
  headlineDeck: 'Jund',
  eras: [
    {
      id: '2009-std-faeries-five',
      name: 'Faeries contre Five-Color Control',
      start: '2009-01',
      end: '2009-04',
      dominantDecks: ['UB Faeries', 'Five-Color Control'],
      challengers: ['BW Tokens', 'Kithkin Aggro', 'Boat Brew (RW)', 'Red Deck Wins'],
      keyCards: [
        { name: 'Bitterblossom', role: 'Moteur de jetons persistant pour Faeries' },
        { name: 'Cruel Ultimatum', role: 'Sort à sept manas terminant la partie pour Five-Color Control' },
        { name: 'Cryptic Command', role: 'Contresort polyvalent et coup de tempo dans les deux archétypes' },
        { name: 'Spectral Procession', role: 'Générateur de jetons alimentant BW Tokens et Kithkin' },
        { name: 'Reveillark', role: 'Créature de valeur récurrente de menaces depuis le cimetière' },
      ],
      summary:
        'Le métagame début 2009 était défini par la rivalité entre UB Faeries et Five-Color Control. Gabriel Nassif a remporté le Pro Tour Kyoto en février avec Five-Color Control, battant Luis Scott-Vargas (BW Tokens) en finale. Le deck exploitait les terrains Vivid et Reflecting Pool pour lancer Cruel Ultimatum, Cryptic Command et Esper Charm. Faeries restait un sérieux prétendant grâce à Bitterblossom, tandis que les decks aggro comme Boat Brew (Reveillark plus Ranger of Eos) et Kithkin gardaient les decks control honnêtes.',
      whyItDominated: [
        'Cruel Ultimatum générait un avantage insurmontable une fois résolu',
        'Five-Color Control avait des réponses à chaque stratégie grâce à son vaste pool de cartes',
        'Faeries possédait toujours le meilleur gameplan tempo du format avec ses menaces flash',
        'La victoire de Nassif au Pro Tour a légitimé Five-Color Control comme co-meilleur deck',
      ],
      whyItEnded:
        'Alara Reborn a introduit les cartes cascade, en particulier Bloodbraid Elf, qui allaient remodeler le métagame en fournissant une valeur deux-pour-un constante surpassant à la fois le tempo de Faeries et l\'avantage de cartes du control.',
      confidence: 'high',
      sources: [
        {
          title: 'Pro Tour Kyoto 2009 coverage',
          publisher: 'MTGTop8',
          url: 'https://www.mtgtop8.com/event?e=411&f=ST',
          date: '2009-02-28',
          note: 'Gabriel Nassif a gagné avec Five-Color Control. Le Top 8 incluait Faeries, BW Tokens et Kithkin.',
        },
        {
          title: 'Feature Article - Pro Tour: Kyoto Tournament Report (1st)',
          publisher: 'Star City Games',
          url: 'https://articles.starcitygames.com/articles/feature-article-pro-tour-kyoto-tournament-report-1st/',
          note: 'Rapport de tournoi de Nassif détaillant sa stratégie Five-Color Control.',
        },
      ],
    },
    {
      id: '2009-std-cascade',
      name: 'L\'été du cascade',
      start: '2009-04',
      end: '2009-10',
      dominantDecks: ['Jund (pre-rotation)', 'UB Faeries'],
      challengers: ['Five-Color Control', 'Kithkin', 'BW Tokens', 'Elves Combo', 'Time Sieve Combo'],
      keyCards: [
        { name: 'Bloodbraid Elf', role: 'Menace cascade à quatre manas générant du deux-pour-un' },
        { name: 'Maelstrom Pulse', role: 'Anti-permanent polyvalent touchant tout permanent non-terrain' },
        { name: 'Bituminous Blast', role: 'Sort d\'anti-créature cascade à cinq manas' },
        { name: 'Anathemancer', role: 'Punissait les bases de mana gourmandes depuis la réserve' },
        { name: 'Sprouting Thrinax', role: 'Créature résiliente à trois manas laissant des jetons à sa mort' },
      ],
      summary:
        'Le design entièrement multicolore d\'Alara Reborn a introduit Bloodbraid Elf, Maelstrom Pulse et Bituminous Blast. Jund a commencé à se cristalliser en tant qu\'archétype, jouant les menaces Jund les plus efficaces aux côtés de sorts cascade générant un avantage de cartes constant. Faeries compétait encore grâce à Bitterblossom, et Five-Color Control restait viable. M10 en juillet a remplacé la Dixième Édition et introduit de nouvelles cartes sans déclencher de rotation. Le méta était diversifié mais Jund montait en puissance.',
      whyItDominated: [
        'Bloodbraid Elf cascadant dans Blightning ou Maelstrom Pulse était dévastateur',
        'Le cascade garantissait deux sorts pour le coût d\'un, surpassant les autres decks fair',
        'Sprouting Thrinax et Putrid Leech fournissaient des menaces précoces résilientes',
        'Maelstrom Pulse répondait à tout permanent problématique y compris les planeswalkers',
      ],
      whyItEnded:
        'La rotation d\'octobre avec Zendikar a retiré le bloc Lorwyn, le bloc Shadowmoor et la Dixième Édition. Faeries a perdu Bitterblossom, Mistbind Clique et Cryptic Command, mettant fin à l\'archétype. Jund a gagné de nouveaux outils et est devenu le meilleur deck incontesté du format.',
      confidence: 'high',
      sources: [
        {
          title: 'Bloodbraid Elf - MTG Throwback Thursday (2009)',
          publisher: 'Pojo.com',
          url: 'https://www.pojo.com/bloodbraid-elf-mtg-throwback-thursday-2009/',
          note: 'Rétrospective sur l\'impact de Bloodbraid Elf comme carte numéro un de 2009.',
        },
        {
          title: 'Alara Reborn Upgrades to the Standard Metagame',
          publisher: 'The Game I Hate',
          url: 'https://ihatemtg.wordpress.com/2009/05/13/metagameroundup/',
          date: '2009-05-13',
          note: 'Analyse de la façon dont les cartes Alara Reborn ont remodelé le métagame Standard.',
        },
      ],
    },
    {
      id: '2009-std-jund',
      name: 'La domination de Jund',
      start: '2009-10',
      end: '2009-12',
      dominantDecks: ['Jund'],
      challengers: ['Naya Lightsaber', 'Boros Bushwhacker', 'Mono-White Tokens', 'Spread \'Em (UW Spreading Seas)'],
      keyCards: [
        { name: 'Bloodbraid Elf', role: 'Moteur de valeur cascade et menace haste' },
        { name: 'Sprouting Thrinax', role: 'Créature résiliente générant des jetons' },
        { name: 'Maelstrom Pulse', role: 'Anti-permanent universel' },
        { name: 'Lightning Bolt', role: 'Burn efficace revenu via M10' },
        { name: 'Broodmate Dragon', role: 'Finisseur haut de courbe créant deux corps 4/4' },
        { name: 'Putrid Leech', role: 'Créature aggressive à deux manas avec capacité de pump' },
      ],
      summary:
        'Après que Zendikar a fait sortir Lorwyn-Shadowmoor et la Dixième Édition, Jund est devenu le meilleur deck incontesté. Chaque carte du deck générait de la valeur : Bloodbraid Elf cascadait dans Blightning ou de l\'anti-créature, Sprouting Thrinax laissait des jetons, et Broodmate Dragon créait deux corps. Le deck était si dominant que le Championnat du Monde 2009 à Rome a vu trois joueurs Jund dans le Top 8. André Coimbra a gagné avec Naya Lightsaber, l\'un des rares decks assez rapides et puissants pour passer par-dessus Jund.',
      whyItDominated: [
        'Chaque créature générait de l\'avantage de cartes par le cascade, les jetons ou la récursion',
        'Lightning Bolt et Maelstrom Pulse donnaient au deck de l\'anti-créature et anti-permanent premium',
        'Blightning cascadé depuis Bloodbraid Elf dévastait la main des adversaires',
        'La base de mana de Shards of Alara fournissait un support tricolore fiable',
        'Aucune stratégie ne pouvait battre Jund de manière fiable sans perdre contre le reste du champ',
      ],
      whyItEnded:
        'Jund a continué à dominer bien en 2010, ne déclinant qu\'après que Worldwake a apporté des outils supplémentaires aux archétypes concurrents et qu\'éventuellement le bloc Alara a quitté le format.',
      confidence: 'high',
      sources: [
        {
          title: '2009 World Championships coverage',
          publisher: 'MTG Wiki',
          url: 'https://mtg.fandom.com/wiki/2009_World_Championships',
          date: '2009-11-22',
          note: 'Trois joueurs Jund dans le Top 8. André Coimbra a gagné avec Naya Lightsaber. David Reitbauer a terminé 2e avec Jund.',
        },
        {
          title: 'Jund (2009) vs. Mono-Black Devotion (2013) - Best Standard Deck Ever',
          publisher: 'MTGGoldfish',
          url: 'https://www.mtggoldfish.com/articles/jund-2009-vs-mono-black-devotion-2013-best-standard-deck-ever-top-64',
          note: 'Analyse classant Jund 2009 parmi les meilleurs decks Standard de tous les temps.',
        },
        {
          title: 'MTGTop8 - Worlds 2009 Standard results',
          publisher: 'MTGTop8',
          url: 'https://www.mtgtop8.com/event?e=443&f=ST',
          note: 'Top 8 Standard du Championnat du Monde 2009 a Rome.',
        },
      ],
    },
  ],
  bans: [],
  setReleases: [
    { date: '2009-02-06', name: 'Conflux', code: 'CON' },
    { date: '2009-04-30', name: 'Alara Reborn', code: 'ARB', note: 'Premier set entièrement multicolore. Introduction de Bloodbraid Elf et Maelstrom Pulse' },
    { date: '2009-07-17', name: 'Magic 2010', code: 'M10', note: 'Édition de base rebaptisée avec de nouvelles cartes. Lightning Bolt revient en Standard' },
    { date: '2009-10-02', name: 'Zendikar', code: 'ZEN', note: 'Rotation du Standard : le bloc Lorwyn, le bloc Shadowmoor et la Dixième Édition sortent du format' },
  ],
  representativeDecks: [
    {
      name: 'Five-Color Control',
      slug: 'five-color-control-standard-2009',
      period: 'Faeries contre Five-Color Control',
      archetype: 'control',
      summary:
        'Un deck control cinq couleurs mis à jour alimenté par Reflecting Pool et les terrains Vivid, avec Cruel Ultimatum comme haymaker. Cryptic Command et Esper Charm fournissent l\'interaction, Broodmate Dragon conclut. Outvalue les decks fair mais vulnérable à l\'aggro rapide et à la discard.',
      keyCards: ['Cruel Ultimatum', 'Cryptic Command', 'Esper Charm', 'Broodmate Dragon', 'Reflecting Pool', 'Vivid Creek'],
      source: {
        title: 'Pro Tour Kyoto 2009 - Gabriel Nassif (1st)',
        publisher: 'MTGTop8',
        url: 'https://mtgtop8.com/event?e=411&d=138503&f=ST',
        date: '2009-02-28',
      },
    },
    {
      name: 'Jund',
      slug: 'jund-standard-2009',
      period: 'La domination de Jund',
      archetype: 'midrange',
      summary:
        'Un deck midrange noir-rouge-vert alimenté par Bloodbraid Elf qui cascade dans des haymakers comme Blightning et Maelstrom Pulse. Sprouting Thrinax et Lightning Bolt remplissent la courbe de value. Grind les decks fair mais vulnérable au combo dédié et aux moteurs purs de card advantage.',
      keyCards: ['Bloodbraid Elf', 'Sprouting Thrinax', 'Maelstrom Pulse', 'Blightning', 'Lightning Bolt', 'Putrid Leech'],
      source: {
        title: 'Worlds 2009 - Jund decklist par David Reitbauer',
        publisher: 'MTG Cards Realm',
        url: 'https://mtg.cardsrealm.com/en-bz/decks/kpk3-jund-david-reitbauer-worlds-2009',
        date: '2009-11-22',
      },
    },
    {
      name: 'UB Faeries',
      slug: 'ub-faeries-standard-2009',
      period: 'Faeries contre Five-Color Control',
      archetype: 'tempo',
      summary:
        'Un deck tempo bleu-noir qui joue Bitterblossom pour une armée de tokens volants et Spellstutter Sprite, Cryptic Command et Mistbind Clique pour des plays tempo répétés. Scion of Oona protège le board. Solide contre le midrange fair mais pressé par Volcanic Fallout et l\'aggro rapide.',
      keyCards: ['Bitterblossom', 'Mistbind Clique', 'Spellstutter Sprite', 'Cryptic Command', 'Scion of Oona', 'Thoughtseize'],
      source: {
        title: 'MTGTop8 - Standard début 2009 résultats Faeries',
        publisher: 'MTGTop8',
        url: 'https://www.mtgtop8.com/format?f=ST',
      },
    },
    {
      name: 'Naya Lightsaber',
      slug: 'naya-lightsaber-standard-2009',
      period: 'La domination de Jund',
      archetype: 'aggro',
      summary:
        'Un deck aggro-midrange rouge-vert-blanc centré sur Baneslayer Angel comme le meilleur quatre-drop du format, avec Wild Nacatl et Woolly Thoctar appliquant la pression précoce. Ranger of Eos recharge la main en un-drops, Lightning Bolt dégage les blockers. Solide contre le midrange fair mais vulnérable au combo.',
      keyCards: ['Baneslayer Angel', 'Woolly Thoctar', 'Wild Nacatl', 'Ranger of Eos', 'Lightning Bolt', 'Path to Exile'],
      source: {
        title: 'Worlds 2009 - Naya Lightsaber par Andre Coimbra (1st)',
        publisher: 'MTGTop8',
        url: 'https://www.mtgtop8.com/event?e=443&d=253193&f=ST',
        date: '2009-11-22',
      },
    },
  ],
}

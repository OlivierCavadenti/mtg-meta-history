import type { ArchetypeType } from '../types'

export const archetypesFr: Record<ArchetypeType, { description: string }> = {
  aggro: {
    description: 'Gagne en déployant des menaces bon marché et efficaces, attaquant avant que l\'adversaire ne puisse se stabiliser. Priorité à la vitesse et aux dégâts.',
  },
  control: {
    description: 'Gagne en répondant aux menaces adverses avec du retrait et des contresorts, puis en déployant quelques finisseurs puissants une fois la partie verrouillée.',
  },
  combo: {
    description: 'Gagne en assemblant une combinaison spécifique de cartes qui gagne la partie immédiatement ou génère un avantage insurmontable.',
  },
  midrange: {
    description: 'Gagne grâce à des menaces efficaces et des réponses flexibles. Cherche à surpasser l\'aggro en valeur et le contrôle en pression, adaptant son rôle selon le matchup.',
  },
  tempo: {
    description: 'Gagne en déployant une menace bon marché tôt et en la protégeant avec de la perturbation (contresorts, renvois, retrait) pendant que l\'adversaire trébuche.',
  },
  ramp: {
    description: 'Gagne en accélérant la production de mana pour lancer des sorts dévastateurs bien avant le calendrier normal. Échange la présence en début de partie contre la domination en fin de partie.',
  },
  prison: {
    description: 'Gagne en empêchant l\'adversaire d\'exécuter son plan de jeu grâce à des pièces de verrouillage, du déni de ressources ou une perturbation répétée.',
  },
  hybrid: {
    description: 'Combine des éléments de deux archétypes ou plus. Associe souvent un jeu équitable avec une fin combo, ou mélange pression aggro et éléments de contrôle.',
  },
}

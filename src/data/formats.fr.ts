import type { FormatId } from './types'

export const formatDescriptionsFr: Record<FormatId, { description: string }> = {
  standard: { description: 'Le format rotatif. Deux à trois ans des sets les plus récents.' },
  modern: { description: 'Non-rotatif. Cartes à partir de la Huitième Édition et Mirrodin.' },
  pioneer: { description: 'Non-rotatif. Cartes à partir du Retour sur Ravnica.' },
  legacy: { description: 'Format éternel avec une liste d\'interdictions. Presque toutes les cartes imprimées sont légales.' },
  vintage: { description: 'Le plus ancien format. La plupart des cartes sont légales, beaucoup restreintes à un exemplaire.' },
  extended: { description: 'Un format rotatif plus large que le Standard. Abandonné en 2013.' },
  'old-school': { description: 'Format communautaire utilisant les cartes de 1993-1994.' },
  premodern: { description: 'Format communautaire utilisant les cartes de la Quatrième Édition à Fléau.' },
}

<script setup lang="ts">
import { computed } from 'vue'
import { t, locale } from '../lib/i18n'
import { archetypes } from '../data/archetypes'
import { archetypesFr } from '../data/archetypes/index.fr'

const localizedArchetypes = computed(() =>
  archetypes.map((a) => ({
    ...a,
    description: locale.value === 'fr' ? archetypesFr[a.id].description : a.description,
  }))
)

const terms = computed(() => locale.value === 'fr' ? termsFr : termsEn)

const termsEn = [
  { term: 'Metagame (meta)', def: 'The collective strategies and deck choices in a format at a given time. "The meta" describes what decks are popular and how they relate to each other.' },
  { term: 'Deck to beat', def: 'The most dominant or popular deck in a format. Other strategies are typically evaluated by how well they perform against this deck.' },
  { term: 'Tier 1', def: 'The top-performing decks in a format, usually representing the largest share of top finishes in tournaments.' },
  { term: 'Sideboard', def: 'A set of 15 cards that can be swapped into the main deck between games of a match, allowing players to adjust their strategy against specific opponents.' },
  { term: 'Ban', def: 'A card removed from legal play in a format by Wizards of the Coast, usually due to dominance or unhealthy play patterns.' },
  { term: 'Rotation', def: 'In Standard, the periodic removal of older sets from the legal card pool, typically occurring once per year.' },
  { term: 'Top 8', def: 'The eight players (or decks) that advance to the single-elimination bracket at a major tournament, after multiple rounds of Swiss pairings.' },
  { term: 'Pro Tour', def: 'The highest level of competitive Magic tournaments, featuring invited players competing for large prizes.' },
  { term: 'Matchup', def: 'The expected win rate of one deck against another. A "favorable matchup" means the deck is expected to win more often than lose.' },
]

const termsFr = [
  { term: 'Métagame (méta)', def: 'L\'ensemble des stratégies et choix de decks dans un format à un moment donné. « La méta » décrit quels decks sont populaires et comment ils interagissent.' },
  { term: 'Deck à battre', def: 'Le deck le plus dominant ou populaire d\'un format. Les autres stratégies sont généralement évaluées par leur performance face à ce deck.' },
  { term: 'Tier 1', def: 'Les decks les plus performants d\'un format, représentant généralement la plus grande part des Top finishes en tournoi.' },
  { term: 'Sideboard (réserve)', def: 'Un ensemble de 15 cartes qui peuvent être échangées avec le deck principal entre les parties d\'un match, permettant d\'ajuster sa stratégie.' },
  { term: 'Ban (interdiction)', def: 'Une carte retirée du jeu légal dans un format par Wizards of the Coast, généralement en raison de domination ou de patterns de jeu malsains.' },
  { term: 'Rotation', def: 'En Standard, le retrait périodique des anciens sets du pool de cartes légales, intervenant généralement une fois par an.' },
  { term: 'Top 8', def: 'Les huit joueurs (ou decks) qualifiés pour le tableau à élimination directe d\'un tournoi majeur, après plusieurs rondes suisses.' },
  { term: 'Pro Tour', def: 'Le plus haut niveau de tournois compétitifs de Magic, réunissant des joueurs invités pour de gros lots.' },
  { term: 'Matchup', def: 'Le taux de victoire attendu d\'un deck contre un autre. Un « matchup favorable » signifie que le deck est censé gagner plus souvent que perdre.' },
]
</script>

<template>
  <div>
    <header class="page-header">
      <h1>{{ t('glossary.title') }}</h1>
      <p class="subtitle">{{ t('glossary.subtitle') }}</p>
    </header>

    <section class="section">
      <h2 class="section-title">{{ t('glossary.archetypes') }}</h2>
      <div class="glossary-list">
        <div v-for="a in localizedArchetypes" :key="a.id" class="glossary-entry">
          <h3 class="glossary-term">{{ a.name }}</h3>
          <p class="glossary-def">{{ a.description }}</p>
          <p class="glossary-examples">
            {{ t('glossary.examples') }}: <em>{{ a.examples.join(', ') }}</em>
          </p>
        </div>
      </div>
    </section>

    <section class="section">
      <h2 class="section-title">{{ t('glossary.terms') }}</h2>
      <dl class="term-list">
        <template v-for="item in terms" :key="item.term">
          <dt>{{ item.term }}</dt>
          <dd>{{ item.def }}</dd>
        </template>
      </dl>
    </section>
  </div>
</template>

<style scoped>
.glossary-list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-md);
}

@media (max-width: 640px) {
  .glossary-list {
    grid-template-columns: 1fr;
  }
}

.glossary-entry {
  border: 1px solid var(--line);
  padding: var(--space-md);
}

.glossary-term {
  font-family: var(--font-heading);
  font-size: 1rem;
  margin-bottom: var(--space-xs);
}

.glossary-def {
  font-size: 0.88rem;
  line-height: 1.5;
  margin-bottom: var(--space-xs);
}

.glossary-examples {
  font-size: 0.8rem;
  color: var(--muted);
}

.term-list {
  max-width: var(--measure);
}

.term-list dt {
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 0.95rem;
  margin-top: var(--space-md);
  margin-bottom: 2px;
}

.term-list dd {
  font-size: 0.88rem;
  line-height: 1.5;
  color: var(--ink-light);
  margin-left: 0;
  padding-left: var(--space-md);
  border-left: 2px solid var(--line-light);
}
</style>

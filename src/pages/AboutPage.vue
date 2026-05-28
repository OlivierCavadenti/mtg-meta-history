<script setup lang="ts">
import { locale } from '../lib/i18n'
</script>

<template>
  <div class="about-page">
    <h1 class="about-title">MTG Meta History</h1>

    <p class="about-lead" v-if="locale === 'fr'">
      Une archive éditoriale des métagames compétitifs de Magic: The Gathering.
    </p>
    <p class="about-lead" v-else>
      An editorial archive of competitive Magic: The Gathering metagames.
    </p>

    <p v-if="locale === 'fr'">
      Pour chaque année et format, le site documente les decks dominants,
      les ères du métagame et les bannissements qui les ont façonnés. Chaque
      entrée s'appuie sur des sources de tournois et porte un niveau de
      confiance reflétant la qualité des données.
    </p>
    <p v-else>
      For each year and format, the site documents the dominant decks,
      meta eras, and bans that shaped them. Each entry draws on tournament
      sources and carries a confidence level reflecting the strength of the data.
    </p>

    <p class="about-disclaimer" v-if="locale === 'fr'">
      Non affilié à Wizards of the Coast. Les images de cartes proviennent
      de l'API publique Scryfall.
    </p>
    <p class="about-disclaimer" v-else>
      Not affiliated with Wizards of the Coast. Card images are served via
      the public Scryfall API.
    </p>
  </div>
</template>

<style scoped>
.about-page {
  max-width: 640px;
  margin: 0 auto;
  padding: var(--space-xl) var(--space-md);
}

.about-title {
  font-family: var(--font-heading);
  font-size: 1.8rem;
  margin-bottom: var(--space-sm);
}

.about-lead {
  font-style: italic;
  font-size: 1.05rem;
  color: var(--muted);
  margin-bottom: var(--space-lg);
}

.about-quote {
  border-left: 3px solid var(--ink);
  padding: var(--space-sm) var(--space-md);
  margin: var(--space-md) 0 var(--space-lg);
  font-style: italic;
  font-size: 1.1rem;
  color: var(--ink-light);
}

p {
  margin-bottom: var(--space-md);
  font-size: 0.95rem;
  line-height: 1.65;
}

.about-disclaimer {
  margin-top: var(--space-xl);
  padding-top: var(--space-md);
  border-top: 1px solid var(--line);
  font-size: 0.8rem;
  color: var(--muted);
  font-style: italic;
}
</style>

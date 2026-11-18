<script setup lang="ts">
import { computed, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import { findDeck } from '../data/load'
import { useFormat } from '../lib/useFormat'
import { archetypeLabel, formatDate, formatMonth, formatNumber, locale, seasonYears, t, tx } from '../lib/i18n'
import { cardImage, scryfallSearch } from '../lib/cards'
import { hidePreview, movePreview, showPreview } from '../lib/preview'
import ColorPips from '../components/ColorPips.vue'
import DeckList from '../components/DeckList.vue'
import SoonState from '../components/SoonState.vue'

const route = useRoute()
const { formatId, format, data, loading } = useFormat()

const found = computed(() => (data.value ? findDeck(data.value, String(route.params.id)) : undefined))
const deck = computed(() => found.value?.deck)
const season = computed(() => found.value?.season)
const cards = computed(() => data.value?.cards ?? {})
const why = computed(() => deck.value?.why[locale.value] ?? [])

const years = computed(() => (season.value ? seasonYears(season.value.start, season.value.end) : ''))

const siblings = computed(() => {
  if (!season.value || !deck.value) return { prev: undefined, next: undefined }
  const list = season.value.decks
  const i = list.findIndex((d) => d.id === deck.value!.id)
  return { prev: list[i - 1], next: list[i + 1] }
})

const rankLabel = computed(() => {
  const r = deck.value?.list.rank ?? ''
  return /^\d/.test(r) ? `#${r}` : r
})

watchEffect(() => {
  if (deck.value) document.title = `${deck.value.name} · ${years.value} · MTG Meta History`
})
</script>

<template>
  <SoonState v-if="format && !format.ready" :label="format.label" />
  <div v-else-if="loading || !data" class="state">{{ t('loading') }}</div>
  <div v-else-if="!deck || !season" class="state">{{ t('notFound') }}</div>
  <article v-else class="deck">
    <nav class="crumbs">
      <router-link :to="`/${formatId}`">{{ format?.label }}</router-link>,
      <router-link :to="`/${formatId}#s-${season.id}`">{{ years }}, {{ season.set }}</router-link>
    </nav>

    <header class="hero">
      <div class="hero-text">
        <p v-if="deck.tier === 1" class="kicker">{{ t('deckToBeat') }}</p>
        <h1>{{ deck.name }}</h1>
        <p class="byline">
          <ColorPips :colors="deck.colors" :size="15" />
          {{ archetypeLabel(deck.archetype) }}. {{ deck.list.player }}, {{ rankLabel }},
          <a :href="deck.list.url" target="_blank" rel="noopener noreferrer">{{ deck.list.event }}</a>,
          {{ formatDate(deck.list.date) }}.
        </p>
        <p class="summary">{{ tx(deck.summary) }}</p>
        <p class="record">
          {{ deck.stats.top8 }} {{ t('top8') }}, {{ deck.stats.wins }} {{ deck.stats.wins > 1 ? t('wins') : t('win') }},
          {{ formatNumber(deck.stats.share) }} % {{ t('share') }} ({{ formatMonth(deck.first) }} – {{ formatMonth(deck.last) }})
        </p>
      </div>
      <figure class="hero-art">
        <img :src="cardImage(cards[deck.cover], deck.cover, 'art_crop')" :alt="deck.cover" />
        <figcaption>{{ deck.cover }}</figcaption>
      </figure>
    </header>

    <section class="insight">
      <div class="keycards">
        <h2>{{ t('keyCards') }}</h2>
        <div class="kc-grid">
          <a
            v-for="c in deck.keyCards"
            :key="c"
            :href="scryfallSearch(c)"
            target="_blank"
            rel="noopener noreferrer"
            class="kc"
            @mouseenter="showPreview(cardImage(cards[c], c, 'large'), $event)"
            @mousemove="movePreview"
            @mouseleave="hidePreview"
          >
            <img :src="cardImage(cards[c], c, 'normal')" :alt="c" loading="lazy" />
          </a>
        </div>
      </div>
      <div class="why">
        <h2>{{ deck.tier === 1 ? t('why1') : t('why') }}</h2>
        <ol>
          <li v-for="(b, i) in why" :key="i">{{ b }}</li>
        </ol>
      </div>
    </section>

    <DeckList :list="deck.list" :cards="cards" />

    <nav class="siblings">
      <router-link v-if="siblings.prev" :to="`/${formatId}/deck/${siblings.prev.id}`" class="sib">
        <span class="sib-dir">← {{ t('prev') }}</span>{{ siblings.prev.name }}
      </router-link>
      <span v-else></span>
      <router-link v-if="siblings.next" :to="`/${formatId}/deck/${siblings.next.id}`" class="sib sib--next">
        <span class="sib-dir">{{ t('next') }} →</span>{{ siblings.next.name }}
      </router-link>
    </nav>
  </article>
</template>

<style scoped>
.crumbs {
  font-style: italic;
  color: var(--muted);
  margin-bottom: var(--space-lg);
}

.crumbs a {
  color: var(--muted);
}

.hero {
  display: grid;
  grid-template-columns: minmax(0, 1.4fr) minmax(0, 1fr);
  gap: var(--space-xl);
  align-items: start;
  margin-bottom: var(--space-xl);
}

.kicker {
  font-style: italic;
  color: var(--accent);
  font-size: 1.05rem;
}

h1 {
  font-size: clamp(2.6rem, 6vw, 4.6rem);
  line-height: 0.92;
  letter-spacing: -0.035em;
}

.byline {
  margin-top: var(--space-sm);
  font-size: 0.98rem;
  color: var(--ink-light);
}

.byline a {
  color: var(--ink-light);
}

.byline .pips {
  margin-right: 0.3rem;
}

.summary {
  margin-top: var(--space-lg);
  font-size: 1.3rem;
  line-height: 1.45;
}

.record {
  margin-top: var(--space-md);
  font-style: italic;
  color: var(--muted);
}

.hero-art {
  margin: 0;
}

.hero-art img {
  width: 100%;
  aspect-ratio: 626 / 457;
  object-fit: cover;
  display: block;
  border: 1px solid var(--ink);
}

figcaption {
  margin-top: 0.3rem;
  font-size: 0.82rem;
  font-style: italic;
  color: var(--muted);
  text-align: right;
}

.insight {
  display: grid;
  grid-template-columns: minmax(0, 1.6fr) minmax(0, 1fr);
  gap: var(--space-xl);
  margin-bottom: var(--space-xl);
}

.insight h2 {
  font-size: 1.35rem;
  border-top: 1px solid var(--ink);
  padding-top: var(--space-xs);
  margin-bottom: var(--space-md);
}

.kc-grid {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: var(--space-sm);
}

.kc {
  display: block;
  aspect-ratio: 488 / 680;
  border-radius: 4.75% / 3.5%;
  overflow: hidden;
  background: var(--paper-deep);
}

.kc img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.why ol {
  padding-left: 1.4em;
}

.why li {
  padding: 0 0 0.6rem 0.2rem;
  line-height: 1.45;
  font-size: 1.02rem;
}

.why li::marker {
  font-family: var(--font-heading);
  font-weight: 700;
  color: var(--accent);
}

.siblings {
  display: flex;
  justify-content: space-between;
  gap: var(--space-md);
  margin-top: var(--space-2xl);
  padding-top: var(--space-sm);
  border-top: 1px solid var(--ink);
}

.sib {
  display: flex;
  flex-direction: column;
  text-decoration: none;
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 1.3rem;
}

.sib-dir {
  font-family: var(--font-body);
  font-weight: 400;
  font-style: italic;
  font-size: 0.9rem;
  color: var(--muted);
}

.sib--next {
  text-align: right;
}

@media (max-width: 860px) {
  .hero,
  .insight {
    grid-template-columns: 1fr;
    gap: var(--space-lg);
  }

  .hero-art {
    order: -1;
  }

  .kc-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}
</style>

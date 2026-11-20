<script setup lang="ts">
import { computed, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import { findDeck } from '../data/load'
import { buildLineages, slugOf } from '../lib/lineage'
import { useFormat } from '../lib/useFormat'
import { archetypeLabel, formatDate, formatMonth, formatNumber, locale, seasonTitle, t, tx } from '../lib/i18n'
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
/** the same archetype in other seasons (link to its history page) */
const lineage = computed(() => (data.value && deck.value ? buildLineages(data.value).get(slugOf(deck.value)) : undefined))

const years = computed(() => (season.value ? seasonTitle(season.value) : ''))

const siblings = computed(() => {
  if (!season.value || !deck.value) return { prev: undefined, next: undefined }
  const list = season.value.decks
  const i = list.findIndex((d) => d.id === deck.value!.id)
  return { prev: list[i - 1], next: list[i + 1] }
})

const hostOf = (u: string) => {
  try {
    return new URL(u).hostname.replace(/^www\./, '')
  } catch {
    return u
  }
}

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
  <article v-else :key="deck.id" class="deck">
    <nav class="crumbs">
      <router-link :to="`/${formatId}`">{{ format?.label }}</router-link>,
      <router-link :to="`/${formatId}#s-${season.id}`">{{ season.code ? season.set : `${years}, ${season.set}` }}</router-link>
    </nav>

    <header class="hero">
      <div class="hero-text">
        <p v-if="deck.tier === 1" class="kicker">{{ t('deckToBeat') }}</p>
        <h1>{{ deck.name }}</h1>
        <p v-if="deck.sources" class="byline">
          <ColorPips :colors="deck.colors" :size="15" />
          {{ archetypeLabel(deck.archetype) }}. {{ t('designArchetype') }}, {{ season.set }}.
        </p>
        <p v-else-if="deck.limited" class="byline">
          <ColorPips :colors="deck.colors" :size="15" />
          {{ archetypeLabel(deck.archetype) }}. {{ t('trophyDeck') }} ({{ deck.list.rank.replace('-', '–') }}),
          {{ t('premierDraft') }}, {{ formatDate(deck.list.date) }}.
        </p>
        <p v-else class="byline">
          <ColorPips :colors="deck.colors" :size="15" />
          {{ archetypeLabel(deck.archetype) }}. {{ deck.list.player }}, {{ rankLabel }},
          <a :href="deck.list.url" target="_blank" rel="noopener noreferrer">{{ deck.list.event }}</a>,
          {{ formatDate(deck.list.date) }}.
        </p>
        <p class="summary">{{ tx(deck.summary) }}</p>
        <p v-if="deck.sources" class="record">
          {{ t('sourcesLabel') }} :
          <template v-for="(u, i) in deck.sources" :key="u"><a :href="u" target="_blank" rel="noopener noreferrer">{{ hostOf(u) }}</a><template v-if="i < deck.sources.length - 1">, </template></template>.
          {{ t('noDataBefore') }}
        </p>
        <p v-else-if="deck.limited" class="record">
          {{ formatNumber(deck.limited.winRate) }} % {{ t('winRate') }} ({{ t('setAverage') }} {{ formatNumber(deck.limited.setWinRate) }} %),
          {{ formatNumber(deck.stats.share) }} % {{ t('ofGames') }}, {{ deck.limited.trophies.toLocaleString(locale === 'fr' ? 'fr-FR' : 'en-US') }} {{ t('trophyDecks') }}.
          <a :href="deck.list.url" target="_blank" rel="noopener noreferrer">17Lands</a>,
          {{ deck.limited.games.toLocaleString(locale === 'fr' ? 'fr-FR' : 'en-US') }} {{ t('gamesWord') }}
          ({{ formatMonth(deck.first) }} – {{ formatMonth(deck.last) }})
        </p>
        <p v-else class="record">
          {{ deck.stats.top8 }} {{ t('top8') }}, {{ deck.stats.wins }} {{ deck.stats.wins > 1 ? t('wins') : t('win') }},
          {{ formatNumber(deck.stats.share) }} % {{ t('share') }} ({{ formatMonth(deck.first) }} – {{ formatMonth(deck.last) }})
        </p>
        <p v-if="lineage && lineage.entries.length > 1" class="history-link">
          <router-link :to="`/${formatId}/archetype/${lineage.slug}`">
            {{ t('archetypeHistory') }} {{ lineage.name }} ({{ lineage.entries.length }} {{ deck.limited ? t('setsPlural') : t('seasonsPlural') }}) →
          </router-link>
        </p>
      </div>
      <figure class="hero-art">
        <div class="hero-window">
          <img v-fade :src="cardImage(cards[deck.cover], deck.cover, 'art_crop', deck.season)" :alt="deck.cover" />
        </div>
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
            v-tilt
            :href="scryfallSearch(c)"
            target="_blank"
            rel="noopener noreferrer"
            class="kc"
            @mouseenter="showPreview(cardImage(cards[c], c, 'large', deck.season), $event)"
            @mousemove="movePreview"
            @mouseleave="hidePreview"
          >
            <img v-fade :src="cardImage(cards[c], c, 'normal', deck.season)" :alt="c" loading="lazy" />
            <span class="glare" aria-hidden="true"></span>
          </a>
        </div>
      </div>
      <div class="why">
        <h2>{{ deck.limited || deck.sources ? t('whyLimited') : deck.tier === 1 ? t('why1') : t('why') }}</h2>
        <ol>
          <li v-for="(b, i) in why" :key="i">{{ b }}</li>
        </ol>
      </div>
    </section>

    <DeckList v-if="deck.list.main.length" :list="deck.list" :cards="cards" :season="deck.season" :side-label="deck.limited ? t('restOfPool') : undefined" />

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

/* drop cap, set in the display face */
.summary::first-letter {
  float: left;
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 3.5em;
  line-height: 0.82;
  margin: 0.06em 0.04em 0 -0.02em;
  color: var(--accent);
}

.record {
  margin-top: var(--space-md);
  font-style: italic;
  color: var(--muted);
}

.history-link {
  margin-top: var(--space-sm);
}

.history-link a {
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 1.05rem;
  color: var(--accent);
  text-underline-offset: 4px;
}

.hero-art {
  margin: 0;
}

.hero-window {
  padding: 4px;
  border: 1px solid var(--ink);
  background: var(--paper);
}

.hero-window img {
  width: 100%;
  aspect-ratio: 626 / 457;
  object-fit: cover;
  display: block;
  /* the art settles into place as the page opens */
  animation: settle 1.6s var(--ease-out) both;
}

@keyframes settle {
  from {
    transform: scale(1.07);
    filter: saturate(0.6) sepia(0.2);
  }
  to {
    transform: none;
    filter: none;
  }
}

.hero-window {
  overflow: hidden;
}

.hero-text > * {
  animation: rise 0.7s var(--ease-out) both;
}

.hero-text > :nth-child(2) { animation-delay: 60ms; }
.hero-text > :nth-child(3) { animation-delay: 120ms; }
.hero-text > :nth-child(4) { animation-delay: 180ms; }
.hero-text > :nth-child(5) { animation-delay: 240ms; }

@keyframes rise {
  from {
    opacity: 0;
    transform: translateY(8px);
  }
  to {
    opacity: 1;
    transform: none;
  }
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
  position: relative;
  display: block;
  aspect-ratio: 488 / 680;
  border-radius: 4.75% / 3.5%;
  overflow: hidden;
  background: var(--paper-deep);
  box-shadow: var(--shadow-card);
}

/* a faint sheen that follows the pointer (position set by v-tilt) */
.glare {
  position: absolute;
  inset: 0;
  pointer-events: none;
  opacity: 0;
  background: radial-gradient(circle at var(--glare-x, 50%) var(--glare-y, 50%), rgb(255 250 235 / 0.28), transparent 55%);
  mix-blend-mode: soft-light;
  transition: opacity 0.3s var(--ease-out);
}

.kc:hover .glare {
  opacity: 1;
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
  padding: 0.5rem 0 0.55rem 0.2rem;
  line-height: 1.45;
  font-size: 1.02rem;
  border-bottom: 1px solid var(--line-light);
}

.why li:last-child {
  border-bottom: none;
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

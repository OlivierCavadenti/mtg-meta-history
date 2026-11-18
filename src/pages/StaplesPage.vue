<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import type { CardKind } from '../data/types'
import { useFormat } from '../lib/useFormat'
import { computeStaples } from '../lib/staples'
import { cardImage, scryfallSearch } from '../lib/cards'
import { seasonYears, t, type StringKey } from '../lib/i18n'
import SoonState from '../components/SoonState.vue'

type Mode = 'season' | 'color' | 'type'
type Group = { key: string; title: string; sub?: string; cards: string[] }

const route = useRoute()
const router = useRouter()
const { format, data, loading } = useFormat()

const mode = computed<Mode>(() => (route.query.by === 'color' || route.query.by === 'type' ? route.query.by : 'season'))
function setMode(m: Mode) {
  router.replace({ query: m === 'season' ? {} : { by: m } })
}

// Staples are computed oldest-first (a card belongs to the season it first became
// a staple), then shown newest-first in every mode.
const seasons = computed(() => (data.value ? computeStaples(data.value).reverse() : []))
const ordered = computed(() => seasons.value.flatMap((s) => s.cards.map((c) => c.name)))
const total = computed(() => ordered.value.length)
// each card is shown as printed in the season it became a staple
const stapleSeason = computed(() => new Map(seasons.value.flatMap((s) => s.cards.map((c) => [c.name, s.id] as const))))

const COLOR_GROUPS: { key: string; label: StringKey }[] = [
  { key: 'W', label: 'colorW' },
  { key: 'U', label: 'colorU' },
  { key: 'B', label: 'colorB' },
  { key: 'R', label: 'colorR' },
  { key: 'G', label: 'colorG' },
  { key: 'M', label: 'colorM' },
  { key: 'C', label: 'colorC' },
  { key: 'L', label: 'lands' },
]

const TYPE_GROUPS: { key: CardKind; label: StringKey }[] = [
  { key: 'creature', label: 'typeCreature' },
  { key: 'planeswalker', label: 'typePlaneswalker' },
  { key: 'instant', label: 'typeInstant' },
  { key: 'sorcery', label: 'typeSorcery' },
  { key: 'enchantment', label: 'typeEnchantment' },
  { key: 'artifact', label: 'typeArtifact' },
  { key: 'battle', label: 'typeBattle' },
  { key: 'land', label: 'lands' },
  { key: 'other', label: 'typeOther' },
]

function colorKey(name: string): string {
  const info = data.value?.cards[name]
  if (!info) return 'C'
  if (info.t === 'land') return 'L'
  if (info.k.length > 1) return 'M'
  return info.k || 'C'
}

const groups = computed<Group[]>(() => {
  if (!data.value) return []
  if (mode.value === 'season') {
    return seasons.value.map((s) => ({
      key: s.id,
      title: seasonYears(s.start, s.end),
      sub: s.set,
      cards: s.cards.map((c) => c.name),
    }))
  }
  const defs = mode.value === 'color' ? COLOR_GROUPS : TYPE_GROUPS
  const keyOf = mode.value === 'color' ? colorKey : (n: string) => data.value?.cards[n]?.t ?? 'other'
  return defs
    .map((g) => ({ key: g.key, title: t(g.label), cards: ordered.value.filter((n) => keyOf(n) === g.key) }))
    .filter((g) => g.cards.length > 0)
})
</script>

<template>
  <SoonState v-if="format && !format.ready" :label="format.label" />
  <div v-else-if="loading || !data" class="state">{{ t('loading') }}</div>
  <div v-else class="staples">
    <div class="bar">
      <p class="count">{{ format?.label }}, {{ total }} {{ t('staplesIntro') }}.</p>
      <nav class="modes">
        <button type="button" :class="{ on: mode === 'season' }" @click="setMode('season')">{{ t('bySeason') }}</button>
        <button type="button" :class="{ on: mode === 'color' }" @click="setMode('color')">{{ t('byColor') }}</button>
        <button type="button" :class="{ on: mode === 'type' }" @click="setMode('type')">{{ t('byType') }}</button>
      </nav>
      <nav class="jump">
        <a v-for="g in groups" :key="g.key" :href="`#g-${g.key}`">{{ g.title }}</a>
      </nav>
    </div>
    <div class="wall">
      <template v-for="g in groups" :key="`${mode}-${g.key}`">
        <div :id="`g-${g.key}`" class="divider">
          <span class="years">{{ g.title }}</span>
          <span class="set">{{ g.sub ?? `${g.cards.length} ${t('cards')}` }}</span>
        </div>
        <a
          v-for="name in g.cards"
          v-tilt
          :key="name"
          class="card"
          :href="scryfallSearch(name)"
          target="_blank"
          rel="noopener noreferrer"
          :title="name"
        >
          <img v-fade :src="cardImage(data.cards[name], name, 'normal', stapleSeason.get(name))" :alt="name" loading="lazy" />
        </a>
      </template>
    </div>
  </div>
</template>

<style scoped>
.staples {
  padding: var(--space-sm) var(--space-md) 0;
}

.bar {
  position: sticky;
  top: var(--header-h);
  z-index: 20;
  background: var(--paper);
  padding: var(--space-sm) var(--space-xs);
  border-bottom: 1px solid var(--line);
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: var(--space-xs) var(--space-lg);
}

.count {
  font-style: italic;
  color: var(--muted);
  max-width: none;
}

.modes {
  display: flex;
  gap: var(--space-md);
  margin-left: auto;
}

.modes button {
  font-family: var(--font-body);
  font-size: 1rem;
  background: none;
  border: none;
  padding: 0;
  color: var(--muted);
  cursor: pointer;
}

.modes button.on {
  color: var(--ink);
  text-decoration: underline;
  text-underline-offset: 4px;
}

.jump {
  flex-basis: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 0.1rem 0.7rem;
  font-family: var(--font-heading);
  font-size: 0.92rem;
}

.jump a {
  color: var(--muted);
  text-decoration: none;
}

.jump a:hover {
  color: var(--ink);
  text-decoration: underline;
}

.wall {
  display: grid;
  grid-template-columns: repeat(8, minmax(0, 1fr));
  gap: 8px;
}

@media (max-width: 1100px) {
  .wall {
    grid-template-columns: repeat(6, minmax(0, 1fr));
  }
}

@media (max-width: 820px) {
  .wall {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
}

.divider:first-child {
  margin-top: 0;
}

.divider {
  grid-column: 1 / -1;
  display: flex;
  align-items: baseline;
  gap: var(--space-sm);
  padding: var(--space-lg) var(--space-xs) var(--space-xs);
  border-top: 3px solid var(--ink);
  margin-top: var(--space-md);
  scroll-margin-top: calc(var(--header-h) + 90px);
}

.years {
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 1.9rem;
  line-height: 1;
  letter-spacing: -0.02em;
}

.set {
  font-style: italic;
  font-size: 1rem;
  color: var(--muted);
}

.card {
  display: block;
  aspect-ratio: 488 / 680;
  border-radius: 4.75% / 3.5%;
  overflow: hidden;
  background: var(--paper-deep);
  box-shadow: var(--shadow-card);
}

.card:hover {
  position: relative;
  z-index: 2;
}

.card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

@media (max-width: 640px) {
  .wall {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 4px;
  }

  .bar {
    position: static;
  }

  .modes {
    margin-left: 0;
  }
}
</style>

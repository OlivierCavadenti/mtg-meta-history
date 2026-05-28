<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import type { Decklist, DecklistEntry } from '../data/types'
import { scryfallImageUrl, scryfallCardUrl } from '../lib/scryfall'
import { useCardTypes, type CardType } from '../lib/cardTypes'
import { locale } from '../lib/i18n'

const props = defineProps<{
  decklist: Decklist
}>()

type ViewMode = 'list' | 'visual'
const STORAGE_KEY = 'mtg-decklist-view'
const ZOOM_KEY = 'mtg-decklist-zoom'
const initialMode = (typeof window !== 'undefined' && localStorage.getItem(STORAGE_KEY)) as ViewMode | null
const viewMode = ref<ViewMode>(initialMode === 'visual' || initialMode === 'list' ? initialMode : 'visual')

const initialZoom = typeof window !== 'undefined' ? Number(localStorage.getItem(ZOOM_KEY) || '146') : 146
const zoom = ref<number>(Number.isFinite(initialZoom) && initialZoom > 0 ? initialZoom : 146)

function setMode(m: ViewMode) {
  viewMode.value = m
  if (typeof window !== 'undefined') localStorage.setItem(STORAGE_KEY, m)
}

function onZoom(e: Event) {
  const v = Number((e.target as HTMLInputElement).value)
  zoom.value = v
  if (typeof window !== 'undefined') localStorage.setItem(ZOOM_KEY, String(v))
}

const cardHeight = computed(() => Math.round(zoom.value * 1.392))
const offsetY = computed(() => Math.max(20, Math.round(zoom.value * 0.19)))

const totalMain = computed(() => props.decklist.mainboard.reduce((s, e) => s + e.count, 0))
const totalSide = computed(() => (props.decklist.sideboard || []).reduce((s, e) => s + e.count, 0))

const allCardNames = computed(() => {
  const set = new Set<string>()
  for (const e of props.decklist.mainboard) set.add(e.name)
  for (const e of props.decklist.sideboard || []) set.add(e.name)
  return [...set]
})

const { info: cardInfo, ready: typesReady, loading: indexLoading, progress: indexProgress } = useCardTypes()

// allCardNames is kept reactive for potential future use, but we now use the bulk index
void allCardNames

// Suppress unused warning for watch (kept for future per-deck logic)
void watch

const TYPE_ORDER: CardType[] = ['creature', 'planeswalker', 'battle', 'sorcery', 'instant', 'artifact', 'enchantment', 'land', 'unknown']

const tLabels = computed(() => locale.value === 'fr' ? {
  mainboard: 'Deck principal',
  sideboard: 'Réserve',
  player: 'Joueur',
  event: 'Événement',
  date: 'Date',
  view_list: 'Liste',
  view_visual: 'Images',
  zoom: 'Zoom',
  loading: 'Chargement des cartes…',
  creature: 'Créatures',
  planeswalker: 'Planeswalkers',
  battle: 'Batailles',
  sorcery: 'Rituels',
  instant: 'Éphémères',
  artifact: 'Artefacts',
  enchantment: 'Enchantements',
  land: 'Terrains',
  unknown: 'Autres',
} : {
  mainboard: 'Mainboard',
  sideboard: 'Sideboard',
  player: 'Player',
  event: 'Event',
  date: 'Date',
  view_list: 'List',
  view_visual: 'Visual',
  zoom: 'Zoom',
  loading: 'Loading cards…',
  creature: 'Creatures',
  planeswalker: 'Planeswalkers',
  battle: 'Battles',
  sorcery: 'Sorceries',
  instant: 'Instants',
  artifact: 'Artifacts',
  enchantment: 'Enchantments',
  land: 'Lands',
  unknown: 'Other',
})

const BASIC_LANDS = new Set(['Plains', 'Island', 'Swamp', 'Mountain', 'Forest', 'Wastes', 'Snow-Covered Plains', 'Snow-Covered Island', 'Snow-Covered Swamp', 'Snow-Covered Mountain', 'Snow-Covered Forest'])

function typeOf(name: string): CardType {
  // Only Scryfall data — generic for any deck
  return cardInfo.value[name]?.type || 'unknown'
}

function cmcOf(name: string): number {
  return cardInfo.value[name]?.cmc ?? 0
}

const effectiveType = typeOf

// Visual mode columns
type VisualColumn = {
  label: string
  entries: DecklistEntry[]
}

function splitCreatures(entries: DecklistEntry[]): { creatures: DecklistEntry[]; other: DecklistEntry[] } {
  const creatures: DecklistEntry[] = []
  const other: DecklistEntry[] = []
  for (const entry of entries) {
    if (effectiveType(entry.name) === 'creature') creatures.push(entry)
    else other.push(entry)
  }
  return { creatures, other }
}

// For list mode: group by type
function groupByType(entries: DecklistEntry[]): Map<CardType, DecklistEntry[]> {
  const groups = new Map<CardType, DecklistEntry[]>()
  for (const entry of entries) {
    const t = typeOf(entry.name)
    if (!groups.has(t)) groups.set(t, [])
    groups.get(t)!.push(entry)
  }
  for (const arr of groups.values()) {
    arr.sort((a, b) => {
      const ca = cmcOf(a.name)
      const cb = cmcOf(b.name)
      if (ca !== cb) return ca - cb
      return a.name.localeCompare(b.name)
    })
  }
  const ordered = new Map<CardType, DecklistEntry[]>()
  for (const t of TYPE_ORDER) {
    if (groups.has(t)) ordered.set(t, groups.get(t)!)
  }
  return ordered
}

// Bucket key: '0' = lands + CMC-0 non-creature non-land cards, '1'..'6' = CMC, '7' = 7+
function bucketKey(entry: DecklistEntry, allowZeroBucket: boolean): string {
  if (allowZeroBucket && (cmcOf(entry.name) === 0 || effectiveType(entry.name) === 'land')) return '0'
  const cmc = cmcOf(entry.name)
  return String(Math.min(cmc, 7))
}

function groupByBucket(entries: DecklistEntry[], allowZeroBucket: boolean): Map<string, DecklistEntry[]> {
  const map = new Map<string, DecklistEntry[]>()
  for (const entry of entries) {
    const k = bucketKey(entry, allowZeroBucket)
    if (!map.has(k)) map.set(k, [])
    map.get(k)!.push(entry)
  }
  for (const arr of map.values()) {
    arr.sort((a, b) => {
      const aLand = effectiveType(a.name) === 'land'
      const bLand = effectiveType(b.name) === 'land'
      if (aLand !== bLand) return aLand ? 1 : -1
      const aBasic = BASIC_LANDS.has(a.name)
      const bBasic = BASIC_LANDS.has(b.name)
      if (aBasic !== bBasic) return aBasic ? 1 : -1
      return a.name.localeCompare(b.name)
    })
  }
  return map
}

const visualMainSplit = computed(() => {
  const { creatures, other } = splitCreatures(props.decklist.mainboard)
  const creatureBuckets = groupByBucket(creatures, false) // creatures don't have lands
  const otherBuckets = groupByBucket(other, true) // lands + CMC-0 in col '0'

  // Always show columns 0..maxCmc — empty cells preserved for alignment
  const numericKeys = [...creatureBuckets.keys(), ...otherBuckets.keys()].map(Number)
  const maxKey = numericKeys.length ? Math.max(...numericKeys) : 0
  const sortedKeys: string[] = []
  for (let i = 0; i <= maxKey; i++) sortedKeys.push(String(i))

  const creatureCols: VisualColumn[] = sortedKeys.map((k) => ({
    label: k === '7' ? '7+' : k,
    entries: creatureBuckets.get(k) || [],
  }))
  const otherCols: VisualColumn[] = sortedKeys.map((k) => ({
    label: k === '7' ? '7+' : k,
    entries: otherBuckets.get(k) || [],
  }))

  return {
    creatures: creatureCols,
    other: otherCols,
    creaturesCount: creatures.reduce((s, e) => s + e.count, 0),
    otherCount: other.reduce((s, e) => s + e.count, 0),
  }
})
const visualSide = computed(() => {
  const side = props.decklist.sideboard || []
  return [...side].sort((a, b) => {
    const aLand = typeOf(a.name) === 'land'
    const bLand = typeOf(b.name) === 'land'
    if (aLand !== bLand) return aLand ? -1 : 1
    const ca = cmcOf(a.name)
    const cb = cmcOf(b.name)
    if (ca !== cb) return ca - cb
    return a.name.localeCompare(b.name)
  })
})

// Each unique card displayed as a single image with a count badge.
// Cards stacked vertically with offsetY spacing.
function positionAt(_entries: DecklistEntry[], idx: number): number {
  return idx * offsetY.value
}

function stackHeight(entries: DecklistEntry[]): number {
  if (!entries.length) return 0
  return (entries.length - 1) * offsetY.value + cardHeight.value
}

const mainGroups = computed(() => groupByType(props.decklist.mainboard))

function totalOf(entries: DecklistEntry[]): number {
  return entries.reduce((s, e) => s + e.count, 0)
}
</script>

<template>
  <div class="decklist">
    <div class="decklist-header">
      <div class="decklist-meta" v-if="decklist.player || decklist.event">
        <div v-if="decklist.player"><span class="decklist-meta-label">{{ tLabels.player }}:</span> {{ decklist.player }}</div>
        <div v-if="decklist.event"><span class="decklist-meta-label">{{ tLabels.event }}:</span> {{ decklist.event }}</div>
        <div v-if="decklist.date"><span class="decklist-meta-label">{{ tLabels.date }}:</span> {{ decklist.date }}</div>
      </div>
      <div class="decklist-controls">
        <div v-if="viewMode === 'visual'" class="decklist-zoom">
          <span class="zoom-label">{{ tLabels.zoom }}</span>
          <input
            type="range"
            min="90"
            max="240"
            step="2"
            :value="zoom"
            @input="onZoom"
            class="zoom-slider"
          />
        </div>
        <div class="decklist-toggle">
          <button
            class="decklist-toggle-btn"
            :class="{ active: viewMode === 'visual' }"
            @click="setMode('visual')"
          >{{ tLabels.view_visual }}</button>
          <button
            class="decklist-toggle-btn"
            :class="{ active: viewMode === 'list' }"
            @click="setMode('list')"
          >{{ tLabels.view_list }}</button>
        </div>
      </div>
    </div>

    <!-- Loading state while bulk index is being downloaded -->
    <div v-if="viewMode === 'visual' && indexLoading" class="decklist-loading">
      <span>{{ tLabels.loading }}</span>
      <div class="loading-progress">
        <div class="loading-progress-bar" :style="{ width: (indexProgress * 100) + '%' }"></div>
      </div>
      <span class="loading-progress-text">{{ Math.round(indexProgress * 100) }}%</span>
    </div>
    <div v-else-if="viewMode === 'visual' && !typesReady" class="decklist-loading">
      <span>{{ tLabels.loading }}</span>
    </div>

    <!-- VISUAL MODE: main as CMC columns (lands first), sideboard as one dense column -->
    <div v-else-if="viewMode === 'visual'" class="decklist-visual">
      <div class="visual-main">
        <!-- Creatures row -->
        <div v-if="visualMainSplit.creatures.length" class="visual-row">
          <h4 class="visual-row-title">
            {{ tLabels.creature }}
            <span class="visual-row-count">({{ visualMainSplit.creaturesCount }})</span>
          </h4>
          <div class="visual-columns">
            <div
              v-for="(col, colIdx) in visualMainSplit.creatures"
              :key="`creature-col-${colIdx}`"
              class="visual-column"
              :style="{ width: zoom + 'px' }"
            >
              <span class="visual-column-label">{{ col.label }}</span>
              <div
                class="visual-column-stack"
                :style="{ width: zoom + 'px', height: stackHeight(col.entries) + 'px' }"
              >
                <a
                  v-for="(entry, entryIdx) in col.entries"
                  :key="`c-${colIdx}-${entry.name}`"
                  :href="scryfallCardUrl(entry.name)"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="visual-card"
                  :style="{ top: positionAt(col.entries, entryIdx) + 'px', width: zoom + 'px', height: cardHeight + 'px' }"
                  :title="entry.name"
                >
                  <img :src="scryfallImageUrl(entry.name, 'normal')" :alt="entry.name" loading="lazy" />
                  <span v-if="entry.count > 1" class="visual-count-badge">×{{ entry.count }}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- Other row (lands, spells, etc.) -->
        <div v-if="visualMainSplit.other.length" class="visual-row">
          <h4 class="visual-row-title">
            {{ locale === 'fr' ? 'Autres' : 'Other' }}
            <span class="visual-row-count">({{ visualMainSplit.otherCount }})</span>
          </h4>
          <div class="visual-columns">
            <div
              v-for="(col, colIdx) in visualMainSplit.other"
              :key="`other-col-${colIdx}`"
              class="visual-column"
              :style="{ width: zoom + 'px' }"
            >
              <span class="visual-column-label">{{ col.label }}</span>
              <div
                class="visual-column-stack"
                :style="{ width: zoom + 'px', height: stackHeight(col.entries) + 'px' }"
              >
                <a
                  v-for="(entry, entryIdx) in col.entries"
                  :key="`o-${colIdx}-${entry.name}`"
                  :href="scryfallCardUrl(entry.name)"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="visual-card"
                  :style="{ top: positionAt(col.entries, entryIdx) + 'px', width: zoom + 'px', height: cardHeight + 'px' }"
                  :title="entry.name"
                >
                  <img :src="scryfallImageUrl(entry.name, 'normal')" :alt="entry.name" loading="lazy" />
                  <span v-if="entry.count > 1" class="visual-count-badge">×{{ entry.count }}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <aside v-if="decklist.sideboard && decklist.sideboard.length" class="visual-side">
        <h3 class="visual-sideboard-heading">{{ tLabels.sideboard }} ({{ totalSide }})</h3>
        <div
          class="visual-column-stack"
          :style="{
            width: zoom + 'px',
            height: stackHeight(visualSide) + 'px',
          }"
        >
          <a
            v-for="(entry, entryIdx) in visualSide"
            :key="`s-${entry.name}`"
            :href="scryfallCardUrl(entry.name)"
            target="_blank"
            rel="noopener noreferrer"
            class="visual-card"
            :style="{
              top: positionAt(visualSide, entryIdx) + 'px',
              width: zoom + 'px',
              height: cardHeight + 'px',
            }"
            :title="entry.name"
          >
            <img
              :src="scryfallImageUrl(entry.name, 'normal')"
              :alt="entry.name"
              loading="lazy"
            />
            <span v-if="entry.count > 1" class="visual-count-badge">×{{ entry.count }}</span>
          </a>
        </div>
      </aside>
    </div>

    <!-- LIST MODE: grouped by type -->
    <div v-else class="decklist-list-mode">
      <div class="decklist-columns">
        <div v-for="[type, entries] in mainGroups" :key="`lm-${type}`" class="decklist-col">
          <h4 class="decklist-section-title">{{ tLabels[type] }} ({{ totalOf(entries) }})</h4>
          <ul class="decklist-list">
            <li v-for="entry in entries" :key="`m-${entry.name}`">
              <a
                :href="scryfallCardUrl(entry.name)"
                target="_blank"
                rel="noopener noreferrer"
                class="decklist-card"
              >
                <span class="decklist-count">{{ entry.count }}</span>
                <span class="decklist-name">{{ entry.name }}</span>
                <img
                  :src="scryfallImageUrl(entry.name, 'small')"
                  :alt="entry.name"
                  class="decklist-card-preview"
                  loading="lazy"
                />
              </a>
            </li>
          </ul>
        </div>

        <div v-if="decklist.sideboard && decklist.sideboard.length" class="decklist-col decklist-side-col">
          <h4 class="decklist-section-title">{{ tLabels.sideboard }} ({{ totalSide }})</h4>
          <ul class="decklist-list">
            <li v-for="entry in decklist.sideboard" :key="`s-${entry.name}`">
              <a
                :href="scryfallCardUrl(entry.name)"
                target="_blank"
                rel="noopener noreferrer"
                class="decklist-card"
              >
                <span class="decklist-count">{{ entry.count }}</span>
                <span class="decklist-name">{{ entry.name }}</span>
                <img
                  :src="scryfallImageUrl(entry.name, 'small')"
                  :alt="entry.name"
                  class="decklist-card-preview"
                  loading="lazy"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <p class="decklist-total">
      <strong>{{ totalMain }}</strong> {{ tLabels.mainboard.toLowerCase() }}<span v-if="totalSide"> + <strong>{{ totalSide }}</strong> {{ tLabels.sideboard.toLowerCase() }}</span>
    </p>

    <p v-if="decklist.source" class="decklist-source">
      <a :href="decklist.source.url" target="_blank" rel="noopener noreferrer">
        {{ decklist.source.title || decklist.source.url }}
      </a>
      <span v-if="decklist.source.publisher"> &mdash; {{ decklist.source.publisher }}</span>
    </p>
  </div>
</template>

<style scoped>
.decklist {
  border: 1px solid var(--line);
  padding: var(--space-md);
  background: var(--paper);
}

.decklist-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--space-md);
  margin-bottom: var(--space-md);
  padding-bottom: var(--space-sm);
  border-bottom: 1px dashed var(--line);
  flex-wrap: wrap;
}

.decklist-meta {
  display: flex;
  gap: var(--space-md);
  flex-wrap: wrap;
  font-size: 0.82rem;
  flex: 1;
}

.decklist-meta-label {
  font-family: var(--font-label);
  font-size: 0.65rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--muted);
}

.decklist-controls {
  display: flex;
  gap: var(--space-md);
  align-items: center;
}

.decklist-zoom {
  display: flex;
  align-items: center;
  gap: var(--space-xs);
}

.zoom-label {
  font-family: var(--font-label);
  font-size: 0.65rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--muted);
}

.zoom-slider {
  width: 110px;
  accent-color: var(--ink);
  cursor: pointer;
}

.decklist-toggle {
  display: flex;
  gap: 0;
  border: 1px solid var(--line);
}

.decklist-toggle-btn {
  font-family: var(--font-label);
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding: 4px 12px;
  background: none;
  border: none;
  color: var(--muted);
  cursor: pointer;
  transition: background 0.15s, color 0.15s;
}

.decklist-toggle-btn:hover {
  color: var(--ink);
}

.decklist-toggle-btn.active {
  background: var(--ink);
  color: var(--paper);
}

.decklist-loading {
  padding: var(--space-xl) 0;
  text-align: center;
  color: var(--muted);
  font-style: italic;
  font-size: 0.9rem;
}

.loading-progress {
  width: 280px;
  height: 6px;
  margin: var(--space-sm) auto 4px;
  background: var(--line-light);
  border-radius: 3px;
  overflow: hidden;
}

.loading-progress-bar {
  height: 100%;
  background: var(--ink);
  transition: width 0.3s ease;
}

.loading-progress-text {
  display: block;
  font-family: var(--font-mono);
  font-size: 0.78rem;
  color: var(--muted);
}

/* VISUAL MODE */
.decklist-visual {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: var(--space-lg);
  align-items: flex-start;
  overflow-x: hidden;
}

.visual-main {
  min-width: 0;
  max-width: 100%;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
}

.visual-row {
  display: flex;
  flex-direction: column;
}

.visual-row-title {
  font-family: var(--font-label);
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--ink);
  margin-bottom: var(--space-sm);
  padding-bottom: 3px;
  border-bottom: 1px solid var(--line);
}

.visual-row-count {
  color: var(--muted);
  font-weight: 400;
  margin-left: 4px;
}

.visual-columns {
  display: flex;
  gap: 6px;
  align-items: flex-start;
}

.visual-column {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
}

.visual-column-label {
  font-family: var(--font-mono);
  font-size: 0.78rem;
  font-weight: 700;
  color: var(--muted);
  margin-bottom: 4px;
}

.visual-column-stack {
  position: relative;
  flex-shrink: 0;
  min-height: 8px;
}

.visual-column-label-empty {
  opacity: 0.35;
}

.visual-side {
  border-left: 2px solid var(--line);
  padding-left: var(--space-md);
}

.visual-card {
  display: block;
  position: absolute;
  left: 0;
  transition: transform 0.15s, z-index 0s 0.15s;
}

.visual-count-badge {
  position: absolute;
  top: 4px;
  right: 4px;
  background: var(--ink);
  color: var(--paper);
  font-family: var(--font-heading);
  font-size: 0.95rem;
  font-weight: 700;
  padding: 3px 8px;
  border-radius: 4px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
  z-index: 1;
}

.visual-card img {
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 6%;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
}

.visual-card:hover {
  z-index: 20;
  transition: transform 0.15s, z-index 0s;
}

.visual-card:hover img {
  transform: translateY(-6px) scale(1.05);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.35);
}

.visual-sideboard-heading {
  font-family: var(--font-heading);
  font-size: 0.85rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  margin-bottom: var(--space-sm);
  color: var(--muted);
}

.visual-side {
  flex-shrink: 0;
  max-width: 100%;
}

@container (max-width: 1100px) {
  .decklist-visual {
    grid-template-columns: 1fr;
  }
  .visual-side {
    border-left: none;
    padding-left: 0;
    border-top: 2px solid var(--line);
    padding-top: var(--space-md);
    margin-top: var(--space-md);
  }
}

@media (max-width: 1100px) {
  .decklist-visual {
    grid-template-columns: 1fr;
  }
  .visual-side {
    border-left: none;
    padding-left: 0;
    border-top: 2px solid var(--line);
    padding-top: var(--space-md);
    margin-top: var(--space-md);
  }
}

/* LIST MODE */
.decklist-columns {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: var(--space-md);
}

.decklist-col {
  min-width: 0;
}

.decklist-side-col {
  border-left: 2px solid var(--line);
  padding-left: var(--space-md);
}

.decklist-section-title {
  font-family: var(--font-label);
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--muted);
  margin-bottom: var(--space-xs);
  padding-bottom: 2px;
  border-bottom: 1px solid var(--line-light);
}

.decklist-list {
  list-style: none;
  padding: 0;
  margin: 0 0 var(--space-sm);
}

.decklist-card {
  display: flex;
  align-items: baseline;
  gap: var(--space-xs);
  padding: 2px 0;
  text-decoration: none;
  color: var(--ink);
  font-size: 0.85rem;
  position: relative;
}

.decklist-card:hover {
  background: var(--paper-dark);
}

.decklist-count {
  font-family: var(--font-mono);
  font-weight: 700;
  color: var(--muted);
  min-width: 22px;
  text-align: right;
}

.decklist-name {
  flex: 1;
}

.decklist-card-preview {
  position: absolute;
  left: 100%;
  top: 50%;
  transform: translateY(-50%);
  width: 0;
  height: 0;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.15s;
  z-index: 50;
  border-radius: 6px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
}

.decklist-card:hover .decklist-card-preview {
  width: 200px;
  height: 279px;
  opacity: 1;
  margin-left: var(--space-sm);
}

.decklist-total {
  margin-top: var(--space-md);
  padding-top: var(--space-sm);
  border-top: 1px solid var(--line-light);
  font-size: 0.85rem;
  color: var(--muted);
  text-align: center;
}

.decklist-source {
  margin-top: var(--space-sm);
  font-size: 0.78rem;
  color: var(--muted);
  text-align: center;
}

.decklist-source a {
  color: var(--ink-light);
}
</style>

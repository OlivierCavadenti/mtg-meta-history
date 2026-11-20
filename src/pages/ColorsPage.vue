<script setup lang="ts">
import { computed, onBeforeUnmount, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useFormat } from '../lib/useFormat'
import { colorSeries, COLOR_KEYS, THIN_SAMPLE, type ColorKey, type ColorPoint } from '../lib/colorStats'
import { symbolUrl } from '../lib/cards'
import { formatMonth, formatNumber, seasonShort, seasonYears, t, type StringKey } from '../lib/i18n'
import SoonState from '../components/SoonState.vue'

const router = useRouter()
const { formatId, format, data, loading } = useFormat()

const series = computed<ColorPoint[]>(() => (data.value ? colorSeries(data.value) : []))
/** Limited: one point per set, weighted by 17Lands games instead of top 8s */
const limited = computed(() => formatId.value === 'limited')
const seasonOf = (id: string) => data.value?.seasons.find((s) => s.id === id)
const rowLabel = (p: ColorPoint) => {
  const s = seasonOf(p.season)
  return s?.code ? seasonShort(s) : seasonYears(p.start, p.end)
}
const bans = computed(() => (data.value ? data.value.seasons.flatMap((s) => s.bans) : []))

const LABEL: Record<ColorKey, StringKey> = {
  W: 'colorW', U: 'colorU', B: 'colorB', R: 'colorR', G: 'colorG',
}

const view = ref<'chart' | 'table'>('chart')

/* ---- layout ---- */
const wrap = ref<HTMLElement | null>(null)
const width = ref(960)
let ro: ResizeObserver | null = null
watch(wrap, (el) => {
  ro?.disconnect()
  if (!el || typeof ResizeObserver === 'undefined') return
  ro = new ResizeObserver(() => (width.value = el.clientWidth))
  ro.observe(el)
})
onBeforeUnmount(() => ro?.disconnect())

const narrow = computed(() => width.value < 640)
const M = computed(() => ({ left: narrow.value ? 40 : 128, right: 52, top: 8, bottom: 30 }))
const PANEL_H = computed(() => (narrow.value ? 70 : 92))
const GAP = 18
const height = computed(() => M.value.top + COLOR_KEYS.length * (PANEL_H.value + GAP) - GAP + M.value.bottom)

/* ---- scales ---- */
const t0 = computed(() => Date.parse(series.value[0]?.start ?? '1994-01-01'))
const t1 = computed(() => Date.now())
const mid = (p: ColorPoint) => {
  const a = Date.parse(p.start)
  const b = p.end ? Date.parse(p.end) : t1.value
  return (a + b) / 2
}
const x = (ms: number) => M.value.left + ((ms - t0.value) / (t1.value - t0.value)) * (width.value - M.value.left - M.value.right)

/** one shared y scale for every panel, so heights compare across colors */
const yMax = computed(() => {
  const m = Math.max(10, ...series.value.flatMap((p) => COLOR_KEYS.map((c) => p.share[c])))
  return Math.min(100, Math.ceil(m / 20) * 20)
})
const panelTop = (i: number) => M.value.top + i * (PANEL_H.value + GAP)
const y = (i: number, v: number) => panelTop(i) + PANEL_H.value - (v / yMax.value) * PANEL_H.value
const gridValues = computed(() => [yMax.value / 2, yMax.value])

const thin = (p: ColorPoint) => p.total < THIN_SAMPLE

function linePath(i: number, c: ColorKey, from: number, to: number): string {
  return series.value
    .slice(from, to + 1)
    .map((p, k) => `${k ? 'L' : 'M'}${x(mid(p)).toFixed(1)},${y(i, p.share[c]).toFixed(1)}`)
    .join('')
}

/** line split into runs: solid where both ends are well documented, dashed otherwise */
function segments(i: number, c: ColorKey): { d: string; dashed: boolean }[] {
  const out: { d: string; dashed: boolean }[] = []
  const pts = series.value
  for (let k = 0; k < pts.length - 1; k++) {
    const dashed = thin(pts[k]) || thin(pts[k + 1])
    const last = out[out.length - 1]
    if (last && last.dashed === dashed) {
      last.d += `L${x(mid(pts[k + 1])).toFixed(1)},${y(i, pts[k + 1].share[c]).toFixed(1)}`
    } else {
      out.push({ d: linePath(i, c, k, k + 1), dashed })
    }
  }
  return out
}

function areaPath(i: number, c: ColorKey): string {
  const pts = series.value
  if (!pts.length) return ''
  const base = y(i, 0).toFixed(1)
  return `${linePath(i, c, 0, pts.length - 1)}L${x(mid(pts[pts.length - 1])).toFixed(1)},${base}L${x(mid(pts[0])).toFixed(1)},${base}Z`
}

const yearTicks = computed(() => {
  const step = width.value < 640 ? 8 : width.value < 1000 ? 4 : 2
  const first = new Date(t0.value).getUTCFullYear()
  const last = new Date(t1.value).getUTCFullYear()
  const out: { year: number; x: number }[] = []
  for (let yr = Math.ceil(first / step) * step; yr <= last; yr += step) out.push({ year: yr, x: x(Date.UTC(yr, 0, 1)) })
  return out
})

const banLines = computed(() => bans.value.map((b) => ({ x: x(Date.parse(b.date)), label: `${b.cards.join(', ')} (${formatMonth(b.date)})` })))

/* ---- hover ---- */
const hover = ref<number | null>(null)
function onMove(e: PointerEvent) {
  const svg = e.currentTarget as SVGSVGElement
  const r = svg.getBoundingClientRect()
  const px = e.clientX - r.left
  let best = 0
  let bestD = Infinity
  series.value.forEach((p, k) => {
    const d = Math.abs(x(mid(p)) - px)
    if (d < bestD) {
      bestD = d
      best = k
    }
  })
  hover.value = best
}
const hovered = computed(() => (hover.value === null ? null : series.value[hover.value]))
const tipLeft = computed(() => {
  if (!hovered.value) return 0
  const hx = x(mid(hovered.value))
  return hx > width.value * 0.62 ? hx - 300 : hx + 16
})
function openSeason() {
  if (hovered.value) router.push(`/${formatId.value}#s-${hovered.value.season}`)
}

const pct = (v: number) => `${formatNumber(Math.round(v))} %`
const newestFirst = computed(() => series.value.slice().reverse())
</script>

<template>
  <SoonState v-if="format && !format.ready" :label="format.label" />
  <div v-else-if="loading || !data" class="state">{{ t('loading') }}</div>
  <div v-else class="colors-page">
    <header class="intro">
      <p class="lede">{{ limited ? t('colorsIntroLimited') : t('colorsIntro') }}</p>
      <nav class="views">
        <button type="button" :class="{ on: view === 'chart' }" @click="view = 'chart'">{{ t('chart') }}</button>
        <button type="button" :class="{ on: view === 'table' }" @click="view = 'table'">{{ t('table') }}</button>
      </nav>
    </header>

    <div v-show="view === 'chart'" ref="wrap" class="chart-wrap">
      <svg
        :width="width"
        :height="height"
        class="chart"
        role="img"
        :aria-label="t('colorsIntro')"
        @pointermove="onMove"
        @pointerleave="hover = null"
        @click="openSeason"
      >
        <!-- ban announcements: faint hairlines through every panel -->
        <g class="bans">
          <line v-for="(b, k) in banLines" :key="k" :x1="b.x" :x2="b.x" :y1="M.top" :y2="height - M.bottom">
            <title>{{ b.label }}</title>
          </line>
        </g>

        <g v-for="(c, i) in COLOR_KEYS" :key="c" class="panel" :class="`panel-${c.toLowerCase()}`">
          <!-- recessive grid: half and full scale -->
          <line
            v-for="g in gridValues"
            :key="g"
            class="grid"
            :x1="M.left"
            :x2="width - M.right"
            :y1="y(i, g)"
            :y2="y(i, g)"
          />
          <text v-if="!narrow" class="grid-label" :x="width - M.right + 6" :y="y(i, yMax) + 4">{{ yMax }} %</text>
          <line class="baseline" :x1="M.left" :x2="width - M.right" :y1="y(i, 0)" :y2="y(i, 0)" />

          <path class="area" :d="areaPath(i, c)" />
          <path v-for="(s, k) in segments(i, c)" :key="k" class="line" :class="{ dashed: s.dashed }" :d="s.d" />

          <!-- panel name: mana symbol + color name (identity never rests on color alone) -->
          <image :href="symbolUrl(c)" :x="narrow ? 6 : 0" :y="panelTop(i) + PANEL_H / 2 - 10" width="20" height="20" />
          <text v-if="!narrow" class="panel-name" x="28" :y="panelTop(i) + PANEL_H / 2 + 5">{{ t(LABEL[c]) }}</text>

          <!-- current value, direct label at the line end -->
          <text
            v-if="series.length && !hovered"
            class="end-label"
            :x="x(mid(series[series.length - 1])) + 6"
            :y="y(i, series[series.length - 1].share[c]) + 4"
          >{{ pct(series[series.length - 1].share[c]) }}</text>

          <circle
            v-if="hovered"
            class="dot"
            :class="{ hollow: thin(hovered) }"
            :cx="x(mid(hovered))"
            :cy="y(i, hovered.share[c])"
            r="4.5"
          />
        </g>

        <g class="axis">
          <g v-for="tk in yearTicks" :key="tk.year">
            <line :x1="tk.x" :x2="tk.x" :y1="height - M.bottom + 2" :y2="height - M.bottom + 7" />
            <text :x="tk.x" :y="height - M.bottom + 21">{{ tk.year }}</text>
          </g>
        </g>

        <line
          v-if="hovered"
          class="crosshair"
          :x1="x(mid(hovered))"
          :x2="x(mid(hovered))"
          :y1="M.top"
          :y2="height - M.bottom"
        />
      </svg>

      <div v-if="hovered" class="tip" :style="{ left: tipLeft + 'px' }">
        <p class="tip-head">
          <strong>{{ rowLabel(hovered) }}</strong>
          {{ seasonOf(hovered.season)?.set }}
        </p>
        <ul>
          <li v-for="c in COLOR_KEYS" :key="c">
            <img :src="symbolUrl(c)" alt="" />
            <span class="tip-val">{{ pct(hovered.share[c]) }}</span>
            <span class="tip-decks">{{ hovered.decks[c].slice(0, 2).map((d) => d.name).join(', ') || '–' }}</span>
          </li>
        </ul>
        <p class="tip-foot">{{ formatNumber(hovered.total) }} {{ limited ? t('seasonTotalLimited') : t('seasonTotal') }}</p>
      </div>
      <p v-if="!limited" class="note">{{ t('colorsThin') }}</p>
    </div>

    <table v-if="view === 'table'" class="table">
      <thead>
        <tr>
          <th scope="col">{{ t('season') }}</th>
          <th v-for="c in COLOR_KEYS" :key="c" scope="col"><img :src="symbolUrl(c)" :alt="t(LABEL[c])" /></th>
          <th scope="col">{{ limited ? t('gamesWord') : t('top8') }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="p in newestFirst" :key="p.season" :class="{ thin: thin(p) }">
          <th scope="row">
            <router-link :to="`/${formatId}#s-${p.season}`">{{ rowLabel(p) }}</router-link>
          </th>
          <td v-for="c in COLOR_KEYS" :key="c">{{ pct(p.share[c]) }}</td>
          <td>{{ formatNumber(p.total) }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.intro {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: var(--space-md);
  flex-wrap: wrap;
  padding: var(--space-md) 0 var(--space-sm);
  border-bottom: 1px solid var(--line);
  margin-bottom: var(--space-lg);
}

.lede {
  font-style: italic;
  color: var(--ink-light);
}

.views {
  display: flex;
  gap: var(--space-md);
}

.views button {
  font-family: var(--font-body);
  font-size: 0.95rem;
  background: none;
  border: none;
  padding: 0;
  color: var(--muted);
  cursor: pointer;
}

.views button.on {
  color: var(--ink);
  text-decoration: underline;
  text-underline-offset: 4px;
}

.chart-wrap {
  position: relative;
}

.chart {
  display: block;
  overflow: visible;
  cursor: pointer;
  font-family: var(--font-label);
}

.panel-w { --series: var(--series-w); }
.panel-u { --series: var(--series-u); }
.panel-b { --series: var(--series-b); }
.panel-r { --series: var(--series-r); }
.panel-g { --series: var(--series-g); }

.grid {
  stroke: var(--line-light);
  stroke-width: 1;
  stroke-dasharray: 2 3;
}

.baseline {
  stroke: var(--line);
  stroke-width: 1;
}

.grid-label {
  font-size: 10px;
  fill: var(--faint);
}

.area {
  fill: var(--series);
  opacity: 0.1;
}

.line {
  fill: none;
  stroke: var(--series);
  stroke-width: 2;
  stroke-linejoin: round;
  stroke-linecap: round;
}

.line.dashed {
  stroke-dasharray: 3 4;
  opacity: 0.75;
}

.panel-name {
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 15px;
  fill: var(--ink);
}

.end-label {
  font-size: 12px;
  fill: var(--ink-light);
  font-variant-numeric: tabular-nums lining-nums;
}

.dot {
  fill: var(--series);
  stroke: var(--paper);
  stroke-width: 2;
}

.dot.hollow {
  fill: var(--paper);
  stroke: var(--series);
}

.bans line {
  stroke: var(--accent);
  stroke-width: 1;
  opacity: 0.18;
}

.axis line {
  stroke: var(--line);
}

.axis text {
  font-size: 11px;
  fill: var(--muted);
  text-anchor: middle;
  font-variant-numeric: lining-nums;
}

.crosshair {
  stroke: var(--ink);
  stroke-width: 1;
  opacity: 0.5;
  pointer-events: none;
}

.tip {
  position: absolute;
  top: 0;
  width: 284px;
  padding: 0.6rem 0.75rem 0.5rem;
  background: var(--paper) var(--grain);
  border: 1px solid var(--ink);
  box-shadow: var(--shadow-card);
  pointer-events: none;
  font-size: 0.85rem;
  z-index: 5;
}

.tip-head {
  border-bottom: 1px solid var(--line);
  padding-bottom: 0.3rem;
  margin-bottom: 0.35rem;
  font-style: italic;
  color: var(--muted);
}

.tip-head strong {
  font-family: var(--font-heading);
  font-style: normal;
  font-size: 1.05rem;
  color: var(--ink);
  margin-right: 0.3rem;
}

.tip ul {
  list-style: none;
  padding: 0;
}

.tip li {
  display: grid;
  grid-template-columns: 16px 3.2rem 1fr;
  align-items: center;
  gap: 0.4rem;
  padding: 0.12rem 0;
}

.tip img {
  width: 15px;
  height: 15px;
}

.tip-val {
  font-family: var(--font-heading);
  font-weight: 700;
  text-align: right;
  font-variant-numeric: tabular-nums lining-nums;
}

.tip-decks {
  color: var(--ink-light);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.tip-foot {
  margin-top: 0.3rem;
  font-style: italic;
  font-size: 0.78rem;
  color: var(--muted);
}

.note {
  margin-top: var(--space-sm);
  font-size: 0.85rem;
  font-style: italic;
  color: var(--muted);
}

.table {
  font-variant-numeric: tabular-nums lining-nums;
}

.table th,
.table td {
  text-align: right;
}

.table th:first-child {
  text-align: left;
}

.table thead img {
  width: 16px;
  height: 16px;
  vertical-align: middle;
}

.table tr.thin td {
  color: var(--muted);
  font-style: italic;
}
</style>

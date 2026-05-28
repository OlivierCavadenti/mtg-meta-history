<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { t } from '../lib/i18n'
import YearSummary from '../components/YearSummary.vue'
import { getEntriesByYear } from '../data/years'

const route = useRoute()

const year = computed(() => Number(route.params.year))
const entries = computed(() => getEntriesByYear(year.value))
const hasData = computed(() => entries.value.length > 0)

const allBans = computed(() =>
  entries.value.flatMap((e) =>
    (e.bans || []).map((b) => ({ ...b, format: e.format }))
  ).sort((a, b) => a.date.localeCompare(b.date))
)
</script>

<template>
  <div v-if="hasData">
    <header class="page-header">
      <h1>{{ year }}</h1>
      <p class="subtitle">{{ t('home.documented_years') }}</p>
    </header>

    <section class="section">
      <h2 class="section-title">{{ t('year.formats') }}</h2>
      <YearSummary :year="year" :entries="entries" />
    </section>

    <section v-if="allBans.length" class="section">
      <h2 class="section-title">{{ t('year.bans') }}</h2>
      <table>
        <thead>
          <tr>
            <th>{{ t('ban.date') }}</th>
            <th>{{ t('ban.cards') }}</th>
            <th>{{ t('ban.explanation') }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(ban, i) in allBans" :key="i">
            <td style="white-space: nowrap; font-family: var(--font-mono); font-size: 0.82rem;">{{ ban.date }}</td>
            <td><em>{{ ban.cards.join(', ') }}</em></td>
            <td>{{ ban.explanation }}</td>
          </tr>
        </tbody>
      </table>
    </section>
  </div>
  <div v-else>
    <header class="page-header">
      <h1>{{ year }}</h1>
      <p class="subtitle">{{ t('year.no_data') }}</p>
    </header>
    <p>
      <router-link to="/timeline">{{ t('year.back_timeline') }}</router-link>
    </p>
  </div>
</template>

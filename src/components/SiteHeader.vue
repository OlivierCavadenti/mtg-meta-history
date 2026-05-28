<script setup lang="ts">
import { ref } from 'vue'
import { t, locale, toggleLocale } from '../lib/i18n'

const menuOpen = ref(false)
</script>

<template>
  <header class="site-header">
    <div class="site-header-inner">
      <router-link to="/" class="site-title">
        <span class="site-title-mtg">MTG</span>
        <span class="site-title-meta">Meta History</span>
      </router-link>
      <div class="site-header-right">
        <button class="locale-toggle" @click="toggleLocale()" :title="locale === 'en' ? 'Passer en français' : 'Switch to English'">
          {{ locale === 'en' ? 'FR' : 'EN' }}
        </button>
        <button
          class="menu-toggle"
          :class="{ open: menuOpen }"
          @click="menuOpen = !menuOpen"
          aria-label="Toggle menu"
        >
          <span></span><span></span><span></span>
        </button>
      </div>
      <nav class="site-nav" :class="{ open: menuOpen }" @click="menuOpen = false">
        <router-link to="/timeline">{{ t('nav.timeline') }}</router-link>
        <router-link to="/decks">{{ t('nav.decks') }}</router-link>
        <router-link to="/about">{{ t('nav.about') }}</router-link>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.site-header {
  border-bottom: 2px solid var(--ink);
  background: var(--paper);
  position: sticky;
  top: 0;
  z-index: 100;
}

.site-header-inner {
  max-width: 960px;
  margin: 0 auto;
  padding: var(--space-sm) var(--space-lg);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.site-title {
  text-decoration: none;
  display: flex;
  align-items: baseline;
  gap: var(--space-xs);
}

.site-title-mtg {
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 1.3rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.site-title-meta {
  font-family: var(--font-body);
  font-size: 0.95rem;
  font-style: italic;
  color: var(--muted);
}

.site-nav {
  display: flex;
  gap: var(--space-lg);
}

.site-nav a {
  font-family: var(--font-label);
  font-size: 0.82rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  text-decoration: none;
  color: var(--muted);
  padding: var(--space-xs) 0;
  border-bottom: 2px solid transparent;
  transition: color 0.15s, border-color 0.15s;
}

.site-nav a:hover,
.site-nav a.router-link-active {
  color: var(--ink);
  border-bottom-color: var(--ink);
}

.site-header-right {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
}

.locale-toggle {
  font-family: var(--font-label);
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  padding: 2px 8px;
  border: 1px solid var(--line);
  background: none;
  color: var(--muted);
  cursor: pointer;
  transition: all 0.15s;
}

.locale-toggle:hover {
  border-color: var(--ink);
  color: var(--ink);
}

.menu-toggle {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: var(--space-xs);
  flex-direction: column;
  gap: 4px;
}

.menu-toggle span {
  display: block;
  width: 20px;
  height: 2px;
  background: var(--ink);
  transition: transform 0.2s, opacity 0.2s;
}

.menu-toggle.open span:nth-child(1) {
  transform: rotate(45deg) translate(4px, 4px);
}
.menu-toggle.open span:nth-child(2) {
  opacity: 0;
}
.menu-toggle.open span:nth-child(3) {
  transform: rotate(-45deg) translate(4px, -4px);
}

@media (max-width: 600px) {
  .site-header-inner {
    padding: var(--space-sm) var(--space-md);
  }

  .menu-toggle {
    display: flex;
  }

  .site-nav {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: var(--paper);
    border-bottom: 2px solid var(--ink);
    flex-direction: column;
    padding: var(--space-md) var(--space-lg);
    gap: var(--space-sm);
  }

  .site-nav.open {
    display: flex;
  }
}
</style>

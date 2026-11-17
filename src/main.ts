import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'
import './styles/tokens.css'
import './styles/base.css'
import './styles/layout.css'

// Vite emits this when a preloaded chunk of an older build is gone (see router.onError).
window.addEventListener('vite:preloadError', (event) => {
  event.preventDefault()
  window.location.reload()
})

createApp(App).use(router).mount('#app')

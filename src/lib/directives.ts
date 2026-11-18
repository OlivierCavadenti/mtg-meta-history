import type { App, Directive } from 'vue'

const reduceMotion = () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

/**
 * v-reveal: fades and lifts an element in the first time it scrolls into view.
 * Elements in the same row get a small stagger from their position, so a grid
 * settles left to right instead of popping all at once.
 */
let observer: IntersectionObserver | null = null
function getObserver(): IntersectionObserver {
  if (!observer) {
    observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue
          const el = e.target as HTMLElement
          el.classList.add('is-revealed')
          observer?.unobserve(el)
        }
      },
      { rootMargin: '0px 0px -6% 0px', threshold: 0.05 },
    )
  }
  return observer
}

const reveal: Directive<HTMLElement, number | undefined> = {
  mounted(el, binding) {
    if (reduceMotion() || typeof IntersectionObserver === 'undefined') return
    el.classList.add('reveal')
    el.style.setProperty('--reveal-delay', `${Math.min(binding.value ?? 0, 8) * 45}ms`)
    getObserver().observe(el)
  },
  unmounted(el) {
    observer?.unobserve(el)
  },
}

/** v-fade: images fade in once decoded instead of popping in line by line. */
const fade: Directive<HTMLImageElement> = {
  mounted(el) {
    el.classList.add('img-fade')
    const done = () => el.classList.add('is-loaded')
    if (el.complete && el.naturalWidth > 0) done()
    else {
      el.addEventListener('load', done, { once: true })
      el.addEventListener('error', done, { once: true })
    }
  },
  updated(el) {
    // src changed (same element reused for another card): fade again
    if (!el.complete) {
      el.classList.remove('is-loaded')
      el.addEventListener('load', () => el.classList.add('is-loaded'), { once: true })
    }
  },
}

/**
 * v-tilt: a card leans a few degrees toward the pointer, like a physical card
 * lifted off the table. Pointer devices only; off with reduced motion.
 */
const MAX = 7
const tilt: Directive<HTMLElement> = {
  mounted(el) {
    if (reduceMotion() || !window.matchMedia('(hover: hover)').matches) return
    el.classList.add('tilt')
    let frame = 0
    const move = (e: PointerEvent) => {
      const r = el.getBoundingClientRect()
      const x = (e.clientX - r.left) / r.width - 0.5
      const y = (e.clientY - r.top) / r.height - 0.5
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        el.style.setProperty('--tilt-x', `${(-y * MAX).toFixed(2)}deg`)
        el.style.setProperty('--tilt-y', `${(x * MAX).toFixed(2)}deg`)
        el.style.setProperty('--glare-x', `${((x + 0.5) * 100).toFixed(1)}%`)
        el.style.setProperty('--glare-y', `${((y + 0.5) * 100).toFixed(1)}%`)
      })
    }
    const leave = () => {
      cancelAnimationFrame(frame)
      el.style.setProperty('--tilt-x', '0deg')
      el.style.setProperty('--tilt-y', '0deg')
    }
    el.addEventListener('pointermove', move)
    el.addEventListener('pointerleave', leave)
  },
}

export function registerDirectives(app: App) {
  app.directive('reveal', reveal)
  app.directive('fade', fade)
  app.directive('tilt', tilt)
}

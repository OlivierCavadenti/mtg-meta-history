/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<object, object, unknown>
  export default component
}

import type { Directive } from 'vue'

declare module 'vue' {
  export interface GlobalDirectives {
    vReveal: Directive<HTMLElement, number | undefined>
    vFade: Directive<HTMLImageElement>
    vTilt: Directive<HTMLElement>
  }
}

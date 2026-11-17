import { reactive } from 'vue'

// Shared state for the floating card preview shown when hovering a card row.
export const preview = reactive({ url: '', x: 0, y: 0, visible: false })

export function showPreview(url: string, e: MouseEvent) {
  if (window.matchMedia('(hover: none)').matches) return
  preview.url = url
  movePreview(e)
  preview.visible = true
}

export function movePreview(e: MouseEvent) {
  const w = 250
  const h = 349
  const pad = 18
  let x = e.clientX + pad
  let y = e.clientY - h / 2
  if (x + w > window.innerWidth - 8) x = e.clientX - w - pad
  y = Math.max(8, Math.min(y, window.innerHeight - h - 8))
  preview.x = x
  preview.y = y
}

export function hidePreview() {
  preview.visible = false
}

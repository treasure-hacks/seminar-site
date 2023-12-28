'use client';
import { Splide } from "@splidejs/splide"
import '@splidejs/splide/css/skyblue';
import './splide.scss';

let run = false
function init(selector: string) {
  if (run) return
  run = true // temp
  if (typeof document === 'undefined') return
  const element = document.querySelector(selector) as HTMLElement
  const splide = new Splide(element, {
    start: 1,
    type: 'loop',
    focus: 'center',
    drag: true,
    autoWidth: true,
    gap: '2rem',
    trimSpace: false,
    updateOnMove: true,
    flickMaxPages: 0.6,
    destroy: true,
    autoplay: true,
    interval: 8000,
    breakpoints: {
      550: { gap: 0, start: 0 },
      1500: { destroy: false }
    }
  })
  splide.mount()
  splide.state.set(3)
}

export default init

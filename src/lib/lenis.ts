import Lenis from 'lenis';

let instance: Lenis | null = null;
let frame = 0;

export function getLenis() {
  return instance;
}

export function initLenis() {
  if (instance) return instance;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return null;

  instance = new Lenis({
    duration: 1.1,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    touchMultiplier: 1.6,
    anchors: { offset: -104 }
  });

  const raf = (time: number) => {
    instance?.raf(time);
    frame = requestAnimationFrame(raf);
  };
  frame = requestAnimationFrame(raf);

  return instance;
}

export function destroyLenis() {
  cancelAnimationFrame(frame);
  instance?.destroy();
  instance = null;
}

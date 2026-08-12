import type { Variants, Transition } from 'motion/react';

export const EASE_OUT_EXPO = [0.22, 1, 0.36, 1] as const;

export const baseTransition: Transition = {
  duration: 0.7,
  ease: EASE_OUT_EXPO
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: baseTransition }
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: baseTransition }
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, y: 16, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: baseTransition }
};

export const staggerParent = (stagger = 0.08, delayChildren = 0): Variants => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: stagger, delayChildren }
  }
});

export const lineReveal: Variants = {
  hidden: { y: '115%', opacity: 0 },
  visible: { y: '0%', opacity: 1, transition: { duration: 0.95, ease: EASE_OUT_EXPO } }
};

export const staticVariants: Variants = {
  hidden: { opacity: 1, y: 0, scale: 1 },
  visible: { opacity: 1, y: 0, scale: 1 }
};

import type { ReactNode } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import { EASE_OUT_EXPO } from '../../lib/motion';

const TRAVEL = 620;

export default function HeroScreen({ children }: { children?: ReactNode }) {
  const reduced = useReducedMotion();
  const { scrollY } = useScroll();

  const rotateX = useTransform(scrollY, [0, TRAVEL], [11, 0], { clamp: true });
  const scale = useTransform(scrollY, [0, TRAVEL], [0.92, 1], { clamp: true });
  const glow = useTransform(scrollY, [0, TRAVEL], [0.65, 0.15], { clamp: true });

  return (
    <div className="relative" style={{ perspective: '1800px' }}>
      <motion.div
        className="screen-glow"
        style={reduced ? { opacity: 0.18 } : { opacity: glow }}
        aria-hidden="true"
      />

      <motion.div
        initial={reduced ? { opacity: 1 } : { opacity: 0, y: 56 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, ease: EASE_OUT_EXPO, delay: 0.35 }}
      >
        <motion.div
          style={reduced ? undefined : { rotateX, scale }}
          className="origin-top will-change-transform"
        >
          {children}
        </motion.div>
      </motion.div>
    </div>
  );
}

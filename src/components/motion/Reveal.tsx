import type { ReactNode } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { fadeUp, scaleIn, fadeIn, staticVariants } from '../../lib/motion';

type Preset = 'up' | 'in' | 'scale';

const presets = { up: fadeUp, in: fadeIn, scale: scaleIn };

interface Props {
  children: ReactNode;
  preset?: Preset;
  delay?: number;
  amount?: number;
  className?: string;
  as?: 'div' | 'span' | 'li';
}

export default function Reveal({
  children,
  preset = 'up',
  delay = 0,
  amount = 0.3,
  className,
  as = 'div'
}: Props) {
  const reduced = useReducedMotion();
  const Tag = motion[as];

  return (
    <Tag
      className={className}
      variants={reduced ? staticVariants : presets[preset]}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      transition={{ delay }}
    >
      {children}
    </Tag>
  );
}

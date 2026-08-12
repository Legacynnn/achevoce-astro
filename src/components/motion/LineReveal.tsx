import { motion, useReducedMotion } from 'motion/react';
import { lineReveal, staggerParent, staticVariants } from '../../lib/motion';

interface Props {
  lines: string[];
  className?: string;
  lineClassName?: string;
  altLineClassName?: string;
  stagger?: number;
}

export default function LineReveal({
  lines,
  className,
  lineClassName,
  altLineClassName,
  stagger = 0.1
}: Props) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className={className}
      variants={staggerParent(reduced ? 0 : stagger)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
    >
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden pb-[0.12em]">
          <motion.span
            className={`block ${lineClassName ?? ''} ${i % 2 === 1 ? (altLineClassName ?? '') : ''}`}
            variants={reduced ? staticVariants : lineReveal}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </motion.div>
  );
}

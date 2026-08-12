import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform, useSpring } from 'motion/react';
import { EASE_OUT_EXPO } from '../../lib/motion';

const items = [
  {
    tag: 'Medicamento',
    title: 'Dipirona sódica 500mg/mL',
    meta: '1.240 ampolas · lote íntegro',
    org: 'Hospital Santa Clara · Curitiba, PR',
    note: 'Vence em 94 dias',
    tone: 'clay' as const
  },
  {
    tag: 'Insumo',
    title: 'Cateter venoso central 7Fr',
    meta: '86 unidades · embalagem lacrada',
    org: 'Santa Casa de Londrina · PR',
    note: 'Disponível hoje',
    tone: 'moss' as const
  },
  {
    tag: 'Equipamento',
    title: 'Bomba de infusão volumétrica',
    meta: '3 unidades · em funcionamento',
    org: 'Hospital Regional · Maringá, PR',
    note: 'Ocioso há 7 meses',
    tone: 'moss' as const
  }
];

const toneClass = {
  clay: 'border-clay-600/25 text-clay-600',
  moss: 'border-moss-600/25 text-moss-600'
};

export default function HeroVisual() {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const rawY = useTransform(scrollYProgress, [0, 1], [40, -60]);
  const y = useSpring(rawY, { stiffness: 90, damping: 24, mass: 0.4 });

  return (
    <div ref={ref} className="relative">
      <motion.div
        style={reduced ? undefined : { y }}
        className="relative flex flex-col gap-4"
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.12, delayChildren: 0.25 } } }}
      >
        {items.map((item, i) => (
          <motion.article
            key={item.title}
            variants={{
              hidden: reduced ? { opacity: 1 } : { opacity: 0, y: 28, rotate: 0 },
              visible: {
                opacity: 1,
                y: 0,
                rotate: reduced ? 0 : i === 0 ? -1.1 : i === 1 ? 0.6 : -0.4,
                transition: { duration: 0.85, ease: EASE_OUT_EXPO }
              }
            }}
            whileHover={reduced ? undefined : { y: -6, rotate: 0, transition: { duration: 0.35 } }}
            className={`rounded-card border border-border bg-bg-raised p-5 shadow-soft sm:p-6 ${i === 1 ? 'lg:ms-8' : ''}`}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0">
                <span className="eyebrow">{item.tag}</span>
                <h3 className="mt-2 text-[1.0625rem] leading-snug font-semibold text-balance">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm text-fg-subtle">{item.meta}</p>
              </div>
              <span
                className={`shrink-0 rounded-pill border px-3 py-1 text-xs leading-none font-medium ${toneClass[item.tone]}`}
              >
                {item.note}
              </span>
            </div>
            <div className="mt-5 flex items-center gap-2.5 border-t border-border pt-4 text-sm text-fg-subtle">
              <span className="size-1.5 rounded-full bg-moss-600" aria-hidden="true" />
              {item.org}
            </div>
          </motion.article>
        ))}
      </motion.div>

      <motion.div
        initial={reduced ? { opacity: 1 } : { opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: EASE_OUT_EXPO, delay: 0.9 }}
        className="pointer-events-none absolute -bottom-5 left-0 rounded-pill border border-border bg-bg-deep px-4 py-2 text-sm font-medium text-fg shadow-soft lg:-left-8"
      >
        3 instituições buscando estes itens
      </motion.div>
    </div>
  );
}

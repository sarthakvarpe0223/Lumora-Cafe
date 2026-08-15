import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Coffee, Cookie, Leaf, Sparkles } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

import interiorImg from '@assets/chef/nathan-dumlao-OvqNB-hDBDI-unsplash.jpg';
import chefImg     from '@assets/chef/nathan-dumlao-OvqNB-hDBDI-unsplash.jpg';

// ── Constants ──────────────────────────────────────────────────────────────────

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

// ── Data ──────────────────────────────────────────────────────────────────────

interface Feature {
  icon:  LucideIcon;
  label: string;
  desc:  string;
}

const FEATURES: Feature[] = [
  {
    icon:  Coffee,
    label: 'Freshly Roasted Beans',
    desc:  'Single-origin beans sourced from farms we visit personally, roasted on-site every morning.',
  },
  {
    icon:  Cookie,
    label: 'Handcrafted Desserts',
    desc:  'Every pastry and dessert is made from scratch daily by our in-house pâtissier.',
  },
  {
    icon:  Leaf,
    label: 'Locally Sourced Ingredients',
    desc:  'We work directly with regional farms to bring the freshest produce to your plate.',
  },
  {
    icon:  Sparkles,
    label: 'Cozy Premium Atmosphere',
    desc:  'Spaces designed for unhurried mornings, long conversations, and real comfort.',
  },
];

interface StatDatum {
  target:   number;
  suffix:   string;
  label:    string;
  decimal?: boolean;
}

const STATS: StatDatum[] = [
  { target: 12,  suffix: '+',  label: 'Years Experience' },
  { target: 10,  suffix: 'K+', label: 'Happy Customers' },
  { target: 25,  suffix: '+',  label: 'Signature Drinks' },
  { target: 4.9, suffix: '★',  label: 'Average Rating', decimal: true },
];

// ── Animated counter hook ─────────────────────────────────────────────────────

function useAnimatedCounter(
  target:    number,
  decimal:   boolean,
  triggered: boolean,
): number {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!triggered) return;

    const DURATION = 1600;
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed  = now - startTime;
      const progress = Math.min(elapsed / DURATION, 1);
      // Cubic ease-out
      const eased    = 1 - Math.pow(1 - progress, 3);
      const current  = eased * target;

      setCount(decimal ? Math.round(current * 10) / 10 : Math.floor(current));

      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(tick);
  }, [triggered, target, decimal]);

  return count;
}

// ── Sub-components ────────────────────────────────────────────────────────────

function FeatureItem({
  feature,
  index,
}: {
  feature: Feature;
  index:   number;
}) {
  const Icon = feature.icon;
  return (
    <motion.div
      className="flex items-start gap-3.5"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.55, ease: EASE, delay: 0.05 + index * 0.09 }}
    >
      {/* Icon pill */}
      <div
        className="flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center mt-0.5"
        style={{
          background: 'rgba(175,130,50,0.12)',
          border:     '1px solid rgba(175,130,50,0.22)',
        }}
      >
        <Icon
          size={16}
          strokeWidth={1.75}
          style={{ color: 'hsl(35, 58%, 36%)' }}
        />
      </div>
      <div>
        <p className="text-espresso font-semibold text-sm leading-snug mb-0.5">
          {feature.label}
        </p>
        <p
          className="text-muted-foreground text-xs"
          style={{ lineHeight: '1.65' }}
        >
          {feature.desc}
        </p>
      </div>
    </motion.div>
  );
}

function StatItem({
  stat,
  index,
  triggered,
}: {
  stat:      StatDatum;
  index:     number;
  triggered: boolean;
}) {
  const count = useAnimatedCounter(stat.target, !!stat.decimal, triggered);
  const display = stat.decimal ? count.toFixed(1) : String(count);

  return (
    <motion.div
      className="flex flex-col items-center text-center"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, ease: EASE, delay: 0.1 + index * 0.08 }}
    >
      <span
        className="font-display text-espresso leading-none"
        style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)' }}
      >
        {display}
        <span className="text-amber text-[0.75em] ml-0.5">{stat.suffix}</span>
      </span>
      <span
        className="text-muted-foreground text-xs tracking-wide mt-1.5"
        style={{ lineHeight: 1.4 }}
      >
        {stat.label}
      </span>
    </motion.div>
  );
}

// ── Main section ──────────────────────────────────────────────────────────────

export function AboutSection() {
  // Ref for triggering stat counters
  const statsRef  = useRef<HTMLDivElement>(null);
  const statsInView = useInView(statsRef, { once: true, margin: '-80px' });

  return (
    <section id="about" className="bg-white py-24 lg:py-36 relative overflow-hidden" aria-label="About Lumora Café">

      {/* Warm ambient glow — barely visible on white, adds depth */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 65% 55% at 80% 20%, rgba(200,150,62,0.05) 0%, transparent 65%),' +
            'radial-gradient(ellipse 50% 40% at 10% 85%, rgba(200,150,62,0.04) 0%, transparent 60%)',
        }}
      />

      <div className="container-cafe relative">
        <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] gap-12 lg:gap-20 items-center">

          {/* ── LEFT — Images ────────────────────────────── */}
          <div className="relative">
            {/* Main interior image */}
            <motion.div
              className="relative rounded-2xl lg:rounded-3xl overflow-hidden"
              style={{ aspectRatio: '3/4' }}
              initial={{ opacity: 0, x: -48, scale: 0.96 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.85, ease: EASE }}
            >
              <img
                src={interiorImg}
                alt="Lumora Café warm interior — a space crafted for comfort"
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
              {/* Subtle warm overlay to deepen richness */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    'linear-gradient(180deg, transparent 55%, rgba(22,10,4,0.28) 100%)',
                }}
              />
            </motion.div>

            {/* Floating chef image — desktop only */}
            <motion.div
              className="hidden lg:block absolute -bottom-10 -right-8 w-[44%] rounded-2xl overflow-hidden"
              style={{
                border:     '4px solid #ffffff',
                boxShadow:  '0 12px 40px rgba(22,12,7,0.18), 0 4px 12px rgba(22,12,7,0.10)',
                aspectRatio: '1 / 1',
              }}
              initial={{ opacity: 0, x: 32, y: 24, scale: 0.92 }}
              whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.75, ease: EASE, delay: 0.28 }}
            >
              <img
                src={chefImg}
                alt="Our barista crafting a perfect espresso"
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </motion.div>

            {/* Years badge — overlapping top-left corner */}
            <motion.div
              className="hidden lg:flex absolute -top-5 -left-5 flex-col items-center justify-center w-20 h-20 rounded-full"
              style={{
                background: 'hsl(22, 47%, 12%)',
                boxShadow:  '0 8px 24px rgba(22,12,7,0.28)',
              }}
              initial={{ opacity: 0, scale: 0.6 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, ease: EASE, delay: 0.45 }}
            >
              <span
                className="font-display text-amber leading-none font-bold"
                style={{ fontSize: '1.4rem' }}
              >
                12+
              </span>
              <span className="text-cream text-[9px] tracking-widest uppercase mt-0.5 text-center leading-none">
                Years
              </span>
            </motion.div>
          </div>

          {/* ── RIGHT — Content ──────────────────────────── */}
          <motion.div
            className="flex flex-col lg:pb-10"
            initial={{ opacity: 0, x: 48 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.72, ease: EASE, delay: 0.12 }}
          >
            {/* Badge */}
            <span
              className="inline-flex self-start items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-[0.14em] uppercase mb-5"
              style={{
                background: 'rgba(175,130,50,0.10)',
                border:     '1px solid rgba(175,130,50,0.28)',
                color:      'hsl(35, 58%, 32%)',
              }}
            >
              ☕ Our Story
            </span>

            {/* Heading */}
            <h2
              className="font-display text-espresso mb-6"
              style={{ lineHeight: 1.08 }}
            >
              More Than Coffee.
              <br />
              <span className="text-gradient-amber italic">
                A Place to Slow Down.
              </span>
            </h2>

            {/* Story copy */}
            <p
              className="text-muted-foreground mb-8 max-w-lg"
              style={{ lineHeight: '1.82', fontSize: '1.0125rem' }}
            >
              Lumora Café started as a simple idea — what if a coffee shop felt
              less like a pit stop and more like a living room? We opened our
              doors in 2012 with a handful of recipes, a secondhand espresso
              machine, and a stubborn belief that good coffee deserved an equally
              good space to be enjoyed.
              <br />
              <br />
              Everything here is made the same day it's served. Our beans come
              in weekly from farms we've visited personally. Our pastry kitchen
              fires up before sunrise. Whether you're here for a quick shot or a
              slow morning with a friend, Lumora is built around one idea:{' '}
              <em className="text-espresso font-medium not-italic">
                you deserve to feel taken care of.
              </em>
            </p>

            {/* Feature points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5 mb-10">
              {FEATURES.map((f, i) => (
                <FeatureItem key={f.label} feature={f} index={i} />
              ))}
            </div>

            {/* Divider */}
            <div
              className="w-full mb-8"
              style={{ borderTop: '1px solid hsl(35 25% 88%)' }}
            />

            {/* Stats row */}
            <div
              ref={statsRef}
              className="grid grid-cols-4 gap-4"
            >
              {STATS.map((s, i) => (
                <StatItem
                  key={s.label}
                  stat={s}
                  index={i}
                  triggered={statsInView}
                />
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

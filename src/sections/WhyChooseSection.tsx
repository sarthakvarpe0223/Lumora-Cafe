import { motion } from 'framer-motion';
import { Coffee, ChefHat, Zap, Wifi, Armchair, Leaf } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

import bgImg from '@assets/coffee/jeremy-yap-jn-HaGWe4yw-unsplash.jpg';

// ── Constants ─────────────────────────────────────────────────────────────────

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

// Section background expressed as an HSL literal so gradients can match exactly
const ESPRESSO_BG = 'hsl(22, 47%, 12%)';

// ── Data ──────────────────────────────────────────────────────────────────────

interface FeatureData {
  icon:  LucideIcon;
  title: string;
  desc:  string;
}

const FEATURES: FeatureData[] = [
  {
    icon:  Coffee,
    title: 'Premium Coffee Beans',
    desc:  'Single-origin, personally sourced and roasted on-site daily for peak freshness.',
  },
  {
    icon:  ChefHat,
    title: 'Fresh Daily Bakery',
    desc:  'Everything bakes before sunrise. Your croissant is always warm, never reheated.',
  },
  {
    icon:  Zap,
    title: 'Fast Friendly Service',
    desc:  'We move quickly without making you feel rushed — because your time matters.',
  },
  {
    icon:  Wifi,
    title: 'Free Wi-Fi',
    desc:  'Fast, reliable connection throughout the café. Stay as long as you need.',
  },
  {
    icon:  Armchair,
    title: 'Comfortable Seating',
    desc:  'Spaces designed for long mornings and unhurried afternoons with real comfort.',
  },
  {
    icon:  Leaf,
    title: 'Fresh Local Ingredients',
    desc:  'Direct partnerships with regional farms bring the freshest produce every day.',
  },
];

// ── FeatureCard ───────────────────────────────────────────────────────────────

function FeatureCard({ feature, index }: { feature: FeatureData; index: number }) {
  const Icon = feature.icon;

  return (
    <motion.article
      className="flex flex-col gap-3 p-4 rounded-xl"
      style={{
        backgroundColor: 'rgba(255,255,255,0.05)',
        boxShadow:       'inset 0 0 0 1px rgba(255,255,255,0.09)',
      }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.55, ease: EASE, delay: index * 0.08 }}
      whileHover={{
        y:               -4,
        backgroundColor: 'rgba(175,130,50,0.10)',
        boxShadow:       'inset 0 0 0 1px rgba(175,130,50,0.28), 0 8px 28px rgba(0,0,0,0.22)',
      }}
    >
      {/* Icon */}
      <div
        className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
        style={{
          backgroundColor: 'rgba(200,150,62,0.16)',
          boxShadow:       'inset 0 0 0 1px rgba(200,150,62,0.24)',
        }}
      >
        <Icon
          size={16}
          strokeWidth={1.75}
          style={{ color: 'hsl(35, 60%, 60%)' }}
        />
      </div>

      {/* Title */}
      <p className="text-white text-sm font-semibold leading-snug">
        {feature.title}
      </p>

      {/* Description */}
      <p
        className="text-white/50 text-xs"
        style={{ lineHeight: '1.66' }}
      >
        {feature.desc}
      </p>
    </motion.article>
  );
}

// ── WhyChooseSection ──────────────────────────────────────────────────────────

export function WhyChooseSection() {
  return (
    <section
      id="why-choose"
      className="py-24 lg:py-36"
      style={{ backgroundColor: ESPRESSO_BG }}
      aria-label="Why Choose Lumora Café"
    >
      <div className="container-cafe">
        <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] gap-10 lg:gap-16 items-center">

          {/* ── LEFT — Image ─────────────────────────────── */}
          <motion.div
            className="relative rounded-2xl lg:rounded-3xl overflow-hidden order-2 lg:order-1"
            style={{ minHeight: '440px' }}
            initial={{ opacity: 0, x: -40, scale: 0.96 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.85, ease: EASE }}
          >
            <img
              src={bgImg}
              alt="Barista crafting a premium espresso at Lumora Café"
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
              decoding="async"
            />

            {/* Bottom darkening for depth */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  'linear-gradient(180deg, transparent 50%, rgba(10,4,2,0.55) 100%)',
              }}
            />

            {/* Right-edge fade into section bg — desktop only */}
            <div
              className="absolute inset-0 pointer-events-none hidden lg:block"
              style={{
                background: `linear-gradient(90deg, transparent 55%, ${ESPRESSO_BG} 100%)`,
              }}
            />

            {/* Subtle amber rim light on bottom edge */}
            <div
              className="absolute bottom-0 left-0 right-0 h-px pointer-events-none"
              style={{ background: 'linear-gradient(90deg, transparent, rgba(200,150,62,0.35), transparent)' }}
            />
          </motion.div>

          {/* ── RIGHT — Content ──────────────────────────── */}
          <motion.div
            className="flex flex-col order-1 lg:order-2"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.72, ease: EASE, delay: 0.14 }}
          >
            {/* Badge */}
            <span
              className="inline-flex self-start items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-[0.14em] uppercase mb-5"
              style={{
                backgroundColor: 'rgba(200,150,62,0.14)',
                boxShadow:       'inset 0 0 0 1px rgba(200,150,62,0.30)',
                color:           'hsl(35, 58%, 62%)',
              }}
            >
              ✨ Why Choose Us
            </span>

            {/* Heading */}
            <h2
              className="font-display text-white mb-5"
              style={{ lineHeight: 1.08 }}
            >
              Every Visit Is
              <br />
              <span className="text-gradient-amber italic">
                Made to Feel Special.
              </span>
            </h2>

            {/* Description */}
            <p
              className="text-white/60 mb-8 max-w-md"
              style={{ lineHeight: '1.82', fontSize: '1.0125rem' }}
            >
              At Lumora, we don't measure quality by what's fastest or cheapest.
              Every cup starts with beans we've chosen ourselves, roasted slowly
              and brewed with precision. Our kitchen opens before sunrise so your
              croissant is always warm, never rushed. The space is designed for
              real comfort — a place you actually want to stay. We're not trying
              to be the biggest café in Mumbai. We're trying to be your favourite
              one.
            </p>

            {/* Feature cards — 3 columns on lg, 2 on sm, 1 on mobile */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {FEATURES.map((f, i) => (
                <FeatureCard key={f.title} feature={f} index={i} />
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

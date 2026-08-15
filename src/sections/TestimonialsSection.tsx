import { Star } from 'lucide-react';
import { motion, type Variants } from 'framer-motion';

import img1 from '@assets/customers/macarena-navarro-buwxwnHoCh4-unsplash.jpg';
import img2 from '@assets/customers/joshua-rodriguez-f7zm5TDOi4g-unsplash.jpg';
import img3 from '@assets/customers/ceyda-ciftci-_v1PC3pNRAo-unsplash.jpg';

// ── Constants ─────────────────────────────────────────────────────────────────

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

// ── Data ──────────────────────────────────────────────────────────────────────

interface Testimonial {
  photo:  string;
  name:   string;
  role:   string;
  quote:  string;
  date:   string;
  rating: number;
}

const TESTIMONIALS: Testimonial[] = [
  {
    photo:  img1,
    name:   'Priya Sharma',
    role:   'Regular Guest',
    quote:
      'Lumora has completely ruined every other café for me. The oat-milk cortado alone is worth crossing the city for. The staff remember my name and my order — that kind of warmth is rare. I\'m here every single Saturday morning without fail.',
    date:   'Visited 2 weeks ago',
    rating: 5,
  },
  {
    photo:  img2,
    name:   'Rahul Mehta',
    role:   'Food Enthusiast',
    quote:
      'I\'ve been to cafés across Mumbai and Lumora is genuinely in its own league. The filter coffee is perfectly extracted and the avocado toast is the best I\'ve had outside of a proper brunch restaurant. The ambience is calm and beautiful — a rare thing.',
    date:   'Visited 3 weeks ago',
    rating: 5,
  },
  {
    photo:  img3,
    name:   'Ananya Patel',
    role:   'Working Professional',
    quote:
      'I come here to work on deadlines and always leave feeling better than when I walked in. Fast Wi-Fi, a corner table, great coffee, and staff who genuinely don\'t rush you. The hazelnut latte is perfection and the pastries are always fresh. My go-to spot.',
    date:   'Visited 1 week ago',
    rating: 5,
  },
];

// ── Variants ──────────────────────────────────────────────────────────────────

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const headingVariants: Variants = {
  hidden:   { opacity: 0, y: 32 },
  visible:  { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE } },
};

const cardVariants: Variants = {
  hidden:   { opacity: 0, y: 48 },
  visible:  { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
};

// ── Sub-components ────────────────────────────────────────────────────────────

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`} role="img">
      {Array.from({ length: count }).map((_, i) => (
        <Star
          key={i}
          className="w-4 h-4 fill-amber text-amber"
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <motion.article
      variants={cardVariants}
      whileHover={{ y: -8, transition: { duration: 0.4, ease: EASE } }}
      className="
        relative flex flex-col gap-5 rounded-2xl p-7
        bg-white/6 backdrop-blur-md
        border border-white/10
        shadow-[0_4px_32px_rgba(0,0,0,0.25)]
        transition-shadow duration-400
        hover:shadow-[0_12px_48px_rgba(0,0,0,0.35)]
        focus-within:ring-2 focus-within:ring-amber/40
      "
      tabIndex={0}
    >
      {/* Subtle amber glow on hover */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500
          group-hover:opacity-100"
        style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(191,141,61,0.08) 0%, transparent 70%)' }}
      />

      {/* Top: photo + meta */}
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 rounded-full overflow-hidden ring-2 ring-amber/30 flex-shrink-0">
          <img
            src={t.photo}
            alt={t.name}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <p className="font-semibold text-cream text-base leading-tight">{t.name}</p>
          <p className="text-cream/50 text-sm mt-0.5">{t.role}</p>
        </div>
        <div className="ml-auto">
          <StarRating count={t.rating} />
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-white/10" />

      {/* Quote */}
      <blockquote className="font-serif text-cream/80 text-[0.97rem] leading-[1.75] italic flex-1">
        &ldquo;{t.quote}&rdquo;
      </blockquote>

      {/* Date */}
      <p className="text-cream/40 text-xs tracking-wide uppercase">{t.date}</p>
    </motion.article>
  );
}

// ── Section ───────────────────────────────────────────────────────────────────

export function TestimonialsSection() {
  return (
    <section
      id="reviews"
      className="bg-espresso relative py-24 lg:py-36 overflow-hidden"
      aria-label="Customer Testimonials"
    >
      {/* Background glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(191,141,61,0.10) 0%, transparent 70%),' +
            'radial-gradient(ellipse 60% 40% at 80% 80%, rgba(191,141,61,0.06) 0%, transparent 60%)',
        }}
        aria-hidden="true"
      />

      <div className="relative container-cafe">
        {/* Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={headingVariants}>
            <span
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
                bg-amber/10 border border-amber/25 text-amber text-xs font-semibold
                tracking-[0.12em] uppercase mb-5"
            >
              ⭐ Loved by Our Guests
            </span>
          </motion.div>

          <motion.h2
            variants={headingVariants}
            className="font-display text-4xl sm:text-5xl lg:text-6xl text-cream leading-[1.1] mb-5"
          >
            What Our Customers{' '}
            <em className="text-gradient-amber not-italic">Say</em>
          </motion.h2>

          <motion.p
            variants={headingVariants}
            className="text-cream/60 text-lg leading-relaxed"
          >
            Thousands of guests have made Lumora part of their daily routine.
          </motion.p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {TESTIMONIALS.map((t) => (
            <TestimonialCard key={t.name} t={t} />
          ))}
        </motion.div>

        {/* Bottom stat row */}
        <motion.div
          className="mt-16 flex flex-wrap justify-center gap-10"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.3 }}
        >
          {[
            { value: '4.9★', label: 'Average Rating' },
            { value: '10,000+', label: 'Happy Guests' },
            { value: '5 Years', label: 'Serving Mumbai' },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <p className="font-display text-3xl text-amber">{value}</p>
              <p className="text-cream/50 text-sm mt-1">{label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

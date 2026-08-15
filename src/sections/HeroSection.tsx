import { motion, type Variants } from 'framer-motion';
import { ChevronDown, Star, Coffee } from 'lucide-react';
import heroBg from '@assets/hero/clifford-VobvKmG-StA-unsplash.jpg';
import { whatsappLink } from '@/constants/contact';

// ── Animation variants ────────────────────────────────────────

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.13,
      delayChildren: 0.55,
    },
  },
};

const fadeUp: Variants = {
  hidden:  { opacity: 0, y: 36, filter: 'blur(4px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.75, ease: EASE },
  },
};

const RESERVE_MSG = 'Hi! I would like to reserve a table at Lumora Café.';

// ── Component ─────────────────────────────────────────────────

export function HeroSection() {
  const scrollToMenu = () => {
    document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative h-screen min-h-[640px] overflow-hidden"
      aria-label="Welcome to Lumora Café"
    >
      {/* ── Background image — Ken Burns zoom ────────────────── */}
      <motion.div
        className="absolute inset-0 will-change-transform"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 28, ease: 'linear' }}
      >
        <img
          src={heroBg}
          alt="Lumora Café — a premium artisan café experience"
          className="w-full h-full object-cover object-center"
          loading="eager"
          decoding="async"
          fetchPriority="high"
        />
      </motion.div>

      {/* ── Gradient layers ───────────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Top — ensures navbar links are legible */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(10,5,2,0.55) 0%, transparent 38%)',
          }}
        />
        {/* Bottom — grounds the hero text */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(0deg, rgba(18,8,3,0.88) 0%, rgba(18,8,3,0.50) 32%, transparent 65%)',
          }}
        />
        {/* Left — adds depth & text contrast on desktop */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(90deg, rgba(18,8,3,0.58) 0%, rgba(18,8,3,0.18) 45%, transparent 72%)',
          }}
        />
      </div>

      {/* ── Main content ─────────────────────────────────────── */}
      <div className="relative h-full flex flex-col justify-center container-cafe">
        <motion.div
          className="max-w-xl pt-24 pb-16 mt-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div variants={fadeUp} className="mb-6">
            <span
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-white/90 text-xs font-medium tracking-[0.12em] uppercase"
              style={{
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.18)',
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)',
              }}
            >
              ☕&nbsp; Modern Coffee Experience
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            className="font-display text-white mb-5"
            style={{ textShadow: '0 4px 32px rgba(0,0,0,0.4)', lineHeight: 1.05, fontSize: 'clamp(2.5rem, 5.75vw, 4.6rem)' }}
          >
            Crafted for
            <br />
            <span className="text-gradient-amber italic">Coffee Lovers.</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            className="text-white/72 text-lg md:text-xl font-light mb-8 max-w-md"
            style={{ lineHeight: '1.85', textShadow: '0 2px 12px rgba(0,0,0,0.3)' }}
          >
            Premium coffee, handcrafted pastries, and a cozy atmosphere
            where every visit feels special.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
          >
            {/* Primary — WhatsApp reservation */}
            <motion.a
              href={whatsappLink(RESERVE_MSG)}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-7 py-4 rounded-full font-semibold text-base text-espresso tracking-wide"
              style={{
                background: 'hsl(35, 54%, 51%)',
                boxShadow: '0 8px 32px hsl(35 54% 51% / 0.42), 0 2px 8px rgba(0,0,0,0.25)',
              }}
              whileHover={{
                scale: 1.03,
                y: -2,
                boxShadow: '0 12px 40px hsl(35 54% 51% / 0.55), 0 4px 12px rgba(0,0,0,0.3)',
              }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 380, damping: 22 }}
            >
              Reserve a Table
              <motion.span
                className="inline-block"
                initial={{ x: 0 }}
                whileHover={{ x: 4 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              >
                →
              </motion.span>
            </motion.a>

            {/* Secondary — scroll to menu */}
            <motion.button
              onClick={scrollToMenu}
              className="inline-flex items-center gap-3 px-7 py-4 rounded-full font-medium text-base text-white tracking-wide"
              style={{
                border: '1px solid rgba(255,255,255,0.22)',
                backdropFilter: 'blur(24px) saturate(200%)',
                WebkitBackdropFilter: 'blur(24px) saturate(200%)',
                background: 'rgba(255,255,255,0.07)',
                boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.14), inset 0 -1px 0 rgba(0,0,0,0.08), 0 4px 20px rgba(0,0,0,0.18)',
              }}
              whileHover={{
                scale: 1.03,
                y: -2,
                boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.22), inset 0 -1px 0 rgba(0,0,0,0.08), 0 8px 28px rgba(0,0,0,0.28)',
              }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 380, damping: 22 }}
            >
              Explore Menu
            </motion.button>
          </motion.div>
        </motion.div>

        {/* ── Social Proof Cards — desktop only ────────────── */}
        <div className="hidden lg:flex absolute right-0 bottom-[22%] flex-col gap-4">
          {/* Card 1 — Rating */}
          <motion.div
            initial={{ opacity: 0, x: 48 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.25, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -5, scale: 1.03 }}
            className="flex items-center gap-3.5 px-5 py-4 rounded-2xl cursor-default select-none"
            style={{
              background: 'rgba(255,255,255,0.09)',
              border: '1px solid rgba(200,150,62,0.22)',
              backdropFilter: 'blur(16px) saturate(150%)',
              WebkitBackdropFilter: 'blur(16px) saturate(150%)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.25)',
            }}
          >
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ background: 'rgba(200,150,62,0.2)' }}
            >
              <Star size={17} strokeWidth={0} fill="hsl(35,54%,51%)" />
            </div>
            <div>
              <p className="text-white text-lg font-bold leading-none">4.9</p>
              <p className="text-white/55 text-xs mt-0.5 tracking-wide">Rating</p>
            </div>
          </motion.div>

          {/* Card 2 — Cups Served */}
          <motion.div
            initial={{ opacity: 0, x: 48 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.45, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -5, scale: 1.03 }}
            className="flex items-center gap-3.5 px-5 py-4 rounded-2xl cursor-default select-none"
            style={{
              background: 'rgba(255,255,255,0.09)',
              border: '1px solid rgba(200,150,62,0.22)',
              backdropFilter: 'blur(16px) saturate(150%)',
              WebkitBackdropFilter: 'blur(16px) saturate(150%)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.25)',
            }}
          >
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ background: 'rgba(200,150,62,0.2)' }}
            >
              <Coffee size={17} className="text-amber" />
            </div>
            <div>
              <p className="text-white text-lg font-bold leading-none">10,000+</p>
              <p className="text-white/55 text-xs mt-0.5 tracking-wide">Cups Served</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Scroll indicator ─────────────────────────────────── */}
      <motion.button
        onClick={scrollToMenu}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2.5 text-white/50 hover:text-white/80 transition-colors duration-300"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.9, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        aria-label="Scroll down to explore"
      >
        <span className="text-[10px] font-medium tracking-[0.2em] uppercase">
          Scroll to Explore
        </span>
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={17} strokeWidth={1.5} />
        </motion.div>
      </motion.button>
    </section>
  );
}

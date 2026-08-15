import { motion, type Variants } from 'framer-motion';
import { MessageCircle, Phone, Clock } from 'lucide-react';
import bgImg from '@assets/backgrounds/nathan-dumlao-J2gEgTPM_OA-unsplash.jpg';
import { whatsappLink, phoneLink, CONTACT } from '@/constants/contact';

// ── Constants ─────────────────────────────────────────────────────────────────

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

const WA_MSG = "Hi Lumora Café! I'd like to reserve a table. Could you please help me?";

// ── Variants ──────────────────────────────────────────────────────────────────

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14, delayChildren: 0.1 } },
};

const itemVariants: Variants = {
  hidden:  { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE } },
};

// ── Section ───────────────────────────────────────────────────────────────────

export function ReservationSection() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden"
      aria-label="Reserve a Table"
      style={{ minHeight: '88vh', display: 'flex', alignItems: 'center' }}
    >
      {/* Background image */}
      <div className="absolute inset-0" aria-hidden="true">
        <img
          src={bgImg}
          alt=""
          role="presentation"
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover object-center"
          style={{ transform: 'scale(1.04)' }}
        />
        {/* Layered dark overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, rgba(18,9,5,0.55) 0%, rgba(18,9,5,0.72) 50%, rgba(18,9,5,0.88) 100%)',
          }}
        />
        {/* Subtle radial amber glow */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(191,141,61,0.12) 0%, transparent 70%)',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full container-cafe py-28 lg:py-40 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-3xl mx-auto"
        >
          {/* Badge */}
          <motion.div variants={itemVariants}>
            <span
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
                bg-amber/15 border border-amber/30 text-amber text-xs font-semibold
                tracking-[0.12em] uppercase mb-6"
            >
              <Clock className="w-3.5 h-3.5" aria-hidden="true" />
              Book Your Spot
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            variants={itemVariants}
            className="font-display text-5xl sm:text-6xl lg:text-7xl text-cream leading-[1.08] mb-6"
          >
            Reserve Your Table{' '}
            <em className="text-gradient-amber not-italic">Today.</em>
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-cream/70 text-lg sm:text-xl leading-relaxed mb-10 max-w-xl mx-auto"
          >
            Whether it&rsquo;s your morning coffee, weekend brunch or evening catch-up,
            we&rsquo;ll have a table waiting for you.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
          >
            {/* Primary — WhatsApp */}
            <a
              href={whatsappLink(WA_MSG)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Reserve on WhatsApp"
              className="
                group inline-flex items-center gap-3
                px-8 py-4 rounded-full
                bg-amber text-espresso font-semibold text-base
                shadow-[0_4px_24px_rgba(191,141,61,0.40)]
                hover:bg-amber-light hover:shadow-[0_8px_36px_rgba(191,141,61,0.55)]
                focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-amber/60
                transition-all duration-300
              "
            >
              <MessageCircle
                className="w-5 h-5 transition-transform duration-300 group-hover:scale-110"
                aria-hidden="true"
              />
              Reserve on WhatsApp
            </a>

            {/* Secondary — Call */}
            <a
              href={phoneLink()}
              aria-label={`Call us at ${CONTACT.phoneDisplay}`}
              className="
                group inline-flex items-center gap-3
                px-8 py-4 rounded-full
                bg-transparent text-cream font-semibold text-base
                border-2 border-cream/30
                hover:border-cream/70 hover:bg-white/8
                focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/30
                transition-all duration-300
              "
            >
              <Phone
                className="w-5 h-5 transition-transform duration-300 group-hover:scale-110"
                aria-hidden="true"
              />
              Call Now
            </a>
          </motion.div>

          {/* Opening hours */}
          <motion.div
            variants={itemVariants}
            className="
              inline-flex flex-col sm:flex-row items-center gap-6 sm:gap-10
              px-8 py-5 rounded-2xl
              bg-white/6 backdrop-blur-md
              border border-white/10
            "
          >
            <div className="flex items-center gap-2 text-cream/70">
              <Clock className="w-4 h-4 text-amber flex-shrink-0" aria-hidden="true" />
              <span className="text-sm font-medium tracking-wide">Opening Hours</span>
            </div>
            <div className="h-px sm:h-6 sm:w-px w-full bg-white/15" aria-hidden="true" />
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-8 text-sm text-center">
              <div>
                <span className="text-amber font-semibold">Mon – Fri</span>
                <span className="text-cream/60 ml-2">8:00 AM – 10:00 PM</span>
              </div>
              <div>
                <span className="text-amber font-semibold">Sat – Sun</span>
                <span className="text-cream/60 ml-2">8:00 AM – 11:00 PM</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

import { useRef } from 'react';
import {
  motion,
  useMotionValue,
  useTransform,
  useSpring,
  type Variants,
} from 'framer-motion';

// ── Images: best unused shots across all folders ──────────────────────────────
import img1 from '@assets/gallery/ruben-ramirez-xhKG01FN2uk-unsplash.jpg';
import img2 from '@assets/gallery/duong-ngan-61yti0twbv8-unsplash.jpg';
import img3 from '@assets/coffee/scott-soltys-curry--5Y5x_oZcnc-unsplash.jpg';
import img4 from '@assets/gallery/ruan-martinelli-hRGE_rUJyE8-unsplash.jpg';
import img5 from '@assets/drinks/demi-deherrera-L-sm1B4L1Ns-unsplash.jpg';
import img6 from '@assets/interior/leon-schotman-Ih-ERHiXgxY-unsplash.jpg';
import img7 from '@assets/desserts/anton-luk-qWtyhn3eZVo-unsplash.jpg';
import img8 from '@assets/food/melissa-walker-horn-2NwLvBLRpww-unsplash.jpg';
import img9 from '@assets/gallery/skyler-smith-_TyTNt9RzZk-unsplash.jpg';

// ── Constants ─────────────────────────────────────────────────────────────────

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

// ── Types ─────────────────────────────────────────────────────────────────────

interface GalleryItem {
  src:    string;
  label:  string;
  aspect: string;
  alt:    string;
}

const ITEMS: GalleryItem[] = [
  { src: img1, label: 'Artisan Coffee',     aspect: '3/4', alt: 'Premium coffee artfully presented' },
  { src: img2, label: 'Morning Moments',    aspect: '4/3', alt: 'Warm café morning atmosphere' },
  { src: img3, label: 'Freshly Brewed',     aspect: '3/4', alt: 'Espresso brewed fresh in-house' },
  { src: img4, label: 'Golden Evenings',    aspect: '4/3', alt: 'Lumora Café warm evening light' },
  { src: img5, label: 'Coffee Rituals',     aspect: '1/1', alt: 'Signature drink crafted with care' },
  { src: img6, label: 'Cozy Corners',       aspect: '4/3', alt: 'Comfortable seating at Lumora' },
  { src: img7, label: 'Signature Desserts', aspect: '3/4', alt: 'Handcrafted dessert plating' },
  { src: img8, label: 'Weekend Brunch',     aspect: '4/3', alt: 'Artisan brunch spread' },
  { src: img9, label: 'The Good Hours',     aspect: '1/1', alt: 'Still moments at Lumora Café' },
];

// ── Shared variants ───────────────────────────────────────────────────────────
// Using named variants so Framer Motion propagates hover state to children.

const cardVariants = {
  hidden: {
    opacity: 0,
    y:       48,
    scale:   0.96,
    boxShadow: '0 0px 0px rgba(22,12,7,0)',
  },
  rest: {
    opacity: 1,
    y:       0,
    scale:   1,
    boxShadow: '0 2px 16px rgba(22,12,7,0.07), 0 1px 4px rgba(22,12,7,0.04)',
  },
  hover: {
    opacity: 1,
    y:       0,
    scale:   1,
    boxShadow: '0 18px 44px rgba(22,12,7,0.13), 0 4px 12px rgba(22,12,7,0.07)',
  },
};

const overlayVariants: Variants = {
  hidden: { opacity: 0 },
  rest:   { opacity: 0, transition: { duration: 0.22 } },
  hover:  { opacity: 1, transition: { duration: 0.30 } },
};

const labelVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  rest:   { opacity: 0, y: 10, transition: { duration: 0.18 } },
  hover:  { opacity: 1, y: 0,  transition: { duration: 0.32, delay: 0.06 } },
};

// ── GalleryCard ───────────────────────────────────────────────────────────────

function GalleryCard({ item, index }: { item: GalleryItem; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);

  // Subtle 3-degree tilt following the mouse
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const rotateY = useTransform(mouseX, [0, 1], [-3.5,  3.5]);
  const rotateX = useTransform(mouseY, [0, 1], [ 3.5, -3.5]);

  const rotateXSpring = useSpring(rotateX, { stiffness: 110, damping: 26 });
  const rotateYSpring = useSpring(rotateY, { stiffness: 110, damping: 26 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top)  / rect.height);
  };

  const resetTilt = () => {
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  return (
    /* Perspective wrapper — necessary for the 3D tilt to have depth */
    <div
      className="break-inside-avoid mb-4 lg:mb-6"
      style={{ perspective: '900px' }}
    >
      <motion.div
        ref={cardRef}
        className="relative overflow-hidden rounded-2xl group"
        style={{
          aspectRatio:     item.aspect,
          rotateX:         rotateXSpring,
          rotateY:         rotateYSpring,
          transformOrigin: 'center center',
        }}
        variants={cardVariants}
        initial="hidden"
        whileInView="rest"
        whileHover="hover"
        viewport={{ once: true, margin: '-48px' }}
        transition={{ duration: 0.68, ease: EASE, delay: index * 0.07 }}
        onMouseMove={handleMouseMove}
        onMouseLeave={resetTilt}
      >
        {/* Photo */}
        <img
          src={item.src}
          alt={item.alt}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.065]"
          style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
          loading="lazy"
          decoding="async"
        />

        {/* Dark gradient overlay — propagated via variant */}
        <motion.div
          className="absolute inset-0 flex items-end px-5 py-5 lg:px-6 lg:py-6 pointer-events-none"
          variants={overlayVariants}
          style={{
            background:
              'linear-gradient(0deg, rgba(12,5,2,0.80) 0%, rgba(12,5,2,0.20) 48%, transparent 100%)',
          }}
        >
          {/* Label */}
          <motion.span
            className="font-display text-white text-lg lg:text-xl tracking-wide italic"
            style={{ textShadow: '0 2px 10px rgba(0,0,0,0.45)' }}
            variants={labelVariants}
          >
            {item.label}
          </motion.span>
        </motion.div>
      </motion.div>
    </div>
  );
}

// ── GallerySection ────────────────────────────────────────────────────────────

export function GallerySection() {
  return (
    <section id="gallery" className="bg-cream py-24 lg:py-36 relative overflow-hidden">

      {/* Decorative radial amber glow — very subtle, behind the grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 78% 52% at 50% 46%, rgba(200,150,62,0.055) 0%, transparent 72%)',
        }}
      />

      <div className="container-cafe relative">

        {/* ── Header ──────────────────────────────────────── */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-14 lg:mb-16"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.72, ease: EASE }}
        >
          {/* Badge */}
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-[0.14em] uppercase mb-5"
            style={{
              background: 'rgba(175,130,50,0.10)',
              border:     '1px solid rgba(175,130,50,0.28)',
              color:      'hsl(35, 58%, 32%)',
            }}
          >
            📸 Gallery
          </span>

          <h2
            className="font-display text-espresso mb-5"
            style={{ lineHeight: 1.08 }}
          >
            Experience the Atmosphere.
          </h2>

          <p className="text-muted-foreground text-lg leading-relaxed">
            From handcrafted coffee to cozy interiors, every corner of Lumora
            is designed to make every visit memorable.
          </p>
        </motion.div>

        {/* ── Asymmetric masonry — CSS columns ────────────── */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 lg:gap-6">
          {ITEMS.map((item, i) => (
            <GalleryCard key={item.src} item={item} index={i} />
          ))}
        </div>

        {/* ── Bottom quote + CTA ───────────────────────────── */}
        <motion.div
          className="flex flex-col items-center text-center mt-16 lg:mt-20 gap-6"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.2 }}
        >
          <p
            className="font-display text-espresso/65 italic"
            style={{
              fontSize:      'clamp(1.15rem, 2vw, 1.4rem)',
              letterSpacing: '-0.01em',
            }}
          >
            "Every visit tells a different story."
          </p>

          <motion.a
            href="#contact"
            aria-label="Visit us today — reserve a table"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full text-espresso text-sm font-semibold tracking-wide
              transition-colors duration-300 hover:bg-espresso hover:text-cream
              focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-espresso/40"
            style={{ border: '1.5px solid hsl(22, 35%, 26%)' }}
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 380, damping: 22 }}
          >
            Visit Us Today
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
}

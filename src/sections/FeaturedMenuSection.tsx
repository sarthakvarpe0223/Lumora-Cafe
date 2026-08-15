import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

// ── Best image from each category (selected by file size as quality proxy) ──
import coffeeImg  from '@assets/coffee/veronika-martinelli-aQOZqYw-mAA-unsplash.jpg';
import foodImg    from '@assets/food/james-sestric-ouZEMIbFF8Y-unsplash.jpg';
import dessertImg from '@assets/desserts/haley-truong-e5nPXkGWRQQ-unsplash.jpg';
import drinkImg   from '@assets/drinks/nathan-dumlao-vZOZJH_xkUk-unsplash.jpg';

// ── Animation helpers ─────────────────────────────────────────────────────────

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

// ── Types ─────────────────────────────────────────────────────────────────────

interface MenuItemData {
  category: string;
  name:     string;
  description: string;
  price:    string;
  image:    string;
  alt:      string;
}

// ── Data ──────────────────────────────────────────────────────────────────────

const MENU_ITEMS: MenuItemData[] = [
  {
    category:    'Coffee',
    name:        'Signature Espresso',
    description: 'A velvety double-shot with silky crema, sourced from single-origin beans slow-roasted in-house every morning.',
    price:       '₹249',
    image:       coffeeImg,
    alt:         'Signature espresso with a perfect crema layer',
  },
  {
    category:    'Breakfast',
    name:        'Avocado Toast',
    description: 'Artisan sourdough topped with smashed avocado, soft-poached egg, chilli flakes, and cold-pressed olive oil.',
    price:       '₹299',
    image:       foodImg,
    alt:         'Artisan avocado toast with poached egg',
  },
  {
    category:    'Desserts',
    name:        'French Crème Brûlée',
    description: 'Silky vanilla bean custard beneath a perfectly torched caramel shell, finished with fresh seasonal berries.',
    price:       '₹229',
    image:       dessertImg,
    alt:         'Classic French crème brûlée with caramel topping',
  },
  {
    category:    'Signature Drinks',
    name:        'Rose Cold Brew',
    description: 'Eighteen-hour cold-steeped brew kissed with rose water and cardamom, served over hand-cut artisan ice.',
    price:       '₹199',
    image:       drinkImg,
    alt:         'Rose cold brew served over artisan ice',
  },
];

// ── MenuCard ──────────────────────────────────────────────────────────────────

function MenuCard({ item, index }: { item: MenuItemData; index: number }) {
  return (
    <motion.article
      className="group flex flex-col rounded-2xl lg:rounded-3xl bg-white overflow-hidden"
      style={{
        boxShadow:
          '0 1px 3px rgba(22,12,7,0.04), 0 4px 20px rgba(22,12,7,0.06)',
      }}
      initial={{ opacity: 0, y: 56 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-56px' }}
      transition={{ duration: 0.72, ease: EASE, delay: index * 0.11 }}
      whileHover={{
        y: -8,
        boxShadow:
          '0 16px 40px rgba(22,12,7,0.10), 0 4px 12px rgba(22,12,7,0.07)',
      }}
    >
      {/* Image ─────────────────────────────────────────────── */}
      <div className="relative overflow-hidden" style={{ aspectRatio: '4/3' }}>
        <img
          src={item.image}
          alt={item.alt}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.07]"
          style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
          loading="lazy"
          decoding="async"
        />

        {/* Subtle top vignette so badge stays legible */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(180deg, rgba(10,5,2,0.30) 0%, transparent 42%)',
          }}
        />

        {/* Category badge */}
        <div className="absolute top-3.5 left-3.5">
          <span
            className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-semibold tracking-widest uppercase"
            style={{
              background:    'rgba(175,130,50,0.18)',
              border:        '1px solid rgba(175,130,50,0.38)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              color:         'hsl(35, 60%, 30%)',
            }}
          >
            {item.category}
          </span>
        </div>
      </div>

      {/* Content ────────────────────────────────────────────── */}
      <div className="flex flex-col flex-1 px-6 pt-5 pb-6">
        {/* Name */}
        <h3
          className="font-display text-espresso mb-2.5 leading-snug"
          style={{ fontSize: 'clamp(1.18rem, 1.6vw, 1.42rem)' }}
        >
          {item.name}
        </h3>

        {/* Description */}
        <p
          className="text-muted-foreground text-sm flex-1"
          style={{ lineHeight: '1.72' }}
        >
          {item.description}
        </p>

        {/* Price + Arrow ──────────────────────────────────── */}
        <div
          className="flex items-center justify-between mt-5 pt-4"
          style={{ borderTop: '1px solid hsl(42 40% 88%)' }}
        >
          <span className="font-bold text-xl text-amber tracking-tight">
            {item.price}
          </span>

          {/* Arrow icon — glass pill */}
          <span
            className="inline-flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300"
            style={{
              background: 'hsl(42 67% 93%)',
              color:      'hsl(22 47% 18%)',
            }}
          >
            <ArrowRight
              size={14}
              strokeWidth={2.5}
              className="transition-transform duration-300 group-hover:translate-x-0.5"
            />
          </span>
        </div>
      </div>
    </motion.article>
  );
}

// ── FeaturedMenuSection ───────────────────────────────────────────────────────

export function FeaturedMenuSection() {
  return (
    <section id="menu" className="bg-cream py-24 lg:py-36 relative overflow-hidden" aria-label="Featured Menu">

      {/* Subtle warm ambient glow */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 50% 10%, rgba(200,150,62,0.07) 0%, transparent 65%),' +
            'radial-gradient(ellipse 50% 40% at 15% 90%, rgba(200,150,62,0.04) 0%, transparent 60%)',
        }}
      />

      <div className="container-cafe relative">

        {/* ── Section header ──────────────────────────────── */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 36 }}
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
            ☕ Our Specialties
          </span>

          {/* Heading */}
          <h2
            className="font-display text-espresso mb-5"
            style={{ lineHeight: 1.08 }}
          >
            Crafted Fresh Every Day
          </h2>

          {/* Sub-copy */}
          <p className="text-muted-foreground text-lg leading-relaxed">
            Every drink, dessert, and breakfast plate is prepared with fresh
            ingredients and attention to every detail.
          </p>
        </motion.div>

        {/* ── Card grid ───────────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
          {MENU_ITEMS.map((item, i) => (
            <MenuCard key={item.name} item={item} index={i} />
          ))}
        </div>

        {/* ── Bottom CTA ──────────────────────────────────── */}
        <motion.div
          className="flex justify-center mt-16 lg:mt-20"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.28 }}
        >
          <motion.a
            href="#contact"
            aria-label="View full menu — contact us to learn more"
            className="inline-flex items-center gap-3 px-9 py-4 rounded-full text-cream font-semibold text-base tracking-wide bg-espresso
              focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-espresso/50"
            style={{ boxShadow: '0 4px 24px rgba(22,12,7,0.16)' }}
            whileHover={{
              scale: 1.03,
              y: -2,
              boxShadow: '0 8px 32px rgba(22,12,7,0.24)',
            }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 380, damping: 22 }}
          >
            View Full Menu
            <ArrowRight size={16} strokeWidth={2.5} aria-hidden="true" />
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
}

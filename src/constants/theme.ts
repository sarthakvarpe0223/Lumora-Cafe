/**
 * Lumora Café — Theme Constants
 *
 * Design tokens as JavaScript values for use in Framer Motion,
 * dynamic styles, and any JS-driven logic. The CSS variables in
 * index.css are the single source of truth for the browser;
 * these mirror them for code that can't read CSS vars.
 */

// ── Brand Palette (HSL) ─────────────────────────────────────
export const COLORS = {
  espresso:     'hsl(22, 47%, 12%)',
  espressoLight:'hsl(22, 35%, 22%)',
  espressoDark: 'hsl(22, 55%, 8%)',
  amber:        'hsl(35, 54%, 51%)',
  amberLight:   'hsl(38, 72%, 68%)',
  amberDark:    'hsl(30, 58%, 38%)',
  cream:        'hsl(42, 67%, 97%)',
  creamDark:    'hsl(38, 35%, 91%)',
  sage:         'hsl(119, 14%, 55%)',
  sageLight:    'hsl(120, 18%, 72%)',
  warmWhite:    'hsl(42, 100%, 99%)',
} as const;

// ── Typography ───────────────────────────────────────────────
export const FONTS = {
  display: "'Cormorant Garamond', 'Playfair Display', Georgia, serif",
  serif:   "'Playfair Display', Georgia, 'Times New Roman', serif",
  sans:    "'Inter', system-ui, -apple-system, sans-serif",
  mono:    "'JetBrains Mono', 'Fira Code', Menlo, monospace",
} as const;

// ── Breakpoints (matches Tailwind defaults) ─────────────────
export const BREAKPOINTS = {
  sm:  640,
  md:  768,
  lg:  1024,
  xl:  1280,
  '2xl': 1536,
} as const;

// ── Spacing scale ─────────────────────────────────────────────
export const SPACING = {
  px:   '1px',
  0:    '0',
  0.5:  '0.125rem',
  1:    '0.25rem',
  2:    '0.5rem',
  3:    '0.75rem',
  4:    '1rem',
  5:    '1.25rem',
  6:    '1.5rem',
  8:    '2rem',
  10:   '2.5rem',
  12:   '3rem',
  16:   '4rem',
  20:   '5rem',
  24:   '6rem',
  32:   '8rem',
} as const;

// ── Border Radius ─────────────────────────────────────────────
export const RADIUS = {
  none: '0',
  sm:   '0.25rem',
  md:   '0.375rem',
  lg:   '0.5rem',
  xl:   '0.75rem',
  '2xl':'1rem',
  '3xl':'1.5rem',
  full: '9999px',
} as const;

// ── Framer Motion shared variants ────────────────────────────
export const MOTION = {
  /** Easing curves */
  easing: {
    smooth:  [0.16, 1, 0.3, 1]    as const,
    spring:  [0.34, 1.56, 0.64, 1] as const,
    in:      [0.4, 0, 1, 1]        as const,
    out:     [0, 0, 0.2, 1]        as const,
    inOut:   [0.4, 0, 0.2, 1]      as const,
  },

  /** Duration in seconds */
  duration: {
    fast:   0.15,
    base:   0.25,
    slow:   0.4,
    slower: 0.6,
    hero:   0.9,
  },

  /** Reusable fade-up variant (use with whileInView) */
  fadeUp: {
    hidden:  { opacity: 0, y: 32 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  },

  /** Reusable fade-in variant */
  fadeIn: {
    hidden:  { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
  },

  /** Stagger container — wrap items in this */
  stagger: {
    hidden:  {},
    visible: {
      transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
  },

  /** Scale in from slightly smaller */
  scaleIn: {
    hidden:  { opacity: 0, scale: 0.94 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
  },

  /** Slide in from the left */
  slideLeft: {
    hidden:  { opacity: 0, x: -48 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  },

  /** Slide in from the right */
  slideRight: {
    hidden:  { opacity: 0, x: 48 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  },
} as const;

// ── Shadows (amber-tinted) ────────────────────────────────────
export const SHADOWS = {
  sm:       '0 1px 3px 0 hsl(22 47% 12% / 0.07), 0 1px 2px -1px hsl(22 47% 12% / 0.04)',
  base:     '0 4px 6px -1px hsl(22 47% 12% / 0.07), 0 2px 4px -2px hsl(22 47% 12% / 0.05)',
  md:       '0 8px 14px -3px hsl(22 47% 12% / 0.09), 0 3px 6px -3px hsl(22 47% 12% / 0.06)',
  lg:       '0 16px 28px -5px hsl(22 47% 12% / 0.12), 0 6px 12px -6px hsl(22 47% 12% / 0.07)',
  xl:       '0 24px 48px -8px hsl(22 47% 12% / 0.15), 0 10px 20px -8px hsl(22 47% 12% / 0.08)',
  amberSm:  '0 4px 14px 0 hsl(35 54% 51% / 0.28)',
  amber:    '0 8px 24px 0 hsl(35 54% 51% / 0.32)',
  amberLg:  '0 16px 48px 0 hsl(35 54% 51% / 0.36)',
} as const;

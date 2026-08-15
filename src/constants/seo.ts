/**
 * Lumora Café — SEO & Meta Configuration
 *
 * Central place for all meta tags, Open Graph data, and
 * structured data. Import into page components as needed.
 */

export const SEO = {
  siteName:    'Lumora Café',
  tagline:     'Where Every Cup Tells a Story',
  description: 'A premium artisan café experience — handcrafted coffee, thoughtfully sourced ingredients, and a space designed for slow mornings and good conversations.',
  keywords:    'café, artisan coffee, premium café, specialty coffee, brunch, pastries, Mumbai',
  locale:      'en_IN',
  type:        'website',

  /** Defaults for Open Graph — override per page */
  og: {
    title:       'Lumora Café — Where Every Cup Tells a Story',
    description: 'A premium artisan café experience. Handcrafted coffee, thoughtfully sourced ingredients.',
    type:        'website',
    locale:      'en_IN',
    /** Set this once an OG image is available */
    image:       '',
    imageAlt:    'Lumora Café — premium artisan coffee experience',
  },

  /** Twitter / X card */
  twitter: {
    card:        'summary_large_image',
    title:       'Lumora Café',
    description: 'A premium artisan café experience. Handcrafted coffee, thoughtfully sourced ingredients.',
    /** Set once a Twitter card image is available */
    image:       '',
  },
} as const;

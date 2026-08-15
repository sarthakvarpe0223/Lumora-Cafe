/**
 * Lumora Café — Shared TypeScript Types
 *
 * Domain types used across the app. Add entity types here as
 * sections and features are built out.
 */

// ── Utility types ─────────────────────────────────────────────

/** Makes all properties deeply optional */
export type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K];
};

/** Extract values of an object type */
export type ValueOf<T> = T[keyof T];

/** Non-nullable version of a type */
export type NonNullable<T> = T extends null | undefined ? never : T;

/** Utility to make specific keys optional */
export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

/** Utility to make specific keys required */
export type Required<T, K extends keyof T> = Omit<T, K> & {
  [P in K]-?: T[P];
};

// ── Navigation ────────────────────────────────────────────────

export interface NavItem {
  label: string;
  href: string;
  /** Optional sub-items for dropdown menus */
  children?: NavItem[];
}

// ── Menu / Food ───────────────────────────────────────────────

export type MenuCategory =
  | 'coffee'
  | 'drinks'
  | 'food'
  | 'desserts'
  | 'breakfast'
  | 'brunch'
  | 'specials';

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: MenuCategory;
  /** Local image path under src/assets/ */
  image?: string;
  tags?: string[];
  isVeg?: boolean;
  isPopular?: boolean;
  isNew?: boolean;
  isAvailable?: boolean;
}

export interface MenuSection {
  id: string;
  title: string;
  category: MenuCategory;
  items: MenuItem[];
}

// ── Gallery ───────────────────────────────────────────────────

export type GalleryFolder =
  | 'hero'
  | 'interior'
  | 'exterior'
  | 'food'
  | 'coffee'
  | 'desserts'
  | 'drinks'
  | 'customers'
  | 'chef'
  | 'gallery'
  | 'menu'
  | 'backgrounds'
  | 'logo';

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  folder: GalleryFolder;
  width?: number;
  height?: number;
  caption?: string;
}

// ── Testimonials ──────────────────────────────────────────────

export interface Testimonial {
  id: string;
  name: string;
  role?: string;
  avatar?: string;
  rating: 1 | 2 | 3 | 4 | 5;
  text: string;
  date?: string;
}

// ── Events ────────────────────────────────────────────────────

export interface CafeEvent {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  image?: string;
  isRecurring?: boolean;
}

// ── Component props ───────────────────────────────────────────

export interface WithClassName {
  className?: string;
}

export interface WithChildren {
  children: React.ReactNode;
}

export interface WithChildrenAndClassName extends WithChildren, WithClassName {}

// ── SEO ───────────────────────────────────────────────────────

export interface PageSEO {
  title?: string;
  description?: string;
  ogImage?: string;
  noIndex?: boolean;
}

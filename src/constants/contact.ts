/**
 * Lumora Café — Contact Configuration
 *
 * All contact details live here. Every Call button, WhatsApp button,
 * and contact reference in the app must read from this file — never
 * hardcode phone numbers anywhere else.
 */

export const CONTACT = {
  /** E.164 format — used in tel: links */
  phone: '+919324830687',

  /** Display format — shown in UI */
  phoneDisplay: '+91 93248 30687',

  /** WhatsApp number (country code + number, no +) */
  whatsapp: '919324830687',

  /** Address */
  address: '',
  addressLine1: '',
  addressLine2: '',
  city: '',
  state: '',
  pincode: '',

  /** Hours */
  hoursWeekday: '',
  hoursWeekend: '',

  /** Email */
  email: '',

  /** Social */
  instagram: '',
  facebook: '',
  twitter: '',
  youtube: '',
} as const;

/** Build a WhatsApp deep link with an optional pre-filled message */
export function whatsappLink(message?: string): string {
  const base = `https://wa.me/${CONTACT.whatsapp}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

/** Build a tel: link */
export function phoneLink(): string {
  return `tel:${CONTACT.phone}`;
}

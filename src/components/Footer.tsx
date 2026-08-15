import { motion } from 'framer-motion';
import { Phone, MessageCircle, Mail, MapPin, Clock } from 'lucide-react';
import { phoneLink, whatsappLink, CONTACT } from '@/constants/contact';

// ── Constants ─────────────────────────────────────────────────────────────────

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

const QUICK_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Menu', href: '#menu' },
  { label: 'About', href: '#about' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
];

// ── Sub-components ────────────────────────────────────────────────────────────

function FooterHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="font-display text-lg text-cream mb-5 relative inline-block">
      {children}
      <span className="absolute -bottom-1.5 left-0 w-8 h-0.5 bg-amber rounded-full" />
    </h3>
  );
}

function FooterLink({
  href,
  external,
  children,
  ariaLabel,
}: {
  href: string;
  external?: boolean;
  children: React.ReactNode;
  ariaLabel?: string;
}) {
  return (
    <a
      href={href}
      aria-label={ariaLabel}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className="
        text-cream/50 hover:text-amber text-sm leading-relaxed
        transition-colors duration-250
        focus-visible:outline-none focus-visible:text-amber
      "
    >
      {children}
    </a>
  );
}

// ── Section ───────────────────────────────────────────────────────────────────

export function Footer() {
  const currentYear = 2026;

  return (
    <footer
      className="bg-espresso-dark relative overflow-hidden"
      role="contentinfo"
      aria-label="Lumora Café footer"
      style={{ background: 'hsl(22,50%,8%)' }}
    >
      {/* Decorative top border */}
      <div
        className="h-px w-full"
        style={{
          background:
            'linear-gradient(to right, transparent, rgba(191,141,61,0.5), transparent)',
        }}
        aria-hidden="true"
      />

      {/* Subtle glow */}
      <div
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px]"
        style={{
          background:
            'radial-gradient(ellipse at 50% 0%, rgba(191,141,61,0.07) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="relative container-cafe pt-16 pb-8">
        {/* Four-column grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-14"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease: EASE }}
        >
          {/* Col 1 — Brand */}
          <div className="lg:col-span-1">
            <a
              href="#home"
              className="inline-block mb-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber/50 rounded"
            >
              <span className="font-display text-2xl text-cream tracking-tight">
                Lumora <em className="text-gradient-amber not-italic">Café</em>
              </span>
            </a>

            <p className="text-cream/50 text-sm leading-relaxed mb-6">
              A warm corner of Mumbai where every cup is brewed with intention.
              We believe great coffee is a ritual — not a transaction.
              Come as you are. Stay as long as you like.
            </p>

            {/* Social / Contact icons */}
            <div className="flex gap-3">
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                className="w-9 h-9 rounded-full bg-white/6 border border-white/10 flex items-center justify-center
                  text-cream/50 hover:text-amber hover:border-amber/30 transition-all duration-250
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber/50"
              >
                <MessageCircle className="w-4 h-4" />
              </a>

              <a
                href={phoneLink()}
                aria-label={`Call ${CONTACT.phoneDisplay}`}
                className="w-9 h-9 rounded-full bg-white/6 border border-white/10 flex items-center justify-center
                  text-cream/50 hover:text-amber hover:border-amber/30 transition-all duration-250
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber/50"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2 — Quick Links */}
          <div>
            <FooterHeading>Quick Links</FooterHeading>

            <nav aria-label="Footer quick links">
              <ul className="space-y-2.5">
                {QUICK_LINKS.map(({ label, href }) => (
                  <li key={label}>
                    <FooterLink href={href}>{label}</FooterLink>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Col 3 — Contact */}
          <div>
            <FooterHeading>Contact Us</FooterHeading>

            <address className="not-italic space-y-3.5">
              <a
                href={phoneLink()}
                aria-label={`Call us at ${CONTACT.phoneDisplay}`}
                className="flex items-start gap-3 text-cream/50 hover:text-amber text-sm transition-colors duration-250
                  focus-visible:outline-none focus-visible:text-amber"
              >
                <Phone
                  className="w-4 h-4 text-amber flex-shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <span>{CONTACT.phoneDisplay}</span>
              </a>

              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                className="flex items-start gap-3 text-cream/50 hover:text-amber text-sm transition-colors duration-250
                  focus-visible:outline-none focus-visible:text-amber"
              >
                <MessageCircle
                  className="w-4 h-4 text-amber flex-shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <span>WhatsApp Us</span>
              </a>

              <a
                href="mailto:hello@lumoracafe.com"
                aria-label="Email us at hello@lumoracafe.com"
                className="flex items-start gap-3 text-cream/50 hover:text-amber text-sm transition-colors duration-250
                  focus-visible:outline-none focus-visible:text-amber"
              >
                <Mail
                  className="w-4 h-4 text-amber flex-shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <span>hello@lumoracafe.com</span>
              </a>

              <div className="flex items-start gap-3 text-cream/50 text-sm">
                <MapPin
                  className="w-4 h-4 text-amber flex-shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <span>Mumbai, Maharashtra</span>
              </div>
            </address>
          </div>

          {/* Col 4 — Opening Hours */}
          <div>
            <FooterHeading>Opening Hours</FooterHeading>

            <div className="space-y-4">
              <div>
                <p className="text-amber text-sm font-semibold mb-0.5">
                  Monday – Friday
                </p>

                <div className="flex items-center gap-2 text-cream/50 text-sm">
                  <Clock
                    className="w-3.5 h-3.5 flex-shrink-0"
                    aria-hidden="true"
                  />
                  <span>8:00 AM – 10:00 PM</span>
                </div>
              </div>

              <div>
                <p className="text-amber text-sm font-semibold mb-0.5">
                  Saturday – Sunday
                </p>

                <div className="flex items-center gap-2 text-cream/50 text-sm">
                  <Clock
                    className="w-3.5 h-3.5 flex-shrink-0"
                    aria-hidden="true"
                  />
                  <span>8:00 AM – 11:00 PM</span>
                </div>
              </div>

              <div
                className="mt-5 inline-flex items-center gap-2 px-3 py-1.5 rounded-full
                  bg-green-900/30 border border-green-500/20"
              >
                <span
                  className="w-2 h-2 rounded-full bg-green-400 animate-pulse"
                  aria-hidden="true"
                />

                <span className="text-green-400 text-xs font-medium">
                  Open Now
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Divider */}
        <div
          className="h-px mb-7"
          style={{
            background:
              'linear-gradient(to right, transparent, rgba(255,255,255,0.08), transparent)',
          }}
          aria-hidden="true"
        />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-cream/35 text-sm">
          <p>© {currentYear} Lumora Café. All rights reserved.</p>

          <p className="flex items-center gap-1">
            Designed with{' '}
            <span className="text-amber" aria-label="love">
              ❤️
            </span>{' '}
            for great coffee
          </p>
        </div>
      </div>
    </footer>
  );
}

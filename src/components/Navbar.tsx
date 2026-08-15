import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { phoneLink } from '@/constants/contact';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { useActiveSection } from '@/hooks/useActiveSection';

const SECTION_IDS = ['home', 'menu', 'about', 'gallery', 'reviews', 'contact'];

const NAV_LINKS = [
  { label: 'Home',    href: '#home',    id: 'home' },
  { label: 'Menu',    href: '#menu',    id: 'menu' },
  { label: 'About',   href: '#about',   id: 'about' },
  { label: 'Gallery', href: '#gallery', id: 'gallery' },
  { label: 'Reviews', href: '#reviews', id: 'reviews' },
  { label: 'Contact', href: '#contact', id: 'contact' },
];

export function Navbar() {
  const { isScrolled } = useScrollPosition(80);
  const [isOpen, setIsOpen] = useState(false);
  const activeSection = useActiveSection(SECTION_IDS);

  // Close on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 1024) setIsOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <>
      {/* ── Header bar ─────────────────────────────────────── */}
      <motion.header
        className="fixed top-0 left-0 right-0 z-50"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
      >
        {/* Glass overlay — fades in on scroll */}
        <motion.div
          className="absolute inset-0 border-b border-white/10"
          style={{ backdropFilter: 'blur(18px) saturate(160%)', WebkitBackdropFilter: 'blur(18px) saturate(160%)' }}
          animate={{ opacity: isScrolled ? 1 : 0, backgroundColor: isScrolled ? 'rgba(18,9,5,0.72)' : 'transparent' }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        />

        <div className="relative container-cafe flex items-center justify-between">
          {/* Padding transition */}
          <motion.div
            className="flex items-center justify-between w-full"
            animate={{ paddingTop: isScrolled ? '1rem' : '1.75rem', paddingBottom: isScrolled ? '1rem' : '1.75rem' }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Brand */}
            <a
              href="#home"
              className="font-display text-xl font-medium text-white tracking-wide select-none
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber/50 rounded-sm"
              style={{ textShadow: '0 1px 8px rgba(0,0,0,0.3)' }}
            >
              Lumora Café
            </a>

            {/* Desktop nav links */}
            <nav className="hidden lg:flex items-center gap-7" aria-label="Main navigation">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    aria-current={isActive ? 'true' : undefined}
                    className={cn(
                      'relative text-sm font-medium tracking-wide transition-colors duration-200',
                      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber/50 rounded-sm',
                      isActive ? 'text-amber' : 'text-white/80 hover:text-white'
                    )}
                  >
                    {link.label}
                    {/* Active underline */}
                    <motion.span
                      className="absolute -bottom-0.5 left-0 right-0 h-px bg-amber rounded-full"
                      initial={false}
                      animate={{ scaleX: isActive ? 1 : 0, opacity: isActive ? 1 : 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      style={{ transformOrigin: 'left' }}
                    />
                  </a>
                );
              })}
            </nav>

            {/* Call Now CTA */}
            <div className="hidden lg:block">
              <motion.a
                href={phoneLink()}
                aria-label="Call Lumora Café"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-amber text-espresso text-sm font-semibold tracking-wide shadow-amber-sm
                  focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-amber/50"
                whileHover={{ scale: 1.04, y: -1 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              >
                <Phone size={13} strokeWidth={2.5} aria-hidden="true" />
                Call Now
              </motion.a>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setIsOpen((v) => !v)}
              className="lg:hidden relative z-50 w-10 h-10 flex items-center justify-center text-white rounded-lg
                hover:bg-white/10 transition-colors duration-200
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber/50"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              <AnimatePresence mode="wait" initial={false}>
                {isOpen ? (
                  <motion.span
                    key="x"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.18 }}
                  >
                    <X size={21} strokeWidth={2} aria-hidden="true" />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.18 }}
                  >
                    <Menu size={21} strokeWidth={2} aria-hidden="true" />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </motion.div>
        </div>
      </motion.header>

      {/* ── Mobile overlay menu ─────────────────────────────── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            id="mobile-menu"
            className="fixed inset-0 z-40 lg:hidden flex flex-col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0"
              style={{ background: 'rgba(14,7,4,0.96)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' }}
              aria-hidden="true"
            />

            {/* Links */}
            <motion.nav
              className="relative flex flex-col items-center justify-center h-full gap-6 px-8"
              aria-label="Mobile navigation links"
            >
              {NAV_LINKS.map((link, i) => {
                const isActive = activeSection === link.id;
                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    aria-current={isActive ? 'true' : undefined}
                    className={cn(
                      'font-display text-4xl font-medium transition-colors duration-200',
                      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber/50 rounded-sm',
                      isActive ? 'text-amber' : 'text-white/85 hover:text-white'
                    )}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 16 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1], delay: 0.07 + i * 0.055 }}
                    style={{ letterSpacing: '-0.01em' }}
                  >
                    {link.label}
                  </motion.a>
                );
              })}

              <motion.a
                href={phoneLink()}
                onClick={() => setIsOpen(false)}
                aria-label="Call Lumora Café"
                className="mt-4 inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-amber text-espresso font-semibold text-base tracking-wide
                  focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-amber/50"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 16 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1], delay: 0.45 }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Phone size={16} strokeWidth={2.5} aria-hidden="true" />
                Call Now
              </motion.a>
            </motion.nav>

            {/* Bottom brand hint */}
            <motion.p
              className="relative text-center text-white/25 text-xs tracking-widest uppercase pb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55 }}
              aria-hidden="true"
            >
              Lumora Café
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

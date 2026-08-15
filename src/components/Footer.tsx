import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Clock,
} from "lucide-react";
import { FaInstagram, FaFacebookF } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Menu", href: "#menu" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    {
      label: "Instagram",
      href: "#",
      icon: FaInstagram,
    },
    {
      label: "Facebook",
      href: "#",
      icon: FaFacebookF,
    },
  ];

  return (
    <footer className="bg-[#211812] text-[#f5eee4]">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a
              href="#home"
              className="inline-block text-3xl font-semibold tracking-wide text-[#d9a45b]"
            >
              Lumora
            </a>

            <p className="mt-5 max-w-sm text-sm leading-7 text-[#c9bdb0]">
              A warm, intimate café where exceptional coffee, thoughtful food,
              and beautiful moments come together.
            </p>

            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-[#665344] text-[#d9a45b] transition-all duration-300 hover:border-[#d9a45b] hover:bg-[#d9a45b] hover:text-[#211812]"
                  >
                    <Icon size={17} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#d9a45b]">
              Explore
            </h3>

            <ul className="mt-6 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-[#c9bdb0] transition-colors duration-300 hover:text-[#d9a45b]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#d9a45b]">
              Visit Us
            </h3>

            <div className="mt-6 space-y-5">
              <div className="flex gap-3">
                <MapPin
                  size={18}
                  className="mt-0.5 shrink-0 text-[#d9a45b]"
                />
                <p className="text-sm leading-6 text-[#c9bdb0]">
                  24 Willow Street
                  <br />
                  Mumbai, Maharashtra
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={18} className="shrink-0 text-[#d9a45b]" />
                <a
                  href="tel:+919999999999"
                  className="text-sm text-[#c9bdb0] transition-colors hover:text-[#d9a45b]"
                >
                  +91 99999 99999
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={18} className="shrink-0 text-[#d9a45b]" />
                <a
                  href="mailto:hello@lumoracafe.com"
                  className="text-sm text-[#c9bdb0] transition-colors hover:text-[#d9a45b]"
                >
                  hello@lumoracafe.com
                </a>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#d9a45b]">
              Opening Hours
            </h3>

            <div className="mt-6 space-y-4">
              <div className="flex gap-3">
                <Clock
                  size={18}
                  className="mt-0.5 shrink-0 text-[#d9a45b]"
                />

                <div className="text-sm leading-6 text-[#c9bdb0]">
                  <p>Monday – Friday</p>
                  <p>8:00 AM – 10:00 PM</p>

                  <p className="mt-3">Saturday – Sunday</p>
                  <p>9:00 AM – 11:00 PM</p>
                </div>
              </div>

              <a
                href="#reservation"
                className="inline-flex items-center gap-2 pt-2 text-sm font-medium text-[#d9a45b] transition-colors hover:text-[#f5eee4]"
              >
                <MessageCircle size={17} />
                Make a Reservation
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 border-t border-[#493a30] pt-7">
          <div className="flex flex-col gap-4 text-xs text-[#8f8174] sm:flex-row sm:items-center sm:justify-between">
            <p>© {currentYear} Lumora Café. All rights reserved.</p>

            <div className="flex gap-6">
              <a
                href="#"
                className="transition-colors hover:text-[#d9a45b]"
              >
                Privacy Policy
              </a>

              <a
                href="#"
                className="transition-colors hover:text-[#d9a45b]"
              >
                Terms
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Clock,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#17120f] text-[#f5efe6]">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div className="lg:col-span-1">
            <h2 className="font-serif text-3xl tracking-wide text-[#d9a441]">
              Lumora
            </h2>

            <p className="mt-4 max-w-sm text-sm leading-7 text-[#c9bdb1]">
              A refined café experience where exceptional coffee,
              thoughtful food, and warm hospitality come together.
            </p>

            {/* Social links */}
            <div className="mt-6 flex items-center gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#5b4b3e] text-[#c9bdb1] transition-all duration-300 hover:border-[#d9a441] hover:text-[#d9a441]"
              >
                <span className="text-sm font-semibold">IG</span>
              </a>

              <a
                href="#"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#5b4b3e] text-[#c9bdb1] transition-all duration-300 hover:border-[#d9a441] hover:text-[#d9a441]"
              >
                <span className="text-sm font-semibold">f</span>
              </a>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#d9a441]">
              Explore
            </h3>

            <ul className="mt-6 space-y-4 text-sm text-[#c9bdb1]">
              <li>
                <a
                  href="#home"
                  className="transition-colors hover:text-[#d9a441]"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#menu"
                  className="transition-colors hover:text-[#d9a441]"
                >
                  Menu
                </a>
              </li>

              <li>
                <a
                  href="#about"
                  className="transition-colors hover:text-[#d9a441]"
                >
                  Our Story
                </a>
              </li>

              <li>
                <a
                  href="#gallery"
                  className="transition-colors hover:text-[#d9a441]"
                >
                  Gallery
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#d9a441]">
              Contact
            </h3>

            <div className="mt-6 space-y-5">

              <div className="flex items-start gap-3">
                <MapPin
                  size={18}
                  strokeWidth={1.5}
                  className="mt-0.5 shrink-0 text-[#d9a441]"
                />

                <p className="text-sm leading-6 text-[#c9bdb1]">
                  24 Lumora Lane
                  <br />
                  Mumbai, Maharashtra
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Phone
                  size={18}
                  strokeWidth={1.5}
                  className="shrink-0 text-[#d9a441]"
                />

                <a
                  href="tel:+919999999999"
                  className="text-sm text-[#c9bdb1] transition-colors hover:text-[#d9a441]"
                >
                  +91 99999 99999
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail
                  size={18}
                  strokeWidth={1.5}
                  className="shrink-0 text-[#d9a441]"
                />

                <a
                  href="mailto:hello@lumoracafe.com"
                  className="text-sm text-[#c9bdb1] transition-colors hover:text-[#d9a441]"
                >
                  hello@lumoracafe.com
                </a>
              </div>

            </div>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#d9a441]">
              Opening Hours
            </h3>

            <div className="mt-6 flex items-start gap-3">
              <Clock
                size={18}
                strokeWidth={1.5}
                className="mt-0.5 shrink-0 text-[#d9a441]"
              />

              <div className="space-y-2 text-sm leading-6 text-[#c9bdb1]">
                <p>
                  Monday – Friday
                  <br />
                  8:00 AM – 10:00 PM
                </p>

                <p>
                  Saturday – Sunday
                  <br />
                  9:00 AM – 11:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 border-t border-[#3c3129] pt-8">
          <div className="flex flex-col gap-4 text-xs text-[#8f8175] sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} Lumora Café. All rights reserved.
            </p>

            <div className="flex gap-6">
              <a
                href="#"
                className="transition-colors hover:text-[#d9a441]"
              >
                Privacy
              </a>

              <a
                href="#"
                className="transition-colors hover:text-[#d9a441]"
              >
                Terms
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

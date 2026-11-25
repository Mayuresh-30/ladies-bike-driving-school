import { Bike, Phone, MapPin, MessageCircle } from 'lucide-react';
import { BUSINESS, NAV_LINKS, WHATSAPP_BASE } from '@/constants';

export default function Footer() {
  const year = new Date().getFullYear();

  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-cream-300 bg-cream-100">
      <div className="mx-auto max-w-8xl px-5 py-12 sm:px-8 sm:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-charcoal-800 text-cream-100">
                <Bike size={18} strokeWidth={2.2} />
              </span>
              <span className="font-serif text-base font-semibold leading-tight text-charcoal-800">
                Ladies Bike
                <span className="block text-[0.7rem] font-normal tracking-wide text-charcoal-700/70">
                  Driving School
                </span>
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-charcoal-700">
              A supportive driving school for women in J. P. Nagar, Bengaluru.
              Learn to ride with confidence.
            </p>
          </div>

          {/* Nav */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-charcoal-700/60">
              Navigation
            </h3>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNav(link.href);
                    }}
                    className="text-sm text-charcoal-700 transition-colors hover:text-coral-600"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-charcoal-700/60">
              Contact
            </h3>
            <ul className="space-y-3 text-sm text-charcoal-700">
              <li className="flex items-start gap-2.5">
                <Phone size={16} className="mt-0.5 flex-shrink-0 text-coral-500" />
                <a
                  href={BUSINESS.phoneHref}
                  className="transition-colors hover:text-coral-600"
                >
                  {BUSINESS.phone}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin size={16} className="mt-0.5 flex-shrink-0 text-coral-500" />
                <span>
                  {BUSINESS.address.line1}, {BUSINESS.address.line2},{' '}
                  {BUSINESS.address.line3}
                </span>
              </li>
              <li>
                <a
                  href={WHATSAPP_BASE}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-medium text-coral-600 transition-colors hover:text-coral-700"
                >
                  <MessageCircle size={16} />
                  WhatsApp Enquiry
                </a>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-charcoal-700/60">
              Get Started
            </h3>
            <a
              href="#book"
              onClick={(e) => {
                e.preventDefault();
                handleNav('#book');
              }}
              className="inline-flex items-center justify-center rounded-full bg-coral-500 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-coral-600"
            >
              Book Your Training
            </a>
          </div>
        </div>

        <div className="mt-12 border-t border-cream-300 pt-6">
          <p className="text-xs text-charcoal-700/60">
            &copy; {year} {BUSINESS.name}. Website redesign concept — not the
            official website and not affiliated with the business.
          </p>
        </div>
      </div>
    </footer>
  );
}

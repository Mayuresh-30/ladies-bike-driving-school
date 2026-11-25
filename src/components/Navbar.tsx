import { useEffect, useState } from 'react';
import { Menu, X, Bike } from 'lucide-react';
import { BUSINESS, NAV_LINKS } from '@/constants';

interface NavbarProps {
  onBookClick: () => void;
}

export default function Navbar({ onBookClick }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-cream-100/95 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-8xl items-center justify-between px-5 py-4 sm:px-8">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('#home');
          }}
          className="flex items-center gap-2.5"
          aria-label={`${BUSINESS.name} home`}
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-charcoal-800 text-cream-100">
            <Bike size={18} strokeWidth={2.2} />
          </span>
          <span className="font-serif text-base font-semibold leading-tight text-charcoal-800 sm:text-lg">
            Ladies Bike
            <span className="block text-[0.7rem] font-normal tracking-wide text-charcoal-700/70">
              Driving School
            </span>
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className="text-sm font-medium text-charcoal-700 transition-colors hover:text-coral-600"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <button
          onClick={onBookClick}
          className="hidden rounded-full bg-coral-500 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-coral-600 lg:block"
        >
          Book Your Training
        </button>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-charcoal-800 lg:hidden"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="animate-slide-down border-t border-cream-300 bg-cream-100 lg:hidden">
          <div className="flex flex-col px-5 py-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="border-b border-cream-200 py-3.5 text-base font-medium text-charcoal-800 transition-colors active:text-coral-600"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => {
                setMenuOpen(false);
                onBookClick();
              }}
              className="mt-4 rounded-full bg-coral-500 px-5 py-3 text-base font-semibold text-white transition-colors hover:bg-coral-600"
            >
              Book Your Training
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

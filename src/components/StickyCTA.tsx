import { useEffect, useState } from 'react';
import { MessageCircle, CalendarHeart } from 'lucide-react';
import { WHATSAPP_BASE } from '@/constants';

export default function StickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 600);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToBook = () => {
    const el = document.querySelector('#book');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 transition-transform duration-300 lg:hidden ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="border-t border-cream-300 bg-cream-100/95 px-4 py-3 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <a
            href={WHATSAPP_BASE}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 items-center justify-center gap-2 rounded-full border border-charcoal-800/20 bg-cream-50 px-4 py-3 text-sm font-semibold text-charcoal-800"
            aria-label="Chat on WhatsApp"
          >
            <MessageCircle size={18} />
            WhatsApp
          </a>
          <button
            onClick={scrollToBook}
            className="flex flex-1 items-center justify-center gap-2 rounded-full bg-coral-500 px-4 py-3 text-sm font-semibold text-white"
          >
            <CalendarHeart size={18} />
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}

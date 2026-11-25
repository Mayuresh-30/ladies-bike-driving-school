import { useState, useEffect } from 'react';
import { CalendarHeart } from 'lucide-react';
import BookingForm from './BookingForm';

export default function Booking() {
  const [prefill, setPrefill] = useState<string>('');

  // Listen for external prefill requests
  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent<{ preference: string }>).detail;
      if (detail?.preference) {
        setPrefill(detail.preference);
      }
    };
    window.addEventListener('prefill-booking', handler);
    return () => window.removeEventListener('prefill-booking', handler);
  }, []);

  return (
    <section id="book" className="py-14 sm:py-20">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <div className="overflow-hidden rounded-2xl border border-cream-300 bg-cream-50 sm:rounded-3xl">
          <div className="border-b border-cream-200 bg-charcoal-800 px-6 py-7 text-center sm:px-8">
            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-coral-500 text-white">
              <CalendarHeart size={22} />
            </div>
            <h2 className="font-serif text-2xl font-semibold text-cream-100 sm:text-3xl">
              Book Your Training Session
            </h2>
            <p className="mx-auto mt-2 max-w-md text-sm text-cream-200/80">
              Fill in your details and we'll open WhatsApp with your enquiry
              ready to send. The school will confirm your slot directly.
            </p>
          </div>

          <div className="p-6 sm:p-8">
            <BookingForm prefillPreference={prefill} />
          </div>
        </div>
      </div>
    </section>
  );
}

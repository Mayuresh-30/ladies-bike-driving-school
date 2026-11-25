import { Star } from 'lucide-react';
import { BUSINESS } from '@/constants';

export default function Trust() {
  return (
    <section className="py-12 sm:py-16">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <div className="flex flex-col items-center gap-6 rounded-2xl border border-cream-300 bg-cream-50 px-6 py-8 text-center sm:flex-row sm:justify-center sm:gap-10 sm:text-left">
          <div className="flex items-center gap-3">
            <div className="flex flex-col">
              <span className="font-serif text-4xl font-semibold text-charcoal-900 sm:text-5xl">
                {BUSINESS.rating}
              </span>
              <div className="mt-1 flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className="fill-coral-500 text-coral-500"
                  />
                ))}
              </div>
            </div>
            <div className="ml-2 hidden h-12 w-px bg-cream-300 sm:block" />
          </div>

          <div className="max-w-xs">
            <p className="text-sm font-medium text-charcoal-800">
              Rated {BUSINESS.rating} on Google
            </p>
            <p className="mt-1 text-sm text-charcoal-700/80">
              Based on {BUSINESS.reviewCount} reviews from learners in and
              around Bengaluru.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

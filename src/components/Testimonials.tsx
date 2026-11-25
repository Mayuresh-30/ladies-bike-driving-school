import { Star, Quote, ExternalLink } from 'lucide-react';
import { BUSINESS, TESTIMONIALS } from '@/constants';

export default function Testimonials() {
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    BUSINESS.mapsQuery
  )}`;

  return (
    <section id="reviews" className="py-14 sm:py-20">
      <div className="mx-auto max-w-8xl px-5 sm:px-8">
        <div className="mb-10 max-w-2xl sm:mb-14">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-coral-600">
            Reviews
          </p>
          <h2 className="font-serif text-3xl font-semibold leading-tight text-charcoal-900 sm:text-4xl lg:text-[2.75rem]">
            What learners say
          </h2>
          <p className="mt-4 text-base text-charcoal-700">
            These are placeholder testimonials shown during development. For
            authentic reviews, please visit our Google listing.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <figure
              key={i}
              className="flex flex-col rounded-2xl border border-cream-300 bg-cream-50 p-6"
            >
              <Quote size={24} className="text-coral-300" />
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-charcoal-700">
                {t.quote}
              </blockquote>
              <figcaption className="mt-5 border-t border-cream-200 pt-4">
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star
                      key={s}
                      size={13}
                      className="fill-coral-500 text-coral-500"
                    />
                  ))}
                </div>
                <p className="mt-2 text-sm font-semibold text-charcoal-900">
                  {t.name}
                </p>
                <p className="text-xs text-charcoal-700/60">{t.label}</p>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-charcoal-800/20 bg-cream-50 px-6 py-3.5 text-sm font-semibold text-charcoal-800 transition-colors hover:border-charcoal-800/40"
          >
            Read reviews on Google
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}

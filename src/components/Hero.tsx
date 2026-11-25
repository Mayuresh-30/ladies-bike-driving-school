import { ArrowRight, Star } from 'lucide-react';
import { BUSINESS, IMAGES } from '@/constants';

interface HeroProps {
  onBookClick: () => void;
  onExploreClick: () => void;
}

export default function Hero({ onBookClick, onExploreClick }: HeroProps) {
  return (
    <section id="home" className="relative pt-24 lg:pt-28">
      <div className="mx-auto max-w-8xl px-5 sm:px-8">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Text */}
          <div className="animate-fade-up pt-2 lg:pt-8">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-cream-200/80 px-3.5 py-1.5">
              <Star size={14} className="fill-coral-500 text-coral-500" />
              <span className="text-xs font-medium text-charcoal-700">
                {BUSINESS.rating} on Google · {BUSINESS.reviewCount} reviews
              </span>
            </div>

            <h1 className="font-serif text-[2.5rem] font-semibold leading-[1.05] text-charcoal-900 sm:text-5xl lg:text-[3.75rem]">
              Your First Ride.
              <br />
              <span className="text-coral-600">Your New Freedom.</span>
            </h1>

            <p className="mt-5 max-w-md text-base leading-relaxed text-charcoal-700 sm:text-lg">
              Learn to ride with confidence. Discover a comfortable and
              supportive way to begin your two-wheeler journey.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <button
                onClick={onBookClick}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-coral-500 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-coral-600 hover:gap-3 sm:text-base"
              >
                Book a Training Session
                <ArrowRight size={18} />
              </button>
              <button
                onClick={onExploreClick}
                className="inline-flex items-center justify-center rounded-full border border-charcoal-800/20 bg-cream-50 px-6 py-3.5 text-sm font-semibold text-charcoal-800 transition-colors hover:border-charcoal-800/40 sm:text-base"
              >
                Explore Training
              </button>
            </div>

            <p className="mt-6 text-xs text-charcoal-700/60">
              {BUSINESS.name} · J. P. Nagar, Bengaluru
            </p>
          </div>

          {/* Image */}
          <div className="animate-fade-in relative">
            <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl">
              <img
                src={IMAGES.hero}
                alt="A woman riding a scooter on a city street"
                className="aspect-[4/5] w-full object-cover sm:aspect-[5/4] lg:aspect-[4/5]"
                loading="eager"
                fetchPriority="high"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/25 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

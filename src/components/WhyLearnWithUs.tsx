import { Sprout, ShieldCheck, HardHat, HeartHandshake } from 'lucide-react';
import { WHY_POINTS, IMAGES } from '@/constants';

const ICONS: Record<string, typeof Sprout> = {
  Sprout,
  ShieldCheck,
  HardHat,
  HeartHandshake,
};

export default function WhyLearnWithUs() {
  return (
    <section id="about" className="py-14 sm:py-20">
      <div className="mx-auto max-w-8xl px-5 sm:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <div className="relative order-last lg:order-first">
            <div className="overflow-hidden rounded-2xl sm:rounded-3xl">
              <img
                src={IMAGES.about}
                alt="A woman learning to ride with confidence"
                className="aspect-[4/3] w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-first lg:order-last">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-coral-600">
              Why Learn With Us
            </p>
            <h2 className="font-serif text-3xl font-semibold leading-tight text-charcoal-900 sm:text-4xl lg:text-[2.75rem]">
              A riding school built around how you learn
            </h2>
            <p className="mt-4 text-base text-charcoal-700">
              The focus is simple: help you feel calm, capable, and confident
              from your very first session.
            </p>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {WHY_POINTS.map((point) => {
                const Icon = ICONS[point.icon];
                return (
                  <div key={point.title}>
                    <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-cream-200 text-coral-600">
                      {Icon && <Icon size={20} strokeWidth={1.8} />}
                    </div>
                    <h3 className="font-serif text-lg font-semibold text-charcoal-900">
                      {point.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-charcoal-700">
                      {point.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

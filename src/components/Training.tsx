import { ArrowRight, Check } from 'lucide-react';
import { TRAINING_PROGRAMS } from '@/constants';

interface TrainingProps {
  onEnquire: (program: string) => void;
}

export default function Training({ onEnquire }: TrainingProps) {
  return (
    <section id="training" className="py-14 sm:py-20">
      <div className="mx-auto max-w-8xl px-5 sm:px-8">
        <div className="mb-10 max-w-2xl sm:mb-14">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-coral-600">
            Training Programs
          </p>
          <h2 className="font-serif text-3xl font-semibold leading-tight text-charcoal-900 sm:text-4xl lg:text-[2.75rem]">
            Find the training that fits your journey
          </h2>
          <p className="mt-4 text-base text-charcoal-700">
            Each program is designed around what a new rider actually needs —
            patience, clarity, and real confidence on the road.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {TRAINING_PROGRAMS.map((program) => (
            <article
              key={program.id}
              className="group flex flex-col overflow-hidden rounded-2xl border border-cream-300 bg-cream-50 transition-shadow hover:shadow-md"
            >
              <div className="relative h-52 overflow-hidden sm:h-56">
                <img
                  src={program.image}
                  alt={program.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <h3 className="font-serif text-xl font-semibold text-charcoal-900 sm:text-2xl">
                  {program.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-charcoal-700">
                  {program.description}
                </p>

                <ul className="mt-4 space-y-2">
                  {program.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2 text-sm text-charcoal-700"
                    >
                      <Check
                        size={16}
                        className="mt-0.5 flex-shrink-0 text-coral-500"
                      />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex items-center justify-between border-t border-cream-200 pt-4">
                  <div>
                    <p className="text-xs text-charcoal-700/60">{program.pricing}</p>
                    <p className="text-xs text-charcoal-700/60">
                      {program.duration}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => onEnquire(program.title)}
                  className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-charcoal-800 px-5 py-3 text-sm font-semibold text-cream-100 transition-all hover:bg-charcoal-900 hover:gap-3"
                >
                  Enquire Now
                  <ArrowRight size={16} />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

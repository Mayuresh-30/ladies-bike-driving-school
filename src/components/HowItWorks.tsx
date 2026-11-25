import { HOW_STEPS } from '@/constants';

export default function HowItWorks() {
  return (
    <section className="py-14 sm:py-20">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <div className="mb-10 text-center sm:mb-14">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-coral-600">
            How It Works
          </p>
          <h2 className="font-serif text-3xl font-semibold leading-tight text-charcoal-900 sm:text-4xl lg:text-[2.75rem]">
            Getting started is simple
          </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-3 sm:gap-6">
          {HOW_STEPS.map((step, idx) => (
            <div
              key={step.number}
              className="relative flex flex-col items-center text-center sm:items-start sm:text-left"
            >
              <div className="flex items-center gap-3 sm:flex-col sm:items-start sm:gap-2">
                <span className="font-serif text-4xl font-semibold text-coral-300 sm:text-5xl">
                  {step.number}
                </span>
                {idx < HOW_STEPS.length - 1 && (
                  <div className="hidden h-px w-full bg-cream-300 sm:mt-6 sm:block" />
                )}
              </div>
              <h3 className="mt-4 font-serif text-lg font-semibold text-charcoal-900 sm:mt-5">
                {step.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-charcoal-700">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

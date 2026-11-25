import { useState } from 'react';
import { Send, AlertCircle, CheckCircle2 } from 'lucide-react';
import { buildEnquiryMessage, whatsappUrl, BUSINESS } from '@/constants';

interface BookingFormProps {
  prefillPreference?: string;
}

interface FormData {
  name: string;
  phone: string;
  preference: string;
  experience: string;
  date: string;
  time: string;
  message: string;
}

const EMPTY: FormData = {
  name: '',
  phone: '',
  preference: '',
  experience: '',
  date: '',
  time: '',
  message: '',
};

export default function BookingForm({ prefillPreference }: BookingFormProps) {
  const [data, setData] = useState<FormData>({
    ...EMPTY,
    preference: prefillPreference || '',
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  const update = (field: keyof FormData, value: string) => {
    setData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const validate = (): boolean => {
    const e: Partial<Record<keyof FormData, string>> = {};
    if (!data.name.trim()) e.name = 'Please enter your name';
    if (!data.phone.trim()) {
      e.phone = 'Please enter your mobile number';
    } else if (!/^[0-9+\-\s]{7,15}$/.test(data.phone.trim())) {
      e.phone = 'Please enter a valid mobile number';
    }
    if (!data.preference) e.preference = 'Please select a preference';
    if (!data.experience) e.experience = 'Please select your experience level';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;

    const message = buildEnquiryMessage(data);
    const url = whatsappUrl(message);
    setSubmitted(true);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const reset = () => {
    setData({ ...EMPTY, preference: prefillPreference || '' });
    setSubmitted(false);
    setErrors({});
  };

  if (submitted) {
    return (
      <div className="rounded-2xl border border-sage-200 bg-sage-50 p-8 text-center">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-sage-200 text-sage-500">
          <CheckCircle2 size={28} />
        </div>
        <h3 className="font-serif text-xl font-semibold text-charcoal-900">
          Your enquiry is ready on WhatsApp
        </h3>
        <p className="mx-auto mt-2 max-w-sm text-sm text-charcoal-700">
          We've opened WhatsApp with your details filled in. Please press send
          to complete your enquiry. This is a request — your booking is not
          confirmed until the school responds.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <a
            href={whatsappUrl(buildEnquiryMessage(data))}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-coral-500 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-coral-600"
          >
            Open WhatsApp Again
          </a>
          <button
            onClick={reset}
            className="inline-flex items-center justify-center rounded-full border border-charcoal-800/20 bg-cream-50 px-6 py-3 text-sm font-semibold text-charcoal-800 transition-colors hover:border-charcoal-800/40"
          >
            Submit Another Enquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name" error={errors.name} required>
          <input
            type="text"
            value={data.name}
            onChange={(e) => update('name', e.target.value)}
            placeholder="Your name"
            className={inputClass(errors.name)}
            autoComplete="name"
          />
        </Field>

        <Field label="Mobile number" error={errors.phone} required>
          <input
            type="tel"
            value={data.phone}
            onChange={(e) => update('phone', e.target.value)}
            placeholder="e.g. 98765 43210"
            className={inputClass(errors.phone)}
            autoComplete="tel"
          />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Training preference" error={errors.preference} required>
          <select
            value={data.preference}
            onChange={(e) => update('preference', e.target.value)}
            className={inputClass(errors.preference)}
          >
            <option value="">Select one</option>
            <option value="Scooter">Scooter</option>
            <option value="Motorcycle">Motorcycle</option>
            <option value="Confidence & Practice">
              Confidence &amp; Practice
            </option>
          </select>
        </Field>

        <Field label="Experience level" error={errors.experience} required>
          <select
            value={data.experience}
            onChange={(e) => update('experience', e.target.value)}
            className={inputClass(errors.experience)}
          >
            <option value="">Select one</option>
            <option value="Beginner">Beginner</option>
            <option value="Have some experience">
              Have some experience
            </option>
          </select>
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Preferred training date">
          <input
            type="date"
            value={data.date}
            onChange={(e) => update('date', e.target.value)}
            className={inputClass(undefined)}
          />
        </Field>

        <Field label="Preferred time">
          <select
            value={data.time}
            onChange={(e) => update('time', e.target.value)}
            className={inputClass(undefined)}
          >
            <option value="">Any time</option>
            <option value="Morning (8 AM – 12 PM)">Morning (8 AM – 12 PM)</option>
            <option value="Afternoon (12 PM – 4 PM)">
              Afternoon (12 PM – 4 PM)
            </option>
            <option value="Evening (4 PM – 7 PM)">Evening (4 PM – 7 PM)</option>
          </select>
        </Field>
      </div>

      <Field label="Message (optional)">
        <textarea
          value={data.message}
          onChange={(e) => update('message', e.target.value)}
          placeholder="Anything you'd like the school to know?"
          rows={3}
          className={`${inputClass(undefined)} resize-none`}
        />
      </Field>

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-coral-500 px-6 py-4 text-base font-semibold text-white transition-all hover:bg-coral-600 hover:gap-3"
      >
        Send Enquiry via WhatsApp
        <Send size={18} />
      </button>

      <p className="text-center text-xs text-charcoal-700/60">
        This sends a request via WhatsApp to {BUSINESS.phone}. Your booking is
        confirmed only when the school replies.
      </p>
    </form>
  );
}

function inputClass(error?: string): string {
  return `w-full rounded-xl border bg-cream-50 px-4 py-3 text-sm text-charcoal-900 placeholder:text-charcoal-700/40 transition-colors focus:outline-none focus:ring-2 focus:ring-coral-300 ${
    error ? 'border-coral-500' : 'border-cream-300 focus:border-coral-300'
  }`;
}

function Field({
  label,
  error,
  required,
  children,
}: {
  label: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-charcoal-800">
        {label}
        {required && <span className="text-coral-500"> *</span>}
      </label>
      {children}
      {error && (
        <p className="mt-1.5 flex items-center gap-1 text-xs text-coral-600">
          <AlertCircle size={13} />
          {error}
        </p>
      )}
    </div>
  );
}

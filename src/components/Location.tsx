import { MapPin, Phone, MessageCircle, Globe, ExternalLink, Navigation } from 'lucide-react';
import { BUSINESS, WHATSAPP_BASE } from '@/constants';

export default function Location() {
  const mapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    BUSINESS.mapsQuery
  )}`;
  const mapsEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(
    BUSINESS.mapsQuery
  )}&output=embed`;

  return (
    <section id="contact" className="py-14 sm:py-20">
      <div className="mx-auto max-w-8xl px-5 sm:px-8">
        <div className="mb-10 max-w-2xl sm:mb-14">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-coral-600">
            Location &amp; Contact
          </p>
          <h2 className="font-serif text-3xl font-semibold leading-tight text-charcoal-900 sm:text-4xl lg:text-[2.75rem]">
            Visit us in J. P. Nagar
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
          {/* Contact details */}
          <div className="flex flex-col gap-5">
            <ContactRow icon={<MapPin size={20} />} label="Address">
              <p>{BUSINESS.address.line1}</p>
              <p>{BUSINESS.address.line2}</p>
              <p>{BUSINESS.address.line3}</p>
            </ContactRow>

            <ContactRow icon={<Phone size={20} />} label="Phone">
              <a
                href={BUSINESS.phoneHref}
                className="transition-colors hover:text-coral-600"
              >
                {BUSINESS.phone}
              </a>
            </ContactRow>

            <ContactRow icon={<MessageCircle size={20} />} label="WhatsApp Enquiry">
              <a
                href={WHATSAPP_BASE}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-coral-600"
              >
                Chat with us on WhatsApp
              </a>
            </ContactRow>

            <ContactRow icon={<Globe size={20} />} label="Website">
              <a
                href={`https://${BUSINESS.website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-coral-600"
              >
                {BUSINESS.website}
              </a>
            </ContactRow>

            <div className="mt-2 flex flex-col gap-3 sm:flex-row">
              <a
                href={mapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-coral-500 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-coral-600"
              >
                <Navigation size={17} />
                Get Directions
              </a>
              <a
                href={WHATSAPP_BASE}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-charcoal-800/20 bg-cream-50 px-6 py-3.5 text-sm font-semibold text-charcoal-800 transition-colors hover:border-charcoal-800/40"
              >
                <MessageCircle size={17} />
                WhatsApp Us
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="overflow-hidden rounded-2xl border border-cream-300 sm:rounded-3xl">
            <iframe
              title="Map showing Ladies Bike Driving School location in J. P. Nagar, Bengaluru"
              src={mapsEmbedUrl}
              className="h-full min-h-[300px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-cream-200 text-charcoal-700">
        {icon}
      </div>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-charcoal-700/60">
          {label}
        </p>
        <div className="mt-1 text-sm leading-relaxed text-charcoal-800">
          {children}
        </div>
      </div>
    </div>
  );
}

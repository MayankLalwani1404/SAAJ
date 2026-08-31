import { useReveal } from '@/hooks/useReveal';
import { Calendar, Mail, MapPin } from 'lucide-react';

export default function Atelier() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="atelier" className="py-24 lg:py-32 bg-maroon-950 text-sand-100 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <img
          src="https://images.pexels.com/photos/32673642/pexels-photo-32673642.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div
        ref={ref}
        className={`relative max-w-3xl mx-auto px-6 lg:px-10 text-center reveal ${
          visible ? 'is-visible' : ''
        }`}
      >
        <p className="text-gold-300 text-[12px] uppercase tracking-[0.3em] mb-5">
          The Atelier
        </p>
        <h2 className="font-serif text-4xl lg:text-5xl leading-tight text-balance">
          A private appointment, tailored to you
        </h2>
        <p className="mt-7 text-stone-300 leading-relaxed text-lg font-light">
          Visit our atelier for a one-on-one consultation. Our stylists will
          guide you through drapes, fittings, and bespoke customisation — from
          bridal trousseaus to festive edits.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#visit"
            className="inline-flex items-center justify-center gap-3 bg-gold-300 hover:bg-gold-200 text-maroon-950 px-8 py-4 text-[13px] uppercase tracking-[0.18em] transition-all duration-300"
          >
            <Calendar size={16} /> Book an Appointment
          </a>
          <a
            href="#visit"
            className="inline-flex items-center justify-center gap-3 border border-sand-100/30 text-sand-100 hover:bg-sand-50 hover:text-maroon-900 px-8 py-4 text-[13px] uppercase tracking-[0.18em] transition-all duration-300"
          >
            <Mail size={16} /> Request a Lookbook
          </a>
        </div>
      </div>
    </section>
  );
}

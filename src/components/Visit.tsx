import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

export default function Visit() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="visit" className="py-24 lg:py-32 bg-sand-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-14 lg:gap-20">
        {/* Details */}
        <div>
          <p className="text-gold-700 text-[12px] uppercase tracking-[0.3em] mb-4">
            Visit Us
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl text-maroon-900 text-balance">
            Find our flagship atelier
          </h2>
          <p className="mt-6 text-stone-600 leading-relaxed">
            Step into our flagship store in the heart of the city, or reach out
            to schedule a private viewing. We look forward to draping you.
          </p>

          <div className="mt-10 space-y-6">
            <div className="flex gap-4">
              <span className="flex-shrink-0 w-11 h-11 rounded-full bg-maroon-50 text-maroon-800 flex items-center justify-center">
                <MapPin size={18} />
              </span>
              <div>
                <p className="font-serif text-lg text-stone-800">Flagship Store</p>
                <p className="text-stone-600 text-sm mt-1">
                  14 Hauz Khas Village, New Delhi 110016, India
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="flex-shrink-0 w-11 h-11 rounded-full bg-maroon-50 text-maroon-800 flex items-center justify-center">
                <Phone size={18} />
              </span>
              <div>
                <p className="font-serif text-lg text-stone-800">Telephone</p>
                <p className="text-stone-600 text-sm mt-1">+91 11 4567 8910</p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="flex-shrink-0 w-11 h-11 rounded-full bg-maroon-50 text-maroon-800 flex items-center justify-center">
                <Mail size={18} />
              </span>
              <div>
                <p className="font-serif text-lg text-stone-800">Email</p>
                <p className="text-stone-600 text-sm mt-1">atelier@saajcouture.in</p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="flex-shrink-0 w-11 h-11 rounded-full bg-maroon-50 text-maroon-800 flex items-center justify-center">
                <Clock size={18} />
              </span>
              <div>
                <p className="font-serif text-lg text-stone-800">Hours</p>
                <p className="text-stone-600 text-sm mt-1">
                  Mon–Sat: 11am – 8pm · Sunday: By appointment
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="bg-white p-8 lg:p-10 shadow-[0_8px_40px_-12px_rgba(88,38,31,0.18)]">
          <h3 className="font-serif text-2xl text-maroon-900 mb-2">Send a message</h3>
          <p className="text-stone-500 text-sm mb-8">
            We typically respond within one business day.
          </p>

          {sent ? (
            <div className="py-16 text-center">
              <div className="w-14 h-14 rounded-full bg-gold-100 text-gold-700 flex items-center justify-center mx-auto mb-5">
                <Send size={22} />
              </div>
              <p className="font-serif text-xl text-maroon-900">Thank you</p>
              <p className="text-stone-500 text-sm mt-2">
                Your message has been received. Our atelier will be in touch shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="First name" name="firstName" />
                <Field label="Last name" name="lastName" />
              </div>
              <Field label="Email" name="email" type="email" />
              <Field label="Phone" name="phone" type="tel" />
              <div>
                <label className="block text-[11px] uppercase tracking-[0.18em] text-stone-500 mb-2">
                  Interest
                </label>
                <select className="w-full border border-stone-300 px-4 py-3 text-sm text-stone-700 focus:outline-none focus:border-maroon-700 transition-colors bg-white">
                  <option>Bridal couture</option>
                  <option>Sarees</option>
                  <option>Lehengas</option>
                  <option>Custom tailoring</option>
                  <option>General enquiry</option>
                </select>
              </div>
              <div>
                <label className="block text-[11px] uppercase tracking-[0.18em] text-stone-500 mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full border border-stone-300 px-4 py-3 text-sm text-stone-700 focus:outline-none focus:border-maroon-700 transition-colors resize-none"
                  placeholder="Tell us about the occasion..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-maroon-800 hover:bg-maroon-700 text-sand-50 py-4 text-[13px] uppercase tracking-[0.18em] transition-all duration-300 flex items-center justify-center gap-3"
              >
                <Send size={15} /> Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = 'text',
}: {
  label: string;
  name: string;
  type?: string;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-[11px] uppercase tracking-[0.18em] text-stone-500 mb-2"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        className="w-full border border-stone-300 px-4 py-3 text-sm text-stone-700 focus:outline-none focus:border-maroon-700 transition-colors"
      />
    </div>
  );
}

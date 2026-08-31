import { Instagram, Facebook, Youtube } from 'lucide-react';

const columns = [
  {
    title: 'Shop',
    links: ['Sarees', 'Lehengas', 'Bridal Couture', 'Menswear', 'New Arrivals'],
  },
  {
    title: 'House',
    links: ['Our Heritage', 'The Craft', 'Sustainability', 'Press', 'Careers'],
  },
  {
    title: 'Client Care',
    links: ['Appointments', 'Shipping', 'Returns', 'Garment Care', 'FAQs'],
  },
];

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-sand-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <p className="font-serif text-3xl text-sand-50">Saaj</p>
            <p className="text-[11px] uppercase tracking-[0.25em] text-gold-400 mt-1">
              Heritage Couture
            </p>
            <p className="mt-6 text-stone-400 text-sm leading-relaxed max-w-sm">
              A house of handwoven Indian couture, partnering with master
              artisans to preserve the craft of cloth since 1978.
            </p>
            <div className="flex gap-4 mt-6">
              {[Instagram, Facebook, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social"
                  className="w-10 h-10 rounded-full border border-stone-700 flex items-center justify-center text-stone-400 hover:border-gold-400 hover:text-gold-300 transition-colors"
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <p className="text-[11px] uppercase tracking-[0.22em] text-sand-50 mb-5">
                {col.title}
              </p>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-sm text-stone-400 hover:text-gold-300 transition-colors"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-8 border-t border-stone-800 flex flex-col sm:flex-row justify-between gap-4 text-xs text-stone-500">
          <p>© 2026 Saaj Couture. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-stone-300 transition-colors">Privacy</a>
            <a href="#" className="hover:text-stone-300 transition-colors">Terms</a>
            <a href="#" className="hover:text-stone-300 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

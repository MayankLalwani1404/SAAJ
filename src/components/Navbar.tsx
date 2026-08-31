import { useEffect, useState } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';

const links = [
  { label: 'Collections', href: '#collections' },
  { label: 'Heritage', href: '#heritage' },
  { label: 'Craft', href: '#craft' },
  { label: 'Atelier', href: '#atelier' },
  { label: 'Visit', href: '#visit' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-sand-50/95 backdrop-blur-md shadow-[0_1px_0_0_rgba(0,0,0,0.06)]'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-20">
        <a href="#home" className="flex items-center gap-2 group">
          <span className="font-serif text-2xl tracking-wide text-maroon-800">
            Saaj
          </span>
          <span className="hidden sm:inline text-[10px] uppercase tracking-[0.25em] text-gold-700 mt-1">
            Couture
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-[13px] uppercase tracking-[0.18em] text-stone-600 hover:text-maroon-800 transition-colors duration-300 relative after:absolute after:bottom-[-6px] after:left-0 after:h-px after:w-0 after:bg-maroon-700 after:transition-all after:duration-300 hover:after:w-full"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <button
            aria-label="Cart"
            className="hidden md:flex items-center gap-2 text-[13px] uppercase tracking-[0.18em] text-stone-600 hover:text-maroon-800 transition-colors"
          >
            <ShoppingBag size={18} />
            <span>(0)</span>
          </button>
          <button
            aria-label="Menu"
            className="md:hidden text-stone-700"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 bg-sand-50/98 backdrop-blur-md ${
          open ? 'max-h-96 border-t border-stone-200' : 'max-h-0'
        }`}
      >
        <ul className="px-6 py-6 flex flex-col gap-5">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block text-sm uppercase tracking-[0.18em] text-stone-600 hover:text-maroon-800 transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

import { useState } from 'react';
import { products, categories, type Category } from '@/data/products';
import { Plus } from 'lucide-react';

export default function Collections() {
  const [active, setActive] = useState<Category>('All');

  const filtered =
    active === 'All' ? products : products.filter((p) => p.category === active);

  return (
    <section id="collections" className="py-24 lg:py-32 bg-sand-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">
          <div className="max-w-xl">
            <p className="text-gold-700 text-[12px] uppercase tracking-[0.3em] mb-4">
              The Collection
            </p>
            <h2 className="font-serif text-4xl lg:text-5xl text-maroon-900 text-balance">
              Curated ensembles for every occasion
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`px-5 py-2.5 text-[12px] uppercase tracking-[0.16em] transition-all duration-300 border ${
                  active === c
                    ? 'bg-maroon-800 text-sand-50 border-maroon-800'
                    : 'bg-transparent text-stone-600 border-stone-300 hover:border-maroon-700 hover:text-maroon-800'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
          {filtered.map((p) => (
            <article key={p.id} className="group cursor-pointer">
              <div className="relative overflow-hidden bg-sand-100 mb-4 aspect-[3/4]">
                <img
                  src={p.image}
                  alt={p.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {p.tag && (
                  <span className="absolute top-3 left-3 bg-sand-50/95 text-maroon-800 text-[10px] uppercase tracking-[0.18em] px-3 py-1.5">
                    {p.tag}
                  </span>
                )}
                <div className="absolute inset-0 bg-maroon-950/0 group-hover:bg-maroon-950/15 transition-colors duration-500 flex items-end justify-center pb-6 opacity-0 group-hover:opacity-100">
                  <span className="inline-flex items-center gap-2 bg-sand-50 text-maroon-800 px-5 py-2.5 text-[11px] uppercase tracking-[0.18em] translate-y-3 group-hover:translate-y-0 transition-transform duration-500">
                    <Plus size={14} /> Quick View
                  </span>
                </div>
              </div>
              <div className="flex items-start justify-between gap-2">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-gold-700 mb-1">
                    {p.category}
                  </p>
                  <h3 className="font-serif text-lg text-stone-800 leading-snug">
                    {p.name}
                  </h3>
                  <p className="text-xs text-stone-500 mt-1">{p.origin}</p>
                </div>
                <p className="font-serif text-lg text-maroon-800 whitespace-nowrap">
                  {p.price}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

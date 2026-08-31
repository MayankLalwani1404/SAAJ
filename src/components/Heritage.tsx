import { useReveal } from '@/hooks/useReveal';

export default function Heritage() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="heritage" className="py-24 lg:py-32 bg-stone-900 text-sand-100 overflow-hidden">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-14 lg:gap-20 items-center reveal ${
          visible ? 'is-visible' : ''
        }`}
      >
        <div className="relative">
          <img
            src="https://images.pexels.com/photos/4566670/pexels-photo-4566670.jpeg?auto=compress&cs=tinysrgb&w=1000"
            alt="Colorful Indian textiles with traditional patterns"
            loading="lazy"
            className="w-full h-[520px] object-cover"
          />
          <div className="absolute -bottom-6 -right-6 bg-gold-200 text-maroon-900 px-8 py-6 hidden sm:block">
            <p className="font-serif text-3xl">Since 1978</p>
            <p className="text-[11px] uppercase tracking-[0.2em] mt-1">Three generations</p>
          </div>
        </div>

        <div>
          <p className="text-gold-300 text-[12px] uppercase tracking-[0.3em] mb-5">
            Our Heritage
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl leading-tight text-balance">
            A legacy woven across three generations
          </h2>
          <p className="mt-8 text-stone-300 leading-relaxed text-lg font-light">
            Saaj began in a small bylane of old Delhi, where our founder draped
            her first saree on a borrowed sewing machine. Today, we work
            directly with weaving clusters in nine states — preserving
            techniques that have been passed hand to hand for centuries.
          </p>
          <p className="mt-5 text-stone-400 leading-relaxed font-light">
            Every piece in our atelier carries the fingerprint of the artisan
            who made it. We believe in slow fashion, fair wages, and the quiet
            luxury of cloth made with patience.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-6">
            <div className="border-l border-gold-700/40 pl-5">
              <p className="font-serif text-2xl text-gold-200">Fair Trade</p>
              <p className="text-sm text-stone-400 mt-1">Direct-to-artisan sourcing</p>
            </div>
            <div className="border-l border-gold-700/40 pl-5">
              <p className="font-serif text-2xl text-gold-200">Naturally Dyed</p>
              <p className="text-sm text-stone-400 mt-1">Plant-based pigments</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/17040982/pexels-photo-17040982.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Woman in traditional Indian attire at dusk"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950/70 via-stone-900/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 via-transparent to-stone-950/20" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 w-full pt-24">
        <div className="max-w-2xl">
          <p className="text-gold-300 text-[12px] uppercase tracking-[0.35em] mb-6 animate-[fadeIn_1s_ease]">
            Est. 1978 · Handwoven Heritage
          </p>
          <h1 className="text-white font-serif text-5xl sm:text-6xl lg:text-7xl leading-[1.05] text-balance">
            Threads of India,
            <br />
            <span className="italic text-gold-200">worn with intention.</span>
          </h1>
          <p className="mt-8 text-stone-200 text-lg leading-relaxed max-w-xl font-light">
            A house of heritage couture sourcing handwoven sarees, lehengas, and
            bridal ensembles from master artisans across India.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="#collections"
              className="group inline-flex items-center justify-center gap-3 bg-maroon-800 hover:bg-maroon-700 text-sand-50 px-8 py-4 text-[13px] uppercase tracking-[0.18em] transition-all duration-300"
            >
              Explore Collection
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#atelier"
              className="inline-flex items-center justify-center border border-sand-100/40 text-sand-100 hover:bg-sand-50 hover:text-stone-900 px-8 py-4 text-[13px] uppercase tracking-[0.18em] transition-all duration-300"
            >
              Book a Consultation
            </a>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-sand-100/70">
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <span className="w-px h-10 bg-sand-100/40 animate-pulse" />
      </div>
    </section>
  );
}

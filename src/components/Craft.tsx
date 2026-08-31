import { useReveal } from '@/hooks/useReveal';

const crafts = [
  {
    title: 'Kanjivaram Weaving',
    region: 'Tamil Nadu',
    desc: 'Pure mulberry silk interlaced with zari threads, each saree taking up to 20 days on a handloom.',
    image: 'https://images.pexels.com/photos/10317127/pexels-photo-10317127.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Zardozi Embroidery',
    region: 'Lucknow',
    desc: 'Metallic gold and silver threadwork laid by hand, a Mughal-era craft still practised by few.',
    image: 'https://images.pexels.com/photos/28382914/pexels-photo-28382914.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Bandhani Tie-Dye',
    region: 'Rajasthan',
    desc: 'Thousands of tiny knots tied by hand before dyeing, creating intricate dotted patterns.',
    image: 'https://images.pexels.com/photos/24738158/pexels-photo-24738158.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

export default function Craft() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="craft" className="py-24 lg:py-32 bg-sand-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-gold-700 text-[12px] uppercase tracking-[0.3em] mb-4">
            The Craft
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl text-maroon-900 text-balance">
            Techniques preserved by hand
          </h2>
          <p className="mt-6 text-stone-600 leading-relaxed">
            Each region of India carries its own language of cloth. We partner
            with the artisans who keep these traditions alive.
          </p>
        </div>

        <div
          ref={ref}
          className={`grid md:grid-cols-3 gap-8 reveal ${visible ? 'is-visible' : ''}`}
        >
          {crafts.map((c) => (
            <article key={c.title} className="group">
              <div className="overflow-hidden mb-5 aspect-[4/5]">
                <img
                  src={c.image}
                  alt={c.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <p className="text-[11px] uppercase tracking-[0.22em] text-gold-700 mb-2">
                {c.region}
              </p>
              <h3 className="font-serif text-2xl text-maroon-900 mb-3">{c.title}</h3>
              <p className="text-stone-600 leading-relaxed text-sm">{c.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

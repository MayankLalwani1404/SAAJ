const stats = [
  { value: '45+', label: 'Years of Heritage' },
  { value: '120', label: 'Master Artisans' },
  { value: '9', label: 'Crafting Regions' },
  { value: '100%', label: 'Handwoven' },
];

export default function Marquee() {
  return (
    <section className="bg-maroon-900 text-sand-100 py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((s) => (
          <div key={s.label} className="text-center lg:text-left">
            <p className="font-serif text-4xl lg:text-5xl text-gold-200">{s.value}</p>
            <p className="mt-2 text-[11px] uppercase tracking-[0.22em] text-sand-200/80">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function PlaceholderPage({ title }: { title: string }) {
  return (
    <div className="min-h-screen bg-sand-50 pt-32 pb-24 flex items-center justify-center">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h1 className="font-serif text-5xl md:text-6xl text-stone-900 mb-6">{title}</h1>
        <p className="text-stone-600 leading-relaxed text-lg">
          This is a newly created page for {title}. Detailed content for this section will be added soon.
        </p>
      </div>
    </div>
  );
}

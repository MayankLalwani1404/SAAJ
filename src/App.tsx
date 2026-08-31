import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import Collections from '@/components/Collections';
import Heritage from '@/components/Heritage';
import Craft from '@/components/Craft';
import Atelier from '@/components/Atelier';
import Visit from '@/components/Visit';
import Footer from '@/components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-sand-50">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Collections />
        <Heritage />
        <Craft />
        <Atelier />
        <Visit />
      </main>
      <Footer />
    </div>
  );
}

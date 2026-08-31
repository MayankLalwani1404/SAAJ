import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import Collections from '@/components/Collections';
import Heritage from '@/components/Heritage';
import Craft from '@/components/Craft';
import Atelier from '@/components/Atelier';
import Visit from '@/components/Visit';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function Home() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [hash]);

  return (
    <main>
      <Hero />
      <Marquee />
      <Collections />
      <Heritage />
      <Craft />
      <Atelier />
      <Visit />
    </main>
  );
}

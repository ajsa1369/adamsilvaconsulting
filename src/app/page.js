import CTA from '@/components/CTA';
import About from './Home/sections/About';
import Challenges from './Home/sections/Challenges';
import CoreServicesCTA from './Home/sections/CoreServices';
import Hero from './Home/sections/Hero';
import ServiceEcosystem from './Home/sections/Services';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <About/>
      <ServiceEcosystem/>
      <Challenges/>
      <CoreServicesCTA/>
      <CTA/>
    </main>
  );
}

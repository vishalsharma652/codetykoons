import Hero from '../components/Hero';
import TechTicker from '../components/TechTicker';
import WhyChooseUs from '../components/WhyChooseUs';
import Process from '../components/Process';
import Faq from '../components/Faq';

export default function Home() {
  return (
    <main>
      <Hero />
      <TechTicker />
      <WhyChooseUs />
      <Process />
      <Faq />
    </main>
  );
}

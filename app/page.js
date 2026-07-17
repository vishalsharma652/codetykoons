import Navbar from '../_components/Navbar';
import Hero from '../_components/Hero';
import Services from '../_components/Services';
import About from '../_components/About';
import Contact from '../_components/Contact';
import Footer from '../_components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}

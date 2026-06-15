import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import Portfolio from './components/Portfolio';
import Pricing from './components/Pricing';
import Differentials from './components/Differentials';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsapp from './components/FloatingWhatsapp';

export default function App() {
  return (
    <div className="bg-black text-white min-h-screen selection:bg-brand-blue/35 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <HowItWorks />
        <Portfolio />
        <Pricing />
        <Differentials />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsapp />
    </div>
  );
}

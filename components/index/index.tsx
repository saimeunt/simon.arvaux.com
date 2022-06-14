import ContextProvider from './context/provider';
import Navbar from './navbar';
import HeroSection from './hero-section';
import ServicesSection from './services-section';
import PortfolioSection from './portfolio-section';
import TestimonialsSection from './testimonials-section';
import ContactSection from './contact-section';
import Footer from './footer';
import Notification from './notification';

const Index = () => (
  <ContextProvider>
    <header className="sticky top-0 z-40">
      <Navbar />
    </header>
    <main>
      <HeroSection />
      <ServicesSection />
      <PortfolioSection />
      <TestimonialsSection />
      <ContactSection />
      <Notification />
    </main>
    <footer>
      <Footer />
    </footer>
  </ContextProvider>
);

export default Index;

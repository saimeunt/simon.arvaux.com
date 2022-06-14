import ContextProvider from './context/provider';
import Navbar from './navbar';
import HeroSection from './hero-section';
import ServicesSection from './services-section';
import PortfolioSection from './portfolio-section';
import TestimonialsSection from './testimonials-section';
import ContactSection from './contact-section';
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
  </ContextProvider>
);

export default Index;

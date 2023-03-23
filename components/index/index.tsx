'use client';
import { useDarkMode } from 'usehooks-ts';
import classNames from 'classnames';

import ContextProvider from './context/provider';
import Navbar from './navbar';
import HeroSection from './hero-section';
import ServicesSection from './services-section';
import PortfolioSection from './portfolio-section';
import TestimonialsSection from './testimonials-section';
import ContactSection from './contact-section';
import Footer from './footer';
import Notification from './notification';

const Index = () => {
  const { isDarkMode } = useDarkMode(true);
  return (
    <ContextProvider>
      <div className={classNames({ dark: isDarkMode })}>
        <div className="bg-white dark:bg-neutral-900">
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
        </div>
      </div>
    </ContextProvider>
  );
};

export default Index;

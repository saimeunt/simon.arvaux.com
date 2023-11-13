'use client';
import { useDarkMode } from 'usehooks-ts';
import clsx from 'clsx';

import ContextProvider from '@/app/ui/context/provider';
import Navbar from '@/app/ui/navbar';
import HeroSection from '@/app/ui/hero-section';
import ServicesSection from '@/app/ui/services-section';
import PortfolioSection from '@/app/ui/portfolio-section';
import TestimonialsSection from '@/app/ui/testimonials-section';
import ContactSection from '@/app/ui/contact-section';
import Footer from '@/app/ui/footer';
import Notification from '@/app/ui/notification';

const Index = () => {
  const { isDarkMode } = useDarkMode(true);
  return (
    <ContextProvider>
      <div className={clsx({ dark: isDarkMode })}>
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

'use client'

import FAQ from './components/faq';
import Hero from './components/hero';
import Price from './components/price';
import Work from './components/work';
import Contact from './components/contact';

export default function Home() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main>
      <Hero 
        onGetStarted={() => scrollToSection('contact')}
        onLearnMore={() => scrollToSection('pricing')}
      />
      <Price id="pricing" /> 
      <FAQ />
      <Work />
      <Contact id="contact" />
    </main>
  );
}

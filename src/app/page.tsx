'use client'

import FAQ from './components/faq';
import Hero from './components/hero';
import Price from './components/price';
import Work from './components/work';
import Contact from './components/contact';

export default function Home() {
  return (
    <main>
      <Hero 
        onGetStarted={() => {}}
        onLearnMore={() => {}}
      />
      <Price /> 
      <FAQ />
      <Work />
      <Contact />
    </main>
  );
}

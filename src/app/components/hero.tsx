import React from 'react';
import Image from 'next/image';

interface HeroProps {
  onGetStarted: () => void;
  onLearnMore: () => void;
}

const Hero: React.FC<HeroProps> = ({ onGetStarted, onLearnMore }) => {
  const handleGetStarted = (e: React.MouseEvent) => {
    e.preventDefault();
    console.log('Get Started clicked');
    onGetStarted();
  };

  const handleLearnMore = (e: React.MouseEvent) => {
    e.preventDefault();
    console.log('Learn More clicked');
    onLearnMore();
  };

  return (
    <div className="bg-slate-900 min-h-screen flex flex-col">
      <div className="w-full border-b border-slate-800">
        <div className="flex justify-center items-center gap-4 py-3 text-[10px] xs:text-xs sm:text-sm text-slate-400">
          <div className="flex items-center gap-1">
            <svg className="w-3 h-3 xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                d="M12 18.5L3 9l9-9 9 9-9 9z M3 9h18" />
            </svg>
            <span>Screen Responsive</span>
          </div>
          
          <span>•</span>
          
          <div className="flex items-center gap-1">
            <svg className="w-3 h-3 xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <span>SEO Optimized</span>
          </div>
          
          <span>•</span>
          
          <div className="flex items-center gap-1">
            <svg className="w-3 h-3 xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
            </svg>
            <span>Affordable Pricing</span>
          </div>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center px-3 xs:px-5 sm:px-6 lg:px-8 relative overflow-hidden py-16 xs:py-24 lg:py-32">
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="absolute inset-0 -left-1/3 -right-1/3">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-transparent rounded-3xl blur-2xl"></div>
            <div 
              className="absolute inset-0 opacity-[0.05] rounded-2xl xs:rounded-3xl"
              style={{
                background: `url("data:image/svg+xml,%3Csvg width='400' height='400' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0 L100 100 M100 0 L0 100' stroke='rgb(79,79,79)' stroke-width='1' fill='none'/%3E%3C/svg%3E")`,
                backgroundSize: '400px 400px',
              }}
            />
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 xs:gap-8 lg:gap-4 py-6 xs:py-8 lg:py-4">
            <div className="relative z-20 lg:max-w-[600px] xl:max-w-[650px] px-2 xs:px-0">
              <h1 className="text-[1.75rem] xs:text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.25rem] xl:text-[3.75rem] leading-[1.15] font-display font-medium bg-gradient-to-r from-blue-400 via-blue-300 to-blue-200 text-transparent bg-clip-text mb-4 xs:mb-5 whitespace-nowrap">
                Ovation Digital Solutions
              </h1>
                  
              <p className="text-lg xs:text-xl lg:text-2xl text-slate-300 leading-relaxed mb-6 xs:mb-7 max-w-[650px] font-normal">
                At Ovation Digital Solutions, we believe great websites and applications shouldn&apos;t cost a fortune.
                Get enterprise-quality development that fits your budget and reaches every user.
              </p>
                  
              <div className="flex flex-wrap gap-4 xs:gap-5">
                <button 
                  onClick={handleGetStarted}
                  className="px-7 xs:px-8 py-3 xs:py-3.5 bg-blue-400 hover:bg-blue-500 text-slate-900 rounded-full font-semibold transition-colors text-base xs:text-lg"
                >
                  Contact Us
                </button>
                  
                <button 
                  onClick={handleLearnMore}
                  className="px-7 xs:px-8 py-3 xs:py-3.5 bg-slate-800/50 hover:bg-slate-700/50 text-slate-200 rounded-full font-semibold border border-slate-700/50 transition-colors text-base xs:text-lg"
                >
                  Learn More
                </button>
              </div>
            </div>

            <div className="relative w-full xs:w-[400px] sm:w-[450px] md:w-[550px] lg:w-[600px] xl:w-[650px] -right-4 xs:-right-8 lg:-right-12 mt-8 lg:mt-0">
              <Image 
                src="/mediaTrio2.png" 
                alt="Multimedia Device Mockup" 
                width={1200}
                height={1200}
                className="w-full h-auto object-contain relative z-10 transform rotate-[5deg] scale-105 hover:scale-100 transition-transform duration-500"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

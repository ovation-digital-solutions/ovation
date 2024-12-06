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
    <div className="bg-gradient-to-b from-slate-900 to-slate-800 min-h-screen flex flex-col">
      <div className="w-full border-b border-slate-700/50 backdrop-blur-sm bg-slate-900/50">
        <div className="flex flex-wrap justify-center items-center gap-3 xs:gap-4 sm:gap-6 py-3 xs:py-4 text-[10px] xs:text-xs sm:text-sm md:text-base text-slate-300">
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

      <div className="flex-1 flex items-center justify-center px-3 xs:px-4 sm:px-6 md:px-8 lg:px-10 relative overflow-hidden py-12 xs:py-16 sm:py-20 md:py-28 lg:py-36">
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="absolute inset-0 -left-1/2 -right-1/2">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/10 to-transparent rounded-[60px] blur-3xl"></div>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 xs:gap-8 sm:gap-10 lg:gap-12">
            <div className="relative z-20 w-full lg:w-1/2 px-2 xs:px-0 text-left">
              <h1 className="text-5xl xs:text-5xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl leading-[1.1] font-['Inter var',ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,'Noto Sans',sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji'] font-medium bg-gradient-to-r from-blue-300 via-blue-400 to-purple-300 text-transparent bg-clip-text mb-3 xs:mb-4 sm:mb-5">
                Ovation
                <br />
                Digital
                <br />
                Solutions
              </h1>
              
              <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-slate-200 leading-relaxed mb-5 xs:mb-6 sm:mb-8 lg:mb-10 max-w-[650px] font-light">
                At Ovation Digital Solutions, we believe great websites and applications shouldn&apos;t cost a fortune.
                Get enterprise-quality development that fits your budget and reaches every user.
              </p>
                  
              <div className="flex flex-row flex-wrap justify-start gap-3 xs:gap-4">
                <button 
                  onClick={handleGetStarted}
                  className="px-6 xs:px-7 sm:px-8 py-3 xs:py-3.5 sm:py-4
                    bg-blue-500/10 hover:bg-blue-500/20 
                    text-blue-300 hover:text-blue-200 
                    rounded-full font-medium transition-all duration-300 
                    text-base xs:text-lg
                    border border-blue-400/20 hover:border-blue-400/40
                    backdrop-blur-sm hover:-translate-y-0.5"
                >
                  Contact Us
                </button>
                  
                <button 
                  onClick={handleLearnMore}
                  className="px-6 xs:px-7 sm:px-8 py-3 xs:py-3.5 sm:py-4
                    bg-slate-800/30 hover:bg-slate-700/40 
                    text-slate-300 hover:text-slate-200 
                    rounded-full font-medium 
                    border border-slate-600/20 hover:border-slate-500/30 
                    transition-all duration-300 
                    text-base xs:text-lg
                    backdrop-blur-sm hover:-translate-y-0.5"
                >
                  Learn More
                </button>
              </div>
            </div>

            <div className="relative w-full lg:w-[52.5%] mt-6 xs:mt-8 sm:mt-10 lg:mt-0">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/10 to-transparent rounded-[42px] blur-2xl"></div>
              <Image 
                src="/mediaDuo2.png" 
                alt="Multimedia Device Mockup" 
                width={1365}
                height={1365}
                className="w-full h-auto object-contain relative z-10 transform hover:scale-[1.0525] transition-all duration-700 ease-out"
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

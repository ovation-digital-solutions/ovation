import React from 'react';

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
    <div className="bg-slate-900 min-h-[100vh] flex items-center px-4 sm:px-6 lg:px-8 relative">
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          background: `url("data:image/svg+xml,%3Csvg width='400' height='400' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0 L100 100 M100 0 L0 100' stroke='rgb(79,79,79)' stroke-width='1' fill='none'/%3E%3C/svg%3E")`,
          backgroundSize: '400px 400px',
        }}
      />
      <div className="container mx-auto max-w-3xl text-center relative z-10">
        <h1 className="text-[2.5rem] md:text-[2.5rem] leading-tight font-display bg-gradient-to-r from-blue-400 to-blue-200 text-transparent bg-clip-text mb-8">
          Professional Web Development
          <br />
          by Ovation Digital Solutions
        </h1>
            
        <p className="text-lg md:text-xl text-slate-400 leading-relaxed mb-8">
          At Ovation Digital Solutions, we believe great websites and applications shouldn&apos;t cost a fortune.
          Get enterprise-quality development that fits your budget and reaches every user.
        </p>
            
        <div className="flex flex-wrap gap-4 justify-center">
          <button 
            onClick={handleGetStarted}
            className="px-8 py-3 bg-blue-400 hover:bg-blue-500 text-slate-900 rounded-full font-medium transition-colors text-sm"
          >
            Contact Us
          </button>
              
          <button 
            onClick={handleLearnMore}
            className="px-8 py-3 bg-slate-800/50 hover:bg-slate-700/50 text-slate-200 rounded-full font-medium border border-slate-700/50 transition-colors text-sm"
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;

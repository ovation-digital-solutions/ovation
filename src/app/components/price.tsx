import React from 'react';

interface PriceProps {
  id?: string;
  onGetStarted?: () => void;
}

const Price: React.FC<PriceProps> = ({ id, onGetStarted }) => {
  const features = [
    "Responsive Design for All Devices",
    "SEO Optimization", 
    "Custom Domain Setup",
    "Contact Form Integration",
    "Google Analytics Integration",
    "Custom branding with your colors, assets, and media",
    "Beautiful photo galleries and image slideshows",
  ];

  return (
    <div id={id} className="bg-slate-900 text-white px-4 xs:px-6 sm:px-8 py-8 xs:py-10 sm:py-12 rounded-2xl xs:rounded-3xl shadow-lg max-w-[320px] xs:max-w-[400px] sm:max-w-[500px] md:max-w-[550px] lg:max-w-[600px] mx-auto my-24 xs:my-28 sm:my-32 md:my-36 relative">
      <div 
        className="absolute inset-0 opacity-[0.05] rounded-2xl xs:rounded-3xl"
        style={{
          background: `url("data:image/svg+xml,%3Csvg width='400' height='400' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0 L100 100 M100 0 L0 100' stroke='rgb(79,79,79)' stroke-width='1' fill='none'/%3E%3C/svg%3E")`,
          backgroundSize: '400px 400px',
        }}
      />
      
      <div className="relative">
        <h3 className="text-xl xs:text-2xl sm:text-2xl lg:text-3xl font-medium mb-4 xs:mb-5 sm:mb-6">Simple Pricing, Powerful Results</h3>
        
        <div className="flex items-baseline gap-1 xs:gap-2 mb-1">
          <span className="text-4xl xs:text-4xl sm:text-5xl lg:text-6xl font-bold">$499</span>
          <span className="text-lg xs:text-xl sm:text-xl lg:text-2xl">USD</span>
        </div>
        
        <p className="text-xs xs:text-sm text-gray-400 mb-4 xs:mb-5 sm:mb-6">plus local taxes</p>
        
        <ul className="space-y-2 xs:space-y-2.5 sm:space-y-3 mb-6 xs:mb-7 sm:mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2 xs:gap-3">
              <svg 
                className="w-4 h-4 xs:w-5 xs:h-5 text-blue-400 flex-shrink-0"
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M5 13l4 4L19 7" 
                />
              </svg>
              <span className="text-sm xs:text-base sm:text-lg text-gray-300">{feature}</span>
            </li>
          ))}
        </ul>

        <button 
          className="w-full py-3 xs:py-3.5 bg-blue-400 hover:bg-blue-500 text-slate-900 rounded-full font-medium transition-colors text-sm xs:text-base"
          onClick={onGetStarted}
        >
          Contact us
        </button>
        
        <div className="mt-4 xs:mt-5 sm:mt-6 text-xs xs:text-sm text-center text-gray-400">
          Once you contact us, we&apos;ll discuss your project requirements and create a tailored solution for your needs.
        </div>
      </div>
    </div>
  );
};

export default Price;

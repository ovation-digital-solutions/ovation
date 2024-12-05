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
    <div id={id} className="bg-white py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-3xl text-center">
        <h2 className="text-[2.5rem] md:text-[3rem] leading-tight font-display bg-gradient-to-r from-blue-600 to-blue-400 text-transparent bg-clip-text mb-12">
          Simple Pricing, Powerful Results
        </h2>
            
        <div className="mb-12">
          <span className="text-5xl font-bold text-slate-900">Starting at $499</span>
          <p className="text-slate-600 mt-4 text-lg">Everything you need to get started</p>
        </div>
            
        <div className="text-left max-w-lg mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center mb-6 text-lg">
              <svg 
                className="w-6 h-6 text-blue-500 mr-4"
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
              <span className="text-slate-700">{feature}</span>
            </div>
          ))}
        </div>

        <button 
          className="mt-12 px-10 py-4 bg-blue-400 hover:bg-blue-500 text-slate-900 rounded-full font-medium transition-colors text-base"
          onClick={onGetStarted}
        >
          Get Started Today
        </button>
      </div>
    </div>
  );
};

export default Price;

import React from 'react';
import { HiArrowUpRight } from 'react-icons/hi2';

const Work: React.FC = () => {
  const projects = [
    {
      title: "Online Shoe Store",
      description: "A modern shopping experience helping customers find their perfect pair of shoes with easy browsing and links to purchase.",
      link: "https://www.sneakar.io", 
      tags: [
        ["Increased Sales", "Higher Conversion"],  // First row
        ["Shopify"]  // Second row
      ]
    },
    {
      title: "Costa Rica Travel Guide",
      description: "A beautiful website showcasing Costa Rica's best tours and experiences, helping travelers plan their perfect vacation with easy booking.",
      link: "https://costa-rica-tours.vercel.app/",
      tags: [
        ["Increased Bookings", "Customer Reviews"],  // First row
        ["Travel Insights"]  // Second row
      ]
    }
  ];

  return (
    <section className="py-16 sm:py-24 md:py-32 lg:py-40 xl:py-48 bg-white relative">
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          background: `url("data:image/svg+xml,%3Csvg width='400' height='400' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h100v100H0z' fill='none' stroke='%23000' stroke-width='1'/%3E%3C/svg%3E")`,
          backgroundSize: '40px 40px',
        }}
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative">
        <h2 className="text-[1.5rem] xs:text-[1.75rem] sm:text-[2rem] md:text-[2.25rem] lg:text-[2.5rem] leading-tight font-display text-foreground mb-12 sm:mb-16 md:mb-20 lg:mb-24 border-b-2 border-custom-gray pb-4">
          Recent Work
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-16">
          {projects.map((project, index) => (
            <a 
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              className="block group"
            >
              <div className="p-4 sm:p-6 md:p-8 lg:p-10 rounded-xl border border-slate-900 hover:border-blue-400 transition-all duration-300 bg-slate-50 shadow-sm hover:shadow-md transform hover:-translate-y-1"
                   style={{ minHeight: '300px', height: 'auto', width: '100%' }}>
                <div className="flex justify-between items-start mb-4 sm:mb-6">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <HiArrowUpRight className="text-slate-400 group-hover:text-blue-400 transition-colors text-xl sm:text-2xl" />
                </div>
                <p className="text-slate-600 text-base sm:text-lg mb-6 sm:mb-8">
                  {project.description}
                </p>
                <div className="flex flex-col gap-2">
                  {project.tags.map((rowTags, rowIndex) => (
                    <div key={rowIndex} className="flex flex-wrap gap-2 justify-start">
                      {rowTags.map((tag, tagIndex) => (
                        <span 
                          key={tagIndex}
                          className="px-3 sm:px-4 py-1 bg-blue-100 text-blue-600 text-xs sm:text-sm rounded-full whitespace-nowrap"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;

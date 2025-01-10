import React from 'react';
import Link from 'next/link';

const Work: React.FC = () => {
  const projects = [
    {
      title: "Meridex AI",
      description: "An AI-powered platform transforming real estate investment decision-making by combining artificial intelligence with comprehensive property data for intelligent analysis and portfolio management.",
      externalLink: "https://www.meridexai.com",
      caseStudyLink: "/case-studies/meridex",
      tags: [
        ["AI Analysis", "Real Estate"],
        ["Portfolio Management"]
      ]
    },
    {
      title: "Event RSVP Platform",
      description: "A streamlined RSVP and event management platform helping organizers create and manage events with ease while providing a seamless experience for attendees.",
      externalLink: "https://crowdconnectrsvp.com/",
      caseStudyLink: "/case-studies/crowdconnect",
      tags: [
        ["Event Management", "RSVP System"],
        ["Real-time Updates"]
      ]
    },
    {
      title: "Online Shoe Store",
      description: "A modern shopping experience helping customers find their perfect pair of shoes with easy browsing and links to purchase.",
      externalLink: "https://www.sneakar.io",
      caseStudyLink: "/case-studies/sneakar",
      tags: [
        ["Increased Sales", "Higher Conversion"],
        ["Shopify"]
      ]
    },
    {
      title: "Costa Rica Travel Guide", 
      description: "A beautiful website showcasing Costa Rica's best tours and experiences, helping travelers plan their perfect vacation with easy booking.",
      externalLink: "https://www.saltnclouds.com/",
      caseStudyLink: "/case-studies/costa-rica",
      tags: [
        ["Increased Bookings", "Customer Reviews"],
        ["Travel Insights"]
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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative">
        <h2 className="text-[1.5rem] xs:text-[1.75rem] sm:text-[2rem] md:text-[2.25rem] lg:text-[2.5rem] leading-tight font-display text-foreground mb-12 sm:mb-16 md:mb-20 lg:mb-24 border-b-2 border-custom-gray pb-4">
          Recent Work
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="block group">
              <div className="p-6 rounded-xl border border-slate-900 hover:border-blue-400 transition-all duration-300 bg-slate-50 shadow-sm hover:shadow-md transform hover:-translate-y-1 flex flex-col">
                <div className="mb-3">
                  <h3 className="text-lg font-semibold group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                </div>
                <p className="text-slate-600 text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-col gap-2 mb-4">
                  {project.tags.map((rowTags, rowIndex) => (
                    <div key={rowIndex} className="flex flex-wrap gap-2 justify-start">
                      {rowTags.map((tag, tagIndex) => (
                        <span 
                          key={tagIndex}
                          className="px-3 py-1 bg-blue-100 text-blue-600 text-xs rounded-full whitespace-nowrap"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  ))}
                </div>
                
                <div className="flex gap-4 mt-auto">
                  <a 
                    href={project.externalLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    Visit Site →
                  </a>
                  {project.caseStudyLink && (
                    <Link
                      href={project.caseStudyLink}
                      className="text-sm text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      View Case Study →
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;

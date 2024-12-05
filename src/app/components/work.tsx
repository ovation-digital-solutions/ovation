import React from 'react';

const Work: React.FC = () => {
  const projects = [
    {
      title: "Online Shoe Store",
      description: "A modern shopping experience helping customers find their perfect pair of shoes with easy browsing and secure checkout.",
      link: "https://www.sneakar.io", 
      tags: ["Increased Sales", "Higher Conversion", "Shopify"]
    },
    {
      title: "Costa Rica Travel Guide",
      description: "A beautiful website showcasing Costa Rica's best tours and experiences, helping travelers plan their perfect vacation with easy booking.",
      link: "https://costa-rica-tours.vercel.app/",
      tags: ["Increased Bookings", "Customer Reviews", "Travel Insights"]
    }
  ];

  return (
    <section className="py-32 bg-white relative">
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          background: `url("data:image/svg+xml,%3Csvg width='400' height='400' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h100v100H0z' fill='none' stroke='%23000' stroke-width='1'/%3E%3C/svg%3E")`,
          backgroundSize: '40px 40px',
        }}
      />
      <div className="container mx-auto px-4 max-w-6xl relative">
        <h2 className="text-[1.5rem] md:text-[2rem] leading-tight font-display text-foreground mb-16 border-b-2 border-custom-gray">
          Recent Work
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <a 
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              className="block group"
            >
              <div className="p-8 rounded-xl border border-slate-900 hover:border-blue-400 transition-colors bg-white shadow-sm hover:shadow-md">
                <h3 className="text-2xl font-semibold mb-4 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 text-lg mb-6">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-4 py-2 bg-slate-100 text-slate-600 text-sm rounded-full"
                    >
                      {tag}
                    </span>
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

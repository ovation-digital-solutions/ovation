import Link from 'next/link';

const CostaRica = () => {
  return (
    <div className="min-h-screen bg-slate-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <Link 
          href="/" 
          className="inline-block mb-8 text-blue-400 hover:text-blue-300 transition-colors"
        >
          ← Back to Home
        </Link>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-display bg-gradient-to-r from-blue-400 to-blue-200 text-transparent bg-clip-text mb-8">
          Costa Rica Travel Guide: Local Tour Platform
        </h1>
        
        <div className="prose prose-invert prose-blue max-w-none">
          <div className="text-slate-300 mb-8">
            <strong className="text-blue-300">Client:</strong> Local Costa Rican Tour Operator<br/>
            <strong className="text-blue-300">Objective:</strong> Develop a high-quality, cost-effective web platform showcasing unique, locally-guided adventure tours
          </div>

          <h2 className="text-xl sm:text-2xl text-blue-400 mt-8 mb-4">Unique Value Proposition</h2>
          <ul className="text-slate-300">
            <li>Founded by two native Costa Rican citizens</li>
            <li>Over 10 years of professional touring experience</li>
            <li>Specialized in nature exploration, cultural immersion, coffee heritage tours, and authentic local experiences</li>
          </ul>

          <h2 className="text-xl sm:text-2xl text-blue-400 mt-8 mb-4">Technical Solution</h2>
          
          <h3 className="text-lg text-blue-300 mt-6 mb-3">Web Development Strategy</h3>
          <ul className="text-slate-300">
            <li>Built with Next.js for robust, scalable architecture</li>
            <li>Focus on professional, cost-efficient digital presence</li>
            <li>Emphasis on building trust with potential tourists</li>
          </ul>

          <h3 className="text-lg text-blue-300 mt-6 mb-3">Core Features</h3>
          <ul className="text-slate-300">
            <li>Fully responsive, mobile-optimized design</li>
            <li>Direct contact integration with one-click communication</li>
            <li>Image carousel showcasing diverse tour experiences</li>
            <li>Testimonials section for social proof</li>
          </ul>

          <h2 className="text-xl sm:text-2xl text-blue-400 mt-8 mb-4">Technical Optimizations</h2>
          <ul className="text-slate-300">
            <li>Comprehensive SEO implementation</li>
            <li>Lightweight, fast-loading design</li>
            <li>Optimized image handling</li>
            <li>Minimal external dependencies</li>
          </ul>

          <h2 className="text-xl sm:text-2xl text-blue-400 mt-8 mb-4">Target Audience</h2>
          <ul className="text-slate-300">
            <li>Adventure-seeking tourists</li>
            <li>Culturally curious travelers</li>
            <li>Nature and wildlife enthusiasts</li>
            <li>Referral-based clientele</li>
          </ul>

          <h2 className="text-xl sm:text-2xl text-blue-400 mt-8 mb-4">Project Outcomes</h2>
          <ul className="text-slate-300">
            <li>Enhanced online visibility and professional digital presence</li>
            <li>Improved customer communication channels</li>
            <li>Cost-effective, scalable web solution</li>
            <li>Foundation for future booking system integration</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CostaRica;

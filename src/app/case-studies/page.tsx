import Link from 'next/link';

export default function CaseStudies() {
  return (
    <div className="min-h-screen bg-slate-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-display bg-gradient-to-r from-blue-400 to-blue-200 text-transparent bg-clip-text mb-12">
          Case Studies
        </h1>
        
        <div className="grid gap-8">
          <Link 
            href="/case-studies/sneakar"
            className="block p-6 bg-slate-800/50 rounded-lg border border-slate-700/50 hover:border-blue-400/50 transition-colors"
          >
            <h2 className="text-xl sm:text-2xl text-blue-400 mb-3">Sneakar</h2>
            <p className="text-slate-300">
              How we built a revolutionary sneaker marketplace platform that connects collectors and enthusiasts...
            </p>
            <span className="inline-block mt-4 text-blue-400 hover:text-blue-300">
              Read more →
            </span>
          </Link>
          
          {/* Add more case study links as needed */}
        </div>
      </div>
    </div>
  );
}

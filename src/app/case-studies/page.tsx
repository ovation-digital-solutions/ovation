import Link from 'next/link';

export default function CaseStudies() {
  return (
    <div className="min-h-screen bg-slate-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/"
          className="inline-block mb-8 text-blue-400 hover:text-blue-300"
        >
          ← Back to Home
        </Link>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-display bg-gradient-to-r from-blue-400 to-blue-200 text-transparent bg-clip-text mb-12">
          Case Studies
        </h1>
        
        <div className="grid gap-8">
          <Link 
            href="/case-studies/meridex"
            className="block p-6 bg-slate-800/50 rounded-lg border border-slate-700/50 hover:border-blue-400/50 transition-colors"
          >
            <h2 className="text-xl sm:text-2xl text-blue-400 mb-3">Meridex AI</h2>
            <p className="text-slate-300">
              Building an AI-powered platform that transforms real estate investment decision-making through intelligent analysis and portfolio management...
            </p>
            <span className="inline-block mt-4 text-blue-400 hover:text-blue-300">
              Read more →
            </span>
          </Link>

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

          <Link 
            href="/case-studies/costa-rica"
            className="block p-6 bg-slate-800/50 rounded-lg border border-slate-700/50 hover:border-blue-400/50 transition-colors"
          >
            <h2 className="text-xl sm:text-2xl text-blue-400 mb-3">Costa Rica Travel Guide</h2>
            <p className="text-slate-300">
              Creating an intuitive travel platform that simplifies vacation planning and showcases Costa Rica&apos;s diverse experiences...
            </p>
            <span className="inline-block mt-4 text-blue-400 hover:text-blue-300">
              Read more →
            </span>
          </Link>

          <Link 
            href="/case-studies/crowdconnect"
            className="block p-6 bg-slate-800/50 rounded-lg border border-slate-700/50 hover:border-blue-400/50 transition-colors"
          >
            <h2 className="text-xl sm:text-2xl text-blue-400 mb-3">Crowd Connect RSVP</h2>
            <p className="text-slate-300">
              Building an enterprise-grade event management platform that streamlines seminar and event registration processes...
            </p>
            <span className="inline-block mt-4 text-blue-400 hover:text-blue-300">
              Read more →
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

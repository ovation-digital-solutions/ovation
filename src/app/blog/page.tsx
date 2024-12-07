import Link from 'next/link';

export default function Blog() {
  return (
    <div className="min-h-screen bg-slate-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/"
          className="inline-block mb-8 text-blue-400 hover:text-blue-300"
        >
          ← Back to Home
        </Link>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-display bg-gradient-to-r from-blue-400 to-blue-200 text-transparent bg-clip-text mb-12 pb-1">
          Blog Posts
        </h1>
        
        <div className="grid gap-8">
          <Link 
            href="/blog/word-of-mouth-conversion"
            className="block p-6 bg-slate-800/50 rounded-lg border border-slate-700/50 hover:border-blue-400/50 transition-colors"
          >
            <h2 className="text-xl sm:text-2xl text-blue-400 mb-3">Converting Word-of-Mouth Referrals</h2>
            <p className="text-slate-300">
              Why &quot;Check Out My Website&quot; beats &quot;Here&apos;s My Phone Number&quot; for converting referrals...
            </p>
            <span className="inline-block mt-4 text-blue-400 hover:text-blue-300">
              Read more →
            </span>
          </Link>

          <Link 
            href="/blog/smallbizguide"
            className="block p-6 bg-slate-800/50 rounded-lg border border-slate-700/50 hover:border-blue-400/50 transition-colors"
          >
            <h2 className="text-xl sm:text-2xl text-blue-400 mb-3">Small Business Website Guide</h2>
            <p className="text-slate-300">
              What you actually need for your small business website, and what you don&apos;t...
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

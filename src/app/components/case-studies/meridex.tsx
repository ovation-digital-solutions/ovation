import Link from 'next/link';

const Meridex = () => {
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
          Meridex AI: Real Estate Portfolio & Due Diligence Platform
        </h1>
        
        <div className="prose prose-invert prose-blue max-w-none">
          <div className="text-slate-300 mb-8">
            <strong className="text-blue-300">Client:</strong> Real Estate Investment Platform<br/>
            <strong className="text-blue-300">Objective:</strong> Create an AI-powered platform for streamlined real estate investment analysis and portfolio management
          </div>

          <h2 className="text-xl sm:text-2xl text-blue-400 mt-8 mb-4">The Challenge</h2>
          <ul className="text-slate-300">
            <li>Streamline property research and analysis process</li>
            <li>Enable portfolio comparison and investment strategy alignment</li>
            <li>Automate comprehensive investment metrics calculation</li>
            <li>Simplify due diligence workflow</li>
          </ul>

          <h2 className="text-xl sm:text-2xl text-blue-400 mt-8 mb-4">Technical Solution</h2>
          
          <h3 className="text-lg text-blue-300 mt-6 mb-3">Core Features</h3>
          <ul className="text-slate-300">
            <h4 className="text-blue-200 mt-2">Analytics Dashboard</h4>
            <li>Real-time tracking of property analysis activity</li>
            <li>Key metrics monitoring and visualization</li>
            <li>Interactive progression graphs</li>

            <h4 className="text-blue-200 mt-4">Property Search & Discovery</h4>
            <li>Customizable property search with detailed filtering</li>
            <li>Real-time Realtor.com data integration</li>
            <li>Multi-property selection and comparison</li>

            <h4 className="text-blue-200 mt-4">Intelligent Comparison</h4>
            <li>Side-by-side property analysis</li>
            <li>Portfolio upload and analysis capabilities</li>
            <li>Investment potential evaluation</li>

            <h4 className="text-blue-200 mt-4">AI-Powered Analysis</h4>
            <li>Natural language property discussion</li>
            <li>Interactive chat interface for detailed analysis</li>
            <li>Comprehensive investment calculations</li>
          </ul>

          <h2 className="text-xl sm:text-2xl text-blue-400 mt-8 mb-4">Technical Architecture</h2>
          <ul className="text-slate-300">
            <li>Frontend: Next.js with TypeScript</li>
            <li>Backend: RESTful API architecture</li>
            <li>Database: PostgreSQL</li>
            <li>Key Integrations:</li>
            <ul>
              <li>Realtor.com API for property data</li>
              <li>Anthropic API for AI analysis</li>
              <li>Stripe for subscription management</li>
            </ul>
          </ul>

          <h2 className="text-xl sm:text-2xl text-blue-400 mt-8 mb-4">Future Development</h2>
          <ul className="text-slate-300">
            <li>Aerial property search features</li>
            <li>Advanced AI analysis capabilities</li>
            <li>Additional data source integration</li>
            <li>Enhanced portfolio management features</li>
            <li>Expanded market analysis tools</li>
          </ul>

          <h2 className="text-xl sm:text-2xl text-blue-400 mt-8 mb-4">Project Impact</h2>
          <ul className="text-slate-300">
            <li>Streamlined investment decision-making process</li>
            <li>Enhanced due diligence capabilities</li>
            <li>Improved portfolio analysis and management</li>
            <li>Efficient property comparison and evaluation</li>
            <li>AI-powered insights for better investment decisions</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Meridex;

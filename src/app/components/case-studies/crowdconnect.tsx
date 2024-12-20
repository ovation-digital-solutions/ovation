import Link from 'next/link';

const CrowdConnect = () => {
  return (
    <div className="min-h-screen bg-slate-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <Link 
          href="/" 
          className="inline-block mb-8 text-blue-400 hover:text-blue-300 transition-colors"
        >
          ← Back to Home
        </Link>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-display bg-gradient-to-r from-blue-400 to-blue-200 text-transparent bg-clip-text mb-8 leading-loose py-2">
          Crowd Connect RSVP: Enterprise-Grade Event Management Platform
        </h1>
        
        <div className="prose prose-invert prose-blue max-w-none">
          <div className="text-slate-300 mb-8">
            <strong className="text-blue-300">Client:</strong> Enterprise Event Management Solution<br/>
            <strong className="text-blue-300">Objective:</strong> Create a sophisticated platform connecting admins, agents, and attendees in a seamless event management ecosystem
          </div>

          <h2 className="text-xl sm:text-2xl text-blue-400 mt-8 mb-4">Business Challenge</h2>
          <ul className="text-slate-300">
            <li>Complex hierarchy: admin overseeing agents who manage seminars for attendees</li>
            <li>Need for distinct portals with specific features for each user type</li>
            <li>Manual tracking and coordination between different user levels</li>
            <li>Complex reporting requirements across the entire platform</li>
            <li>Need for seamless communication between all parties</li>
          </ul>

          <h2 className="text-xl sm:text-2xl text-blue-400 mt-8 mb-4">Technical Solution</h2>
          
          <h3 className="text-lg text-blue-300 mt-6 mb-3">Architecture</h3>
          <ul className="text-slate-300">
            <li>Frontend: React with TypeScript, multiple specialized portals</li>
            <li>Backend: Node.js/Express with TypeScript</li>
            <li>Database: MongoDB with multi-tenant architecture</li>
            <li>Authentication: JWT with role-based permissions</li>
          </ul>

          <h3 className="text-lg text-blue-300 mt-6 mb-3">User Portals</h3>
          <ul className="text-slate-300">
            <h4 className="text-blue-200 mt-2">Admin Portal</h4>
            <li>Global dashboard for platform oversight</li>
            <li>Seminar creation and management dashboard</li>
            <li>Agent management and onboarding tools</li>
            <li>System-wide analytics and reporting</li>
            <li>Platform configuration and settings</li>
        

            <h4 className="text-blue-200 mt-4">Agent Portal</h4>
            <li>Attendee management tools</li>
            <li>Custom branding and event settings</li>
            <li>Communication center for attendee engagement</li>
            <li>Performance analytics for their events</li>

            <h4 className="text-blue-200 mt-4">Attendee Portal</h4>
            <li>Personalized dashboard showing registered seminars</li>
            <li>Easy seminar discovery and registration</li>
            <li>User-friendly event browsing and filtering</li>
            <li>Simple email and text notifications</li>
          </ul>

          <h2 className="text-xl sm:text-2xl text-blue-400 mt-8 mb-4">Technical Innovations</h2>
          <ul className="text-slate-300">
            <li>Three-tiered access control system</li>
            <li>Real-time notifications across all user levels</li>
            <li>Intelligent data segregation and sharing</li>
            <li>Custom analytics engine for each user type</li>
            <li>Automated workflow management</li>
          </ul>

          <h2 className="text-xl sm:text-2xl text-blue-400 mt-8 mb-4">Current Status</h2>
          <ul className="text-slate-300">
            <li>Successfully launched application replacing legacy software</li>
            <li>Modern, intuitive interface improving user experience</li>
            <li>Streamlined platform unifying previously fragmented workflows</li>
            <li>Early user feedback driving iterative improvements</li>
            <li>Foundation built for future feature expansion</li>
          </ul>

          <h2 className="text-xl sm:text-2xl text-blue-400 mt-8 mb-4">Future Enhancements</h2>
          <ul className="text-slate-300">
            <li>Mobile applications for all user types</li>
            <li>Advanced analytics with predictive modeling</li>
            <li>Enhanced social features for attendees</li>
            <li>Automated marketing tools for agents</li>
            <li>Extended API ecosystem</li>
            <li>Virtual event integration capabilities</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CrowdConnect;

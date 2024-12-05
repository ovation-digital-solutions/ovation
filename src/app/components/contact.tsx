import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="bg-slate-900 min-h-[100vh] flex flex-col justify-between px-4 sm:px-6 lg:px-8">
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          background: `url("data:image/svg+xml,%3Csvg width='400' height='400' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0 L100 100 M100 0 L0 100' stroke='rgb(79,79,79)' stroke-width='1' fill='none'/%3E%3C/svg%3E")`,
          backgroundSize: '400px 400px',
        }}
      />
      <div className="container mx-auto max-w-3xl pt-24">
        <h2 className="text-2xl font-display bg-gradient-to-r from-blue-400 to-blue-200 text-transparent bg-clip-text mb-8">
          Get In Touch
        </h2>
        
        <form className="space-y-6">
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2.5 bg-slate-800/50 border border-slate-700/50 rounded-lg text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2.5 bg-slate-800/50 border border-slate-700/50 rounded-lg text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-2">Message</label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2.5 bg-slate-800/50 border border-slate-700/50 rounded-lg text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
              ></textarea>
            </div>
          </div>
          
          <div className="flex justify-end">
            <button 
              type="submit"
              className="px-8 py-2.5 bg-blue-400 hover:bg-blue-500 text-slate-900 rounded-full font-medium transition-colors"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>

      <footer className="container mx-auto max-w-2xl py-8 mt-16 border-t border-slate-800">
        <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm text-slate-400">
          <a href="/blog" className="hover:text-blue-400 transition-colors">Blog</a>
          <a href="/case-studies" className="hover:text-blue-400 transition-colors">Case Studies</a>
          <a href="/about" className="hover:text-blue-400 transition-colors">About Us</a>
          <div className="flex items-center gap-4">
            <a href="https://twitter.com" className="hover:text-blue-400 transition-colors">
              Twitter
            </a>
            <a href="https://linkedin.com" className="hover:text-blue-400 transition-colors">
              LinkedIn
            </a>
            <a href="https://github.com" className="hover:text-blue-400 transition-colors">
              GitHub
            </a>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Contact;

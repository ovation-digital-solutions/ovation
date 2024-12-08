import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import Link from 'next/link';

interface ContactProps {
  id?: string;
}

const Contact: React.FC<ContactProps> = ({ id }) => {
  const [state, handleSubmit] = useForm("mpwzlklj");

  if (state.succeeded) {
    return (
      <div className="bg-slate-900 min-h-screen flex items-center justify-center px-4">
        <p className="text-blue-400 text-xl text-center">Thanks for your message! We&apos;ll be in touch soon.</p>
      </div>
    );
  }

  return (
    <div id={id} className="bg-slate-900 min-h-screen flex flex-col px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          background: `url("data:image/svg+xml,%3Csvg width='400' height='400' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0 L100 100 M100 0 L0 100' stroke='rgb(79,79,79)' stroke-width='1' fill='none'/%3E%3C/svg%3E")`,
          backgroundSize: '400px 400px',
        }}
      />
      <div className="container mx-auto max-w-3xl flex-grow">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-display bg-gradient-to-r from-blue-400 to-blue-200 text-transparent bg-clip-text mb-6 sm:mb-8">
          Get In Touch
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
          <div className="space-y-3 sm:space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div>
                <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-slate-400 mb-1.5 sm:mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-3 sm:px-4 py-2 sm:py-2.5 bg-slate-800/50 border border-slate-700/50 rounded-lg text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base"
                />
                <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-400 text-sm mt-1" />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-slate-400 mb-1.5 sm:mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-3 sm:px-4 py-2 sm:py-2.5 bg-slate-800/50 border border-slate-700/50 rounded-lg text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base"
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-400 text-sm mt-1" />
              </div>
            </div>
            
            <div>
              <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-slate-400 mb-1.5 sm:mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-3 sm:px-4 py-2 sm:py-2.5 bg-slate-800/50 border border-slate-700/50 rounded-lg text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base"
              ></textarea>
              <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-400 text-sm mt-1" />
            </div>
          </div>
          
          <div className="flex justify-end">
            <button 
              type="submit"
              disabled={state.submitting}
              className="w-full sm:w-auto px-6 sm:px-8 py-2 sm:py-2.5 bg-blue-400 hover:bg-blue-500 text-slate-900 rounded-full font-medium transition-colors text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {state.submitting ? 'Sending...' : 'Send Message'}
            </button>
          </div>
        </form>
      </div>

      <footer className="container mx-auto max-w-2xl mt-16 pt-8 border-t border-slate-800">
        <nav className="grid grid-cols-1 sm:flex sm:flex-wrap justify-center gap-y-4 sm:gap-x-8 text-sm text-slate-400 pb-8">
          <Link href="/blog" className="text-center hover:text-blue-400 transition-colors">Blog</Link>
          <Link href="/case-studies" className="text-center hover:text-blue-400 transition-colors">Case Studies</Link>
          <Link href="/about" className="text-center hover:text-blue-400 transition-colors">About Us</Link>
        </nav>
        <p className="text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Ovation Digital Solutions. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Contact;

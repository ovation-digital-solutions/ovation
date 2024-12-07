import Link from 'next/link';

const SmallBizGuide = () => {
  return (
    <div className="min-h-screen bg-slate-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <Link 
          href="/blog" 
          className="inline-block mb-8 text-blue-400 hover:text-blue-300 transition-colors"
        >
          ← Back to Blogs
        </Link>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-display bg-gradient-to-r from-blue-400 to-blue-200 text-transparent bg-clip-text mb-8">
          The Small Business Website Starter Guide: What You Actually Need (And What You Don&apos;t)
        </h1>
        
        <div className="prose prose-invert prose-blue max-w-none">
          <div className="text-slate-300 mb-8">
            <strong className="text-blue-300">Published:</strong> January 22, 2024<br/>
            <strong className="text-blue-300">Author:</strong> Ovation Digital Solutions
          </div>

          <p className="text-slate-300">
            In today&apos;s digital-first world, having a website isn&apos;t just an option for small businesses—it&apos;s essential. But with so many features, plugins, and options available, how do you know what&apos;s actually worth your investment? At Ovation Digital Solutions, we&apos;ve helped all kinds of small businesses build their perfect web presence, and we&apos;re sharing our insights on what really matters.
          </p>

          <h2 className="text-xl sm:text-2xl text-blue-400 mt-8 mb-4">The Essential Elements Every Small Business Website Needs</h2>

          <h3 className="text-lg text-blue-300 mt-6 mb-3">1. Clear Navigation and Call-to-Actions</h3>
          <p className="text-slate-300">Your website should answer three questions within seconds:</p>
          <ul className="text-slate-300">
            <li>What do you offer?</li>
            <li>How can customers contact you?</li>
            <li>What should they do next?</li>
          </ul>
          <p className="text-slate-300">Forget fancy animations and focus on clarity. Your navigation should be simple and your call-to-actions obvious.</p>

          <h3 className="text-lg text-blue-300 mt-6 mb-3">2. Mobile-First Design</h3>
          <p className="text-slate-300">Over 60% of web traffic comes from mobile devices. Your website needs to:</p>
          <ul className="text-slate-300">
            <li>Load quickly on mobile networks</li>
            <li>Be easy to navigate with one thumb</li>
            <li>Have clickable buttons and readable text</li>
            <li>Display properly on all screen sizes</li>
          </ul>

          <h2 className="text-xl sm:text-2xl text-blue-400 mt-8 mb-4">Features That Can Wait</h2>
          <ul className="text-slate-300">
            <li>Complex booking systems - Start with a simple contact form</li>
            <li>Blog section - Add when you have time to maintain it</li>
            <li>Live chat - Unless you have dedicated staff</li>
            <li>Custom apps - Add only when business growth justifies it</li>
          </ul>

          <h2 className="text-xl sm:text-2xl text-blue-400 mt-8 mb-4">Investment Priorities</h2>
          
          <h3 className="text-lg text-blue-300 mt-6 mb-3">Spend Money On:</h3>
          <ul className="text-slate-300">
            <li>Professional hosting</li>
            <li>Security certificates (SSL)</li>
            <li>Quality images</li>
            <li>Mobile optimization</li>
            <li>Fast loading speeds</li>
          </ul>

          <h3 className="text-lg text-blue-300 mt-6 mb-3">Save Money On:</h3>
          <ul className="text-slate-300">
            <li>Complex animations</li>
            <li>Custom fonts</li>
            <li>Video backgrounds</li>
            <li>Excessive plugins</li>
            <li>Over-complicated designs</li>
          </ul>

          <h2 className="text-xl sm:text-2xl text-blue-400 mt-8 mb-4">Conclusion</h2>
          <p className="text-slate-300">
            Your small business website doesn&apos;t need to be complicated to be effective. Focus on the essentials that drive customer action, and add complexity only when it serves a clear business purpose.
          </p>
          
          <p className="text-slate-300 mt-6">
            Ready to build a website that works for your small business? Contact Ovation Digital Solutions for a free consultation. We specialize in creating effective, affordable websites that help small businesses grow.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SmallBizGuide;

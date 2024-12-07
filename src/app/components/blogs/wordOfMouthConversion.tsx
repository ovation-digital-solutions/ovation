import Link from 'next/link';

const WordOfMouthConversion = () => {
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
          Converting Word-of-Mouth Referrals: Why &quot;Check Out My Website&quot; Beats &quot;Here&apos;s My Phone Number&quot;
        </h1>
        
        <div className="prose prose-invert prose-blue max-w-none">
          <div className="text-slate-300 mb-8">
            <strong className="text-blue-300">Published:</strong> January 29, 2024<br/>
            <strong className="text-blue-300">Author:</strong> Ovation Digital Solutions
          </div>

          <p className="text-slate-300">
            You&apos;ve done great work, and your clients are spreading the word. But there&apos;s a huge difference between someone saying &quot;I&apos;ll give you their number&quot; and &quot;Check out their website.&quot; At Ovation Digital Solutions, we&apos;ve helped service providers turn casual referrals into paying clients through professional websites. Here&apos;s why - and how - to make it work for you.
          </p>

          <h2 className="text-xl sm:text-2xl text-blue-400 mt-8 mb-4">The New Word-of-Mouth Journey</h2>

          <h3 className="text-lg text-blue-300 mt-6 mb-3">The Old Way:</h3>
          <ol className="text-slate-300">
            <li>Client recommends you</li>
            <li>Gives your phone number</li>
            <li>Potential client might call</li>
            <li>You explain everything from scratch</li>
            <li>Maybe they book, maybe they don&apos;t</li>
          </ol>

          <h3 className="text-lg text-blue-300 mt-6 mb-3">The Better Way:</h3>
          <ol className="text-slate-300">
            <li>Client recommends you</li>
            <li>Shares your website link</li>
            <li>Potential client browses your work</li>
            <li>Gets all their questions answered</li>
            <li>Books directly through your site</li>
          </ol>

          <h2 className="text-xl sm:text-2xl text-blue-400 mt-8 mb-4">Why Referrals Need a Professional Website</h2>

          <h3 className="text-lg text-blue-300 mt-6 mb-3">Trust Verification</h3>
          <p className="text-slate-300">When someone gets your name from a friend:</p>
          <ul className="text-slate-300">
            <li>They want to verify you&apos;re established</li>
            <li>They look for examples of your work</li>
            <li>They check your professional experience</li>
            <li>They read other client experiences</li>
            <li>They assess your professionalism</li>
          </ul>

          <h3 className="text-lg text-blue-300 mt-6 mb-3">Easy Next Steps</h3>
          <p className="text-slate-300">Turn &quot;I&apos;ll think about it&quot; into &quot;I&apos;ll book now&quot; with:</p>
          <ul className="text-slate-300">
            <li>Clear service descriptions</li>
            <li>Transparent pricing</li>
            <li>Easy booking process</li>
            <li>Professional portfolio</li>
            <li>Instant communication options</li>
          </ul>

          <h2 className="text-xl sm:text-2xl text-blue-400 mt-8 mb-4">Essential Website Elements for Referral Conversion</h2>

          <h3 className="text-lg text-blue-300 mt-6 mb-3">1. Strong Homepage</h3>
          <p className="text-slate-300">Must answer immediately:</p>
          <ul className="text-slate-300">
            <li>What exactly you do</li>
            <li>Who you serve</li>
            <li>Why you&apos;re trusted</li>
            <li>How to get started</li>
            <li>What others say about you</li>
          </ul>

          <h3 className="text-lg text-blue-300 mt-6 mb-3">2. Clear Service Information</h3>
          <ul className="text-slate-300">
            <li>Detailed service descriptions</li>
            <li>Pricing transparency</li>
            <li>Process explanation</li>
            <li>FAQs</li>
            <li>Booking information</li>
          </ul>

          <h3 className="text-lg text-blue-300 mt-6 mb-3">3. Trust Builders</h3>
          <ul className="text-slate-300">
            <li>Client testimonials</li>
            <li>Before/after examples</li>
            <li>Professional credentials</li>
            <li>Awards/recognition</li>
            <li>Social proof</li>
          </ul>

          <h3 className="text-lg text-blue-300 mt-6 mb-3">4. Easy Contact Options</h3>
          <ul className="text-slate-300">
            <li>Online booking</li>
            <li>Contact forms</li>
            <li>Phone number</li>
            <li>Email address</li>
            <li>Response time expectations</li>
          </ul>

          

          <h2 className="text-xl sm:text-2xl text-blue-400 mt-8 mb-4">Next Steps: Turn Referrals Into Revenue</h2>
          <p className="text-slate-300">
            Your word-of-mouth reputation is gold - but a professional website is how you turn that gold into revenue. Ready to convert more referrals? Contact Ovation Digital Solutions for a free consultation. We&apos;ll help you create a website that turns &quot;I know someone&quot; into &quot;I just booked them.&quot;
          </p>

          <p className="text-slate-300 mt-6 italic">
            Ovation Digital Solutions specializes in creating websites that convert word-of-mouth referrals into paying clients. Contact us today to discuss how we can help grow your referral business.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WordOfMouthConversion;

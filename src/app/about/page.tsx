import Link from 'next/link';

export default function About() {
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
          About Us
        </h1>
        
        <div className="prose prose-invert prose-blue max-w-none">
          <div className="space-y-8">
            <section>
              <h2 className="text-xl sm:text-2xl text-blue-400 mb-4">Our Mission</h2>
              <p className="text-slate-300">
                At Ovation Digital Solutions, we&apos;re on a mission to make enterprise-quality web development accessible to businesses of all sizes. We believe that great websites and applications shouldn&apos;t come with an enterprise-level price tag.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl text-blue-400 mb-4">What Sets Us Apart</h2>
              <div className="grid gap-6">
                <div className="p-6 bg-slate-800/50 rounded-lg border border-slate-700/50">
                  <h3 className="text-lg text-blue-300 mb-2">Affordable Excellence</h3>
                  <p className="text-slate-300">
                    We&apos;ve optimized our development process to deliver high-quality solutions while keeping costs manageable for small and medium-sized businesses.
                  </p>
                </div>

                <div className="p-6 bg-slate-800/50 rounded-lg border border-slate-700/50">
                  <h3 className="text-lg text-blue-300 mb-2">User-Centric Design</h3>
                  <p className="text-slate-300">
                    Every project begins with understanding your users&apos; needs, ensuring that the final product not only looks great but delivers real value to your customers.
                  </p>
                </div>

                <div className="p-6 bg-slate-800/50 rounded-lg border border-slate-700/50">
                  <h3 className="text-lg text-blue-300 mb-2">Personal Attention</h3>
                  <p className="text-slate-300">
                    Unlike large agencies, we provide dedicated one-on-one service throughout your project. You&apos;ll work directly with our experienced team members who truly care about your success.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl text-blue-400 mb-4">Our Process</h2>
              <p className="text-slate-300 mb-6">
                We believe in transparency and collaboration throughout the development process:
              </p>
              <ol className="list-decimal list-inside text-slate-300 space-y-4">
                <li>Initial consultation to understand your needs and goals</li>
                <li>Detailed proposal and project scope development</li>
                <li>Regular updates and milestone reviews</li>
                <li>Quality assurance and testing</li>
                <li>Launch support and ongoing maintenance options</li>
              </ol>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl text-blue-400 mb-4">Ready to Start?</h2>
              <p className="text-slate-300">
                Whether you&apos;re looking to build a new website, improve an existing one, or discuss a custom project, we&apos;re here to help. Contact us to schedule a free consultation and learn how we can help bring your digital vision to life.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

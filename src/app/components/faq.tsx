import React from 'react';

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "How long does it take to build a website?",
      answer: "Typically, we can complete a standard website within 2-4 weeks. The exact timeline depends on the complexity of your project and how quickly we receive feedback and content."
    },
    {
      question: "What's included in the starting price?",
      answer: "Our starting package includes responsive design, SEO optimization, custom domain setup, contact form integration, and Google Analytics. We'll also implement your branding, colors, and media assets."
    },
    {
      question: "Do you provide ongoing support?",
      answer: "Yes! We offer ongoing maintenance and support packages to keep your website secure, up-to-date, and performing optimally."
    },
    {
      question: "Can I update the website myself?",
      answer: "Absolutely! We build our websites with user-friendly content management systems, allowing you to make basic updates and content changes independently."
    },
    {
      question: "What if I need additional features later?",
      answer: "We can always add new features to your website as your business grows. We'll provide a clear quote for any additional functionality you need."
    }
  ];

  return (
    <div className="bg-slate-50 py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-[2.5rem] md:text-[3rem] leading-tight font-display bg-gradient-to-r from-blue-600 to-blue-400 text-transparent bg-clip-text mb-12 text-center">
          Frequently Asked Questions
        </h2>
        
        <div className="space-y-8">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-slate-200 pb-8">
              <h3 className="text-xl font-medium text-slate-900 mb-4">
                {faq.question}
              </h3>
              <p className="text-slate-600 text-lg leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;

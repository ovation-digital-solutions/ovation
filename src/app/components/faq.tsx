import React from 'react';

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "How long does it take to build a website?",
      answer: "Simple websites can be completed in less than a week, while more complex projects may take longer. The exact timeline depends on your specific requirements and how quickly we receive feedback and content."
    },
    {
      question: "What's included in the starting price?", 
      answer: "Our starting package includes responsive design, SEO optimization, custom domain setup, contact form integration, and Google Analytics. We'll also implement your branding, colors, and media assets."
    },
    {
      question: "Do you provide ongoing support?",
      answer: "Yes! We offer ongoing maintenance to keep your website secure, up-to-date, and performing optimally."
    },
    {
      question: "Can I update the website myself?",
      answer: "We handle all website updates and content changes for you to ensure quality and consistency. Just let us know what changes you need and we'll take care of them promptly."
    },
    {
      question: "What if I need additional features later?",
      answer: "We can always add new features to your website as your business grows. We'll provide a clear quote for any additional functionality you need."
    },
    {
      question: "Are hosting and domain costs included?",
      answer: "While hosting and domain registration costs are separate from our development fees, we'll help you choose and set up the best options for your needs and budget. We'll provide recommendations for reliable hosting providers and domain registrars at different price points, but the final costs will be determined by the providers you select."
    }
  ];

  return (
    <div className="bg-slate-50 py-12 xs:py-16 sm:py-20 md:py-24 px-4 xs:px-5 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-xs xs:max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl">
        <h2 className="text-[1.75rem] xs:text-[2rem] sm:text-[2.25rem] md:text-[2.5rem] lg:text-[3rem] leading-tight font-display bg-gradient-to-r from-blue-600 to-blue-400 text-transparent bg-clip-text mb-8 xs:mb-10 sm:mb-12 text-center">
          Frequently Asked Questions
        </h2>
        
        <div className="space-y-6 xs:space-y-7 sm:space-y-8">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-slate-200 pb-6 xs:pb-7 sm:pb-8">
              <h3 className="text-lg xs:text-xl sm:text-xl lg:text-2xl font-medium text-slate-900 mb-2 xs:mb-3 sm:mb-4">
                {faq.question}
              </h3>
              <p className="text-base xs:text-lg sm:text-lg lg:text-xl text-slate-600 leading-relaxed">
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

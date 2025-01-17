import React from "react";
import Sidebar from "./Sidebar";
import FAQItem from "./FAQItem";
import HelpContact from "./HelpContact";
import Hero from "./hero"


const FAQPage: React.FC = () => {
  const faqs = [
    {
      question: "How do AI-powered virtual assistants differ from traditional chatbots?",
      answer:
        "AI-powered virtual assistants leverage advanced NLP and machine learning to provide personalized, contextual responses, unlike rule-based traditional chatbots.",
    },
    {
      question: "What platforms are the virtual assistants compatible with?",
      answer:
        "Our virtual assistants can integrate with websites, social media, and mobile apps, ensuring a seamless experience across platforms.",
    },
    {
      question: "How customizable is the virtual assistant for specific needs?",
      answer:
        "Our virtual assistant can be customized to meet unique business requirements, ensuring it aligns with your goals.",
    },
    {
      question: "Will the AI virtual assistant need regular updates?",
      answer:
        "Yes, regular updates ensure optimal performance and security enhancements for your virtual assistant.",
    },
  ];

  return (
    <section className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Hero />
    
      <div className="container text-black mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Sidebar */}
        <Sidebar />

        {/* Main FAQ Section */}
        <div className="col-span-1 md:col-span-2">
          <div className="mb-8">
            <h2 className="text-2xl font-bold">How can we help you!</h2>
            <p className="text-sm text-gray-600 mt-2">
              Explore these questions to discover how our AI solutions can
              enhance customer engagement, improve efficiency, and reduce
              operational costs.
            </p>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>

        {/* Help Section */}
        <HelpContact />
      </div>
    </div>
    </section>
  );
};

export default FAQPage;

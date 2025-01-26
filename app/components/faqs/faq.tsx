'use client'
import React, { useState } from "react";
import Sidebar from "./Sidebar";
import FAQItem from "./FAQItem";
import HelpContact from "./HelpContact";
import Hero from "./hero";

// Define the type for FAQ categories
type FAQCategory = {
  [key: string]: { question: string; answer: string }[];
};


const FAQPage: React.FC = () => {
  // Define FAQ data with explicit type
  const faqData: FAQCategory = {
    Platform: [
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
    ],
    Partners: [
      {
        question: "How can we collaborate as partners?",
        answer: "We offer various partnership opportunities to align with your business goals.",
      },
    ],
    "Appointment and Session": [
      {
        question: "How do I schedule an appointment?",
        answer: "You can schedule an appointment through our app or contact customer support.",
      },
    ],
    Payment: [
      {
        question: "What payment methods are supported?",
        answer:
          "We accept multiple payment methods, including credit cards, PayPal, and crypto payments.",
      },
    ],
    "Data Privacy": [
      {
        question: "How is user data protected?",
        answer:
          "We use industry-standard encryption and strict policies to ensure user data privacy.",
      },
    ],
    "Data Security": [
      {
        question: "What security measures are in place?",
        answer:
          "We employ multi-layered security systems and regular audits to prevent breaches.",
      },
    ],
    "Technical Issues": [
      {
        question: "What should I do if I encounter a technical issue?",
        answer: "Please contact our technical support team for assistance.",
      },
    ],
  };

  // State to manage selected menu item
  const [selectedCategory, setSelectedCategory] = useState<keyof typeof faqData>("Platform");

  // Get FAQs for the selected category
  const faqs = faqData[selectedCategory];

  return (
    <section className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Hero />

        <div className="container text-black mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Sidebar */}
          <Sidebar selectedCategory={selectedCategory} onCategoryChange={setSelectedCategory} />

          {/* Main FAQ Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="mb-8">
              <h2 className="text-2xl font-bold">{selectedCategory}</h2>
              <p className="text-sm text-gray-600 mt-2">
                Explore these questions to discover how our AI solutions can enhance customer
                engagement, improve efficiency, and reduce operational costs.
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

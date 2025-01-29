"use client";
import React, { useState } from "react";
import Hero from "./hero";
import HelpContact from "./HelpContact";
// Define the type for FAQ categories
type FAQCategory = {
  [key: string]: { question: string; answer: string }[];
};

// FAQ Data
const faqData: FAQCategory = {
  Platform: [
    {
      question:
        "How do AI-powered virtual assistants differ from traditional chatbots?",
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
      answer:
        "We offer various partnership opportunities to align with your business goals.",
    },
  ],
  "Appointment and Session": [
    {
      question: "How do I schedule an appointment?",
      answer:
        "You can schedule an appointment through our app or contact customer support.",
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

const menuItems = Object.keys(faqData) as (keyof typeof faqData)[];

const FAQPage: React.FC = () => {
  // State to manage selected menu item
  const [selectedCategory, setSelectedCategory] =
    useState<keyof typeof faqData>("Platform");

  // Get FAQs for the selected category
  const faqs = faqData[selectedCategory];

  return (
    <section className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Hero />

        <div className="container text-black mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Sidebar */}
          <div className="bg-[#F9F9F9] p-6 rounded-xl w-full md:w-[300px] shadow">
            <ul className="space-y-4">
              {menuItems.map((item, index) => (
                <li
                  key={index}
                  className={`px-4 py-2 rounded-lg text-sm font-medium cursor-pointer ${
                    selectedCategory === item
                      ? "text-white bg-orange-400"
                      : "text-gray-700"
                  }`}
                  onClick={() => setSelectedCategory(item)}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Main FAQ Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="mb-8">
              <h2 className="text-2xl font-bold">{selectedCategory}</h2>
              <p className="text-sm text-gray-600 mt-2">
                Explore these questions to discover how our AI solutions can
                enhance customer engagement, improve efficiency, and reduce
                operational costs.
              </p>
            </div>

            {/* FAQ Items */}
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg p-4 shadow-sm"
                >
                  <h3 className="text-lg font-semibold">{faq.question}</h3>
                  <p className="text-gray-600 mt-2">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
          <HelpContact />
        </div>
      </div>
    </section>
  );
};

export default FAQPage;

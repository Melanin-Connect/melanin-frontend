'use client';

import React, { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const ChatbotSatisfaction: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "How do AI-powered chatbots improve customer satisfaction?",
      answer:
        "AI-powered chatbots provide instant responses, personalized recommendations, and 24/7 support, allowing customers to get quick answers and tailored advice, which significantly enhances their experience.",
    },
    {
      question: "What technologies are used in AI chatbots?",
      answer:
        "AI chatbots leverage natural language processing (NLP), machine learning algorithms, and APIs to interact with users and deliver personalized responses.",
    },
    {
      question: "Are AI chatbots secure?",
      answer:
        "Yes, AI chatbots are designed with robust security measures to protect user data and ensure secure communication.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white p-6  max-w-ful mx-auto">
      {faqs.map((faq, index) => (
        <div key={index} className="border-b py-4">
          <button
            onClick={() => toggleFAQ(index)}
            className="flex justify-between items-center w-full text-left font-semibold text-lg"
          >
            <span>{faq.question}</span>
            <span className="ml-4 text-orange-500">
              {openIndex === index ? "−" : "+"}
            </span>
          </button>
          {openIndex === index && (
            <p className="mt-2 text-sm text-gray-600">{faq.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default ChatbotSatisfaction;

'use client'
import React, { useState } from "react";

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b py-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full text-left font-semibold text-lg"
      >
        {isOpen ? "−" : "+"} {question}
      </button>
      {isOpen && <p className="mt-2 text-sm text-gray-600">{answer}</p>}
    </div>
  );
};

export default FAQItem;

"use client";
import { useState } from "react";
import React from "react";
import Image from "next/image";
import img1 from "@/public/assets/accordio-img-1.jpg.png";
import img2 from "@/public/assets/accordio-img-2.jpg.png";

const FAQSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(1);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="relative bg-white py-16">
      {/* Top Text Section */}
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between mb-12">
          <div className="text-start mb-6 md:mb-0">
            <p className="text-[#FE7146] uppercase font-semibold mb-2">
              Frequently Asked Questions
            </p>
            <h2 className="text-[#1F244C] text-3xl lg:text-4xl font-bold leading-snug">
              If you want to know <br /> anything, inquire us
            </h2>
          </div>
          {/* Get In Touch Button */}
          <div className="flex flex-col items-start md:items-end">
            <p className="text-black font-bold mb-3 md:mb-5">
              Phone No. +88(9800) 6802
            </p>
            <button className="bg-[#FE7146] text-white py-3 px-6 rounded-full font-semibold">
              Get In Touch
            </button>
          </div>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Section with Images */}
          <div className="relative flex flex-col gap-6 sm:block">
            <div className="relative">
              <Image
                src={img1}
                alt="Person 1"
                width={300}
                height={200}
                className="rounded-lg  mx-auto"
              />
            </div>
            <div className="relative">
              <Image
                src={img2}
                alt="Person 2"
                width={300}
                height={200}
                className="rounded-lg  mx-auto"
              />
            </div>
          </div>

        {/* FAQ Section */}
<div className="space-y-4">
  {[
    {
      question: "What Is Melanin Connect?",
      answer:
        "Melanin Connect is a digital community platform providing AI-powered solutions for B2C and B2B transactions, digital marketing, and corporate branding, supported by blockchain and Web 3.0 technologies.",
    },
    {
      question: "How Does the Product Content Generator Work?",
      answer:
        "The product content generator uses AI to deliver optimized, engaging content tailored to your business needs.",
    },
    {
      question: "What Is Web 3.0, And How Does Melanin Connect Use It?",
      answer:
        "Web 3.0 represents the next evolution of the web, leveraging blockchain for decentralization. Melanin Connect integrates these technologies to offer transparency and security.",
    },
    {
      question: "How Can I Join Melanin Connect?",
      answer:
        "Simply sign up on our platform, explore our services, and start connecting with the community today.",
    },
  ].map((faq, index) => (
    <div
      key={index}
      className={`relative bg-white p-6 rounded-lg ${
        activeIndex === index + 1
          ? "border-2 border-[#FE7146]"
          : "border border-gray-400"
      }`}
    >
      {/* Icon Container */}
      <div
        className="absolute -top-3 -left-3 w-8 h-8 flex items-center justify-center bg-[#1F244C] text-white rounded-full cursor-pointer"
        onClick={() => toggleFAQ(index + 1)}
      >
        <span className="text-xl font-bold">
          {activeIndex === index + 1 ? "−" : "+"}
        </span>
      </div>
      {/* Question */}
      <h3
        className={`ml-10 text-lg font-bold ${
          activeIndex === index + 1 ? "text-[#FE7146]" : "text-[#1F244C]"
        }`}
      >
        {faq.question}
      </h3>
      {/* Answer */}
      {activeIndex === index + 1 && (
        <p className="mt-4 text-gray-600">{faq.answer}</p>
      )}
    </div>
  ))}
</div>

        </div>
      </div>
    </section>
  );
};

export default FAQSection;

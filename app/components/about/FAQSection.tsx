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
      <div className="container mx-auto px-4 lg:px-12">
        <div className="flex flex-col-2">
          <div className="text-start mb-12">
            <p className="text-[#FE7146] uppercase font-semibold mb-2">
              Frequently Asked Questions
            </p>
            <h2 className="text-[#1F244C] text-3xl lg:text-4xl font-bold">
              If you want to know <br /> anything, inquire us
            </h2>
          </div>
          {/* Get In Touch Button */}
          <div className="absolute flex  flex-col-2 top-8 right-16">
            <div className="px-5 text-black font-bold mt-5">
              <p>Phone No. +88(9800) 6802</p>
            </div>
            <div>
              <button className="bg-[#FE7146] text-white py-3 px-6 rounded-full font-semibold">
                Get In Touch
              </button>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 -mt-44 md:grid-cols-2 gap-12 items-center relative">
          {/* Left Section with Images */}
          <div className="relative ml-20">
            <div className="absolute -top-20 right-12 z-0">
              {/* Placeholder for second image */}
              <Image
                src={img2}
                alt="Person 2"
                width={300}
                height={200}
                className="rounded-lg "
              />
            </div>
            <div className="absolute top-20 left-0 z-10">
              {/* Placeholder for first image */}
              <Image
                src={img1}
                alt="Person 1"
                width={300}
                height={200}
                className="rounded-lg "
              />
            </div>
          </div>
          <div className="container mx-auto border-gray-400 mt-48 px-4 lg:px-12">
            <div className="space-y-4 max-w-4xl mx-auto">
              {/* FAQ Item 1 */}
              <div
                className={`bg-white p-6 rounded-lg ${
                  activeIndex === 1
                    ? "border-2 border-[#FE7146]"
                    : "border border-gray-400"
                }`}
              >
                <div
                  className="flex items-center justify-between cursor-pointer"
                  onClick={() => toggleFAQ(1)}
                >
                  <span
                    className={`text-2xl font-bold ${
                      activeIndex === 1 ? "text-[#FE7146]" : "text-[#1F244C]"
                    }`}
                  >
                    {activeIndex === 1 ? "−" : "+"}
                  </span>
                  <h3
                    className={`text-lg font-bold ${
                      activeIndex === 1 ? "text-[#FE7146]" : "text-[#1F244C]"
                    }`}
                  >
                    What Is Melanin Connect?
                  </h3>
                </div>
                {activeIndex === 1 && (
                  <p className="mt-4 text-gray-600">
                    Melanin Connect is a digital community platform providing
                    AI-powered solutions for B2C and B2B transactions, digital
                    marketing, and corporate branding, supported by blockchain
                    and Web 3.0 technologies.
                  </p>
                )}
              </div>
              {/* FAQ Item 2 */}
              <div
                className={`bg-white p-6 rounded-lg ${
                  activeIndex === 2
                    ? "border-2 border-[#FE7146]"
                    : "border border-gray-400"
                }`}
              >
                <div
                  className="flex items-center justify-between cursor-pointer"
                  onClick={() => toggleFAQ(2)}
                >
                  <span
                    className={`text-xl font-bold ${
                      activeIndex === 2 ? "text-[#FE7146]" : "text-[#1F244C]"
                    }`}
                  >
                    {activeIndex === 2 ? "−" : "+"}
                  </span>
                  <h3
                    className={`text-lg font-bold ${
                      activeIndex === 2 ? "text-[#FE7146]" : "text-[#1F244C]"
                    }`}
                  >
                    How Does the Product Content Generator Work?
                  </h3>
                </div>
                {activeIndex === 2 && (
                  <p className="mt-4 text-gray-600">
                    The product content generator uses AI to deliver optimized,
                    engaging content tailored to your business needs.
                  </p>
                )}
              </div>
              {/* FAQ Item 3 */}
              <div
                className={`bg-white p-6 rounded-lg ${
                  activeIndex === 3
                    ? "border-2 border-[#FE7146]"
                    : "border border-gray-400"
                }`}
              >
                <div
                  className="flex items-center justify-between cursor-pointer"
                  onClick={() => toggleFAQ(3)}
                >
                  <span
                    className={`text-2xl font-bold ${
                      activeIndex === 3 ? "text-[#FE7146]" : "text-[#1F244C]"
                    }`}
                  >
                    {activeIndex === 3 ? "−" : "+"}
                  </span>
                  <h3
                    className={`text-lg font-bold ${
                      activeIndex === 3 ? "text-[#FE7146]" : "text-[#1F244C]"
                    }`}
                  >
                    What Is Web 3.0, And How Does Melanin Connect Use It?
                  </h3>
                </div>
                {activeIndex === 3 && (
                  <p className="mt-4 text-gray-600">
                    Web 3.0 represents the next evolution of the web, leveraging
                    blockchain for decentralization. Melanin Connect integrates
                    these technologies to offer transparency and security.
                  </p>
                )}
              </div>
              {/* FAQ Item 4 */}
              <div
                className={`bg-white p-6 rounded-lg ${
                  activeIndex === 4
                    ? "border-2 border-[#FE7146]"
                    : "border border-gray-400"
                }`}
              >
                <div
                  className="flex items-center justify-between cursor-pointer"
                  onClick={() => toggleFAQ(4)}
                >
                  <span
                    className={`text-xl font-bold ${
                      activeIndex === 4 ? "text-[#FE7146]" : "text-[#1F244C]"
                    }`}
                  >
                    {activeIndex === 4 ? "−" : "+"}
                  </span>
                  <h3
                    className={`text-lg font-bold ${
                      activeIndex === 4 ? "text-[#FE7146]" : "text-[#1F244C]"
                    }`}
                  >
                    How Can I Join Melanin Connect?
                  </h3>
                </div>
                {activeIndex === 4 && (
                  <p className="mt-4 text-gray-600">
                    Simply sign up on our platform, explore our services, and
                    start connecting with the community today.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

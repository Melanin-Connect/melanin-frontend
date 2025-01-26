"use client";
import React, { useState } from "react";
import Container3 from "@/public/assets/Container (3).png"; // Default image
import Container4 from "@/public/assets/Container (3).png"; // Example for another image
import Container5 from "@/public/assets/Container (3).png"; // Example for another image
import Image, { StaticImageData } from "next/image"; // Import StaticImageData type
import background from "@/public/assets/Background1.png";

const SolutionsSection: React.FC = () => {
  // State to track the active tab and its associated image and description
  const [activeTab, setActiveTab] = useState<string>(
    "AI-Driven Marketing Strategies"
  );

  // Descriptions and image sources for each tab
  const solutions: Record<
    string,
    { description: string; image: StaticImageData }
  > = {
    "AI-Driven Marketing Strategies": {
      description:
        "Harness the power of artificial intelligence to craft data-driven marketing strategies that are tailored to your business goals and audience.",
      image: Container3, // Image for this tab
    },
    "Content Generation & SEO Services": {
      description:
        "Leverage AI to create high-quality content and enhance your SEO efforts, improving your online visibility and driving organic traffic.",
      image: Container4, // Image for this tab
    },
    "Blockchain-Based Payment & Transaction Solutions": {
      description:
        "Implement secure and transparent blockchain-based solutions for payments and transactions, ensuring efficiency and trust in your financial processes.",
      image: Container5, // Image for this tab
    },
  };

  return (
    <section className="bg-[#f7f9f8] py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header Section */}
        <div className="text-center">
          <p className="text-sm uppercase text-orange-500 font-bold tracking-widest">
            Solutions for all your needs
          </p>
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mt-4 leading-snug">
            AI-driven, blockchain-powered <br />
            solutions for business growth.
          </h1>
        </div>

        {/* Tab Section */}
        <div className="flex flex-wrap justify-center gap-4 md:space-x-8 mt-8">
          <button
            className={`text-sm font-semibold pb-2 ${
              activeTab === "AI-Driven Marketing Strategies"
                ? "text-gray-900 border-b-4 border-orange-500"
                : "text-gray-500 hover:text-gray-900"
            }`}
            onClick={() => setActiveTab("AI-Driven Marketing Strategies")}
          >
            AI-Driven Marketing Strategies
          </button>
          <button
            className={`text-sm font-semibold pb-2 ${
              activeTab === "Content Generation & SEO Services"
                ? "text-gray-900 border-b-4 border-orange-500"
                : "text-gray-500 hover:text-gray-900"
            }`}
            onClick={() => setActiveTab("Content Generation & SEO Services")}
          >
            Content Generation & SEO Services
          </button>
          <button
            className={`text-sm font-semibold pb-2 ${
              activeTab === "Blockchain-Based Payment & Transaction Solutions"
                ? "text-gray-900 border-b-4 border-orange-500"
                : "text-gray-500 hover:text-gray-900"
            }`}
            onClick={() =>
              setActiveTab("Blockchain-Based Payment & Transaction Solutions")
            }
          >
            Blockchain-Based Payment & Transaction Solutions
          </button>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 mt-12 gap-12">
          {/* Text Section */}
          <div className="flex flex-col justify-center">
            <div className="w-12 h-12 md:w-16 md:h-16 flex justify-center items-center bg-orange-100 rounded-full mb-6">
              <Image
                src={background}
                alt="background icon"
                className="w-8 h-8 md:w-12 md:h-12"
              />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900">
              {activeTab}
            </h3>
            <p className="text-gray-600 mt-4 text-base md:text-lg leading-relaxed">
              {solutions[activeTab].description}
            </p>
          </div>

          {/* Image Section */}
          <div className="flex justify-center">
            <div className="w-full h-full max-w-md md:max-w-lg overflow-hidden rounded-xl shadow-lg">
              <Image
                src={solutions[activeTab].image} // Now using StaticImageData type
                alt={activeTab}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;

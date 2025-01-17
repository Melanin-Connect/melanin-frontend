import React from "react";
import heading from "@/public/assets/heading.png";
import Image from 'next/image';

const features = [
  {
    title: "AI-Powered Virtual Assistants",
    description: "Outsmart AI bots...",
  },
  {
    title: "Product Content Generation",
    description: "Save time with AI...",
  },
  {
    title: "Predictive Sales Forecasting",
    description: "Understand trends...",
  },
  {
    title: "Instant Global Deposits",
    description: "Enable direct...",
  },
  {
    title: "Blockchain Payment Gateways",
    description: "Secure, fast...",
  },
  {
    title: "More Innovative Tools",
    description: "Upgrade business...",
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="container bg-white mx-auto px-4 lg:px-12 py-16">

      <div className="bg-white">
         <div className="text-center mb-8 md:mb-12">
        <Image
          src={heading}
          width={40}
          height={78}
          alt="Heading Icon"
          className="mx-auto"
        />
        <h6 className="text-orange-500 text-lg md:text-sm font-bold uppercase">
          Companies projects
        </h6>
        <p className="mt-2 md:mt-4 w-full text-gray-800 font-semibold text-2xl md:text-[24] lg:text-[30] font-epilogue">
        The best application features you
       
          <br />
          won&apos;t find anywhere
        </p>
      </div>
    </div>
  )
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg text-center"
          >
            <div className="bg-gray-300 w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center">
              <p className="text-gray-600">Icon</p>
            </div>
            <h3 className="text-lg font-bold text-[#1F244C] mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;

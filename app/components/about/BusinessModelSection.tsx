import React from "react";

const Hero: React.FC = () => {
  return (
    <div className="bg-white container mx-auto px-6 sm:px-10 lg:px-20 py-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      {/* Left - Heading Section */}
      <div className="text-center md:text-left">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-4">
          Intelligent Apps for <br /> Every Business Model
        </h2>
      </div>

      {/* Right - Text Section */}
      <div className="text-center md:text-left">
        <p className="text-black text-sm md:text-base mb-4">
          Melanin Connect is a pioneering global digital platform originating
          from Ghana, now connecting businesses across five additional
          countries. Our platform is dedicated to empowering
          business-to-consumer (B2C) and business-to-business (B2B) interactions
          through cutting-edge technology, corporate branding, digital
          marketing, video advertisements, and blockchain-enabled payment
          solutions.
        </p>
        <p className="text-black text-sm md:text-base">
          Supported by Web 3.0, Melanin Connect offers a comprehensive range of
          tools that enable businesses to streamline transactions, expand their
          digital reach, and foster genuine connections.
        </p>
      </div>
    </div>
  );
};

export default Hero;

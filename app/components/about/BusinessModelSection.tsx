import React from "react";
import Image from "next/image";
import FAQ from "@/public/assets/FAQ.png";

const hero: React.FC = () => {
  return (
    <div className=" bg-white container mx-auto px-20 py-12 grid grid-cols-1 md:grid-cols-2 items-center ">
      {/* Left - Image Placeholder */}
      <div className="relative w-auto ">
        <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">
          Intelligent Apps for <br /> Every Business Model
        </h2>
      </div>

      {/* Right - Text Section */}
      <div>
        <div className="">
        <p className="text-black text-sm  ">
          Melanin Connect is a pioneering global digital platform originating
          from Ghana, now connecting businesses across five additional
          countries. Our platform is dedicated to empowering
          business-to-consumer (B2C) and business-to-business (B2B) interactions
          through cutting-edge technology, corporate branding, digital
          marketing, video advertisements, and blockchain-enabled payment
          solutions.
        </p>
        <br />
        <p className="text-black text-sm  ">
          Supported by Web 3.0, Melanin Connect offers a comprehensive range of
          tools that enable businesses to streamline transactions, expand their
          digital reach, and foster genuine connections.
        </p>

        </div>
        
      </div>
    </div>
  );
};

export default hero;

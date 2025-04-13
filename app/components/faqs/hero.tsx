import React from "react";
import Image from "next/image";
import FAQ from "@/public/assets/FAQ.png"

const hero: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8">
      {/* Left - Image Placeholder */}
      <div className="relative w-full h-[300px] md:h-[400px]">
        <Image
          src="https://res.cloudinary.com/ecosheane/image/upload/v1744531870/FAQ_e85uef.png"
          alt="FAQ Illustration"
          layout="fill"
          objectFit="contain"
          priority
        />
      </div>

      {/* Right - Text Section */}
      <div>
        <p className="text-orange-500 uppercase text-sm font-bold mb-2">
          Help Center
        </p>
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          How can we help you!
        </h2>
        <p className="text-gray-600 leading-relaxed">
          Explore these questions and answers to discover how our AI solutions
          can enhance customer engagement, improve efficiency, and reduce
          operational costs, all while delivering a seamless user experience.
        </p>
      </div>
    </div>
  );
};

export default hero;

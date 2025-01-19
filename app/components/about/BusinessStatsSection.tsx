import React from "react";
import Image from "next/image";

import business from "@/public/assets/business.png.png";
import gradient from "@/public/assets/gradient.png";

const BusinessStatsSection: React.FC = () => {
  return (
    <section className="relative bg-white py-16 overflow-hidden">
      {/* Gradient Background on the Right Half */}
      <div className="absolute inset-y-0 right-0 w-1/2 hidden lg:block">
        <Image
          src={gradient}
          alt="Gradient Background"
          layout=""
          objectFit="cover"
          className="z-0"
        />
      </div>

      <div className="relative container mx-auto px-4 lg:px-12 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
          {/* Left Section */}
          <div>
            <h2 className="text-[#1F244C] text-3xl lg:text-4xl font-bold mb-6">
              We’re Here To Do Better Business.
            </h2>
            <p className="text-gray-600 mb-6">
              At Melanin Connect, we lead with a dynamic approach to achieve far
              better results. Through intelligent and powerful tools for modern
              businesses, we ensure every need is met for customers, growth,
              advisory services, and long-term sustainable development.
            </p>
            <div className="flex gap-8">
              <div>
                <p className="text-4xl font-bold text-[#1F244C]">42k</p>
                <p className="text-gray-500">Projects We&apos;ve Completed</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-[#1F244C]">5%</p>
                <p className="text-gray-500">Conversion Rate Increase</p>
              </div>
            </div>
          </div>
          {/* Right Section */}
          <div className="lg:w-1/2  mt-40 lg:mt-0 relative">
            <Image
              src={business}
              alt="Business Stats"
              width={670}
              className="w-[670px]  relative z-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessStatsSection;

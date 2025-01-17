import React from "react";
import Image from "next/image";
import busines from "@/public/assets/business.png"
import Gradient from "@/public/assets/gradient.png";

const BusinessStatsSection: React.FC = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
          {/* Left Section */}
          <div>
            <h2 className="text-[#1F244C] text-3xl lg:text-4xl font-bold mb-6">
              We’re Here To Do Better Business.
            </h2>
            <p className="text-gray-600 mb-6">
              At Melanin Connect, we lead with a dynamic approach to achieve
              far better results. Through intelligent and powerful tools for
              modern businesses, we ensure every need is met for customers,
              growth, advisory services, and long-term sustainable development.
            </p>
            <div className="flex gap-8">
              <div>
                <p className="text-4xl font-bold text-[#1F244C]">42k</p>
                <p className="text-gray-500">Projects We've Completed</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-[#1F244C]">5%</p>
                <p className="text-gray-500">Conversion Rate Increase</p>
              </div>
            </div>
          </div>
          {/* Right Section */}
          <div className="lg:w-1/2 mt-40 lg:mt-0 relative">
            <div className="absolute inset-1 -top-20 -right-20 hidden lg:block  justify-center">
              <Image
                src={Gradient}
                alt="hero"
                width={900}
                height={563.16}
                className="flex-shrink-0 mt-36 w-full h-auto lg:mt-0"
              />
            <Image 
            src={busines}
            alt="business"
            />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessStatsSection;

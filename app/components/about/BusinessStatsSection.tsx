'use client'
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const BusinessStatsSection: React.FC = () => {
  return (
    <section className="relative bg-white py-16 overflow-hidden">
      {/* Gradient Background on the Right Half */}
      <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="hidden md:block absolute top-20 right-0 w-1/4 h-[400px] z-0 overflow-visible"
          >
            <div className="absolute top-0 right-0 w-[200%] h-full bg-gradient-to-r from-[#c94117] via-[#e44d1a] to-[#f05e2c] rounded-l-full animate-pulse-slow"></div>
          </motion.div>

      <div className="relative container  mx-auto px-4 lg:px-12 z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
          {/* Left Section */}
          <div className=" lg:ml-20 px-4 sm:px-6 lg:px-8 py-12">
            
            <h2 className="text-[#1F244C] text-3xl lg:text-4xl font-bold mb-6">
              We’re Here To Do Better Business.
            </h2>
            <p className="text-gray-600 mb-6">
              At Melanin Connect, we lead with a dynamic approach to achieve far
              better results. Through intelligent and powerful tools for modern
              businesses, we ensure every need is met for customers, growth,
              advisory services, and long-term sustainable development.
            </p>
            <div className="flex justify-center items-center py-8">
              <div className="flex items-center justify-between gap-12  shadow-orange-400 shadow-md max-w-4xl py-8 px-12 bg-white rounded-full shadow-lg relative">
              
                {/* First Stat */}
                <div className="    w-24 h-24 rounded-full border-[3px] border-orange-500">
                  {/* Second Stat */}
                  <div className="relative flex flex-col items-center">
                    {/* Outer Red Circle */}

                    <p className="text-2xl text-center font-extrabold text-black">
                      5%
                    </p>
                    <p className="text-gray-600 text-center text-sm">
                      Companies success rate
                    </p>
                  </div>
                </div>

                <div className="    w-24 h-24 rounded-full border-[3px] border-orange-500">
                  {/* Second Stat */}
                  <div className="relative flex flex-col items-center">
                    {/* Outer Red Circle */}

                    <p className="text-2xl text-center font-extrabold text-black">
                      5%
                    </p>
                    <p className="text-gray-600 text-center text-sm">
                      Companies success rate
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Right Section */}
          <div className="lg:w-1/2  mt-40 lg:mt-0 relative">
            <Image
              src= "https://res.cloudinary.com/ecosheane/image/upload/v1744531864/business.png_pgfyaf.png"
              alt="Business Stats"
              width={670}
            height={600}
              className="w-[670px]  relative z-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessStatsSection;

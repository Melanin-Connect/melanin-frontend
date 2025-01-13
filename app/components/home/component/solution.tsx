import React from "react";
import Container3 from "@/public/assets/Container (3).png"
import Image from "next/image"
import background from "@/public/assets/Background1.png"



const SolutionsSection: React.FC = () => {
  return (
    <section className="bg-[#f7f9f8] py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="w-[880px] h-[258]"> 
            
            {/* Header Section */}
        <div className="text-center">
          <p className="text-sm uppercase text-orange-500 font-bold tracking-widest">
            Solutions for all your needs
          </p>
          <h1 className="text-4xl font-bold text-gray-900 mt-4">
            AI-driven, blockchain-powered <br />
            solutions for business growth.
          </h1>
        </div>

        {/* Tab Section */}
        <div className="flex justify-center space-x-8 mt-8">
          <button className="text-sm font-semibold text-gray-900 border-b-4 border-orange-500 pb-2">
            AI-Driven Marketing Strategies
          </button>
          <button className="text-sm font-semibold text-gray-500 hover:text-gray-900 pb-2">
            Content Generation & SEO Services
          </button>
          <button className="text-sm font-semibold text-gray-500 hover:text-gray-900 pb-2">
            Blockchain-Based Payment & Transaction Solutions
          </button>
        </div>


            
        </div>
       
        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 mt-12 gap-8">
          {/* Text Section */}
          <div className="flex flex-col justify-center">
          <div className="w-16 h-16 flex justify-center mb-10 items-center bg-orange-100 rounded-full">
            <Image
            src={background}
            alt="image"
            />
              </div>
            <div className="flex items-center space-x-4">
            
              <h3 className="text-2xl font-bold text-gray-900">
                AI-Driven Marketing Strategies
              </h3>
            </div>
            <p className="text-gray-600 mt-4 text-lg">
              Harness the power of artificial intelligence to craft
              data-driven marketing strategies that are tailored to your
              business goals and audience.
            </p>
          </div>

          {/* Image Section */}
          <div className="flex justify-center">
            <div className="w-full h-full max-w-lg overflow-hidden rounded-xl shadow-lg">
              <Image
                src={Container3}
                alt="AI Marketing Strategies"
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

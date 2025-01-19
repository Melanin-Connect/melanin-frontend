import React from "react";
import Container3 from "@/public/assets/Container (3).png";
import Image from "next/image";
import img1 from "@/public/assets/Background (1).png";

const SolutionsSection: React.FC = () => {
  return (
    <section className="bg-[#f7f9f8] py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="w-[880px] h-[258]">
          <div className="flex flex-col-2">
          <div className="flex justify-center">
            <div className="w-[589] rounded-xl ">
              <Image
                src={Container3}
                alt="AI Marketing Strategies"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
            <div className="flex flex-col items-center w-[330px] text-center space-y-4 py-12 bg-gray-50">
              {/* Icon Container */}
              <div>
                <Image src={img1} alt="" />
              </div>

              {/* Description */}
              <p className="text-gray-700 text-sm lg:text-base font-medium max-w-lg">
                To be the leading digital community for business and innovation,
                empowering a global network of individuals and enterprises to
                thrive through AI-driven solutions and blockchain technology.
              </p>
            </div>
            <div className="flex flex-col items-center w-[330px] text-center space-y-4 py-12 bg-gray-50">
              {/* Icon Container */}
              <div>
                <Image src={img1} alt="" />
              </div>

              {/* Description */}
              <p className="text-gray-700 text-sm lg:text-base font-medium max-w-lg">
                To be the leading digital community for business and innovation,
                empowering a global network of individuals and enterprises to
                thrive through AI-driven solutions and blockchain technology.
              </p>
            </div>
          </div>

          {/* Image Section */}
          <div className="flex justify-center">
            <div className="w-[669px] rounded-xl ">
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

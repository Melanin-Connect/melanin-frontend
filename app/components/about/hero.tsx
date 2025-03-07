import React from "react";
import Container3 from "@/public/assets/int.png";
import Video from "@/public/assets/video.png";
import Image from "next/image";
import img1 from "@/public/assets/Background1.png";

const SolutionsSection: React.FC = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-start">
          {/* Group1 */}
          <div className="w-full md:w-1/2 mb-8 md:mb-0 pr-0 md:pr-4">
            <div className="h-auto w-full rounded-lg bg-gradient-to-r from-orange-500 to-red-500">
              <Image
                src={Container3}
                alt="Icon"
                height={658}
                width={589}
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Group2 */}
          <div className="w-full md:w-1/2 pl-0 md:pl-4">
            {/* Mission Blocks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {/* Mission Block 1 */}
              <div className="flex items-start">
                <div>
                  <Image
                    src={img1}
                    alt="Icon"
                    width={60}
                    height={60}
                    className="pb-5"
                  />
                  <h2 className="text-black font-bold">Vision</h2>
                  <p className="text-gray-700 text-sm lg:text-base font-medium">
                    To be the leading digital community for business and
                    innovation, empowering a global network of individuals and
                    enterprises to thrive through AI-driven solutions and
                    blockchain technology.
                  </p>
                </div>
              </div>

              {/* Mission Block 2 */}
              <div className="flex items-start">
                <div>
                  <Image
                    src={img1}
                    alt="Icon"
                    width={60}
                    height={60}
                    className="pb-5"
                  />
                  <h2 className="text-black font-bold">Mission</h2>
                  <p className="text-gray-700 text-sm lg:text-base font-medium">
                    Our mission is to create a platform where businesses of all
                    sizes can flourish by leveraging the power of AI, blockchain,
                    and Web 3.0. We aim to deliver exceptional tools and
                    resources that drive digital transformation, enhance customer
                    experiences, and build a connected, equitable global business
                    community.
                  </p>
                </div>
              </div>
            </div>

            {/* Image Section */}
            <div className="mt-8">
              <div className="rounded-xl overflow-hidden">
                <Image
                  src={Video}
                  alt="AI Marketing Strategies"
                  className="object-cover w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;

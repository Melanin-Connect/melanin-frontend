import React from "react";
import Container3 from "@/public/assets/Container (3).png";
import Image from "next/image";
import img1 from "@/public/assets/Background (1).png";

const SolutionsSection: React.FC = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="w-[880px] h-[258]">
            
            {/* main group */}
    <div className="flex flex-col-2">

            
            {/* Group1 */}
            <div className="flex  justify-start mr-5 w-[589px] ">
              <div className="rounded-xl ">
                <Image
                  src={Container3}
                  alt="AI Marketing Strategies"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            
            {/* end of Group1 */}

            {/* Group2 */}
            <div className="relative items-end  flex-col-2 justify-end">
              <div className="flex flex-col-2">
                <div className=" items-start w-[330px] text-start space-y-4 py-120">
                  {/* Icon Container */}
                  <div>
                    <Image src={img1} alt="" />
                  </div>
                  <h2 className="text-black  ">Mission</h2>

                  {/* Description */}
                  <p className="text-gray-700 w-[330px] text-sm lg:text-base font-medium max-w-lg">
                    To be the leading digital community for business and
                    innovation, empowering a global network of individuals and
                    enterprises to thrive through AI-driven solutions and
                    blockchain technology.
                  </p>
                </div>
                <div className=" items-start w-[330px] text-start space-y-4 py-12">
                  <div>
                    <Image src={img1} alt="" />
                  </div>
                  <h2 className="text-black font-bold">Mission</h2>

                  {/* Description */}
                  <p className="text-gray-700 w-[339px] text-sm lg:text-base font-medium max-w-lg">
                    Our mission is to create a platform where businesses of all
                    sizes can flourish by leveraging the power of AI,
                    blockchain, and Web 3.0. We aim to deliver exceptional tools
                    and resources that drive digital transformation, enhance
                    customer experiences, and build a connected, equitable
                    global business community.
                  </p>
                </div>
              </div>

              {/* Image Section */}
              <div className="flex justify-start">
                <div className="w-[669px] rounded-xl ">
                  <Image
                    src={Container3}
                    alt="AI Marketing Strategies"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
            
            {/* end of Group2 */}
          </div>
        </div>
        
            {/* Group2 */}
      </div>
    </section>
  );
};

export default SolutionsSection;

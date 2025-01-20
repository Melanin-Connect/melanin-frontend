import React from "react";
import heading from "@/public/assets/heading.png";
import Image from "next/image";
import soludtion from "@/public/assets/solution.png";
import vector from "@/public/assets/Vector.png"

const FeaturesSection: React.FC = () => {
  return (
    <section className="container bg-white mx-auto px-4 lg:px-12 py-16">
      {/* Heading Section */}
      <div className="bg-white">
        <div className="text-center mb-8 md:mb-12">
          <Image
            src={heading}
            width={40}
            height={78}
            alt="Heading Icon"
            className="mx-auto"
          />
          <h6 className="text-orange-500 text-lg md:text-sm font-bold uppercase">
            Companies projects
          </h6>
          <p className="mt-2 md:mt-4 w-full text-gray-800 font-semibold text-2xl md:text-[24] lg:text-[30] font-epilogue">
            The best application features you
            <br />
            won&apos;t find anywhere
          </p>
        </div>
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Feature 1 */}
        <div className="bg-white p-6 rounded-3xl shadow-lg text-center">
        <div className="bg-gray-300 w-16 h-16 rounded-full mx-auto mb-4 flex p-3 items-center justify-center">
            <Image
            src={vector}
            alt=""
            />
          </div>
          <h3 className="text-lg font-bold text-[#1F244C] mb-2">
            AI-Powered Virtual Assistants
          </h3>
          <p className="text-gray-600">
            Get instant, 24/7 support with intelligent virtual assistants that
            offer personalized responses and help drive customer satisfaction.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="bg-white p-6 ">
          <Image src={soludtion} alt="" />
        </div>

        {/* Feature 3 */}
        <div className="bg-white p-6 rounded-3xl shadow-lg text-center">
          <div className="bg-gray-300 w-16 h-16 rounded-full mx-auto mb-4 flex p-3 items-center justify-center">
            <Image
            src={vector}
            alt=""
            />
          </div>
          <h3 className="text-lg font-bold text-[#1F244C] mb-2">
            Predictive Sales Forecasting
          </h3>
          <p className="text-gray-600">
            Save time with AI-generated product descriptions and titles,
            tailored to enhance customer engagement and optimize product
            listings.
          </p>
        </div>

        {/* Feature 4 */}
        <div className="bg-white  p-6 mt-10 rounded-3xl shadow-lg text-center">
        <div className="bg-gray-300 w-16 h-16 rounded-full mx-auto mb-4 flex p-3 items-center justify-center">
            <Image
            src={vector}
            alt=""
            />
          </div>
          <h3 className="text-lg font-bold text-[#1F244C] mb-2">
            Instant Global Deposits
          </h3>
          <p className="text-gray-600">
            Make informed business decisions with AI algorithms that analyze
            market trends and predict sales, helping you stay ahead in inventory
            and marketing.
          </p>
        </div>

        {/* Feature 5 */}
        <div className="bg-white h-[300px] -mt-10 p-6 rounded-3xl shadow-lg text-center">
        <div className="bg-gray-300 w-16 h-16 rounded-full mx-auto mb-4 flex p-3 items-center justify-center">
            <Image
            src={vector}
            alt=""
            />
          </div>
          <h3 className="text-lg font-bold text-[#1F244C] mb-2">
            Blockchain Payment Gateways
          </h3>
          <p className="text-gray-600">
            Collect cash payments in-store, instantly deposit them into your
            Melanin Connect account, and manage your funds effortlessly from
            anywhere.
          </p>
        </div>

        {/* Feature 6 */}
        <div className="bg-white p-6 mt-10 rounded-3xl shadow-lg text-center">
        <div className="bg-gray-300 w-16 h-16 rounded-full mx-auto mb-4 flex p-3 items-center justify-center">
            <Image
            src={vector}
            alt=""
            />
          </div>
          <h3 className="text-lg font-bold text-[#1F244C] mb-2">
            More Innovative Tools
          </h3>
          <p className="text-gray-600">
            Secure and simplify your transactions with blockchain technology
            that ensures fast, reliable, and transparent payments worldwide.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

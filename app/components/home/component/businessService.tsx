// components/BusinessServices.tsx
import React from "react";
import Image from "next/image";
import Business from "@/public/assets/business.png"

const BusinessServices: React.FC = () => {
  return (
    <section className="bg-white p-10 px-4 ">
      <div className="   mx-auto text-center">
        <h2 className="text-[#FE7146] text-sm uppercase tracking-wide font-semibold">
          What We Do
        </h2>
        <h3 className="text-3xl font-extrabold text-gray-900 mt-2">
          We provide wide range of 
          <br />
          business services
        </h3>
      </div>

      <div className="flex flex-col lg:flex-row mt-12 lg:items-center lg:justify-center rounded-3xl bg-gradient-to-t from-[#6269C6] to-[#303360] p-5 lg:bg-gradient-to-t lg:from-[#6269C6] lg:to-[#303360] bg-transparent">
        <div className="space-y-4 p-10 mb-10 lg:w-[400px] lg:h-[500px] rounded-3xl lg:bg-white">
          <div className="rounded-lg  lg:overflow-hidden">
            <div className="bg-orange-500 rounded-lg text-white p-2 text-lg font-semibold">
              01. AI-Powered Virtual Assistants & Chatbots
            </div>
          </div>
          <div className="bg-orange-100 rounded-lg overflow-hidden">
            <div className="text-gray-700 p-2 text-lg font-semibold">
              02. AI-Generated Product Content
            </div>
          </div>
          <div className="bg-orange-100 rounded-lg overflow-hidden">
            <div className="text-gray-700 p-2 text-lg font-semibold">
              03. Blockchain-Enabled Payment Systems
            </div>
          </div>
          <div className="bg-orange-100 rounded-lg overflow-hidden">
            <div className="text-gray-700 p-2 text-lg font-semibold">
              04. Predictive Analytics & Sales Forecasting
            </div>
          </div>
          <div className="bg-orange-100 rounded-lg overflow-hidden">
            <div className="text-gray-700 p-2 text-lg font-semibold">
              05. AI-Powered Social Networking Platform
            </div>
          </div>
        </div>

        <div className="w-full lg:w-[481px] ml-0 lg:ml-10 h-auto lg:h-[372px]">
          <h4 className="text-orange-500 text-sm uppercase font-semibold">
            Creative Solutions
          </h4>
          <h5 className="text-2xl font-bold text-white mt-4">
            AI-Powered Virtual Assistants & Chatbots
          </h5>
          <p className="text-white text-sm mt-4">
            Our intelligent virtual assistants and chatbots provide real-time,
            AI-driven customer support, personalized product recommendations,
            and intuitive interactions that help you engage your customers
            effortlessly. Enhance customer satisfaction while optimizing
            operational costs.
          </p>
          <button className="mt-6 bg-orange-500 text-white p-6 w-[200px] h-[50px] py-2 rounded-3xl text-sm font-semibold  shadow-sm hover:bg-orange-600 transition duration-300">
            Learn More →
          </button>
        </div>
        <div className="flex justify-center">
          <Image
            src={Business}
            alt="business service"
            className="lg:w-[350px] lg:h-[300px] w-[100%] h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default BusinessServices;

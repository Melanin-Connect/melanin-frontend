import React from "react";
import Image from "next/image";
import ServiceImage from "@/public/assets/service.png"

const Services = () => {
  const services = [
    "AI-Powered Virtual Assistants & Chatbots",
    "AI-Generated Product Content",
    "Blockchain-Enabled Payment Systems",
    "Predictive Analytics & Sales Forecasting",
    "AI-Powered Social Networking Platform",
  ];

  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-center text-2xl md:text-3xl font-bold mb-8">
        We provide a wide range of business services
      </h2>

      {/* Services List */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-16">
        {services.map((service, index) => (
          <div
            key={index}
            className={`p-4 border rounded-lg text-center cursor-pointer ${
              index === 0 ? "bg-orange-100 text-orange-500" : ""
            }`}
          >
            <p>{service}</p>
          </div>
        ))}
      </div>

      {/* Featured Service */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        <div className="relative w-full h-[300px]">
          {/* Replace with your image */}
          <Image
            src={ServiceImage}
            alt="Service Illustration"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div>
          <h3 className="text-xl md:text-2xl font-bold mb-4">
            AI-Powered Virtual Assistants & Chatbots
          </h3>
          <p className="text-gray-600 mb-4">
            Our intelligent virtual assistants and chatbots provide real-time,
            AI-driven customer support, personalized product recommendations,
            and intuitive interactions that help you engage your customers
            effectively. Improve customer satisfaction while reducing
            operational costs.
          </p>
          <button className="bg-orange-500 text-white px-6 py-2 rounded-lg">
            View Detail
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;

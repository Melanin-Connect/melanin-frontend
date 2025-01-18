import React from "react";
import Image from "next/image";
import ServiceImage from "@/public/assets/service.png"
import growth from "@/public/assets/growth.png"
import Link from "next/link";

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
        We provide a wide range of <br />business services
      </h2>

      {/* Services List */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-16">
        {services.map((service, index) => (
          <div
            key={index}
            className={`p-4 border rounded-lg text-center cursor-pointer ${
              index === 0 ? "bg-orange-500 text-white" : ""
            }`}
          >
            <div className="flex justify-center">
              <Image
                src={growth}
                alt={`${service} Illustration`}
                width={40}
                height={40}
                className="mb-2"
              />
            </div>
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
          <Link href="/servicedetails">
                  <button className="bg-[#FE7146] text-white text-sm py-2 px-4 rounded-full hover:bg-orange-600 transition">
                    View Detials→
                  </button>
                </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;

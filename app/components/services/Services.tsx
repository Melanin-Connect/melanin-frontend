'use client'
import React, { useState } from "react";
import Image from "next/image";
import ServiceImage from "@/public/assets/service.png";
import growth from "@/public/assets/service.png";
import assistant from "@/public/assets/service.png";
import productContent from "@/public/assets/service.png";
import paymentSystems from "@/public/assets/service.png";
import analytics from "@/public/assets/service.png";
import socialPlatform from "@/public/assets/service.png";
import Link from "next/link";

const Services = () => {
  const services = [
    {
      title: "AI-Powered Virtual Assistants & Chatbots",
      description:
        "Our intelligent virtual assistants and chatbots provide real-time, AI-driven customer support, personalized product recommendations, and intuitive interactions that help you engage your customers effectively. Improve customer satisfaction while reducing operational costs.",
      image: assistant,
    },
    {
      title: "AI-Generated Product Content",
      description:
        "Streamline your product descriptions with AI-generated, SEO-friendly content tailored to attract customers and improve your search rankings.",
      image: productContent,
    },
    {
      title: "Blockchain-Enabled Payment Systems",
      description:
        "Enable secure, fast, and transparent transactions using blockchain technology. Build trust and efficiency in your payment processing.",
      image: paymentSystems,
    },
    {
      title: "Predictive Analytics & Sales Forecasting",
      description:
        "Leverage predictive analytics to make data-driven decisions, forecast sales trends, and optimize business strategies for maximum ROI.",
      image: analytics,
    },
    {
      title: "AI-Powered Social Networking Platform",
      description:
        "Create engaging social experiences with AI-powered networking platforms that personalize user feeds and foster meaningful connections.",
      image: socialPlatform,
    },
  ];

  const [selectedService, setSelectedService] = useState(services[0]);

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
            className={`p-4 border rounded-lg text-center cursor-pointer transition ${
              selectedService.title === service.title ? "bg-orange-500 text-white" : ""
            }`}
            onClick={() => setSelectedService(service)}
          >
            <div className="flex justify-center">
              <Image
                src={growth}
                alt={`${service.title} Illustration`}
                width={40}
                height={40}
                className="mb-2"
              />
            </div>
            <p>{service.title}</p>
          </div>
        ))}
      </div>

      {/* Featured Service */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        <div className="relative w-full h-[300px]">
          <Image
            src={selectedService.image}
            alt="Service Illustration"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div>
          <h3 className="text-xl md:text-2xl font-bold mb-4">
            {selectedService.title}
          </h3>
          <p className="text-gray-600 mb-4">{selectedService.description}</p>
          <Link href="/servicedetials">
            <button className="bg-[#FE7146] text-white text-sm py-2 px-4 rounded-full hover:bg-orange-600 transition">
              View Details →
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;

// components/BusinessServices.tsx
'use client'
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "AI-Powered Virtual Assistants & Chatbots",
    description:
      "Our intelligent virtual assistants and chatbots provide real-time, AI-driven customer support, personalized product recommendations, and intuitive interactions that help you engage your customers effortlessly. Enhance customer satisfaction while optimizing operational costs.",
  },
  {
    title: "AI-Generated Product Content",
    description:
      "Leverage AI to generate high-quality product descriptions, reviews, and marketing copy, ensuring consistency and scalability in your content strategy while enhancing SEO and engagement.",
  },
  {
    title: "Blockchain-Enabled Payment Systems",
    description:
      "Secure and efficient transactions powered by blockchain technology, ensuring transparency, speed, and cost-effectiveness for your business and customers.",
  },
  {
    title: "Predictive Analytics & Sales Forecasting",
    description:
      "Harness the power of AI-driven analytics to predict market trends, optimize sales strategies, and make data-backed decisions to drive business growth.",
  },
  {
    title: "AI-Powered Social Networking Platform",
    description:
      "Revolutionize user engagement with AI-driven social platforms that enhance content discovery, user interactions, and personalized experiences.",
  },
];

const BusinessServices: React.FC = () => {
  const [selectedService, setSelectedService] = useState(services[0]);

  return (
    <section className="bg-white p-10 px-4 ">
      <div className="mx-auto text-center">
        <h2 className="text-[#FE7146] text-sm uppercase tracking-wide font-semibold">
          What We Do
        </h2>
        <h3 className="text-3xl font-extrabold text-gray-900 mt-2">
          We provide a wide range of
          <br />
          business services
        </h3>
      </div>

      <div className="flex flex-col lg:flex-row mt-12 lg:items-center lg:justify-center rounded-3xl hidden:bg-gradient-to-t from-[#6269C6] to-[#303360] p-5 lg:bg-gradient-to-t lg:from-[#6269C6] lg:to-[#303360] bg-transparent">
        <div className="space-y-4 md:p-10 lg:p-10 mb-10 lg:w-[400px] lg:h-[500px] rounded-3xl lg:bg-white">
          {services.map((service, index) => (
            <div
              key={index}
              className={`rounded-lg overflow-hidden cursor-pointer ${
                selectedService.title === service.title
                  ? "bg-orange-500 text-white"
                  : "bg-orange-100 text-gray-700"
              }`}
              onClick={() => setSelectedService(service)}
            >
              <div className="p-2 text-lg font-semibold">
                {`${(index + 1).toString().padStart(2, "0")}. ${service.title}`}
              </div>
            </div>
          ))}
        </div>

        <div className="w-full lg:w-[481px] ml-0 lg:ml-10 h-auto lg:h-[372px]">
          <h4 className="text-orange-500 text-sm uppercase font-semibold">
            Creative Solutions
          </h4>
          <h5 className="text-2xl font-bold lg:text-white text-black mt-4">
            {selectedService.title}
          </h5>
          <p className="lg:text-white text-black text-sm mt-4">
            {selectedService.description}
          </p>
        
          <Link
            href="/servicedetials" >
            <button className="mt-6 bg-orange-500 text-white p-6 w-[200px] h-[50px] py-2 rounded-3xl text-sm font-semibold shadow-sm hover:bg-orange-600 transition duration-300">
            Learn More →
          </button>
          </Link>
        </div>
        <div className="flex justify-center hidden lg:flex">
          <Image
            src="https://res.cloudinary.com/ecosheane/image/upload/v1744531876/image_aplplc.png"
            width={200}
            height={200} 
            alt="business service"
            className="lg:w-[350px] lg:h-[300px] w-[100%] h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default BusinessServices;

import React from "react";
import Hero from "./Hero";
import Services from "./Services";
import Benefits from "./Benefits";
import Contact from "./contact";
import Image from "next/image";
import hero from "@/public/assets/image (1).png";
import ChatbotSatisfaction from "./chatbot";

const Home: React.FC = () => {
  return (
    <main>
      {/* Hero Section with Image and Services */}
      <div className="flex flex-col lg:flex-row items-center justify-between px-4 lg:px-16">
        {/* Responsive Image */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
          <Image
            src={hero}
            alt="heroimage"
            width={960}
            height={540}
            className="w-full max-w-xs sm:max-w-md lg:max-w-xl"
          />
        </div>

        {/* Services Component */}
        <div className="w-full lg:w-1/3 mt-6 lg:mt-0">
          <Services />
        </div>
      </div>

      {/* Main Content */}
      <div className="space-y-12 px-4 lg:px-16">
        <Hero />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8"></div>
        <Benefits />
        <ChatbotSatisfaction />
        <Contact />
      </div>
    </main>
  );
};

export default Home;

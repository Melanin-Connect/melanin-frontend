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
      <div className="flex  flex-col-2">
        <Image src={hero} alt="heroimage" width={960} />
          <Services />
      </div>

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

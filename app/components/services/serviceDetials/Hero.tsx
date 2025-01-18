import React from "react";
import Image from "next/image";
import img from "@/public/assets/image.png";

const Hero: React.FC = () => {
  const items = [
    "Cost of supplies and equipment point",
    "Change the volume of expected of contact",
    "Bibend auctor nisi elit volume are so beguiled",
  ];

  return (
    <section>
      <div className="w-full lg:w-2/3 mt-20">
        <h1 className="text-3xl lg:text-4xl font-bold mb-6">
          AI-Powered Virtual Assistants & Chatbots
        </h1>
        <p className="text-gray-600 mb-4">
          Our AI-powered virtual assistants and chatbots are designed to
          revolutionize the way you interact with customers. Using advanced AI
          algorithms, these intelligent assistants provide real-time support,
          answer customer queries, and assist in product searches, all while
          offering personalized recommendations based on user behavior and
          preferences. Available 24/7, these virtual assistants can engage
          customers across multiple channels, providing a seamless, cohesive
          experience that keeps your customers satisfied and connected.
          <br /> Whether you’re looking to streamline your support team’s
          workload, enhance customer satisfaction, or drive sales, our virtual
          assistants and chatbots can transform your customer engagement
          strategy. With intuitive natural language processing (NLP) and
          continuous learning capabilities, our assistants can grow with your
          business, adapting to new customer needs and preferences over time.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-between px-8 lg:px-16 py-12 bg-white ">
        <div className="flex flex-col-2">
          <div className="w-full lg:w-2/3">
            <h1 className="text-3xl lg:text-4xl font-bold mb-6">
              Analysises of Business
            </h1>
            <p className="text-gray-600 mb-4">
              Efficiently unleash cross-media information without cross-media
              value. Quickly maximize timely deliverables for real-time schemas.
              Dramatically maintain clicks-and mortar functional solutions.
            </p>

            <p className="text-gray-600 mb-4 font-bold">
              - Efficiently unleash cross-media informatio <br />
              - Quickly maximize timely deliverables <br />- Dramatically
              maintain clicks-and-mortar solutions
            </p>
          </div>
          <div className="w-full lg:w-1/3 mt-8 lg:mt-0">
            <Image
              src={img}
              alt="AI Virtual Assistant"
              className="w-[500px] h-[234.12px]"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col-2 items-center justify-center ">
        <div className="px-10 mx-10">
          <ul className="space-y-4">
            {items.map((item, index) => (
              <li key={index} className="flex items-center text-blue-900">
                <span className="text-orange-500 text-lg font-bold mr-2">
                  ✔
                </span>
                <span className="text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <ul className="space-y-4">
            {items.map((item, index) => (
              <li key={index} className="flex items-center text-blue-900">
                <span className="text-orange-500 text-lg font-bold mr-2">
                  ✔
                </span>
                <span className="text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Hero;

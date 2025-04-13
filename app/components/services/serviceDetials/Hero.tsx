import React from "react";
import Image from "next/image";


const Hero: React.FC = () => {
  const items = [
    "Cost of supplies and equipment point",
    "Change the volume of expected of contact",
    "Bibend auctor nisi elit volume are so beguiled",
  ];

  return (
    <section className="px-6 sm:px-12 lg:px-20 py-12">
      {/* Hero Text Section */}
      <div className="w-full lg:w-2/3 mt-10 lg:mt-20">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">
          AI-Powered Virtual Assistants & Chatbots
        </h1>
        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
          Our AI-powered virtual assistants and chatbots are designed to
          revolutionize the way you interact with customers. Using advanced AI
          algorithms, these intelligent assistants provide real-time support,
          answer customer queries, and assist in product searches, all while
          offering personalized recommendations based on user behavior and
          preferences. <br /> <br />
          Whether you’re looking to streamline your support team’s workload,
          enhance customer satisfaction, or drive sales, our virtual assistants
          and chatbots can transform your customer engagement strategy.
        </p>
      </div>

      {/* Business Analysis Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between bg-white mt-12 py-8 lg:py-12">
        <div className="w-full lg:w-2/3 px-4 sm:px-8">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
            Analysis of Business
          </h1>
          <p className="text-gray-600 text-sm sm:text-base mb-4">
            Efficiently unleash cross-media information without cross-media
            value. Quickly maximize timely deliverables for real-time schemas.
            Dramatically maintain clicks-and-mortar functional solutions.
          </p>

          <ul className="text-gray-600 font-semibold text-sm sm:text-base space-y-2">
            <li>- Efficiently unleash cross-media information</li>
            <li>- Quickly maximize timely deliverables</li>
            <li>- Dramatically maintain clicks-and-mortar solutions</li>
          </ul>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/3 flex justify-center lg:justify-end mt-6 lg:mt-0">
          <Image
            src="https://res.cloudinary.com/ecosheane/image/upload/v1744531876/image_1_kmj0fv.png"
            alt="AI Virtual Assistant"
            className="w-full max-w-xs sm:max-w-sm lg:max-w-md"
          />
        </div>
      </div>

      {/* List Section */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-10">
        {[...Array(2)].map((_, idx) => (
          <div key={idx} className="px-6">
            <ul className="space-y-3">
              {items.map((item, index) => (
                <li key={index} className="flex items-center text-blue-900">
                  <span className="text-orange-500 text-lg font-bold mr-2">✔</span>
                  <span className="text-sm sm:text-base">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;

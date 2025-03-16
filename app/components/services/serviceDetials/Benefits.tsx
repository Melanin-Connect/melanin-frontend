import React from "react";
import Link from "next/link";

const Benefits: React.FC = () => {
  const benefits = [
    "Enhanced Customer Experience",
    "Reduced Operational Costs",
    "Increased Efficiency",
    "Improved Product Recommendations",
    "Scalable Solution",
  ];

  return (
    <section className="py-12 flex flex-col lg:flex-row items-center justify-between bg-gray-50 px-6 lg:px-20">
      {/* Left Section */}
      <div className="bg-blue-900 text-white h-[390px] rounded-lg p-6 lg:p-10 max-w-md lg:max-w-sm">
        <h3 className="text-lg font-medium mb-4">
          Have you any question or query
        </h3>
        <h2 className="text-2xl font-bold mb-6 leading-tight">
          GET FREE <span className="text-orange-500">CONSULTATION</span> WITH OUR AGENT
        </h2>
       <Link href= "/contac">
       <button className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-6 rounded-md font-medium transition">
          Contact us
        </button></Link>
      </div>

      {/* Right Section */}
      <div className="mt-8 lg:mt-0 h-[340px] lg:ml-10 flex-1">
        <h2 className="text-xl font-semibold text-blue-900 mb-4">
          Benefit of Service
        </h2>
        <p className="text-gray-700 mb-6">
          Deliver fast, accurate, and personalized responses to customer inquiries, improving customer satisfaction and engagement.
        </p>
        <ul className="space-y-4">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-start space-x-3">
              <span className="text-orange-500 text-lg font-bold">✔</span>
              <span className="text-gray-700 text-sm">{benefit}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Benefits;

import React from "react";
import Link from "next/link";

const Services: React.FC = () => {
  const services = [
    { title: "AI-Powered Virtual Assistants & Chatbots", url: "/services/ai-chatbots" },
    { title: "AI-Generated Product Content", url: "/services/ai-product-content" },
    { title: "Blockchain-Enabled Payment Systems", url: "/services/blockchain-payments" },
    { title: "Predictive Analytics & Sales Forecasting", url: "/services/predictive-analytics" },
    { title: "AI-Powered Social Networking Platform", url: "/services/ai-social-networking" },
  ];

  return (
    <div className="flex bg-orange flex-col space-y-6">
      {/* Services List */}
      <div className="bg-[#FE7146] rounded-lg p-6">
        <h3 className="text-xl font-semibold mb-4">Services List</h3>
        <ul className="space-y-2">
          {services.map((service, index) => (
            <li key={index} className="text-gray-700 bg-white rounded-md p-2 shadow-sm">
              <Link href={service.url} legacyBehavior>
                <a className="hover:text-orange-500 transition">{service.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Contact Info - Hidden on Small Screens */}
      <div className="bg-white rounded-lg shadow-md p-6 hidden lg:block">  
        <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
        <p>71-75 Shelton Street, Covent Garden, London, United Kingdom, WC2H 9JQ</p>
        <p>+233 00 000 000</p>
        <p>+233 00 000 000</p>
        <p>info@melaninconnect.xyz</p>
      </div>
    </div>
  );
};

export default Services;

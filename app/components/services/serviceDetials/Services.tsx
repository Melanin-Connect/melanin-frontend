import React from "react";

const Services: React.FC = () => {
  const services = [
    "AI-Powered Virtual Assistants & Chatbots",
    "AI-Generated Product Content",
    "Blockchain-Enabled Payment Systems",
    "Predictive Analytics & Sales Forecasting",
    "AI-Powered Social Networking Platform",
  ];

  return (
    <div className="flex flex-col space-y-6">
      {/* Services List */}
      <div className="bg-[#FE714] rounded-lg p-6">
        <h3 className="text-xl font-semibold mb-4">Services List</h3>
        <ul className="space-y-2">
          {services.map((service, index) => (
            <li
              key={index}
              className="text-gray-700 bg-white rounded-md p-2 shadow-sm"
            >
              {service}
            </li>
          ))}
        </ul>
      </div>

      {/* Contact Info */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
        <p>30 Onyankle Street, Accra</p>
        <p>+233 200 000 000</p>
        <p>+233 000 000 000</p>
        <p>info@melaninconnect.net</p>
      </div>
    </div>
  );
};

export default Services;

import React from "react";

const BusinessModelSection: React.FC = () => {
  return (
    <section className="container bg-white mx-auto px-4 lg:px-12 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left Section */}
        <div>
          <h2 className="text-[#1F244C] text-3xl lg:text-4xl font-bold mb-6">
            Intelligent Apps for Every Business Model
          </h2>
          <p className="text-gray-600 mb-6">
            Melanin Connect is a pioneering global digital platform organizing
            from Ghana, now connecting businesses across five additional
            countries. Our platform is dedicated to empowering businesses to
            consumer (B2C) and business-to-business (B2B) networking through
            cutting-edge technology, corporate branding, digital marketing,
            video advertisements, and blockchain-enabled payment solutions.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-[#FE7146] text-lg font-bold mb-2">Vision</h3>
              <p className="text-gray-600">
                Our vision is to lead B2C intermediaries by offering
                cutting-edge platforms that simplify transactions for
                businesses and users worldwide.
              </p>
            </div>
            <div>
              <h3 className="text-[#FE7146] text-lg font-bold mb-2">Mission</h3>
              <p className="text-gray-600">
                Our mission is to create a platform where technology enables
                seamless user experiences while offering real-time
                accessibility and transparency.
              </p>
            </div>
          </div>
        </div>
        {/* Right Section */}
        <div className="relative bg-gray-300 w-full h-[300px] rounded-lg shadow-lg flex items-center justify-center">
          <p className="text-gray-600">Image Placeholder</p>
        </div>
      </div>
    </section>
  );
};

export default BusinessModelSection;

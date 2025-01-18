import React from "react";
import Image from "next/image";

const BusinessSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-orange-400 to-red-500 py-12">
      <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Melanin Connect: Empowering Businesses Globally
          </h2>
          <p className="text-white text-base lg:text-lg mb-6">
            Melanin Connect is a pioneering global digital platform originating
            from Ghana, now connecting businesses across five additional
            countries. Our platform is dedicated to empowering business-to-consumer
            (B2C) and business-to-business (B2B) interactions through
            cutting-edge technology, corporate branding, digital marketing,
            video advertisements, and blockchain-enabled payment solutions.
          </p>
          <p className="text-white text-base lg:text-lg mb-6">
            Supported by Web 3.0, Melanin Connect offers a comprehensive range
            of tools that enable businesses to streamline transactions, expand
            their digital reach, and foster genuine connections.
          </p>
          <div className="flex flex-col md:flex-row gap-6">
            {/* Vision */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="bg-pink-500 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🔗</span>
              </div>
              <p className="text-gray-700 font-semibold">
                To be the leading digital community for business and innovation,
                empowering a global network of individuals and enterprises to
                thrive through AI-driven solutions and blockchain technology.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="bg-green-500 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">☁️</span>
              </div>
              <p className="text-gray-700 font-semibold">
                Our mission is to create a platform where businesses of all
                sizes can flourish by leveraging the power of AI, blockchain,
                and Web 3.0. We aim to deliver tools and resources that drive
                digital transformation and foster global business equity.
              </p>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="relative grid grid-cols-2 gap-4">
          {/* Placeholder for 3D devices */}
          <div className="bg-white rounded-lg p-4 shadow-lg">
            <Image
              src="/placeholder-main.png"
              alt="Main device display"
              width={400}
              height={300}
              className="rounded-lg object-cover"
            />
          </div>

          {/* Placeholder for image/video */}
          <div className="relative bg-gray-800 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/placeholder-secondary.png"
              alt="Video content"
              width={300}
              height={200}
              className="object-cover opacity-60"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="bg-blue-500 text-white text-xl p-4 rounded-full shadow-lg hover:bg-blue-600 transition">
                ▶
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessSection;

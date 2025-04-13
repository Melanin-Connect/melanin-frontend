import React from "react";
import Image from "next/image";

const VisitUsSection = () => {
  return (
    <section className="bg-[#FAFAFF] relative">
      {/* Curved Background */}
      <div className="absolute top-0 left-0 w-full h-16 bg-[#FAFAFF] rounded-b-[50%]"></div>

      <div className="container  mx-auto px-4 py-16 relative z-10">
        <div className="items-start pl-10 justify-start text-start mb-12">
          <h4 className="text-orange-500 font-semibold text-sm uppercase mb-2">
            Solve Your Business Issues
          </h4>
          <h2 className="text-3xl font-bold text-[#1F244C] mb-4">
            Visit us Anytime
          </h2>
          <p className="text-gray-500 text-sm">
            Keeping your eye on the ball while performing a deep dive on the
            <br />
            start-up mentality to derive convergence.
          </p>
        </div>

        <div className="container mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            {
              icon: "https://res.cloudinary.com/ecosheane/image/upload/v1744531865/call_y8lrpd.png",
              title: "Physical Address",
              description: "71-75 Shelton Street, Covent Garden, London, United Kingdom, WC2H 9JQ",
            },
            {
              icon: "https://res.cloudinary.com/ecosheane/image/upload/v1744531880/location_lsplav.png",
              title: "Work Hours",
              description: "Monday to Friday:\n 09:00 am – 05:00 pm",
            },
            {
              icon: "https://res.cloudinary.com/ecosheane/image/upload/v1744531870/envelope_ski8ed.png",
              title: "Email Address",
              description:
                "info@melaninconnect.xyz\ncontact@melaninconnect.xyz",
            },
            {
              icon: "https://res.cloudinary.com/ecosheane/image/upload/v1744531865/clock_zrwjvf.png",
              title: "Phone Numbers",
              description: "+233 000 000 000",
            },
          ].map((detail, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm p-6 text-center"
            >
              <div className="flex justify-center mb-4">
                <Image 
                  src={detail.icon}
                  alt={detail.title}
                  width={24}
                  height={24}
                />
              </div>
              <h3 className="text-lg font-bold text-[#1F244C] mb-2">{detail.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed whitespace-pre-line">
                {detail.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisitUsSection;

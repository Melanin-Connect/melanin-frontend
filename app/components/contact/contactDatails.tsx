import React from "react";
import Image from "next/image";

const ContactDetails = () => (
  <div className="container mx-auto px-4 py-12">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {[
        {
          icon: "https://res.cloudinary.com/ecosheane/image/upload/v1744531865/call_y8lrpd.png",
          title: "Physical Address",
          // description: "30 Onyanklle Street,\n Accra - Ghana",
          description:
            "71-75 Shelton Street, Covent Garden, London, United Kingdom, WC2H 9JQ",
        },
        {
          icon: "https://res.cloudinary.com/ecosheane/image/upload/v1744531880/location_lsplav.png",
          title: "Work Hours",
          description: "Monday to Friday:\n 09:00 am – 05:00 pm",
        },
        {
          icon: "https://res.cloudinary.com/ecosheane/image/upload/v1744531870/envelope_ski8ed.png",
          title: "Email Address",
          description: "info@melaninconnect.xyz\ncontact@melaninconnect.xyz",
        },
        {
          icon: "https://res.cloudinary.com/ecosheane/image/upload/v1744531865/clock_zrwjvf.png",
          title: "Phone Numbers",
          description: "+233 000 000 000",
        },
      ].map((detail, index) => (
        <div
          key={index}
          className="bg-white rounded-xl shadow-md p-6 text-center flex flex-col items-center"
        >
          <div className="flex justify-center items-center w-12 h-12 bg-gray-100 rounded-full mb-4">
            <Image
              src={detail.icon}
              alt={detail.title}
              width={40}
              height={40}
            />
          </div>
          <h3 className="text-lg font-bold text-[#1F244C] mb-2">
            {detail.title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">
            {detail.description}
          </p>
        </div>
      ))}
    </div>
  </div>
);

export default ContactDetails;

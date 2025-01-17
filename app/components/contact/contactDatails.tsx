import React from "react";
import Image from "next/image";
import Call from "@/public/assets/call.png"
import Location from "@/public/assets/location.png"
import Envelop from "@/public/assets/envelope.png"
import Clock from "@/public/assets/clock.png"


const ContactDetails = () => (
    <div className="container mx-auto px-4 py-16 grid grid-cols-2 md:grid-cols-4 gap-6">
      {[
        {
          icon: Call,
          title: "Physical Address",
          description: "30 Onyanklle Street, \n Accra - Ghana",
        },
        {
          icon: Location,
          title: "Work Hours",
          description: "Monday to Friday:\n 09:00 am – 05:00 pm",
        },
        {
          icon: Envelop,
          title: "Email Address",
          description:
            "info@melaninconnect.net\ncontact@melaninconnect.net",
        },
        {
          icon: Clock,
          title: "Phone Numbers",
          description: "+233 541 386 626\n+233 000 000 000",
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
  );
  
  export default ContactDetails;
  
import React from "react";
import Image from "next/image";
import ContactUs from "@/public/assets/contactUs.png";

const Contact: React.FC = () => {
  return (
    <div className="w-full h-[468px] relative bg-black">
      {/* Background Image */}
      <Image
        src={ContactUs}
        alt="Contact Background"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 z-0"
      />

      {/* Text and Button Section */}
      <div className="relative z-10 max-w-5xl ml-96  mx-auto h-full flex flex-col items-start justify-center px-6 lg:px-12 text-white">
        <h6 className="text-sm font-semibold uppercase tracking-widest text-white mb-4">
          Earn Rewards and Points
        </h6>
        <p className="text-2xl lg:text-3xl font-bold leading-snug max-w-3xl mb-6">
          Participate in community activities, complete tasks, and get paid for
          your efforts. Turn your engagement into earnings today!
        </p>

        {/* Button */}
        <button className="bg-orange-500 text-white py-3 px-8 rounded-full text-lg hover:opacity-90 transition">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default Contact;

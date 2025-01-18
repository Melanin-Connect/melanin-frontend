import React from "react";
import Image from "next/image";
import ContactUs from "@/public/assets/contact us.png";

const Contact: React.FC = () => {
  return (
    <div className="relative w-full h-[463px] bg-black flex items-center justify-center rounded-2xl overflow-hidden">
      {/* Background Image */}
      <Image
        src={ContactUs}
        alt="Contact Background"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 z-0"
      />

      {/* Text and Button Section */}
      <div className="relative z-10 text-center text-white">
        <h6 className="text-sm font-semibold uppercase tracking-widest text-white mb-4">
          WE OFFER BEST SOLUTIONS
        </h6>
        <p className="text-2xl lg:text-3xl font-bold leading-snug max-w-lg mx-auto mb-6">
          Let us be a part of your <br />
          next project
        </p>

        {/* Button */}
        <button className="bg-[#303360] text-white py-3 px-8 rounded-full text-lg hover:opacity-90 transition">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default Contact;

import React from "react";
import Image from "next/image";
import Link from "next/link";

const Contact: React.FC = () => {
  return (
    <div className="relative w-full h-[463px] bg-black flex items-center justify-center rounded-2xl overflow-hidden p-6">
      {/* Background Image */}
      <Image
        src="https://res.cloudinary.com/ecosheane/image/upload/v1744531865/contact_us_atrl0r.png"
        alt="Contact Background"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 z-0"
      />

      {/* Text and Button Section */}
      <div className="relative z-10 text-center text-white max-w-xl">
        <h6 className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-white mb-4">
          We Offer Best Solutions
        </h6>
        <p className="text-xl sm:text-2xl lg:text-3xl font-bold leading-snug mb-6">
          Let us be a part of your <br />
          next project
        </p>

        {/* Button */}
        <Link href="/contact">
          <button
            className="bg-[#303360] text-white py-3 px-6 sm:px-8 rounded-full text-base sm:text-lg hover:opacity-90 transition"
            aria-label="Contact Us"
          >
            Contact Us
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Contact;

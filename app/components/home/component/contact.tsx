import React from "react";
import Image from "next/image";
import Link from "next/link"

const Contact: React.FC = () => {
  return (
    <div className="w-full h-[468px] relative bg-black md:bg-transparent">
      {/* Background Image */}
      <Image
        src="https://res.cloudinary.com/ecosheane/image/upload/v1744531865/contactUs_cfqubk.png"
        alt="Contact Background"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 z-0 md:block hidden"
      />
  
      {/* Text and Button Section */}
      <div className="relative z-10 max-w-5xl  mx-auto h-full flex flex-col  items-center justify-center ml-50 px-6 lg:px-12 text-white bg-white md:bg-transparent p-6 md:p-0">
        <h6 className="text-sm font-semibold sm:text-white text-black uppercase tracking-widest text-black mb-4">
          Earn Rewards and Points
        </h6>
        <p className=" sm:items-start sm:text-white items-center justify-center sm:justify-start sm:text-sm text-2xl lg:text-3xl font-bold leading-snug max-w-3xl mb-6 text-center md:text-left text-black">
          Participate in community activities, complete tasks, and get paid for
          your efforts. Turn your engagement into earnings today!
        </p>

      <Link href="/contact" >
      
       {/* Button */}
       <button id="downloads" className="bg-orange-500 text-white py-3 px-8 rounded-full text-lg hover:opacity-90 transition">
          Contact Us
        </button>
        </Link>
      </div>
    </div>
  );
};

export default Contact;

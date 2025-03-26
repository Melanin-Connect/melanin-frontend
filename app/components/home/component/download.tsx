import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaApple, FaGooglePlay } from "react-icons/fa";

const Contact: React.FC = () => {
  return (
    <div id="download" className="w-full h-auto py-12 mt-20 px-4 sm:px-6 lg:px-12 text-black flex flex-col items-center justify-center lg:flex-row lg:items-center lg:justify-center">
      {/* Text and Button Section */}
      <div className="relative z-10 max-w-5xl w-full text-center lg:text-center">
        
        <p className="text-black lg:ml-32 text-xl text-center xl:text-center lg:text-center  sm:text-2xl lg:text-3xl font-bold leading-snug max-w-3xl mb-6">
          Download the App and start engaging now 
        </p>
  
        {/* Buttons Section */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
          <Link href="https://play.google.com/store" target="_blank">
            <button className="flex items-center bg-green-600 text-white py-3 px-6 rounded-full text-lg hover:opacity-90 transition">
              <FaGooglePlay className="mr-2" /> Get it on Google Play
            </button>
          </Link>
          <Link href="https://www.apple.com/app-store/" target="_blank">
            <button className="flex items-center bg-black text-white py-3 px-6 rounded-full text-lg hover:opacity-90 transition">
              <FaApple className="mr-2" /> Get it on App Store
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;

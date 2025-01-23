
import React from "react";
import Image from "next/image";
import img from "@/public/assets/img.png"



const ImageSection = () => {
    return (
      <div className="my-8">
        <div className="relative">
          <Image
            src={img} // Placeholder image
            alt="Marketing Strategy"
            className="w-full rounded-lg shadow-md"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="bg-white rounded-full p-3 shadow-md">
              <i className="fas fa-play text-orange-500 text-2xl"></i>
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default ImageSection;
  
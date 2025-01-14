import React from "react";
import Gradient1 from "@/public/assets/Gradient1.png";
import Image from "next/image";

const stat = () => {
  return (
    <div className="flex items-center bg-white h-[500px] relative">
    <div className="flex-1 relative w-[298.39px] ">
     
      <Image
        src={Gradient1}
        alt="gradient"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0"
      />
   
      <div className="relative ml-10 z-10 p-12">
       
    </div>

   
     
    </div>
  </div>
  )
}

export default stat
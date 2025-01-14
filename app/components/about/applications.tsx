import React from 'react'
import heading from "@/public/assets/heading.png";
import Image from 'next/image';

const applications = () => {
  return (
    <div className="bg-white">
         <div className="text-center mb-8 md:mb-12">
        <Image
          src={heading}
          width={40}
          height={78}
          alt="Heading Icon"
          className="mx-auto"
        />
        <h6 className="text-orange-500 text-lg md:text-sm font-bold uppercase">
          Companies projects
        </h6>
        <p className="mt-2 md:mt-4 w-full text-gray-800 font-semibold text-2xl md:text-[24] lg:text-[30] font-epilogue">
        The best application features you
       
          <br />
          won't find anywhere
        </p>
      </div>
    </div>
  )
}

export default applications
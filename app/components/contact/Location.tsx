import React from "react";
import Address from "@/public/assets/address.png"
import Address1 from "@/public/assets/address (1).png"
import Image from "next/image";

const Locations = () => (
    <div className="container mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="relative group overflow-hidden rounded-lg shadow-lg">
        <Image
          src={Address1}
          alt="Accra Office"
          className="w-full h-64 object-cover"
        />
        <div className="absolute inset-0 flex ml-10 mt-40 items-start justify-start flex-col">
          <p className="text-white text-lg font-semibold">Accra</p> 
          <p className="text-white">30 Onyankle Street</p>
          <p className="text-white">Abelemkpe</p>
        </div>
      </div>
      <div className="relative group overflow-hidden rounded-lg shadow-lg">
        <Image
          src={Address}
          alt="Kumasi Office"
          className="w-full h-64 object-cover"
        />
        <div className="absolute inset-0 flex ml-10 mt-40 items-start justify-start flex-col">
          <p className="text-white text-lg font-semibold">Accra</p> 
          <p className="text-white">30 Onyankle Street</p>
          <p className="text-white">Abelemkpe</p>
        </div>
      </div>
    </div>
  );
  
  export default Locations;
  
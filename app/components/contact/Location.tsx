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
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p className="text-white text-lg font-semibold">Accra</p>
          <p>30 Onyankle Street
          Abelemkpe</p>
        </div>
      </div>
      <div className="relative group overflow-hidden rounded-lg shadow-lg">
        <Image
          src={Address}
          alt="Kumasi Office"
          className="w-full h-64 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p className="text-white text-lg font-semibold">Kumasi</p>
          <p>30 Onyankle Street
          Abelemkpe</p>
        </div>
      </div>
    </div>
  );
  
  export default Locations;
  
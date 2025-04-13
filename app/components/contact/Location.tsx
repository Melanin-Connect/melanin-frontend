import React from "react";
import Image from "next/image";

const Locations = () => (
  <div className="container mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-8">
    <div className="relative group overflow-hidden rounded-lg shadow-lg">
      <Image
        src="https://res.cloudinary.com/ecosheane/image/upload/v1744531864/address_gtb9mg.png"
        alt="Accra Office"
        className="w-full h-64 object-cover"
      />

      <div className="absolute inset-0 flex ml-10 mt-40 items-start justify-start flex-col">
        <p className="text-white text-lg font-semibold">London</p>
        <p className="text-white">71-75 Shelton Street, Covent Garden,</p>
        <p className="text-white"> United Kingdom, WC2H 9JQ</p>
      </div>
    </div>
    <div className="relative group overflow-hidden rounded-lg shadow-lg">
      <Image
        src="https://res.cloudinary.com/ecosheane/image/upload/v1744531863/address_1_vbxf7f.png"
        alt="Kumasi Office"
        className="w-full h-64 object-cover"
      />
      <div className="absolute inset-0 flex ml-10 mt-40 items-start justify-start flex-col">
        <p className="text-white text-lg font-semibold">London</p>
        <p className="text-white">71-75 Shelton Street, Covent Garden,</p>
        <p className="text-white"> United Kingdom, WC2H 9JQ</p>
      </div>
    </div>
  </div>
);

export default Locations;

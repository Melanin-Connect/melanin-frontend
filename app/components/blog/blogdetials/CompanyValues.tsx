import React from "react";
import Image from "next/image";
import img from "@/public/assets/images_top.png"

const CompanyValues = () => {
    return (
      <div>
        <h3 className="text-xl font-semibold mb-4">Company Values & The Relationship</h3>
        <p className="text-gray-600 leading-relaxed">
          Proactively engage worldwide methodologies with web-enabled technology.
          Interactively coordinate proactive e-commerce via process-centric
          "outside the box" thinking. Completely pursue scalable customer service
          through sustainable potentialities.
        </p>
        <div className="flex gap-4 mt-4">
          <Image
            src={img}// Placeholder image
            alt="Value 1"
            className="w-1/2 rounded-lg "
          />
          <Image
            src={img} // Placeholder image
            alt="Value 2"
            className="w-1/2 rounded-lg "
          />
        </div>
      </div>
    );
  };
  
  export default CompanyValues;
  
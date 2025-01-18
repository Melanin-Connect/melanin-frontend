import React from "react";
import Image from "next/image";
import image from "@/public/assets/image.png"

const ConceptSection = () => {
    return (
      <div>
        <h3 className="text-xl font-semibold mb-4">Concept</h3>
        <div className="flex items-start gap-4">
         
          <ul className="space-y-2">
            <li className="text-gray-600">- Efficiently unleash cross-media information</li>
            <li className="text-gray-600">- Quickly maximize timely deliverables</li>
            <li className="text-gray-600">
              - Dramatically maintain clicks-and-mortar solutions
            </li>
          </ul>
          <Image
            src={image} // Placeholder image
            alt="Concept"
            className="w-1/3"
          />
        </div>
      </div>
    );
  };
  
  export default ConceptSection;
  
import React from "react";
import forbs from "@/public/logos/forbes.png"
import gosport from "@/public/logos/Vector (1).png"
import sodicam from "@/public/logos/Vector (2).png"
import daignostics from "@/public/logos/Vector (3).png"
import itv from "@/public/logos/itv.png"
import nrik from "@/public/logos/rik.png"
import fiba from "@/public/logos/Vector.png"
import Image from "next/image";

const logos = [
  { src: forbs, alt: "Forbes", width: 144, height: 80 },
  { src: gosport, alt: "Go Sport", width: 144, height: 80 },
  { src: sodicam, alt: "Sodicam", width: 144, height: 80 },
  { src: daignostics, alt: "Diagnostics", width: 144, height: 80 },
  { src: itv, alt: "ITV", width: 144, height: 80 },
  { src: nrik, alt: "Nrik", width: 144, height: 80 },
  { src: fiba, alt: "FIBA", width: 144, height: 80 },
];

const LogoSection: React.FC = () => {
  return (
    <section className="bg-white  py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap justify-center items-center gap-6">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="w-36 h-20 flex items-center justify-center bg-transparent border border-gray-500 rounded-full p-4"
            >
              <Image
                src={typeof logo.src === 'string' ? logo.src : logo.src.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoSection;

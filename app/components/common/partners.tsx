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
  { src: forbs, alt: "Forbes" },
  { src: gosport, alt: "Go Sport" },
  { src: sodicam, alt: "Sodicam" },
  { src: daignostics, alt: "Diagnostics" },
  { src: itv, alt: "ITV" },
  { src: nrik, alt: "Nrik" },
  { src: fiba, alt: "FIBA" },
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
                width={144}
                height={80}
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

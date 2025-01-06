import React from "react";
import Image from "next/image";
import SVG from "@/public/assets/SVG.png";
import SVG1 from "@/public/assets/SVG (1).png";
import SVG2 from "@/public/assets/SVG (2).png";
import Man from "@/public/assets/man.png";
import sign from "@/public/assets/sign.png";
import heading from "@/public/assets/heading.png";
import SVG3 from "@/public/assets/Group.png"
import Buttet from "@/public/assets/bullet.png"
import Video from "@/public/assets/video-1.jpg.png";
import play from "@/public/assets/Background.png"

const StatsSection: React.FC = () => {
  return (
    <section className="bg-white py-8 px-4 md:py-16 md:px-6 lg:px-12">
      {/* Header Section */}
      <div className="text-center mb-8 md:mb-12">
        <Image src={heading} width={40} height={78} alt="Heading Icon" className="mx-auto" />
        <h1 className="text-orange-500 text-lg md:text-sm font-bold uppercase">
          YOU&apos;VE GOT BUSINESS, WE&apos;VE GOT BRILLIANT MINDS
        </h1>
        <p className="mt-2 md:mt-4 w-full text-gray-800 font-semibold text-lg md:text-[24] lg:text-[30] font-epilogue">
          At Melanin Connect, we transform bold business ideas into exceptional digital solutions. 
          Our vision is to 
          <br />
          build powerful brands and deliver world-class services that empower businesses to thrive in an ever-evolving
          <br />
          digital landscape.
        </p>
      </div>

      {/* Main Content Section */}
      <div className="flex flex-col md:flex-row justify-between items-start">
        {/* Left Content */}
        <div className="w-full md:w-1/2 space-y-4 md:space-y-6">
          <p className="text-gray-800 text-md mb-4">
            At Melanin Connect, we transform bold business ideas into exceptional digital solutions. Our vision is to
            build powerful brands and deliver world-class services that empower businesses to thrive in an ever-evolving
            digital landscape.
          </p>
          <ul className="space-y-2">
            {[
              "Decade of Expertise",
              "Tailored Digital Solutions",
              "Focus on What Matters",
              "Committed to Your Success",
            ].map((text, idx) => (
              <li key={idx} className="flex items-center text-gray-600">
                <Image src={Buttet} width={10} height={10} alt="CEO" className="mr-2" /> {text}
              </li>
            ))}
          </ul>

          <div className="flex items-center mt-4 md:mt-6">
            <Image src={Man} width={40} height={40} alt="CEO" className="rounded-full" />
            <div className="ml-2 md:ml-4">
              <p className="text-gray-900 font-semibold">CEO & Co-founder</p>
              <p className="text-gray-500">Melanin Connect</p>
            </div>
            <Image src={sign} width={80} height={80} alt="Signature" className="ml-4 md:ml-6" />
          </div>
        </div>

        <div className="w-full md:w-1/2 mt-4 md:mt-0 flex gap-4 md:gap-6">
          <div className="flex flex-col md:flex-row w-full gap-4 h-auto">
            <div className="flex flex-col gap-4 transform pt-4 md:pt-10 w-full md:w-1/2">
              {[
                { img: SVG2, value: "280k", label: "Projects Launched" },
                { img: SVG3, value: "80%", label: "Active Engagement" },
              ].map((card, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center text-center bg-gray-100 h-[150px] md:h-[170px] w-full p-2 rounded-lg shadow-sm"
                >
                  <Image src={card.img} width={40} height={40} alt={`Stat ${idx + 1}`} />
                  <div className="text-black text-2xl md:text-3xl font-bold mt-2">{card.value}</div>
                  <p className="text-gray-700 mt-2 font-medium">{card.label}</p>
                </div>
              ))}
            </div>

            {/* Second Column */}
            <div className="flex flex-col gap-4 transform w-full md:w-1/2">
              {[
                { img: SVG, value: "360+", label: "Satisfied Clients" },
                { img: SVG1, value: "14+", label: "Awards Winning" },
              ].map((card, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center text-center bg-gray-100 h-[150px] md:h-[170px] w-full p-2 rounded-lg shadow-sm"
                >
                  <Image src={card.img} width={40} height={40} alt={`Stat ${idx + 3}`} />
                  <div className="text-black text-2xl md:text-3xl font-bold mt-2">{card.value}</div>
                  <p className="text-gray-700 mt-2 font-medium">{card.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center lg:mb-80 mt-14 mb-24 md:m-20">
        <div className="w-full max-w-[901px] h-auto rounded-2xl relative" style={{
          background: "linear-gradient(135deg, #FF764A, #FF4A68)",
          zIndex: 1
        }}>
          <div className="flex justify-center mt-2 rounded-lg absolute top-0 left-0 w-full h-auto items-center">
            <Image src={Video} width={1201} height={350} alt="Professional Video" className="rounded-lg shadow-lg w-full h-auto" />
            <div className="absolute flex items-center justify-center">
              <Image src={play} width={50} height={50} alt="Play Button" className="rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;

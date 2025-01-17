import React from "react";
import Image from "next/image";
import Frame from "@/public/assets/Frame.png"
import Icon from "@/public/assets/icon.png"
import Icon1 from "@/public/assets/icon (1).png"
import Icon2 from "@/public/assets/icon (2).png"
import Icon3 from "@/public/assets/icon (3).png"


const ProfessionalIntro = () => {
  const highlights = [
    {
      icon: Icon,
      title: "Professionally trained",
      description:
        "Holds in these matters principles all selection right rejects.",
    },
    {
      icon:Icon1,
      title: "Team is available 7 days a week",
      description: "No one rejects dislikes avoids sure but because those who do.",
    },
    {
      icon: Icon2,
      title: "Focused on achieving results",
      description:
        "Loves or pursues or desires obtain of itself because it is pain.",
    },
    {
      icon: Icon3,
      title: "Exceeds our client's expectations",
      description:
        "Trivial example of us ever all undertakes laborious.",
    },
  ];

  return (
    <section className="container mx-auto text-black bg-white px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Text */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            We will help you <br /> You know you want it
          </h2>
          <p className="text-gray-600">
            We&apos;re not just a team of tech enthusiasts; we&apos;re passionate about
            helping you unlock new possibilities and achieve your business
            potential. With every project, our goal is to make sure you&apos;re
            supported, informed, and inspired to reach new heights. Let&apos;s bring
            your vision to life—because we know you want it, and we&apos;re here to
            make it happen.
          </p>
        </div>
        {/* Right Image */}
        <div className="relative w-full h-[300px]">
          {/* Replace with actual image */}
          <Image
            src={Frame}
            alt="Team Illustration"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>

      {/* Highlights */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12 text-center">
        {highlights.map((highlight, index) => (
          <div key={index} className="space-y-4">
            <div className="w-16 h-16 mx-auto rounded-full flex items-center justify-center">
              <Image 
                src={highlight.icon} 
                alt={highlight.title}
                width={60}
                height={60}
                className="text-orange-500"
              />
            </div>
            <h4 className="text-lg font-bold">{highlight.title}</h4>
            <p className="text-gray-600">{highlight.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProfessionalIntro;

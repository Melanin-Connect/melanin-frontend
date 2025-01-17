import React from "react";
import Image from "next/image";
import Team1 from "@/public/assets/mate.png";
import Team2 from "@/public/assets/mate1.png";
import Team3 from "@/public/assets/mate2.png";
import Team4 from "@/public/assets/mate3.png";
import HoverImage from "@/public/assets/hover.png";

const TeamMembers = () => {
  const members = [
    { name: "Jhan Wick", role: "Product Designer", img: Team1 },
    { name: "Jhan Wick", role: "Product Designer", img: Team2 },
    { name: "Jhan Wick", role: "Product Designer", img: Team3 },
    { name: "Jhan Wick", role: "Product Designer", img: Team4 },
    { name: "Jhan Wick", role: "Product Designer", img: Team2 },
    { name: "Jhan Wick", role: "Product Designer", img: Team4 },
  ];

  return (
    <section className="bg-gray-100 text-black py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Team Members</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {members.map((member, index) => (
            <div
              key={index}
              className="text-center bg-white rounded-lg p-4 border border-gray-200"
            >
              {/* Image Section */}
              <div className="relative w-full h-80 group overflow-hidden rounded-lg">
                {/* Base Image */}
                <Image
                  src={member.img}
                  alt={member.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg transition-transform duration-300 transform group-hover:scale-105"
                />
                {/* Full Overlay on Hover */}
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Image
                    src={HoverImage}
                    alt="Hover Overlay"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
              </div>
              {/* Text Section */}
              <h3 className="text-xl font-semibold mt-4">{member.name}</h3>
              <p className="text-gray-600 text-sm">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamMembers;

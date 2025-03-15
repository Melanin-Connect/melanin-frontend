import React from "react";
import Image from "next/image";
import { FaXTwitter, FaFacebookF, FaInstagram } from "react-icons/fa6";
import Team1 from "@/public/assets/mate.png";
import Team2 from "@/public/assets/mate1.png";
import Team3 from "@/public/assets/mate2.png";
import Team4 from "@/public/assets/mate3.png";

const TeamMembers = () => {
  const members = [
    {
      name: "Jhan Wick",
      role: "Product Designer",
      img: Team1,
      x: "https://twitter.com/jhanwick",
      facebook: "https://facebook.com/jhanwick",
      instagram: "https://instagram.com/jhanwick",
    },
    {
      name: "Jhan Wick",
      role: "Product Designer",
      img: Team2,
      x: "https://twitter.com/jhanwick",
      facebook: "https://facebook.com/jhanwick",
      instagram: "https://instagram.com/jhanwick",
    },
    {
      name: "Jhan Wick",
      role: "Product Designer",
      img: Team3,
      x: "https://twitter.com/jhanwick",
      facebook: "https://facebook.com/jhanwick",
      instagram: "https://instagram.com/jhanwick",
    },
    {
      name: "Jhan Wick",
      role: "Product Designer",
      img: Team4,
      x: "https://twitter.com/jhanwick",
      facebook: "https://facebook.com/jhanwick",
      instagram: "https://instagram.com/jhanwick",
    },
  ];

  return (
    <section className="bg-gray-100 text-black py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Team Members</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {members.map((member, index) => (
            <div
              key={index}
              className="text-center bg-white rounded-lg p-4 border border-gray-200"
            >
              {/* Image Section */}
              <div className="relative w-full h-80 group overflow-hidden rounded-lg">
                <Image
                  src={member.img}
                  alt={member.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg transition-transform duration-300 transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"></div>
              </div>
              {/* Text Section */}
              <h3 className="text-xl font-semibold mt-4">{member.name}</h3>
              <p className="text-gray-600 text-sm">{member.role}</p>
              {/* Social Media Links */}
              <div className="flex justify-center mt-4 space-x-4">
                <a href={member.x} target="_blank" rel="noopener noreferrer">
                  <FaXTwitter className="text-xl text-blue-500 hover:text-blue-700" />
                </a>
                <a
                  href={member.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookF className="text-xl text-blue-700 hover:text-blue-900" />
                </a>
                <a
                  href={member.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="text-xl text-pink-500 hover:text-pink-700" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamMembers;

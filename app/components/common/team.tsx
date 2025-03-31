import React from "react";
import Image from "next/image";
import { FaXTwitter, FaFacebookF, FaInstagram } from "react-icons/fa6";
import Team1 from "@/public/assets/mate3.jpg";

const TeamMembers = () => {
  const member = {
    name: "Edward Owusu",
    role: "CEO & Founder",
    img: Team1,
    description:
      "A highly skilled digital media strategist with extensive experience in advertising, social media management, mobile applications, content creation, and graphic design. Adept at crafting and executing effective advertising strategies that drive engagement and brand growth. Experienced in managing the full project lifecycle—from strategic planning and team resourcing to performance monitoring and the timely delivery of high-quality outputs. Possesses excellent communication skills, fostering strong leadership among colleagues and building valuable relationships with clients and stakeholders across all professional levels.",
    x: "https://twitter.com/jhanwick",
    facebook: "https://facebook.com/jhanwick",
    instagram: "https://instagram.com/jhanwick",
  };

  return (
    <section className="bg-gray-100 text-black py-16">
        <h2 className="text-3xl font-bold text-center">Meet the Founder</h2>
        <div className="bg-gray-100 text-black py-16 flex items-center justify-center min-h-screen">
      <div className="bg-white rounded-lg p-8 border lg:border-gray-100 lg:bg-gray-50 border-gray-200 w-full sm:w-3/4 md:w-1/2 lg:w-1/2">
        <div className="relative w-full h-80 group overflow-hidden flex items-center justify-center">
          <div className="mx-auto rounded-full overflow-hidden mb-4 w-40 h-40">
            <Image
              src={member.img}
              alt={member.name}
              width={160}
              height={160}
              layout="auto"
              objectFit="auto"
              className=""
            />
          </div>
        </div>
        <h3 className="text-xl font-semibold mt-4 text-center">
          {member.name}
        </h3>
        <p className="text-gray-600 text-sm text-center">{member.role}</p>
        <p className="text-gray-600 text-md my-4 text-center  ">
          {member.description}
        </p>
        <div className="flex justify-center mt-4 space-x-4">
          <a href={member.x} target="_blank" rel="noopener noreferrer">
            <FaXTwitter className="text-xl text-blue-500 hover:text-blue-700" />
          </a>
          <a href={member.facebook} target="_blank" rel="noopener noreferrer">
            <FaFacebookF className="text-xl text-blue-700 hover:text-blue-900" />
          </a>
          <a href={member.instagram} target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-xl text-pink-500 hover:text-pink-700" />
          </a>
        </div>
      </div>
    </div>
  
    
    </section>
  );
};

export default TeamMembers;

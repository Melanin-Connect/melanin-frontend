import React from "react";
import Gradient1 from "@/public/assets/Gradient1.png";
import Image from "next/image";
import avatar1 from "@/public/assets/avatar (1).png";
import avatar2 from "@/public/assets/avatar.png";
import avatar3 from "@/public/assets/avatar2.png";
import avatar4 from "@/public/assets/_avatar.png";
import Symbol from "@/public/assets/Symbol.png"

const ReviewSection: React.FC = () => {
  return (
    <div className="flex items-center bg-white h-[500px] relative">
      {/* Left Section with Gradient and Text */}
      <div className="flex-1 relative w-[298.39px] ">
        {/* Gradient Background */}
        <Image
          src={Gradient1}
          alt="gradient"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0"
        />
        {/* Content */}
        <div className="relative ml-10 z-10 p-12">
          <h6 className="uppercase text-sm font-semibold tracking-widest text-white mb-4">
            Client’s Reviews
          </h6>
          <h2 className="text-2xl lg:text-3xl font-bold text-white leading-snug mb-6">
            What Our Clients are <br /> Saying About Us
          </h2>
          {/* Avatars */}
          <div className="flex items-center space-x-4">
            <Image
              src={avatar1}
              alt="Client 1"
              className="w-16 h-16 rounded-full object-cover"
            />
            <Image
              src={avatar2}
              alt="Client 2"
              className="w-16 h-16 rounded-full object-cover"
            />
            <Image
              src={avatar3}
              alt="Client 3"
              className="w-16 h-16 rounded-full object-cover"
            />
            <Image
              src={avatar4}
              alt="Client 4"
              className="w-16 h-16 rounded-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Right Section with Review and Rating */}
      <div className="flex-1 flex flex-col items-start justify-center p-12">
        <p className="text-lg text-black leading-relaxed mb-6">
          Melanin Connect has been an incredible partner to work with. Their
          team is always quick to respond to our queries and provide proactive
          solutions. We truly feel that they are an extension of our in-house
          team, and we’re excited about the ongoing partnership and the future
          we’re building together.
        </p>
        <div className="flex items-center space-x-4">
          <div className="flex flex-col text-gray-700">
            <p className="text-2xl text-black font-bold ">Thomas Walimes</p>
            <p className="text-sm font-medium">Marketing Manager</p>
            <div className="flex pt-5 space-x-1">
            {Array.from({ length: 5 }, (_, index) => (
             <Image
             src={Symbol} 
             alt="star"/>
            ))}
          </div>
          </div>
          {/* Star Ratings */}
          
        </div>
      </div>
    </div>
  );
};

export default ReviewSection;

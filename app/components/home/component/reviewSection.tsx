"use client";
import React, { useState } from "react";
import Image from "next/image";

const ReviewSection: React.FC = () => {
  // Define reviews data
  const reviews = [
    {
      name: "Thomas Walimes",
      role: "Marketing Manager",
      text: "Melanin Connect has been an incredible partner to work with. Their team is always quick to respond to our queries and provide proactive solutions. We truly feel that they are an extension of our in-house team, and we’re excited about the ongoing partnership and the future we’re building together.",
      stars: 5,
    },
    {
      name: "Alice Johnson",
      role: "Product Designer",
      text: "Working with this team has been an absolute pleasure. They truly understand our needs and consistently deliver high-quality results. Highly recommended!",
      stars: 4,
    },
    {
      name: "Michael Smith",
      role: "Software Engineer",
      text: "A fantastic experience! The team is knowledgeable, efficient, and always willing to go the extra mile to ensure client satisfaction.",
      stars: 5,
    },
    {
      name: "Jane Doe",
      role: "CEO",
      text: "This partnership has been transformative for our business. The level of professionalism and expertise is unmatched.",
      stars: 5,
    },
  ];

  // State for the selected review
  const [selectedReview, setSelectedReview] = useState(0);
  const avatar1 ="https://res.cloudinary.com/ecosheane/image/upload/v1744531862/avatar1_lo3ksk.png";
  const avatar2 ="https://res.cloudinary.com/ecosheane/image/upload/v1744531861/avatar2_e9s5ut.png";
  const avatar3 ="https://res.cloudinary.com/ecosheane/image/upload/v1744531861/avatar3_nxy2kk.png";
  const avatar4 ="https://res.cloudinary.com/ecosheane/image/upload/v1744531862/avatar_gsyofl.png";

  return (
    <div className="flex flex-col lg:flex-row items-center bg-white h-auto lg:h-[500px] relative">
      {/* Left Section with Gradient and Avatars */}
      <div className="flex-1 relative w-full lg:w-[298.39px]">
        {/* Gradient Background */}
        <Image
          src="https://res.cloudinary.com/ecosheane/image/upload/v1744531871/Gradient1_nvvuj8.png"
          alt="gradient"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0"
        />
        {/* Content */}
        <div className="relative z-10 p-6 lg:p-12">
          <h6 className="uppercase text-xs lg:text-sm font-semibold tracking-widest text-white mb-2 lg:mb-4">
            Client’s Reviews
          </h6>
          <h2 className="text-xl lg:text-3xl font-bold text-white leading-snug mb-4 lg:mb-6">
            What Our Clients are <br /> Saying About Us
          </h2>
          {/* Avatars */}
          <div className="grid grid-cols-4 gap-2 lg:flex lg:items-center lg:space-x-4">
            {[avatar1, avatar2, avatar3, avatar4].map((avatar, index) => (
              <Image
                key={index}
                src={avatar}
                alt={`Client ${index + 1}`}
                width={64}
                height={64}
                className={`w-12 h-12 lg:w-16 lg:h-16 rounded-full object-cover cursor-pointer ${
                  selectedReview === index ? "ring-4 ring-white" : ""
                }`}
                onClick={() => setSelectedReview(index)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Right Section with Review and Rating */}
      <div className="flex-1 flex flex-col items-start justify-center p-6 lg:p-12">
        <p className="text-base lg:text-lg text-black leading-relaxed mb-4 lg:mb-6">
          {reviews[selectedReview].text}
        </p>
        <div className="flex items-start space-x-4">
          <div className="flex flex-col text-gray-700">
            <p className="text-lg lg:text-2xl text-black font-bold">
              {reviews[selectedReview].name}
            </p>
            <p className="text-xs lg:text-sm font-medium">
              {reviews[selectedReview].role}
            </p>
            <div className="flex pt-3 lg:pt-5 space-x-1">
              {Array.from({ length: reviews[selectedReview].stars }).map(
                (_, index) => (
                  <Image
                    key={index}
                    src="https://res.cloudinary.com/ecosheane/image/upload/v1744531887/Symbol_scoibv.png"
                    alt="star"
                    width={20}
                    height={20}
                    className="lg:w-6 lg:h-6"
                  />
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewSection;

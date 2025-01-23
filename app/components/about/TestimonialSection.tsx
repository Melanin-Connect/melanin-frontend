'use client'
import React, { useState } from "react";
import Image from "next/image";
import img from "@/public/assets/test.png";

const testimonials = [
  {
    id: 1,
    text: "Melanin Connect has been an incredible partner to work with. Their team is always quick to respond to our queries and provide proactive solutions. We truly feel that they are an extension of our in-house team, and we’re excited about the ongoing partnership and the future we’re building together.",
    author: "Thomas Walimes",
    role: "Marketing Manager",
    rating: 5,
  },
  {
    id: 2,
    text: "The collaboration with Melanin Connect has exceeded all expectations. Their expertise and commitment have significantly contributed to our growth. I highly recommend them for anyone looking to take their business to the next level.",
    author: "Sarah Johnson",
    role: "Product Manager",
    rating: 5,
  },
  {
    id: 3,
    text: "Working with Melanin Connect has been a game-changer for us. They provide incredible insights and actionable strategies that truly make a difference. Their team is simply outstanding!",
    author: "James Carter",
    role: "CEO, Carter Tech",
    rating: 5,
  },
];

const TestimonialSection: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const handleNext = () => {
    setCurrentPage((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrevious = () => {
    setCurrentPage((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const currentTestimonial = testimonials[currentPage];

  return (
    <section className="relative bg-white py-16">
      <div className="container mx-auto w-[1114.55px] px-4 lg:px-12 text-center">
        {/* Testimonial Box */}
        <div className="rounded-s-full rounded-e-full bg-[#FFF8E1] p-8 m-20 lg:p-12 relative">
          {/* Quotation Mark */}
          <div className="flex justify-center mb-4">
            <div className="text-[#FE7146] text-4xl font-bold">&ldquo;</div>
          </div>
          {/* Testimonial Text */}
          <p className="text-gray-700 text-lg lg:text-xl font-medium mb-6">
            {currentTestimonial.text}
          </p>
          {/* Author Info */}
          <h3 className="text-[#1F244C] text-lg font-bold">
            {currentTestimonial.author}
          </h3>
          <p className="text-gray-500">{currentTestimonial.role}</p>
          {/* Stars */}
          <div className="flex justify-center mt-4">
            <div className="text-[#FE7146] text-xl">
              {"⭐".repeat(currentTestimonial.rating)}
            </div>
          </div>
          {/* Floating Avatars */}
          <div className="absolute -top-10 left-8 lg:left-16">
            <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <Image src={img} alt="Avatar 1" />
            </div>
          </div>
          <div className="absolute -top-6 right-8 lg:right-16">
            <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <Image src={img} alt="Avatar 2" />
            </div>
          </div>
          <div className="absolute -bottom-8 left-5">
            <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <Image src={img} alt="Avatar 3" />
            </div>
          </div>
          <div className="absolute bottom-36 -left-20">
            <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <Image src={img} alt="Avatar 3" />
            </div>
          </div>
          <div className="absolute -bottom-4 right-5">
            <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <Image src={img} alt="Avatar 4" />
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8">
          <button
            onClick={handlePrevious}
            className="bg-[#FE7146] text-white px-4 py-2 rounded-lg hover:bg-[#FE7146]/90 transition"
          >
            Previous
          </button>
          <button
            onClick={handleNext}
            className="bg-[#FE7146] text-white px-4 py-2 rounded-lg hover:bg-[#FE7146]/90 transition"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;

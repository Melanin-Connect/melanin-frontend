'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import img from '@/public/assets/test.png';

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

  const handleDotClick = (index: number) => {
    setCurrentPage(index);
  };

  const currentTestimonial = testimonials[currentPage];

  return (
    <section className="relative bg-white py-16">
      <div className="container mx-auto px-4 lg:px-12 md:w-[1114.55px]  sm:w-[373px] text-center">
        {/* Testimonial Box */}
        <div className="rounded-s-full rounded-e-full bg-[#FFF8E1] p-8 lg:p-12 relative">
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
          <div className="absolute hidden lg:block -top-10 left-8 lg:left-16">
            <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <Image src={img} alt="Avatar 1  " />
            </div>
          </div>
          <div className="absolute hidden lg:block -top-6 right-8 lg:right-16">
            <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <Image src={img} alt="Avatar 2  " />
            </div>
          </div>
          <div className="absolute hidden lg:block -bottom-8 left-5 lg:left-12">
            <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <Image src={img} alt="Avatar 3  " />
            </div>
          </div>
          {/* <div className="absolute hidden lg:block bottom-36 -left-20 lg:left-16">
            <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <Image src={img} alt="Avatar 3  " />
            </div>
          </div> */}
          <div className="absolute hidden lg:block -bottom-4 right-5 lg:right-16">
            <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <Image src={img} alt="Avatar 4  " />
            </div>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 rounded-full ${
                currentPage === index ? "bg-[#FE7146]" : "bg-gray-300"
              } transition-colors duration-300`}
              aria-label={`Go to testimonial ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;

import React from "react";

const TestimonialSection: React.FC = () => {
  return (
    <section className="relative bg-white py-16">
      <div className="container mx-auto px-4 lg:px-12">
        {/* Testimonial Box */}
        <div className="bg-white rounded-3xl shadow-lg p-8 lg:p-12 relative">
          <div className="text-center">
            {/* Quotation Mark */}
            <div className="flex justify-center mb-4">
              <div className="text-[#FE7146] text-4xl">&ldquo;</div>
            </div>
            {/* Testimonial Text */}
            <p className="text-gray-700 text-lg lg:text-xl font-medium mb-6">
              Melanin Connect has been an incredible partner to work with. Their
              team is always quick to respond to our queries and provide
              proactive solutions. We truly feel that they are an extension of
              our in-house team, and we’re excited about the ongoing partnership
              and the future we’re building together.
            </p>
            {/* Author Info */}
            <h3 className="text-[#1F244C] text-lg font-bold">Thomas Walimes</h3>
            <p className="text-gray-500">Marketing Manager</p>
          </div>
          {/* Stars */}
          <div className="flex justify-center mt-6">
            <div className="text-[#FE7146] text-xl">
              ⭐⭐⭐⭐⭐
            </div>
          </div>
        </div>
      </div>

      {/* Floating Avatars */}
      <div className="absolute -top-12 left-8 lg:left-16">
        <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-lg">
          {/* Replace with actual avatar image */}
          <img src="https://via.placeholder.com/150" alt="Avatar 1" />
        </div>
      </div>
      <div className="absolute -top-6 right-8 lg:right-16">
        <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-lg">
          {/* Replace with actual avatar image */}
          <img src="https://via.placeholder.com/150" alt="Avatar 2" />
        </div>
      </div>
      <div className="absolute -bottom-8 left-12">
        <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-lg">
          {/* Replace with actual avatar image */}
          <img src="https://via.placeholder.com/150" alt="Avatar 3" />
        </div>
      </div>
      <div className="absolute -bottom-4 right-12">
        <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-lg">
          {/* Replace with actual avatar image */}
          <img src="https://via.placeholder.com/150" alt="Avatar 4" />
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;

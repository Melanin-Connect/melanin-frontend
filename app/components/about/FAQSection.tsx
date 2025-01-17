import React from "react";

const FAQSection: React.FC = () => {
  return (
    <section className="bg-[#F8F8FB] py-16">
      <div className="container mx-auto px-4 lg:px-12">
        <div className="text-center mb-12">
          <p className="text-[#FE7146] uppercase font-semibold mb-2">
            Frequently Asked Questions
          </p>
          <h2 className="text-[#1F244C] text-3xl lg:text-4xl font-bold">
            If you want to know anything, inquire us
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[1, 2, 3, 4].map((_, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-lg font-bold text-[#1F244C] mb-4">
                What is Melanin Connect?
              </h3>
              <p className="text-gray-600">
                Melanin Connect is a digital community platform...
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

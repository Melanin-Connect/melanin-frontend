import React from "react";

const FooterCTA: React.FC = () => {
  return (
    <section className="bg-purple-700 text-white py-12 px-8 text-center rounded-lg">
      <h3 className="text-3xl font-bold mb-4">We Offer Best Solutions</h3>
      <p className="mb-6">
        Let us be a part of your next project. Contact us today!
      </p>
      <button className="bg-white text-purple-700 py-3 px-6 rounded-full">
        Contact Us
      </button>
    </section>
  );
};

export default FooterCTA;

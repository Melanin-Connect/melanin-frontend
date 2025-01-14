import React from "react";

const Newsletter = () => {
  return (
    <section className="bg-gradient-to-r from-purple-700 to-red-500 py-16 text-white text-center">
      <h2 className="text-2xl md:text-3xl font-bold mb-4">
        Do you want to be updated?
      </h2>
      <p className="mb-6">
        Kindly fill the newsletter below to keep updated with the latest trends
        to grow your business.
      </p>
      <form className="flex flex-col md:flex-row items-center justify-center gap-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full md:w-1/3 px-4 py-2 rounded-lg border"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full md:w-1/3 px-4 py-2 rounded-lg border"
        />
        <button className="bg-orange-500 px-6 py-2 rounded-lg">
          Subscribe Now
        </button>
      </form>
    </section>
  );
};

export default Newsletter;

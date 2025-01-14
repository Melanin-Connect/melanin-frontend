import React from "react";

const Newsletter = () => {
  return (
    <section className="bg-[#2E2C55] py-12">
      <div className="text-center text-white">
        <h2 className="text-2xl md:text-3xl font-bold">
          Do you want to be updated?
        </h2>
        <p className="text-sm md:text-base mt-2">
          Kindly fill the newsletter below to keep updated with the latest
          trends to grow your business.
        </p>
      </div>
      <form className="mt-8 flex flex-col md:flex-row items-center justify-center gap-4 px-4">
        <div className="relative w-full md:w-1/4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-3 rounded-full text-sm border-none outline-none focus:ring-2 focus:ring-orange-500"
          />
          <span className="absolute top-1/2 transform -translate-y-1/2 right-4 text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="h-5 w-5"
              viewBox="0 0 16 16"
            >
              <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
              <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zM8 4a4 4 0 1 0 0 8A4 4 0 0 0 8 4z" />
            </svg>
          </span>
        </div>
        <div className="relative w-full md:w-1/4">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 rounded-full text-sm border-none outline-none focus:ring-2 focus:ring-orange-500"
          />
          <span className="absolute top-1/2 transform -translate-y-1/2 right-4 text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="h-5 w-5"
              viewBox="0 0 16 16"
            >
              <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm2.5 0a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7zM4 14V3h8v11H4z" />
            </svg>
          </span>
        </div>
        <button
          type="submit"
          className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-full text-sm transition duration-300"
        >
          Subscribe Now
        </button>
      </form>
    </section>
  );
};

export default Newsletter;

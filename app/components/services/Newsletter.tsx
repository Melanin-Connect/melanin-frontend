import React from "react";

const Newsletter = () => {
  return (
    <section className="relative   py-40 bg-[#303360] text-white">
      {/* Curved Background SVG */}
      <svg
        className="absolute top-0 left-0 h-full w-full"
        viewBox="0 100 1440 920"
        preserveAspectRatio="none"
      >
        <path
          fill="#FFFFFF"
          d="M0,128L30,133.3C60,139,120,149,180,160C240,171,300,181,360,186.7C420,192,480,192,540,186.7C600,181,660,171,720,160C780,149,840,139,900,133.3C960,128,1020,128,1080,144C1140,160,1200,192,1260,213.3C1320,235,1380,245,1410,250L1440,256L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"
        ></path>
      </svg>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <h2 className="text-2xl md:text-3xl font-bold">
          Do you want to be updated?
        </h2>
        <p className="text-sm md:text-base mt-2">
          Kindly fill the newsletter below to keep updated with the latest
          trends to grow your business.
        </p>
      </div>

      {/* Form */}
      <form className="relative z-10 mt-8 text-black flex flex-col md:flex-row items-center justify-center gap-4 px-4">
        {/* Name Input */}
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

        {/* Email Input */}
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

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-full text-sm transition duration-300"
        >
          Subscribe Now
        </button>
      </form>
      <div className="mt-20 border-t border-gray-700"></div>

      

    </section>
  );
};

export default Newsletter;

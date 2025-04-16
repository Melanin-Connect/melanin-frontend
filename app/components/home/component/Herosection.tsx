'use client'
import Image from "next/image";
import Link from "next/link";
import Img from "../../../../public/assets/imgs.png";
import { motion } from "framer-motion";


const HeroSection = () => {
 
  return (
    <section className="relative bg-white overflow-hidden">
      {/* Animated gradient background - hidden on mobile */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="hidden md:block absolute top-20 right-0 w-1/4 h-[500px] z-0 overflow-visible"
      >
        <div className="absolute top-0 right-0 w-[200%] h-full bg-gradient-to-r from-[#c94117] via-[#e44d1a] to-[#f05e2c] rounded-l-full animate-pulse-slow"></div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 flex flex-col lg:flex-row items-center gap-8 lg:gap-0">
          {/* Left Column - Text Content with animations */}
          <div className="w-full lg:w-1/2 text-left relative">
            {/* Animated yellow circle decoration - hidden on smallest screens */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="hidden sm:block absolute -left-12 md:-left-20 top-0 z-0"
            >
              <div className="w-16 md:w-24 h-16 md:h-24 rounded-full bg-yellow-400"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="relative text-black text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold leading-tight mb-4 md:mb-6 font-epilogue z-10">
                Empowering Your Business With AI and Blockchain Solutions
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <p className="text-gray-600 font-epilogue text-sm sm:text-base lg:text-lg font-normal lg:leading-relaxed mb-6 md:mb-8 max-w-xl">
                Unlock the future of digital commerce with AI-powered tools,
                seamless blockchain payment systems, and personalized solutions
                designed to boost your brand and streamline your operations.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-6 md:mb-8"
            >
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto bg-[#FF7043] text-white text-sm md:text-base py-2 md:py-3 px-6 md:px-10 rounded-full hover:bg-orange-600 transition shadow-lg hover:shadow-xl hover:shadow-orange-300/30"
                >
                  Register Now!
                </motion.button>
              </Link>

              <Link href="/about">
                <motion.div
                  whileHover={{ x: 5 }}
                  className="w-full sm:w-auto text-center sm:text-left text-black py-2 md:py-3 px-4 text-sm md:text-base font-medium flex items-center justify-center sm:justify-start cursor-pointer"
                >
                  Learn More <span className="ml-1 transition-transform duration-300">→</span>
                </motion.div>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="flex items-center justify-center sm:justify-start"
            >
              <div className="flex text-yellow-400">
                <span>★★★★★</span>
              </div>
              <span className="ml-2 text-gray-600 text-sm md:text-base">4.8/5 Rating</span>
            </motion.div>

            {/* Animated red dot decoration - hidden on smallest screens */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.7, delay: 1, ease: "easeOut" }}
              className="hidden sm:block absolute bottom-0 right-1/4 z-0"
            >
              <div className="w-6 md:w-8 h-6 md:h-8 rounded-full bg-red-400"></div>
            </motion.div>
          </div>

          {/* Right Column - Mobile App Showcase with animations */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="w-full lg:w-1/2 relative mt-8 lg:mt-0"
          >
            {/* Mobile phone with app UI */}
            <div className="relative z-10 flex justify-center items-center mb-10 sm:mb-28 md:mb-20">
              <motion.div
                initial={{ y: 30 }}
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 6, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                className="scale-75 sm:scale-90 md:scale-100"
              >
                <Image
                  src="https://res.cloudinary.com/ecosheane/image/upload/v1744531875/hero-mobil_g0knzf.png"
                  width={400}
                  height={800}
                  alt="Mobile App Interface"
                  className="relative z-20"
                />
              </motion.div>

              {/* Animated cryptocurrency icons - responsive sizes */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="absolute z-30 top-1/4 -left-2 sm:-left-4"
              >
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                  className="w-12 h-12 sm:w-14 md:w-16 sm:h-14 md:h-16 rounded-full bg-teal-500 flex items-center justify-center shadow-lg"
                >
                  <span className="text-white text-base sm:text-lg md:text-xl">₮</span>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                className="absolute z-30 top-10 right-4 sm:right-10"
              >
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                  className="w-12 h-12 sm:w-14 md:w-16 sm:h-14 md:h-16 rounded-full bg-orange-400 flex items-center justify-center shadow-lg"
                >
                  <span className="text-white text-base sm:text-lg md:text-xl">₿</span>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 1.1 }}
                className="absolute z-30 bottom-1/4 -right-2 sm:right-0"
              >
                <motion.div
                  animate={{ y: [0, -12, 0] }}
                  transition={{ duration: 5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                  className="w-12 h-12 sm:w-14 md:w-16 sm:h-14 md:h-16 rounded-full bg-blue-400 flex items-center justify-center shadow-lg"
                >
                  <span className="text-white text-base sm:text-lg md:text-xl">Ξ</span>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 1.3 }}
                className="absolute z-30 bottom-20 -left-4 sm:-left-8"
              >
                <motion.div
                  animate={{ y: [0, -7, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                  className="w-12 h-12 sm:w-14 md:w-16 sm:h-14 md:h-16 md:ml-10 rounded-full bg-purple-500 flex items-center justify-center shadow-lg"
                >
                  <span className="text-white text-base sm:text-lg md:text-xl">◊</span>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 1.5 }}
                className="absolute z-30 bottom-1/3 left-1/4"
              >
                <motion.div
                  animate={{ y: [0, -9, 0] }}
                  transition={{ duration: 3.8, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                  className="w-12 h-12 sm:w-14 md:w-16 sm:h-14 md:h-16 rounded-full bg-blue-600 flex items-center justify-center shadow-lg"
                >
                  <span className="text-white text-base sm:text-lg md:text-xl">≈</span>
                </motion.div>
              </motion.div>
            </div>

            {/* User testimonial bubble - Hidden on mobile screens */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.7 }}
              className="hidden sm:block absolute bottom-0 sm:ml-16 md:ml-32 z-40"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white px-6 md:px-10 py-2 md:py-4 shadow-[0_8px_30px_rgba(255,165,0,0.2)] lg:px-20 rounded-full flex items-center"
              >
                <div className="flex -space-x-2 mr-2">
                  <Image
                    src={Img}
                    width={65}
                    height={65}
                    alt="User 1"
         
                  />
                </div>
                <span className="text-sm font-medium">6 Million User Use This App</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};



export default HeroSection;
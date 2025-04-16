"use client"
import React, { useEffect } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const StatsSection: React.FC = () => {
  // Animation controls for different sections
  const headerControls = useAnimation();
  const leftContentControls = useAnimation();
  const statsControls = useAnimation();
  const videoControls = useAnimation();
  
  // Set up intersection observers for each section
  const [headerRef, headerInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [leftContentRef, leftContentInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [statsRef, statsInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [videoRef, videoInView] = useInView({ threshold: 0.2, triggerOnce: true });
  
  // Trigger animations when sections come into view
  useEffect(() => {
    if (headerInView) {
      headerControls.start("visible");
    }
    if (leftContentInView) {
      leftContentControls.start("visible");
    }
    if (statsInView) {
      statsControls.start("visible");
    }
    if (videoInView) {
      videoControls.start("visible");
    }
  }, [headerInView, leftContentInView, statsInView, videoInView, headerControls, leftContentControls, statsControls, videoControls]);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };
  
  const numberAnimation = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { 
        duration: 0.7, 
        ease: [0.34, 1.56, 0.64, 1] // Spring-like bounce
      }
    }
  };

  return (
    <section className="bg-white py-8 px-4 md:py-16 md:px-6 lg:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 relative z-10">
        {/* Decorative elements */}
        <motion.div 
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-orange-500 opacity-10 blur-3xl z-0"
        />
        
        {/* Header Section with animations */}
        <motion.div 
          ref={headerRef}
          initial="hidden"
          animate={headerControls}
          variants={fadeInUp}
          className="text-center mb-8 md:mb-12"
        >
          <motion.div 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Image
              src="https://res.cloudinary.com/ecosheane/image/upload/v1744531873/heading_xfhov1.png"
              width={40}
              height={78}
              alt="Heading Icon"
              className="mx-auto"
            />
          </motion.div>

          <motion.h1 
            variants={fadeInUp}
            className="text-orange-500 text-lg md:text-sm font-bold uppercase"
          >
            YOU&apos;VE GOT BUSINESS, WE&apos;VE GOT BRILLIANT MINDS
          </motion.h1>

          <motion.p 
            variants={fadeInUp}
            className="mt-2 md:mt-4 w-full text-gray-800 font-semibold text-lg md:text-[24] lg:text-[30] font-epilogue"
          >
            Partner with us to unlock innovative digital solutions, data-driven
            insights, and
            <br className="hidden md:block" /> cutting-edge tools that will help your business thrive in
            today&apos;s competitive
            <br className="hidden md:block" />
            landscape
          </motion.p>
        </motion.div>

        {/* Main Content Section */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 md:gap-12">
          {/* Left Content */}
          <motion.div 
            ref={leftContentRef}
            initial="hidden"
            animate={leftContentControls}
            variants={staggerContainer}
            className="w-full md:w-1/2 space-y-4 md:space-y-6"
          >
            <motion.p 
              variants={fadeInUp}
              className="text-gray-800 text-md mb-4"
            >
              At Melanin Connect, we transform bold business ideas into
              exceptional digital solutions. Our vision is to build powerful
              brands and deliver world-class services that empower businesses to
              thrive in an ever-evolving digital landscape.
            </motion.p>
            
            <motion.ul 
              variants={staggerContainer}
              className="space-y-2"
            >
              {[
                "Decade of Expertise",
                "Tailored Digital Solutions",
                "Focus on What Matters",
                "Committed to Your Success",
              ].map((text, idx) => (
                <motion.li 
                  key={idx} 
                  variants={fadeInUp}
                  className="flex items-center text-gray-600"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.4 + idx * 0.1, duration: 0.4 }}
                  >
                    <Image
                      src="https://res.cloudinary.com/ecosheane/image/upload/v1744531864/bullet_y3jtuf.png"
                      width={10}
                      height={10}
                      alt="Bullet"
                      className="mr-2"
                    />
                  </motion.div>{" "}
                  {text}
                </motion.li>
              ))}
            </motion.ul>

            <motion.div 
              variants={fadeInUp}
              className="flex items-center mt-4 md:mt-6"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Image
                  src="https://res.cloudinary.com/ecosheane/image/upload/v1744531881/mate3_rkwrhq.jpg"
                  width={40}
                  height={40}
                  alt="CEO"
                  className="rounded-full border-2 border-orange-400"
                />
              </motion.div>
              <div className="ml-2 md:ml-4">
                <p className="text-gray-900 font-semibold">CEO & Founder</p>
                <p className="text-gray-500">Edward Owusu</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Stats Cards Grid */}
          <motion.div 
            ref={statsRef}
            initial="hidden"
            animate={statsControls}
            variants={staggerContainer}
            className="w-full md:w-1/2 mt-4 md:mt-0 flex gap-4 md:gap-6"
          >
            <div className="flex flex-col md:flex-row w-full gap-4 h-auto">
              <div className="flex flex-col gap-4 transform pt-4 md:pt-10 w-full md:w-1/2">
                {[
                  {
                    img: "https://res.cloudinary.com/ecosheane/image/upload/v1744531887/SVG_oixxag.png",
                    value: "280k",
                    label: "Projects Launched",
                  },
                  {
                    img: "https://res.cloudinary.com/ecosheane/image/upload/v1744531887/SVG_2_j3e9i9.png",
                    value: "80%",
                    label: "Active Engagement",
                  },
                ].map((card, idx) => (
                  <motion.div
                    key={idx}
                    variants={scaleIn}
                    whileHover={{ 
                      y: -5, 
                      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" 
                    }}
                    className="flex flex-col items-center text-center bg-gray-100 h-[150px] md:h-[170px] w-full p-2 rounded-lg shadow-sm"
                  >
                    <motion.div
                      initial={{ rotate: 0 }}
                      whileHover={{ rotate: 15, scale: 1.1 }}
                      transition={{ duration: 0.4 }}
                    >
                      <Image
                        src={card.img}
                        width={40}
                        height={40}
                        alt={`Stat ${idx + 1}`}
                      />
                    </motion.div>
                    <motion.div 
                      variants={numberAnimation}
                      className="text-black text-2xl md:text-3xl font-bold mt-2"
                    >
                      {card.value}
                    </motion.div>
                    <p className="text-gray-700 mt-2 font-medium">{card.label}</p>
                  </motion.div>
                ))}
              </div>

              {/* Second Column */}
              <div className="flex flex-col gap-4 transform w-full md:w-1/2">
                {[
                  {
                    img: "https://res.cloudinary.com/ecosheane/image/upload/v1744531887/SVG_oixxag.png",
                    value: "360+",
                    label: "Satisfied Clients",
                  },
                  {
                    img: "https://res.cloudinary.com/ecosheane/image/upload/v1744531887/SVG_1_qao7eg.png",
                    value: "14+",
                    label: "Awards Winning",
                  },
                ].map((card, idx) => (
                  <motion.div
                    key={idx}
                    variants={scaleIn}
                    whileHover={{ 
                      y: -5, 
                      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" 
                    }}
                    className="flex flex-col items-center text-center bg-gray-100 h-[150px] md:h-[170px] w-full p-2 rounded-lg shadow-sm"
                  >
                    <motion.div
                      initial={{ rotate: 0 }}
                      whileHover={{ rotate: 15, scale: 1.1 }}
                      transition={{ duration: 0.4 }}
                    >
                      <Image
                        src={card.img}
                        width={40}
                        height={40}
                        alt={`Stat ${idx + 3}`}
                      />
                    </motion.div>
                    <motion.div 
                      variants={numberAnimation}
                      className="text-black text-2xl md:text-3xl font-bold mt-2"
                    >
                      {card.value}
                    </motion.div>
                    <p className="text-gray-700 mt-2 font-medium">{card.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Video Section with animations */}
        <motion.div 
          ref={videoRef}
          initial="hidden"
          animate={videoControls}
          variants={fadeInUp}
          className="flex justify-center lg:mb-80 mt-14 mb-24 md:m-20"
        >
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="w-full max-w-[901px] h-auto rounded-2xl relative"
            style={{
              background: "linear-gradient(135deg, #FF764A, #FF4A68)",
              zIndex: 1,
            }}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex justify-center mt-2 rounded-lg absolute top-0 left-0 w-full h-auto items-center"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative w-full"
              >
                <Image
                  src="https://res.cloudinary.com/ecosheane/image/upload/v1744531894/video-1.jpg_xtcpz2.png"
                  width={1201}
                  height={350}
                  alt="Professional Video"
                  className="rounded-lg shadow-lg w-full h-auto"
                />
                
                <motion.div 
                  className="absolute inset-0 flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ 
                      delay: 0.8, 
                      duration: 0.5, 
                      type: "spring", 
                      stiffness: 300 
                    }}
                    className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white shadow-xl flex items-center justify-center cursor-pointer"
                  >
                    <motion.div
                      animate={{ 
                        scale: [1, 1.2, 1],
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity,
                        repeatType: "loop" 
                      }}
                    >
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="24" 
                        height="24" 
                        viewBox="0 0 24 24" 
                        fill="#FF4A68"
                      >
                        <polygon points="5,3 19,12 5,21" />
                      </svg>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
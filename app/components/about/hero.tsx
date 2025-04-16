'use client'
import React, { useEffect } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const SolutionsSection: React.FC = () => {
  // Animation controls
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  // Trigger animations when section comes into view
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      }
    }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };

  return (
    <section className="bg-white py-16" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial="hidden"
        animate={controls}
        variants={fadeInUp}
      >
        <div className="flex flex-wrap items-start">
          {/* Group1 */}
          <motion.div 
            className="w-full md:w-1/2 mb-8 md:mb-0 pr-0 md:pr-4"
            variants={fadeInRight}
          >
            <motion.div 
              className="h-auto w-full rounded-lg bg-gradient-to-r from-orange-500 to-red-500"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="https://res.cloudinary.com/ecosheane/image/upload/v1744531880/int_g6pvdi.png"
                alt="Icon"
                height={658}
                width={589}
                className="w-full h-auto"
              />
            </motion.div>
          </motion.div>
          
          {/* Group2 */}
          <motion.div 
            className="w-full md:w-1/2 pl-0 md:pl-4"
            variants={fadeInLeft}
          >
            {/* Mission Blocks */}
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 gap-8"
              variants={staggerContainer}
            >
              {/* Mission Block 1 */}
              <motion.div 
                className="flex items-start"
                variants={scaleIn}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div>
                  <motion.div 
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src="https://res.cloudinary.com/ecosheane/image/upload/v1744531861/Background_1_ywleg9.png"
                      alt="Icon"
                      width={60}
                      height={60}
                      className="pb-5"
                    />
                  </motion.div>
                  <h2 className="text-black font-bold">Vision</h2>
                  <p className="text-gray-700 text-sm lg:text-base font-medium">
                    To be the leading digital community for business and
                    innovation, empowering a global network of individuals and
                    enterprises to thrive through AI-driven solutions and
                    blockchain technology.
                  </p>
                </div>
              </motion.div>
              
              {/* Mission Block 2 */}
              <motion.div 
                className="flex items-start"
                variants={scaleIn}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div>
                  <motion.div 
                    whileHover={{ rotate: -5, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src="https://res.cloudinary.com/ecosheane/image/upload/v1744531862/Background1_xgk3u1.png"
                      alt="Icon"
                      width={60}
                      height={60}
                      className="pb-5"
                    />
                  </motion.div>
                  <h2 className="text-black font-bold">Mission</h2>
                  <p className="text-gray-700 text-sm lg:text-base font-medium">
                    Our mission is to create a platform where businesses of all
                    sizes can flourish by leveraging the power of AI, blockchain,
                    and Web 3.0. We aim to deliver exceptional tools and
                    resources that drive digital transformation, enhance customer
                    experiences, and build a connected, equitable global business
                    community.
                  </p>
                </div>
              </motion.div>
            </motion.div>
            
            {/* Image Section */}
            <motion.div 
              className="mt-8"
              variants={fadeInUp}
            >
              <motion.div 
                className="rounded-xl overflow-hidden"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.4 }}
              >
                <Image
                  src="https://res.cloudinary.com/ecosheane/image/upload/v1744531894/video_dwrn2p.png"
                  width={200}
                  height={100}
                  alt="AI Marketing Strategies"
                  className="object-cover w-full h-auto"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
      </div>
    </section>
  );
};

export default SolutionsSection;
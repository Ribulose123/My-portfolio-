import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { FaArrowDown } from 'react-icons/fa';
import StarsCanvas from './canvas/Stars';

const Hero = () => {
  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.5 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section 
      id='home' 
      className='relative w-full min-h-screen flex items-center justify-center overflow-hidden'
      style={{
        background: 'linear-gradient(to bottom right, #0a0618, #1a1038)'
      }}
    >
      {/* Stars Canvas - Ensure it covers full viewport */}
      <div className='absolute inset-0 w-full h-full z-0'>
        <StarsCanvas />
      </div>

      {/* Content Container */}
      <div className='container mx-auto px-4 sm:px-6 py-24 z-10 text-center relative'>
        <motion.div
          className='flex flex-col items-center justify-center gap-6'
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Main Heading */}
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 leading-tight"
          >
            {['O', 'K', 'P', 'O','S','I', 'O', ' ', 'D', 'A', 'V', 'I', 'D'].map((letter, i) => (
              <motion.span 
                key={i} 
                variants={letterVariants} 
                className="inline-block"
              >
                {letter === ' ' ? '\u00A0' : letter}
              </motion.span>
            ))}
          </motion.h1>

          {/* Subheading */}
          <motion.p
            className="text-base sm:text-lg md:text-xl text-gray-300 max-w-md md:max-w-2xl mb-6 md:mb-8"
            variants={itemVariants}
          >
            Frontend Developer | Innovator | Problem Solver
            <br />
            Crafting engaging digital experiences with passion.
          </motion.p>

          {/* CTA Button */}
          <motion.a
            href="#work"
            className="px-6 py-3 sm:px-8 sm:py-4 bg-purple-600 hover:bg-purple-700 text-white font-medium sm:font-semibold rounded-full shadow-lg transition-all duration-300 flex items-center gap-2 text-sm sm:text-base"
            variants={itemVariants}
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
            }}
            whileTap={{ scale: 0.95 }}
          >
            Explore My Work 
            <motion.span
              animate={{ y: [0, 3, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <FaArrowDown />
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { FaArrowDown } from 'react-icons/fa';
import StarsCanvas from './canvas/Stars';

const Hero = () => {
  // Variants for individual letters of the name
  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  // Variants for the overall content staggering
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.5,
      },
    },
  };

  // Variants for subheading and button
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id='home' className='min-h-screen flex items-center justify-center relative overflow-hidden text-white'>
      
      {/* Darker and richer animated background gradient */}
      <div className='absolute inset-0 bg-gradient-to-br from-gray-900 via-zinc-950 to-blue-950 z-0 animate-gradient'>
        <StarsCanvas/>
      </div>

      <div className='container mx-auto px-6 py-24 z-10 text-center relative'>
        <motion.div
          className='flex flex-col items-center justify-center gap-6'
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Main Heading (YOUR NAME) - Fixed text size */}
          <motion.h1
            className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl xl:text-[10rem] font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 leading-tight tracking-tight"
            style={{ lineHeight: '0.9' }}
          >
            {['O', 'K', 'P', 'O','S','I', 'O', ' ', 'D', 'A', 'V', 'I', 'D'].map((letter, i) => (
              <motion.span key={i} variants={letterVariants} className="inline-block">
                {letter === ' ' ? '\u00A0' : letter}
              </motion.span>
            ))}
          </motion.h1>

          {/* Subheading with animation */}
          <motion.p
            className="text-lg md:text-2xl text-gray-300 max-w-2xl mb-8"
            variants={itemVariants}
          >
            Frontend Developer | Innovator | Problem Solver
            <br />
            Crafting engaging digital experiences with passion.
          </motion.p>

          {/* Optimized CTA Button */}
          <motion.a
            href="#work"
            className="px-8 py-4 bg-purple-600 text-white font-semibold rounded-full shadow-lg hover:bg-purple-700 transition-all duration-300 flex items-center gap-2"
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

      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          background-size: 400% 400%;
          animation: gradient 15s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
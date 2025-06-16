import React from 'react';
import { Tilt } from 'react-tilt';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full '>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-lg shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-[#151030] rounded-lg py-8 px-8 h-[250px] sm:w-[292px] flex flex-col justify-center items-center' // Square dimensions
      >
        <img
          src={icon}
          alt={title.toLowerCase()}
          className='w-16 h-16 object-contain mb-4'
        />
        <h3 className='text-white text-xl font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <section className='bg-[#0a0618] py-16 px-4 sm:px-8' id='about'> {/* Dark background container */}
      <div className='max-w-7xl mx-auto'>
        <motion.div variants={textVariant()}>
          <p className='text-secondary text-lg text-white'>Introduction</p>
          <h2 className='text-white text-4xl font-bold mt-2'>Overview.</h2>
        </motion.div>

        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-6 text-[#a3a3a3] text-lg max-w-3xl leading-relaxed'
        >
          I'm a skilled software developer with experience in TypeScript and
          JavaScript, and expertise in frameworks like React, Next.js. I'm a quick learner and collaborate closely with clients to
          create efficient, scalable, and user-friendly solutions that solve
          real-world problems. Let's work together to bring your ideas to life!
        </motion.p>

        <div className='mt-16 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center'>
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
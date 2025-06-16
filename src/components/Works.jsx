import React from 'react';

// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { projects } from '../constants';
import { github } from '../assets';

const Works = () => {
  // Animation variants (keep your existing ones)
  const fadeIn = (direction, type, delay, duration) => ({
    hidden: {
      x: direction === 'left' ? 100 : direction === 'right' ? -100 : 0,
      y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: 'easeOut',
      },
    },
  });

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const ProjectCard = ({
    index,
    name,
    description,
    tags,
    image,
    source_code_link,
  }) => {
    return (
      <motion.div variants={fadeIn('up', 'spring', index * 0.2, 0.75)}  className="bg-[#151030] p-5 rounded-2xl sm:w-[360px] w-full h-full shadow-lg hover:shadow-purple-500/30 transition-shadow">
    
          <div className="relative w-full h-[230px] group">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover rounded-2xl group-hover:opacity-80 transition-opacity duration-300"
            />

            <div className="absolute inset-0 flex justify-end m-3">
              <motion.div
                whileHover={{ scale: 1.1 }}
                onClick={() => window.open(source_code_link, '_blank')}
                className="bg-[#0d0a1f] w-10 h-10 rounded-full flex justify-center items-center cursor-pointer shadow-lg hover:shadow-purple-500/50 transition-shadow"
              >
                <img
                  src={github}
                  alt="source code"
                  className="w-1/2 h-1/2 object-contain"
                />
              </motion.div>
            </div>
          </div>

          <div className="mt-5">
            <h3 className="text-white font-bold text-[24px] hover:text-purple-400 transition-colors">
              {name}
            </h3>
            <p className="mt-2 text-[#adb7be] text-[14px] min-h-[60px]">
              {description}
            </p>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <p
                key={`${name}-${tag.name}`}
                className={`text-[12px] font-medium ${tag.color} bg-black/50 px-2 py-1 rounded-full`}
              >
                #{tag.name}
              </p>
            ))}
          </div>
      </motion.div>
    );
  };

  return (
    <section className="bg-[#0a0618] relative py-16 px-6 sm:px-16">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="w-full"
      >
        <motion.div variants={fadeIn('up', 'spring', 0.1, 1)}>
          <p className="text-[#915eff] text-[14px] uppercase tracking-wider">
            My work
          </p>
          <h2 className="text-white font-black text-[40px] xs:text-[50px] mt-2">
            Projects
          </h2>
        </motion.div>

        <motion.div
          variants={fadeIn('up', 'spring', 0.2, 1)}
          className="mt-3 text-[#adb7be] text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcase my skills and experience through real-world
          examples. Each project is briefly described with links to code
          repositories. They reflect my ability to solve complex problems, work
          with different technologies, and manage projects effectively.
        </motion.div>

        <motion.div
          variants={staggerContainer}
          className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7"
        >
          {projects.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Works;
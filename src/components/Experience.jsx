import React, { useRef } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { experiences } from "../constants";

const ExperienceCard = ({ experience }) => {
  const ref = useRef(null);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ 
        opacity: 1, 
        x: 0,
        transition: {
          type: "spring",
          stiffness: 100,
          damping: 10,
          duration: 0.8
        }
      }}
      viewport={{ margin: "-100px 0px -100px 0px" }}
      className="relative mb-16 last:mb-0"
    >
      {/* Timeline dot - centered on the line */}
      <div className="absolute left-[-4.8rem] top-0 w-15 h-15 rounded-full flex items-center justify-center border-4 border-[#1d1836] z-10"
           style={{ backgroundColor: experience.iconBg }}>
        <img
          src={experience.icon}
          alt={experience.company_name}
          className="w-3/5 h-3/5 object-contain"
        />
      </div>

      {/* Content card */}
      <div className="bg-[#1d1836] p-6 rounded-lg shadow-lg border-2 border-purple-500">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
          <h3 className="text-white text-xl sm:text-2xl font-bold">{experience.title}</h3>
          <p className="text-secondary text-base sm:text-lg font-semibold mt-1 sm:mt-0">
            {experience.company_name}
          </p>
        </div>
        <p className="text-gray-400 text-sm mt-2">{experience.date}</p>

        <ul className="mt-5 list-disc ml-5 space-y-2">
          {experience.points.map((point, i) => (
            <motion.li 
              key={i}
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ 
                opacity: 1, 
                x: 0,
                transition: { delay: 0.1 * i }
              }}
              viewport={{ once: true }}
              className="text-gray-300 text-sm sm:text-base pl-1 tracking-wider"
            >
              {point}
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <section className="bg-[#0a0618] py-16 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-white text-lg">What I have done so far</p>
          <h2 className="text-white text-3xl sm:text-4xl font-bold mt-2">
            Work Experience.
          </h2>
        </motion.div>

        <div className="mt-12 sm:mt-20 relative">
          {/* Vertical line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="absolute left-[1rem] top-0 bottom-0 w-0.5 bg-purple-500 origin-top"
          />

          <div className="pl-16">
            {experiences.map((experience, index) => (
              <ExperienceCard 
                key={index}
                experience={experience}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
import { motion } from "framer-motion";
import { useState } from "react";
import { educationData } from "../../utils/Constants";

const EducationItem = ({ education, index, activeIndex, setActiveIndex }) => (
  <motion.div
    className={`group cursor-pointer p-6 border-l-2 relative hover:bg-gray-800/20 rounded-r-lg
      ${activeIndex === index ? "border-blue-500" : "border-gray-700"}`}
    onClick={() => setActiveIndex(index)}
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: index * 0.1 }}
    whileHover={{ x: 4 }}
  >
    <div
      className={`absolute -left-[9px] top-8 h-4 w-4 rounded-full border-2
      ${
        activeIndex === index
          ? "bg-blue-500 border-blue-500 shadow-glow"
          : "bg-gray-900 border-gray-700"
      }
      group-hover:border-blue-400 transition-all duration-300`}
    />
    <h4
      className={`font-semibold mb-2 transition-colors duration-300 text-lg
      ${activeIndex === index ? "text-blue-400" : "text-gray-300"}
      group-hover:text-blue-400`}
    >
      {education.degree}
    </h4>
    <p className="text-sm text-gray-500 group-hover:text-gray-400">
      {education.year}
    </p>
  </motion.div>
);

function Education() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <motion.div
      className="grid md:grid-cols-[340px,1fr] gap-12 relative"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="space-y-1 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent rounded-lg -z-10" />
        {educationData.map((education, index) => (
          <EducationItem
            key={index}
            education={education}
            index={index}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          />
        ))}
      </div>

      <motion.div
        key={activeIndex}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="relative overflow-hidden rounded-2xl glass-card group hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="p-10 relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <a
                href={educationData[activeIndex].link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent hover:from-blue-300 hover:to-blue-500 transition-all duration-300"
              >
                {educationData[activeIndex].school}
              </a>
              <h3 className="text-xl text-gray-300 font-medium">
                {educationData[activeIndex].role}
              </h3>
            </div>

            <ul className="space-y-6">
              {educationData[activeIndex].experiences.map(
                (experience, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4 group"
                  >
                    📍
                    <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                      {experience}
                    </span>
                  </motion.li>
                )
              )}
            </ul>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Education;

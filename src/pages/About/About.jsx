import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SkillCard from "./SkillCard";
import Education from "./Education";
import { skillsData, tabs } from "../../utils/SkillsData";
import Items from "../../components/Items";

const About = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [activeTab, setActiveTab] = useState("mernStack");

  return (
    <motion.section
      className="w-full p-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto space-y-10">
        <Items
          Number="01"
          title="About Me"
          des="Know more about me, my skills, and my educational background."
        />
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <motion.h2
            className="text-3xl font-bold text-white mb-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Introduction
          </motion.h2>
          <motion.h3
            className="text-xl text-blue-400 mb-4 flex items-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
            Current Role: Student
          </motion.h3>
          <motion.div
            className="space-y-4 text-gray-300 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <p className="text-lg">
              Namaste, I&apos;m{" "}
              <span className="text-blue-400 font-semibold hover:text-blue-300 transition-colors">
                Subodh Timalsina
              </span>{" "}
              from{" "}
              <span className="text-white font-semibold">
                Bhaktapur, Nepal (4480)
              </span>
              . Currently I&apos;m living at{" "}
              <span className="text-white font-semibold">
                Bhaktapur, NP
              </span>{" "}
              and pursuing a{" "}
              <span className="text-white font-semibold">
                BIM Degree
              </span>{" "}
              in Computer Science at the{" "}
              <span className="text-white font-semibold hover:text-blue-400 transition-colors">
                Bhaktapur Multiple Campus
              </span>
              .
            </p>
          </motion.div>
        </motion.div>
        {/* Skills Section */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-white">Technical Skills</h3>
          {/* <div className="flex flex-wrap gap-3 mb-8">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                className={`px-6 py-2 rounded-lg text-sm font-medium transition-all duration-300
              ${
                activeTab === tab.id
                  ? "bg-blue-500 text-white shadow-lg shadow-blue-500/20"
                  : "bg-gray-800/50 text-gray-400 hover:bg-gray-800"
              }`}
                onClick={() => setActiveTab(tab.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {tab.label}
              </motion.button>
            ))}
          </div> */}
          {/* <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            layout
          >
            <AnimatePresence mode="sync">
              {skillsData[activeTab].map((skill) => (
                <motion.div
                  key={skill.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.5 }}
                >
                  <SkillCard
                    skill={skill}
                    isHovered={hoveredSkill === skill.label}
                    onHover={() => setHoveredSkill(skill.label)}
                    onLeave={() => setHoveredSkill(null)}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div> */}
        </div>
        {/* Education Section */}
        <div className="space-y-8">
          <h3 className="text-2xl font-bold text-white">
            Educational Qualifications
          </h3>
          <Education />
        </div>
      </div>
    </motion.section>
  );
};

export default About;

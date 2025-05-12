import { motion } from "framer-motion";
import {
  SiJavascript,
  SiPython,
  SiTypescript,
  SiMongodb,
} from "react-icons/si";

const Skills = ({ variants }) => {
 
  const skillsData = [
    {
      name: "JavaScript",
      color: "border-yellow-500 hover:bg-yellow-500/20",
      icon: <SiJavascript color="#F7DF1E" aria-label="JavaScript Icon" />,
    },
    {
      name: "Python",
      color: "border-blue-600 hover:bg-blue-600/20",
      icon: <SiPython color="#3776AB" aria-label="Python Icon" />,
    },
    {
      name: "TypeScript",
      color: "border-indigo-500 hover:bg-indigo-500/20",
      icon: <SiTypescript color="#3178C6" aria-label="TypeScript Icon" />,
    },
    {
      name: "MongoDB",
      color: "border-green-600 hover:bg-green-600/20",
      icon: <SiMongodb color="#47A248" aria-label="MongoDB Icon" />,
    },
  ];

  return (
    <motion.div variants={variants} className="space-y-4">
      <motion.div
        variants={variants}
        className="flex flex-wrap items-center gap-3 justify-center"
      >
        {skillsData.map(({ name, color, icon }) => (
          <motion.span
            key={name}
            whileHover={{ scale: 1.05 }}
            className={`px-4 py-2 rounded-full text-gray-300 font-semibold text-sm backdrop-blur-sm border flex items-center gap-2 ${color} transition-colors duration-200`}
          >
            {icon} {/* Icon with native color */}
            {name} {/* Skill name */}
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Skills;

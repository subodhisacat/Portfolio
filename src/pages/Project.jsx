import { motion } from "framer-motion";
import { projectList } from "../utils/Constants";
import Items from "../components/Items";
import ProjectCard2 from "../components/ProjectCard2";

const Projects = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      id="project"
      className="w-full p-5"
    >
      <motion.div
        initial={{ y: 50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-6xl mx-auto"
      >
        <Items
          Number="03"
          title="Projects"
          des="Explore my featured projects showcasing my expertise in web development and problem-solving capabilities."
        />

        <div className="space-y-20">
          {projectList.map((project, index) => (
            <ProjectCard2 key={index} {...project} />
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Projects;

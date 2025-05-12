import { useState } from "react";
import { motion } from "framer-motion";

 const Project = ({
  title,
  description,
  link,
  tech,
  image,
  date = "2024",
}) => {
  const [imageError, setImageError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, margin: "-100px" }}
      className="border-b border-gray-800 pb-20 hover:border-gray-700 transition-colors duration-300"
    >
      <div className="max-w-4xl space-y-8">
        <div>
          <h3 className="text-3xl font-bold text-white hover:text-blue-400 transition-colors duration-300">
            {title}
          </h3>
          <p className="text-gray-500 text-sm mb-2 font-medium">{date}</p>
          <p className="text-gray-400 mt-4 leading-relaxed">{description}</p>
        </div>

        <div className="bg-gray-900 overflow-hidden rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
          <img
            src={`/projects/${image}`}
            alt={title}
            className="w-full hover:scale-105 transition-transform duration-500"
            onError={() => setImageError(true)}
          />
        </div>

        <div className="space-y-4">
          <div className="flex flex-wrap gap-3">
            {Object.values(tech).map((item, i) => (
              <span
                key={i}
                className="text-lg rounded-full px-4 py-2 transition-all duration-300 flex items-center gap-2 cursor-pointer"
              >
                <span className="text-lg">{item.icon}</span>
                <span className="text-sm font-medium group-hover:text-white">
                  {item.id}
                </span>
              </span>
            ))}
          </div>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm text-white hover:text-blue-400 transition-colors duration-300 group"
          >
            View Project{" "}
            <span className="ml-1 group-hover:translate-x-1 transition-transform duration-300">
              &rarr;
            </span>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Project;

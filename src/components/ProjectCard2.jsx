import { useState } from "react";
import { motion } from "framer-motion";

const Project = ({ title, description, link, tech, image, date = "2024" }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ margin: "-100px" }}
      className="border-b border-gray-800 pb-20 hover:border-gray-700 transition-colors duration-300"
    >
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div className="space-y-6">
          <div>
            <h3 className="text-3xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
              {title}
            </h3>
            <p className="text-gray-500 text-sm mt-2 font-medium">{date}</p>
            <p className="text-gray-400 mt-4 leading-relaxed max-w-prose">
              {description}
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex flex-wrap gap-3">
              {Object.values(tech).map((item, i) => (
                <motion.span
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="text-lg rounded-lg px-4 py-2 transition-all duration-300
                           flex items-center gap-2 cursor-pointer hover:bg-gray-700/50 "
                >
                  <span className="text-lg">{item.icon}</span>
                  <span className="text-sm font-medium text-gray-300 group-hover:text-white">
                    {item.id}
                  </span>
                </motion.span>
              ))}
            </div>
            <motion.a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ x: 4 }}
              className="inline-flex items-center text-sm font-medium text-blue-400 hover:text-blue-300
                       transition-colors duration-300 group mt-4"
            >
              View Project{" "}
              <span className="ml-1 group-hover:translate-x-1 transition-transform duration-300">
                →
              </span>
            </motion.a>
          </div>
        </div>

        {/* Image Section */}
        {image && (
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-gray-900/50 overflow-hidden rounded-xl shadow-xl hover:shadow-2xl
                     transition-all duration-300 border border-gray-800/50 hover:border-gray-700/50"
          >
            <img
              src={`/projects/${image}`}
              alt={title}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              onError={() => setImageError(true)}
            />
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default Project;

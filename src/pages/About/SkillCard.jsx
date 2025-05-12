import { motion } from "framer-motion";

const SkillCard = ({ skill, isHovered, onHover, onLeave }) => {
  return (
    <motion.div
      className={`
        relative p-4 rounded-lg transition-all duration-300
        ${isHovered ? "bg-gray-800" : "bg-gray-800/50"}
        hover:shadow-lg hover:shadow-blue-500/10
        border border-transparent
        ${isHovered ? "border-blue-500/50" : "hover:border-gray-700"}
      `}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      {/* Icon and Label Container */}
      <div className="flex items-start space-x-3">
        <motion.div
          className={`text-2xl ${skill.color} transition-colors duration-300`}
          initial={{ rotate: 0 }}
          animate={{ rotate: isHovered ? 360 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {skill.icon}
        </motion.div>

        <div className="flex-1">
          <h4
            className={`
            text-sm font-semibold
            ${isHovered ? "text-blue-400" : "text-gray-200"}
            transition-colors duration-300
          `}
          >
            {skill.label}
          </h4>

          {/* Description - Only shown on hover */}
          <motion.p
            className="text-xs text-gray-400 mt-1 line-clamp-2"
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: isHovered ? 1 : 0,
              height: isHovered ? "auto" : 0,
            }}
            transition={{ duration: 0.2 }}
          >
            {skill.description}
          </motion.p>
        </div>
      </div>

      {/* Hover Effect Gradient */}
      <motion.div
        className="absolute inset-0 rounded-lg opacity-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10"
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />

      {/* Bottom Border Accent */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-500 to-purple-500"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

export default SkillCard;

import { motion } from "framer-motion";

const Description = ({ variants }) => (
  <motion.div
    initial="hidden"
    animate="visible"
    variants={variants}
    className="text-gray-200 max-w-none mb-8"
  >
    <p className="text-lg lg:text-2xl leading-relaxed text-center">
      I can help you turn your creativity into reality through modern
      development.
    </p>
  </motion.div>
);

export default Description;

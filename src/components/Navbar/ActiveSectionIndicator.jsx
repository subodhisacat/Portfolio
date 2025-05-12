import { motion, AnimatePresence } from "framer-motion";

const ActiveSectionIndicator = ({ currentNavItem }) => (
  <AnimatePresence mode="wait">
    <motion.div
      key={currentNavItem.href}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2 }}
      className="flex items-center gap-2 text-white px-3 py-2"
    >
      <currentNavItem.icon className="text-xl text-primary" />
      <span className="text-sm font-medium">{currentNavItem.label}</span>
    </motion.div>
  </AnimatePresence>
);

export default ActiveSectionIndicator;

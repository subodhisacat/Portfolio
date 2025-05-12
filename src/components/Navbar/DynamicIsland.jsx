// components/DynamicIsland.jsx
import { motion, AnimatePresence } from "framer-motion";
import ActiveSectionIndicator from "./ActiveSectionIndicator";

const DynamicIsland = ({
  isExpanded,
  setIsExpanded,
  activeSection,
  navLinks,
}) => {
  const currentNavItem = navLinks.find(
    (link) => link.href.substring(1) === activeSection
  );

  return (
    <motion.nav
      initial={false}
      animate={{
        width: isExpanded ? 300 : 150,
        height: isExpanded ? 280 : 40, // Adjusted heights
        borderRadius: isExpanded ? 24 : 25,
      }}
      transition={{
        type: "spring",
        damping: 20,
        stiffness: 300,
      }}
      className="bg-black/80 backdrop-blur-md border border-white/10 overflow-hidden relative"
    >
      {/* Collapsed State */}
      {!isExpanded && (
        <div
          onClick={() => setIsExpanded(true)}
          className="h-[40px] cursor-pointer flex items-center justify-center" // Fixed height
        >
          <ActiveSectionIndicator currentNavItem={currentNavItem} />
        </div>
      )}

      {/* Expanded State */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 p-3" // Changed padding
          >
            {/* Header */}
            <div className="flex justify-between items-center mb-2 px-1">
              <span className="text-white/80 text-sm font-medium">
                Navigation
              </span>
              <button
                onClick={() => setIsExpanded(false)}
                className="text-white/60 hover:text-white/80 p-1 rounded-full hover:bg-white/10"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>

            {/* Navigation Links */}
            <div className="space-y-1 h-[220px] overflow-y-auto">
              {navLinks.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsExpanded(false)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`
                    flex items-center gap-3 p-2.5 rounded-xl w-full
                    transition-colors duration-200
                    ${
                      activeSection === link.href.substring(1)
                        ? "bg-white/10 text-white"
                        : "text-white/60 hover:text-white hover:bg-white/5"
                    }
                  `}
                >
                  <link.icon className="h-4 w-4 flex-shrink-0" />
                  <span className="text-sm font-medium">{link.label}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default DynamicIsland;

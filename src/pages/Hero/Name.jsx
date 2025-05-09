import { motion } from "framer-motion";

function Greeting() {

  
  return (
    <motion.div
      className="mx-auto p-4 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="inline-block"
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <h2 className="text-xl md:text-4xl font-medium text-gray-600 dark:text-gray-400 mb-2">
          Hello there I am
        </h2>
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-extrabold gname ">
          Subodh Timalsina
        </h1>
      </motion.div>
      {/* Introductory Text */}
      <motion.div
        className="inline-block"
        whileHover={{ scale: 1.05 }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl lg:text-8xl font-extrabold m-4 ">
          Welcome to
          <br /> My Space on the Internet
        </h1>


        {/* Animated Line */}

        <div className="h-1 w-20 mx-auto bg-gradient-to-r from-primary to-secondary rounded-full" />
      </motion.div>
    </motion.div>
  );
}

export default Greeting;

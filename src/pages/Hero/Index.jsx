import { motion } from "framer-motion";
import Greeting from "./Name";
import Description from "./Description";
import Skills from "./Skill";
function Home() {
  const variants = {
    container: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.3,
          delayChildren: 0.2,
        },
      },
    },
    text: {
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.8,
          ease: "easeOut",
        },
      },
    },
    emoji: {
      hover: {
        scale: 1.2,
        rotate: [0, -10, 10, -10, 0],
        transition: {
          duration: 0.5,
        },
      },
    },
    button: {
      hover: {
        scale: 1.05,
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        transition: {
          duration: 0.3,
        },
      },
      tap: {
        scale: 0.95,
        transition: {
          duration: 0.3,
        },
      },
    },
  };
  const words = [
    { id: "01", title: "Web Developer" },
    { id: "02", title: "Software Engineer" },
    { id: "03", title: "Tech Enthusiast" },
    { id: "04", title: "Open Source Contributor" },
  ];
  return (
    <motion.div
      className="flex min-h-screen justify-center items-center"
      initial="hidden"
      animate="visible"
      variants={variants.container}
    >
      <motion.div className="w-full sm:w-3/5 flex flex-col  ">
        <Greeting variants={variants.emoji} />
        <Description variants={variants.text} />
        <Skills variants={variants.text} />
        {/* Shaping */}
       {/* <span className="slide">
          <span className="wrapper">
            {words.map((word, index) => (
              <span
                key={index}
                className="flex items-center md:gap-3 gap-1 pb-2"
              >
                {/* <img
                  src={word.imgPath}
                  alt="person"
                  className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                /> */}
                {/* <span>{word.title}</span>
              </span>
            ))}
          </span>
        </span> */}
      </motion.div>

    </motion.div>
  );
}
export default Home;

import { motion } from "framer-motion";
import Items from "../components/Items";
import ServiceCard from "../components/ServiceCard";
import { services } from "../utils/Constants";

const Service = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  return (
    <section id="services" className="w-full p-5">
      <div className="max-w-6xl mx-auto">
        <Items
          Number="02"
          title="What I Do"
          des=" Delivering comprehensive solutions across various domains of
            software development"
        />
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Service;

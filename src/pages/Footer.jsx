import { motion } from "framer-motion";
import { socialLinks, quickLink } from "../utils/Constants";
import { Mail } from "lucide-react";

function Footer() {
  return (
    <footer className="mt-10 border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-6 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h3 className="text-white text-xl font-semibold">Subodh Timalsina</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Building digital experiences with code and creativity.
              Transforming ideas into elegant solutions.
            </p>
            <div className="flex gap-4 pt-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={link.name}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-white text-xl font-semibold">Quick Links</h3>
            <nav className="grid grid-cols-2 ">
              {quickLink.map((link) => (
                <motion.a
                  key={link.id}
                  href={link.url}
                  className="flex items-center text-gray-400 hover:text-white transition-colors duration-300 py-2"
                  whileHover={{ x: 4 }}
                >
                  <span>{link.title}</span>
                </motion.a>
              ))}
            </nav>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-4"
          >
            <h3 className="text-white text-xl font-semibold">Get in Touch</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Have a project in mind? Let&apos;talk about it.
            </p>
            <a
              href="mailto:contact@subodhtimilsina.com.np"
              className="inline-flex items-center text-white hover:text-blue-400 transition-colors duration-300"
            >
              <Mail className="w-5 h-5 mr-2" />
              contact@subodhtimilsina.com.np
            </a>
          </motion.div>
        </div>

        <div className="border-t border-gray-800 px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Subodh Timalsina. All rights
              reserved.
            </p>
            <motion.a
              href="#home"
              className="text-gray-400 hover:text-white transition-colors duration-300"
              whileHover={{ y: -4 }}
            >
              Back to top ↑
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

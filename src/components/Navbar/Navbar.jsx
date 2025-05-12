// components/Navbar.jsx
import { useState, useEffect } from "react";
import DynamicIsland from "./DynamicIsland";
import { navLinks } from "./navLinks";

const Navbar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      // If menu is expanded, close it on scroll
      if (isExpanded) {
        setIsExpanded(false);
      }

      // Active section detection
      const sections = navLinks.map((link) => ({
        id: link.href.substring(1),
        offset: Math.abs(
          document
            .getElementById(link.href.substring(1))
            ?.getBoundingClientRect().top || 0,
        ),
      }));

      const currentSection = sections.reduce((acc, section) => {
        return section.offset < acc.offset ? section : acc;
      }, sections[0]);

      setActiveSection(currentSection.id);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isExpanded]);

  return (
    <div className="fixed left-1/2 -translate-x-1/2 top-6 z-50">
      <DynamicIsland
        isExpanded={isExpanded}
        setIsExpanded={setIsExpanded}
        activeSection={activeSection}
        navLinks={navLinks}
      />
    </div>
  );
};

export default Navbar;

import {
  FaNodeJs,
  FaReact,
  FaGit,
  FaDocker,
  FaGithub,
  FaHtml5,
  FaCss3,
  FaJs,
  FaFigma,
  FaNpm,
  FaDatabase,
  FaServer,
} from "react-icons/fa";
import { SiTailwindcss, SiPostman } from "react-icons/si";
export const tabs = [
  { id: "mernStack", label: "MERN Stack" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "tools", label: "Tools" },
];

export const skillsData = {
  mernStack: [
    {
      label: "MongoDB",
      icon: <FaDatabase />,
      color: "text-green-500",
      description:
        "MongoDB is a NoSQL document-based database for storing and retrieving data.",
    },
    {
      label: "Express.js",
      icon: <FaServer />,
      color: "text-yellow-500",
      description:
        "Express.js is a popular Node.js web framework for building web applications.",
    },
    {
      label: "React.js",
      icon: <FaReact />,
      color: "text-blue-500",
      description:
        "React.js is a JavaScript library for building user interfaces and can be used for developing single-page applications.",
    },
    {
      label: "Node.js",
      icon: <FaNodeJs />,
      color: "text-green-500",
      description:
        "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.",
    },
  ],
  frontend: [
    {
      label: "HTML5",
      icon: <FaHtml5 />,
      color: "text-orange-500",
      description:
        "HTML5 is the latest version of HTML, the standard language for creating web pages.",
    },
    {
      label: "CSS3",
      icon: <FaCss3 />,
      color: "text-blue-500",
      description:
        "CSS3 is used for styling HTML documents and is essential for responsive design.",
    },
    {
      label: "JavaScript",
      icon: <FaJs />,
      color: "text-yellow-500",
      description:
        "JavaScript is a high-level, dynamic, and interpreted programming language.",
    },
    {
      label: "React.js",
      icon: <FaReact />,
      color: "text-blue-500",
      description:
        "React.js is a JavaScript library for building user interfaces.",
    },
    {
      label: "Tailwind CSS",
      icon: <SiTailwindcss />,
      color: "text-blue-400",
      description:
        "Tailwind CSS is a utility-first CSS framework for building custom user interfaces.",
    },
    {
      label: "Material UI",
      icon: <FaReact />, // Placeholder icon for Material UI if SiMaterialui is unavailable
      color: "text-purple-500",
      description:
        "Material UI is a popular React UI framework that implements Google’s Material Design.",
    },
  ],
  backend: [
    {
      label: "Node.js",
      icon: <FaNodeJs />,
      color: "text-green-500",
      description:
        "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.",
    },
    {
      label: "Express.js",
      icon: <FaServer />,
      color: "text-yellow-500",
      description:
        "Express.js is a fast, unopinionated, minimalist web framework for Node.js.",
    },
    {
      label: "MongoDB",
      icon: <FaDatabase />,
      color: "text-green-500",
      description:
        "MongoDB is a NoSQL document database that stores data in flexible, JSON-like documents.",
    },
    {
      label: "PostgreSQL",
      icon: <FaDatabase />,
      color: "text-blue-600",
      description:
        "PostgreSQL is a powerful, open-source relational database system.",
    },
    {
      label: "Firebase",
      icon: <FaDatabase />,
      color: "text-yellow-600",
      description:
        "Firebase is a platform developed by Google for creating mobile and web applications.",
    },
    {
      label: "REST API",
      icon: <FaServer />,
      color: "text-orange-500",
      description:
        "REST API is an architectural style for designing networked applications.",
    },
  ],
  tools: [
    {
      label: "Git",
      icon: <FaGit />,
      color: "text-red-500",
      description:
        "Git is a version control system for tracking changes in source code.",
    },
    {
      label: "GitHub",
      icon: <FaGithub />,
      color: "text-gray-700",
      description:
        "GitHub is a platform for version control and collaboration.",
    },
    {
      label: "VS Code",
      color: "text-blue-500",
      description: "VS Code is a lightweight but powerful source code editor.",
    },
    {
      label: "Postman",
      icon: <SiPostman />,
      color: "text-orange-500",
      description: "Postman is a collaboration platform for API development.",
    },
    {
      label: "Figma",
      icon: <FaFigma />,
      color: "text-pink-500",
      description: "Figma is a web-based UI/UX design tool.",
    },
    {
      label: "npm",
      icon: <FaNpm />,
      color: "text-red-500",
      description: "npm is the package manager for JavaScript.",
    },
    {
      label: "Docker",
      icon: <FaDocker />,
      color: "text-blue-400",
      description:
        "Docker is a platform for developing, shipping, and running applications in containers.",
    },
  ],
};

/* eslint-disable react/prop-types */
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const ProjectCard = ({ project }) => {
  const { darkMode } = useContext(ThemeContext);

  // Technology badge color mapping
  const techColors = {
    React: "bg-blue-500/10 text-blue-400 border-blue-500/30",
    "Tailwind CSS": "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
    MongoDB: "bg-green-500/10 text-green-400 border-green-500/30",
    Stripe: "bg-purple-500/10 text-purple-400 border-purple-500/30",
    Express: "bg-rose-500/10 text-rose-400 border-rose-500/30",
    "Firebase Auth": "bg-yellow-500/10 text-yellow-400 border-yellow-500/30",
    Node: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
    Gemini: "bg-purple-500/10 text-purple-400 border-purple-500/30",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      transition={{ duration: 0.5 }}
      className={`group relative rounded-3xl overflow-hidden border transition-all duration-300
        ${darkMode 
          ? "bg-gray-900 border-white/10 hover:border-white/20" 
          : "bg-white border-gray-200 hover:border-gray-300 shadow-lg hover:shadow-xl"
        }`}
    >
      {/* Project Image */}
      <div className="relative">
        <img
          src={project.imageUrl}
          alt={project.name}
          className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-6">
        {/* Project Title */}
        <h2 className={`text-xl font-bold mb-3 line-clamp-2 min-h-[56px] 
          ${darkMode ? "text-white" : "text-gray-900"}`}>
          {project.name}
        </h2>

        {/* Description */}
        <p className={`text-sm leading-relaxed mb-5 line-clamp-3 min-h-[63px]
          ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
          {project.description?.split(" ").slice(0, 25).join(" ")}...
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {(typeof project.technologies === "string"
            ? project.technologies.split(",")
            : project.technologies || []
          )
            .slice(0, 3)
            .map((tech, index) => (
              <span
                key={index}
                className={`text-xs font-medium px-3 py-1 rounded-full border transition-all
                  ${techColors[tech.trim()] || 
                    (darkMode 
                      ? "bg-gray-800 text-gray-300 border-gray-700" 
                      : "bg-gray-100 text-gray-700 border-gray-300")
                  }`}
              >
                {tech.trim()}
              </span>
            ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3">
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex-1 btn btn-sm gap-2 transition-all
              ${darkMode 
                ? "btn-outline border-white/30 hover:bg-white/10 hover:border-white/50 text-white" 
                : "btn-outline border-gray-300 hover:bg-gray-50"
              }`}
          >
            Live <FaExternalLinkAlt className="text-xs" />
          </a>

          <Link
            to={`/projects/${project.id}`}
            className={`flex-1 btn btn-sm gap-2 transition-all
              ${darkMode 
                ? "btn-outline border-white/30 hover:bg-white/10 hover:border-white/50 text-white" 
                : "btn-outline border-gray-300 hover:bg-gray-50"
              }`}
          >
            Details <FaExternalLinkAlt className="text-xs" />
          </Link>

          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex-1 btn btn-sm gap-2 transition-all
              ${darkMode 
                ? "btn-outline border-white/30 hover:bg-white/10 hover:border-white/50 text-white" 
                : "btn-outline border-gray-300 hover:bg-gray-50"
              }`}
          >
            GitHub <FaGithub />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
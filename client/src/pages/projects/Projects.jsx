import { useContext, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ThemeContext } from "../../contexts/ThemeContext";
import ProjectCard from "../../components/ProjectCards";
import { useQuery } from "@tanstack/react-query";

const Projects = () => {
  const { darkMode } = useContext(ThemeContext);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const { data: projects = [] } = useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      const response = await fetch('/projects.json'); // Load from public folder
      const data = await response.json();
      return data.slice(0, 6); // Show only 6 featured projects
    },
  });

  return (
    <section id="projects" className="py-20 relative overflow-hidden" ref={sectionRef}>
      {/* Subtle Grid Background - Consistent with other sections */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl font-bold mb-3 ${darkMode ? "text-white" : "text-gray-900"}`}>
            Featured Projects<span className="text-purple-500">_</span>
          </h2>
          
          <p className={`text-sm font-medium mb-6 ${darkMode ? "text-purple-400" : "text-purple-600"}`}>
            Showcasing My Recent Web Development Work
          </p>

          <div className="w-16 h-1 rounded-full bg-gradient-to-r from-purple-500 via-indigo-500 to-emerald-400 mx-auto" />
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {projects?.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>

        {/* Optional "View All Projects" Button */}
      </div>
    </section>
  );
};

export default Projects;
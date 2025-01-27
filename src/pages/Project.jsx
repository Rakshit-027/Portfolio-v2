import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Loader from "../components/Loader";

// ProjectCard Component
const ProjectCard = ({ project, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay }}
    className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
  >
    <img
      src={project.image || "https://via.placeholder.com/600x400?text=Image+Not+Available"}
      alt={project.title || "Project"}
      className="w-full h-48 object-cover"
      loading="lazy"
    />
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2">{project.title || "Untitled Project"}</h3>
      <p className="text-gray-400 mb-4">{project.description || "No description provided."}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags && project.tags.length > 0 ? (
          project.tags.map((tag, index) => (
            <span
              key={`${tag}-${index}`}
              className="bg-gray-700 text-sm text-pink-500 px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))
        ) : (
          <span className="bg-gray-700 text-sm text-gray-500 px-3 py-1 rounded-full">No tags</span>
        )}
      </div>
      <div className="flex space-x-4">
        <a
          href={project.github || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-gray-400 hover:text-pink-500 transition-colors"
        >
          <Github className="w-5 h-5 mr-1" />
          Code
        </a>
        <a
          href={project.live || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-gray-400 hover:text-pink-500 transition-colors"
        >
          <ExternalLink className="w-5 h-5 mr-1" />
          Live Demo
        </a>
      </div>
    </div>
  </motion.div>
);

ProjectCard.defaultProps = {
  delay: 0,
};

// Main Project Component
const Project = () => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 1.5 seconds delay

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(
          "https://raw.githubusercontent.com/Rakshit-027/Portfolio-project-db/refs/heads/main/Project.json"
        );
        if (!response.ok) throw new Error("Failed to fetch projects");

        const data = await response.json();
        const validProjects = data.filter(
          (project) =>
            project &&
            typeof project === "object" &&
            project.title &&
            Array.isArray(project.tags)
        );
        setProjects(validProjects);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchProjects();
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-16 px-4 bg-black text-white"
    >
      <div className="max-w-7xl mx-auto py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">My Projects</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Here are some of my recent projects. Each one is crafted with attention to detail and focus on user experience.
          </p>
        </motion.div>

        {error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : projects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.id || index} project={project} delay={0.2 + index * 0.1} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-400">No projects available at the moment.</p>
        )}
      </div>
    </motion.div>
  );
};

export default Project;

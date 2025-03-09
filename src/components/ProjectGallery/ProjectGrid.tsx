import React, { useState, useEffect, useMemo } from "react";
import ProjectCard from "./ProjectCard";
import { motion, AnimatePresence } from "framer-motion";

interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  technologies: {
    name: string;
    variant?: "default" | "secondary" | "destructive" | "outline";
  }[];
  detailsUrl: string;
  category: string;
}

interface ProjectGridProps {
  projects?: Project[];
  selectedCategory?: string;
}

const ProjectGrid = ({
  projects = [
    {
      id: "1",
      title: "E-Commerce Dashboard",
      description:
        "A comprehensive dashboard for managing online store operations with real-time analytics.",
      imageUrl:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      technologies: [
        { name: "React", variant: "default" },
        { name: "TypeScript", variant: "secondary" },
        { name: "Tailwind", variant: "outline" },
        { name: "Node.js", variant: "secondary" },
      ],
      detailsUrl: "#",
      category: "Fullstack",
    },
    {
      id: "2",
      title: "Travel App UI Design",
      description:
        "Modern mobile app interface for a travel booking platform with intuitive user experience.",
      imageUrl:
        "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80",
      technologies: [
        { name: "Figma", variant: "default" },
        { name: "Adobe XD", variant: "secondary" },
        { name: "Prototyping", variant: "outline" },
      ],
      detailsUrl: "#",
      category: "UI/UX",
    },
    {
      id: "3",
      title: "Portfolio Website",
      description:
        "Responsive personal portfolio website with modern design and smooth animations.",
      imageUrl:
        "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?w=800&q=80",
      technologies: [
        { name: "HTML", variant: "default" },
        { name: "CSS", variant: "secondary" },
        { name: "JavaScript", variant: "outline" },
        { name: "GSAP", variant: "secondary" },
      ],
      detailsUrl: "#",
      category: "Website Design",
    },
    {
      id: "4",
      title: "Fitness Tracker App",
      description:
        "Mobile application for tracking workouts, nutrition, and health metrics with data visualization.",
      imageUrl:
        "https://images.unsplash.com/photo-1461773518188-b3e86f98242f?w=800&q=80",
      technologies: [
        { name: "React Native", variant: "default" },
        { name: "Redux", variant: "secondary" },
        { name: "Firebase", variant: "outline" },
      ],
      detailsUrl: "#",
      category: "App Development",
    },
    {
      id: "5",
      title: "Marketing Landing Page",
      description:
        "High-conversion landing page for a digital marketing campaign with A/B testing capabilities.",
      imageUrl:
        "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&q=80",
      technologies: [
        { name: "React", variant: "default" },
        { name: "SCSS", variant: "secondary" },
        { name: "Netlify", variant: "outline" },
      ],
      detailsUrl: "#",
      category: "Frontend",
    },
    {
      id: "6",
      title: "Admin Dashboard",
      description:
        "Comprehensive admin panel for managing users, content, and analytics with dark/light mode.",
      imageUrl:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      technologies: [
        { name: "Vue.js", variant: "default" },
        { name: "Vuex", variant: "secondary" },
        { name: "Chart.js", variant: "outline" },
        { name: "Express", variant: "secondary" },
      ],
      detailsUrl: "#",
      category: "Fullstack",
    },
  ],
  selectedCategory = "All",
}: ProjectGridProps) => {
  // Use useMemo to optimize filtering
  const filteredProjects = useMemo(() => {
    if (selectedCategory === "All") {
      return projects;
    }
    return projects.filter((project) => project.category === selectedCategory);
  }, [selectedCategory, projects]);

  // Animation variants for the grid container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  // Animation variants for each project card
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white w-full py-12 px-4">
      <AnimatePresence mode="wait">
        {filteredProjects.length === 0 ? (
          <motion.div
            key="empty"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-center py-16 max-w-md mx-auto bg-white rounded-lg shadow-sm p-8"
          >
            <h3 className="text-xl font-medium text-gray-800 mb-3">
              No projects found
            </h3>
            <p className="text-gray-600 mb-6">
              There are no projects in the {selectedCategory} category yet. Try
              selecting a different category.
            </p>
            <div className="w-24 h-24 mx-auto mb-4 opacity-50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-full h-full text-gray-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m6.75 12H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                />
              </svg>
            </div>
          </motion.div>
        ) : (
          <>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
            >
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  className="h-full transform hover:scale-[1.02] transition-transform duration-300"
                >
                  <ProjectCard
                    title={project.title}
                    description={project.description}
                    imageUrl={project.imageUrl}
                    technologies={project.technologies}
                    detailsUrl={project.detailsUrl}
                  />
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-12 flex justify-center items-center gap-2"
            >
              <div className="h-1 w-12 bg-gray-200 rounded-full"></div>
              <p className="text-sm font-medium text-gray-500">
                Showing {filteredProjects.length} of {projects.length} projects
              </p>
              <div className="h-1 w-12 bg-gray-200 rounded-full"></div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectGrid;

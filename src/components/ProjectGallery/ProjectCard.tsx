import React from "react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { ExternalLink, Star } from "lucide-react";
import { motion } from "framer-motion";

interface Technology {
  name: string;
  variant?: "default" | "secondary" | "destructive" | "outline";
}

interface Skill {
  name: string;
  level: number; // 1-5
  variant?: "default" | "secondary" | "destructive" | "outline";
}

interface ProjectCardProps {
  title?: string;
  description?: string;
  imageUrl?: string;
  technologies?: Technology[];
  detailsUrl?: string;
  variant?: "project" | "hero" | "about" | "skill" | "contact";
  skills?: Skill[];
  contactInfo?: {
    email?: string;
    phone?: string;
    location?: string;
  };
}

const ProjectCard = ({
  title = "Project Title",
  description = "A short description of the project showcasing the key features and technologies used in its development.",
  imageUrl = "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=800&q=80",
  technologies = [
    { name: "React", variant: "default" },
    { name: "TypeScript", variant: "secondary" },
    { name: "Tailwind", variant: "outline" },
    { name: "Node.js", variant: "secondary" },
  ],
  detailsUrl = "#",
  variant = "project",
  skills = [
    { name: "React", level: 5, variant: "default" },
    { name: "TypeScript", level: 4, variant: "secondary" },
    { name: "Node.js", level: 4, variant: "default" },
    { name: "UI/UX Design", level: 3, variant: "outline" },
  ],
  contactInfo = {
    email: "contact@example.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
  },
}: ProjectCardProps) => {
  // Project Card (Default)
  if (variant === "project") {
    return (
      <motion.div
        whileHover={{ y: -5 }}
        className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 w-full h-full flex flex-col"
      >
        <div className="relative h-48 overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>

        <div className="p-5 flex flex-col flex-grow">
          <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>

          <p className="text-gray-600 text-sm mb-4 flex-grow">{description}</p>

          <div className="mb-4 flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <Badge key={index} variant={tech.variant}>
                {tech.name}
              </Badge>
            ))}
          </div>

          <Button
            variant="outline"
            className="w-full flex items-center justify-center gap-2"
            onClick={() => window.open(detailsUrl, "_blank")}
          >
            View Details
            <ExternalLink size={16} />
          </Button>
        </div>
      </motion.div>
    );
  }

  // Hero Card
  if (variant === "hero") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl overflow-hidden shadow-lg w-full h-full flex flex-col md:flex-row"
      >
        <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
            {title}
          </h1>
          <p className="text-lg text-gray-700 mb-6">{description}</p>
          <div className="flex flex-wrap gap-3">
            <Button size="lg">View Portfolio</Button>
            <Button variant="outline" size="lg">
              Contact Me
            </Button>
          </div>
        </div>
        <div className="md:w-1/2 h-64 md:h-auto relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent z-10"></div>
          <img
            src={imageUrl}
            alt="Hero"
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>
    );
  }

  // About Card
  if (variant === "about") {
    return (
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="bg-white rounded-lg overflow-hidden shadow-md w-full h-full flex flex-col md:flex-row"
      >
        <div className="md:w-2/5 h-64 md:h-auto relative">
          <img
            src={imageUrl}
            alt="About"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        </div>
        <div className="md:w-3/5 p-6 md:p-8">
          <h2 className="text-2xl font-bold mb-3 text-gray-800">{title}</h2>
          <p className="text-gray-600 mb-4">{description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.slice(0, 3).map((tech, index) => (
              <Badge key={index} variant={tech.variant}>
                {tech.name}
              </Badge>
            ))}
          </div>
          <Button
            variant="link"
            className="p-0 h-auto font-medium text-primary"
          >
            Read More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Button>
        </div>
      </motion.div>
    );
  }

  // Skill Card
  if (variant === "skill") {
    return (
      <motion.div
        whileHover={{ y: -5 }}
        className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 w-full h-full p-6"
      >
        <h3 className="text-xl font-bold mb-4 text-gray-800">{title}</h3>
        <div className="space-y-4">
          {skills.map((skill, index) => (
            <div key={index} className="space-y-1">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-700">
                  {skill.name}
                </span>
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className={`${i < skill.level ? "text-yellow-500 fill-yellow-500" : "text-gray-300"} ml-0.5`}
                    />
                  ))}
                </div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className={`h-2 rounded-full ${skill.variant === "secondary" ? "bg-secondary" : skill.variant === "outline" ? "bg-accent" : "bg-primary"}`}
                  style={{ width: `${(skill.level / 5) * 100}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    );
  }

  // Contact Card
  if (variant === "contact") {
    return (
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 w-full h-full p-6"
      >
        <h3 className="text-xl font-bold mb-4 text-gray-800">{title}</h3>
        <div className="space-y-4">
          {contactInfo.email && (
            <div className="flex items-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-primary mr-3 mt-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <div>
                <p className="font-medium text-sm text-gray-500">Email</p>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-gray-700 hover:text-primary transition-colors"
                >
                  {contactInfo.email}
                </a>
              </div>
            </div>
          )}

          {contactInfo.phone && (
            <div className="flex items-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-primary mr-3 mt-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <div>
                <p className="font-medium text-sm text-gray-500">Phone</p>
                <a
                  href={`tel:${contactInfo.phone.replace(/\D/g, "")}`}
                  className="text-gray-700 hover:text-primary transition-colors"
                >
                  {contactInfo.phone}
                </a>
              </div>
            </div>
          )}

          {contactInfo.location && (
            <div className="flex items-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-primary mr-3 mt-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <div>
                <p className="font-medium text-sm text-gray-500">Location</p>
                <p className="text-gray-700">{contactInfo.location}</p>
              </div>
            </div>
          )}
        </div>

        <div className="mt-6">
          <Button className="w-full">Send Message</Button>
        </div>
      </motion.div>
    );
  }

  // Default fallback
  return null;
};

export default ProjectCard;

import React from "react";
import { motion } from "framer-motion";
import { Badge } from "./ui/badge";

interface Skill {
  name: string;
  level?: "beginner" | "intermediate" | "advanced" | "expert";
  variant?: "default" | "secondary" | "outline";
}

interface AboutProps {
  title?: string;
  subtitle?: string;
  description?: string[];
  skills?: Skill[];
  imageUrl?: string;
  resumeUrl?: string;
}

const About = ({
  title = "About Me",
  subtitle = "My Background & Experience",
  description = [
    "I'm a passionate developer with over 5 years of experience building web and mobile applications. My journey in tech started with a computer science degree, followed by roles at startups and established companies.",
    "I specialize in creating intuitive user interfaces and robust backend systems. My approach combines technical expertise with a strong focus on user experience and business goals.",
    "When I'm not coding, you can find me hiking, reading tech blogs, or experimenting with new frameworks and tools to stay at the cutting edge of development.",
  ],
  skills = [
    { name: "React", level: "expert", variant: "default" },
    { name: "TypeScript", level: "advanced", variant: "secondary" },
    { name: "Node.js", level: "advanced", variant: "default" },
    { name: "UI/UX Design", level: "intermediate", variant: "outline" },
    { name: "Next.js", level: "advanced", variant: "secondary" },
    { name: "Tailwind CSS", level: "expert", variant: "default" },
    { name: "GraphQL", level: "intermediate", variant: "outline" },
    { name: "AWS", level: "intermediate", variant: "secondary" },
    { name: "Docker", level: "intermediate", variant: "outline" },
    { name: "CI/CD", level: "intermediate", variant: "secondary" },
  ],
  imageUrl = "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=800&q=80",
  resumeUrl = "#",
}: AboutProps) => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">
              {title}
            </h2>
            <p className="text-xl text-gray-600">{subtitle}</p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {description.map((paragraph, index) => (
              <p key={index} className="text-gray-700 leading-relaxed">
                {paragraph}
              </p>
            ))}

            <div className="pt-4">
              <h3 className="text-lg font-semibold mb-3">My Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <Badge
                    key={index}
                    variant={skill.variant}
                    className="text-sm py-1 px-3"
                  >
                    {skill.name}
                    {skill.level && (
                      <span className="ml-1 opacity-70">
                        {skill.level === "beginner"
                          ? "•"
                          : skill.level === "intermediate"
                            ? "••"
                            : skill.level === "advanced"
                              ? "•••"
                              : "••••"}
                      </span>
                    )}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="pt-2">
              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-primary hover:text-primary/80 font-medium"
              >
                View Full Resume
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
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative rounded-2xl overflow-hidden shadow-lg h-[400px] md:h-[500px]"
          >
            <img
              src={imageUrl}
              alt="Profile"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

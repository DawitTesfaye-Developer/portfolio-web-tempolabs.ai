import React from "react";
import ProjectCard from "./ProjectCard";

const ProjectCardShowcase = () => {
  return (
    <div className="bg-gray-50 p-8 rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Card Variants</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div>
          <h3 className="text-lg font-medium mb-3">Project Card</h3>
          <ProjectCard
            variant="project"
            title="E-Commerce Dashboard"
            description="A comprehensive dashboard for managing online store operations with real-time analytics."
            imageUrl="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
            technologies={[
              { name: "React", variant: "default" },
              { name: "TypeScript", variant: "secondary" },
              { name: "Tailwind", variant: "outline" },
              { name: "Node.js", variant: "secondary" },
            ]}
          />
        </div>

        <div>
          <h3 className="text-lg font-medium mb-3">Skill Card</h3>
          <ProjectCard
            variant="skill"
            title="Technical Skills"
            skills={[
              { name: "React", level: 5, variant: "default" },
              { name: "TypeScript", level: 4, variant: "secondary" },
              { name: "Node.js", level: 4, variant: "default" },
              { name: "UI/UX Design", level: 3, variant: "outline" },
            ]}
          />
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-lg font-medium mb-3">Hero Card</h3>
        <ProjectCard
          variant="hero"
          title="John Doe, Full Stack Developer"
          description="I build exceptional digital experiences that combine beautiful design with powerful functionality. Specializing in modern web applications and responsive interfaces."
          imageUrl="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-lg font-medium mb-3">About Card</h3>
          <ProjectCard
            variant="about"
            title="About Me"
            description="I'm a passionate developer with over 5 years of experience building web and mobile applications. My journey in tech started with a computer science degree, followed by roles at startups and established companies."
            imageUrl="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=800&q=80"
            technologies={[
              { name: "Frontend", variant: "default" },
              { name: "Backend", variant: "secondary" },
              { name: "UI/UX", variant: "outline" },
            ]}
          />
        </div>

        <div>
          <h3 className="text-lg font-medium mb-3">Contact Card</h3>
          <ProjectCard
            variant="contact"
            title="Get In Touch"
            contactInfo={{
              email: "contact@example.com",
              phone: "+1 (555) 123-4567",
              location: "San Francisco, CA",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectCardShowcase;

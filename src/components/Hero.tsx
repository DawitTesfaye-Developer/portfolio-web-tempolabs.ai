import React from "react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

interface HeroProps {
  name?: string;
  title?: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
  socialLinks?: {
    platform: "github" | "linkedin";
    url: string;
  }[];
  imageUrl?: string;
}

const Hero = ({
  name = "John Doe",
  title = "Full Stack Developer & UI/UX Designer",
  description = "I build exceptional digital experiences that combine beautiful design with powerful functionality. Specializing in modern web applications and responsive interfaces.",
  ctaText = "View My Work",
  ctaLink = "#projects",
  socialLinks = [
    { platform: "github", url: "https://github.com" },
    { platform: "linkedin", url: "https://linkedin.com" },
  ],
  imageUrl = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
}: HeroProps) => {
  return (
    <section className="w-full py-20 md:py-32 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col space-y-6"
          >
            <div className="space-y-2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
                Hi, I'm <span className="text-primary">{name}</span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-medium text-gray-700">
                {title}
              </h2>
            </div>

            <p className="text-lg text-gray-600 max-w-md">{description}</p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link to={ctaLink} className="flex items-center gap-2">
                  {ctaText} <ArrowRight size={16} />
                </Link>
              </Button>

              <div className="flex space-x-3">
                {socialLinks.map((link, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="icon"
                    className="h-10 w-10 rounded-full"
                    asChild
                  >
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${link.platform} link`}
                    >
                      {link.platform === "github" ? (
                        <Github size={18} />
                      ) : (
                        <Linkedin size={18} />
                      )}
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent z-10 rounded-2xl"></div>
            <img
              src={imageUrl}
              alt={name}
              className="w-full h-full object-cover object-center"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Hero from "./Hero";
import About from "./About";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
import CategoryFilter from "./ProjectGallery/CategoryFilter";
import ProjectGrid from "./ProjectGallery/ProjectGrid";

// Define the ProjectCategory type locally to avoid import issues
type ProjectCategory =
  | "All"
  | "UI/UX"
  | "Frontend"
  | "Fullstack"
  | "Website Design"
  | "App Development";

const Home = () => {
  const [selectedCategory, setSelectedCategory] =
    useState<ProjectCategory>("All");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Handle window resize to toggle between tabs and dropdown layouts
  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Handle category change
  const handleCategoryChange = (category: ProjectCategory) => {
    setSelectedCategory(category);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        <About />

        {/* Projects Section */}
        <section id="projects" className="bg-white py-16 px-4">
          <div className="max-w-7xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              My Portfolio Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore my work across different disciplines including UI/UX
              design, frontend and fullstack development, website design, and
              app development.
            </p>
          </div>

          {/* Category Filter */}
          <CategoryFilter
            activeCategory={selectedCategory}
            onCategoryChange={handleCategoryChange}
            layout={isMobile ? "dropdown" : "tabs"}
          />

          {/* Project Grid */}
          <ProjectGrid selectedCategory={selectedCategory} />
        </section>

        {/* Testimonials Section */}
        <Testimonials />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;

import React from "react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

interface HeaderProps {
  title?: string;
  logoUrl?: string;
  navLinks?: Array<{
    label: string;
    href: string;
  }>;
}

const Header = ({
  title = "Portfolio",
  logoUrl = "",
  navLinks = [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
}: HeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="bg-white border-b border-gray-200 fixed w-full z-10 top-0 left-0">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo/Title */}
        <div className="flex items-center">
          {logoUrl ? (
            <img src={logoUrl} alt={title} className="h-10 w-auto mr-2" />
          ) : null}
          <h1 className="text-xl font-bold text-gray-800">{title}</h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.href}
              className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
          <Button variant="default" size="sm">
            Get in Touch
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-600 hover:text-gray-900"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 py-4 px-4">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                to={link.href}
                className="text-gray-600 hover:text-gray-900 transition-colors duration-200 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button variant="default" size="sm" className="w-full">
              Get in Touch
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

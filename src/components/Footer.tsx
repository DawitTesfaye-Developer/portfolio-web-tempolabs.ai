import React from "react";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Button } from "./ui/button";

interface FooterProps {
  copyrightText?: string;
  socialLinks?: {
    platform: "github" | "linkedin" | "twitter" | "email";
    url: string;
  }[];
  contactEmail?: string;
}

const Footer = ({
  copyrightText = "© 2023 Portfolio. All rights reserved.",
  socialLinks = [
    { platform: "github", url: "https://github.com" },
    { platform: "linkedin", url: "https://linkedin.com" },
    { platform: "twitter", url: "https://twitter.com" },
    { platform: "email", url: "mailto:contact@example.com" },
  ],
  contactEmail = "contact@example.com",
}: FooterProps) => {
  const renderSocialIcon = (platform: string) => {
    switch (platform) {
      case "github":
        return <Github size={18} />;
      case "linkedin":
        return <Linkedin size={18} />;
      case "twitter":
        return <Twitter size={18} />;
      case "email":
        return <Mail size={18} />;
      default:
        return null;
    }
  };

  return (
    <footer className="w-full py-6 px-4 md:px-8 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <p className="text-gray-600 text-sm">{copyrightText}</p>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="flex space-x-3">
            {socialLinks.map((link, index) => (
              <Button
                key={index}
                variant="ghost"
                size="icon"
                className="h-9 w-9 rounded-full hover:bg-gray-100"
                asChild
              >
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${link.platform} link`}
                >
                  {renderSocialIcon(link.platform)}
                </a>
              </Button>
            ))}
          </div>

          <div className="text-sm text-gray-500">
            <a
              href={`mailto:${contactEmail}`}
              className="hover:text-gray-800 transition-colors"
            >
              {contactEmail}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

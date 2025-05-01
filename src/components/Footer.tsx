
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-dodge-black py-8 border-t border-dodge-gray-dark">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-dodge-gray-light mb-4 md:mb-0">
            © {new Date().getFullYear()} | 2012 Dodge Challenger SRT8 Yellow Jacket
          </p>
          <div className="flex space-x-4">
            <a
              href="#overview"
              className="text-dodge-gray-light hover:text-dodge-yellow transition-colors duration-300"
            >
              Back to Top
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

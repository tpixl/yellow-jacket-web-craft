
import React from "react";

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-1500 bg-dodge-black bg-opacity-80 backdrop-blur-md z-50">
      <div className="container mx-auto py-4 px-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-dodge-yellow">
          <span className="text-white">SRT8</span> Yellow Jacket
        </h1>
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {["Aperçu", "Caractéristiques", "Fonctionnalités", "Galerie"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-white hover:text-dodge-yellow transition-colors duration-300"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

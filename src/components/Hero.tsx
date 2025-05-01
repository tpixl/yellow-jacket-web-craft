
import React from "react";

const Hero: React.FC = () => {
  return (
    <section id="aperçu" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-dodge-black">
        <div className="absolute inset-0 bg-gradient-to-b from-dodge-black via-transparent to-dodge-black opacity-80"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-60"></div>
      </div>
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl">
          <h2 className="reveal text-5xl md:text-7xl font-bold text-white leading-tight mb-4">
            2012 <span className="text-dodge-yellow">Dodge Challenger</span> SRT8 Yellow Jacket
          </h2>
          <p className="reveal text-xl md:text-2xl text-dodge-gray-light mb-8">
            Transmission Manuelle | 470 CV | Moteur HEMI V8 6.4L
          </p>
          <div className="reveal flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="#caractéristiques"
              className="inline-block bg-dodge-yellow text-dodge-black py-3 px-8 rounded-md font-bold text-lg hover:bg-dodge-yellow-light transition duration-300"
            >
              Voir les Caractéristiques
            </a>
            <a
              href="#galerie"
              className="inline-block bg-transparent border-2 border-white text-white py-3 px-8 rounded-md font-bold text-lg hover:bg-white hover:bg-opacity-10 transition duration-300"
            >
              Voir la Galerie
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

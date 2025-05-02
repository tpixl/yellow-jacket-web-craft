
import React from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const Hero: React.FC = () => {
  const isMobile = useIsMobile();
  
  return (
    <section id="aperçu" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-dodge-black">
        <div className="absolute inset-0 bg-gradient-to-b from-dodge-black via-transparent to-dodge-black opacity-80"></div>
        <div className="absolute inset-0 bg-cover bg-center md:bg-[url('https://i.ibb.co/Td7Kzrv/20240417-203841.jpg')] bg-[url('https://i.ibb.co/Td7Kzrv/20240417-203841.jpg')] bg-no-repeat md:bg-cover bg-contain opacity-90"></div>
      </div>
      <div className="container z-10 mx-0 my-0 py-0 px-0 -translate-y-24">
        <div className="max-w-3xl py-0">
          <h2 className="reveal text-5xl md:text-7xl font-bold text-white leading-tight mb-4">
            2012 <span className="text-dodge-yellow">Dodge Challenger</span> SRT8 Yellow Jacket
          </h2>
          <p className="reveal text-xl md:text-2xl text-dodge-gray-light mb-8">
            Transmission Manuelle | 470 CV | Moteur HEMI V8 6.4L
          </p>
          <div className="reveal flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="#caractéristiques" className="inline-block bg-dodge-yellow text-dodge-black py-3 px-8 rounded-md font-bold text-lg hover:bg-dodge-yellow-light transition duration-300">
              Voir les Caractéristiques
            </a>
            <a href="#galerie" className="inline-block bg-transparent border-2 border-white text-white py-3 px-8 rounded-md font-bold text-lg hover:bg-white hover:bg-opacity-10 transition duration-300">
              Voir la Galerie
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;

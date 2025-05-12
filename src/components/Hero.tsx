import React from "react";
import { useIsMobile } from "@/hooks/use-mobile";
const Hero: React.FC = () => {
  const isMobile = useIsMobile();
  return <section id="aperçu" className="relative h-screen flex items-top justify-center overflow-hidden">
      <div className="absolute inset-0 bg-dodge-black">
        <div className="absolute inset-0 bg-gradient-to-b from-dodge-black via-transparent to-dodge-black opacity-80"></div>
        <div className={`absolute inset-0 bg-no-repeat ${isMobile ? /*si mobile :*/"bg-[url('https://i.ibb.co/9m9sTXdF/20240417-203841-HALF.jpg')] bg-contain bg-center" : /*si no mobile*/"bg-[url('https://i.ibb.co/9m9sTXdF/20240417-203841-HALF.jpg')] bg-contain bg-center"}`} style={{
        width: "1500px",
        maxWidth: "100%",
        margin: "0 auto"
      }}></div>
      </div>
      <div className="container z-10 mx-0 my-0 py-20 px-0" style={{
        display: "flex",
        /*flexDirection: "row",*/
        justifyContent: "center",
        alignItems: "bottom",
        height: "800px",
        maxWidth: "1100px",
      }}>
        <div className="max-w-3xl py-0 px-5" style={{
          maxWidth: "1000px",
        }}>
          <h2 className="reveal text-5xl md:text-7xl font-bold text-white leading-tight mb-4">
            2012 <span className="text-dodge-yellow">Dodge Challenger</span> SRT8 Yellow Jacket
          </h2>
          <p className="reveal text-xl md:text-2xl text-dodge-gray-light mb-8">
            Transmission Manuelle | 470 CV | Moteur HEMI V8 6.4L
          </p>
          <div className="reveal flex flex-col space-y-4">
            <a href="#caractéristiques" className="inline-block bg-dodge-yellow text-dodge-black py-3 rounded-md font-bold text-lg hover:bg-dodge-yellow-light transition duration-300 px-[10px]" style={{
              width: "250px",
              maxWidth: "100%"
            }}>
              Voir les Caractéristiques
            </a>
            <a href="#galerie" className="inline-block bg-transparent border-2 border-white text-white py-3 rounded-md font-bold text-lg hover:bg-white hover:bg-opacity-10 transition duration-300 px-[10px]" style={{
              width: "250px",
              maxWidth: "100%"
            }}>
              Voir la Galerie
            </a>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;

import React from "react";

const Specs: React.FC = () => {
  const specs = [
    { label: "Moteur", value: "6.4L HEMI V8" },
    { label: "Puissance", value: "470 CV @ 6,000 tr/min" },
    { label: "Couple", value: "470 lb-pi @ 4,200 tr/min" },
    { label: "Transmission", value: "Manuelle 6 vitesses" },
    { label: "0-100 km/h", value: "4.5 secondes" },
    { label: "400 mètres", value: "12.9 secondes" },
    { label: "Vitesse maximale", value: "293 km/h" },
    { label: "Freins", value: "Étriers Brembo 4 pistons" },
    { label: "Jantes", value: "20 pouces SRT® Alliage" },
    { label: "Édition", value: "Yellow Jacket (Limitée)" },
  ];

  return (
    <section id="caractéristiques" className="py-20 bg-dodge-black-light">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          <span className="highlight">Caractéristiques Techniques</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {specs.map((spec, index) => (
            <div
              key={spec.label}
              className="reveal flex justify-between border-b border-dodge-gray-dark py-4"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <span className="text-dodge-gray-light font-medium">{spec.label}</span>
              <span className="text-white font-bold">{spec.value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specs;

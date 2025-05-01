
import React from "react";

const Features: React.FC = () => {
  const features = [
    {
      title: "Édition Limitée",
      description:
        "Une des rares éditions limitées Yellow Jacket, caractérisée par une peinture jaune Stinger exclusive avec des accents intérieurs assortis.",
    },
    {
      title: "Transmission Manuelle",
      description:
        "Transmission manuelle Tremec à 6 vitesses offrant un contrôle précis et une expérience de conduite engageante.",
    },
    {
      title: "Performance SRT",
      description:
        "Suspension réglée par SRT, freins haute performance Brembo et système de contrôle de lancement pour des performances dignes des circuits.",
    },
    {
      title: "Design Iconique",
      description:
        "Prise d'air agressive sur le capot, carrosserie orientée performance et badge Yellow Jacket la distinguent des Challenger standard.",
    },
  ];

  return (
    <section id="fonctionnalités" className="py-20 bg-gradient-to-b from-dodge-black to-dodge-black-light">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          <span className="highlight">Fonctionnalités Exclusives</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="reveal bg-dodge-black-light p-6 rounded-lg border border-dodge-gray-dark hover:border-dodge-yellow transition-all duration-300"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <h3 className="text-2xl font-bold mb-4 text-dodge-yellow">
                {feature.title}
              </h3>
              <p className="text-dodge-gray-light">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

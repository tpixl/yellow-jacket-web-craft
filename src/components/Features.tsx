
import React from "react";

const Features: React.FC = () => {
  const features = [
    {
      title: "Limited Edition",
      description:
        "One of the rare Yellow Jacket limited editions, featuring exclusive Stinger Yellow paint with matching interior accents.",
    },
    {
      title: "Manual Transmission",
      description:
        "6-speed Tremec manual transmission offers precise control and an engaging driving experience.",
    },
    {
      title: "SRT Performance",
      description:
        "SRT-tuned suspension, high-performance Brembo brakes, and launch control system for track-ready performance.",
    },
    {
      title: "Iconic Design",
      description:
        "Aggressive hood scoop, performance-oriented body styling, and Yellow Jacket badging set it apart from standard Challengers.",
    },
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-b from-dodge-black to-dodge-black-light">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          <span className="highlight">Exclusive Features</span>
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

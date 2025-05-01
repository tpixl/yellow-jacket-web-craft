
import React from "react";

const Specs: React.FC = () => {
  const specs = [
    { label: "Engine", value: "6.4L HEMI V8" },
    { label: "Horsepower", value: "470 HP @ 6,000 RPM" },
    { label: "Torque", value: "470 lb-ft @ 4,200 RPM" },
    { label: "Transmission", value: "6-Speed Manual" },
    { label: "0-60 MPH", value: "4.5 seconds" },
    { label: "Quarter Mile", value: "12.9 seconds" },
    { label: "Top Speed", value: "182 MPH" },
    { label: "Brakes", value: "Brembo 4-piston calipers" },
    { label: "Wheels", value: "20-inch SRT® Alloy" },
    { label: "Edition", value: "Yellow Jacket (Limited)" },
  ];

  return (
    <section id="specs" className="py-20 bg-dodge-black-light">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          <span className="highlight">Technical Specifications</span>
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

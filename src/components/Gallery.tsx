
import React, { useState } from "react";

const Gallery: React.FC = () => {
  // Placeholder images for the gallery
  const images = [
    {
      url: "https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      alt: "Dodge Challenger SRT8 Yellow Jacket Front",
    },
    {
      url: "https://images.unsplash.com/photo-1526726538690-5cbf956ae2fd?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      alt: "Dodge Challenger SRT8 Yellow Jacket Side",
    },
    {
      url: "https://images.unsplash.com/photo-1486704155675-e4c07f8ad160?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      alt: "Dodge Challenger SRT8 Yellow Jacket Rear",
    },
    {
      url: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      alt: "Dodge Challenger SRT8 Yellow Jacket Interior",
    },
    {
      url: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      alt: "Dodge Challenger SRT8 Yellow Jacket Detail",
    },
    {
      url: "https://images.unsplash.com/photo-1542362567-b07e54358753?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      alt: "Dodge Challenger SRT8 Yellow Jacket Wheels",
    },
  ];

  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-20 bg-dodge-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          <span className="highlight">Gallery</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="reveal overflow-hidden rounded-lg cursor-pointer"
              style={{ transitionDelay: `${index * 100}ms` }}
              onClick={() => setSelectedImage(index)}
            >
              <div className="relative group h-0 pb-[66.67%]">
                <img
                  src={image.url}
                  alt={image.alt}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dodge-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <span className="text-white p-4">{image.alt}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedImage !== null && (
          <div className="fixed inset-0 z-50 bg-dodge-black bg-opacity-90 flex items-center justify-center p-4">
            <div className="relative max-w-4xl w-full">
              <img
                src={images[selectedImage].url.replace("w=600", "w=1200")}
                alt={images[selectedImage].alt}
                className="w-full h-auto"
              />
              <button
                className="absolute top-4 right-4 bg-dodge-yellow text-dodge-black w-10 h-10 rounded-full flex items-center justify-center"
                onClick={() => setSelectedImage(null)}
              >
                ✕
              </button>
              <div className="flex justify-between mt-4">
                <button
                  className="bg-dodge-gray-dark py-2 px-4 rounded text-white disabled:opacity-50"
                  disabled={selectedImage === 0}
                  onClick={() => setSelectedImage(selectedImage - 1)}
                >
                  Previous
                </button>
                <button
                  className="bg-dodge-gray-dark py-2 px-4 rounded text-white disabled:opacity-50"
                  disabled={selectedImage === images.length - 1}
                  onClick={() => setSelectedImage(selectedImage + 1)}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;

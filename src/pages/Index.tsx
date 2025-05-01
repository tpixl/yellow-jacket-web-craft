
import React, { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Specs from "@/components/Specs";
import Features from "@/components/Features";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";
import { initScrollAnimation } from "@/utils/scrollAnimation";

const Index = () => {
  // Initialize the scroll animation
  initScrollAnimation();

  // Smooth scroll to anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === "A" && target.getAttribute("href")?.startsWith("#")) {
        e.preventDefault();
        const id = target.getAttribute("href")!.slice(1);
        const element = document.getElementById(id);
        if (element) {
          window.scrollTo({
            behavior: "smooth",
            top: element.offsetTop - 80, // Account for header height
          });
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);
    return () => document.removeEventListener("click", handleAnchorClick);
  }, []);

  return (
    <div className="min-h-screen bg-dodge-black text-white">
      <Header />
      <Hero />
      <Specs />
      <Features />
      <Gallery />
      <Footer />
    </div>
  );
};

export default Index;

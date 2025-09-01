import React from "react";

const FloatingElements: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Floating geometric shapes with proper color variables */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-gradient-to-r from-violet-400 to-pink-400 rounded-full opacity-30 floating"></div>
      <div className="absolute top-40 right-20 w-6 h-6 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full opacity-25 floating-delayed"></div>
      <div className="absolute bottom-40 left-1/4 w-3 h-3 bg-gradient-to-r from-orange-400 to-red-400 rounded-full opacity-35 floating-reverse"></div>
      <div className="absolute top-1/3 right-1/3 w-5 h-5 bg-gradient-to-r from-primary to-primary-glow rounded-full opacity-20 floating"></div>
      <div className="absolute bottom-20 right-10 w-4 h-4 bg-gradient-to-r from-violet-400 to-cyan-400 rounded-full opacity-30 floating-delayed"></div>
      
      {/* Floating triangles */}
      <div className="absolute top-60 left-1/2 w-0 h-0 border-l-4 border-r-4 border-b-6 border-l-transparent border-r-transparent border-b-primary/20 floating-reverse"></div>
      <div className="absolute bottom-60 right-1/4 w-0 h-0 border-l-3 border-r-3 border-b-5 border-l-transparent border-r-transparent border-b-pink-400/25 floating"></div>
      
      {/* Floating squares */}
      <div className="absolute top-80 right-40 w-4 h-4 bg-gradient-to-br from-cyan-400/20 to-blue-400/30 transform rotate-45 floating-delayed"></div>
      <div className="absolute bottom-80 left-40 w-3 h-3 bg-gradient-to-br from-violet-400/25 to-pink-400/20 transform rotate-12 floating-reverse"></div>
      
      {/* Subtle gradient orbs */}
      <div className="absolute top-1/4 left-20 w-20 h-20 bg-gradient-radial from-primary/10 to-transparent rounded-full blur-sm floating"></div>
      <div className="absolute bottom-1/4 right-32 w-16 h-16 bg-gradient-radial from-violet-400/15 to-transparent rounded-full blur-sm floating-delayed"></div>
      <div className="absolute top-3/4 left-1/3 w-12 h-12 bg-gradient-radial from-pink-400/12 to-transparent rounded-full blur-sm floating-reverse"></div>
    </div>
  );
};

export default FloatingElements;
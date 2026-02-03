import React from "react";

const FloatingElements: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Floating geometric shapes - opacidad reducida */}
      <div className="absolute top-20 left-10 w-3 h-3 bg-gradient-to-r from-violet-400 to-pink-400 rounded-full opacity-15 floating"></div>
      <div className="absolute top-40 right-20 w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full opacity-12 floating-delayed"></div>
      <div className="absolute bottom-40 left-1/4 w-2 h-2 bg-gradient-to-r from-orange-400 to-red-400 rounded-full opacity-15 floating-reverse"></div>
      <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-gradient-to-r from-primary to-primary-glow rounded-full opacity-10 floating"></div>
      <div className="absolute bottom-20 right-10 w-3 h-3 bg-gradient-to-r from-violet-400 to-cyan-400 rounded-full opacity-15 floating-delayed"></div>
      
      {/* Subtle gradient orbs - opacidad muy reducida */}
      <div className="absolute top-1/4 left-20 w-16 h-16 bg-gradient-radial from-primary/5 to-transparent rounded-full blur-sm floating"></div>
      <div className="absolute bottom-1/4 right-32 w-12 h-12 bg-gradient-radial from-violet-400/8 to-transparent rounded-full blur-sm floating-delayed"></div>
    </div>
  );
};

export default FloatingElements;

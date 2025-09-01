import React from "react";

const AnimatedBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Animated gradient mesh background */}
      <div className="absolute inset-0 bg-mesh opacity-40"></div>
      
      {/* Moving gradient blobs with proper color variables */}
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-r from-primary/20 to-violet-400/15 rounded-full mix-blend-multiply filter blur-xl animate-pulse-glow opacity-70"></div>
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-gradient-to-r from-pink-400/15 to-cyan-400/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse-glow opacity-70 [animation-delay:2s]"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-orange-400/10 to-primary/15 rounded-full mix-blend-multiply filter blur-2xl animate-pulse-glow opacity-60 [animation-delay:4s]"></div>
      
      {/* Floating light rays */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary/30 to-transparent opacity-20 floating"></div>
      <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-violet-400/25 to-transparent opacity-15 floating-delayed"></div>
      <div className="absolute top-0 left-2/3 w-px h-full bg-gradient-to-b from-transparent via-pink-400/20 to-transparent opacity-25 floating-reverse"></div>
      
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_24px,hsl(var(--border)/0.05)_25px,hsl(var(--border)/0.05)_26px,transparent_27px),linear-gradient(180deg,transparent_24px,hsl(var(--border)/0.05)_25px,hsl(var(--border)/0.05)_26px,transparent_27px)] bg-[25px_25px] opacity-40"></div>
    </div>
  );
};

export default AnimatedBackground;
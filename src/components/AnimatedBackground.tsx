import React from "react";

const AnimatedBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Animated gradient mesh background */}
      <div className="absolute inset-0 bg-mesh opacity-30"></div>
      
      {/* Large organic blobs - slow movement */}
      <div className="absolute -top-60 -left-60 w-[500px] h-[500px] bg-gradient-to-r from-primary/15 to-violet-400/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse-glow opacity-50 [animation-duration:8s]"></div>
      <div className="absolute -bottom-60 -right-60 w-[500px] h-[500px] bg-gradient-to-r from-pink-400/10 to-cyan-400/15 rounded-full mix-blend-multiply filter blur-3xl animate-pulse-glow opacity-50 [animation-delay:3s] [animation-duration:10s]"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-orange-400/8 to-primary/10 rounded-full mix-blend-multiply filter blur-[80px] animate-pulse-glow opacity-40 [animation-delay:5s] [animation-duration:12s]"></div>
    </div>
  );
};

export default AnimatedBackground;

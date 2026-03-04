import React from "react";

const AnimatedBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Subtle grid lines background */}
      <div className="absolute inset-0 bg-grid" />
    </div>
  );
};

export default AnimatedBackground;

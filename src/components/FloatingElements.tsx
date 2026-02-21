import React from "react";

const FloatingElements: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Large soft organic shapes */}
      <div className="absolute top-[10%] left-[5%] w-32 h-32 bg-gradient-radial from-primary/8 to-transparent rounded-full blur-2xl floating"></div>
      <div className="absolute top-[60%] right-[8%] w-40 h-40 bg-gradient-radial from-violet-400/6 to-transparent rounded-full blur-2xl floating-delayed"></div>
      <div className="absolute bottom-[20%] left-[15%] w-24 h-24 bg-gradient-radial from-pink-400/6 to-transparent rounded-full blur-xl floating-reverse"></div>
      <div className="absolute top-[35%] right-[25%] w-20 h-20 bg-gradient-radial from-cyan-400/5 to-transparent rounded-full blur-xl floating"></div>
    </div>
  );
};

export default FloatingElements;

import React from "react";
import rmLogo from "@/assets/rm-logo.png";

interface LogoProps {
  size?: number;
  className?: string;
}

/**
 * Logo component - Brand "R" with gradient inside white container
 * Uses the original PNG for the exact R design, wrapped in styled container
 */
const Logo: React.FC<LogoProps> = ({ size = 36, className = "" }) => {
  return (
    <div 
      className={`bg-white border border-gray-200 rounded-lg flex items-center justify-center shadow-sm ${className}`}
      style={{ 
        width: size, 
        height: size,
        padding: size * 0.12,
      }}
    >
      <img 
        src={rmLogo} 
        alt="R" 
        className="w-full h-full object-contain"
      />
    </div>
  );
};

export default Logo;

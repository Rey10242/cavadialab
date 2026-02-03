import React from "react";

interface LogoProps {
  size?: number;
  className?: string;
}

/**
 * Logo component - "R" with blue-cyan to purple-violet gradient
 * Created in pure SVG, no image files
 */
const Logo: React.FC<LogoProps> = ({ size = 36, className = "" }) => {
  const padding = size * 0.15;
  const containerSize = size;
  
  return (
    <div 
      className={`bg-white border border-gray-200 rounded-lg flex items-center justify-center ${className}`}
      style={{ 
        width: containerSize, 
        height: containerSize,
        padding: padding,
      }}
    >
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00D4FF" />
            <stop offset="50%" stopColor="#5B7FFF" />
            <stop offset="100%" stopColor="#8B5CF6" />
          </linearGradient>
        </defs>
        
        {/* R letter path - geometric/modern style */}
        <path
          d="M20 10 L20 90 L32 90 L32 58 L45 58 L65 90 L80 90 L58 55 C70 52 78 42 78 28 C78 14 66 10 52 10 L20 10 Z M32 22 L50 22 C60 22 66 26 66 34 C66 42 60 46 50 46 L32 46 L32 22 Z"
          fill="url(#logoGradient)"
        />
      </svg>
    </div>
  );
};

export default Logo;

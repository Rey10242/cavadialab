import React from "react";

interface LogoProps {
  size?: number;
  className?: string;
}

/**
 * Logo component - Modern geometric "R" with blue-violet gradient
 * Pure SVG, professionally crafted to match brand identity
 */
const Logo: React.FC<LogoProps> = ({ size = 36, className = "" }) => {
  // Unique ID for gradient to avoid conflicts when multiple logos render
  const gradientId = `logoGradient-${React.useId().replace(/:/g, '')}`;
  
  return (
    <div 
      className={`bg-white rounded-xl flex items-center justify-center shadow-sm border border-slate-200/80 ${className}`}
      style={{ 
        width: size, 
        height: size,
      }}
    >
      <svg
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          width: size * 0.6,
          height: size * 0.6,
        }}
      >
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="50%" stopColor="#6366F1" />
            <stop offset="100%" stopColor="#8B5CF6" />
          </linearGradient>
        </defs>
        
        {/* Modern geometric R */}
        <path
          d="M6 4h12c4.418 0 8 3.134 8 7s-3.582 7-8 7h-2l8 10h-5l-7-9H10v9H6V4zm4 4v7h8c2.21 0 4-1.567 4-3.5S20.21 8 18 8h-8z"
          fill={`url(#${gradientId})`}
        />
      </svg>
    </div>
  );
};

export default Logo;

import React from "react";

interface LogoProps {
  size?: number;
  className?: string;
}

/** Logo — Bebas Neue text-based, matching the new dark editorial branding */
const Logo: React.FC<LogoProps> = ({ size = 36, className = "" }) => {
  return (
    <span
      className={`font-heading tracking-[0.08em] text-primary ${className}`}
      style={{ fontSize: size * 0.5 }}
    >
      RM
    </span>
  );
};

export default Logo;

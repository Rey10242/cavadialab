import React from "react";

type DividerVariant = "wave" | "curve" | "angle" | "blob";

interface SectionDividerProps {
  variant?: DividerVariant;
  flip?: boolean;
  className?: string;
  fillFrom?: string;
  fillTo?: string;
}

const SectionDivider: React.FC<SectionDividerProps> = ({ 
  variant = "wave", 
  flip = false, 
  className = "",
  fillFrom = "hsl(var(--background))",
  fillTo = "hsl(var(--muted) / 0.3)"
}) => {
  const transform = flip ? "rotate(180deg)" : undefined;

  const svgs: Record<DividerVariant, React.ReactNode> = {
    wave: (
      <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-full">
        <path d="M0,60 C240,120 480,0 720,60 C960,120 1200,0 1440,60 L1440,120 L0,120 Z" fill={fillTo} />
        <path d="M0,80 C320,40 640,100 960,60 C1120,40 1280,80 1440,70 L1440,120 L0,120 Z" fill={fillTo} opacity="0.5" />
      </svg>
    ),
    curve: (
      <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-full">
        <path d="M0,100 Q720,0 1440,100 L1440,100 L0,100 Z" fill={fillTo} />
      </svg>
    ),
    angle: (
      <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-full">
        <path d="M0,80 L720,20 L1440,80 L1440,80 L0,80 Z" fill={fillTo} />
      </svg>
    ),
    blob: (
      <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-full">
        <path d="M0,60 C180,100 360,20 540,60 C720,100 900,30 1080,70 C1200,90 1320,40 1440,60 L1440,120 L0,120 Z" fill={fillTo} />
        <path d="M0,90 C200,70 400,110 600,80 C800,50 1000,100 1200,75 C1350,60 1400,85 1440,80 L1440,120 L0,120 Z" fill={fillTo} opacity="0.4" />
      </svg>
    ),
  };

  return (
    <div 
      className={`relative w-full h-16 md:h-24 -my-1 pointer-events-none select-none ${className}`}
      style={{ transform }}
      aria-hidden="true"
    >
      {svgs[variant]}
    </div>
  );
};

export default SectionDivider;

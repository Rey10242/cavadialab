import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React from "react";

type CTAButtonProps = {
  href?: string;
  children?: React.ReactNode;
  className?: string;
};

export const CTAButton: React.FC<CTAButtonProps> = ({
  href = "#contacto",
  children,
  className,
}) => {
  return (
    <Button asChild className={cn("shadow-md transition-transform active:scale-[0.98]", className)}>
      <a href={href} aria-label={typeof children === 'string' ? children : "Contactar CavadiaLab"}>
        {children}
      </a>
    </Button>
  );
};

export default CTAButton;

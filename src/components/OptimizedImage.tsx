import React, { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  /** Priority loading for LCP images (hero, above-fold) */
  priority?: boolean;
  /** Placeholder blur color */
  placeholderColor?: string;
  /** Custom aspect ratio for placeholder (e.g., "16/9", "1/1", "4/3") */
  aspectRatio?: string;
}

/**
 * OptimizedImage Component
 * 
 * Features:
 * - Lazy loading by default (disabled for priority images)
 * - Native loading="lazy" and decoding="async"
 * - Intersection Observer for progressive loading
 * - Placeholder with smooth fade-in
 * - Priority loading for LCP images
 */
const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  priority = false,
  placeholderColor = "bg-muted",
  aspectRatio,
  className,
  style,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (priority) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "200px", // Start loading 200px before visible
        threshold: 0.01,
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  return (
    <div 
      ref={imgRef}
      className={cn("relative overflow-hidden", className)}
      style={{
        ...style,
        aspectRatio: aspectRatio,
      }}
    >
      {/* Placeholder */}
      <div 
        className={cn(
          "absolute inset-0 transition-opacity duration-500",
          placeholderColor,
          isLoaded ? "opacity-0" : "opacity-100"
        )}
      />
      
      {/* Actual Image */}
      {isInView && (
        <img
          src={src}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          decoding={priority ? "sync" : "async"}
          fetchPriority={priority ? "high" : "auto"}
          onLoad={handleLoad}
          className={cn(
            "w-full h-full object-cover transition-opacity duration-500",
            isLoaded ? "opacity-100" : "opacity-0"
          )}
          {...props}
        />
      )}
    </div>
  );
};

export default OptimizedImage;

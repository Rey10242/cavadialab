import { useEffect, useCallback } from 'react';

interface ScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
}

export const useScrollAnimation = (options: ScrollAnimationOptions = {}) => {
  const { threshold = 0.1, rootMargin = '0px 0px -100px 0px' } = options;

  const initializeScrollAnimations = useCallback(() => {
    const observerOptions = {
      threshold,
      rootMargin,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          entry.target.classList.remove('scroll-reveal');
        }
      });
    }, observerOptions);

    // Observe all elements with scroll-reveal class
    const elements = document.querySelectorAll('.scroll-reveal');
    elements.forEach((element) => observer.observe(element));

    return () => {
      elements.forEach((element) => observer.unobserve(element));
      observer.disconnect();
    };
  }, [threshold, rootMargin]);

  useEffect(() => {
    // Small delay to ensure DOM is ready
    const timer = setTimeout(initializeScrollAnimations, 100);
    return () => clearTimeout(timer);
  }, [initializeScrollAnimations]);

  return { initializeScrollAnimations };
};

// Hook for magnetic button effect
export const useMagneticEffect = () => {
  const addMagneticEffect = useCallback((element: HTMLElement) => {
    if (!element) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      const strength = 0.3;
      const translateX = x * strength;
      const translateY = y * strength;
      
      element.style.transform = `translate(${translateX}px, ${translateY}px)`;
    };

    const handleMouseLeave = () => {
      element.style.transform = 'translate(0px, 0px)';
    };

    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return { addMagneticEffect };
};
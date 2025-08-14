import { useEffect } from 'react';
import { trackScrollDepth } from '@/lib/gtag';

export const useScrollTracking = () => {
  useEffect(() => {
    let ticking = false;
    const milestones = [25, 50, 75, 90];
    const triggered: Set<number> = new Set();

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
          const docHeight = document.documentElement.scrollHeight - window.innerHeight;
          const scrollPercent = Math.round((scrollTop / docHeight) * 100);

          milestones.forEach(milestone => {
            if (scrollPercent >= milestone && !triggered.has(milestone)) {
              triggered.add(milestone);
              trackScrollDepth(milestone);
            }
          });

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
};
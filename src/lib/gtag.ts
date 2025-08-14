// Google Analytics gtag function declaration and utilities

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

// Extend gtag function for better typing
declare function gtag(
  command: 'config' | 'event' | 'js',
  targetId: string | Date,
  config?: {
    event_category?: string;
    event_label?: string;
    value?: number;
    [key: string]: any;
  }
): void;

// Tracking events for SEO and conversion optimization
export const trackEvent = (eventName: string, parameters?: {
  event_category?: string;
  event_label?: string;
  value?: number;
  [key: string]: any;
}) => {
  if (typeof window !== 'undefined' && typeof window.gtag !== 'undefined') {
    window.gtag('event', eventName, parameters);
  }
};

// Specific tracking functions for our landing page
export const trackHeroCTA = () => trackEvent('cta_hero_click', {
  event_category: 'engagement',
  event_label: 'hero_cta',
  value: 1
});

export const trackPlanCardClick = (planName: string, price: string) => {
  const planSlug = planName.toLowerCase().replace(/\s+/g, '_').replace('á', 'a').replace('í', 'i');
  const numericPrice = parseInt(price.replace(/[^\d]/g, ''));
  
  trackEvent(`plan_card_click_${planSlug}`, {
    event_category: 'conversion',
    event_label: planName,
    value: numericPrice
  });
};

export const trackFormStart = () => trackEvent('form_start', {
  event_category: 'lead_generation',
  event_label: 'contact_form'
});

export const trackFormSubmit = () => trackEvent('form_submit', {
  event_category: 'lead_generation', 
  event_label: 'contact_form',
  value: 1
});

export const trackWhatsAppClick = () => trackEvent('whatsapp_click', {
  event_category: 'engagement',
  event_label: 'whatsapp_contact'
});

export const trackScrollDepth = (percentage: number) => trackEvent(`scroll_${percentage}`, {
  event_category: 'engagement',
  event_label: 'scroll_depth',
  value: percentage
});
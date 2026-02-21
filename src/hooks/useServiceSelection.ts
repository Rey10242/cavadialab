// Map service titles to project types for the contact form
export const serviceToProjectType: Record<string, string> = {
  "Gestión de Crecimiento Integral": "marketing",
  "SEO": "marketing",
  "Meta Ads": "marketing",
  "Google Ads": "marketing",
  "Consultoría Estratégica": "consulting",
};

// Simple event-based service selection
let selectedService: string | null = null;
const listeners: Set<(service: string | null) => void> = new Set();

export const useServiceSelection = () => {
  const subscribe = (listener: (service: string | null) => void) => {
    listeners.add(listener);
    return () => listeners.delete(listener);
  };

  const setSelectedService = (service: string | null) => {
    selectedService = service;
    listeners.forEach(listener => listener(service));
  };

  const getSelectedService = () => selectedService;

  const clearSelectedService = () => {
    selectedService = null;
    listeners.forEach(listener => listener(null));
  };

  return {
    selectedService,
    setSelectedService,
    getSelectedService,
    clearSelectedService,
    subscribe,
  };
};

// Singleton instance for direct access
export const serviceSelection = {
  get: () => selectedService,
  set: (service: string | null) => {
    selectedService = service;
    listeners.forEach(listener => listener(service));
  },
  clear: () => {
    selectedService = null;
    listeners.forEach(listener => listener(null));
  },
  subscribe: (listener: (service: string | null) => void) => {
    listeners.add(listener);
    return () => listeners.delete(listener);
  },
};

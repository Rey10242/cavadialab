// Map service titles to project types (simplified for new services)
export const serviceToProjectType: Record<string, string> = {
  "Organizar tu publicidad": "marketing",
  "Atraer mejores clientes": "marketing",
  "Mejorar tus resultados actuales": "marketing",
  "Saber si tu inversión funciona": "consulting",
  "Tener claridad sobre tus números": "consulting",
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

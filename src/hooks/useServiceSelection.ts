import { create } from 'zustand';

interface ServiceSelectionState {
  selectedService: string | null;
  setSelectedService: (service: string | null) => void;
  clearSelectedService: () => void;
}

// Map service titles to project types
export const serviceToProjectType: Record<string, string> = {
  "Set Up de Cuentas y Tracking": "marketing",
  "Escalamiento de Campañas": "marketing",
  "Optimización y Reestructuración": "marketing",
  "Auditoría Técnica y Estratégica": "consulting",
  "SEO y Posicionamiento Orgánico": "marketing",
  "Consultoría Growth & Performance": "consulting",
};

// Since zustand might not be installed, we'll use a simple event-based approach
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

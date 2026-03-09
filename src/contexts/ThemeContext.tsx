import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type ThemeName = 'lima' | 'naranja' | 'azul' | 'coral' | 'violeta';

interface ThemeColors {
  primary: string;
  primaryForeground: string;
  primaryGlow: string;
  primarySoft: string;
}

interface ThemeConfig {
  name: ThemeName;
  label: string;
  hex: string;
  colors: ThemeColors;
  description: string;
}

export const themes: Record<ThemeName, ThemeConfig> = {
  lima: {
    name: 'lima',
    label: 'Lima',
    hex: '#E8FF47',
    colors: {
      primary: '68 100% 64%',
      primaryForeground: '240 8% 5%',
      primaryGlow: '68 100% 72%',
      primarySoft: '68 100% 90%',
    },
    description: 'Editorial & Disruptivo',
  },
  naranja: {
    name: 'naranja',
    label: 'Naranja',
    hex: '#FF6B00',
    colors: {
      primary: '25 100% 50%',
      primaryForeground: '0 0% 100%',
      primaryGlow: '25 100% 60%',
      primarySoft: '25 100% 85%',
    },
    description: 'Energía & Conversión',
  },
  azul: {
    name: 'azul',
    label: 'Azul',
    hex: '#3B82F6',
    colors: {
      primary: '217 91% 60%',
      primaryForeground: '0 0% 100%',
      primaryGlow: '217 91% 70%',
      primarySoft: '217 91% 90%',
    },
    description: 'Confianza & Tecnología',
  },
  coral: {
    name: 'coral',
    label: 'Coral',
    hex: '#FF4D4D',
    colors: {
      primary: '0 100% 65%',
      primaryForeground: '0 0% 100%',
      primaryGlow: '0 100% 75%',
      primarySoft: '0 100% 90%',
    },
    description: 'Impacto & Urgencia',
  },
  violeta: {
    name: 'violeta',
    label: 'Violeta',
    hex: '#A855F7',
    colors: {
      primary: '270 91% 65%',
      primaryForeground: '0 0% 100%',
      primaryGlow: '270 91% 75%',
      primarySoft: '270 91% 90%',
    },
    description: 'Premium & Estratégico',
  },
};

interface ThemeContextType {
  theme: ThemeName;
  setTheme: (theme: ThemeName) => void;
  themeConfig: ThemeConfig;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const STORAGE_KEY = 'rm-theme-preference';

function applyTheme(themeName: ThemeName) {
  const config = themes[themeName];
  const root = document.documentElement;
  
  root.style.setProperty('--primary', config.colors.primary);
  root.style.setProperty('--primary-foreground', config.colors.primaryForeground);
  root.style.setProperty('--primary-glow', config.colors.primaryGlow);
  root.style.setProperty('--primary-soft', config.colors.primarySoft);
  root.style.setProperty('--accent', config.colors.primary);
  root.style.setProperty('--accent-foreground', config.colors.primaryForeground);
  root.style.setProperty('--ring', config.colors.primary);
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<ThemeName>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem(STORAGE_KEY) as ThemeName | null;
      if (stored && themes[stored]) {
        return stored;
      }
    }
    return 'lima';
  });

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  const setTheme = (newTheme: ThemeName) => {
    setThemeState(newTheme);
    localStorage.setItem(STORAGE_KEY, newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, themeConfig: themes[theme] }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

export function useThemeList() {
  return Object.values(themes);
}

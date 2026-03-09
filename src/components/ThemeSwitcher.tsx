import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Palette, Check, X } from 'lucide-react';
import { useTheme, useThemeList, ThemeName } from '@/contexts/ThemeContext';

const ThemeSwitcher: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme, themeConfig } = useTheme();
  const themeList = useThemeList();

  return (
    <div className="fixed bottom-6 left-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="absolute bottom-16 left-0 p-4 rounded-xl bg-card border border-border shadow-xl min-w-[220px]"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-3 pb-2 border-b border-border">
              <span className="text-xs font-semibold uppercase tracking-wider text-muted">
                A/B Testing
              </span>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded hover:bg-surface transition-colors"
              >
                <X className="w-3 h-3 text-muted" />
              </button>
            </div>

            {/* Theme options */}
            <div className="space-y-1">
              {themeList.map((t) => (
                <button
                  key={t.name}
                  onClick={() => setTheme(t.name)}
                  className={`w-full flex items-center gap-3 p-2 rounded-lg transition-all duration-200 ${
                    theme === t.name
                      ? 'bg-surface'
                      : 'hover:bg-surface/50'
                  }`}
                >
                  {/* Color swatch */}
                  <div
                    className="w-5 h-5 rounded-full flex-shrink-0 transition-all relative"
                    style={{
                      backgroundColor: t.hex,
                      outline: theme === t.name ? `2px solid ${t.hex}` : '2px solid transparent',
                      outlineOffset: '2px',
                    }}
                  >
                    {theme === t.name && (
                      <Check className="w-full h-full p-0.5 text-card" />
                    )}
                  </div>

                  {/* Label & description */}
                  <div className="flex-1 text-left">
                    <div className="text-sm font-medium text-foreground">
                      {t.label}
                    </div>
                    <div className="text-[10px] text-muted leading-tight">
                      {t.description}
                    </div>
                  </div>

                  {/* Recommended badge */}
                  {t.name === 'violeta' && (
                    <span className="text-[9px] font-bold uppercase tracking-wide px-1.5 py-0.5 rounded bg-primary/10 text-primary">
                      REC
                    </span>
                  )}
                </button>
              ))}
            </div>

            {/* Current theme indicator */}
            <div className="mt-3 pt-2 border-t border-border">
              <p className="text-[10px] text-muted text-center">
                Activo:{' '}
                <span className="font-semibold text-primary">
                  {themeConfig.label}
                </span>
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Trigger button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="relative w-12 h-12 rounded-full bg-card border border-border shadow-lg flex items-center justify-center group"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Cambiar tema de color"
      >
        {/* Active color indicator ring */}
        <div
          className="absolute inset-0 rounded-full opacity-30 animate-pulse"
          style={{ boxShadow: `0 0 20px ${themeConfig.hex}` }}
        />
        
        {/* Icon with active theme color */}
        <Palette
          className="w-5 h-5 transition-colors"
          style={{ color: themeConfig.hex }}
        />

        {/* Tooltip on hover */}
        <div className="absolute left-full ml-3 px-2 py-1 rounded bg-card border border-border text-xs font-medium text-foreground whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Probar colores
        </div>
      </motion.button>
    </div>
  );
};

export default ThemeSwitcher;

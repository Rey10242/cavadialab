import React from 'react';
import { MessageCircle } from 'lucide-react';
import { trackWhatsAppClick } from '@/lib/gtag';

const FloatingWhatsAppButton: React.FC = () => {
  const waText = encodeURIComponent("Hola Reynaldo, vi tu portafolio y me gustaría conversar sobre un proyecto. ¿Tienes disponibilidad?");
  
  const handleClick = () => {
    trackWhatsAppClick();
    window.open(`https://wa.me/573246875354?text=${waText}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Contactar por WhatsApp"
    >
      <div className="relative">
        {/* Botón principal */}
        <div className="w-14 h-14 bg-success hover:bg-success/90 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group-hover:scale-110 animate-pulse">
          <MessageCircle className="w-7 h-7 text-success-foreground" />
        </div>
        
        {/* Anillos de pulso */}
        <div className="absolute inset-0 rounded-full bg-success/30 animate-ping opacity-75"></div>
        <div className="absolute inset-0 rounded-full bg-success/20 animate-ping opacity-50" style={{ animationDelay: '0.5s' }}></div>
        
        {/* Tooltip */}
        <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-foreground text-background text-sm rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
          Hablar por WhatsApp
          <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-foreground"></div>
        </div>
      </div>
    </button>
  );
};

export default FloatingWhatsAppButton;
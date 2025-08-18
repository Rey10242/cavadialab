import React from "react";
import CTAButton from "@/components/CTAButton";
import heroImg from "@/assets/hero-dashboard.jpg";
import AutomationFlow from "@/components/AutomationFlow";
import { trackHeroCTA } from "@/lib/gtag";

const Hero: React.FC = () => {

  return (
    <section id="inicio" className="bg-hero scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16 md:py-20 lg:py-32">
        <div className="grid items-center gap-8 sm:gap-10 md:gap-12 lg:grid-cols-2">
          <article className="space-y-6 sm:space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center rounded-full bg-primary-soft/50 px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium text-primary border border-primary/20">
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              ✅ Full Stack Marketer
            </div>
            <h1 className="heading-primary text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] pb-2 sm:pb-4">
             Convierte Más Leads en Clientes y Haz Crecer tu Negocio con{" "}
              <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                 Marketing + IA
              </span>
            </h1>
            <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
              <p className="text-lg sm:text-xl md:text-2xl font-semibold text-foreground">
                Duplica tus ventas y atrae clientes cada mes, sin depender de tu tiempo.
              </p>
              <p className="text-base sm:text-lg leading-relaxed text-muted-foreground max-w-xl mx-auto lg:mx-0">
               Con Google Ads, Meta Ads y WhatsApp con IA, convierto leads en clientes 24/7 con resultados garantizados.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <CTAButton 
                className="btn-primary-glow text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 h-auto font-semibold"
                onClick={trackHeroCTA}
              >
                🚀 Quiero mi máquina de ventas
              </CTAButton>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 text-xs sm:text-sm justify-center lg:justify-start">
              <div className="flex items-center gap-2 text-muted-foreground justify-center sm:justify-start">
                <div className="w-4 sm:w-5 h-4 sm:h-5 rounded-full bg-success flex items-center justify-center">
                  <svg className="w-2.5 sm:w-3 h-2.5 sm:h-3 text-success-foreground" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                </div>
                <span>Consulta gratuita</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground justify-center sm:justify-start">
                <div className="w-4 sm:w-5 h-4 sm:h-5 rounded-full bg-success flex items-center justify-center">
                  <svg className="w-2.5 sm:w-3 h-2.5 sm:h-3 text-success-foreground" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                </div>
                <span>Sin compromisos</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground justify-center sm:justify-start">
                <div className="w-4 sm:w-5 h-4 sm:h-5 rounded-full bg-success flex items-center justify-center">
                  <svg className="w-2.5 sm:w-3 h-2.5 sm:h-3 text-success-foreground" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                </div>
                <span>30 minutos</span>
              </div>
            </div>
          </article>

          <div className="relative group order-first lg:order-last">
            <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-primary/20 to-primary-glow/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            <img
              src={heroImg}
              alt="Dashboard resultados ROI consultor marketing digital Cartagena automatización WhatsApp"
              className="relative w-full rounded-2xl border border-border/50 card-interactive shadow-2xl"
              loading="eager"
              decoding="async"
            />
            
            {/* Stats Overlay */}
            <div className="absolute top-2 sm:top-4 left-2 sm:left-4 bg-background/90 backdrop-blur-sm rounded-lg p-2 sm:p-3 border border-border/50">
              <div className="text-xs sm:text-sm font-semibold text-primary">ROAS Promedio</div>
              <div className="text-lg sm:text-2xl font-bold text-foreground">6.2x</div>
            </div>
            
            <div className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4 bg-background/90 backdrop-blur-sm rounded-lg p-2 sm:p-3 border border-border/50">
              <div className="text-xs sm:text-sm font-semibold text-primary">Automatización</div>
              <div className="text-lg sm:text-2xl font-bold text-foreground">24/7</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

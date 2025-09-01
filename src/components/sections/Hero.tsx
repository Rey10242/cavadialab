import React from "react";
import CTAButton from "@/components/CTAButton";
import heroImg from "@/assets/hero-dashboard.jpg";
import AutomationFlow from "@/components/AutomationFlow";
import { trackHeroCTA } from "@/lib/gtag";

const Hero: React.FC = () => {

  return (
    <section id="inicio" className="bg-hero scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="grid items-center gap-6 sm:gap-8 md:gap-12 lg:grid-cols-2">
          <article className="space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center rounded-full bg-primary-soft/50 px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium text-primary border border-primary/20">
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              ✅ Full Stack Marketer
            </div>
            <h1 className="heading-primary text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-6 scroll-reveal">
              Ayudo a que tu negocio<br />
              consiga más{" "}
              <span className="text-gradient whitespace-nowrap">
                clientes y ventas
              </span>
            </h1>
            <div className="space-y-4 mb-6 scroll-reveal">
              <p className="text-lg sm:text-xl md:text-2xl font-semibold text-foreground leading-relaxed animate-slide-up [animation-delay:0.2s]">
                Con anuncios en Google y Facebook e inteligencia artificial, tus clientes llegan solos, 24/7.
              </p>
              <p className="text-base sm:text-lg leading-relaxed text-muted-foreground max-w-2xl mx-auto lg:mx-0 animate-slide-up [animation-delay:0.4s]">
                No necesitas estar pendiente todo el tiempo, los sistemas trabajan solos para atraer clientes a tu negocio, en cualquier momento del día.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start mb-6 scroll-reveal">
              <CTAButton 
                className="btn-primary-glow hover-lift text-base sm:text-lg px-8 sm:px-10 py-4 sm:py-5 h-auto font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 animate-bounce-in [animation-delay:0.6s]"
                onClick={trackHeroCTA}
              >
                🚀 Quiero que me ayuden a vender más
              </CTAButton>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm justify-center lg:justify-start">
              <div className="flex items-center gap-3 text-muted-foreground justify-center sm:justify-start">
                <div className="w-5 h-5 rounded-full bg-success flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-success-foreground" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                </div>
                <span className="font-medium">Consulta gratuita</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground justify-center sm:justify-start">
                <div className="w-5 h-5 rounded-full bg-success flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-success-foreground" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                </div>
                <span className="font-medium">Sin compromisos</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground justify-center sm:justify-start">
                <div className="w-5 h-5 rounded-full bg-success flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-success-foreground" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                </div>
                <span className="font-medium">30 minutos</span>
              </div>
            </div>
          </article>

          <div className="relative group order-first lg:order-last scroll-reveal">
            <div className="absolute -inset-6 bg-gradient-animated rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-700 opacity-30"></div>
            <div className="absolute -inset-3 bg-gradient-to-r from-primary/20 to-primary-glow/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            <img
              src={heroImg}
              alt="Dashboard resultados ROI consultor marketing digital automatización WhatsApp"
              className="relative w-full rounded-2xl border border-border/50 card-interactive shadow-2xl hover-glow animate-scale-in [animation-delay:0.8s]"
              loading="eager"
              decoding="async"
            />
            
            {/* Enhanced Stats Overlays */}
            <div className="absolute top-4 left-4 glass-strong rounded-xl p-4 shadow-lg animate-slide-up hover-lift [animation-delay:1s]">
              <div className="text-xs font-semibold text-primary uppercase tracking-wide animate-pulse-glow">ROAS PROMEDIO</div>
              <div className="text-2xl sm:text-3xl font-bold text-foreground text-glow">6.2x</div>
              <div className="text-xs text-muted-foreground">Retorno garantizado</div>
            </div>
            
            <div className="absolute bottom-4 right-4 glass-strong rounded-xl p-4 shadow-lg animate-slide-up hover-lift [animation-delay:1.2s]">
              <div className="text-xs font-semibold text-primary uppercase tracking-wide animate-pulse-glow">AUTOMATIZACIÓN</div>
              <div className="text-2xl sm:text-3xl font-bold text-foreground text-glow">24/7</div>
              <div className="text-xs text-muted-foreground">Sin descanso</div>
            </div>

            {/* Enhanced Trust Badge */}
            <div className="absolute top-4 right-4 bg-gradient-to-r from-success to-success/80 backdrop-blur-md rounded-full px-3 py-2 border border-success/30 shadow-lg animate-bounce-in hover-bounce [animation-delay:1.4s]">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-success-foreground rounded-full animate-pulse"></div>
                <span className="text-xs font-semibold text-success-foreground">ACTIVO</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

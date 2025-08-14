import React from "react";
import CTAButton from "@/components/CTAButton";
import heroImg from "@/assets/hero-dashboard.jpg";
import AutomationFlow from "@/components/AutomationFlow";

const Hero: React.FC = () => {

  return (
    <section id="inicio" className="bg-hero scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 py-20 md:py-32">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <article className="space-y-8">
            <div className="inline-flex items-center rounded-full bg-primary-soft/50 px-4 py-2 text-sm font-medium text-primary border border-primary/20">
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Full Stack Marketer
            </div>
            <h1 className="heading-primary text-5xl md:text-6xl bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Máquina de ventas digital para <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">escalar</span> tu negocio
            </h1>
            <p className="text-xl leading-relaxed text-muted-foreground max-w-lg">
              Estrategia, automatización e IA para atraer clientes cada mes, responder en minutos y convertir más sin depender de la suerte.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <CTAButton className="btn-primary-glow text-lg px-8 py-4 h-auto font-semibold">Evaluar mi negocio ahora</CTAButton>
            </div>
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-success flex items-center justify-center">
                  <svg className="w-3 h-3 text-success-foreground" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                </div>
                <span>30 min. Sin costo ni compromiso</span>
              </div>
            </div>
          </article>

          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-primary-glow/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            <img
              src={heroImg}
              alt="Dashboard con métricas en crecimiento en laptop - RMC Digital"
              className="relative w-full rounded-2xl border border-border/50 card-interactive shadow-2xl"
              loading="eager"
              decoding="async"
            />
            <div className="absolute inset-0 pointer-events-none hidden md:block">
              <AutomationFlow />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

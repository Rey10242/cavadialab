import React from "react";
import CTAButton from "@/components/CTAButton";
import heroImg from "@/assets/hero-dashboard.jpg";
import AutomationFlow from "@/components/AutomationFlow";

const Hero: React.FC = () => {

  return (
    <section id="inicio" className="bg-hero scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <article className="space-y-6">
            <p className="text-sm uppercase tracking-wider text-muted-foreground">Full Stack Marketer</p>
            <h1 className="text-4xl font-extrabold leading-tight md:text-5xl">
              Máquina de ventas digital para escalar tu negocio
            </h1>
            <p className="text-lg text-muted-foreground">
              Estrategia, automatización e IA para atraer clientes cada mes, responder en minutos y convertir más sin depender de la suerte.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <CTAButton className="shadow-lg">Evaluar mi negocio ahora</CTAButton>
            </div>
            <p className="text-xs text-muted-foreground">30 min. Sin costo ni compromiso.</p>
          </article>

          <div className="relative">
            <img
              src={heroImg}
              alt="Dashboard con métricas en crecimiento en laptop - RMC Digital"
              className="w-full rounded-xl border border-border card-elevated"
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

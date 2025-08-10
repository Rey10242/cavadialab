import React from "react";
import CTAButton from "@/components/CTAButton";
import heroImg from "@/assets/hero-dashboard.jpg";

const Hero: React.FC = () => {

  return (
    <section id="inicio" className="bg-hero">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <article className="space-y-6">
            <p className="text-sm uppercase tracking-wider text-muted-foreground">Estrategia • Automatización • Escalamiento</p>
            <h1 className="text-4xl font-extrabold leading-tight md:text-5xl">
              Te construimos una máquina de ventas digital
            </h1>
            <p className="text-lg text-muted-foreground">
              Estrategia, automatización e IA para que vendas más y tu negocio dependa menos de ti.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <CTAButton className="shadow-lg" />
              <a href="#servicios" className="text-sm font-medium text-foreground/80 hover:text-foreground">Ver cómo lo hacemos</a>
            </div>
          </article>

          <div className="relative">
            <img
              src={heroImg}
              alt="Dashboard con métricas en crecimiento en laptop - NEXO"
              className="w-full rounded-xl border border-border card-elevated"
              loading="eager"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

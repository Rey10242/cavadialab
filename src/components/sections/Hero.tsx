import React from "react";
import CTAButton from "@/components/CTAButton";
import heroImg from "@/assets/hero-dashboard.jpg";

const Hero: React.FC = () => {
  const ref = React.useRef<HTMLDivElement>(null);

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    el.style.setProperty("--x", `${x}%`);
    el.style.setProperty("--y", `${y}%`);
  };

  return (
    <section id="inicio" ref={ref} onMouseMove={onMouseMove} className="spotlight bg-hero">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <article className="space-y-6">
            <p className="text-sm uppercase tracking-wider text-muted-foreground">Estrategia • Automatización • Escalamiento</p>
            <h1 className="text-4xl font-extrabold leading-tight md:text-5xl">
              De operativos a escalables: construimos tu máquina de ventas digital
            </h1>
            <p className="text-lg text-muted-foreground">
              Estrategia, automatización e inteligencia artificial para que tu negocio venda más y dependa menos de ti.
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

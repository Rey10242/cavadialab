import React from "react";
import { motion } from "framer-motion";
import perfilReynaldo from "@/assets/perfil-reynaldo.png";
import AnimatedCounter from "@/components/AnimatedCounter";
import { trackHeroCTA, trackWhatsAppClick } from "@/lib/gtag";

const stats = [
  { value: 50, suffix: "+", label: "Proyectos" },
  { value: 8, suffix: "+", label: "Años exp." },
  { value: 3, suffix: "", label: "Canales" },
  { value: 100, suffix: "%", label: "Foco en resultados" },
];

const HeroPersonal: React.FC = () => {
  return (
    <section
      id="inicio"
      className="min-h-screen relative overflow-hidden pt-16 overflow-x-clip"
    >
      {/* Grid background */}
      <div className="absolute inset-0 bg-grid pointer-events-none" />

      <div className="container mx-auto px-5 sm:px-6 md:px-8 py-10 sm:py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left — Text */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            {/* Status line */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 mb-6 sm:mb-8"
            >
              <span className="w-8 h-px bg-primary" />
              <span className="text-[0.62rem] font-bold tracking-[0.15em] uppercase text-primary">
                Disponible para proyectos
              </span>
            </motion.div>

            <h1 className="font-heading text-[clamp(2.2rem,6vw,6.5rem)] leading-[0.9] tracking-tight mb-4 sm:mb-6">
              Quieres más clientes.{" "}
              <span className="text-primary">Yo construyo el camino.</span>
            </h1>

            <p className="font-serif italic text-sm sm:text-base lg:text-lg text-muted-foreground max-w-lg mb-6 sm:mb-8 leading-relaxed mx-auto lg:mx-0">
              Soy <strong className="not-italic font-body font-semibold text-foreground">Reynaldo Montalvo</strong>, consultor de marketing digital en Cartagena. Estrategias de publicidad en Facebook, Instagram y Google — con datos, sin adivinar.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <a
                href="https://wa.me/573246875354"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => { trackHeroCTA(); trackWhatsAppClick('hero_cta'); }}
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 bg-primary text-primary-foreground font-body text-[0.75rem] sm:text-[0.78rem] font-bold tracking-wider hover:brightness-110 hover:-translate-y-0.5 transition-all"
              >
                Agendar conversación
              </a>
              <a
                href="#proceso"
                onClick={(e) => { e.preventDefault(); document.getElementById("proceso")?.scrollIntoView({ behavior: "smooth" }); }}
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 bg-transparent text-foreground font-body text-[0.75rem] sm:text-[0.78rem] font-bold tracking-wider border border-border hover:border-primary hover:text-primary hover:-translate-y-0.5 transition-all"
              >
                Ver cómo lo hago →
              </a>
            </div>
          </motion.div>

          {/* Right — Photo */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative w-[260px] sm:w-[320px] md:w-[400px] max-w-full">
              <div className="w-full aspect-[4/5] relative">
                <img
                  src={perfilReynaldo}
                  alt="Reynaldo Montalvo Cavadia - Consultor de Marketing Digital en Cartagena"
                  className="relative z-10 w-full h-full object-cover object-top"
                  loading="eager"
                  decoding="sync"
                  fetchPriority="high"
                  style={{
                    maskImage: 'linear-gradient(to bottom, black 0%, black 70%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 70%, transparent 100%)'
                  }}
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-10 sm:mt-16 grid-cards grid grid-cols-2 md:grid-cols-4"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="py-4 sm:py-6 px-3 sm:px-4 text-center hover:bg-secondary transition-colors">
              <div className="font-heading text-3xl sm:text-4xl text-primary leading-none mb-1">
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-[0.55rem] sm:text-[0.62rem] font-semibold tracking-[0.08em] uppercase text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroPersonal;

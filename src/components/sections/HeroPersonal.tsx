import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, Target } from "lucide-react";
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
      
      {/* Glow */}
      <div className="absolute -top-24 -right-20 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, hsl(var(--primary) / 0.07) 0%, transparent 65%)' }}
      />

      <div className="container mx-auto px-5 sm:px-6 md:px-8 py-10 sm:py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left — Text */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            {/* Status pill */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 mb-6 sm:mb-8"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse-dot" />
              <span className="text-[0.65rem] font-semibold tracking-[0.1em] uppercase text-primary">
                Disponible para proyectos
              </span>
            </motion.div>

            <h1 className="font-heading text-[clamp(2rem,5.5vw,5.5rem)] leading-[0.95] tracking-tight mb-4 sm:mb-6">
              Quieres más clientes.{" "}
              <span className="text-primary">Yo construyo el camino para conseguirlos.</span>
            </h1>

            <p className="font-serif italic text-sm sm:text-base lg:text-lg text-muted-foreground max-w-lg mb-6 sm:mb-8 leading-relaxed mx-auto lg:mx-0">
              Soy <strong className="not-italic font-body font-semibold text-foreground">Reynaldo Montalvo</strong>, consultor de marketing digital en Cartagena. Diseño estrategias de publicidad en Facebook, Instagram y Google para que tu negocio consiga clientes todos los días — con datos, sin adivinar.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <a
                href="https://wa.me/573246875354"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => { trackHeroCTA(); trackWhatsAppClick('hero_cta'); }}
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 bg-primary text-primary-foreground font-body text-[0.75rem] sm:text-[0.78rem] font-bold tracking-wider rounded-full hover:shadow-[0_8px_28px_hsl(var(--primary)/0.3)] hover:-translate-y-0.5 transition-all"
              >
                Agendar conversación
              </a>
              <a
                href="#proceso"
                onClick={(e) => { e.preventDefault(); document.getElementById("proceso")?.scrollIntoView({ behavior: "smooth" }); }}
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 bg-transparent text-foreground font-body text-[0.75rem] sm:text-[0.78rem] font-bold tracking-wider rounded-full border border-border hover:border-foreground hover:-translate-y-0.5 transition-all"
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
              {/* Photo card */}
              <div className="w-full aspect-[4/5] bg-card rounded-2xl border border-border overflow-hidden relative">
                <div className="absolute inset-0 bg-grid opacity-50" />
                <img
                  src={perfilReynaldo}
                  alt="Reynaldo Montalvo Cavadia - Growth & Paid Media Specialist"
                  className="relative z-10 w-full h-full object-cover object-top"
                  loading="eager"
                  decoding="sync"
                  fetchPriority="high"
                  style={{
                    maskImage: 'linear-gradient(to bottom, black 0%, black 75%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 75%, transparent 100%)'
                  }}
                />
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-6 sm:top-8 -left-2 sm:-left-6 z-20 bg-card border border-border rounded-xl px-2.5 sm:px-3 py-1.5 sm:py-2 shadow-[0_4px_20px_rgba(0,0,0,0.4)] flex items-center gap-1.5 sm:gap-2"
              >
                <TrendingUp className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-primary" />
                <span className="text-[0.6rem] sm:text-[0.7rem] font-semibold text-foreground">+8 años exp.</span>
              </motion.div>

              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                className="absolute bottom-16 sm:bottom-20 -left-2 sm:-left-8 z-20 bg-card border border-border rounded-xl px-2.5 sm:px-3 py-1.5 sm:py-2 shadow-[0_4px_20px_rgba(0,0,0,0.4)] flex items-center gap-1.5 sm:gap-2"
              >
                <span className="text-sm sm:text-base">🚀</span>
                <span className="text-[0.6rem] sm:text-[0.7rem] font-semibold text-foreground">+50 proyectos</span>
              </motion.div>

              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.4 }}
                className="absolute bottom-10 -right-4 z-20 bg-card border border-border rounded-xl px-3 py-2 shadow-[0_4px_20px_rgba(0,0,0,0.4)] flex items-center gap-2"
              >
                <Target className="w-4 h-4 text-primary" />
                <span className="text-[0.7rem] font-semibold text-foreground">Resultados reales</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 grid-cards grid grid-cols-2 md:grid-cols-4"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="py-6 px-4 text-center hover:bg-secondary transition-colors">
              <div className="font-heading text-4xl text-primary leading-none mb-1">
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-[0.62rem] font-semibold tracking-[0.08em] uppercase text-muted-foreground">
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

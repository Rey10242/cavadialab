import React from "react";
import { motion } from "framer-motion";
import AnimatedCounter from "@/components/AnimatedCounter";

const idealClient = [
  "Empresarios que ya están vendiendo",
  "Quieren crecer pero con orden",
  "Están dispuestos a invertir de forma inteligente",
  "Buscan resultados, no experimentos eternos",
];

const stats = [
  { value: 50, suffix: "+", label: "Proyectos" },
  { value: 8, suffix: "+", label: "Años exp." },
  { value: 100, suffix: "%", label: "Resultados" },
];

const AboutMe: React.FC = () => {
  return (
    <section id="sobre-mi" className="section-padding bg-secondary relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="section-label">Sobre mí</div>
          <h2 className="section-title">Por qué puedo<br />ayudarte</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
          {/* Left — Text + Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="space-y-5 mb-10">
              <p className="text-sm leading-relaxed text-muted-foreground">
                Soy <strong className="text-foreground font-semibold">Reynaldo Montalvo Cavadia</strong>,
                consultor de marketing digital con más de 8 años de experiencia.
                He trabajado con más de 50 negocios ayudándolos a vender más con estructura,
                no con improvisación.
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Entiendo la frustración de invertir sin saber si funciona.
                Por eso trabajo solo con empresarios que quieren{" "}
                <strong className="text-foreground font-semibold">claridad y resultados reales</strong>.
              </p>
            </div>

            {/* Stats grid */}
            <div className="grid-cards grid grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label} className="py-5 px-4 text-center">
                  <div className="font-heading text-4xl text-primary leading-none">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-[0.62rem] font-semibold tracking-[0.07em] uppercase text-muted-foreground mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — Con quién trabajo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="font-heading text-3xl tracking-wide text-foreground mb-6">
              Con quién trabajo
            </h3>
            <ul className="flex flex-col gap-3">
              {idealClient.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-muted-foreground leading-relaxed">
                  <span className="w-5 h-5 shrink-0 rounded-md bg-primary/10 border border-primary/30 flex items-center justify-center text-[0.65rem] font-bold text-primary">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

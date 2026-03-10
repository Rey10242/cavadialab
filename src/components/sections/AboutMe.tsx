import React from "react";
import { motion } from "framer-motion";
import AnimatedCounter from "@/components/AnimatedCounter";

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
          className="mb-10"
        >
          <div className="section-label">Sobre mí</div>
          <h2 className="section-title">Tu consultor digital</h2>
        </motion.div>

        {/* Stats prominentes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid-cards grid grid-cols-3 mb-12"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="py-6 sm:py-8 px-4 text-center">
              <div className="font-heading text-4xl sm:text-5xl text-primary leading-none">
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-[0.62rem] font-semibold tracking-[0.07em] uppercase text-muted-foreground mt-2">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 md:gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-sm leading-relaxed text-muted-foreground">
              Más de <strong className="text-foreground font-semibold">8 años</strong> ayudando a negocios a conseguir clientes con publicidad digital.
              He trabajado con más de <strong className="text-foreground font-semibold">50 empresas</strong> — desde emprendedores hasta negocios consolidados que querían crecer con orden.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="font-heading text-2xl sm:text-3xl tracking-wide text-foreground mb-4">
              Pocos clientes,{" "}
              <span className="text-primary">resultados reales</span>
            </h3>
            <blockquote className="border-l-[3px] border-primary pl-5 font-serif italic text-base text-muted-foreground leading-relaxed">
              "No busco tener más clientes. Busco que los que tengo, ganen más."
            </blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

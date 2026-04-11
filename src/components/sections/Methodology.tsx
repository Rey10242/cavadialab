import React from "react";
import { motion } from "framer-motion";

const steps = [
  { number: "01", title: "Diagnóstico", description: "Dónde se te escapan ventas hoy." },
  { number: "02", title: "Estructuración", description: "Estrategia antes de invertir un peso." },
  { number: "03", title: "Optimización", description: "Datos reales, no corazonadas." },
  { number: "04", title: "Escalamiento", description: "Más inversión cuando los números cuadran." },
];

const Methodology: React.FC = () => {
  return (
    <section id="proceso" className="section-padding relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="section-label">Proceso</div>
          <h2 className="section-title">Así trabajo</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid-cards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4"
        >
          {steps.map((step) => (
            <div
              key={step.number}
              className="relative p-5 sm:p-8 flex flex-col gap-3 sm:gap-4 transition-colors hover:bg-[hsl(var(--surface))]"
            >
              <span className="font-heading text-5xl text-primary/20 leading-none">
                {step.number}
              </span>
              <h3 className="font-heading text-xl tracking-wide text-foreground">{step.title}</h3>
              <p className="text-[0.77rem] leading-relaxed text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Methodology;

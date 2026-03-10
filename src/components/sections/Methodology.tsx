import React from "react";
import { motion } from "framer-motion";

const steps = [
  { number: "01", title: "Diagnóstico", description: "Identifico dónde se te escapan ventas hoy." },
  { number: "02", title: "Estructuración", description: "Defino estrategia antes de invertir un peso." },
  { number: "03", title: "Optimización", description: "Mejoro con datos reales, no corazonadas." },
  { number: "04", title: "Escalamiento", description: "Aumento inversión cuando los números cuadran." },
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
          <p className="text-sm text-muted-foreground max-w-md">
            No hay magia. Solo un proceso que funciona.
          </p>
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
              className="relative p-5 sm:p-8 flex flex-col gap-3 sm:gap-4 transition-colors hover:bg-[hsl(var(--card))]"
            >
              <div className="w-8 h-8 bg-primary text-primary-foreground rounded-lg flex items-center justify-center text-[0.68rem] font-bold font-body">
                {step.number}
              </div>
              <h3 className="font-heading text-xl tracking-wide text-foreground">{step.title}</h3>
              <p className="text-[0.77rem] leading-relaxed text-muted-foreground">{step.description}</p>
              <span className="absolute bottom-4 right-6 font-heading text-6xl text-foreground/[0.03] pointer-events-none select-none">
                {step.number}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Methodology;

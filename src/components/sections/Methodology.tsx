import React from "react";
import { motion } from "framer-motion";

const benefits = [
  "Atrae clientes potenciales calificados",
  "Convierte prospectos en clientes",
  "Hace seguimiento automático con IA",
  "Mide ventas reales, no clics vacíos",
  "Permite escalar con control total",
  "Construye estructura, no dependencias",
];

const steps = [
  { number: "01", title: "Diagnóstico", description: "Analizamos cómo estás vendiendo hoy y dónde estás perdiendo oportunidades reales." },
  { number: "02", title: "Estructuración", description: "Ordenamos publicidad, seguimiento y medición. Todo en su lugar antes de invertir un peso." },
  { number: "03", title: "Optimización", description: "Identificamos qué funciona y eliminamos lo que no. Sin adivinar, con datos reales." },
  { number: "04", title: "Escalamiento", description: "Aumentamos inversión solo cuando los números son sanos y el sistema es estable." },
];

const Methodology: React.FC = () => {
  return (
    <section id="proceso" className="section-padding relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        {/* Two-column intro */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start mb-16">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="section-label">Metodología</div>
            <h2 className="section-title">Lo que hago<br />es simple</h2>
            <p className="text-sm leading-relaxed text-muted-foreground max-w-md">
              Organizo tu marketing para que se convierta en un sistema. Un proceso claro. Sin improvisación.
            </p>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <ul className="flex flex-col gap-3 mb-8">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  {b}
                </li>
              ))}
            </ul>
            <blockquote className="border-l-[3px] border-primary pl-5 font-serif italic text-base text-muted-foreground leading-relaxed">
              "Si tu negocio depende solo del voz a voz o de la suerte, podemos cambiar eso."
            </blockquote>
          </motion.div>
        </div>

        {/* Steps grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid-cards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4"
        >
          {steps.map((step) => (
            <div
              key={step.number}
              className="relative p-8 flex flex-col gap-4 transition-colors hover:bg-[#1f1f26]"
            >
              {/* Badge */}
              <div className="w-8 h-8 bg-primary text-primary-foreground rounded-lg flex items-center justify-center text-[0.68rem] font-bold font-body">
                {step.number}
              </div>
              <h3 className="font-heading text-xl tracking-wide text-foreground">{step.title}</h3>
              <p className="text-[0.77rem] leading-relaxed text-muted-foreground flex-1">{step.description}</p>
              {/* Watermark */}
              <span className="absolute bottom-4 right-6 font-heading text-6xl text-foreground/[0.03] pointer-events-none select-none">
                {step.number}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Closing */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12 font-serif italic text-muted-foreground"
        >
          Sin fórmulas mágicas. Solo{" "}
          <strong className="not-italic font-body font-bold text-primary text-xs tracking-wider uppercase">
            decisiones basadas en datos.
          </strong>
        </motion.p>
      </div>
    </section>
  );
};

export default Methodology;

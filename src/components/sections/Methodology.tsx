import React from "react";
import { motion } from "framer-motion";

const benefits = [
  "Le muestra tu negocio a las personas correctas",
  "Convierte interesados en clientes que pagan",
  "Da seguimiento solo, sin que tú tengas que perseguir a nadie",
  "Te dice cuánto te costó cada cliente, no cuántos te vieron",
  "Crece contigo cuando los números están sanos",
  "Funciona aunque tú no estés mirando",
];

const steps = [
  { number: "01", title: "Diagnóstico", description: "Revisamos cómo estás consiguiendo clientes hoy y dónde se te están escapando ventas sin darte cuenta." },
  { number: "02", title: "Estructuración", description: "Definimos qué anunciar, dónde, a quién y cómo medir — antes de invertir un solo peso." },
  { number: "03", title: "Optimización", description: "Vemos qué funciona, quitamos lo que no y mejoramos con datos reales. Sin corazonadas." },
  { number: "04", title: "Escalamiento", description: "Cuando el sistema está sano y los números cuadran, aumentamos la inversión con confianza." },
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
            <div className="section-label">Proceso de trabajo</div>
            <h2 className="section-title">Metodología de publicidad digital</h2>
            <p className="text-sm leading-relaxed text-muted-foreground max-w-md">
              No hay magia. Solo un proceso que funciona.
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
              "La mayoría de negocios no tiene un problema de producto. Tiene un problema de visibilidad. Eso es lo que resuelvo."
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
          Sin promesas vacías. Solo{" "}
          <strong className="not-italic font-body font-bold text-primary text-xs tracking-wider uppercase">
            decisiones basadas en lo que los números dicen.
          </strong>
        </motion.p>
      </div>
    </section>
  );
};

export default Methodology;

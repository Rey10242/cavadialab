import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const benefits = [
  "Atrae clientes potenciales calificados",
  "Convierte prospectos en clientes",
  "Hace seguimiento automático con IA",
  "Mide ventas reales",
  "Permite escalar con control",
];

const SolutionSection: React.FC = () => {
  return (
    <section id="solucion" className="section-padding relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gradient-radial from-primary/8 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Lo que hago es{" "}
              <span className="text-gradient">simple</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Organizo tu marketing para que se convierta en un sistema.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="relative rounded-2xl overflow-hidden mb-10"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5" />
            <div className="relative p-8 md:p-10">
              <p className="text-sm font-semibold text-primary mb-6 uppercase tracking-wide">
                Un sistema que:
              </p>
              <ul className="space-y-4 text-left max-w-md mx-auto">
                {benefits.map((b, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.2 + i * 0.08 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 text-primary" />
                    </div>
                    <span className="text-foreground font-medium">{b}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="text-xl font-bold text-primary"
          >
            Construyo estructura.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;

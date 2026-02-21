import React from "react";
import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";

const problems = [
  "Pagas publicidad pero no sabes si te está dando resultados.",
  "Recibes mensajes, pero no sabes cuántos se convierten en ventas.",
  "No tienes claro cuánto te cuesta conseguir un cliente.",
];

const ProblemSection: React.FC = () => {
  return (
    <section id="el-problema" className="section-padding bg-muted/30 relative overflow-hidden">
      {/* Background red glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-radial from-destructive/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/10 border border-destructive/20 text-destructive text-sm font-medium mb-8">
              <AlertTriangle className="w-4 h-4" />
              El problema real
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-7xl md:text-8xl lg:text-9xl font-black text-destructive/80 leading-none block mb-3">
                72%
              </span>
              de los negocios no sabe si su publicidad funciona.{" "}
              <span className="text-gradient">¿Tú sí?</span>
            </h2>
          </motion.div>

          {/* Manifesto-style problems */}
          <div className="space-y-6 mb-12">
            {problems.map((problem, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.15 }}
                className="text-lg md:text-xl text-muted-foreground leading-relaxed"
              >
                {problem}
              </motion.p>
            ))}
          </div>

          {/* Closing statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="relative rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-destructive/10 via-orange-500/10 to-primary/10" />
              <div className="relative p-8 md:p-10">
                <p className="text-lg md:text-xl text-foreground font-medium leading-relaxed">
                  El problema no es la publicidad.{" "}
                  <span className="text-primary font-bold">Es la falta de estructura.</span>
                </p>
                <p className="text-muted-foreground mt-3">
                  Si no mides, no creces…{" "}
                  <span className="font-semibold text-foreground">estás apostando.</span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;

import React from "react";
import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";

const problems = [
  "Pagas publicidad pero no sabes si te está dando resultados.",
  "Recibes algunos mensajes, pero no sabes cuántos se convierten en ventas.",
  "No tienes claro cuánto te cuesta conseguir un cliente.",
  "Cada mes inviertes sin saber si estás ganando o perdiendo dinero.",
];

const ProblemSection: React.FC = () => {
  return (
    <section id="el-problema" className="section-padding bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/10 border border-destructive/20 text-destructive text-sm font-medium mb-6">
              <AlertTriangle className="w-4 h-4" />
              El problema real
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Muchos negocios invierten en marketing y{" "}
              <span className="text-gradient">no saben qué está funcionando</span>
            </h2>
          </motion.div>

          <div className="space-y-4 mb-10">
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-start gap-3 p-4 bg-card border border-border rounded-xl"
              >
                <span className="text-destructive text-lg mt-0.5">✕</span>
                <p className="text-foreground text-base leading-relaxed">{problem}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center"
          >
            <div className="bg-card border-2 border-primary/20 rounded-xl p-6 md:p-8">
              <p className="text-lg md:text-xl text-foreground font-medium leading-relaxed">
                El problema no es la publicidad.{" "}
                <span className="text-primary font-bold">Es la falta de estructura.</span>
              </p>
              <p className="text-muted-foreground mt-3">
                Si no sabes cuánto te cuesta conseguir un cliente, no estás creciendo…{" "}
                <span className="font-semibold text-foreground">estás apostando y malgastando tu dinero.</span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;

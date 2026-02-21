import React from "react";
import { motion } from "framer-motion";
import { AlertTriangle, XCircle, TrendingDown, HelpCircle, DollarSign } from "lucide-react";

const problems = [
  {
    icon: DollarSign,
    text: "Pagas publicidad pero no sabes si te está dando resultados.",
  },
  {
    icon: HelpCircle,
    text: "Recibes algunos mensajes, pero no sabes cuántos se convierten en ventas.",
  },
  {
    icon: TrendingDown,
    text: "No tienes claro cuánto te cuesta conseguir un cliente.",
  },
  {
    icon: XCircle,
    text: "Cada mes inviertes sin saber si estás ganando o perdiendo dinero.",
  },
];

const ProblemSection: React.FC = () => {
  return (
    <section id="el-problema" className="section-padding bg-muted/30 relative overflow-hidden">
      {/* Background red glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-radial from-destructive/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/10 border border-destructive/20 text-destructive text-sm font-medium mb-6">
              <AlertTriangle className="w-4 h-4" />
              El problema real
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Muchos negocios invierten en marketing y{" "}
              <span className="text-gradient">no saben qué está funcionando</span>
            </h2>
          </motion.div>

          {/* Two-column layout: stat + problem cards */}
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 mb-12">
            {/* Left: Impact stat */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2 flex items-center justify-center"
            >
              <div className="relative text-center p-8">
                <div className="absolute inset-0 bg-gradient-to-br from-destructive/10 to-orange-500/10 rounded-3xl blur-xl" />
                <div className="relative">
                  <span className="text-7xl md:text-8xl font-black text-destructive/80">72%</span>
                  <p className="text-muted-foreground mt-3 text-base leading-relaxed max-w-[220px] mx-auto">
                    de los negocios no sabe si su publicidad realmente funciona
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right: Problem cards */}
            <div className="lg:col-span-3 grid sm:grid-cols-2 gap-4">
              {problems.map((problem, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="group relative p-5 bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl hover:border-destructive/30 hover:shadow-[0_0_30px_-10px_hsl(var(--destructive)/0.3)] transition-all duration-500"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-destructive/10 flex items-center justify-center group-hover:bg-destructive/20 transition-colors">
                      <problem.icon className="w-5 h-5 text-destructive" />
                    </div>
                    <p className="text-foreground text-sm leading-relaxed pt-1.5">{problem.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Closing statement with dramatic gradient */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="relative rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-destructive/10 via-orange-500/10 to-primary/10" />
              <div className="relative p-8 md:p-10 text-center">
                <p className="text-lg md:text-xl text-foreground font-medium leading-relaxed">
                  El problema no es la publicidad.{" "}
                  <span className="text-primary font-bold">Es la falta de estructura.</span>
                </p>
                <p className="text-muted-foreground mt-3">
                  Si no sabes cuánto te cuesta conseguir un cliente, no estás creciendo…{" "}
                  <span className="font-semibold text-foreground">estás apostando y malgastando tu dinero.</span>
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

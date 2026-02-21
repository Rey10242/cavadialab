import React from "react";
import { motion } from "framer-motion";
import { Search, Wrench, FlaskConical, TrendingUp, ArrowDown } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Revisamos tu situación actual",
    description: "Analizamos cómo estás vendiendo hoy y dónde estás perdiendo oportunidades.",
    number: "01",
  },
  {
    icon: Wrench,
    title: "Organizamos tu sistema de ventas",
    description: "Ordenamos publicidad, seguimiento y medición para que todo tenga sentido.",
    number: "02",
  },
  {
    icon: FlaskConical,
    title: "Probamos y mejoramos",
    description: "Identificamos qué funciona y eliminamos lo que no. Sin adivinar.",
    number: "03",
  },
  {
    icon: TrendingUp,
    title: "Escalamos con control",
    description: "Aumentamos inversión solo cuando los números son saludables.",
    number: "04",
  },
];

const Methodology: React.FC = () => {
  return (
    <section id="proceso" className="section-padding">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Cómo <span className="text-gradient">Trabajamos</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Un proceso simple y claro para que tu negocio crezca con orden.
          </p>
        </motion.div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block relative">
          {/* Connection Line */}
          <div className="absolute top-16 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20" />
          
          <div className="grid grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="relative flex flex-col items-center text-center group"
              >
                {/* Icon Circle */}
                <div className="relative z-10 w-16 h-16 rounded-full bg-card border-2 border-primary flex items-center justify-center mb-4 shadow-lg shadow-primary/20 group-hover:scale-110 group-hover:shadow-primary/40 transition-all duration-300">
                  <step.icon className="w-7 h-7 text-primary" />
                </div>

                {/* Step Number */}
                <span className="text-xs font-bold text-primary mb-2">{step.number}</span>
                
                {/* Title */}
                <h3 className="text-base font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">{step.title}</h3>
                
                {/* Description */}
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile/Tablet List */}
        <div className="lg:hidden space-y-3">
          {steps.map((step, index) => (
            <React.Fragment key={step.title}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ x: 4 }}
                className="flex items-start gap-4 p-4 bg-card border border-border rounded-xl hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 flex items-center justify-center">
                  <step.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-bold text-primary">{step.number}</span>
                    <h3 className="text-base font-semibold text-foreground">{step.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              </motion.div>
              
              {/* Arrow between steps */}
              {index < steps.length - 1 && (
                <motion.div
                  initial={{ opacity: 0, y: -5 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
                  className="flex justify-center py-1"
                >
                  <motion.div
                    animate={{ y: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <ArrowDown className="w-5 h-5 text-primary/50" />
                  </motion.div>
                </motion.div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Closing statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Sin fórmulas mágicas. Sin promesas irreales.{" "}
            <span className="text-foreground font-semibold">Solo decisiones basadas en resultados.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Methodology;

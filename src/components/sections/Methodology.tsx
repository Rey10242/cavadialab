import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Search, Wrench, FlaskConical, TrendingUp, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    icon: Search,
    title: "Diagnóstico",
    description: "Analizamos cómo estás vendiendo hoy y dónde estás perdiendo oportunidades.",
    number: "01",
  },
  {
    icon: Wrench,
    title: "Organizo y estructuro tu sistema de ventas",
    description: "Ordenamos publicidad, seguimiento y medición para que todo tenga sentido.",
    number: "02",
  },
  {
    icon: FlaskConical,
    title: "Optimización",
    description: "Identificamos qué funciona y eliminamos lo que no. Sin adivinar.",
    number: "03",
  },
  {
    icon: TrendingUp,
    title: "Escalamiento",
    description: "Aumentamos inversión solo cuando los números son sanos.",
    number: "04",
  },
];

const Methodology: React.FC = () => {
  const ref = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const lineHeight = useTransform(scrollYProgress, [0.1, 0.8], ["0%", "100%"]);

  return (
    <section id="proceso" className="section-padding bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Un proceso claro.{" "}
            <span className="text-gradient">Sin improvisación.</span>
          </h2>
        </motion.div>

        {/* Vertical Timeline */}
        <div ref={ref} className="relative max-w-3xl mx-auto">
          {/* Background line */}
          <div className="absolute left-6 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-border/50" />
          {/* Animated progress line */}
          <motion.div
            className="absolute left-6 md:left-1/2 md:-translate-x-px top-0 w-0.5 bg-gradient-to-b from-primary via-primary to-primary/50 origin-top"
            style={{ height: lineHeight }}
          />

          <div className="space-y-12 md:space-y-16">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex items-start gap-6 md:gap-0 ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-10">
                    <motion.div
                      whileInView={{ scale: [0.5, 1.2, 1] }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.15 }}
                      className="w-12 h-12 rounded-full bg-card border-2 border-primary flex items-center justify-center shadow-lg shadow-primary/20"
                    >
                      <step.icon className="w-5 h-5 text-primary" />
                    </motion.div>
                  </div>

                  {/* Content card */}
                  <div className={`ml-16 md:ml-0 md:w-[calc(50%-3rem)] ${isEven ? "md:pr-0" : "md:pl-0"}`}>
                    <motion.div
                      whileHover={{ y: -4 }}
                      className="group relative p-6 bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-500 overflow-hidden"
                    >
                      {/* Watermark number */}
                      <span className="absolute -top-2 -right-2 text-7xl font-black text-primary/[0.04] select-none pointer-events-none">
                        {step.number}
                      </span>
                      
                      <div className="relative">
                        <span className="text-xs font-bold text-primary mb-2 block">{step.number}</span>
                        <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                          {step.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Closing statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-16 space-y-6"
        >
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Sin fórmulas mágicas.{" "}
            <span className="text-foreground font-semibold">Solo decisiones basadas en datos.</span>
          </p>
          <Button
            variant="outline"
            className="gap-2"
            onClick={() => document.getElementById("servicios")?.scrollIntoView({ behavior: "smooth" })}
          >
            Ver servicios
            <ArrowRight className="w-4 h-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Methodology;

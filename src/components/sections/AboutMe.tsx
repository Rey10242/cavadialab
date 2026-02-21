import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import AnimatedCounter from "@/components/AnimatedCounter";

const idealClient = [
  "Empresarios que ya están vendiendo",
  "Quieren crecer pero con orden",
  "Están dispuestos a invertir de forma inteligente",
  "Buscan resultados, no experimentos eternos",
];

const stats = [
  { value: 50, suffix: "+", label: "Proyectos", gradient: "from-primary/20 to-primary/5" },
  { value: 8, suffix: "+", label: "Años Exp.", gradient: "from-violet-500/20 to-violet-500/5" },
  { value: 100, suffix: "%", label: "Foco en resultados", gradient: "from-emerald-500/20 to-emerald-500/5" },
];

const AboutMe: React.FC = () => {
  return (
    <section id="sobre-mi" className="section-padding relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-radial from-primary/5 to-transparent rounded-full blur-3xl pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Por qué{" "}
            <span className="text-gradient">puedo ayudarte</span>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {/* Personal intro - 2 paragraphs max */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="prose prose-lg dark:prose-invert mb-10"
          >
            <p className="text-muted-foreground leading-relaxed">
              Soy <strong className="text-foreground">Reynaldo Montalvo Cavadia</strong>, 
              consultor de marketing digital con más de 8 años de experiencia. 
              He trabajado con más de 50 negocios ayudándolos a vender más con estructura, 
              no con improvisación.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Entiendo la frustración de invertir sin saber si funciona. 
              Por eso trabajo solo con empresarios que quieren claridad y resultados reales.
            </p>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3 mb-12">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                whileHover={{ y: -4, scale: 1.03 }}
                className="text-center p-4 rounded-2xl bg-card/80 backdrop-blur-sm border border-border/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 relative overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-50`} />
                <div className="relative">
                  <div className="text-2xl md:text-3xl font-bold text-primary">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Con quién trabajo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-10"
          >
            <h3 className="text-xl font-semibold text-foreground mb-6 text-center">
              Con quién <span className="text-gradient">trabajo</span>
            </h3>
            <div className="space-y-3">
              {idealClient.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-3 group"
                >
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <CheckCircle className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground font-medium group-hover:text-primary transition-colors">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Closing line */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-center"
          >
            <p className="text-lg text-primary font-semibold">
              Si tu negocio depende solo del voz a voz o de la suerte, podemos cambiar eso.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

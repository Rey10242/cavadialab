import React from "react";
import { motion } from "framer-motion";
import { 
  Users,
  TrendingUp,
  DollarSign,
  BarChart3,
  Zap,
  CheckCircle
} from "lucide-react";
import AnimatedCounter from "@/components/AnimatedCounter";

const whatIDo = [
  "Atraer personas interesadas",
  "Convertirlas en clientes",
  "Hacer seguimiento",
  "Medir resultados reales",
  "Escalar sin perder dinero",
];

const results = [
  {
    icon: Users,
    title: "Más clientes reales",
    description: "Estrategias enfocadas en atraer personas que realmente quieren comprar.",
  },
  {
    icon: TrendingUp,
    title: "Ventas constantes",
    description: "Sistemas que generan ventas de forma predecible, no por suerte.",
  },
  {
    icon: DollarSign,
    title: "Mejor uso del presupuesto",
    description: "Cada peso invertido tiene un propósito claro y medible.",
  },
  {
    icon: BarChart3,
    title: "Claridad en los números",
    description: "Sabrás exactamente qué está funcionando y qué no.",
  },
  {
    icon: Zap,
    title: "Crecimiento sin caos",
    description: "Escalar con orden, estructura y control total.",
  },
];

const stats = [
  { value: 50, suffix: "+", label: "Proyectos" },
  { value: 8, suffix: "+", label: "Años Exp." },
  { value: 100, suffix: "%", label: "Foco en resultados" },
];

const AboutMe: React.FC = () => {
  return (
    <section id="sobre-mi" className="section-padding bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Quién soy y cómo{" "}
            <span className="text-gradient">te ayudo</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Story Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-6"
          >
            <div className="prose prose-lg dark:prose-invert">
              <p className="text-muted-foreground leading-relaxed">
                Soy <strong className="text-foreground">Reynaldo Montalvo Cavadia</strong>, 
                un apasionado del marketing digital y la tecnología con más de 8 años de 
                experiencia transformando negocios a través de estrategias innovadoras.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                Trabajo con empresarios que quieren dejar de improvisar y empezar a 
                crecer con claridad.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                No me enfoco solo en hacer anuncios. Me enfoco en que tu negocio 
                tenga un <strong className="text-foreground">sistema claro</strong> para:
              </p>
            </div>

            {/* What I do list */}
            <div className="space-y-3">
              {whatIDo.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.2 + index * 0.08 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium">{item}</span>
                </motion.div>
              ))}
            </div>

            <div className="pt-2">
              <p className="text-lg text-primary font-semibold">
                Mi trabajo es que sepas exactamente qué está pasando con tu inversión.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="text-center p-4 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
                >
                  <div className="text-2xl md:text-3xl font-bold text-primary">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Results Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-semibold text-foreground mb-6">
              Qué <span className="text-gradient">Resultados</span> Buscamos
            </h3>
            
            {results.map((result, index) => (
              <motion.div
                key={result.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
                whileHover={{ x: 4 }}
                className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  <result.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">{result.title}</h4>
                  <p className="text-sm text-muted-foreground">{result.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

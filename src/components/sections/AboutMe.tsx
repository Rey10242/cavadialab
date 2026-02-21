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
    accent: "from-blue-500 to-cyan-500",
  },
  {
    icon: TrendingUp,
    title: "Ventas constantes",
    description: "Sistemas que generan ventas de forma predecible, no por suerte.",
    accent: "from-primary to-violet-500",
  },
  {
    icon: DollarSign,
    title: "Mejor uso del presupuesto",
    description: "Cada peso invertido tiene un propósito claro y medible.",
    accent: "from-emerald-500 to-teal-500",
  },
  {
    icon: BarChart3,
    title: "Claridad en los números",
    description: "Sabrás exactamente qué está funcionando y qué no.",
    accent: "from-orange-500 to-amber-500",
  },
  {
    icon: Zap,
    title: "Crecimiento sin caos",
    description: "Escalar con orden, estructura y control total.",
    accent: "from-violet-500 to-pink-500",
  },
];

const stats = [
  { value: 50, suffix: "+", label: "Proyectos", gradient: "from-primary/20 to-primary/5" },
  { value: 8, suffix: "+", label: "Años Exp.", gradient: "from-violet-500/20 to-violet-500/5" },
  { value: 100, suffix: "%", label: "Foco en resultados", gradient: "from-emerald-500/20 to-emerald-500/5" },
];

const AboutMe: React.FC = () => {
  return (
    <section id="sobre-mi" className="section-padding relative overflow-hidden">
      {/* Subtle bg decoration */}
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
            Quién soy y cómo{" "}
            <span className="text-gradient">te ayudo</span>
          </h2>
        </motion.div>

        {/* Asymmetric layout: 5/7 split */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: Story (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 space-y-6"
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

            {/* What I do list - stagger effect */}
            <div className="space-y-3">
              {whatIDo.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-3 group"
                >
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <CheckCircle className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground font-medium group-hover:text-primary transition-colors">{item}</span>
                </motion.div>
              ))}
            </div>

            <div className="pt-2">
              <p className="text-lg text-primary font-semibold">
                Mi trabajo es que sepas exactamente qué está pasando con tu inversión.
              </p>
            </div>

            {/* Stats with individual gradients */}
            <div className="grid grid-cols-3 gap-3 pt-4">
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
          </motion.div>

          {/* Right: Results (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-7 space-y-4"
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
                whileHover={{ x: 6 }}
                className="group flex items-start gap-4 p-5 rounded-2xl bg-card/60 backdrop-blur-sm border border-border/50 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-500 relative overflow-hidden"
              >
                {/* Left accent bar */}
                <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${result.accent} opacity-40 group-hover:opacity-100 transition-opacity duration-300`} />
                
                <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${result.accent} bg-opacity-20 flex items-center justify-center`} style={{ background: `linear-gradient(135deg, hsl(var(--primary) / 0.15), hsl(var(--primary) / 0.05))` }}>
                  <result.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="pl-1">
                  <h4 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">{result.title}</h4>
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

import React, { useEffect, useState, useRef } from "react";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { 
  Target, 
  Lightbulb, 
  Rocket, 
  Award,
  TrendingUp,
  BarChart3,
  Brain,
  Layers,
  Scale,
  Zap,
  ArrowUpRight
} from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Enfoque en Resultados",
    description: "Cada estrategia está diseñada para generar impacto medible.",
  },
  {
    icon: Lightbulb,
    title: "Innovación Constante",
    description: "Siempre explorando nuevas tecnologías y metodologías.",
  },
  {
    icon: Rocket,
    title: "Crecimiento Exponencial",
    description: "Sistemas que escalan contigo sin perder calidad.",
  },
  {
    icon: Award,
    title: "Compromiso Total",
    description: "Tu éxito es mi prioridad en cada proyecto.",
  },
];

const valuePropositions = [
  {
    icon: TrendingUp,
    title: "Inversión en ventas reales",
    description: "Convierto inversión en marketing en ventas, no solo en tráfico o métricas vacías.",
    metric: "3.5x",
    metricLabel: "ROAS Promedio"
  },
  {
    icon: BarChart3,
    title: "Demanda calificada constante",
    description: "Genero leads alineados con la capacidad comercial del negocio.",
    metric: "-40%",
    metricLabel: "Reducción CAC"
  },
  {
    icon: Brain,
    title: "Decisiones basadas en datos",
    description: "Reduzco la dependencia de la intuición con análisis de rentabilidad.",
    metric: "100%",
    metricLabel: "Data-Driven"
  },
  {
    icon: Layers,
    title: "Adquisición estructurada",
    description: "Ordeno la captación de clientes para que el crecimiento no dependa de esfuerzos aislados.",
    metric: "+50",
    metricLabel: "Proyectos"
  },
  {
    icon: Scale,
    title: "Escalamiento controlado",
    description: "Cuido márgenes, flujo de caja y sostenibilidad del negocio.",
    metric: "8+",
    metricLabel: "Años Exp."
  },
];

// Animated counter component
const AnimatedCounter = ({ value, suffix = "", prefix = "" }: { value: string; suffix?: string; prefix?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [displayValue, setDisplayValue] = useState("0");
  
  useEffect(() => {
    if (isInView) {
      const numericValue = parseFloat(value.replace(/[^0-9.-]/g, ''));
      const hasDecimal = value.includes('.');
      
      if (!isNaN(numericValue)) {
        const controls = animate(0, numericValue, {
          duration: 2,
          ease: [0.25, 0.46, 0.45, 0.94],
          onUpdate: (latest) => {
            if (hasDecimal) {
              setDisplayValue(latest.toFixed(1));
            } else {
              setDisplayValue(Math.floor(latest).toString());
            }
          }
        });
        return () => controls.stop();
      } else {
        setDisplayValue(value);
      }
    }
  }, [isInView, value]);
  
  return <span ref={ref}>{prefix}{displayValue}{suffix}</span>;
};

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
            Sobre <span className="text-gradient">Mí</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Conoce mi historia y lo que me impulsa a crear soluciones digitales excepcionales.
          </p>
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
              <h3 className="text-2xl font-semibold text-foreground mb-4">Mi Historia</h3>
              
              <p className="text-muted-foreground leading-relaxed">
                Soy <strong className="text-foreground">Reynaldo Montalvo Cavadia</strong>, 
                un apasionado del marketing digital y la tecnología con más de 8 años de 
                experiencia transformando negocios a través de estrategias innovadoras.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                Mi viaje comenzó cuando descubrí el poder de la automatización y la 
                inteligencia artificial para escalar negocios. Desde entonces, he ayudado 
                a empresas de diversos sectores a construir sus máquinas de crecimiento digital.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                Hoy, combino <strong className="text-foreground">estrategia de marketing</strong>, 
                <strong className="text-foreground"> automatización</strong> e 
                <strong className="text-foreground"> inteligencia artificial</strong> para 
                crear sistemas que generan resultados sostenibles.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="text-center p-4 rounded-lg bg-card border border-border">
                <div className="text-2xl md:text-3xl font-bold text-primary">+50</div>
                <div className="text-sm text-muted-foreground">Proyectos</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-card border border-border">
                <div className="text-2xl md:text-3xl font-bold text-primary">+8</div>
                <div className="text-sm text-muted-foreground">Años Exp.</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-card border border-border">
                <div className="text-2xl md:text-3xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Dedicación</div>
              </div>
            </div>
          </motion.div>

          {/* Values Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-semibold text-foreground mb-6">Mis Valores</h3>
            
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
                className="flex items-start gap-4 p-4 rounded-lg bg-card border border-border hover:border-primary/30 transition-colors"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">{value.title}</h4>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Value Proposition Section - ULTRA PREMIUM REDESIGN */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-24 relative"
        >
          {/* Background Effects */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-to-r from-primary/20 via-violet-500/10 to-pink-500/20 rounded-full blur-3xl opacity-50" />
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-full blur-2xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-orange-500/10 to-transparent rounded-full blur-2xl" />
          </div>

          {/* Header with animated badge */}
          <div className="text-center mb-16 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
            >
              <Zap className="w-4 h-4 text-primary animate-pulse" />
              <span className="text-sm font-medium text-primary">Resultados Comprobados</span>
            </motion.div>
            
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tight"
            >
              Qué{" "}
              <span className="relative inline-block">
                <span className="text-gradient">Resultados</span>
                <motion.span
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-violet-500 to-pink-500 rounded-full"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                />
              </span>
              {" "}Genero
            </motion.h3>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-light"
            >
              Ayudo a negocios a crecer de forma{" "}
              <span className="text-foreground font-medium">estructurada</span>,{" "}
              <span className="text-foreground font-medium">rentable</span> y{" "}
              <span className="text-foreground font-medium">sostenible</span>.
            </motion.p>
          </div>

          {/* Premium Cards Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {valuePropositions.map((prop, index) => (
              <motion.div
                key={prop.title}
                initial={{ opacity: 0, y: 40, rotateX: -10 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.1 * index,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  y: -12, 
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                className="group relative"
              >
                {/* Card Glow Effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-violet-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-75 blur-lg transition-all duration-500" />
                
                {/* Main Card */}
                <div className="relative h-full p-6 md:p-8 rounded-2xl bg-card/80 backdrop-blur-xl border border-border/50 group-hover:border-primary/30 transition-all duration-500 overflow-hidden">
                  {/* Animated Background Pattern */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-2xl" />
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-violet-500/10 to-transparent rounded-full blur-xl" />
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Metric Badge */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 via-primary/10 to-violet-500/20 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 ring-1 ring-primary/10">
                        <prop.icon className="w-7 h-7 text-primary" />
                      </div>
                      
                      <div className="text-right">
                        <div className="text-2xl md:text-3xl font-black text-gradient">
                          <AnimatedCounter value={prop.metric} />
                        </div>
                        <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium">
                          {prop.metricLabel}
                        </div>
                      </div>
                    </div>
                    
                    {/* Title & Description */}
                    <h4 className="text-lg md:text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                      {prop.title}
                    </h4>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      {prop.description}
                    </p>
                    
                    {/* Hover Arrow */}
                    <div className="mt-6 flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300">
                      <span className="text-sm font-medium">Saber más</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                  
                  {/* Bottom Gradient Line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16 p-6 md:p-8 rounded-2xl bg-gradient-to-r from-primary/5 via-violet-500/5 to-pink-500/5 border border-primary/10 backdrop-blur-sm"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { value: "50+", label: "Clientes Satisfechos" },
                { value: "$2M+", label: "Revenue Generado" },
                { value: "3.5x", label: "ROAS Promedio" },
                { value: "40%", label: "Reducción CAC" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                  className="relative"
                >
                  <div className="text-3xl md:text-4xl font-black text-gradient mb-1">
                    <AnimatedCounter value={stat.value} />
                  </div>
                  <div className="text-xs md:text-sm text-muted-foreground font-medium uppercase tracking-wider">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;

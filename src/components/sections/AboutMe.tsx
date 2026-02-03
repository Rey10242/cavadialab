import React from "react";
import { motion } from "framer-motion";
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
  Users
} from "lucide-react";
import AnimatedCounter from "@/components/AnimatedCounter";

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
    title: "Ventas reales",
    description: "Marketing que genera ventas, no solo métricas.",
  },
  {
    icon: Users,
    title: "Demanda calificada",
    description: "Leads alineados con tu capacidad comercial.",
  },
  {
    icon: Brain,
    title: "Decisiones con datos",
    description: "Menos intuición, más análisis y rentabilidad.",
  },
  {
    icon: Layers,
    title: "Estructura clara",
    description: "Captación ordenada para crecimiento sostenido.",
  },
  {
    icon: Scale,
    title: "Escalamiento controlado",
    description: "Cuido márgenes y flujo de caja del negocio.",
  },
  {
    icon: BarChart3,
    title: "Resultados medibles",
    description: "Reportes claros con foco en lo que importa.",
  },
];

const stats = [
  { value: 50, suffix: "+", label: "Proyectos" },
  { value: 8, suffix: "+", label: "Años Exp." },
  { value: 100, suffix: "%", label: "Dedicación" },
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
              <h3 className="text-xl font-semibold text-foreground mb-4">Mi Historia</h3>
              
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

            {/* Quick Stats con contador animado */}
            <div className="grid grid-cols-3 gap-4 pt-6">
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

          {/* Values Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-semibold text-foreground mb-6">Mis Valores</h3>
            
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
                whileHover={{ x: 4 }}
                className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
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

        {/* Value Proposition Section - Clean Grid 3x2 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-xl md:text-2xl font-bold mb-3">
              Qué <span className="text-gradient">Resultados</span> Genero
            </h3>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Ayudo a negocios a crecer de forma estructurada y rentable.
            </p>
          </div>

          {/* 6 Cards in 3x2 Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {valuePropositions.map((prop, index) => (
              <motion.div
                key={prop.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="group p-6 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <prop.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {prop.title}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {prop.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;

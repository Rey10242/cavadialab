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
  Scale
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
  },
  {
    icon: BarChart3,
    title: "Demanda calificada constante",
    description: "Genero leads alineados con la capacidad comercial del negocio.",
  },
  {
    icon: Brain,
    title: "Decisiones basadas en datos",
    description: "Reduzco la dependencia de la intuición con análisis de rentabilidad.",
  },
  {
    icon: Layers,
    title: "Adquisición estructurada",
    description: "Ordeno la captación de clientes para que el crecimiento no dependa de esfuerzos aislados.",
  },
  {
    icon: Scale,
    title: "Escalamiento controlado",
    description: "Cuido márgenes, flujo de caja y sostenibilidad del negocio.",
  },
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

        {/* Value Proposition Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16"
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-3">
              Qué <span className="text-gradient">Resultados</span> Genero
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Ayudo a negocios a crecer de forma estructurada y rentable.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {valuePropositions.map((prop, index) => (
              <motion.div
                key={prop.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                className="p-5 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all group"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <prop.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">{prop.title}</h4>
                <p className="text-sm text-muted-foreground">{prop.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;

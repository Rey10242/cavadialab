import React from "react";
import { motion } from "framer-motion";
import { 
  Settings, 
  RefreshCw, 
  TrendingUp, 
  ClipboardCheck, 
  Lightbulb,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Settings,
    title: "Set Up de Cuentas y Tracking",
    description: "Configuración profesional de cuentas publicitarias, píxeles, eventos de conversión y Google Tag Manager para medir cada acción relevante.",
    number: "01",
  },
  {
    icon: RefreshCw,
    title: "Optimización y Reestructuración",
    description: "Auditoría y mejora de campañas existentes para maximizar ROAS, reducir CPA y mejorar la calidad del tráfico.",
    number: "02",
  },
  {
    icon: TrendingUp,
    title: "Escalamiento de Campañas",
    description: "Estrategias para aumentar presupuesto de forma controlada sin perder rentabilidad, identificando winners y automatizando procesos.",
    number: "03",
  },
  {
    icon: ClipboardCheck,
    title: "Auditoría Técnica y Estratégica",
    description: "Análisis profundo de tu ecosistema digital: tracking, atribución, estructura de campañas, creativos y funnel de conversión.",
    number: "04",
  },
  {
    icon: Lightbulb,
    title: "Consultoría en Growth y Performance",
    description: "Asesoría estratégica para equipos de marketing, definición de KPIs, dashboards ejecutivos y roadmap de crecimiento.",
    number: "05",
  },
];

const Services: React.FC = () => {
  return (
    <section id="servicios" className="section-padding">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Cómo Puedo <span className="text-gradient">Ayudarte</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Servicios especializados en paid media, automatización y growth marketing para escalar tu negocio.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative bg-card border border-border rounded-xl p-6 hover:border-primary/30 hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Background glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                {/* Number badge */}
                <div className="absolute top-0 right-0 text-5xl font-black text-primary/10 group-hover:text-primary/20 transition-colors">
                  {service.number}
                </div>

                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>

                <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>

                {/* Hover CTA */}
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-sm font-medium text-primary flex items-center gap-1">
                    Consultar <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-2xl">
            <p className="text-foreground font-medium">
              ¿Necesitas un servicio personalizado?
            </p>
            <Button
              className="btn-primary-glow group"
              onClick={() => document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" })}
            >
              Hablemos
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;

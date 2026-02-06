import React from "react";
import { motion } from "framer-motion";
import { 
  Settings, 
  RefreshCw, 
  TrendingUp, 
  ClipboardCheck, 
  Lightbulb,
  ArrowRight,
  Sparkles,
  Search,
  LucideIcon
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { serviceSelection, serviceToProjectType } from "@/hooks/useServiceSelection";

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
  iconColor: string;
  hoverTextColor: string;
  accentColor: string;
}

const services: Service[] = [
  {
    icon: Settings,
    title: "Set Up de Cuentas y Tracking",
    description: "Configuración profesional de cuentas publicitarias, píxeles, eventos de conversión y Google Tag Manager para medir cada acción relevante.",
    color: "from-blue-500/20 to-cyan-500/20",
    iconColor: "text-blue-500",
    hoverTextColor: "group-hover:text-blue-500",
    accentColor: "blue-500",
  },
  {
    icon: TrendingUp,
    title: "Escalamiento de Campañas",
    description: "Estrategias para aumentar presupuesto de forma controlada sin perder rentabilidad, identificando winners y automatizando procesos.",
    color: "from-primary/20 to-violet-500/20",
    iconColor: "text-primary",
    hoverTextColor: "group-hover:text-primary",
    accentColor: "primary",
  },
  {
    icon: RefreshCw,
    title: "Optimización y Reestructuración",
    description: "Auditoría y mejora de campañas existentes para maximizar ROAS, reducir CPA y mejorar la calidad del tráfico.",
    color: "from-emerald-500/20 to-teal-500/20",
    iconColor: "text-emerald-500",
    hoverTextColor: "group-hover:text-emerald-500",
    accentColor: "emerald-500",
  },
  {
    icon: ClipboardCheck,
    title: "Auditoría Técnica y Estratégica",
    description: "Análisis profundo de tu ecosistema digital: tracking, atribución, estructura de campañas, creativos y funnel de conversión.",
    color: "from-orange-500/20 to-amber-500/20",
    iconColor: "text-orange-500",
    hoverTextColor: "group-hover:text-orange-500",
    accentColor: "orange-500",
  },
  {
    icon: Search,
    title: "SEO y Posicionamiento Orgánico",
    description: "Estrategias de optimización para motores de búsqueda, análisis de keywords, SEO técnico y contenido optimizado para aumentar tráfico orgánico.",
    color: "from-cyan-500/20 to-sky-500/20",
    iconColor: "text-cyan-500",
    hoverTextColor: "group-hover:text-cyan-500",
    accentColor: "cyan-500",
  },
  {
    icon: Lightbulb,
    title: "Consultoría Growth & Performance",
    description: "Asesoría estratégica para equipos de marketing, definición de KPIs, dashboards ejecutivos y roadmap de crecimiento.",
    color: "from-purple-500/20 to-pink-500/20",
    iconColor: "text-purple-500",
    hoverTextColor: "group-hover:text-purple-500",
    accentColor: "purple-500",
  },
];

const ServiceCard: React.FC<{ service: Service; index: number }> = ({ service, index }) => {
  const Icon = service.icon;
  
  const handleServiceClick = () => {
    // Set the selected service
    serviceSelection.set(service.title);
    
    // Scroll to contact section
    const contactSection = document.getElementById("contacto");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group h-full cursor-pointer"
      onClick={handleServiceClick}
    >
      <div className={`relative h-full bg-card/60 backdrop-blur-sm border border-border/50 rounded-2xl p-6 lg:p-8 hover:border-${service.accentColor}/40 hover:shadow-2xl transition-all duration-500 overflow-hidden`}>
        {/* Gradient background on hover */}
        <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
        
        {/* Decorative corner accent */}
        <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${service.color} rounded-full blur-3xl opacity-0 group-hover:opacity-60 transition-opacity duration-500`} />

        <div className="relative z-10 h-full flex flex-col">
          {/* Icon with number */}
          <div className="flex items-start justify-between mb-6">
            <motion.div 
              className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}
              whileHover={{ rotate: 6, scale: 1.1 }}
            >
              <Icon className={`w-7 h-7 ${service.iconColor}`} />
            </motion.div>
            <span className={`text-4xl font-black ${service.iconColor} opacity-20 group-hover:opacity-40 transition-opacity`}>
              0{index + 1}
            </span>
          </div>

          {/* Title */}
          <h3 className={`text-xl font-bold text-foreground mb-3 ${service.hoverTextColor} transition-colors duration-300`}>
            {service.title}
          </h3>

          {/* Description */}
          <p className="text-muted-foreground text-sm leading-relaxed flex-grow">
            {service.description}
          </p>

          {/* CTA on hover */}
          <motion.div 
            className={`mt-5 pt-4 border-t border-border/30 flex items-center gap-2 ${service.iconColor} font-medium opacity-60 group-hover:opacity-100 transition-all duration-300`}
          >
            <span className="text-sm">Consultar servicio</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

const Services: React.FC = () => {
  return (
    <section id="servicios" className="section-padding relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-primary/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, type: "spring" }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6"
          >
            <Sparkles className="w-4 h-4" />
            Servicios Especializados
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Cómo Puedo <span className="text-gradient">Ayudarte</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Soluciones integrales en paid media, automatización y growth marketing para impulsar tu negocio al siguiente nivel.
          </p>
        </motion.div>

        {/* Services Grid - Clean 3x2 layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="relative inline-flex flex-col sm:flex-row items-center gap-6 p-8 bg-gradient-to-r from-primary/5 via-card to-violet-500/5 border border-border/50 rounded-2xl overflow-hidden backdrop-blur-sm">
            {/* Decorative elements */}
            <div className="absolute -top-12 -right-12 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-12 -left-12 w-24 h-24 bg-violet-500/10 rounded-full blur-2xl" />
            
            <div className="relative z-10 text-left">
              <p className="text-foreground font-semibold text-lg mb-1">
                ¿Necesitas un servicio personalizado?
              </p>
              <p className="text-muted-foreground text-sm">
                Cuéntame tu proyecto y diseñamos una estrategia a medida
              </p>
            </div>
            <Button
              className="relative z-10 btn-primary-glow group px-8 py-6 text-base"
              onClick={() => document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" })}
            >
              Hablemos
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;

import React from "react";
import { motion } from "framer-motion";
import { 
  Megaphone, 
  UserCheck, 
  RefreshCw, 
  BarChart3, 
  PieChart,
  ArrowRight,
  LucideIcon
} from "lucide-react";
import { serviceSelection } from "@/hooks/useServiceSelection";

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
    icon: Megaphone,
    title: "Organizar tu publicidad",
    description: "Estructuramos campañas, presupuestos y canales para que nada se desperdicie.",
    color: "from-blue-500/20 to-cyan-500/20",
    iconColor: "text-blue-500",
    hoverTextColor: "group-hover:text-blue-500",
    accentColor: "blue-500",
  },
  {
    icon: UserCheck,
    title: "Atraer mejores clientes",
    description: "Segmentación precisa para llegar a quien realmente puede comprarte.",
    color: "from-primary/20 to-violet-500/20",
    iconColor: "text-primary",
    hoverTextColor: "group-hover:text-primary",
    accentColor: "primary",
  },
  {
    icon: RefreshCw,
    title: "Mejorar tus resultados actuales",
    description: "Analizamos lo que ya tienes y optimizamos sin gastar más.",
    color: "from-emerald-500/20 to-teal-500/20",
    iconColor: "text-emerald-500",
    hoverTextColor: "group-hover:text-emerald-500",
    accentColor: "emerald-500",
  },
  {
    icon: BarChart3,
    title: "Saber si tu inversión funciona",
    description: "Dashboards y reportes claros con los números que importan.",
    color: "from-orange-500/20 to-amber-500/20",
    iconColor: "text-orange-500",
    hoverTextColor: "group-hover:text-orange-500",
    accentColor: "orange-500",
  },
  {
    icon: PieChart,
    title: "Tener claridad sobre tus números",
    description: "Sabes cuánto cuesta cada cliente, cada venta, cada clic.",
    color: "from-purple-500/20 to-pink-500/20",
    iconColor: "text-purple-500",
    hoverTextColor: "group-hover:text-purple-500",
    accentColor: "purple-500",
  },
];

const ServiceCard: React.FC<{ service: Service; index: number; featured?: boolean }> = ({ service, index, featured = false }) => {
  const Icon = service.icon;
  
  const handleServiceClick = () => {
    serviceSelection.set(service.title);
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
      className={`group h-full cursor-pointer ${featured ? "md:col-span-2 lg:col-span-2" : ""}`}
      onClick={handleServiceClick}
    >
      <div className={`relative h-full bg-card/60 backdrop-blur-sm border border-border/50 rounded-2xl ${featured ? "p-8 lg:p-10" : "p-6 lg:p-8"} hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 overflow-hidden`}>
        {/* Gradient background on hover */}
        <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
        
        {/* Decorative corner accent */}
        <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${service.color} rounded-full blur-3xl opacity-0 group-hover:opacity-60 transition-opacity duration-500`} />

        {/* Subtle dot pattern */}
        <div className="absolute inset-0 opacity-[0.02] group-hover:opacity-[0.04] transition-opacity" style={{
          backgroundImage: 'radial-gradient(circle, hsl(var(--foreground)) 0.5px, transparent 0.5px)',
          backgroundSize: '16px 16px',
        }} />

        <div className="relative z-10 h-full flex flex-col">
          {/* Icon with number */}
          <div className="flex items-start justify-between mb-6">
            <motion.div 
              className={`${featured ? "w-16 h-16" : "w-14 h-14"} rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}
              whileHover={{ rotate: 6, scale: 1.1 }}
            >
              <Icon className={`${featured ? "w-8 h-8" : "w-7 h-7"} ${service.iconColor}`} />
            </motion.div>
            <span className={`${featured ? "text-5xl" : "text-4xl"} font-black ${service.iconColor} opacity-20 group-hover:opacity-40 transition-opacity`}>
              0{index + 1}
            </span>
          </div>

          {/* Title */}
          <h3 className={`${featured ? "text-2xl" : "text-xl"} font-bold text-foreground mb-3 ${service.hoverTextColor} transition-colors duration-300`}>
            {service.title}
          </h3>

          {/* Description */}
          <p className={`text-muted-foreground ${featured ? "text-base" : "text-sm"} leading-relaxed flex-grow`}>
            {service.description}
          </p>

          {/* CTA on hover */}
          <motion.div 
            className={`mt-5 pt-4 border-t border-border/30 flex items-center gap-2 ${service.iconColor} font-medium opacity-60 group-hover:opacity-100 transition-all duration-300`}
          >
            <span className="text-sm">Consultar</span>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Esto es lo que <span className="text-gradient">incluye</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Cada servicio está diseñado para resolver un problema específico de tu negocio.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <ServiceCard service={services[0]} index={0} featured />
          {services.slice(1).map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i + 1} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

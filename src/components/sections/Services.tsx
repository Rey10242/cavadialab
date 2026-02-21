import React from "react";
import { motion } from "framer-motion";
import { 
  Megaphone, 
  UserCheck, 
  RefreshCw, 
  BarChart3, 
  PieChart,
  ArrowRight,
  MessageCircle,
  LucideIcon
} from "lucide-react";
import { Button } from "@/components/ui/button";
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
    description: "Que cada peso invertido tenga un propósito claro y medible. Nada de gastar por gastar.",
    color: "from-blue-500/20 to-cyan-500/20",
    iconColor: "text-blue-500",
    hoverTextColor: "group-hover:text-blue-500",
    accentColor: "blue-500",
  },
  {
    icon: UserCheck,
    title: "Atraer mejores clientes",
    description: "Estrategias para que lleguen personas realmente interesadas en comprar, no solo curiosos.",
    color: "from-primary/20 to-violet-500/20",
    iconColor: "text-primary",
    hoverTextColor: "group-hover:text-primary",
    accentColor: "primary",
  },
  {
    icon: RefreshCw,
    title: "Mejorar tus resultados actuales",
    description: "Optimizar lo que ya tienes para que rinda más sin necesidad de gastar más.",
    color: "from-emerald-500/20 to-teal-500/20",
    iconColor: "text-emerald-500",
    hoverTextColor: "group-hover:text-emerald-500",
    accentColor: "emerald-500",
  },
  {
    icon: BarChart3,
    title: "Saber si tu inversión funciona",
    description: "Medición clara para que tomes decisiones con números, no con intuición.",
    color: "from-orange-500/20 to-amber-500/20",
    iconColor: "text-orange-500",
    hoverTextColor: "group-hover:text-orange-500",
    accentColor: "orange-500",
  },
  {
    icon: PieChart,
    title: "Tener claridad sobre tus números",
    description: "Reportes simples que te muestran qué está pasando con tu dinero.",
    color: "from-purple-500/20 to-pink-500/20",
    iconColor: "text-purple-500",
    hoverTextColor: "group-hover:text-purple-500",
    accentColor: "purple-500",
  },
];

const ServiceCard: React.FC<{ service: Service; index: number }> = ({ service, index }) => {
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
            ¿En qué puedo <span className="text-gradient">ayudarte</span>?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Puedo ayudarte si necesitas resolver alguno de estos retos en tu negocio.
          </p>
        </motion.div>

        {/* Services Grid */}
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
            <div className="absolute -top-12 -right-12 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-12 -left-12 w-24 h-24 bg-violet-500/10 rounded-full blur-2xl" />
            
            <div className="relative z-10 text-left">
              <p className="text-foreground font-semibold text-lg mb-1">
                ¿No estás seguro de qué necesitas?
              </p>
              <p className="text-muted-foreground text-sm">
                Conversemos y te digo con claridad qué se puede mejorar.
              </p>
            </div>
            <Button
              className="relative z-10 btn-primary-glow group px-8 py-6 text-base"
              onClick={() => window.open("https://wa.me/573246875354", "_blank")}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Hablemos
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;

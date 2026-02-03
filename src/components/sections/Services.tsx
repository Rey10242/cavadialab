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
  Search
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Settings,
    title: "Set Up de Cuentas y Tracking",
    description: "Configuración profesional de cuentas publicitarias, píxeles, eventos de conversión y Google Tag Manager para medir cada acción relevante.",
    color: "from-blue-500/20 to-cyan-500/20",
    iconColor: "text-blue-500",
    borderColor: "hover:border-blue-500/40",
    hoverTextColor: "group-hover:text-blue-500",
  },
  {
    icon: TrendingUp,
    title: "Escalamiento de Campañas",
    description: "Estrategias para aumentar presupuesto de forma controlada sin perder rentabilidad, identificando winners y automatizando procesos.",
    color: "from-primary/20 to-violet-500/20",
    iconColor: "text-primary",
    borderColor: "hover:border-primary/40",
    hoverTextColor: "group-hover:text-primary",
    featured: true,
  },
  {
    icon: RefreshCw,
    title: "Optimización y Reestructuración",
    description: "Auditoría y mejora de campañas existentes para maximizar ROAS, reducir CPA y mejorar la calidad del tráfico.",
    color: "from-emerald-500/20 to-teal-500/20",
    iconColor: "text-emerald-500",
    borderColor: "hover:border-emerald-500/40",
    hoverTextColor: "group-hover:text-emerald-500",
  },
  {
    icon: ClipboardCheck,
    title: "Auditoría Técnica y Estratégica",
    description: "Análisis profundo de tu ecosistema digital: tracking, atribución, estructura de campañas, creativos y funnel de conversión.",
    color: "from-orange-500/20 to-amber-500/20",
    iconColor: "text-orange-500",
    borderColor: "hover:border-orange-500/40",
    hoverTextColor: "group-hover:text-orange-500",
  },
  {
    icon: Search,
    title: "SEO y Posicionamiento Orgánico",
    description: "Estrategias de optimización para motores de búsqueda, análisis de keywords, SEO técnico y contenido optimizado para aumentar tráfico orgánico.",
    color: "from-cyan-500/20 to-sky-500/20",
    iconColor: "text-cyan-500",
    borderColor: "hover:border-cyan-500/40",
    hoverTextColor: "group-hover:text-cyan-500",
  },
  {
    icon: Lightbulb,
    title: "Consultoría en Growth y Performance",
    description: "Asesoría estratégica para equipos de marketing, definición de KPIs, dashboards ejecutivos y roadmap de crecimiento.",
    color: "from-purple-500/20 to-pink-500/20",
    iconColor: "text-purple-500",
    borderColor: "hover:border-purple-500/40",
    hoverTextColor: "group-hover:text-purple-500",
  },
];

const Services: React.FC = () => {
  return (
    <section id="servicios" className="section-padding relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-violet-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
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
          
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Cómo Puedo <span className="text-gradient">Ayudarte</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Soluciones integrales en paid media, automatización y growth marketing para impulsar tu negocio al siguiente nivel.
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 lg:gap-6 max-w-6xl mx-auto">
          {/* Card 1 - Standard */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2 group"
          >
            <div className={`relative h-full min-h-[280px] bg-card/50 backdrop-blur-sm border border-border rounded-3xl p-6 lg:p-8 ${services[0].borderColor} hover:shadow-2xl transition-all duration-500 overflow-hidden`}>
              {/* Gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${services[0].color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              {/* Animated border */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-[1px] rounded-3xl bg-card/80" />
              </div>

              <div className="relative z-10 h-full flex flex-col">
                {(() => {
                  const IconComponent = services[0].icon;
                  return (
                    <motion.div 
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${services[0].color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                      whileHover={{ rotate: 5 }}
                    >
                      <IconComponent className={`w-8 h-8 ${services[0].iconColor}`} />
                    </motion.div>
                  );
                })()}

                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {services[0].title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed flex-grow">
                  {services[0].description}
                </p>

                <motion.div 
                  className="mt-4 flex items-center gap-2 text-primary font-medium opacity-0 group-hover:opacity-100 transition-all duration-300"
                  initial={{ x: -10 }}
                  whileHover={{ x: 0 }}
                >
                  <span className="text-sm">Saber más</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Card 2 - Featured (larger) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2 lg:row-span-2 group"
          >
            <div className={`relative h-full min-h-[280px] lg:min-h-full bg-gradient-to-br from-primary/10 via-card/50 to-violet-500/10 backdrop-blur-sm border-2 border-primary/30 rounded-3xl p-6 lg:p-8 hover:border-primary/60 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 overflow-hidden`}>
              {/* Animated gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-violet-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Floating particles */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/40 rounded-full animate-pulse" />
                <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-violet-500/40 rounded-full animate-pulse delay-100" />
                <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-primary/30 rounded-full animate-pulse delay-200" />
              </div>

              <div className="relative z-10 h-full flex flex-col">
                {/* Featured badge */}
                <div className="absolute top-0 right-0 px-3 py-1 bg-primary/20 text-primary text-xs font-semibold rounded-bl-xl rounded-tr-3xl">
                  Popular
                </div>

                <motion.div 
                  className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/30 to-violet-500/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-primary/20"
                  whileHover={{ rotate: 5 }}
                >
                  <TrendingUp className="w-10 h-10 text-primary" />
                </motion.div>

                <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {services[1].title}
                </h3>

                <p className="text-muted-foreground leading-relaxed flex-grow text-base">
                  {services[1].description}
                </p>

                <div className="mt-6 pt-6 border-t border-border/50">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                      <span className="text-xs text-muted-foreground">Alta demanda</span>
                    </div>
                    <motion.div 
                      className="flex items-center gap-2 text-primary font-medium"
                      whileHover={{ x: 5 }}
                    >
                      <span className="text-sm">Consultar</span>
                      <ArrowRight className="w-4 h-4" />
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 3 - Standard */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-2 group"
          >
            <div className={`relative h-full min-h-[280px] bg-card/50 backdrop-blur-sm border border-border rounded-3xl p-6 lg:p-8 ${services[2].borderColor} hover:shadow-2xl transition-all duration-500 overflow-hidden`}>
              <div className={`absolute inset-0 bg-gradient-to-br ${services[2].color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10 h-full flex flex-col">
                <motion.div 
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${services[2].color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  whileHover={{ rotate: 5 }}
                >
                  <RefreshCw className={`w-8 h-8 ${services[2].iconColor}`} />
                </motion.div>

                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-emerald-500 transition-colors">
                  {services[2].title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed flex-grow">
                  {services[2].description}
                </p>

                <motion.div 
                  className="mt-4 flex items-center gap-2 text-emerald-500 font-medium opacity-0 group-hover:opacity-100 transition-all duration-300"
                >
                  <span className="text-sm">Saber más</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Card 4 - Wide */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="lg:col-span-2 group"
          >
            <div className={`relative h-full min-h-[280px] bg-card/50 backdrop-blur-sm border border-border rounded-3xl p-6 lg:p-8 ${services[3].borderColor} hover:shadow-2xl transition-all duration-500 overflow-hidden`}>
              <div className={`absolute inset-0 bg-gradient-to-br ${services[3].color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10 h-full flex flex-col">
                <motion.div 
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${services[3].color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  whileHover={{ rotate: 5 }}
                >
                  <ClipboardCheck className={`w-8 h-8 ${services[3].iconColor}`} />
                </motion.div>

                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-orange-500 transition-colors">
                  {services[3].title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed flex-grow">
                  {services[3].description}
                </p>

                <motion.div 
                  className="mt-4 flex items-center gap-2 text-orange-500 font-medium opacity-0 group-hover:opacity-100 transition-all duration-300"
                >
                  <span className="text-sm">Saber más</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Card 5 - SEO */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="lg:col-span-2 group"
          >
            <div className={`relative h-full min-h-[280px] bg-card/50 backdrop-blur-sm border border-border rounded-3xl p-6 lg:p-8 ${services[4].borderColor} hover:shadow-2xl transition-all duration-500 overflow-hidden`}>
              <div className={`absolute inset-0 bg-gradient-to-br ${services[4].color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10 h-full flex flex-col">
                <motion.div 
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${services[4].color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  whileHover={{ rotate: 5 }}
                >
                  <Search className={`w-8 h-8 ${services[4].iconColor}`} />
                </motion.div>

                <h3 className={`text-xl font-bold text-foreground mb-3 ${services[4].hoverTextColor} transition-colors`}>
                  {services[4].title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed flex-grow">
                  {services[4].description}
                </p>

                <motion.div 
                  className={`mt-4 flex items-center gap-2 ${services[4].iconColor} font-medium opacity-0 group-hover:opacity-100 transition-all duration-300`}
                >
                  <span className="text-sm">Saber más</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Card 6 - Consultoría */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="lg:col-span-2 group"
          >
            <div className={`relative h-full min-h-[280px] bg-card/50 backdrop-blur-sm border border-border rounded-3xl p-6 lg:p-8 ${services[5].borderColor} hover:shadow-2xl transition-all duration-500 overflow-hidden`}>
              <div className={`absolute inset-0 bg-gradient-to-br ${services[5].color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10 h-full flex flex-col">
                <motion.div 
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${services[5].color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  whileHover={{ rotate: 5 }}
                >
                  <Lightbulb className={`w-8 h-8 ${services[5].iconColor}`} />
                </motion.div>

                <h3 className={`text-xl font-bold text-foreground mb-3 ${services[5].hoverTextColor} transition-colors`}>
                  {services[5].title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed flex-grow">
                  {services[5].description}
                </p>

                <motion.div 
                  className={`mt-4 flex items-center gap-2 ${services[5].iconColor} font-medium opacity-0 group-hover:opacity-100 transition-all duration-300`}
                >
                  <span className="text-sm">Saber más</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="relative inline-flex flex-col sm:flex-row items-center gap-6 p-8 bg-gradient-to-r from-primary/5 via-card to-violet-500/5 border border-border rounded-3xl overflow-hidden">
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

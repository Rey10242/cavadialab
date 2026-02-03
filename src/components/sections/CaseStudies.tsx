import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TrendingUp, Target, Users, DollarSign, Lightbulb, ChevronDown, ChevronUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface CaseStudy {
  id: number;
  title: string;
  industry: string;
  category: string;
  context: string;
  objective: string;
  strategy: string[];
  results: {
    roas?: string;
    cpaReduction?: string;
    revenueIncrease?: string;
    leadsGenerated?: string;
  };
  learning: string;
  tags: string[];
}

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: "E-commerce Moda Colombia",
    industry: "Retail / E-commerce",
    category: "E-commerce",
    context: "Tienda online de moda con ticket promedio de $120 USD. Campañas desorganizadas con ROAS de 1.5x.",
    objective: "Aumentar ROAS a 4x y escalar inversión mensual de $3K a $15K.",
    strategy: [
      "Reestructuración de campañas con segmentación por etapa del funnel",
      "Creativos UGC + catálogo dinámico",
      "Remarketing secuencial con ofertas escalonadas",
    ],
    results: {
      roas: "5.2x",
      revenueIncrease: "$180K",
      cpaReduction: "45%",
    },
    learning: "El contenido UGC generó 3x más engagement que los creativos tradicionales de marca.",
    tags: ["Meta Ads", "E-commerce", "UGC"],
  },
  {
    id: 2,
    title: "SaaS B2B Latinoamérica",
    industry: "SaaS / Tecnología",
    category: "B2B",
    context: "Plataforma de gestión empresarial. CAC alto y ciclo de ventas largo (+60 días).",
    objective: "Reducir CAC en 40% y generar 100 demos mensuales calificados.",
    strategy: [
      "Campañas de contenido educativo para generar awareness",
      "Lead magnets + automatización de nurturing",
      "LinkedIn Ads para decisores + Google Search para intención",
    ],
    results: {
      leadsGenerated: "150 demos/mes",
      cpaReduction: "52%",
      revenueIncrease: "$85K ARR",
    },
    learning: "El contenido educativo pre-califica leads y reduce fricción en el ciclo de ventas.",
    tags: ["LinkedIn Ads", "Google Ads", "B2B"],
  },
  {
    id: 3,
    title: "Clínica Estética Premium",
    industry: "Salud / Belleza",
    category: "Servicios",
    context: "Clínica con ticket alto ($2K+ por procedimiento). Dependencia total de referidos.",
    objective: "Generar 30 leads calificados mensuales desde canales digitales.",
    strategy: [
      "Campañas Meta Ads con antes/después + testimonios",
      "WhatsApp como canal de conversión directa",
      "Automatización de seguimiento y recordatorios",
    ],
    results: {
      leadsGenerated: "45 leads/mes",
      roas: "8.5x",
      revenueIncrease: "$95K",
    },
    learning: "WhatsApp Business API aumentó la tasa de respuesta en 70% vs formularios tradicionales.",
    tags: ["Meta Ads", "WhatsApp API", "Healthcare"],
  },
  {
    id: 4,
    title: "Academia Online de Desarrollo",
    industry: "Educación / EdTech",
    category: "Educación",
    context: "Cursos de programación con ticket de $300. Tasa de conversión del 1.2%.",
    objective: "Duplicar tasa de conversión y escalar a $50K en ventas mensuales.",
    strategy: [
      "Webinars automatizados como lead magnet",
      "Secuencia de emails con casos de éxito de alumnos",
      "Retargeting con testimonios y urgencia",
    ],
    results: {
      roas: "6.8x",
      revenueIncrease: "$72K/mes",
      cpaReduction: "38%",
    },
    learning: "Los webinars automatizados convirtieron 4x mejor que las landing pages estáticas.",
    tags: ["Meta Ads", "Email Marketing", "EdTech"],
  },
  {
    id: 5,
    title: "Restaurante Fast Casual",
    industry: "Food & Beverage",
    category: "Servicios",
    context: "Cadena de 5 locales. Sin presencia digital estructurada, dependencia de tráfico orgánico.",
    objective: "Incrementar pedidos delivery en 50% y awareness local.",
    strategy: [
      "Campañas geo-localizadas por zona de entrega",
      "Creativos con ofertas de primera compra",
      "Integración con apps de delivery + pedidos directos",
    ],
    results: {
      roas: "4.2x",
      revenueIncrease: "$35K/mes",
      leadsGenerated: "800 nuevos clientes/mes",
    },
    learning: "Las campañas hiperlocales con radio de 3km tuvieron 2x mejor rendimiento.",
    tags: ["Meta Ads", "Local Marketing", "F&B"],
  },
  {
    id: 6,
    title: "Inmobiliaria Proyectos Nuevos",
    industry: "Real Estate",
    category: "Real Estate",
    context: "Desarrolladora con proyecto de $15M en inventario. Leads de baja calidad.",
    objective: "Generar leads de compradores calificados (preaprobados o con capacidad).",
    strategy: [
      "Formularios con preguntas de calificación financiera",
      "Campañas de conversión + remarketing de visitantes al proyecto",
      "Automatización de asignación a asesores por zona",
    ],
    results: {
      leadsGenerated: "200 leads/mes",
      cpaReduction: "55%",
      revenueIncrease: "$2.5M en ventas",
    },
    learning: "Preguntas de calificación redujeron leads no calificados en 70%.",
    tags: ["Meta Ads", "Google Ads", "Real Estate"],
  },
  {
    id: 7,
    title: "Fintech Créditos Personales",
    industry: "Fintech / Servicios Financieros",
    category: "Fintech",
    context: "App de préstamos con proceso 100% digital. Alto costo de adquisición.",
    objective: "Reducir CPA de solicitudes completadas de $25 a $12.",
    strategy: [
      "Optimización de eventos de conversión en el funnel de aplicación",
      "Creativos enfocados en velocidad y facilidad del proceso",
      "Exclusión de audiencias con comportamiento de fraude",
    ],
    results: {
      cpaReduction: "58%",
      leadsGenerated: "3,500 aplicaciones/mes",
      revenueIncrease: "$420K desembolsados",
    },
    learning: "Optimizar por eventos intermedios (paso 3 del funnel) mejoró la calidad de leads.",
    tags: ["Meta Ads", "Google Ads", "Fintech"],
  },
  {
    id: 8,
    title: "Marca de Suplementos DTC",
    industry: "CPG / E-commerce",
    category: "E-commerce",
    context: "Marca de suplementos con ventas por suscripción. MER de 1.8x.",
    objective: "Aumentar MER a 3.5x y lifetime value de clientes.",
    strategy: [
      "Campañas de adquisición con ofertas de primera caja",
      "Email automation para retención y upselling",
      "Influencer seeding + contenido UGC",
    ],
    results: {
      roas: "4.1x MER",
      revenueIncrease: "$150K/mes",
      cpaReduction: "35%",
    },
    learning: "La oferta de primera caja a precio reducido aumentó suscripciones en 85%.",
    tags: ["Meta Ads", "Email Marketing", "DTC"],
  },
  {
    id: 9,
    title: "Agencia de Viajes Corporativos",
    industry: "Travel / B2B",
    category: "B2B",
    context: "Agencia enfocada en empresas. Proceso de ventas largo y dependiente de llamadas.",
    objective: "Automatizar captación y nutrir leads antes del contacto comercial.",
    strategy: [
      "Lead magnets con calculadora de ahorro corporativo",
      "LinkedIn Ads para travel managers y CFOs",
      "Automatización de nurturing con casos de éxito por industria",
    ],
    results: {
      leadsGenerated: "85 empresas/mes",
      cpaReduction: "48%",
      revenueIncrease: "$200K en contratos",
    },
    learning: "El lead magnet interactivo (calculadora) generó 5x más leads que PDFs tradicionales.",
    tags: ["LinkedIn Ads", "B2B", "Travel"],
  },
  {
    id: 10,
    title: "App de Fitness y Bienestar",
    industry: "Health Tech / Apps",
    category: "Apps",
    context: "App de entrenamiento con modelo freemium. Baja conversión a premium.",
    objective: "Aumentar suscripciones premium y reducir churn.",
    strategy: [
      "Campañas de app install con optimización por evento de suscripción",
      "Push notifications automatizados basados en comportamiento",
      "Remarketing con testimonios de transformación",
    ],
    results: {
      roas: "3.8x",
      leadsGenerated: "12K installs/mes",
      revenueIncrease: "$65K MRR",
    },
    learning: "Las notificaciones personalizadas por objetivo (pérdida de peso, músculo, etc.) redujeron churn en 40%.",
    tags: ["Meta Ads", "App Marketing", "Health Tech"],
  },
];

const categories = ["Todos", "E-commerce", "B2B", "Servicios", "Real Estate", "Fintech", "Educación", "Apps"];

const CaseStudyCard: React.FC<{ study: CaseStudy; index: number }> = ({ study, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary/30 hover:shadow-xl transition-all duration-300"
    >
      {/* Header */}
      <div className="p-6">
        <div className="flex items-start justify-between gap-3 mb-3">
          <div>
            <Badge variant="secondary" className="mb-2 text-xs">
              {study.industry}
            </Badge>
            <h3 className="text-lg font-semibold text-foreground">{study.title}</h3>
          </div>
        </div>

        <p className="text-sm text-muted-foreground mb-4">{study.context}</p>

        {/* Results Grid - mejorada jerarquía visual */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          {study.results.roas && (
            <div className="flex items-center gap-2 p-3 bg-gradient-to-br from-green-500/10 to-green-500/5 rounded-xl border border-green-500/20">
              <TrendingUp className="w-5 h-5 text-green-500" />
              <div>
                <p className="text-xs text-muted-foreground">ROAS</p>
                <p className="font-bold text-lg text-foreground">{study.results.roas}</p>
              </div>
            </div>
          )}
          {study.results.cpaReduction && (
            <div className="flex items-center gap-2 p-3 bg-gradient-to-br from-blue-500/10 to-blue-500/5 rounded-xl border border-blue-500/20">
              <Target className="w-5 h-5 text-blue-500" />
              <div>
                <p className="text-xs text-muted-foreground">CPA Reducido</p>
                <p className="font-bold text-lg text-foreground">{study.results.cpaReduction}</p>
              </div>
            </div>
          )}
          {study.results.revenueIncrease && (
            <div className="flex items-center gap-2 p-3 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl border border-primary/20">
              <DollarSign className="w-5 h-5 text-primary" />
              <div>
                <p className="text-xs text-muted-foreground">Revenue</p>
                <p className="font-bold text-lg text-foreground">{study.results.revenueIncrease}</p>
              </div>
            </div>
          )}
          {study.results.leadsGenerated && (
            <div className="flex items-center gap-2 p-3 bg-gradient-to-br from-purple-500/10 to-purple-500/5 rounded-xl border border-purple-500/20">
              <Users className="w-5 h-5 text-purple-500" />
              <div>
                <p className="text-xs text-muted-foreground">Leads</p>
                <p className="font-bold text-lg text-foreground">{study.results.leadsGenerated}</p>
              </div>
            </div>
          )}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {study.tags.map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>

        {/* Expand Button */}
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full justify-between hover:bg-primary/5"
        >
          {isExpanded ? "Ver menos" : "Ver detalles"}
          {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </Button>
      </div>

      {/* Expanded Content */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="border-t border-border"
          >
            <div className="p-6 space-y-4">
              <div>
                <h4 className="font-medium text-foreground mb-2 flex items-center gap-2">
                  <Target className="w-4 h-4 text-primary" />
                  Objetivo
                </h4>
                <p className="text-sm text-muted-foreground">{study.objective}</p>
              </div>

              <div>
                <h4 className="font-medium text-foreground mb-2">Estrategia</h4>
                <ul className="space-y-1">
                  {study.strategy.map((item, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 rounded-xl">
                <h4 className="font-medium text-foreground mb-2 flex items-center gap-2">
                  <Lightbulb className="w-4 h-4 text-yellow-500" />
                  Aprendizaje Clave
                </h4>
                <p className="text-sm text-muted-foreground">{study.learning}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const CaseStudies: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [showAll, setShowAll] = useState(false);

  const filteredStudies = useMemo(() => {
    if (activeCategory === "Todos") return caseStudies;
    return caseStudies.filter(study => study.category === activeCategory);
  }, [activeCategory]);

  const displayedStudies = showAll ? filteredStudies : filteredStudies.slice(0, 6);

  return (
    <section id="casos-exito" className="section-padding bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Casos de <span className="text-gradient">Éxito</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Resultados reales de proyectos ejecutados con diferentes industrias y objetivos.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setShowAll(false);
              }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                  : "bg-card border border-border text-muted-foreground hover:border-primary/30 hover:text-foreground"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Cases Grid */}
        <motion.div layout className="grid md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {displayedStudies.map((study, index) => (
              <CaseStudyCard key={study.id} study={study} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Show More Button */}
        {filteredStudies.length > 6 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex justify-center mt-10"
          >
            <Button
              variant="outline"
              size="lg"
              onClick={() => setShowAll(!showAll)}
              className="group"
            >
              {showAll ? "Ver menos" : `Ver más casos (${filteredStudies.length - 6} más)`}
              {showAll ? (
                <ChevronUp className="w-4 h-4 ml-2 group-hover:-translate-y-1 transition-transform" />
              ) : (
                <ChevronDown className="w-4 h-4 ml-2 group-hover:translate-y-1 transition-transform" />
              )}
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default CaseStudies;

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

interface CaseStudy {
  id: number;
  title: string;
  industry: string;
  category: string;
  context: string;
  objective: string;
  strategy: string[];
  results: { roas?: string; cpaReduction?: string; revenueIncrease?: string; leadsGenerated?: string };
  learning: string;
  tags: string[];
}

const caseStudies: CaseStudy[] = [
  { id: 1, title: "E-commerce Moda Colombia", industry: "Retail / E-commerce", category: "E-commerce", context: "Tienda online de moda con ticket promedio de $120 USD. Campañas desorganizadas con ROAS de 1.5x.", objective: "Aumentar ROAS a 4x y escalar inversión mensual de $3K a $15K.", strategy: ["Reestructuración de campañas con segmentación por etapa del funnel", "Creativos UGC + catálogo dinámico", "Remarketing secuencial con ofertas escalonadas"], results: { roas: "5.2x", revenueIncrease: "$180K", cpaReduction: "45%" }, learning: "El contenido UGC generó 3x más engagement que los creativos tradicionales de marca.", tags: ["Meta Ads", "E-commerce", "UGC"] },
  { id: 2, title: "SaaS B2B Latinoamérica", industry: "SaaS / Tecnología", category: "B2B", context: "Plataforma de gestión empresarial. CAC alto y ciclo de ventas largo (+60 días).", objective: "Reducir CAC en 40% y generar 100 demos mensuales calificados.", strategy: ["Campañas de contenido educativo para generar awareness", "Lead magnets + automatización de nurturing", "LinkedIn Ads para decisores + Google Search para intención"], results: { leadsGenerated: "150 demos/mes", cpaReduction: "52%", revenueIncrease: "$85K ARR" }, learning: "El contenido educativo pre-califica leads y reduce fricción en el ciclo de ventas.", tags: ["LinkedIn Ads", "Google Ads", "B2B"] },
  { id: 3, title: "Clínica Estética Premium", industry: "Salud / Belleza", category: "Servicios", context: "Clínica con ticket alto ($2K+ por procedimiento). Dependencia total de referidos.", objective: "Generar 30 leads calificados mensuales desde canales digitales.", strategy: ["Campañas Meta Ads con antes/después + testimonios", "WhatsApp como canal de conversión directa", "Automatización de seguimiento y recordatorios"], results: { leadsGenerated: "45 leads/mes", roas: "8.5x", revenueIncrease: "$95K" }, learning: "WhatsApp Business API aumentó la tasa de respuesta en 70% vs formularios tradicionales.", tags: ["Meta Ads", "WhatsApp API", "Healthcare"] },
  { id: 4, title: "Academia Online de Desarrollo", industry: "Educación / EdTech", category: "Educación", context: "Cursos de programación con ticket de $300. Tasa de conversión del 1.2%.", objective: "Duplicar tasa de conversión y escalar a $50K en ventas mensuales.", strategy: ["Webinars automatizados como lead magnet", "Secuencia de emails con casos de éxito de alumnos", "Retargeting con testimonios y urgencia"], results: { roas: "6.8x", revenueIncrease: "$72K/mes", cpaReduction: "38%" }, learning: "Los webinars automatizados convirtieron 4x mejor que las landing pages estáticas.", tags: ["Meta Ads", "Email Marketing", "EdTech"] },
  { id: 5, title: "Restaurante Fast Casual", industry: "Food & Beverage", category: "Servicios", context: "Cadena de 5 locales. Sin presencia digital estructurada.", objective: "Incrementar pedidos delivery en 50% y awareness local.", strategy: ["Campañas geo-localizadas por zona de entrega", "Creativos con ofertas de primera compra", "Integración con apps de delivery + pedidos directos"], results: { roas: "4.2x", revenueIncrease: "$35K/mes", leadsGenerated: "800 nuevos clientes/mes" }, learning: "Las campañas hiperlocales con radio de 3km tuvieron 2x mejor rendimiento.", tags: ["Meta Ads", "Local Marketing", "F&B"] },
  { id: 6, title: "Inmobiliaria Proyectos Nuevos", industry: "Real Estate", category: "Real Estate", context: "Desarrolladora con proyecto de $15M en inventario. Leads de baja calidad.", objective: "Generar leads de compradores calificados.", strategy: ["Formularios con preguntas de calificación financiera", "Campañas de conversión + remarketing", "Automatización de asignación a asesores"], results: { leadsGenerated: "200 leads/mes", cpaReduction: "55%", revenueIncrease: "$2.5M en ventas" }, learning: "Preguntas de calificación redujeron leads no calificados en 70%.", tags: ["Meta Ads", "Google Ads", "Real Estate"] },
  { id: 7, title: "Fintech Créditos Personales", industry: "Fintech", category: "Fintech", context: "App de préstamos con proceso 100% digital. Alto costo de adquisición.", objective: "Reducir CPA de solicitudes completadas de $25 a $12.", strategy: ["Optimización de eventos de conversión en el funnel", "Creativos enfocados en velocidad y facilidad", "Exclusión de audiencias con comportamiento de fraude"], results: { cpaReduction: "58%", leadsGenerated: "3,500 aplicaciones/mes", revenueIncrease: "$420K desembolsados" }, learning: "Optimizar por eventos intermedios mejoró la calidad de leads.", tags: ["Meta Ads", "Google Ads", "Fintech"] },
  { id: 8, title: "Marca de Suplementos DTC", industry: "CPG / E-commerce", category: "E-commerce", context: "Marca de suplementos con ventas por suscripción. MER de 1.8x.", objective: "Aumentar MER a 3.5x y lifetime value de clientes.", strategy: ["Campañas de adquisición con ofertas de primera caja", "Email automation para retención y upselling", "Influencer seeding + contenido UGC"], results: { roas: "4.1x MER", revenueIncrease: "$150K/mes", cpaReduction: "35%" }, learning: "La oferta de primera caja a precio reducido aumentó suscripciones en 85%.", tags: ["Meta Ads", "Email Marketing", "DTC"] },
];

const categories = ["Todos", "E-commerce", "B2B", "Servicios", "Real Estate", "Fintech", "Educación"];

const CaseStudyCard: React.FC<{ study: CaseStudy; index: number }> = ({ study, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const resultEntries = [
    study.results.roas && { label: "ROAS", value: study.results.roas },
    study.results.cpaReduction && { label: "CPA ↓", value: study.results.cpaReduction },
    study.results.revenueIncrease && { label: "Revenue", value: study.results.revenueIncrease },
    study.results.leadsGenerated && { label: "Leads", value: study.results.leadsGenerated },
  ].filter(Boolean) as { label: string; value: string }[];

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3, delay: index * 0.04 }}
      className="border border-border hover:border-primary/30 transition-colors"
    >
      <div className="p-5 sm:p-6">
        <div className="mb-3">
          <span className="tag mb-2 inline-block">{study.industry}</span>
          <h3 className="font-heading text-lg tracking-wide text-foreground">{study.title}</h3>
        </div>

        <p className="text-[0.77rem] text-muted-foreground mb-4 leading-relaxed">{study.context}</p>

        {/* Results — minimal */}
        <div className="grid grid-cols-2 gap-px bg-border mb-4">
          {resultEntries.map((r) => (
            <div key={r.label} className="bg-card p-3">
              <span className="text-[0.58rem] font-bold tracking-wider uppercase text-muted-foreground">{r.label}</span>
              <p className="font-heading text-xl text-primary leading-none mt-1">{r.value}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-1.5 mb-3">
          {study.tags.map((tag) => <span key={tag} className="tag">{tag}</span>)}
        </div>

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-1 text-[0.68rem] font-bold tracking-wider uppercase text-muted-foreground hover:text-primary transition-colors"
        >
          {isExpanded ? "Menos" : "Detalles"}
          {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
        </button>
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="border-t border-border overflow-hidden"
          >
            <div className="p-5 sm:p-6 space-y-3">
              <div>
                <span className="text-[0.6rem] font-bold tracking-wider uppercase text-primary">Objetivo</span>
                <p className="text-sm text-muted-foreground mt-1">{study.objective}</p>
              </div>
              <div>
                <span className="text-[0.6rem] font-bold tracking-wider uppercase text-primary">Estrategia</span>
                <ul className="mt-1 space-y-1">
                  {study.strategy.map((item, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-primary mt-0.5">—</span>{item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border-l-[2px] border-primary/40 pl-4">
                <span className="text-[0.6rem] font-bold tracking-wider uppercase text-muted-foreground">Aprendizaje</span>
                <p className="text-sm text-muted-foreground mt-1 font-serif italic">{study.learning}</p>
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

  const displayedStudies = showAll ? filteredStudies : filteredStudies.slice(0, 4);

  return (
    <section id="casos-exito" className="section-padding bg-secondary">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="section-label">Portafolio</div>
          <h2 className="section-title">Casos de éxito</h2>
          <p className="text-sm text-muted-foreground max-w-md">
            Resultados reales de proyectos ejecutados en diferentes industrias.
          </p>
        </motion.div>

        {/* Filter */}
        <div className="flex gap-2 mb-10 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap sm:overflow-visible scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => { setActiveCategory(cat); setShowAll(false); }}
              className={`px-3 py-1.5 text-[0.62rem] font-bold tracking-wider uppercase transition-colors border whitespace-nowrap shrink-0 sm:shrink ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-transparent text-muted-foreground border-border hover:border-primary/40 hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid md:grid-cols-2 gap-px bg-border border border-border">
          <AnimatePresence mode="popLayout">
            {displayedStudies.map((study, index) => (
              <CaseStudyCard key={study.id} study={study} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredStudies.length > 4 && (
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-border text-[0.68rem] font-bold tracking-wider uppercase text-muted-foreground hover:text-primary hover:border-primary transition-colors"
            >
              {showAll ? "Ver menos" : `Ver más (${filteredStudies.length - 4})`}
              {showAll ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default CaseStudies;

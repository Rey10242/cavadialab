import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { serviceSelection } from "@/hooks/useServiceSelection";
import { trackServiceCTAClick, trackWhatsAppClick } from "@/lib/gtag";

const scrollToContact = (serviceName: string) => {
  trackServiceCTAClick(serviceName);
  serviceSelection.set(serviceName);
  document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
};

const services = [
  {
    number: "01",
    name: "Meta Ads",
    description: "Gestión de campañas full funnel como Social Ads Specialist. Pixel server-side, CAPI y audiencias avanzadas para Paid Media de alto rendimiento.",
    tags: ["Paid Media", "CAPI", "Lookalikes", "Social Ads"],
  },
  {
    number: "02",
    name: "Google Ads",
    description: "PPC Management con intención de compra directa. Search + PMAX + Remarketing con Smart Bidding como Google Ads Specialist.",
    tags: ["PPC", "SEM", "PMAX", "ROAS"],
  },
  {
    number: "03",
    name: "Tracking & Analytics",
    description: "Performance Analysis con GTM + GA4 + píxeles + eventos. Dashboards en Looker Studio para Digital Marketing Analytics data-driven.",
    tags: ["GTM", "GA4", "Looker Studio", "Server-side"],
  },
  {
    number: "04",
    name: "Performance & Growth",
    description: "CRO, Demand Generation y User Acquisition. Estrategia de Growth Marketing y Revenue Marketing para escalar resultados de forma sostenible.",
    tags: ["CRO", "Growth", "Demand Gen", "Revenue"],
  },
];

const packs = [
  {
    name: "Sesión Puntual",
    hours: "1 hora",
    price: "$130.000",
    usd: "~$50 USD",
    popular: false,
    benefits: ["Revisión de cuentas publicitarias", "Recomendaciones accionables", "Grabación de la sesión"],
    forWhom: "Tienes una duda concreta o quieres una segunda opinión.",
  },
  {
    name: "Pack Estratégico",
    hours: "4 horas (2 sesiones de 2h)",
    price: "$440.000",
    usd: "~$150 USD",
    popular: true,
    benefits: ["Todo lo de la Sesión Puntual", "Plan estratégico personalizado", "Seguimiento entre sesiones", "Plantillas y recursos exclusivos", "2 grabaciones"],
    forWhom: "Quieres armar o reestructurar tu estrategia completa.",
  },
];

const Services: React.FC = () => {
  return (
    <section id="servicios" className="section-padding bg-secondary relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="section-label">Servicios</div>
          <h2 className="section-title">Soluciones por canal</h2>
        </motion.div>

        {/* Services grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid-cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-20"
        >
          {services.map((svc) => (
            <div
              key={svc.number}
              className="relative p-5 sm:p-8 flex flex-col gap-3 transition-colors hover:bg-[hsl(var(--surface))] group overflow-hidden"
            >
              {/* Accent top line on hover */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />

              <div className="font-heading text-5xl text-border group-hover:text-primary/20 transition-colors leading-none">
                {svc.number}
              </div>
              <div className="font-heading text-2xl tracking-wide text-foreground">
                {svc.name}
              </div>
              <p className="text-[0.78rem] leading-relaxed text-muted-foreground flex-1">
                {svc.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {svc.tags.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
              <button
                onClick={() => scrollToContact(svc.name)}
                className="inline-flex items-center gap-1 text-[0.7rem] font-bold tracking-wider text-primary mt-1 group-hover:gap-2 transition-all"
              >
                Consultar <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </motion.div>

        {/* Consulting section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="section-label">Mentoría</div>
          <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-3">Consultoría</h2>
          <p className="text-muted-foreground text-sm max-w-2xl mb-10">
            Asesorías en Meta Ads y Google Ads. Soluciones concretas en 1 hora.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border border border-border max-w-3xl mb-12">
          {packs.map((pack, i) => (
            <motion.div
              key={pack.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.1 }}
              className="bg-card p-6 flex flex-col relative"
            >
              {pack.popular && (
                <div className="absolute top-4 right-4">
                  <span className="text-[0.55rem] font-bold tracking-wider uppercase px-2 py-1 bg-primary text-primary-foreground">
                    Recomendado
                  </span>
                </div>
              )}

              <h4 className="font-heading text-xl tracking-wide text-foreground mb-1">{pack.name}</h4>
              <p className="text-[0.72rem] text-primary font-bold tracking-wider uppercase mb-4">{pack.hours}</p>

              <ul className="space-y-2 mb-4 flex-grow">
                {pack.benefits.map((b) => (
                  <li key={b} className="flex items-center gap-2 text-[0.78rem] text-muted-foreground">
                    <Check className="w-3 h-3 text-primary shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
              <p className="text-[0.7rem] text-muted-foreground/80 font-serif italic mb-4">{pack.forWhom}</p>

              <div className="mb-5">
                <p className="font-heading text-3xl text-foreground">{pack.price}</p>
                <p className="text-[0.65rem] text-muted-foreground">{pack.usd}</p>
              </div>

              <button
                onClick={() => {
                  trackWhatsAppClick(`pack_${pack.name.toLowerCase().replace(/\s+/g, '_')}`);
                  window.open(
                    `https://wa.me/573246875354?text=${encodeURIComponent(`Hola, me interesa el pack ${pack.name} de consultoría.`)}`,
                    "_blank"
                  );
                }}
                className={`w-full py-3 text-[0.72rem] font-bold tracking-wider uppercase text-center transition-all ${
                  pack.popular
                    ? "bg-primary text-primary-foreground hover:brightness-110"
                    : "border border-primary text-primary hover:bg-primary/10"
                }`}
              >
                Quiero agendar →
              </button>
            </motion.div>
          ))}
        </div>

        {/* Steps flow — minimal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center justify-start gap-4 text-[0.62rem] font-bold tracking-wider uppercase text-muted-foreground"
        >
          {["1. Elige tu pack", "2. Agendas", "3. Nos conectamos", "4. Recibes grabación"].map((step, i) => (
            <React.Fragment key={step}>
              {i > 0 && <span className="text-border hidden sm:inline">—</span>}
              <span>{step}</span>
            </React.Fragment>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;

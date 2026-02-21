import React from "react";
import { motion } from "framer-motion";
import {
  Search,
  Megaphone,
  Target,
  Check,
  ArrowRight,
  Users,
  CalendarCheck,
  Video,
  Mail,
  LucideIcon,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { serviceSelection } from "@/hooks/useServiceSelection";

/* ───────────────────────── helpers ───────────────────────── */

const scrollToContact = (serviceName: string) => {
  serviceSelection.set(serviceName);
  document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
};

/* ─────────────── Segmento 1 — Crecimiento Integral ─────────────── */

const growthFeatures = [
  "Captamos prospectos desde múltiples canales",
  "Integramos canales de adquisición en una sola plataforma",
  "Automatizamos seguimiento",
  "Organizamos tu base de datos",
  "Medimos ventas reales",
  "Escalamos con control",
];

const GrowthSystemCard: React.FC = () => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="w-full"
  >
    {/* outer glow border */}
    <div className="relative rounded-2xl p-[1px] bg-gradient-to-br from-primary via-primary/40 to-violet-500/60">
      <div className="relative bg-card/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 overflow-hidden">
        {/* decorative blobs */}
        <div className="absolute -top-24 -right-24 w-72 h-72 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-56 h-56 bg-violet-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col gap-8">
          {/* badge + title */}
          <div>
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
              Servicio Principal
            </Badge>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              Gestión de Crecimiento Integral
            </h3>
            <p className="text-muted-foreground max-w-2xl leading-relaxed">
              Implementamos un sistema completo para atraer clientes, convertirlos y hacer seguimiento automático.
              <br className="hidden md:block" />
              <span className="font-medium text-foreground"> Publicidad + Automatización + CRM en un solo lugar.</span>
            </p>
          </div>

          {/* feature grid */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
            {growthFeatures.map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                <Check className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                <span>{f}</span>
              </li>
            ))}
          </ul>

          {/* closing statement */}
          <div className="space-y-1">
            <p className="font-semibold text-foreground">
              No es solo hacer anuncios. Es construir una máquina de ventas ordenada.
            </p>
            <p className="text-sm text-muted-foreground">
              Ideal si quiere delegar y crecer con estructura.
            </p>
          </div>

          {/* CTA */}
          <div>
            <Button
              size="lg"
              className="gap-2"
              onClick={() => scrollToContact("Gestión de Crecimiento Integral")}
            >
              Consultar este servicio
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

/* ─────────────── Segmento 2 — Planes Estructurados ─────────────── */

interface Plan {
  icon: LucideIcon;
  title: string;
  description: string;
}

const plans: Plan[] = [
  {
    icon: Search,
    title: "SEO",
    description: "Posicionamos tu negocio en Google para que te encuentren cuando ya están buscando.",
  },
  {
    icon: Megaphone,
    title: "Meta Ads",
    description: "Campañas en Facebook e Instagram enfocadas en generar clientes reales.",
  },
  {
    icon: Target,
    title: "Google Ads",
    description: "Publicidad directa para captar personas con intención de compra.",
  },
];

const StructuredPlansGrid: React.FC = () => (
  <div className="space-y-8">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
        Planes para necesidades específicas
      </h3>
      <p className="text-muted-foreground text-sm max-w-xl">
        Soluciones concretas si necesita trabajar un área puntual.
      </p>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {plans.map((plan, i) => {
        const Icon = plan.icon;
        return (
          <motion.div
            key={plan.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group cursor-pointer"
            onClick={() => scrollToContact(plan.title)}
          >
            <div className="relative h-full bg-card/60 backdrop-blur-sm border border-border/50 rounded-2xl p-6 lg:p-8 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10 flex flex-col h-full">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="text-lg font-bold text-foreground mb-2">{plan.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed flex-grow">
                  {plan.description}
                </p>
                <div className="mt-5 pt-4 border-t border-border/30 flex items-center gap-2 text-primary font-medium opacity-60 group-hover:opacity-100 transition-all duration-300">
                  <span className="text-sm">Consultar</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  </div>
);

/* ─────────────── Segmento 3 — Consultoría Estratégica ─────────────── */

const consultingAudience = [
  "Freelancers que gestionan campañas",
  "Emprendedores que quieren aprender a pautar",
  "Personas que están iniciando en publicidad digital",
];

const consultingTopics = [
  "Revisamos tus campañas actuales",
  "Detectamos errores y oportunidades",
  "Ajustamos segmentación y presupuesto",
  "Configuramos medición correctamente",
  "Resolvemos problemas en vivo",
  "Te llevas recomendaciones claras",
];

const consultingSteps: { icon: LucideIcon; label: string }[] = [
  { icon: Mail, label: "Eliges tu pack" },
  { icon: CalendarCheck, label: "Agendas día y hora" },
  { icon: Video, label: "Nos conectamos por Google Meet" },
  { icon: Users, label: "Recibes la grabación" },
];

const ConsultingCard: React.FC = () => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="w-full"
  >
    <div className="relative bg-card/60 backdrop-blur-sm border border-violet-500/20 rounded-2xl p-8 md:p-12 overflow-hidden">
      {/* accent blobs */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-violet-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 space-y-8">
        {/* header */}
        <div>
          <Badge variant="secondary" className="mb-4 bg-violet-500/10 text-violet-400 border-violet-500/20 hover:bg-violet-500/20">
            Mentoría
          </Badge>
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            Consultoría en Meta y Google Ads
          </h3>
          <p className="text-muted-foreground max-w-2xl leading-relaxed">
            Sesiones personalizadas para revisar tu cuenta, detectar errores y darte un plan claro de acción.
          </p>
          <p className="text-muted-foreground mt-2">
            En una sesión trabajamos directamente sobre tu negocio o tus campañas.
          </p>
        </div>

        {/* two-column layout on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* left: audience + topics */}
          <div className="space-y-6">
            <div>
              <p className="text-sm font-semibold text-foreground mb-3">¿Para quién es?</p>
              <ul className="space-y-2">
                {consultingAudience.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 mt-0.5 text-violet-400 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-sm font-semibold text-foreground mb-3">¿Qué trabajamos en la sesión?</p>
              <ul className="space-y-2">
                {consultingTopics.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="text-violet-400 shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* right: how it works */}
          <div>
            <p className="text-sm font-semibold text-foreground mb-4">¿Cómo funciona?</p>
            <div className="space-y-4">
              {consultingSteps.map((step, i) => {
                const StepIcon = step.icon;
                return (
                  <div key={step.label} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-violet-500/10 flex items-center justify-center shrink-0">
                      <StepIcon className="w-5 h-5 text-violet-400" />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-violet-400">{i + 1}.</span>
                      <span className="text-sm text-muted-foreground">{step.label}</span>
                    </div>
                  </div>
                );
              })}
            </div>
            <p className="mt-6 text-sm font-semibold text-foreground">
              Simple. Directo. Sin vueltas.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div>
          <Button
            variant="outline"
            size="lg"
            className="gap-2 border-violet-500/30 text-violet-400 hover:bg-violet-500/10 hover:text-violet-300 hover:border-violet-500/50"
            onClick={() => scrollToContact("Consultoría Estratégica")}
          >
            Agendar consultoría
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  </motion.div>
);

/* ─────────────── Main Section ─────────────── */

const Services: React.FC = () => {
  return (
    <section id="servicios" className="section-padding relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10 space-y-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            Cómo puedo <span className="text-gradient">ayudarte</span>
          </h2>
        </motion.div>

        {/* Segmento 1 */}
        <GrowthSystemCard />

        {/* Segmento 2 */}
        <StructuredPlansGrid />

        {/* Segmento 3 */}
        <ConsultingCard />
      </div>
    </section>
  );
};

export default Services;

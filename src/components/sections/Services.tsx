import React from "react";
import { motion } from "framer-motion";
import {
  Search,
  Megaphone,
  Target,
  Check,
  ArrowRight,
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
    <div className="relative rounded-2xl p-[1px] bg-gradient-to-br from-primary via-primary/40 to-violet-500/60">
      <div className="relative bg-card/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-72 h-72 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-56 h-56 bg-violet-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col gap-8">
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

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
            {growthFeatures.map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                <Check className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                <span>{f}</span>
              </li>
            ))}
          </ul>

          <div className="space-y-1">
            <p className="font-semibold text-foreground">
              No es solo hacer anuncios. Es construir una máquina de ventas ordenada.
            </p>
            <p className="text-sm text-muted-foreground">
              Ideal si quieres delegar y crecer con estructura.
            </p>
          </div>

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

/* ─────────────── Segmento 2 — Publicidad por Canal ─────────────── */

interface Plan {
  icon: LucideIcon;
  title: string;
  description: string;
}

const plans: Plan[] = [
  {
    icon: Search,
    title: "SEO",
    description: "Para que te encuentren en Google cuando ya están buscando.",
  },
  {
    icon: Megaphone,
    title: "Meta Ads",
    description: "Clientes desde Facebook e Instagram con campañas enfocadas en resultados.",
  },
  {
    icon: Target,
    title: "Google Ads",
    description: "Personas con intención de compra. Publicidad directa que convierte.",
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
        Soluciones por canal
      </h3>
      <p className="text-muted-foreground text-sm max-w-xl">
        ¿Necesitas potenciar un área específica? Elige el canal que mejor se adapte a tu negocio.
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
            <div className="card-interactive relative h-full bg-card/60 backdrop-blur-sm border border-border/50 rounded-2xl p-6 lg:p-8 hover:border-primary/30 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

              <div className="relative z-10 flex flex-col h-full">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="text-lg font-bold text-foreground mb-2">{plan.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed flex-grow">
                  {plan.description}
                </p>
                <div className="mt-5 pt-4 border-t border-border/30 flex items-center gap-2 text-primary font-medium group-hover:translate-x-1 transition-all duration-300">
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



const packs = [
  { name: "Individual", hours: "1 hora", price: "$130.000", usd: "~$50 USD" },
  { name: "Platinum", hours: "4 horas", price: "$440.000", usd: "~$150 USD", popular: true },
  { name: "Gold", hours: "8 horas", price: "$720.000", usd: "~$300 USD" },
];

const ConsultingSection: React.FC = () => (
  <div id="consultoria" className="space-y-12">
    {/* Header */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Badge variant="secondary" className="mb-4 bg-violet-500/10 text-violet-400 border-violet-500/20 hover:bg-violet-500/20">
        Mentoría
      </Badge>
      <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
        Consultoría Estratégica
      </h3>
      <p className="text-muted-foreground max-w-2xl leading-relaxed">
        Asesorías personalizadas en Meta Ads y Google Ads. En 1 hora te ayudamos con todos los
        problemas que puedas tener con tus cuentas publicitarias.
      </p>
    </motion.div>


    {/* Packs de asesoría */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.25 }}
    >
      <p className="text-lg font-semibold text-foreground mb-6">Selecciona tu pack</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {packs.map((pack, i) => (
          <motion.div
            key={pack.name}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
            className="group relative"
          >
            <div className={`relative h-full rounded-2xl p-[1px] transition-all duration-300 ${
              pack.popular
                ? "bg-gradient-to-br from-violet-500 via-violet-400/60 to-primary/60 shadow-lg shadow-violet-500/10"
                : "bg-border/50 hover:bg-gradient-to-br hover:from-violet-500/30 hover:to-primary/30"
            }`}>
              <div className="relative bg-card rounded-2xl p-6 h-full flex flex-col overflow-hidden">
                {pack.popular && (
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-violet-500/20 text-violet-400 border-violet-500/30 text-[10px]">
                      Más popular
                    </Badge>
                  </div>
                )}
                <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-violet-500/5 rounded-full blur-2xl pointer-events-none" />

                <h4 className="text-xl font-bold text-foreground mb-1">{pack.name}</h4>
                <p className="text-sm text-violet-400 font-medium mb-4">{pack.hours} de asesoría</p>

                <ul className="space-y-2 mb-6 flex-grow">
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="w-3.5 h-3.5 text-violet-400 shrink-0" />
                    Plantillas y recursos de ayuda
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="w-3.5 h-3.5 text-violet-400 shrink-0" />
                    Especialista en Meta y Google Ads
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="w-3.5 h-3.5 text-violet-400 shrink-0" />
                    Grabación de la sesión
                  </li>
                </ul>

                <div className="mb-5">
                  <p className="text-2xl font-bold text-foreground">{pack.price}</p>
                  <p className="text-xs text-muted-foreground">{pack.usd} 🇺🇸</p>
                </div>

                <Button
                  variant={pack.popular ? "default" : "outline"}
                  className={`w-full gap-2 ${
                    pack.popular
                      ? ""
                      : "border-violet-500/30 text-violet-400 hover:bg-violet-500/10 hover:text-violet-300 hover:border-violet-500/50"
                  }`}
                  onClick={() => {
                    window.open(
                      `https://wa.me/573246875354?text=${encodeURIComponent(
                        `Hola, me interesa el pack ${pack.name} de consultoría.`
                      )}`,
                      "_blank"
                    );
                  }}
                >
                  Quiero agendar
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>

    {/* Inline steps + CTA */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="flex flex-col items-center gap-6"
    >
      <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-muted-foreground">
        <span className="px-3 py-1.5 rounded-full bg-violet-500/10 text-violet-400 font-medium">1. Elige tu pack</span>
        <ArrowRight className="w-4 h-4 text-violet-400/50 hidden sm:block" />
        <span className="px-3 py-1.5 rounded-full bg-violet-500/10 text-violet-400 font-medium">2. Agendas</span>
        <ArrowRight className="w-4 h-4 text-violet-400/50 hidden sm:block" />
        <span className="px-3 py-1.5 rounded-full bg-violet-500/10 text-violet-400 font-medium">3. Nos conectamos</span>
        <ArrowRight className="w-4 h-4 text-violet-400/50 hidden sm:block" />
        <span className="px-3 py-1.5 rounded-full bg-violet-500/10 text-violet-400 font-medium">4. Recibes grabación</span>
      </div>
      <p className="text-sm font-semibold text-foreground">Simple. Directo.</p>
    </motion.div>

    {/* CTA */}
    <div className="text-center">
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
);

/* ─────────────── Main Section ─────────────── */

const Services: React.FC = () => {
  return (
    <section id="servicios" className="section-padding relative overflow-hidden">
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
            Cómo podemos <span className="text-gradient">trabajar juntos</span>
          </h2>
        </motion.div>

        <GrowthSystemCard />
        <StructuredPlansGrid />
        <ConsultingSection />
      </div>
    </section>
  );
};

export default Services;

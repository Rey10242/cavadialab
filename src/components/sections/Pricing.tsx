import React from "react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import CTAButton from "@/components/CTAButton";
import { trackPlanCardClick } from "@/lib/gtag";

const plans = [
  {
    name: "Base de Escalamiento",
    price: "$2.000.000/mes",
    features: [
      "Landing/arquitectura digital lista para captar.",
      "1 canal de tráfico (Google o Meta) + medición GA4/GTM.",
      "Automatizaciones esenciales en WhatsApp.",
      "Reporte mensual con quick wins.",
    ],
    cta: "Agenda tu diagnóstico gratis",
    highlighted: false,
  },
  {
    name: "Máquina de Ventas",
    price: "$3.000.000/mes",
    features: [
      "Sistema completo de captación (Google + Meta + remarketing).",
      "Automatizaciones avanzadas 24/7 (CRM, scoring, nurtures).",
      "SEO on-page + optimización semanal por datos.",
      "Dashboard ejecutivo (ROAS, CPL, ventas).",
    ],
    cta: "Quiero mi máquina de ventas",
    highlighted: true,
  },
  {
    name: "Escalamiento 360 Premium",
    price: "$5.000.000/mes",
    features: [
      "Growth + CRO + SEO continuo + Tráfico Pago.",
      "Dashboards personalizados por área (dirección, ventas, marketing).",
      "Testing A/B constante y análisis predictivo con IA.",
      "Sesiones estratégicas quincenales.",
    ],
    cta: "Escala mi negocio ahora",
    highlighted: false,
  },
];

const Pricing: React.FC = () => {
  return (
  <section id="paquetes" className="border-t border-border/60 scroll-mt-24 section-padding">
      <div className="mx-auto max-w-6xl">
        <header className="mb-16 text-center animate-fade-in">
          <h2 className="heading-secondary mb-6">Paquetes consultor marketing Cartagena</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-muted-foreground">Automatización ventas WhatsApp y Google Ads transparente. Sin permanencia, cancela cuando quieras.</p>
        </header>
        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((p, index) => (
            <Card 
              key={p.name} 
              className={`relative flex h-full flex-col card-interactive rounded-2xl ${p.highlighted ? 'border-primary ring-2 ring-primary/30 card-elevated scale-105' : ''}`}
              style={{animationDelay: `${index * 150}ms`}}
            >
              {p.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-cta text-primary-foreground px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                    Más Popular
                  </span>
                </div>
              )}
              <CardHeader className="pb-4">
                <CardTitle className="text-center">
                  <div className="text-2xl font-bold mb-2">{p.name}</div>
                  <div className="text-3xl font-extrabold text-primary">{p.price}</div>
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1 px-6">
                <ul className="space-y-4">
                  {p.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                      </div>
                      <span className="text-sm text-foreground/90 leading-relaxed flex-1">{f}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="mt-auto pt-6">
                <CTAButton 
                  className={`w-full ${p.highlighted ? 'btn-primary-glow' : ''}`}
                  onClick={() => trackPlanCardClick(p.name, p.price)}
                >
                  {p.cta}
                </CTAButton>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;

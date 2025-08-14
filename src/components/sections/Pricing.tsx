import React from "react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import CTAButton from "@/components/CTAButton";

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
  <section id="paquetes" className="border-t border-border/60 scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <header className="mb-10 text-center animate-fade-in">
          <h2 className="text-3xl font-bold">Planes de escalamiento</h2>
          <p className="mt-2 text-muted-foreground">Transparente y sin permanencia. Cancela cuando quieras.</p>
        </header>
        <div className="grid items-stretch gap-6 md:grid-cols-3">
          {plans.map((p) => (
            <Card key={p.name} className={`relative flex h-full flex-col hover-lift ${p.highlighted ? 'border-primary ring-1 ring-primary/30 card-elevated' : ''}`}>
              <CardHeader>
                <CardTitle className="flex items-baseline justify-between">
                  <span>{p.name}</span>
                  {p.highlighted && (
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">Recomendado</span>
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="mb-4 text-3xl font-extrabold">{p.price}</div>
                <ul className="space-y-2 text-sm text-foreground/90">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-primary/80" />
                      {f}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="mt-auto">
                <CTAButton className="w-full">{p.cta}</CTAButton>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;

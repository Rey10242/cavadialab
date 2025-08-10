import React from "react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import CTAButton from "@/components/CTAButton";

const plans = [
  {
    name: "Base de Escalamiento",
    price: "$2.000.000/mes",
    features: [
      "Arquitectura digital básica",
      "Campañas iniciales y medición",
      "Automatizaciones esenciales",
    ],
    highlighted: false,
  },
  {
    name: "Máquina de Ventas",
    price: "$3.000.000/mes",
    features: [
      "Sistema completo de captación",
      "Automatizaciones avanzadas 24/7",
      "Optimización semanal por datos",
    ],
    highlighted: true,
  },
  {
    name: "Escalamiento 360 Premium",
    price: "$5.000.000/mes",
    features: [
      "Growth + CRO + SEO + Tráfico Pago",
      "Dashboards ejecutivos personalizados",
      "Tests continuos de escalamiento",
    ],
    highlighted: false,
  },
];

const Pricing: React.FC = () => {
  return (
    <section id="paquetes" className="border-t border-border/60">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <header className="mb-10 text-center">
          <h2 className="text-3xl font-bold">Planes de escalamiento</h2>
          <p className="mt-2 text-muted-foreground">Elige el plan que mejor se ajusta a tu momento.</p>
        </header>
        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((p) => (
            <Card key={p.name} className={`relative ${p.highlighted ? 'border-primary ring-1 ring-primary/30 card-elevated' : ''}`}>
              <CardHeader>
                <CardTitle className="flex items-baseline justify-between">
                  <span>{p.name}</span>
                  {p.highlighted && (
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">Recomendado</span>
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent>
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
              <CardFooter>
                <CTAButton className="w-full" />
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;

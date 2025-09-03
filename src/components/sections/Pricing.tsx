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
          <h2 className="heading-secondary mb-6">Invierte en crecimiento, no en promesas</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-muted-foreground">Elige el plan que mejor se adapte a tu objetivo y escala cuando lo necesites. Sin contratos de permanencia.</p>
        </header>
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {plans.map((p, index) => (
            <Card 
              key={p.name} 
              className={`relative flex h-full flex-col card-interactive rounded-2xl ${p.highlighted ? 'border-primary ring-1 sm:ring-2 ring-primary/30 card-elevated sm:scale-105' : ''}`}
              style={{animationDelay: `${index * 150}ms`}}
            >
              {p.highlighted && (
                <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-cta text-primary-foreground px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold shadow-lg">
                    Más Popular
                  </span>
                </div>
              )}
              <CardHeader className="pb-3 sm:pb-4">
                <CardTitle className="text-center">
                  <div className="text-lg sm:text-xl lg:text-2xl font-bold mb-2">{p.name}</div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-primary">{p.price}</div>
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1 px-4 sm:px-6">
                <ul className="space-y-3 sm:space-y-4">
                  {p.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2 sm:gap-3">
                      <div className="w-4 sm:w-5 h-4 sm:h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-primary" />
                      </div>
                      <span className="text-xs sm:text-sm text-foreground/90 leading-relaxed flex-1">{f}</span>
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

        {/* Guarantee Section */}
        <div className="mt-16 animate-fade-in" style={{animationDelay: '600ms'}}>
          <div className="relative rounded-2xl border-2 border-success/30 bg-gradient-to-br from-success/5 to-success/10 p-8 lg:p-12 text-center">
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
              <div className="w-12 h-12 rounded-full bg-success flex items-center justify-center shadow-lg">
                <svg className="w-6 h-6 text-success-foreground" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
              </div>
            </div>
            <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-success">Riesgo cero: garantía de 90 días</h3>
            <p className="mx-auto max-w-3xl text-lg lg:text-xl leading-relaxed text-foreground/90">
              Si en 90 días no aumentamos tus ventas digitales, te devolvemos el valor de la gestión del último mes. <span className="font-semibold text-success">Sin letras pequeñas.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

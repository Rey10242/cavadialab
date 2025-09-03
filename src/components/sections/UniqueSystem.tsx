import React, { useEffect, useRef, useState } from "react";
import { Target, Workflow, TrendingUp, CheckCircle, Zap } from "lucide-react";

const systemSteps = [
  { 
    icon: Target, 
    phase: "DIAGNÓSTICO",
    title: "Análisis Estratégico CavadiaLab", 
    subtitle: "Tu mapa de crecimiento personalizado",
    description: "Auditoría completa de tu negocio digital: detectamos fugas de conversión, oportunidades ocultas y diseñamos tu propuesta de valor única.",
    deliverables: ["Auditoría de conversiones", "Análisis competitivo", "Estrategia go-to-market"],
    time: "3-5 días"
  },
  { 
    icon: Workflow, 
    phase: "IMPLEMENTACIÓN",
    title: "Motor de Automatización CavadiaLab", 
    subtitle: "Sistema que trabaja 24/7 por ti",
    description: "Construimos tu arquitectura digital: web optimizada, flujos automatizados de WhatsApp, CRM inteligente y campañas de tráfico pago que convierten.",
    deliverables: ["Automatizaciones WhatsApp", "CRM configurado", "Campañas optimizadas"],
    time: "7-14 días"
  },
  { 
    icon: TrendingUp, 
    phase: "ESCALAMIENTO",
    title: "Sistema de Optimización Continua", 
    subtitle: "Crecimiento basado en datos reales",
    description: "Medición inteligente y mejora constante: dashboards en tiempo real, A/B testing automatizado y optimización basada en métricas que importan.",
    deliverables: ["Dashboard personalizado", "Tests automáticos", "Reportes semanales"],
    time: "Proceso continuo"
  },
];

const methodology = {
  name: "Metodología CavadiaLab™",
  tagline: "El sistema que otras agencias intentan copiar",
  uniquePoints: [
    "Framework propietario basado en +200 casos de éxito",
    "Automatizaciones WhatsApp exclusivas con IA",
    "Dashboard personalizado con métricas clave de tu industria",
    "Proceso de optimización continua único en el mercado"
  ]
};

const UniqueSystem: React.FC = () => {
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            systemSteps.forEach((_, index) => {
              setTimeout(() => {
                setVisibleSteps(prev => [...prev, index]);
              }, index * 300);
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="sistema-unico" 
      className="border-t border-border/60 scroll-mt-24 section-padding bg-gradient-to-br from-background via-primary/5 to-background relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(var(--primary-rgb),0.1),transparent_70%)]"></div>
      
      <div className="mx-auto max-w-7xl relative">
        {/* Header */}
        <header className="mx-auto mb-16 max-w-4xl text-center">
          <div className="inline-flex items-center rounded-full bg-primary/10 px-6 py-3 text-sm font-bold text-primary border border-primary/20 mb-6 scroll-reveal">
            <Zap className="w-4 h-4 mr-2 animate-pulse" />
            {methodology.tagline}
          </div>
          <h2 className="heading-secondary mb-6 animate-fade-in">
            <span className="bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
              {methodology.name}
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto rounded-full mb-8 animate-fade-in"></div>
          <p className="text-xl leading-relaxed text-muted-foreground animate-fade-in">
            No es otro proceso genérico. Es un <span className="text-foreground font-semibold">sistema exclusivo</span> que hemos perfeccionado durante 5+ años y más de 200 casos de éxito.
          </p>
        </header>

        {/* Unique Points */}
        <div className="mb-16 mx-auto max-w-4xl">
          <div className="grid gap-4 md:grid-cols-2">
            {methodology.uniquePoints.map((point, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 rounded-xl bg-card/60 border border-border/40 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                <span className="text-foreground/90 text-sm leading-relaxed">{point}</span>
              </div>
            ))}
          </div>
        </div>

        {/* System Steps */}
        <div className="relative">
          {/* Progress Line */}
          <div className="hidden lg:block absolute top-32 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-border to-transparent">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-glow opacity-30"></div>
          </div>
          
          <div className="grid gap-8 lg:gap-6 lg:grid-cols-3">
            {systemSteps.map((step, index) => (
              <div key={step.title} className="relative">
                {/* Timeline Node */}
                <div className="hidden lg:flex absolute -top-16 left-1/2 transform -translate-x-1/2 z-10">
                  <div className={`w-8 h-8 rounded-full border-4 transition-all duration-500 ${
                    visibleSteps.includes(index) 
                      ? 'bg-primary border-primary shadow-lg shadow-primary/50' 
                      : 'bg-background border-border'
                  }`}>
                    {visibleSteps.includes(index) && (
                      <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75"></div>
                    )}
                  </div>
                </div>

                {/* Step Card */}
                <article 
                  className={`relative group cursor-pointer transition-all duration-500 ${
                    visibleSteps.includes(index) ? 'animate-fade-in' : 'opacity-0 translate-y-10'
                  } ${activeStep === index ? 'scale-105' : ''}`}
                  style={{ animationDelay: `${index * 300}ms` }}
                  onMouseEnter={() => setActiveStep(index)}
                  onMouseLeave={() => setActiveStep(null)}
                >
                  <div className="relative bg-card/80 backdrop-blur-sm rounded-3xl border border-border/50 p-6 h-full group-hover:border-primary/30 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-primary/10">
                    {/* Hover Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary-glow/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    <div className="relative z-10">
                      {/* Phase Badge */}
                      <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold mb-4">
                        {step.phase}
                      </div>

                      {/* Icon */}
                      <div className="mb-6 relative">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-primary-glow/20 flex items-center justify-center group-hover:from-primary/20 group-hover:to-primary-glow/30 transition-all duration-300">
                          <step.icon className="text-primary w-8 h-8" />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="space-y-4">
                        <div>
                          <h3 className="heading-tertiary mb-2 group-hover:text-primary transition-colors duration-300">
                            {step.title}
                          </h3>
                          <p className="text-sm font-semibold text-primary/80 mb-3">
                            {step.subtitle}
                          </p>
                        </div>
                        
                        <p className="text-muted-foreground leading-relaxed text-sm mb-4">
                          {step.description}
                        </p>

                        {/* Deliverables */}
                        <div className="space-y-2">
                          <p className="text-xs font-semibold text-foreground/80 uppercase tracking-wider">Entregables:</p>
                          <ul className="space-y-1">
                            {step.deliverables.map((deliverable, idx) => (
                              <li key={idx} className="flex items-center gap-2 text-xs text-muted-foreground">
                                <div className="w-1 h-1 rounded-full bg-primary"></div>
                                {deliverable}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Timeline */}
                        <div className="flex items-center gap-2 pt-2 border-t border-border/30">
                          <div className="w-3 h-3 rounded-full bg-primary/20 flex items-center justify-center">
                            <div className="w-1 h-1 rounded-full bg-primary"></div>
                          </div>
                          <span className="text-xs font-medium text-primary">{step.time}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center animate-fade-in" style={{animationDelay: '1000ms'}}>
          <div className="inline-block relative">
            <div className="relative rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 to-primary-glow/10 p-6 backdrop-blur-sm">
              <div className="flex items-center justify-center gap-3 mb-2">
                <Zap className="w-5 h-5 text-primary animate-pulse" />
                <span className="font-bold text-primary">Sistema Exclusivo</span>
              </div>
              <p className="text-foreground/90 font-medium">
                Esto es lo que nos diferencia del 99% de las agencias del mercado.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UniqueSystem;
import React, { useEffect, useRef, useState } from "react";
import { Target, Workflow, TrendingUp, ArrowRight } from "lucide-react";

const journeySteps = [
  { 
    icon: Target, 
    title: "Estrategia", 
    subtitle: "El mapa de tu crecimiento",
    desc: "Diseñamos el camino que guiará tu éxito: investigación profunda, propuesta de valor única y estrategia go-to-market personalizada.",
    number: "01"
  },
  { 
    icon: Workflow, 
    title: "Automatización", 
    subtitle: "El motor que nunca duerme",
    desc: "Creamos sistemas inteligentes que trabajan 24/7: flujos automatizados, scoring predictivo y CRM con alertas en tiempo real.",
    number: "02"
  },
  { 
    icon: TrendingUp, 
    title: "Escalamiento", 
    subtitle: "Datos que impulsan decisiones",
    desc: "Transformamos información en crecimiento: A/B testing continuo, dashboards inteligentes y optimización basada en datos reales.",
    number: "03"
  },
];

const ValueProp: React.FC = () => {
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);
  const [activeStep, setActiveStep] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            journeySteps.forEach((_, index) => {
              setTimeout(() => {
                setVisibleSteps(prev => [...prev, index]);
              }, index * 200);
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
      id="servicios" 
      className="border-t border-border/60 scroll-mt-24 section-padding bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-glow rounded-full blur-3xl"></div>
      </div>

      <div className="mx-auto max-w-7xl relative">
        <header className="mx-auto mb-20 max-w-4xl text-center">
          <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary border border-primary/20 mb-6 animate-fade-in">
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Sistema Integral
          </div>
          <h2 className="heading-secondary mb-6 animate-fade-in" style={{animationDelay: '100ms'}}>
            Tu Viaje Hacia el Crecimiento Digital
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto rounded-full mb-8 animate-fade-in" style={{animationDelay: '200ms'}}></div>
          <p className="text-xl leading-relaxed text-muted-foreground animate-fade-in" style={{animationDelay: '300ms'}}>
            Cada fase de nuestro proceso está diseñada para <span className="text-foreground font-semibold">maximizar tu ROI</span> y crear un crecimiento sostenible que se acelera con el tiempo.
          </p>
        </header>

        {/* Journey Timeline */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-border to-transparent">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-glow opacity-30 animate-pulse"></div>
          </div>
          
          {/* Animated Progress Line */}
          <div className="hidden lg:block absolute top-24 left-0 h-0.5 bg-gradient-to-r from-primary to-primary-glow transition-all duration-2000 ease-out"
               style={{width: `${(visibleSteps.length / journeySteps.length) * 100}%`}}>
          </div>

          <div className="grid gap-8 lg:gap-4 lg:grid-cols-3">
            {journeySteps.map((step, index) => (
              <div key={step.title} className="relative">
                {/* Step Container */}
                <article 
                  className={`relative group cursor-pointer transition-all duration-500 ${
                    visibleSteps.includes(index) ? 'animate-fade-in' : 'opacity-0 translate-y-10'
                  } ${activeStep === index ? 'scale-105' : ''}`}
                  style={{ animationDelay: `${index * 200}ms` }}
                  onMouseEnter={() => setActiveStep(index)}
                  onMouseLeave={() => setActiveStep(null)}
                >
                  {/* Timeline Node */}
                  <div className="hidden lg:flex absolute -top-12 left-1/2 transform -translate-x-1/2 z-10">
                    <div className={`w-6 h-6 rounded-full border-4 transition-all duration-300 ${
                      visibleSteps.includes(index) 
                        ? 'bg-primary border-primary shadow-lg shadow-primary/50' 
                        : 'bg-background border-border'
                    }`}>
                      {visibleSteps.includes(index) && (
                        <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75"></div>
                      )}
                    </div>
                  </div>

                  {/* Step Number - Mobile */}
                  <div className="lg:hidden flex items-center mb-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-primary-glow/20 flex items-center justify-center mr-4">
                      <span className="text-primary font-bold text-sm">{step.number}</span>
                    </div>
                    <div className="flex-1 h-px bg-gradient-to-r from-primary/50 to-transparent"></div>
                  </div>

                  {/* Card */}
                  <div className="relative bg-card/80 backdrop-blur-sm rounded-3xl border border-border/50 p-8 h-full flex flex-col group-hover:border-primary/30 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-primary/10">
                    {/* Gradient Background on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary-glow/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Content */}
                    <div className="relative z-10">
                      {/* Icon */}
                      <div className="mb-6 relative">
                        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/10 to-primary-glow/20 flex items-center justify-center group-hover:from-primary/20 group-hover:to-primary-glow/30 transition-all duration-300 group-hover:scale-110">
                          <step.icon className="text-primary w-10 h-10 group-hover:scale-110 transition-transform duration-300" />
                        </div>
                        <div className="absolute -inset-3 bg-gradient-to-r from-primary/20 to-primary-glow/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>

                      {/* Text Content */}
                      <div className="space-y-4 flex-1">
                        <div>
                          <h3 className="heading-tertiary mb-2 group-hover:text-primary transition-colors duration-300">
                            {step.title}
                          </h3>
                          <p className="text-sm font-semibold text-primary/80 uppercase tracking-wider">
                            {step.subtitle}
                          </p>
                        </div>
                        <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                          {step.desc}
                        </p>
                      </div>

                      {/* Call to Action */}
                      <div className="mt-6 pt-4 border-t border-border/50 group-hover:border-primary/20 transition-colors duration-300">
                        <div className="flex items-center text-primary group-hover:text-primary-glow transition-colors duration-300">
                          <span className="text-sm font-medium">Conoce más detalles</span>
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                        </div>
                      </div>
                    </div>
                  </div>
                </article>

                {/* Connection Arrow - Mobile */}
                {index < journeySteps.length - 1 && (
                  <div className="lg:hidden flex justify-center my-6">
                    <ArrowRight className="w-6 h-6 text-primary/50" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center animate-fade-in" style={{animationDelay: '800ms'}}>
          <p className="text-lg text-muted-foreground mb-4">
            ¿Listo para comenzar tu transformación digital?
          </p>
          <div className="inline-flex items-center gap-2 text-primary font-semibold group cursor-pointer">
            <span>Descubre cómo podemos acelerar tu crecimiento</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProp;

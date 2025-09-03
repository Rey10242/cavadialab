import React, { useEffect, useRef, useState } from "react";
import { Award, BarChart3, Users, Clock, TrendingUp, Star, Quote } from "lucide-react";

const credentials = [
  { icon: Award, text: "Growth Marketing Expert certificado" },
  { icon: BarChart3, text: "Google Analytics & Ads Specialist" },
  { icon: Users, text: "+200 empresas escaladas exitosamente" },
  { icon: Clock, text: "5+ años especializándome en ROI" },
];

const keyMetrics = [
  { number: "2.3M", label: "en ventas generadas", suffix: "€", color: "primary" },
  { number: "480", label: "ROAS promedio", suffix: "%", color: "success" },
  { number: "15", label: "días promedio para ver resultados", suffix: "", color: "primary-glow" },
  { number: "200", label: "empresas transformadas", suffix: "+", color: "primary" },
];

const caseStudies = [
  {
    sector: "E-commerce Moda",
    company: "Boutique Online",
    quote: "En 3 meses pasamos de €5K a €28K mensuales. Su sistema de automatización de WhatsApp es increíble.",
    author: "María González, CEO",
    metric: "460% ROI",
    icon: TrendingUp,
    image: "/public/lovable-uploads/5d075f41-6db3-4ae1-945a-1873f7ff1789.png"
  },
  {
    sector: "SaaS B2B",
    company: "TechSolutions",
    quote: "Triplicamos nuestros leads cualificados y mejoramos la conversión en un 340%. Metodología única.",
    author: "Carlos Ruiz, CMO",
    metric: "340% más leads",
    icon: BarChart3,
    image: "/public/lovable-uploads/f1c15801-958d-41b4-b919-77307a1fbe5d.png"
  },
  {
    sector: "Consultoría",
    company: "Estudio Legal",
    quote: "Automatizó completamente nuestro proceso de captación. Ahora tenemos una máquina de ventas real.",
    author: "Ana Martín, Socia",
    metric: "€15K primer mes",
    icon: Users,
    image: "/public/lovable-uploads/5d075f41-6db3-4ae1-945a-1873f7ff1789.png"
  }
];

const personalStory = {
  title: "Por qué mi enfoque es diferente",
  subtitle: "Mi compromiso es tu crecimiento real, no métricas vanidosas",
  story: "Durante 5+ años he trabajado con más de 200 empresas. He visto lo que funciona y lo que no. Mi metodología no es teoría: es experiencia pura destilada en un sistema que funciona.",
  philosophy: "Mi objetivo no es impresionarte con gráficas bonitas. Es convertirme en tu socio de crecimiento y generar resultados reales que impacten tu cuenta bancaria."
};

const SocialProof: React.FC = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const [activeCase, setActiveCase] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate metrics first
            keyMetrics.forEach((_, index) => {
              setTimeout(() => {
                setVisibleItems(prev => [...prev, index]);
              }, index * 150);
            });
            
            // Then animate case studies
            setTimeout(() => {
              caseStudies.forEach((_, index) => {
                setTimeout(() => {
                  setVisibleItems(prev => [...prev, keyMetrics.length + index]);
                }, index * 200);
              });
            }, 600);
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
      id="prueba-social" 
      className="border-t border-border/60 scroll-mt-24 section-padding bg-gradient-to-br from-primary/5 via-transparent to-background relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_80%,rgba(var(--primary-rgb),0.1),transparent_50%)]"></div>
      
      <div className="mx-auto max-w-7xl relative">
        {/* Header */}
        <header className="mx-auto mb-16 max-w-4xl text-center">
          <div className="inline-flex items-center rounded-full bg-success/10 px-6 py-3 text-sm font-bold text-success border border-success/20 mb-6 scroll-reveal">
            <Award className="w-4 h-4 mr-2" />
            Experiencia Comprobada
          </div>
          <h2 className="heading-secondary mb-6 animate-fade-in">
            <span className="bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
              Resultados que hablan por
            </span>
            <span className="text-gradient"> sí solos</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto rounded-full mb-8 animate-fade-in"></div>
          <p className="text-xl leading-relaxed text-muted-foreground animate-fade-in">
            No soy una agencia más. Soy <span className="text-foreground font-semibold">Reynaldo Montalvo</span>, y estos son mis resultados reales con empresas reales.
          </p>
        </header>

        {/* Key Metrics */}
        <div className="mb-16">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {keyMetrics.map((metric, index) => (
              <div
                key={metric.label}
                className={`relative group transition-all duration-500 ${
                  visibleItems.includes(index) ? 'animate-scale-in' : 'opacity-0 scale-90'
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative rounded-2xl border border-border/50 bg-card/80 backdrop-blur-sm p-6 text-center group-hover:border-primary/30 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-primary/10">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary-glow/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="text-3xl lg:text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                      {metric.suffix === "€" && metric.suffix}{metric.number}{metric.suffix !== "€" && metric.suffix}
                    </div>
                    <div className="text-sm text-muted-foreground font-medium leading-tight">{metric.label}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Case Studies */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground">Casos de éxito reales</h3>
          <div className="grid gap-8 lg:grid-cols-3">
            {caseStudies.map((study, index) => (
              <div
                key={study.company}
                className={`relative group cursor-pointer transition-all duration-500 ${
                  visibleItems.includes(keyMetrics.length + index) ? 'animate-fade-in' : 'opacity-0 translate-y-10'
                } ${activeCase === index ? 'scale-105' : ''}`}
                style={{ animationDelay: `${600 + index * 200}ms` }}
                onMouseEnter={() => setActiveCase(index)}
                onMouseLeave={() => setActiveCase(null)}
              >
                <article className="relative bg-card/80 backdrop-blur-sm rounded-3xl border border-border/50 p-6 h-full group-hover:border-primary/30 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-primary/10">
                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary-glow/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    {/* Sector Badge */}
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold mb-4">
                      {study.sector}
                    </div>

                    {/* Quote */}
                    <div className="mb-6">
                      <Quote className="w-8 h-8 text-primary/30 mb-3" />
                      <blockquote className="text-foreground/90 leading-relaxed text-sm italic mb-4">
                        "{study.quote}"
                      </blockquote>
                    </div>

                    {/* Author */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-primary-glow/20 flex items-center justify-center">
                        <study.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-semibold text-foreground text-sm">{study.author}</div>
                        <div className="text-muted-foreground text-xs">{study.company}</div>
                      </div>
                    </div>

                    {/* Metric */}
                    <div className="flex items-center justify-between pt-4 border-t border-border/30">
                      <span className="text-xs font-medium text-muted-foreground">Resultado:</span>
                      <span className="font-bold text-primary text-sm">{study.metric}</span>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>

        {/* Personal Authority */}
        <div className="grid gap-8 lg:grid-cols-2 items-center">
          {/* Credentials */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-6 text-foreground">{personalStory.title}</h3>
              <div className="grid gap-4">
                {credentials.map(({ icon: Icon, text }, index) => (
                  <div
                    key={text}
                    className="flex items-center gap-3 p-4 rounded-xl bg-card/60 border border-border/40 hover:border-primary/30 transition-all duration-300 animate-fade-in"
                    style={{ animationDelay: `${1000 + index * 100}ms` }}
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Icon className="text-primary w-6 h-6" />
                    </div>
                    <span className="text-foreground/90 font-medium">{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Personal Story */}
          <div className="space-y-6">
            <div className="relative rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 to-primary-glow/10 p-6">
              <h4 className="font-bold text-foreground mb-3">{personalStory.subtitle}</h4>
              <p className="text-foreground/90 leading-relaxed text-sm mb-4">
                {personalStory.story}
              </p>
              <div className="pt-4 border-t border-border/30">
                <div className="flex items-center gap-2 mb-2">
                  <Star className="w-4 h-4 text-primary" />
                  <span className="font-semibold text-primary text-sm">Mi compromiso</span>
                </div>
                <p className="text-foreground/80 text-sm leading-relaxed italic">
                  {personalStory.philosophy}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Statement */}
        <div className="mt-16 text-center animate-fade-in" style={{animationDelay: '1400ms'}}>
          <div className="inline-block relative">
            <div className="relative rounded-2xl border border-success/20 bg-gradient-to-br from-success/5 to-success/10 p-6 backdrop-blur-sm">
              <div className="flex items-center justify-center gap-3 mb-2">
                <Award className="w-5 h-5 text-success" />
                <span className="font-bold text-success">Garantía de Resultados</span>
              </div>
              <p className="text-foreground/90 font-medium">
                Resultados <span className="text-success font-bold">reales</span>, con empresas <span className="text-success font-bold">reales</span>. No promesas vacías.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
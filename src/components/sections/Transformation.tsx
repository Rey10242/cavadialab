import React, { useState, useEffect } from "react";
import { ArrowRight, TrendingDown, TrendingUp, AlertCircle, CheckCircle2, Target, Rocket, Zap, BarChart3 } from "lucide-react";

const transformations = [
  {
    before: {
      icon: TrendingDown,
      title: "Ventas inconsistentes",
      description: "Mes bueno, mes malo. Sin predictibilidad en los ingresos.",
      metrics: "€0 - €5,000 al mes"
    },
    after: {
      icon: TrendingUp,
      title: "Crecimiento predecible",
      description: "Sistema que genera leads y ventas de forma constante.",
      metrics: "€15,000+ mensuales"
    }
  },
  {
    before: {
      icon: AlertCircle,
      title: "Dependes solo de ti",
      description: "Si no trabajas, no hay ingresos. Burnout garantizado.",
      metrics: "80h/semana trabajando"
    },
    after: {
      icon: Target,
      title: "Sistema automatizado",
      description: "Tu negocio trabaja 24/7 mientras tú te enfocas en crecer.",
      metrics: "20h/semana estrategia"
    }
  },
  {
    before: {
      icon: BarChart3,
      title: "Marketing a ciegas",
      description: "Gastas en anuncios sin saber qué funciona realmente.",
      metrics: "ROAS desconocido"
    },
    after: {
      icon: Rocket,
      title: "Decisiones basadas en datos",
      description: "Cada euro invertido está respaldado por métricas claras.",
      metrics: "ROAS 4.8x promedio"
    }
  }
];

const Transformation: React.FC = () => {
  const [activeTransformation, setActiveTransformation] = useState<number | null>(null);
  const [visibleItems, setVisibleItems] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleItems(prev => [...prev, index]);
          }
        });
      },
      { threshold: 0.2 }
    );

    const cards = document.querySelectorAll('[data-transformation-index]');
    cards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="transformacion" className="border-t border-border/60 scroll-mt-24 py-16 lg:py-20 relative overflow-hidden">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-destructive/3 via-transparent to-success/8"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(var(--destructive-rgb),0.08),transparent_40%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(var(--success-rgb),0.1),transparent_40%)]"></div>
      
      <div className="mx-auto max-w-6xl relative px-4 sm:px-6 lg:px-8">
        <header className="mx-auto mb-12 max-w-4xl text-center">
          <div className="inline-flex items-center rounded-full bg-gradient-to-r from-destructive/10 via-primary/10 to-success/10 px-6 py-3 text-sm font-medium border border-border/40 mb-8 animate-fade-in backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-destructive animate-pulse"></div>
              <span className="text-destructive font-semibold">ANTES</span>
              <div className="w-8 h-0.5 bg-gradient-to-r from-destructive via-primary to-success rounded-full"></div>
              <span className="text-success font-semibold">DESPUÉS</span>
              <div className="w-3 h-3 rounded-full bg-success animate-pulse"></div>
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 animate-fade-in" style={{animationDelay: '100ms'}}>
            <span className="bg-gradient-to-r from-foreground to-foreground/90 bg-clip-text text-transparent">
              De luchar por cada venta
            </span>
            <br />
            <span className="bg-gradient-to-r from-success via-primary to-success bg-clip-text text-transparent">
              a crecer automáticamente
            </span>
          </h2>

          <div className="w-24 h-0.5 bg-gradient-to-r from-destructive via-primary to-success mx-auto rounded-full mb-6 animate-fade-in" style={{animationDelay: '200ms'}}></div>
          
          <p className="text-lg leading-relaxed text-muted-foreground max-w-3xl mx-auto animate-fade-in" style={{animationDelay: '300ms'}}>
            Esta es la <span className="text-foreground font-bold">transformación real</span> que experimentarás. 
            <span className="text-gradient bg-gradient-to-r from-primary to-success bg-clip-text text-transparent font-semibold"> No es magia, es metodología.</span>
          </p>
        </header>

        {/* Main Comparison Cards */}
        <div className="space-y-12 mb-16">
          {transformations.map((transformation, index) => (
            <div
              key={index}
              data-transformation-index={index}
              className={`relative transition-all duration-700 ${
                visibleItems.includes(index) ? 'animate-fade-in' : 'opacity-0 translate-y-8'
              }`}
              style={{animationDelay: `${400 + index * 200}ms`}}
              onMouseEnter={() => setActiveTransformation(index)}
              onMouseLeave={() => setActiveTransformation(null)}
            >
              {/* Connecting line */}
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-0.5 bg-gradient-to-r from-destructive/20 via-primary/40 to-success/20 hidden lg:block"></div>
              
              <div className="grid lg:grid-cols-3 gap-8 items-center">
                {/* BEFORE Card */}
                <div className="relative group">
                  <div className={`absolute -inset-6 bg-gradient-to-br from-destructive/20 to-destructive/10 rounded-3xl blur-2xl transition-all duration-500 ${
                    activeTransformation === index ? 'opacity-100 scale-105' : 'opacity-40'
                  }`}></div>
                  
                  <div className="relative bg-gradient-to-br from-destructive/8 to-background rounded-2xl border-2 border-destructive/20 p-6 backdrop-blur-sm card-elevated group-hover:border-destructive/40 transition-all duration-300">
                    {/* Problem Badge */}
                    <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-destructive flex items-center justify-center shadow-lg border-2 border-background">
                      <span className="text-destructive-foreground text-xs font-bold">✕</span>
                    </div>

                    <div className="flex items-start gap-4 mb-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-destructive/15 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <transformation.before.icon className="text-destructive w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-destructive transition-colors">
                          {transformation.before.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed text-sm">
                          {transformation.before.description}
                        </p>
                      </div>
                    </div>

                    {/* Metrics */}
                    <div className="bg-destructive/10 rounded-lg p-3 border border-destructive/20">
                      <div className="text-center">
                        <div className="text-xs text-destructive font-semibold mb-1">SITUACIÓN ACTUAL</div>
                        <div className="text-lg font-bold text-destructive">{transformation.before.metrics}</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* VS Badge */}
                <div className="flex justify-center lg:justify-center">
                  <div className="relative group">
                    <div className="relative w-16 h-16 rounded-full bg-gradient-to-r from-primary to-success flex items-center justify-center shadow-xl border-2 border-background group-hover:scale-110 transition-transform duration-300">
                      <div className="text-center">
                        <ArrowRight className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* AFTER Card */}
                <div className="relative group">
                  <div className={`absolute -inset-6 bg-gradient-to-br from-success/20 to-success/10 rounded-3xl blur-2xl transition-all duration-500 ${
                    activeTransformation === index ? 'opacity-100 scale-105' : 'opacity-40'
                  }`}></div>
                  
                  <div className="relative bg-gradient-to-br from-success/8 to-background rounded-2xl border-2 border-success/20 p-6 backdrop-blur-sm card-elevated group-hover:border-success/40 transition-all duration-300">
                    {/* Success Badge */}
                    <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-success flex items-center justify-center shadow-lg border-2 border-background">
                      <CheckCircle2 className="text-success-foreground w-4 h-4" />
                    </div>

                    <div className="flex items-start gap-4 mb-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-success/15 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <transformation.after.icon className="text-success w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-success transition-colors">
                          {transformation.after.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed text-sm">
                          {transformation.after.description}
                        </p>
                      </div>
                    </div>

                    {/* Metrics */}
                    <div className="bg-success/10 rounded-lg p-3 border border-success/20">
                      <div className="text-center">
                        <div className="text-xs text-success font-semibold mb-1">RESULTADO REAL</div>
                        <div className="text-lg font-bold text-success">{transformation.after.metrics}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Compact Timeline & CTA */}
        <div className="mt-12 animate-fade-in" style={{animationDelay: '1000ms'}}>
          <div className="text-center mb-8">
            <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary border border-primary/20 mb-4">
              <Zap className="w-3 h-3 mr-1" />
              90 días para transformar tu negocio
            </div>
          </div>
          
          <div className="relative max-w-4xl mx-auto mb-12">
            <div className="grid md:grid-cols-3 gap-6 relative">
              {/* Timeline line */}
              <div className="absolute top-6 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-destructive via-primary to-success hidden md:block"></div>
              
              {[
                { color: 'destructive', title: 'Diagnóstico', time: 'Día 1' },
                { color: 'primary', title: 'Implementación', time: '30 días' },
                { color: 'success', title: 'Resultados', time: '90 días' }
              ].map((phase, idx) => (
                <div key={idx} className="text-center relative">
                  <div className={`w-12 h-12 rounded-full bg-${phase.color} mx-auto mb-3 flex items-center justify-center shadow-lg border-2 border-background relative z-10`}>
                    <span className="text-white font-bold text-xs">{idx + 1}</span>
                  </div>
                  <div className={`bg-${phase.color}/10 rounded-lg p-3 border border-${phase.color}/20`}>
                    <div className={`text-${phase.color} font-bold text-xs mb-1`}>{phase.time}</div>
                    <h4 className="font-bold text-foreground text-sm">{phase.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Compact CTA */}
          <div className="text-center">
            <div className="inline-block relative">
              <div className="relative rounded-2xl border border-primary/30 bg-gradient-card p-6 backdrop-blur-sm card-elevated max-w-lg">
                <h4 className="text-xl font-bold text-foreground mb-3">
                  ¿Listo para <span className="bg-gradient-to-r from-success to-primary bg-clip-text text-transparent">transformar</span> tu negocio?
                </h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Tu turno es <span className="text-foreground font-semibold">ahora</span>.
                </p>
                
                <div className="inline-flex items-center gap-2 text-primary font-bold group cursor-pointer hover:scale-105 transition-transform duration-300">
                  <span>Empezar mi transformación</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Transformation;
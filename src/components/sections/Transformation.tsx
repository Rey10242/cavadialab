import React from "react";
import { ArrowRight, TrendingDown, TrendingUp, AlertCircle, CheckCircle2, Target, Rocket } from "lucide-react";

const beforeAfter = [
  {
    before: {
      icon: TrendingDown,
      title: "Ventas inconsistentes",
      description: "Mes bueno, mes malo. Sin predictibilidad en los ingresos.",
      color: "destructive"
    },
    after: {
      icon: TrendingUp,
      title: "Crecimiento predecible",
      description: "Sistema que genera leads y ventas de forma constante.",
      color: "success"
    }
  },
  {
    before: {
      icon: AlertCircle,
      title: "Dependes solo de ti",
      description: "Si no trabajas, no hay ingresos. Burnout garantizado.",
      color: "destructive"
    },
    after: {
      icon: Target,
      title: "Sistema automatizado",
      description: "Tu negocio trabaja 24/7 mientras tú te enfocas en crecer.",
      color: "success"
    }
  },
  {
    before: {
      icon: AlertCircle,
      title: "Marketing a ciegas",
      description: "Gastas en anuncios sin saber qué funciona realmente.",
      color: "destructive"
    },
    after: {
      icon: Rocket,
      title: "Decisiones basadas en datos",
      description: "Cada euro invertido está respaldado por métricas claras.",
      color: "success"
    }
  }
];

const Transformation: React.FC = () => {
  return (
    <section id="transformacion" className="border-t border-border/60 scroll-mt-24 section-padding relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-success/5 via-transparent to-primary/5"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(var(--success-rgb),0.1),transparent_50%)]"></div>
      
      <div className="mx-auto max-w-7xl relative">
        <header className="mx-auto mb-16 max-w-4xl text-center">
          <div className="inline-flex items-center rounded-full bg-gradient-to-r from-destructive/10 to-success/10 px-4 py-2 text-sm font-medium border border-border/60 mb-6 animate-fade-in">
            <div className="w-2 h-2 rounded-full bg-destructive mr-2"></div>
            <span className="text-destructive font-medium">Antes</span>
            <ArrowRight className="w-4 h-4 mx-3 text-muted-foreground" />
            <div className="w-2 h-2 rounded-full bg-success mr-2"></div>
            <span className="text-success font-medium">Después</span>
          </div>
          <h2 className="heading-secondary mb-6 animate-fade-in" style={{animationDelay: '100ms'}}>
            <span className="bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
              De luchar por cada venta a 
            </span>
            <span className="bg-gradient-to-r from-success to-primary bg-clip-text text-transparent">
              {" "}crecer automáticamente
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-destructive via-primary to-success mx-auto rounded-full mb-8 animate-fade-in" style={{animationDelay: '200ms'}}></div>
          <p className="text-xl leading-relaxed text-muted-foreground animate-fade-in" style={{animationDelay: '300ms'}}>
            Esta es la transformación que verás en tu negocio. <span className="text-foreground font-semibold">No es magia, es metodología</span> aplicada consistentemente.
          </p>
        </header>

        <div className="space-y-12">
          {beforeAfter.map((transformation, index) => (
            <div
              key={index}
              className="grid gap-8 lg:grid-cols-2 items-center animate-fade-in"
              style={{animationDelay: `${400 + index * 150}ms`}}
            >
              {/* Before Card */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-destructive/10 to-destructive/5 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
                <div className="relative rounded-2xl border border-destructive/20 bg-gradient-to-br from-destructive/5 to-background p-8 card-elevated">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center">
                      <transformation.before.icon className="text-destructive w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground mb-3">{transformation.before.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{transformation.before.description}</p>
                    </div>
                  </div>
                  
                  {/* Problem indicator */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-destructive flex items-center justify-center">
                    <span className="text-destructive-foreground text-xs font-bold">✕</span>
                  </div>
                </div>
              </div>

              {/* Arrow */}
              <div className="flex justify-center lg:justify-start">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-success blur-md rounded-full"></div>
                  <div className="relative w-16 h-16 rounded-full bg-gradient-to-r from-primary to-success flex items-center justify-center shadow-xl">
                    <ArrowRight className="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>

              {/* After Card */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-success/10 to-success/5 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
                <div className="relative rounded-2xl border border-success/20 bg-gradient-to-br from-success/5 to-background p-8 card-elevated">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-success/10 flex items-center justify-center">
                      <transformation.after.icon className="text-success w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground mb-3">{transformation.after.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{transformation.after.description}</p>
                    </div>
                  </div>
                  
                  {/* Success indicator */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-success flex items-center justify-center">
                    <CheckCircle2 className="text-success-foreground w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Timeline visualization */}
        <div className="mt-16 animate-fade-in" style={{animationDelay: '800ms'}}>
          <div className="relative">
            <div className="text-center mb-8">
              <h3 className="heading-tertiary text-foreground mb-4">El camino hacia tu transformación</h3>
              <p className="text-muted-foreground">Esto es lo que sucede cuando implementamos nuestro sistema</p>
            </div>
            
            <div className="relative max-w-4xl mx-auto">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-destructive via-primary to-success"></div>
              
              {/* Timeline points */}
              <div className="grid gap-8">
                <div className="flex items-center justify-center relative">
                  <div className="bg-destructive w-4 h-4 rounded-full z-10"></div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-8 bg-destructive/10 text-destructive px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap">
                    Estado actual: Frustrante
                  </div>
                </div>
                
                <div className="flex items-center justify-center relative" style={{height: '120px'}}>
                  <div className="bg-primary w-4 h-4 rounded-full z-10"></div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-8 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap">
                    30 días: Primeros cambios
                  </div>
                </div>
                
                <div className="flex items-center justify-center relative">
                  <div className="bg-success w-4 h-4 rounded-full z-10"></div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-8 bg-success/10 text-success px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap">
                    90 días: Transformación completa
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center animate-fade-in" style={{animationDelay: '1000ms'}}>
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-success/20 blur-lg rounded-2xl"></div>
            <div className="relative rounded-2xl border border-primary/20 bg-gradient-card p-8 backdrop-blur-sm">
              <h4 className="text-2xl font-bold text-foreground mb-4">
                ¿Listo para tu transformación?
              </h4>
              <p className="text-lg text-muted-foreground mb-6">
                No tienes que vivir con la incertidumbre de no saber de dónde vendrá tu próximo cliente.
              </p>
              <div className="inline-flex items-center gap-2 text-primary font-semibold text-lg group cursor-pointer">
                <span>Empecemos tu transformación hoy</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Transformation;
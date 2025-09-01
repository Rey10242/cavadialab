import React from "react";
import { Award, BarChart3, Users, Clock, Zap, CheckCircle } from "lucide-react";

const credentials = [
  { icon: Award, text: "Certificado en Growth Marketing" },
  { icon: BarChart3, text: "Google Analytics & Ads Expert" },
  { icon: Users, text: "+200 empresas escaladas" },
  { icon: Clock, text: "5+ años especializándome" },
];

const achievements = [
  { number: "2.3M", label: "en ventas generadas", suffix: "€" },
  { number: "480", label: "ROAS promedio", suffix: "%" },
  { number: "15", label: "días promedio", suffix: "" },
];

const Authority: React.FC = () => {
  return (
    <section id="autoridad" className="border-t border-border/60 scroll-mt-24 py-16 lg:py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary-glow/5"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_80%,rgba(var(--primary-rgb),0.1),transparent_50%)]"></div>
      
      <div className="mx-auto max-w-6xl relative px-4 sm:px-6 lg:px-8">
        <header className="mx-auto mb-12 max-w-4xl text-center">
          <div className="inline-flex items-center rounded-full bg-success/10 px-4 py-2 text-sm font-medium text-success border border-success/20 mb-6 scroll-reveal hover-bounce">
            <CheckCircle className="w-4 h-4 mr-2" />
            Experiencia Comprobada
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 scroll-reveal">
            <span className="bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
              Mi compromiso es tu 
            </span>
            <span className="text-gradient">
              {" "}crecimiento
            </span>
          </h2>
          <div className="w-20 h-0.5 bg-gradient-animated mx-auto rounded-full mb-6 scroll-reveal"></div>
          <p className="text-lg leading-relaxed text-muted-foreground scroll-reveal">
            No soy una agencia más. Soy <span className="text-foreground font-semibold">Reynaldo Montalvo</span>, especialista en growth marketing.
          </p>
        </header>

        <div className="grid gap-8 lg:grid-cols-2 items-center">
          {/* Credentials */}
          <div className="space-y-6 scroll-reveal">
            <div>
              <h3 className="text-xl font-bold mb-4 text-foreground">¿Por qué confiar en mí?</h3>
              <div className="grid gap-4">
                {credentials.map(({ icon: Icon, text }, index) => (
                  <div
                    key={text}
                    className="flex items-center gap-3 p-3 rounded-lg bg-gradient-card border border-border/60 card-neon hover-lift group animate-slide-up [animation-delay:calc(0.1s*var(--index))]"
                    style={{'--index': index} as any}
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon className="text-primary w-5 h-5" />
                    </div>
                    <span className="text-foreground/90 font-medium text-sm">{text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="relative rounded-xl border border-primary/20 bg-gradient-to-br from-primary/5 to-primary-glow/10 p-4 card-glow hover-lift">
                <div className="flex items-center gap-2 mb-3">
                  <Zap className="w-4 h-4 text-primary animate-pulse-glow" />
                  <span className="font-semibold text-primary text-sm">Mi filosofía</span>
                </div>
                <p className="text-foreground/90 text-sm leading-relaxed">
                  "Mi objetivo es convertirme en tu socio de crecimiento y lograr resultados reales."
                </p>
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div className="scroll-reveal">
            <div className="relative">
              <div className="relative space-y-4">
                <h3 className="text-xl font-bold mb-4 text-center text-foreground">Resultados comprobados</h3>
                
                <div className="grid gap-3">
                  {achievements.map(({ number, label, suffix }, index) => (
                    <div
                      key={label}
                      className="relative rounded-xl border border-border/60 bg-gradient-card p-4 card-elevated group hover:border-primary/30 transition-all duration-300"
                      style={{animationDelay: `${700 + index * 100}ms`}}
                    >
                      <div className="text-center">
                        <div className="text-2xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent mb-1">
                          {suffix === "€" && suffix}{number}{suffix !== "€" && suffix}
                        </div>
                        <div className="text-muted-foreground font-medium text-sm">{label}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Statement */}
        <div className="mt-8 text-center animate-fade-in" style={{animationDelay: '1000ms'}}>
          <div className="inline-block relative">
            <div className="relative rounded-xl border border-primary/20 bg-gradient-card p-4 backdrop-blur-sm">
              <p className="text-sm text-foreground/90 font-medium">
                Resultados <span className="text-primary font-bold">reales</span>, no promesas vacías.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Authority;
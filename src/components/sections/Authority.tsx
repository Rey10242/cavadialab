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
    <section id="autoridad" className="border-t border-border/60 scroll-mt-24 section-padding relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary-glow/5"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_80%,rgba(var(--primary-rgb),0.1),transparent_50%)]"></div>
      
      <div className="mx-auto max-w-7xl relative">
        <header className="mx-auto mb-16 max-w-4xl text-center">
          <div className="inline-flex items-center rounded-full bg-success/10 px-4 py-2 text-sm font-medium text-success border border-success/20 mb-6 animate-fade-in">
            <CheckCircle className="w-4 h-4 mr-2" />
            Experiencia Comprobada
          </div>
          <h2 className="heading-secondary mb-6 animate-fade-in" style={{animationDelay: '100ms'}}>
            <span className="bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
              Mi compromiso es tu 
            </span>
            <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              {" "}crecimiento
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto rounded-full mb-8 animate-fade-in" style={{animationDelay: '200ms'}}></div>
          <p className="text-xl leading-relaxed text-muted-foreground animate-fade-in" style={{animationDelay: '300ms'}}>
            No soy una agencia más. Soy <span className="text-foreground font-semibold">Reynaldo Montalvo</span>, un especialista en growth marketing que ha dedicado años a perfeccionar el arte de convertir visitantes en clientes rentables.
          </p>
        </header>

        <div className="grid gap-12 lg:grid-cols-2 items-center">
          {/* Credentials */}
          <div className="space-y-8">
            <div className="animate-fade-in" style={{animationDelay: '400ms'}}>
              <h3 className="heading-tertiary mb-6 text-foreground">¿Por qué confiar en mí?</h3>
              <div className="grid gap-4">
                {credentials.map(({ icon: Icon, text }, index) => (
                  <div
                    key={text}
                    className="flex items-center gap-4 p-4 rounded-xl bg-gradient-card border border-border/60 card-interactive group"
                    style={{animationDelay: `${500 + index * 100}ms`}}
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon className="text-primary w-6 h-6" />
                    </div>
                    <span className="text-foreground/90 font-medium">{text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="animate-fade-in" style={{animationDelay: '800ms'}}>
              <div className="relative rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 to-primary-glow/10 p-6 card-elevated">
                <div className="absolute -top-3 left-6">
                  <div className="w-6 h-6 rounded-full bg-gradient-cta"></div>
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <Zap className="w-5 h-5 text-primary" />
                  <span className="font-semibold text-primary">Mi filosofía</span>
                </div>
                <p className="text-foreground/90 leading-relaxed">
                  "No me interesa venderte un servicio más. Mi objetivo es convertirme en tu socio de crecimiento y lograr que tu negocio genere más ingresos de los que jamás imaginaste."
                </p>
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div className="animate-fade-in" style={{animationDelay: '600ms'}}>
            <div className="relative">
              {/* Decorative gradient blob */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-primary-glow/10 to-transparent rounded-3xl blur-xl"></div>
              
              <div className="relative space-y-6">
                <h3 className="heading-tertiary mb-8 text-center text-foreground">Resultados que hablan por sí solos</h3>
                
                <div className="grid gap-6">
                  {achievements.map(({ number, label, suffix }, index) => (
                    <div
                      key={label}
                      className="relative rounded-2xl border border-border/60 bg-gradient-card p-6 card-elevated group hover:border-primary/30 transition-all duration-300"
                      style={{animationDelay: `${700 + index * 100}ms`}}
                    >
                      <div className="text-center">
                        <div className="text-4xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent mb-2">
                          {suffix === "€" && suffix}{number}{suffix !== "€" && suffix}
                        </div>
                        <div className="text-muted-foreground font-medium">{label}</div>
                      </div>
                      
                      {/* Connecting line to next card */}
                      {index < achievements.length - 1 && (
                        <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-0.5 h-6 bg-gradient-to-b from-primary/50 to-transparent"></div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Statement */}
        <div className="mt-16 text-center animate-fade-in" style={{animationDelay: '1000ms'}}>
          <div className="inline-block relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary-glow/20 blur-lg rounded-2xl"></div>
            <div className="relative rounded-2xl border border-primary/20 bg-gradient-card p-6 backdrop-blur-sm">
              <p className="text-lg text-foreground/90 font-medium">
                Mi reputación se construye sobre <span className="text-primary font-bold">resultados reales</span>, no promesas vacías.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Authority;
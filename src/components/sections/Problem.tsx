import React, { useState, useEffect } from "react";
import { AlertTriangle, Clock, Globe, Shuffle, ArrowDown, Heart } from "lucide-react";

const problems = [
  { 
    icon: AlertTriangle, 
    title: "Marketing sin resultados", 
    description: "Gastas dinero en anuncios pero no ves resultados reales. Es como tirar dinero por la ventana.",
    impact: "Pérdida promedio: €2,000/mes"
  },
  { 
    icon: Clock, 
    title: "Leads que se escapan", 
    description: "Los leads se enfrían porque nadie responde a tiempo. Mientras duermes, tu competencia los conquista.",
    impact: "40% de oportunidades perdidas"
  },
  { 
    icon: Globe, 
    title: "Web que no convierte", 
    description: "Sitio web bonito pero que no convierte visitantes en clientes. Es como tener una tienda cerrada.",
    impact: "97% de visitantes se van sin comprar"
  },
  { 
    icon: Shuffle, 
    title: "Dependes solo de ti", 
    description: "Si no trabajas, no hay ingresos. Tu negocio depende 100% de tu tiempo y energía.",
    impact: "0% de escalabilidad real"
  },
];

const Problem: React.FC = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [visibleCards, setVisibleCards] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleCards(prev => [...prev, index]);
          }
        });
      },
      { threshold: 0.3 }
    );

    const cards = document.querySelectorAll('[data-index]');
    cards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="problema" className="border-t border-border/60 scroll-mt-24 section-padding relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-destructive/5 via-transparent to-destructive/10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(var(--destructive-rgb),0.1),transparent_70%)]"></div>
      
      <div className="mx-auto max-w-7xl relative">
        <header className="mx-auto mb-16 max-w-4xl text-center">
          <div className="inline-flex items-center rounded-full bg-destructive/10 px-4 py-2 text-sm font-medium text-destructive border border-destructive/20 mb-6 animate-fade-in">
            <Heart className="w-4 h-4 mr-2" />
            Te entiendo perfectamente
          </div>
          <h2 className="heading-secondary mb-6 animate-fade-in" style={{animationDelay: '100ms'}}>
            <span className="bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
              ¿Sientes que tu negocio está 
            </span>
            <span className="bg-gradient-to-r from-destructive to-destructive/80 bg-clip-text text-transparent">
              {" "}estancado?
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-destructive to-destructive/60 mx-auto rounded-full mb-8 animate-fade-in" style={{animationDelay: '200ms'}}></div>
          <p className="text-xl leading-relaxed text-muted-foreground animate-fade-in" style={{animationDelay: '300ms'}}>
            Si alguna de estas situaciones te resulta familiar, <span className="text-foreground font-semibold">no estás solo</span>. He ayudado a más de 200 empresarios a superar exactamente estos mismos obstáculos.
          </p>
        </header>

        <div className="grid gap-8 lg:grid-cols-2">
          {problems.map(({ icon: Icon, title, description, impact }, index) => (
            <div
              key={title}
              data-index={index}
              className={`relative group cursor-pointer transition-all duration-500 ${
                visibleCards.includes(index) ? 'animate-fade-in' : 'opacity-0'
              }`}
              style={{animationDelay: `${400 + index * 150}ms`}}
              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(null)}
            >
              {/* Glow effect on hover */}
              <div className={`absolute -inset-4 bg-gradient-to-br from-destructive/20 to-destructive/10 rounded-3xl blur-xl transition-all duration-300 ${
                activeCard === index ? 'opacity-100' : 'opacity-0'
              }`}></div>
              
              <div className="relative rounded-2xl border border-border/60 bg-gradient-card p-8 card-elevated group-hover:border-destructive/30 transition-all duration-300">
                {/* Problem indicator */}
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-destructive flex items-center justify-center shadow-lg">
                  <span className="text-destructive-foreground text-xs font-bold">!</span>
                </div>

                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-destructive/10 flex items-center justify-center group-hover:bg-destructive/20 transition-all duration-300 group-hover:scale-110">
                    <Icon className="text-destructive w-8 h-8" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-destructive transition-colors duration-300">
                      {title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {description}
                    </p>
                    
                    {/* Impact badge */}
                    <div className="inline-flex items-center rounded-full bg-destructive/10 px-3 py-1 text-sm text-destructive font-medium">
                      <ArrowDown className="w-3 h-3 mr-1" />
                      {impact}
                    </div>
                  </div>
                </div>

                {/* Pain level indicator */}
                <div className="mt-6 pt-6 border-t border-border/50">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Nivel de frustración:</span>
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((level) => (
                        <div
                          key={level}
                          className="w-2 h-2 rounded-full bg-destructive"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Emotional Connection */}
        <div className="mt-16 text-center animate-fade-in" style={{animationDelay: '800ms'}}>
          <div className="relative inline-block max-w-4xl">
            <div className="absolute inset-0 bg-gradient-to-r from-destructive/10 to-primary/10 blur-lg rounded-3xl"></div>
            <div className="relative rounded-3xl border border-border/60 bg-gradient-card p-8 lg:p-12 backdrop-blur-sm">
              <div className="mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-destructive to-primary mx-auto flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Sé exactamente cómo te sientes
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  La frustración de trabajar duro pero no ver los resultados que mereces. La preocupación constante por de dónde vendrá el próximo cliente. 
                  <span className="text-foreground font-semibold"> He estado ahí y sé cómo solucionarlo.</span>
                </p>
              </div>
              
              <div className="inline-flex items-center gap-2 text-primary font-semibold text-lg group cursor-pointer">
                <span>Descubre cómo cambiar esta realidad</span>
                <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300 animate-bounce" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;

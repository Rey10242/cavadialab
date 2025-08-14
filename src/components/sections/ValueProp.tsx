import React from "react";
import { Target, Workflow, TrendingUp } from "lucide-react";

const items = [
  { icon: Target, title: "Estrategia", desc: "Investigación, propuesta de valor y plan go‑to‑market." },
  { icon: Workflow, title: "Automatización", desc: "Flujos, scoring, CRM y alertas en tiempo real." },
  { icon: TrendingUp, title: "Escalamiento", desc: "A/B testing continuo, dashboards y decisiones por datos." },
];

const ValueProp: React.FC = () => {
  return (
    <section id="servicios" className="border-t border-border/60 scroll-mt-24 section-padding bg-muted/30">
      <div className="mx-auto max-w-6xl">
        <header className="mx-auto mb-16 max-w-4xl text-center animate-fade-in">
          <h2 className="heading-secondary mb-6">Consultor de Marketing Digital</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto rounded-full mb-6"></div>
          <p className="text-xl leading-relaxed text-muted-foreground">Estrategia, Automatización y Escalamiento de Ventas con WhatsApp</p>
        </header>
        <div className="grid gap-8 md:grid-cols-3">
          {items.map(({ icon: Icon, title, desc }, index) => (
            <article 
              key={title} 
              className="h-full flex flex-col rounded-2xl border border-border/60 bg-card p-8 card-interactive group"
              style={{animationDelay: `${index * 150}ms`}}
            >
              <div className="mb-6 relative">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-primary-glow/20 flex items-center justify-center group-hover:from-primary/20 group-hover:to-primary-glow/30 transition-all duration-300">
                  <Icon className="text-primary w-8 h-8" />
                </div>
                <div className="absolute -inset-2 bg-gradient-to-r from-primary/10 to-primary-glow/10 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h3 className="heading-tertiary mb-3">{title}</h3>
              <p className="text-muted-foreground leading-relaxed">{desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProp;

import React from "react";
import { Target, Workflow, TrendingUp } from "lucide-react";

const items = [
  { icon: Target, title: "Estrategia", desc: "Investigación, propuesta de valor y plan go‑to‑market." },
  { icon: Workflow, title: "Automatización", desc: "Flujos, scoring, CRM y alertas en tiempo real." },
  { icon: TrendingUp, title: "Escalamiento", desc: "A/B testing continuo, dashboards y decisiones por datos." },
];

const ValueProp: React.FC = () => {
  return (
    <section id="servicios" className="border-t border-border/60 scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <header className="mx-auto mb-10 max-w-3xl text-center animate-fade-in">
          <h2 className="text-3xl font-bold">Todo en uno: estrategia, automatización y escalamiento</h2>
          <p className="mt-3 text-muted-foreground">No vendemos piezas sueltas. Operamos un sistema que genera demanda cada mes, automatiza el seguimiento y optimiza por datos para crecer con control.</p>
        </header>
        <div className="grid gap-6 md:grid-cols-3">
          {items.map(({ icon: Icon, title, desc }) => (
            <article key={title} className="h-full flex flex-col rounded-xl border border-border/60 bg-card p-6 card-elevated hover-lift">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-secondary">
                <Icon className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="mt-2 text-muted-foreground">{desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProp;

import React from "react";
import { Target, Workflow, TrendingUp } from "lucide-react";

const items = [
  { icon: Target, title: "Estrategia", desc: "Plan hecho a medida según tu mercado." },
  { icon: Workflow, title: "Automatización", desc: "Procesos que trabajan 24/7 por ti." },
  { icon: TrendingUp, title: "Escalamiento", desc: "Crecimiento con datos, no suposiciones." },
];

const ValueProp: React.FC = () => {
  return (
    <section id="servicios" className="border-t border-border/60">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <header className="mx-auto mb-10 max-w-3xl text-center">
          <h2 className="text-3xl font-bold">Estrategia, Automatización y Escalamiento en un solo sistema</h2>
          <p className="mt-3 text-muted-foreground">No hacemos piezas sueltas. Diseñamos un sistema que genera clientes nuevos cada mes, automatiza el seguimiento y mide cada resultado para que crezcas con control.</p>
        </header>
        <div className="grid gap-6 md:grid-cols-3">
          {items.map(({ icon: Icon, title, desc }) => (
            <article key={title} className="rounded-xl border border-border/60 bg-card p-6 card-elevated">
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-secondary">
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

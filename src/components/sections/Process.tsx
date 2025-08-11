import React from "react";

const steps = [
  { title: "Diagnóstico y Auditoría", desc: "Detectamos fugas y oportunidades." },
  { title: "Arquitectura Digital", desc: "Web, canales de venta y SEO." },
  { title: "Tráfico Pago y Automatización", desc: "Clientes nuevos y seguimiento automático." },
  { title: "Medición y Optimización", desc: "Ajustes constantes para mejorar resultados." },
];

const Process: React.FC = () => {
  return (
  <section id="proceso" className="border-t border-border/60 scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <header className="mb-10 text-center animate-fade-in">
          <h2 className="text-3xl font-bold">Nuestro método en 4 pasos</h2>
          <p className="mt-2 text-muted-foreground">Implementamos rápido, medimos y optimizamos.</p>
        </header>
        <ol className="grid gap-6 md:grid-cols-4">
          {steps.map((s, i) => (
            <li key={s.title} className="relative flex h-full flex-col rounded-xl border border-border/60 bg-card p-6 hover-lift">
              <div className="mb-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold">
                {i + 1}
              </div>
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-muted-foreground">{s.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Process;

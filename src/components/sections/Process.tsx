import React from "react";

const steps = [
  { title: "Diagnóstico y Auditoría", desc: "Detectamos fugas y oportunidades." },
  { title: "Arquitectura Digital", desc: "Web, canales de venta y SEO." },
  { title: "Tráfico Pago y Automatización", desc: "Clientes nuevos y seguimiento automático." },
  { title: "Medición y Optimización", desc: "Ajustes constantes para mejorar resultados." },
];

const Process: React.FC = () => {
  return (
  <section id="proceso" className="border-t border-border/60 scroll-mt-24 section-padding">
      <div className="mx-auto max-w-6xl">
        <header className="mb-16 text-center animate-fade-in">
          <h2 className="heading-secondary mb-6">Nuestro método en 4 pasos</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-muted-foreground">Implementamos rápido, medimos y optimizamos.</p>
        </header>
        <div className="relative">
          {/* Connection line */}
          <div className="hidden md:block absolute top-16 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-border to-transparent"></div>
          
          <ol className="grid gap-8 md:grid-cols-4 relative">
            {steps.map((s, i) => (
              <li 
                key={s.title} 
                className="relative flex h-full flex-col rounded-2xl border border-border/60 bg-card p-8 card-interactive group"
                style={{animationDelay: `${i * 200}ms`}}
              >
                <div className="mb-6 relative">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-cta flex items-center justify-center text-primary-foreground font-bold text-xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                    {i + 1}
                  </div>
                  {/* Connection dot for desktop */}
                  {i < steps.length - 1 && (
                    <div className="hidden md:block absolute -right-4 top-8 w-8 h-0.5 bg-gradient-to-r from-primary to-transparent"></div>
                  )}
                </div>
                <h3 className="heading-tertiary mb-3">{s.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Process;

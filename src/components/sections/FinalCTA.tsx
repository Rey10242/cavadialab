import React from "react";
import CTAButton from "@/components/CTAButton";

const FinalCTA: React.FC = () => {
  return (
    <section id="cta-final" className="border-t border-border/60 scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 py-20 text-center">
        <h2 className="mx-auto max-w-3xl text-3xl font-extrabold leading-tight md:text-4xl">
          ¿Empezamos a escalar hoy?
        </h2>
        <div className="mt-6 flex justify-center">
          <CTAButton className="text-base px-6 py-6">Agenda tu diagnóstico gratuito ahora</CTAButton>
        </div>
        <p className="mt-3 text-xs text-muted-foreground">Agenda tu diagnóstico gratuito — 30 minutos.</p>
      </div>
    </section>
  );
};

export default FinalCTA;

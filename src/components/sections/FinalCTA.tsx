import React from "react";
import CTAButton from "@/components/CTAButton";

const FinalCTA: React.FC = () => {
  return (
    <section id="contacto" className="border-t border-border/60">
      <div className="mx-auto max-w-6xl px-4 py-20 text-center">
        <h2 className="mx-auto max-w-3xl text-3xl font-extrabold leading-tight md:text-4xl">
          Tu negocio puede seguir operando igual… o puede empezar a escalar hoy.
        </h2>
        <div className="mt-6 flex justify-center">
          <CTAButton className="text-base px-6 py-6">Agenda tu diagnóstico gratuito ahora</CTAButton>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;

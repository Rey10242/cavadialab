import React from "react";
import CTAButton from "@/components/CTAButton";

const FinalCTA: React.FC = () => {
  return (
    <section id="cta-final" className="border-t border-border/60 scroll-mt-24 section-padding bg-gradient-to-br from-primary/5 to-primary-glow/10">
      <div className="mx-auto max-w-4xl text-center">
        <div className="relative rounded-3xl border border-primary/20 bg-gradient-card p-12 card-elevated">
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
            <div className="w-8 h-8 rounded-full bg-gradient-cta"></div>
          </div>
          <h2 className="heading-primary mb-8 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
            ¿Empezamos a <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">escalar</span> hoy?
          </h2>
          <div className="mb-6 flex justify-center">
            <CTAButton className="btn-primary-glow text-xl px-12 py-6 h-auto font-bold">
              Destraba tus ventas hoy
            </CTAButton>
          </div>
          <div className="flex items-center justify-center gap-3 text-muted-foreground">
            <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
            </div>
            <span className="text-lg">Sesión estratégica — 30 minutos</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;

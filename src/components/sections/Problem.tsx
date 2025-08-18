import React from "react";
import { AlertTriangle, Clock, Globe, Shuffle } from "lucide-react";
import CTAButton from "@/components/CTAButton";

const bullets = [
  { icon: AlertTriangle, text: "Campañas que gastan presupuesto sin generar ventas." },
  { icon: Clock, text: "Leads que se enfrían porque nadie responde a tiempo." },
  { icon: Globe, text: "Sitio web atractivo pero que no convierte." },
  { icon: Shuffle, text: "Dependencia total de ti para conseguir clientes." },
];

const Problem: React.FC = () => {
  return (
    <section id="problema" className="border-t border-border/60 scroll-mt-24 section-padding">
      <div className="mx-auto max-w-6xl">
        <header className="mb-12 text-center">
          <h2 className="heading-secondary mb-4">¿Por Qué Tus Campañas No Generan Ventas?</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto rounded-full"></div>
        </header>
        <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 mb-12">
          {bullets.map(({ icon: Icon, text }, index) => (
            <div 
              key={text} 
              className="card-interactive rounded-2xl border border-border/60 bg-gradient-card p-4 sm:p-6 group"
              style={{animationDelay: `${index * 100}ms`}}
            >
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-destructive/10 flex items-center justify-center group-hover:bg-destructive/20 transition-colors">
                  <Icon className="text-destructive w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <p className="text-sm sm:text-base text-foreground/90 leading-relaxed flex-1">{text}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <p className="text-lg text-muted-foreground mb-6">Si alguna de estas frases es tu realidad, te puedo ayudar.</p>
          <CTAButton className="btn-primary-glow px-8 py-4 h-auto text-lg font-semibold">
            Agenda tu diagnóstico gratuito
          </CTAButton>
        </div>
      </div>
    </section>
  );
};

export default Problem;

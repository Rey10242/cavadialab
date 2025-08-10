import React from "react";
import { AlertTriangle, Clock, Globe, Shuffle } from "lucide-react";
import CTAButton from "@/components/CTAButton";

const bullets = [
  { icon: AlertTriangle, text: "Campañas que gastan presupuesto sin generar ventas." },
  { icon: Clock, text: "Leads que se enfrían porque nadie responde a tiempo." },
  { icon: Globe, text: "Un sitio bonito que no convierte." },
  { icon: Shuffle, text: "Dependes de la suerte para conseguir clientes." },
];

const Problem: React.FC = () => {
  return (
    <section id="problema" className="border-t border-border/60 scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <header className="mb-8">
          <h2 className="text-3xl font-bold">¿Por qué tu marketing no está escalando?</h2>
        </header>
        <div className="grid gap-6 sm:grid-cols-2">
          {bullets.map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-start gap-3 rounded-lg border border-border/60 bg-card p-4">
              <Icon className="text-primary" size={22} />
              <p className="text-base text-foreground/90">{text}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 flex items-center gap-4">
          <p className="text-sm text-muted-foreground">Si alguna de estas frases es tu realidad, NEXO es tu solución.</p>
          <CTAButton />
        </div>
      </div>
    </section>
  );
};

export default Problem;

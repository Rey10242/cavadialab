import React from "react";

const Guarantee: React.FC = () => {
  return (
    <section id="garantia" className="border-t border-border/60">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="rounded-xl border border-border/60 bg-card p-8 text-center">
          <h2 className="text-2xl font-bold">Garantía / Compromiso</h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            Si en 90 días no aumentamos tus ventas digitales, te devolvemos el valor de la gestión del último mes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Guarantee;

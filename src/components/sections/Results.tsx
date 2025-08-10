import React from "react";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

const data = [
  { name: "Ene", ventas: 12 },
  { name: "Feb", ventas: 18 },
  { name: "Mar", ventas: 26 },
  { name: "Abr", ventas: 31 },
  { name: "May", ventas: 40 },
  { name: "Jun", ventas: 55 },
];

const Results: React.FC = () => {
  return (
    <section id="casos" className="border-t border-border/60">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <header className="mb-8 text-center">
          <h2 className="text-3xl font-bold">Casos de Éxito / Resultados</h2>
          <p className="mt-2 text-muted-foreground">Más de 50 empresas ya venden más con NEXO.</p>
        </header>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-xl border border-border/60 bg-card p-4">
            <ResponsiveContainer width="100%" height={260}>
              <LineChart data={data} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <Tooltip cursor={{ stroke: 'hsl(var(--primary))', strokeWidth: 1 }} />
                <Line type="monotone" dataKey="ventas" stroke="hsl(var(--primary))" strokeWidth={3} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <aside className="flex flex-col justify-center rounded-xl border border-border/60 bg-card p-6">
            <blockquote className="text-lg font-medium">
              “En 90 días pasamos de prospectar manualmente a tener un flujo constante de leads calificados. NEXO se paga solo.”
            </blockquote>
            <p className="mt-3 text-sm text-muted-foreground">Director de Marketing, Empresa B2B</p>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Results;

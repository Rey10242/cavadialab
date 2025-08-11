import React from "react";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
const data = [
  { name: "Ene", ventas: 12 },
  { name: "Feb", ventas: 18 },
  { name: "Mar", ventas: 26 },
  { name: "Abr", ventas: 31 },
  { name: "May", ventas: 40 },
  { name: "Jun", ventas: 55 },
];
const testimonials = [
  { sector: "Gastronómico", quote: "Triplicamos reservas en 60 días con automatizaciones y anuncios rentables.", author: "Dueña de restaurante", company: "Grupo Sabores" },
  { sector: "Retail", quote: "Pasamos de ventas estancadas a un ROAS 4.2 en campañas omnicanal.", author: "Ecommerce Manager", company: "Moda Express" },
  { sector: "Servicios B2B", quote: "Agenda llena 6 semanas con leads calificados y nurturing.", author: "Director Comercial", company: "Tech Solutions" },
  { sector: "Educación", quote: "CPA -38% y tasa de inscripción +57% en 90 días.", author: "CMO", company: "Instituto Aprende" },
];

const Results: React.FC = () => {
  return (
  <section id="casos" className="border-t border-border/60 scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <header className="mb-8 text-center animate-fade-in">
          <h2 className="text-3xl font-bold">Resultados reales</h2>
          <p className="mt-2 text-muted-foreground">Incremento sostenido de ventas en 90 días.</p>
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
      <aside className="rounded-xl border border-border/60 bg-card p-6">
            <h3 className="mb-4 text-base font-semibold text-foreground/90">Casos de éxito por sector</h3>
            <Carousel opts={{ align: "start" }} className="w-full">
              <CarouselContent>
                {testimonials.map((t) => (
                  <CarouselItem key={t.sector} className="md:basis-1/2 lg:basis-1/3">
                    <article className="h-full rounded-lg border border-border/60 bg-background/60 p-4 hover-scale">
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary">{t.sector}</Badge>
                        <span className="text-xs text-muted-foreground">{t.company}</span>
                      </div>
                      <blockquote className="mt-2 text-sm leading-relaxed">
                        “{t.quote}”
                      </blockquote>
                      <p className="mt-1 text-xs text-muted-foreground">{t.author}</p>
                    </article>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious aria-label="Anterior caso" />
              <CarouselNext aria-label="Siguiente caso" />
            </Carousel>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Results;

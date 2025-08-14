import React from "react";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel";

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
  const [api, setApi] = React.useState<CarouselApi | null>(null);
  const pausedRef = React.useRef(false);
  
  React.useEffect(() => {
    if (!api) return;
    const id = window.setInterval(() => {
      if (!pausedRef.current) api.scrollNext();
    }, 4000);
    return () => window.clearInterval(id);
  }, [api]);

  return (
    <section id="casos" className="border-t border-border/60 scroll-mt-24 section-padding">
      <div className="mx-auto max-w-6xl">
        <header className="mb-16 text-center animate-fade-in">
          <h2 className="heading-secondary mb-6">Resultados reales</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-muted-foreground">Incremento sostenido de ventas en 90 días.</p>
        </header>
        
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="rounded-2xl border border-border/60 bg-card p-8 card-soft">
            <h3 className="text-xl font-semibold mb-6 text-center">Crecimiento Promedio de Clientes</h3>
            <ResponsiveContainer width="100%" height={280}>
              <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <Tooltip cursor={{ stroke: 'hsl(var(--primary))', strokeWidth: 1 }} />
                <Line type="monotone" dataKey="ventas" stroke="hsl(var(--primary))" strokeWidth={3} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
          
          <div className="rounded-2xl border border-border/60 bg-card p-8 card-soft">
            <h3 className="text-xl font-semibold mb-6 text-center">Casos de éxito por sector</h3>
            <div 
              onMouseEnter={() => (pausedRef.current = true)} 
              onMouseLeave={() => (pausedRef.current = false)}
              className="relative px-8"
            >
              <Carousel opts={{ align: "start", loop: true, dragFree: true }} setApi={setApi} className="w-full">
                <CarouselContent>
                  {testimonials.map((t, index) => (
                    <CarouselItem key={t.sector} className="md:basis-full">
                      <article className="h-full rounded-xl border border-border/60 bg-background/60 p-6 hover-scale hover-lift">
                        <div className="flex items-center gap-2 mb-4">
                          <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                            {t.sector}
                          </Badge>
                        </div>
                        <blockquote className="text-base leading-relaxed mb-4 text-foreground/90">
                          "{t.quote}"
                        </blockquote>
                        <footer className="text-sm text-muted-foreground">
                          <div className="font-medium">{t.author}</div>
                          <div>{t.company}</div>
                        </footer>
                      </article>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious 
                  aria-label="Anterior caso" 
                  className="glass shadow-md -left-8 top-1/2 -translate-y-1/2 h-10 w-10 border-border/50" 
                />
                <CarouselNext 
                  aria-label="Siguiente caso" 
                  className="glass shadow-md -right-8 top-1/2 -translate-y-1/2 h-10 w-10 border-border/50" 
                />
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;
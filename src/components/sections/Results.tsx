import React from "react";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Clock, Award, Target } from "lucide-react";

const metrics = [
  { label: "Crecimiento promedio", value: "320%", description: "en ventas en 90 días", icon: TrendingUp },
  { label: "Tiempo de retorno", value: "45 días", description: "promedio de inversión", icon: Clock },
  { label: "ROAS promedio", value: "6.2x", description: "retorno de inversión", icon: Target },
  { label: "Casos de éxito", value: "98%", description: "de clientes satisfechos", icon: Award },
];

const testimonials = [
  { sector: "Gastronómico", quote: "Triplicamos reservas en 60 días con automatizaciones y anuncios rentables.", author: "Dueña de restaurante", company: "Grupo Sabores", metric: "+200%" },
  { sector: "Retail", quote: "Pasamos de ventas estancadas a un ROAS 8.0 en campañas omnicanal.", author: "Ecommerce Manager", company: "Moda Express", metric: "ROAS 8.0" },
  { sector: "Servicios B2B", quote: "Agenda llena 6 semanas con leads calificados y nurturing.", author: "Director Comercial", company: "Tech Solutions", metric: "+380%" },
  { sector: "Educación", quote: "CPA -38% y tasa de inscripción +57% en 90 días.", author: "CMO", company: "Instituto Aprende", metric: "+57%" },
];

const Results: React.FC = () => {
  return (
    <section id="casos" className="border-t border-border/60 scroll-mt-24 section-padding">
      <div className="mx-auto max-w-6xl">
        <header className="mb-12 sm:mb-16 text-center animate-fade-in">
          <h2 className="heading-secondary mb-4 sm:mb-6">Resultados reales que transforman negocios</h2>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto rounded-full mb-4 sm:mb-6"></div>
          <p className="text-lg sm:text-xl text-muted-foreground px-4">Incremento sostenido de ventas en 90 días.</p>
        </header>
        
        {/* Métricas principales */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {metrics.map((metric, index) => {
            const IconComponent = metric.icon;
            return (
              <div 
                key={metric.label} 
                className="rounded-xl sm:rounded-2xl border border-border/60 bg-card p-4 sm:p-6 card-soft text-center"
                style={{animationDelay: `${index * 100}ms`}}
              >
                <div className="flex justify-center mb-2 sm:mb-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                  </div>
                </div>
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary mb-1">{metric.value}</div>
                <div className="text-xs sm:text-sm font-medium text-foreground/90 mb-1">{metric.label}</div>
                <div className="text-xs text-muted-foreground">{metric.description}</div>
              </div>
            );
          })}
        </div>

        {/* Casos de éxito */}
        <div className="space-y-4 sm:space-y-6">
          <h3 className="text-xl sm:text-2xl font-semibold text-center mb-6 sm:mb-8">Casos de éxito por sector</h3>
          <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
            {testimonials.map((testimonial, index) => (
              <article 
                key={testimonial.sector} 
                className="rounded-xl sm:rounded-2xl border border-border/60 bg-card p-4 sm:p-6 card-soft hover-scale hover-lift"
                style={{animationDelay: `${index * 150}ms`}}
              >
                <div className="flex items-center justify-between gap-2 mb-3 sm:mb-4">
                  <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 text-xs sm:text-sm">
                    {testimonial.sector}
                  </Badge>
                  <div className="text-lg sm:text-xl font-bold text-primary">{testimonial.metric}</div>
                </div>
                <blockquote className="text-sm sm:text-base leading-relaxed mb-3 sm:mb-4 text-foreground/90">
                  "{testimonial.quote}"
                </blockquote>
                <footer className="text-xs sm:text-sm text-muted-foreground">
                  <div className="font-medium">{testimonial.author}</div>
                  <div>{testimonial.company}</div>
                </footer>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;
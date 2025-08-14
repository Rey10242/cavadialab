import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { trackEvent } from "@/lib/gtag";

const faqs = [
  {
    question: "¿Qué incluye la automatización de ventas WhatsApp?",
    answer: "Sistema completo de chatbots, secuencias automatizadas, scoring de leads, integración CRM y notificaciones en tiempo real. Respuestas automáticas 24/7 que nutren y califican prospectos hasta convertirlos en ventas."
  },
  {
    question: "¿Cuánto tiempo toma implementar la máquina de ventas?",
    answer: "Entre 2-4 semanas para tener el sistema base funcionando. La primera semana configuramos tracking y landing, segunda semana activamos campañas y automatizaciones, tercera optimizamos y cuarta entregamos dashboard completo."
  },
  {
    question: "¿Qué diferencia tienen de otras agencias marketing Cartagena?",
    answer: "Operamos sistemas completos, no servicios aislados. Mientras otras agencias manejan solo Google Ads o solo diseño, nosotros integramos tráfico pago + automatización WhatsApp + CRM + tracking + dashboards en un ecosistema que escala."
  },
  {
    question: "¿Cómo miden el ROAS en Google Ads y Meta Ads?",
    answer: "Implementamos tracking avanzado GA4/GTM con seguimiento cross-device, atribución a 30 días, eventos personalizados y dashboards en tiempo real. Reportes semanales con CPL, CPA, LTV y ROAS por canal y campaña."
  },
  {
    question: "¿Qué pasa si no funciona la automatización WhatsApp?",
    answer: "Garantía de 90 días. Si no aumentamos ventas digitales, devolvemos el valor del último mes. Sin letras pequeñas. Además, hacemos ajustes semanales basados en datos hasta optimizar la conversión."
  },
  {
    question: "¿Trabajan solo con empresas de Cartagena?",
    answer: "No, atendemos empresas de toda Colombia y Latinoamérica. Sin embargo, nos especializamos en el mercado de Cartagena y conocemos profundamente el comportamiento digital de la región Caribe."
  }
];

const FAQ: React.FC = () => {
  const handleAccordionClick = (question: string) => {
    trackEvent('faq_open', {
      event_category: 'engagement',
      event_label: question.substring(0, 50) + '...',
      value: 1
    });
  };

  return (
    <section id="faq" className="border-t border-border/60 scroll-mt-24 section-padding bg-muted/30">
      <div className="mx-auto max-w-4xl">
        <header className="mb-16 text-center animate-fade-in">
          <h2 className="heading-secondary mb-6">Preguntas frecuentes</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-muted-foreground">Todo lo que necesitas saber para decidirte hoy y empezar a escalar tu negocio sin riesgos.</p>
        </header>
        
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="rounded-2xl border border-border/60 bg-card card-soft"
            >
              <AccordionTrigger 
                className="px-6 py-4 text-left hover:no-underline"
                onClick={() => handleAccordionClick(faq.question)}
              >
                <span className="font-semibold text-foreground leading-relaxed pr-4">
                  {faq.question}
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6 text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
import React from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "¿Cuánto cuesta trabajar contigo?",
    answer:
      "Depende del alcance del proyecto. Las consultorías arrancan desde $130.000 COP (~$50 USD) por sesión. Para gestión de campañas, armo un plan a la medida según tus objetivos y presupuesto publicitario. Agenda una conversación sin compromiso y te doy un estimado claro.",
  },
  {
    question: "¿En cuánto tiempo veo resultados?",
    answer:
      "Las primeras métricas las tienes desde la semana 1. Resultados consistentes de leads o ventas, entre 2 y 4 semanas dependiendo del canal y la industria. No prometo magia — prometo un proceso que funciona y se optimiza con datos reales.",
  },
  {
    question: "¿Qué te diferencia de una agencia?",
    answer:
      "Trabajo con pocos clientes a la vez. No soy una agencia con decenas de cuentas que nadie revisa. Soy yo, contigo, enfocado en tus resultados. Tienes línea directa conmigo, no con un ejecutivo de cuenta que no toca las campañas.",
  },
  {
    question: "¿Necesito tener un presupuesto mínimo en ads?",
    answer:
      "Recomiendo un mínimo de $500.000 COP mensuales (~$150 USD) en inversión publicitaria para que los datos sean significativos y podamos optimizar con confianza. Si tu presupuesto es menor, una consultoría puntual puede ser mejor punto de partida.",
  },
  {
    question: "¿Trabajas con negocios fuera de Colombia?",
    answer:
      "Sí. Trabajo de forma remota con clientes en toda Latinoamérica y España. Las herramientas son las mismas — Meta Ads, Google Ads, tracking — y las reuniones se hacen por videollamada. La ubicación no es una barrera.",
  },
];

const FAQ: React.FC = () => {
  return (
    <section id="faq" className="section-padding relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="section-label justify-center [&::after]:hidden">Preguntas frecuentes</div>
          <h2 className="font-heading text-[clamp(2.5rem,5vw,4.5rem)] leading-[0.92] tracking-tight mb-4">
            Preguntas sobre <span className="text-primary">marketing digital</span>
          </h2>
          <p className="font-serif italic text-base text-muted-foreground">
            Lo que la mayoría pregunta antes de contratar un consultor de publicidad digital.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="border border-border rounded-xl px-5 bg-card data-[state=open]:border-primary/30 transition-colors"
              >
                <AccordionTrigger className="text-sm font-semibold text-foreground hover:no-underline py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;

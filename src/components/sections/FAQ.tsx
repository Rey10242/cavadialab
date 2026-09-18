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
    question: "¿Cuánto cuesta trabajar con un Paid Media Manager?",
    answer: "Depende del alcance. Consultorías desde $130.000 COP (~$50 USD). Para gestión de campañas como Paid Media Manager en Meta Ads o Google Ads, armo un plan a la medida según tus objetivos y presupuesto.",
  },
  {
    question: "¿En cuánto tiempo veo resultados?",
    answer: "Primeras métricas desde la semana 1. Resultados consistentes entre 2 y 4 semanas dependiendo del canal y la industria.",
  },
  {
    question: "¿Qué te diferencia de una agencia?",
    answer: "Como Paid Media Specialist trabajo con pocos clientes a la vez. Tienes línea directa conmigo como PPC Manager, no con un ejecutivo de cuenta que no toca las campañas.",
  },
  {
    question: "¿Necesito un presupuesto mínimo en ads?",
    answer: "Recomiendo mínimo $500.000 COP mensuales (~$150 USD) para que los datos sean significativos. Si tu presupuesto es menor, una consultoría puntual puede ser mejor punto de partida.",
  },
  {
    question: "¿Trabajas fuera de Colombia?",
    answer: "Sí. Como Performance Marketing Manager trabajo remoto con clientes en toda Latinoamérica y España. Las herramientas son las mismas y las reuniones se hacen por videollamada.",
  },
  {
    question: "¿Qué hace un Paid Media Manager?",
    answer: "Un Paid Media Manager gestiona campañas de publicidad pagada en plataformas como Meta Ads, Google Ads y TikTok Ads. Su rol incluye estrategia, implementación, optimización de presupuesto, análisis de datos y maximización del ROAS. Es similar a un Digital Advertising Manager, Traffic Manager o Media Buyer.",
  },
  {
    question: "¿Cuál es la diferencia entre un PPC Manager y un Media Buyer?",
    answer: "Un PPC Manager se enfoca en campañas de pago por clic (Google Ads, Bing Ads), optimizando keywords y pujas. Un Media Buyer negocia y compra espacios publicitarios en múltiples plataformas. En la práctica, un Performance Marketing Manager combina ambos roles para maximizar resultados.",
  },
  {
    question: "¿Necesito un Growth Marketing Manager o un consultor?",
    answer: "Si necesitas una estrategia integral de adquisición, retención y revenue marketing, un Growth Marketing Manager a tiempo completo es ideal. Si buscas resultados rápidos en paid media, CRO o demand generation sin contratar a tiempo completo, un consultor especializado es más eficiente y económico.",
  },
  {
    question: "¿También haces páginas web y aplicaciones web?",
    answer: "Sí. Diseño y desarrollo páginas web, landing pages de conversión y aplicaciones web a medida: carga rápida, diseño responsive, SEO técnico y medición conectada a GA4 y Google Tag Manager desde el primer día.",
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
          className="mb-12"
        >
          <div className="section-label">FAQ</div>
          <h2 className="section-title">Preguntas frecuentes</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Accordion type="single" collapsible className="space-y-px">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="border border-border px-5 bg-card data-[state=open]:border-primary/30 transition-colors rounded-none"
              >
                <AccordionTrigger className="text-sm font-semibold text-foreground hover:no-underline py-4 hover:text-primary">
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

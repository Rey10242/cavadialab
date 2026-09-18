import React from "react";
import { ArrowRight, BarChart3, Check, Crosshair, Search, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import AnimatedBackground from "@/components/AnimatedBackground";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";
import Seo from "@/components/Seo";
import SiteFooter from "@/components/SiteFooter";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { landingBySlug, landings, type Landing } from "@/content/landings";
import NotFound from "@/pages/NotFound";

const WHATSAPP = "https://wa.me/573246875354";
const icons = [Crosshair, BarChart3, Search, Sparkles];

const COPY = {
  es: {
    home: "Inicio",
    breadcrumb: "Ruta de navegación",
    cta: "Hablemos por WhatsApp",
    navCta: "Hablemos",
    scan: "Lo esencial",
    process: "Un sistema, no improvisación",
    processText: "Cada decisión tiene un objetivo, una métrica y un siguiente paso.",
    faq: "Preguntas frecuentes",
    faqText: "Respuestas directas antes de empezar.",
    closingTitle: "¿Listo para vender más?",
    closingText: "Cuéntame dónde estás hoy. Te diré con claridad qué haría para avanzar.",
    closingCta: "Abrir conversación",
    others: "Explora otras soluciones",
  },
  en: {
    home: "Home",
    breadcrumb: "Breadcrumb",
    cta: "Talk on WhatsApp",
    navCta: "Let's talk",
    scan: "The essentials",
    process: "A system, not guesswork",
    processText: "Every decision has an objective, a metric and a clear next step.",
    faq: "Frequently asked questions",
    faqText: "Straight answers before we start.",
    closingTitle: "Ready to grow?",
    closingText: "Tell me where you are today. I'll tell you clearly what I would do next.",
    closingCta: "Start a conversation",
    others: "Explore other solutions",
  },
} as const;

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.5 },
};

const LandingPage: React.FC = () => {
  const { pathname } = useLocation();
  const landing = landingBySlug(pathname.replace(/\/$/, "")) as Landing | undefined;

  if (!landing) return <NotFound />;

  const lang = landing.lang ?? "es";
  const t = COPY[lang];
  const others = landings.filter((item) => item.slug !== landing.slug && (item.lang ?? "es") === lang);
  const allBullets = landing.blocks.flatMap((block) => block.bullets ?? []).slice(0, 6);

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: landing.serviceName,
      serviceType: landing.serviceName,
      url: `https://cavadialab.com${landing.slug}`,
      provider: { "@type": "Person", name: "Reynaldo Montalvo Cavadia", url: "https://cavadialab.com/" },
      areaServed: landing.market
        ? [{ "@type": "Country", name: landing.market }]
        : ["Colombia", "México", "España"].map((name) => ({ "@type": "Country", name })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: t.home, item: "https://cavadialab.com/" },
        { "@type": "ListItem", position: 2, name: landing.label, item: `https://cavadialab.com${landing.slug}` },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: landing.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
  ];

  return (
    <div className="relative overflow-hidden bg-background">
      <Seo title={landing.metaTitle} description={landing.metaDescription} path={landing.slug} lang={lang} jsonLd={jsonLd} />
      <AnimatedBackground />

      <div className="relative z-10">
        <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/95 backdrop-blur-md">
          <nav className="container mx-auto flex h-14 items-center justify-between px-4 md:px-8">
            <Link to="/" className="font-heading text-base text-primary transition-opacity hover:opacity-70 sm:text-lg">
              REYNALDO MONTALVO CAVADIA
            </Link>
            <Button asChild size="sm" className="rounded-none font-body text-[0.65rem] font-bold uppercase">
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">{t.navCta}<ArrowRight /></a>
            </Button>
          </nav>
        </header>

        <main id="main" className="pb-16 pt-14">
          <article>
            <section className="border-b border-border">
              <div className="container mx-auto grid min-h-[72vh] max-w-6xl items-end gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1fr_18rem] md:px-8 md:py-20 lg:min-h-[78vh]">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
                  <nav aria-label={t.breadcrumb} className="mb-8">
                    <ol className="flex items-center gap-2 text-[0.62rem] font-bold uppercase text-muted-foreground">
                      <li><Link to="/" className="hover:text-primary">{t.home}</Link></li>
                      <li aria-hidden>/</li>
                      <li className="text-foreground">{landing.label}</li>
                    </ol>
                  </nav>
                  <p className="mb-4 font-body text-[0.68rem] font-bold uppercase text-primary">{landing.eyebrow}</p>
                  <h1 className="max-w-4xl font-heading text-[clamp(3.7rem,10vw,8.5rem)] leading-[0.82] text-foreground">
                    {landing.h1}<br /><span className="text-primary">{landing.h1Accent}</span>
                  </h1>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.18 }} className="border-l-2 border-primary pl-5 md:mb-2">
                  <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">{landing.intro}</p>
                  <Button asChild className="mt-6 w-full rounded-none font-body text-xs font-bold uppercase">
                    <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">{t.cta}<ArrowRight /></a>
                  </Button>
                </motion.div>
              </div>
            </section>

            <section className="container mx-auto max-w-6xl px-4 py-16 sm:px-6 md:px-8 md:py-24">
              <motion.div {...reveal} className="mb-9 flex items-end justify-between gap-6 border-b border-border pb-5">
                <div><p className="mb-2 text-[0.65rem] font-bold uppercase text-primary">01 / {t.scan}</p><h2 className="font-heading text-4xl sm:text-6xl">{landing.serviceName}</h2></div>
                <span className="hidden font-heading text-7xl text-border md:block">RMC</span>
              </motion.div>

              <div className="grid gap-px overflow-hidden border border-border bg-border md:grid-cols-6">
                {landing.blocks.map((block, index) => {
                  const Icon = icons[index % icons.length];
                  const wide = index === 0 || index === 3;
                  return (
                    <motion.section
                      key={block.heading}
                      {...reveal}
                      transition={{ duration: 0.45, delay: index * 0.06 }}
                      className={`group min-h-[17rem] bg-card p-6 transition-colors duration-300 hover:bg-secondary sm:p-8 ${wide ? "md:col-span-4" : "md:col-span-2"}`}
                    >
                      <div className="mb-10 flex items-center justify-between">
                        <Icon className="h-6 w-6 text-primary transition-transform duration-300 group-hover:translate-x-1" />
                        <span className="font-heading text-3xl text-muted">0{index + 1}</span>
                      </div>
                      <h2 className="mb-4 max-w-xl font-heading text-3xl leading-none sm:text-4xl">{block.heading}</h2>
                      {block.paragraphs?.map((paragraph) => (
                        <p key={paragraph} className="mb-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">{paragraph}</p>
                      ))}
                      {block.bullets && (
                        <ul className="grid gap-3 sm:grid-cols-2">
                          {block.bullets.map((bullet) => (
                            <li key={bullet} className="flex gap-2 text-sm leading-snug text-muted-foreground"><Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" /><span>{bullet}</span></li>
                          ))}
                        </ul>
                      )}
                    </motion.section>
                  );
                })}
              </div>
            </section>

            {allBullets.length > 0 && (
              <section className="border-y border-border bg-secondary">
                <div className="container mx-auto max-w-6xl px-4 py-16 sm:px-6 md:px-8 md:py-24">
                  <motion.div {...reveal} className="mb-10 grid gap-4 md:grid-cols-2 md:items-end">
                    <div><p className="mb-2 text-[0.65rem] font-bold uppercase text-primary">02 / Proceso</p><h2 className="font-heading text-5xl sm:text-7xl">{t.process}</h2></div>
                    <p className="max-w-md text-sm text-muted-foreground md:justify-self-end">{t.processText}</p>
                  </motion.div>
                  <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {allBullets.slice(0, 4).map((bullet, index) => (
                      <motion.div key={bullet} {...reveal} transition={{ duration: 0.4, delay: index * 0.08 }} className="border-t border-border pt-5">
                        <span className="font-heading text-6xl text-primary">0{index + 1}</span>
                        <p className="mt-4 text-sm leading-relaxed text-foreground">{bullet}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </section>
            )}

            <section className="container mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-[0.75fr_1.25fr] md:px-8 md:py-24">
              <motion.div {...reveal}>
                <p className="mb-2 text-[0.65rem] font-bold uppercase text-primary">03 / FAQ</p>
                <h2 className="font-heading text-5xl sm:text-7xl">{t.faq}</h2>
                <p className="mt-4 text-sm text-muted-foreground">{t.faqText}</p>
              </motion.div>
              <motion.div {...reveal}>
                <Accordion type="single" collapsible>
                  {landing.faqs.map((faq, index) => (
                    <AccordionItem key={faq.question} value={`faq-${index}`} className="border-border">
                      <AccordionTrigger className="gap-5 py-6 text-left text-sm font-semibold hover:text-primary hover:no-underline sm:text-base">
                        <span className="mr-auto"><span className="mr-3 font-heading text-xl text-primary">0{index + 1}</span>{faq.question}</span>
                      </AccordionTrigger>
                      <AccordionContent className="max-w-2xl pl-9 text-sm leading-relaxed text-muted-foreground">{faq.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </motion.div>
            </section>

            <section className="container mx-auto max-w-6xl px-4 pb-20 sm:px-6 md:px-8">
              <motion.div {...reveal} className="grid overflow-hidden border border-primary bg-primary md:grid-cols-[1fr_auto] md:items-center">
                <div className="p-7 sm:p-10 md:p-14">
                  <h2 className="font-heading text-5xl leading-none text-primary-foreground sm:text-7xl">{t.closingTitle}</h2>
                  <p className="mt-4 max-w-xl text-sm text-primary-foreground/80 sm:text-base">{t.closingText}</p>
                </div>
                <Button asChild variant="secondary" size="lg" className="m-7 rounded-none border border-primary-foreground/20 font-body text-xs font-bold uppercase sm:m-10">
                  <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">{t.closingCta}<ArrowRight /></a>
                </Button>
              </motion.div>
            </section>

            <section className="container mx-auto max-w-6xl px-4 pb-20 sm:px-6 md:px-8">
              <h2 className="mb-6 font-heading text-3xl">{t.others}</h2>
              <ul className="grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
                {others.map((item) => (
                  <li key={item.slug} className="bg-card">
                    <Link to={item.slug} className="group flex min-h-32 flex-col justify-between p-5 transition-colors hover:bg-secondary">
                      <span className="text-[0.62rem] font-bold uppercase text-primary">{item.eyebrow}</span>
                      <span className="mt-8 flex items-end justify-between gap-4 font-heading text-2xl leading-none">{item.h1} {item.h1Accent}<ArrowRight className="h-5 w-5 shrink-0 transition-transform group-hover:translate-x-1" /></span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          </article>
        </main>

        <SiteFooter />
        <FloatingWhatsAppButton />
      </div>
    </div>
  );
};

export default LandingPage;
import React from "react";
import { Link, useLocation } from "react-router-dom";
import Seo from "@/components/Seo";
import SiteFooter from "@/components/SiteFooter";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";
import AnimatedBackground from "@/components/AnimatedBackground";
import NotFound from "@/pages/NotFound";
import { landingBySlug, landings, type Landing } from "@/content/landings";

const WHATSAPP = "https://wa.me/573246875354";

const LandingPage: React.FC = () => {
  const { pathname } = useLocation();
  const landing = landingBySlug(pathname.replace(/\/$/, "")) as Landing | undefined;

  if (!landing) return <NotFound />;

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: landing.serviceName,
      serviceType: landing.serviceName,
      url: `https://cavadialab.com${landing.slug}`,
      provider: {
        "@type": "Person",
        name: "Reynaldo Montalvo Cavadia",
        url: "https://cavadialab.com/",
      },
      areaServed: [
        { "@type": "Country", name: "Colombia" },
        { "@type": "Country", name: "México" },
        { "@type": "Country", name: "España" },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Inicio", item: "https://cavadialab.com/" },
        {
          "@type": "ListItem",
          position: 2,
          name: landing.label,
          item: `https://cavadialab.com${landing.slug}`,
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: landing.faqs.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    },
  ];

  const others = landings.filter((l) => l.slug !== landing.slug);

  return (
    <div className="relative">
      <Seo
        title={landing.metaTitle}
        description={landing.metaDescription}
        path={landing.slug}
        jsonLd={jsonLd}
      />
      <AnimatedBackground />

      <div className="relative z-10">
        <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
          <nav className="container mx-auto px-3 sm:px-4 md:px-8 flex items-center justify-between h-14">
            <Link
              to="/"
              className="font-heading text-[0.85rem] sm:text-lg tracking-[0.12em] sm:tracking-[0.15em] text-primary hover:opacity-80 transition-opacity"
            >
              REYNALDO MONTALVO CAVADIA
            </Link>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground font-body text-[0.62rem] font-bold tracking-wider hover:brightness-110 hover:-translate-y-0.5 transition-all"
            >
              Hablemos →
            </a>
          </nav>
        </header>

        <main id="main" role="main" className="pt-24 pb-10">
          <article className="container mx-auto px-4 sm:px-6 md:px-8 max-w-3xl">
            <nav aria-label="Ruta de navegación" className="mb-6">
              <ol className="flex items-center gap-2 text-[0.6rem] font-bold uppercase tracking-wider text-muted-foreground">
                <li>
                  <Link to="/" className="hover:text-primary transition-colors">
                    Inicio
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li className="text-foreground">{landing.label}</li>
              </ol>
            </nav>

            <div className="section-label">{landing.eyebrow}</div>
            <h1 className="font-heading text-[clamp(2.2rem,6vw,4rem)] leading-[0.95] tracking-tight mb-5">
              {landing.h1}{" "}
              <span className="text-primary">{landing.h1Accent}</span>
            </h1>
            <p className="font-serif italic text-base sm:text-lg text-muted-foreground leading-relaxed mb-10">
              {landing.intro}
            </p>

            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground font-body text-xs font-bold tracking-wider hover:brightness-110 hover:-translate-y-0.5 transition-all mb-14"
            >
              Hablemos por WhatsApp →
            </a>

            {landing.blocks.map((block) => (
              <section key={block.heading} className="mb-12">
                <h2 className="font-heading text-[clamp(1.6rem,3.5vw,2.4rem)] leading-tight tracking-tight mb-4">
                  {block.heading}
                </h2>
                {block.paragraphs?.map((p) => (
                  <p
                    key={p}
                    className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-3"
                  >
                    {p}
                  </p>
                ))}
                {block.bullets && (
                  <ul className="space-y-2.5 mt-2">
                    {block.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex gap-3 text-sm sm:text-base text-muted-foreground leading-relaxed"
                      >
                        <span className="text-primary font-bold shrink-0">—</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}

            <section className="mb-14">
              <h2 className="font-heading text-[clamp(1.6rem,3.5vw,2.4rem)] leading-tight tracking-tight mb-5">
                Preguntas frecuentes
              </h2>
              <dl className="space-y-5">
                {landing.faqs.map((faq) => (
                  <div key={faq.question} className="border-t border-border pt-4">
                    <dt className="text-sm font-semibold text-foreground mb-2">
                      {faq.question}
                    </dt>
                    <dd className="text-sm text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </dd>
                  </div>
                ))}
              </dl>
            </section>

            <section className="border border-border bg-card p-6 sm:p-8 mb-14">
              <h2 className="font-heading text-[clamp(1.6rem,3.5vw,2.4rem)] leading-tight tracking-tight mb-3">
                ¿Listo para vender más?
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                Conversemos sin compromiso. Reviso tu situación y te digo qué
                cambiaría — con números, no con promesas.
              </p>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-[#25D366] text-black font-body text-xs font-bold tracking-wider hover:brightness-110 hover:-translate-y-0.5 transition-all"
              >
                Escribir por WhatsApp →
              </a>
            </section>

            <section>
              <h2 className="font-heading text-xl tracking-tight mb-4">
                Otros servicios
              </h2>
              <ul className="grid sm:grid-cols-2 gap-3">
                {others.map((o) => (
                  <li key={o.slug}>
                    <Link
                      to={o.slug}
                      className="block border border-border p-4 hover:border-primary/50 transition-colors"
                    >
                      <span className="block text-[0.6rem] font-bold uppercase tracking-wider text-primary mb-1">
                        {o.eyebrow}
                      </span>
                      <span className="block text-sm text-foreground">
                        {o.h1} {o.h1Accent}
                      </span>
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

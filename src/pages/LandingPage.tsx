import React from "react";
import { ArrowDown, ArrowRight, ArrowUpRight, Check, Globe } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { whatsappUrl } from "@/content/site";
import { trackWhatsAppClick } from "@/lib/gtag";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";
import Seo from "@/components/Seo";
import SiteFooter from "@/components/SiteFooter";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { landingBySlug, landings, type Landing } from "@/content/landings";
import NotFound from "@/pages/NotFound";
import { Reveal } from "@/components/StudioVisuals";
import adsArt from "@/assets/landing/ads.webp";
import searchArt from "@/assets/landing/search.webp";
import dataArt from "@/assets/landing/data.webp";
import webArt from "@/assets/landing/web.webp";
import growthArt from "@/assets/landing/growth.webp";
import metaLogo from "@/assets/logos/meta.svg";
import googleAdsLogo from "@/assets/logos/googleads.svg";
import tiktokLogo from "@/assets/logos/tiktok.svg";
import ga4Logo from "@/assets/logos/ga4.svg";
import gtmLogo from "@/assets/logos/gtm.svg";

type Tool = { name: string; logo: string | null };
const T = {
  meta: { name: "Meta Ads", logo: metaLogo },
  gads: { name: "Google Ads", logo: googleAdsLogo },
  tiktok: { name: "TikTok Ads", logo: tiktokLogo },
  ga4: { name: "GA4", logo: ga4Logo },
  gtm: { name: "Tag Manager", logo: gtmLogo },
  web: { name: "Web & Apps", logo: null },
} satisfies Record<string, Tool>;

const visuals: Record<string, { art: string; tools: Tool[] }> = {
  "/campanas-meta-ads": { art: adsArt, tools: [T.meta, T.tiktok] },
  "/campanas-google-ads": { art: searchArt, tools: [T.gads, T.ga4] },
  "/paid-media-manager": { art: adsArt, tools: [T.meta, T.gads] },
  "/analitica-y-tracking": { art: dataArt, tools: [T.ga4, T.gtm] },
  "/desarrollo-web-y-apps": { art: webArt, tools: [T.web, T.ga4] },
};
const fallbackVisual = { art: growthArt, tools: [T.meta, T.gads, T.ga4] };
export const artFor = (slug: string) => (visuals[slug] ?? fallbackVisual).art;

const COPY = {
  es: { home: "Inicio", breadcrumb: "Ruta de navegación", cta: "Hablemos por WhatsApp", navCta: "Hablemos", more: "Ver qué incluye", scan: "Lo que incluye", process: "Cómo trabajamos", faq: "Dudas comunes", closingTitle: "¿Revisamos tu caso?", closingText: "Cuéntame qué vendes y qué te está fallando.", closingCta: "Escribir ahora", others: "Otras soluciones" },
  en: { home: "Home", breadcrumb: "Breadcrumb", cta: "Talk on WhatsApp", navCta: "Let's talk", more: "See what's included", scan: "What's included", process: "How we work", faq: "Common questions", closingTitle: "Ready to talk?", closingText: "Tell me what you sell and what isn't working.", closingCta: "Message me", others: "Other solutions" },
} as const;

const LandingPage: React.FC = () => {
  const { pathname } = useLocation();
  const landing = landingBySlug(pathname.replace(/\/$/, "")) as Landing | undefined;
  if (!landing) return <NotFound />;

  const lang = landing.lang ?? "es";
  const t = COPY[lang];
  const visual = visuals[landing.slug] ?? fallbackVisual;
  const others = landings.filter((item) => item.slug !== landing.slug && (item.lang ?? "es") === lang);
  const processSteps = lang === "en"
    ? ["Review your offer and journey", "Agree scope and measurement", "Build and launch", "Review and adjust"]
    : ["Revisamos tu oferta", "Acordamos alcance y medición", "Implementamos", "Revisamos y ajustamos"];
  const wa = () => trackWhatsAppClick(`landing_${landing.slug.slice(1)}`);

  const jsonLd = [
    { "@context": "https://schema.org", "@type": "Service", name: landing.serviceName, serviceType: landing.serviceName, url: `https://cavadialab.com${landing.slug}`, provider: { "@id": "https://cavadialab.com/#business" }, areaServed: landing.market ? [{ "@type": "Country", name: landing.market }] : undefined },
    { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: t.home, item: "https://cavadialab.com/" }, { "@type": "ListItem", position: 2, name: landing.label, item: `https://cavadialab.com${landing.slug}` }] },
    { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: landing.faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) },
  ];

  return (
    <div className="lp relative bg-background">
      <Seo title={landing.metaTitle} description={landing.metaDescription} path={landing.slug} lang={lang} jsonLd={jsonLd} />

      <header className="site-header is-scrolled">
        <nav className="page-shell flex min-h-20 items-center justify-between gap-4">
          <Link to="/" className="brand-lockup"><span>Cavadia<span className="text-primary"> Lab</span></span><small>Reynaldo Montalvo Cavadia</small></Link>
          <Button asChild variant="outline"><a href={whatsappUrl(landing.serviceName)} onClick={wa} target="_blank" rel="noopener noreferrer">{t.navCta}<ArrowUpRight /></a></Button>
        </nav>
      </header>

      <main id="main">
        <article>
          <section className="lp-hero">
            <div className="lp-hero-glow" aria-hidden="true" />
            <div className="page-shell lp-hero-grid">
              <div className="lp-hero-copy">
                <nav aria-label={t.breadcrumb}>
                  <ol className="lp-crumbs"><li><Link to="/">{t.home}</Link></li><li aria-hidden>/</li><li>{landing.label}</li></ol>
                </nav>
                <p className="eyebrow">{landing.eyebrow}</p>
                <h1>{landing.h1} <span className="text-primary">{landing.h1Accent}</span></h1>
                <p className="lp-intro">{landing.intro}</p>
                <div className="hero-actions">
                  <Button asChild><a href={whatsappUrl(landing.serviceName)} onClick={wa} target="_blank" rel="noopener noreferrer">{t.cta}<ArrowUpRight /></a></Button>
                  <Button asChild variant="ghost"><a href="#incluye">{t.more}<ArrowDown /></a></Button>
                </div>
              </div>
              <div className="lp-art" aria-hidden="true">
                <img src={visual.art} alt="" width={560} height={560} fetchPriority="high" />
                <ul className="lp-art-pills">
                  {visual.tools.map((tool) => <li key={tool.name}>{tool.logo ? <img src={tool.logo} alt="" width={20} height={20} /> : <Globe size={18} />}{tool.name}</li>)}
                </ul>
              </div>
            </div>
          </section>

          <section id="incluye" className="page-shell lp-section">
            <Reveal className="lp-head"><p className="eyebrow">01 · {t.scan}</p><h2>{landing.serviceName}</h2></Reveal>
            <div className="lp-bento">
              {landing.blocks.map((block, index) => (
                <Reveal key={block.heading} delay={index * 0.06} className={`lp-card ${index === 0 || index === 3 ? "is-wide" : ""}`}>
                  <span className="lp-card-num">0{index + 1}</span>
                  <h3>{block.heading}</h3>
                  {block.paragraphs?.map((p) => <p key={p}>{p}</p>)}
                  {block.bullets && <ul>{block.bullets.map((b) => <li key={b}><Check size={16} />{b}</li>)}</ul>}
                </Reveal>
              ))}
            </div>
          </section>

          <section className="lp-process">
            <div className="page-shell lp-section">
              <Reveal className="lp-head"><p className="eyebrow">02 · {t.process}</p><h2>{lang === "en" ? "Four clear steps." : "Cuatro pasos claros."}</h2></Reveal>
              <ol className="lp-steps">
                {processSteps.map((step, i) => <Reveal key={step} delay={i * 0.08} className="lp-step"><span>0{i + 1}</span><p>{step}</p></Reveal>)}
              </ol>
            </div>
          </section>

          <section className="page-shell lp-section lp-faq">
            <Reveal className="lp-head"><p className="eyebrow">03 · FAQ</p><h2>{t.faq}</h2></Reveal>
            <Accordion type="single" collapsible>
              {landing.faqs.map((faq, index) => (
                <AccordionItem key={faq.question} value={`faq-${index}`}>
                  <AccordionTrigger className="py-5 text-left text-base hover:no-underline">{faq.question}</AccordionTrigger>
                  <AccordionContent forceMount className="faq-preserved text-muted-foreground leading-relaxed">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>

          <section className="page-shell lp-section">
            <Reveal className="lp-cta">
              <div><h2>{t.closingTitle}</h2><p>{t.closingText}</p></div>
              <Button asChild size="lg" variant="secondary"><a href={whatsappUrl(landing.serviceName)} onClick={wa} target="_blank" rel="noopener noreferrer">{t.closingCta}<ArrowRight /></a></Button>
            </Reveal>
          </section>

          <section className="page-shell lp-section">
            <h2 className="lp-related-title">{t.others}</h2>
            <ul className="lp-related">
              {others.map((item) => (
                <li key={item.slug}>
                  <Link to={item.slug}>
                    <img src={artFor(item.slug)} alt="" width={72} height={72} loading="lazy" decoding="async" />
                    <span><small>{item.eyebrow}</small>{item.label}</span>
                    <ArrowUpRight size={18} />
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
  );
};

export default LandingPage;

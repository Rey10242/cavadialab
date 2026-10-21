import { HOME_DESCRIPTION, SITE_URL, solutions } from "@/content/site";

export const identityGraph = [
  { "@type": "Person", "@id": `${SITE_URL}/#person`, name: "Reynaldo Montalvo Cavadia", jobTitle: "Consultor de marketing digital y desarrollo web", url: `${SITE_URL}/`, sameAs: ["https://www.linkedin.com/in/rmontalvocavadia/", "https://www.instagram.com/reynaldo.cavadia/"], worksFor: { "@id": `${SITE_URL}/#business` } },
  { "@type": "ProfessionalService", "@id": `${SITE_URL}/#business`, name: "Cavadia Lab", url: `${SITE_URL}/`, description: HOME_DESCRIPTION, founder: { "@id": `${SITE_URL}/#person` }, telephone: "+573246875354", email: "rmontalvocavadia@gmail.com", address: { "@type": "PostalAddress", addressLocality: "Cartagena de Indias", addressCountry: "CO" }, hasOfferCatalog: { "@type": "OfferCatalog", name: "Soluciones", itemListElement: solutions.map(s => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s.name, url: `${SITE_URL}${s.path}`, provider: { "@id": `${SITE_URL}/#business` } } })) } },
  { "@type": "WebSite", "@id": `${SITE_URL}/#website`, name: "Cavadia Lab", url: `${SITE_URL}/`, publisher: { "@id": `${SITE_URL}/#business` } },
];

export const pageSchema = (title: string, description: string, path: string, lang: string, extra: Record<string, unknown>[] = []) => ({
  "@context": "https://schema.org",
  "@graph": [...identityGraph, { "@type": "WebPage", "@id": `${SITE_URL}${path}#webpage`, url: `${SITE_URL}${path}`, name: title, description, inLanguage: lang, isPartOf: { "@id": `${SITE_URL}/#website` }, about: { "@id": `${SITE_URL}/#person` } }, ...extra],
});
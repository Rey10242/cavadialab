import { Helmet } from "react-helmet-async";
import { SITE_URL } from "@/content/site";
import { pageSchema } from "@/lib/siteSchema";
interface SeoProps { title: string; description: string; path: string; ogType?: string; lang?: "es" | "en"; image?: string; jsonLd?: Record<string, unknown> | Record<string, unknown>[]; }
export default function Seo({ title, description, path, ogType = "website", lang = "es", image, jsonLd }: SeoProps) {
 const url = `${SITE_URL}${path}`;
 const extra = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];
 return <Helmet><html lang={lang === "en" ? "en" : "es-CO"} /><title>{title}</title><meta name="description" content={description} /><link rel="canonical" href={url} />
 <meta property="og:type" content={ogType} /><meta property="og:site_name" content="Cavadia Lab" /><meta property="og:title" content={title} /><meta property="og:description" content={description} /><meta property="og:url" content={url} /><meta property="og:locale" content={lang === "en" ? "en_US" : "es_CO"} />
 <meta name="twitter:card" content={image ? "summary_large_image" : "summary"} /><meta name="twitter:title" content={title} /><meta name="twitter:description" content={description} />
 {image && <meta property="og:image" content={image} />}{image && <meta name="twitter:image" content={image} />}
 <script type="application/ld+json">{JSON.stringify(pageSchema(title, description, path, lang, extra))}</script>
 </Helmet>;
}

import { Helmet } from "react-helmet-async";
import { SITE_URL } from "@/content/site";
import { pageSchema } from "@/lib/siteSchema";
interface SeoProps { title: string; description: string; path: string; ogType?: string; lang?: "es" | "en"; image?: string; jsonLd?: Record<string, unknown> | Record<string, unknown>[]; }
export default function Seo({ title, description, path, ogType = "website", lang = "es", image = `${SITE_URL}/og-image.jpg`, jsonLd }: SeoProps) {
 const url = `${SITE_URL}${path}`;
 const extra = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];
 return <Helmet><html lang={lang === "en" ? "en" : "es-CO"} /><title>{title}</title><meta name="description" content={description} /><link rel="canonical" href={url} />
 <meta name="robots" content="index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1" /><meta name="googlebot" content="index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1" /><meta name="bingbot" content="index,follow" />
 <meta property="og:type" content={ogType} /><meta property="og:site_name" content="Cavadia Lab" /><meta property="og:title" content={title} /><meta property="og:description" content={description} /><meta property="og:url" content={url} /><meta property="og:locale" content={lang === "en" ? "en_US" : "es_CO"} />
 <meta name="twitter:card" content="summary_large_image" /><meta name="twitter:title" content={title} /><meta name="twitter:description" content={description} />
 <meta property="og:image" content={image} /><meta property="og:image:alt" content="Reynaldo Montalvo Cavadia, Cavadia Lab" /><meta name="twitter:image" content={image} />
 <script type="application/ld+json">{JSON.stringify(pageSchema(title, description, path, lang, extra))}</script>
 </Helmet>;
}

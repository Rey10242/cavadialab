import React from "react";
import { Helmet } from "react-helmet-async";

const SITE = "https://cavadialab.com";
const DEFAULT_IMAGE = `${SITE}/og-image.png`;
const IMAGE_ALT =
  "Reynaldo Montalvo Cavadia — Consultor de Marketing Digital en Cartagena";

interface SeoProps {
  title: string;
  description: string;
  path: string;
  ogType?: string;
  lang?: "es" | "en";
  image?: string;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
}

const Seo: React.FC<SeoProps> = ({
  title,
  description,
  path,
  ogType = "website",
  lang = "es",
  image = DEFAULT_IMAGE,
  jsonLd,
}) => {
  const url = `${SITE}${path}`;
  return (
    <Helmet>
      <html lang={lang === "en" ? "en" : "es-CO"} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content="CavadiaLab — Reynaldo Montalvo Cavadia" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content={IMAGE_ALT} />
      <meta property="og:locale" content={lang === "en" ? "en_US" : "es_CO"} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </Helmet>
  );
};

export default Seo;

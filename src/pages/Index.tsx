import React from "react";
import NexoNavbar from "@/components/NexoNavbar";
import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import ValueProp from "@/components/sections/ValueProp";
import Process from "@/components/sections/Process";
import Pricing from "@/components/sections/Pricing";
import Results from "@/components/sections/Results";
import Guarantee from "@/components/sections/Guarantee";
import FinalCTA from "@/components/sections/FinalCTA";
import SiteFooter from "@/components/SiteFooter";

const Index: React.FC = () => {
  React.useEffect(() => {
    const setMeta = (name: string, content: string) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("name", name);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };

    document.title = "NEXO | Estrategia, Automatización y Escalamiento";
    setMeta("description", "Construimos tu máquina de ventas digital con estrategia, automatización e IA para escalar tu negocio.");

    // Canonical
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", window.location.origin + "/");

    // JSON-LD
    const ld = {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "NEXO",
      url: window.location.origin,
      logo: "/lovable-uploads/f1c15801-958d-41b4-b919-77307a1fbe5d.png",
      sameAs: [],
      description: "Estrategia, automatización y escalamiento para tu negocio.",
    };
    let script = document.getElementById("ld-org") as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement("script") as HTMLScriptElement;
      script.id = "ld-org";
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(ld);
  }, []);

  return (
    <main>
      <NexoNavbar />
      <Hero />
      <Problem />
      <ValueProp />
      <Process />
      <Pricing />
      <Results />
      <Guarantee />
      <FinalCTA />
      <SiteFooter />
    </main>
  );
};

export default Index;

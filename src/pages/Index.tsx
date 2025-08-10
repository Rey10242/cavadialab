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

    document.title = "Máquina de ventas digital | Estrategia, automatización e IA — NEXO";
    setMeta("description", "Te construimos una máquina de ventas digital. Estrategia, automatización e IA para que vendas más y tu negocio dependa menos de ti.");

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

  React.useEffect(() => {
    const mql = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mql.matches) return;

    const root = document.documentElement;
    let raf = 0;

    const update = (x: number, y: number) => {
      root.style.setProperty('--x', `${x}px`);
      root.style.setProperty('--y', `${y}px`);
    };

    const onMouseMove = (e: MouseEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => update(e.clientX, e.clientY));
    };

    const onTouchMove = (e: TouchEvent) => {
      const t = e.touches[0];
      if (!t) return;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => update(t.clientX, t.clientY));
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('touchmove', onTouchMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <main className="spotlight">
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

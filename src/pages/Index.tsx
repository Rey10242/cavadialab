import React from "react";
import HeroPersonal from "@/components/sections/HeroPersonal";
import AboutMe from "@/components/sections/AboutMe";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import CavadiaNavbar from "@/components/CavadiaNavbar";
import SiteFooter from "@/components/SiteFooter";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";
import FloatingElements from "@/components/FloatingElements";
import AnimatedBackground from "@/components/AnimatedBackground";
import { useScrollTracking } from "@/hooks/useScrollTracking";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

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

    document.title = "Reynaldo Montalvo | Full Stack Marketer & Growth Expert";
    setMeta("description", "Portafolio de Reynaldo Montalvo Cavadia - Full Stack Marketer especializado en estrategia digital, automatización e IA para escalar negocios.");

    // Canonical
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", window.location.origin + "/");

    // JSON-LD - Person schema for portfolio
    const ld = {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Reynaldo Montalvo Cavadia",
      url: window.location.origin,
      image: "/src/assets/cavadialab-logo.png",
      jobTitle: "Full Stack Marketer & Growth Expert",
      worksFor: {
        "@type": "Organization",
        name: "CavadiaLab",
      },
      sameAs: [],
      description: "Full Stack Marketer especializado en estrategia digital, automatización e inteligencia artificial para escalar negocios.",
    };
    let script = document.getElementById("ld-person") as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement("script") as HTMLScriptElement;
      script.id = "ld-person";
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(ld);

    // WebSite schema
    const ldWebsite = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Reynaldo Montalvo - Portafolio",
      url: window.location.origin,
      inLanguage: "es",
    };
    let scriptWebsite = document.getElementById("ld-website") as HTMLScriptElement | null;
    if (!scriptWebsite) {
      scriptWebsite = document.createElement("script") as HTMLScriptElement;
      scriptWebsite.id = "ld-website";
      scriptWebsite.type = "application/ld+json";
      document.head.appendChild(scriptWebsite);
    }
    scriptWebsite.textContent = JSON.stringify(ldWebsite);
  }, []);

  React.useEffect(() => {
    const mql = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mql.matches) return;

    document.body.classList.add('spotlight');

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
      document.body.classList.remove('spotlight');
    };
  }, []);

  useScrollTracking();
  useScrollAnimation();

  return (
    <main className="relative">
      <AnimatedBackground />
      <FloatingElements />
      <div className="relative z-10">
        <CavadiaNavbar />
        <HeroPersonal />
        <AboutMe />
        <Projects />
        <Skills />
        <Testimonials />
        <Contact />
        <SiteFooter />
        <FloatingWhatsAppButton />
      </div>
    </main>
  );
};

export default Index;

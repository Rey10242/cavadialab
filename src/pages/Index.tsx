import React from "react";
import HeroPersonal from "@/components/sections/HeroPersonal";
import AboutMe from "@/components/sections/AboutMe";
import Skills from "@/components/sections/Skills";
import Methodology from "@/components/sections/Methodology";
// import CaseStudies from "@/components/sections/CaseStudies"; // Temporalmente oculto hasta tener más casos
import Services from "@/components/sections/Services";
// import Testimonials from "@/components/sections/Testimonials"; // Temporalmente oculto hasta tener testimonios reales
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

    document.title = "Reynaldo Montalvo | Full Stack Marketer & Growth Expert | Cartagena";
    setMeta("description", "Consultor de marketing digital y growth marketing en Cartagena, Colombia. Especialista en Google Ads, Meta Ads, automatización con IA y estrategias de performance para escalar negocios.");

    // Canonical
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", window.location.origin + "/");
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
    <div className="relative">
      <AnimatedBackground />
      <FloatingElements />
      <div className="relative z-10">
        <CavadiaNavbar />
        <HeroPersonal />
        <AboutMe />
        <Skills />
        <Methodology />
        {/* <CaseStudies /> */}{/* Temporalmente oculto hasta tener más casos de éxito */}
        <Services />
        {/* Testimonials temporalmente oculto hasta tener testimonios reales */}
        <Contact />
        <SiteFooter />
        <FloatingWhatsAppButton />
      </div>
    </div>
  );
};

export default Index;

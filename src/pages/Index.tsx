import React from "react";
import HeroPersonal from "@/components/sections/HeroPersonal";
import ProblemSection from "@/components/sections/ProblemSection";
import AboutMe from "@/components/sections/AboutMe";
import Methodology from "@/components/sections/Methodology";
import Services from "@/components/sections/Services";
import Contact from "@/components/sections/Contact";
import CavadiaNavbar from "@/components/CavadiaNavbar";
import SiteFooter from "@/components/SiteFooter";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";
import FloatingElements from "@/components/FloatingElements";
import AnimatedBackground from "@/components/AnimatedBackground";
import SectionDivider from "@/components/SectionDivider";
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

    document.title = "Reynaldo Montalvo | Consultor de Crecimiento Empresarial | Cartagena";
    setMeta("description", "Hago que tu negocio venda más, con orden y sin improvisar. Te ayudo a atraer clientes, convertirlos en ventas y crecer de forma sostenible.");

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
        <SectionDivider variant="wave" fillTo="hsl(var(--primary) / 0.06)" />
        <ProblemSection />
        <SectionDivider variant="curve" flip fillTo="hsl(var(--primary) / 0.04)" />
        <AboutMe />
        <SectionDivider variant="blob" fillTo="hsl(var(--primary) / 0.05)" />
        <Methodology />
        <SectionDivider variant="wave" flip fillTo="hsl(var(--primary) / 0.04)" />
        <Services />
        <SectionDivider variant="curve" fillTo="hsl(var(--primary) / 0.06)" />
        <Contact />
        <SiteFooter />
        <FloatingWhatsAppButton />
      </div>
    </div>
  );
};

export default Index;

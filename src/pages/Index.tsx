import React from "react";
import Seo from "@/components/Seo";
import HeroPersonal from "@/components/sections/HeroPersonal";
import Methodology from "@/components/sections/Methodology";
import Services from "@/components/sections/Services";
import AboutMe from "@/components/sections/AboutMe";
import Contact from "@/components/sections/Contact";
import FAQ from "@/components/sections/FAQ";

import CavadiaNavbar from "@/components/CavadiaNavbar";
import SiteFooter from "@/components/SiteFooter";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";
import AnimatedBackground from "@/components/AnimatedBackground";
import { useScrollTracking } from "@/hooks/useScrollTracking";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Index: React.FC = () => {
  useScrollTracking();
  useScrollAnimation();

    return (
    <div className="relative">
      <Seo
        title="Consultor de Marketing Digital en Cartagena | Reynaldo Montalvo Cavadia"
        description="Reynaldo Montalvo Cavadia — consultor de marketing digital en Cartagena de Indias. Especialista en Meta Ads, Google Ads, automatización y analítica. Estrategias de publicidad digital para conseguir clientes con datos reales."
        path="/"
      />
      <AnimatedBackground />
      <div className="relative z-10">
        <CavadiaNavbar />
        <main id="main" role="main">
          <HeroPersonal />
          <Services />
          <Methodology />
          <AboutMe />
          <FAQ />
          <Contact />
        </main>
        <SiteFooter />
        <FloatingWhatsAppButton />
      </div>
    </div>
  );
};

export default Index;

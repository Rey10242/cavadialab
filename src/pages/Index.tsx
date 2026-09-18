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

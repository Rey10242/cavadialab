import React from "react";
import Seo from "@/components/Seo";
import AttentionJourney from "@/components/AttentionJourney";
import Services from "@/components/sections/Services";
import AboutMe from "@/components/sections/AboutMe";
import Contact from "@/components/sections/Contact";
import FAQ from "@/components/sections/FAQ";

import CavadiaNavbar from "@/components/CavadiaNavbar";
import SiteFooter from "@/components/SiteFooter";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";
import { HOME_TITLE, HOME_DESCRIPTION, homeFaqs } from "@/content/site";
import { useScrollTracking } from "@/hooks/useScrollTracking";


const Index: React.FC = () => {
  useScrollTracking();


    return (
    <div className="relative">
      <Seo
        title={HOME_TITLE}
        description={HOME_DESCRIPTION}
        path="/"
        jsonLd={{ "@type": "FAQPage", mainEntity: homeFaqs.map(f => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })) }}
      />

      <div className="relative z-10">
        <CavadiaNavbar />
        <main id="main" role="main">
          <AttentionJourney />
          <Services />
          <FAQ />
          <AboutMe />
          <Contact />
        </main>
        <SiteFooter />
        <FloatingWhatsAppButton />
      </div>
    </div>
  );
};

export default Index;

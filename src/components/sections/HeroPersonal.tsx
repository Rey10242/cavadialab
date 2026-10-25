import { ArrowUpRight, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { whatsappUrl } from "@/content/site";
import { trackWhatsAppClick } from "@/lib/gtag";
export default function HeroPersonal() {
 return (
  <div id="inicio" className="spatial-hero">
   <p className="eyebrow">Marketing digital · Desarrollo web · Analítica</p>
   <h1>
    <span>Una cosa es saber qué hacer.</span>{" "}
    <span className="text-primary">Otra es saber hacerlo.</span>
   </h1>
   <p className="studio-lead">Construyo y gestiono soluciones digitales para tu negocio: publicidad digital, páginas web y aplicaciones a medida, con decisiones respaldadas por datos y la rentabilidad como prioridad.</p>
   <div className="hero-actions">
    <Button asChild><a href={whatsappUrl("mi negocio")} onClick={() => trackWhatsAppClick("home_hero")} target="_blank" rel="noopener noreferrer">Hablemos de tu negocio<ArrowUpRight aria-hidden="true"/></a></Button>
    <Button asChild variant="ghost"><a href="#servicios">Explorar servicios<ArrowDown aria-hidden="true"/></a></Button>
   </div>
   <p className="hero-location">Reynaldo Montalvo Cavadia · Cartagena, Colombia · Atención remota</p>
  </div>
 );
}

import portrait from "@/assets/perfil-reynaldo.png";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { whatsappUrl } from "@/content/site";
import { trackWhatsAppClick } from "@/lib/gtag";
import { Connections, PointerSurface, Reveal } from "@/components/StudioVisuals";
export default function HeroPersonal() {
 return <section id="inicio" className="studio-hero"><div className="page-shell studio-hero-grid">
  <Reveal className="studio-hero-copy"><p className="eyebrow">Cavadia Lab · Reynaldo Montalvo Cavadia</p><h1>Marketing que <span className="serif-word">conecta.</span><br />Tecnología que <span className="text-primary">convierte.</span></h1><p className="studio-lead">Conecto publicidad digital, analítica y desarrollo web para dar dirección a tu negocio. Desde Cartagena, contigo también a distancia.</p><div className="hero-actions"><Button asChild><a href={whatsappUrl("mi proyecto en Cavadia Lab")} onClick={() => trackWhatsAppClick("home_hero")} target="_blank" rel="noopener noreferrer">Hablemos de tu proyecto <ArrowUpRight /></a></Button><Button asChild variant="ghost"><a href="#servicios">Explorar soluciones <ArrowDown /></a></Button></div><p className="hero-location">Estrategia + ejecución, en primera persona.</p></Reveal>
  <PointerSurface tilt className="hero-art"><div className="portrait-plane" /><Connections className="hero-connections" /><div className="portrait-window"><img src={portrait} width={433} height={577} loading="eager" fetchPriority="high" decoding="async" alt="Reynaldo Montalvo Cavadia, fundador de Cavadia Lab" /></div><span className="art-label label-ads">Ads <ArrowUpRight size={14} /></span><span className="art-label label-data">Data <span className="tiny-cross">+</span></span><span className="art-label label-web">Web <span className="tiny-cross">↗</span></span><span className="portrait-signature">Reynaldo / Cavadia Lab</span></PointerSurface>
 </div></section>;
}

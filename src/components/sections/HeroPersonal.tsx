import perfilReynaldo from "@/assets/perfil-reynaldo.png";
import { ArrowRight, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { whatsappUrl } from "@/content/site";
import { trackWhatsAppClick } from "@/lib/gtag";

export default function HeroPersonal() {
  return <section id="inicio" className="hero-editorial">
    <div className="page-shell hero-layout">
      <div className="hero-copy">
        <p className="section-label">Cartagena, Colombia · Atención remota</p>
        <h1 className="hero-title">Publicidad, datos y tecnología <span className="text-primary">para hacer crecer tu negocio.</span></h1>
        <p className="hero-description">Soy <strong className="text-foreground font-semibold">Reynaldo Montalvo Cavadia.</strong> Conecto campañas en Meta Ads y Google Ads, analítica y desarrollo web para que tu inversión tenga dirección y tu negocio una experiencia digital más clara.</p>
        <div className="flex flex-col sm:flex-row gap-3 mt-8">
          <Button asChild><a href={whatsappUrl("mi proyecto en Cavadia Lab")} target="_blank" rel="noopener noreferrer" onClick={() => trackWhatsAppClick("home_hero")} >Hablemos de tu proyecto <ArrowRight /></a></Button>
          <Button asChild variant="outline"><a href="#servicios">Explorar soluciones <ArrowDown /></a></Button>
        </div>
      </div>
      <figure className="hero-portrait">
        <img src={perfilReynaldo} width={433} height={577} alt="Reynaldo Montalvo Cavadia, consultor de Cavadia Lab" loading="eager" decoding="async" fetchPriority="high" />
        <figcaption><span>Reynaldo Montalvo Cavadia</span><span className="text-muted-foreground">Estrategia y ejecución, en primera persona.</span></figcaption>
      </figure>
    </div>
    <div className="page-shell"><div className="capability-strip"><span>Publicidad con intención</span><span>Medición con criterio</span><span>Tecnología al servicio del negocio</span></div></div>
  </section>;
}

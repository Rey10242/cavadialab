import { ArrowUpRight, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { whatsappUrl } from "@/content/site";
import { trackWhatsAppClick } from "@/lib/gtag";
export default function HeroPersonal() {
 return <div id="inicio" className="spatial-hero"><p className="eyebrow">Cavadia Lab · Reynaldo Montalvo Cavadia</p><h1>Ideas que atraen.<br/><span className="text-primary">Sistemas que convierten.</span></h1><p className="studio-lead">Conecto marketing digital, analítica y desarrollo web para transformar el interés en oportunidades reales, con estrategia y ejecución desde Cartagena.</p><div className="hero-actions"><Button asChild><a href={whatsappUrl("mi proyecto en Cavadia Lab")} onClick={()=>trackWhatsAppClick("home_hero")} target="_blank" rel="noopener noreferrer">Hablemos de tu proyecto<ArrowUpRight/></a></Button><Button asChild variant="ghost"><a href="#servicios">Explorar soluciones<ArrowDown/></a></Button></div><p className="hero-location">Publicidad. Experiencia. Decisiones.</p></div>;
}

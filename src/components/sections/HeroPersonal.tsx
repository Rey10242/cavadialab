import { ArrowUpRight, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { whatsappUrl } from "@/content/site";
import { trackWhatsAppClick } from "@/lib/gtag";
export default function HeroPersonal() {
 return <div id="inicio" className="spatial-hero"><p className="eyebrow">Marketing digital · Desarrollo web · Analítica</p><h1>Tu negocio, mejor conectado con sus <span className="text-primary">clientes.</span></h1><p className="studio-lead">Creo páginas web, gestiono publicidad en Google y Meta y conecto los datos para que sepas qué está funcionando.</p><div className="hero-actions"><Button asChild><a href={whatsappUrl("mi negocio")} onClick={()=>trackWhatsAppClick("home_hero")} target="_blank" rel="noopener noreferrer">Hablemos de tu negocio<ArrowUpRight/></a></Button><Button asChild variant="ghost"><a href="#servicios">Explorar servicios<ArrowDown/></a></Button></div><p className="hero-location">Reynaldo Montalvo Cavadia · Cartagena, Colombia · Atención remota</p></div>;
}

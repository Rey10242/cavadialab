import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/StudioVisuals";
import portrait from "@/assets/perfil-reynaldo.png";
export default function AboutMe() {
 return <section id="sobre-mi" className="studio-section warm-section"><div className="page-shell personal-grid"><figure className="personal-portrait"><img src={portrait} width={433} height={577} loading="lazy" decoding="async" alt="Reynaldo Montalvo Cavadia, fundador de Cavadia Lab"/></figure><Reveal className="personal-copy"><p className="eyebrow">Quién está detrás</p><h2>Trabajas directamente<br/>conmigo.</h2><h3>Reynaldo Montalvo Cavadia</h3><p>Llevo más de 8 años en marketing digital, analítica y desarrollo web. Trabajas directamente conmigo: me siento contigo a entender tu negocio, definir prioridades y conectar cada anuncio con tus ventas. Tengo amplia experiencia impulsando reservas en hotelería y hospitality, y también acompaño empresas de servicios y comercio.</p><a href="https://www.linkedin.com/in/rmontalvocavadia/" target="_blank" rel="noopener noreferrer" className="profile-link">Conoce mi perfil en LinkedIn<ArrowUpRight size={20}/></a></Reveal></div></section>;
}

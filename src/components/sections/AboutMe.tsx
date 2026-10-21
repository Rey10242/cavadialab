import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/StudioVisuals";
import portrait from "@/assets/perfil-reynaldo.png";
export default function AboutMe() {
 return <section id="sobre-mi" className="studio-section warm-section"><div className="page-shell personal-grid"><figure className="personal-portrait"><img src={portrait} width={433} height={577} loading="lazy" decoding="async" alt="Reynaldo Montalvo Cavadia, fundador de Cavadia Lab"/></figure><Reveal className="personal-copy"><p className="eyebrow">Detrás de Cavadia Lab</p><h2>Tecnología con<br/>criterio humano.</h2><h3>Reynaldo Montalvo Cavadia</h3><p>Desde Cartagena conecto estrategia, publicidad y tecnología. Trabajas directamente conmigo, con prioridades claras y una mirada al recorrido completo de tu cliente. Hospitality es una experiencia destacada: consultas, reservas y atención más allá del clic. También acompaño otros sectores que necesitan conectar su presencia digital con su negocio.</p><a href="https://www.linkedin.com/in/rmontalvocavadia/" target="_blank" rel="noopener noreferrer" className="profile-link">Conoce mi perfil<ArrowUpRight size={20}/></a></Reveal></div></section>;
}

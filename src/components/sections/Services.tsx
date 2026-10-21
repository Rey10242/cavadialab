import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { solutions } from "@/content/site";
import { MicroVisual, PointerSurface, Reveal } from "@/components/StudioVisuals";
const benefits = ["Conecta tu oferta con personas relevantes en Facebook e Instagram.", "Aparece cuando alguien busca lo que tu negocio ofrece.", "Entiende qué ocurre después del clic y decide con criterio.", "Convierte tu presencia digital en una experiencia útil para tus clientes."];
export default function Services() {
 return <section id="servicios" className="studio-section"><div className="page-shell"><Reveal className="studio-section-heading"><div><p className="eyebrow">Soluciones conectadas</p><h2>Cuatro piezas.<br /><span className="serif-word">Un mismo propósito.</span></h2></div><span className="section-aside">De encontrar tu negocio<br />a elegirlo.</span></Reveal><div className="solution-bento">{solutions.map((s,i)=><Reveal key={s.path} delay={i*.07} className={`bento-slot bento-slot-${i}`}><PointerSurface className={`solution-bento-item solution-${i}`}><div className="solution-top"><span className="eyebrow">0{i+1} / {i===0 ? "Atención" : i===1 ? "Intención" : i===2 ? "Claridad" : "Experiencia"}</span><ArrowUpRight className="bento-arrow" aria-hidden="true" /></div><div className="solution-copy"><h3>{s.name}</h3><p>{benefits[i]}</p></div><MicroVisual kind={i} /><Link to={s.path} className="bento-link"><span>Explorar {s.name}</span><ArrowUpRight size={18} /></Link></PointerSurface></Reveal>)}</div></div></section>;
}

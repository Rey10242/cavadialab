import { useRef, useState } from "react";
import { motion, useMotionValueEvent, useScroll, useSpring } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowDown, ArrowUpRight, Globe } from "lucide-react";
import portrait from "@/assets/perfil-reynaldo.png";
import metaLogo from "@/assets/logos/meta.svg";
import googleAdsLogo from "@/assets/logos/googleads.svg";
import tiktokLogo from "@/assets/logos/tiktok.svg";
import ga4Logo from "@/assets/logos/ga4.svg";
import dataStudioLogo from "@/assets/logos/lookerstudio.svg";
import gtmLogo from "@/assets/logos/gtm.svg";
import searchConsoleLogo from "@/assets/logos/searchconsole.png";
import HeroPersonal from "@/components/sections/HeroPersonal";

type Tool = { name: string; logo: string | null };
const T: Record<string, Tool> = {
 web: { name: "Desarrollo web", logo: null },
 gtm: { name: "Tag Manager", logo: gtmLogo },
 meta: { name: "Meta Ads", logo: metaLogo },
 gads: { name: "Google Ads", logo: googleAdsLogo },
 tiktok: { name: "TikTok Ads", logo: tiktokLogo },
 ga4: { name: "Google Analytics 4", logo: ga4Logo },
 ds: { name: "Data Studio", logo: dataStudioLogo },
 sc: { name: "Search Console", logo: searchConsoleLogo },
};

const chapters = [
 { id: "base", label: "LA BASE", title: "Te armo una web rápida y lista para vender.", text: "Si la página es lenta o confusa, cualquier anuncio es plata botada.", tools: [T.web], links: [{ name: "Desarrollo Web & Apps", path: "/desarrollo-web-y-apps" }] },
 { id: "ojos", label: "LOS OJOS", title: "Te configuro el rastreo antes de gastar un peso.", text: "Así sabes de dónde llega cada visita y qué botón toca.", tools: [T.gtm, T.ga4, T.sc], links: [{ name: "Tracking & Analítica", path: "/analitica-y-tracking" }] },
 { id: "trafico", label: "EL TRÁFICO", title: "Te creo anuncios para compradores, no curiosos.", text: "Campañas para gente con ganas reales de comprar.", tools: [T.meta, T.gads], links: [{ name: "Meta Ads", path: "/campanas-meta-ads" }, { name: "Google Ads", path: "/campanas-google-ads" }] },
 { id: "control", label: "EL CONTROL", title: "Te muestro qué anuncio te dio cada cliente.", text: "Sabes dónde invertir más y qué apagar, sin adivinar.", tools: [T.ds], links: [{ name: "Informes en Data Studio", path: "/analitica-y-tracking" }] },
];

const tools = [
 { ...T.meta, pos: "t-meta", chs: [2] },
 { ...T.gads, pos: "t-gads", chs: [2] },
 { ...T.tiktok, pos: "t-tiktok", chs: [2] },
 { ...T.web, pos: "t-web", chs: [0] },
 { ...T.ga4, pos: "t-ga4", chs: [1] },
 { ...T.gtm, pos: "t-gtm", chs: [1] },
 { ...T.sc, pos: "t-sc", chs: [1] },
];

export default function AttentionJourney() {
 const story = useRef<HTMLDivElement>(null);
 const [active,setActive] = useState(0);
 const visibleTools = tools.map(tool => tool.pos === "t-ga4" && active === 3 ? { ...T.ds, pos: tool.pos, chs: [3] } : tool);
 const { scrollYProgress } = useScroll({ target: story, offset: ["start center", "end center"] });
 const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
 useMotionValueEvent(scrollYProgress,"change",value=> setActive(Math.max(0,Math.min(3,Math.floor(value*4)))));
 return <section className="attention-journey" aria-label="De la atención a la acción"><div className="page-shell journey-grid"><div className="journey-copy"><HeroPersonal/><div id="proceso" ref={story} className="story-chapters"><div className="story-heading"><p className="eyebrow">Cómo lo hago</p><h2>Cuatro pasos. Yo me encargo de todo.</h2></div><div className="story-track"><div className="story-line" aria-hidden="true"><motion.span style={{ scaleY: progress }}/></div>{chapters.map((chapter,i)=><motion.article key={chapter.id} id={chapter.id} className={`story-chapter ${active===i?"is-active":""} ${active>i?"is-done":""}`} initial={{ opacity: 0, y: 40, filter: "blur(6px)" }} whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }} viewport={{ once: true, margin: "-15% 0px" }} transition={{ duration: .6, ease: [.2,.8,.2,1] }}><span className="story-dot" aria-hidden="true"/><p className="chapter-number">0{i+1} <span>/ {chapter.label}</span></p><h3>{chapter.title}</h3><p className="chapter-description">{chapter.text}</p><ul className="chapter-tools" aria-label="Herramientas de este paso">{chapter.tools.map((t,k)=><motion.li key={t.name} className="float-pill" initial={{ opacity: 0, scale: .7, y: 12 }} whileInView={{ opacity: 1, scale: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: .25 + k*.12, type: "spring", stiffness: 260, damping: 18 }} style={{ animationDelay: `${-k*1.3}s` }}>{t.logo?<img src={t.logo} alt="" width={20} height={20}/>:<Globe size={18} aria-hidden="true"/>}<span>{t.name}</span></motion.li>)}</ul><div className="chapter-links">{chapter.links.map(link=><Link key={link.path+link.name} to={link.path}>{link.name}<ArrowUpRight size={16}/></Link>)}</div></motion.article>)}</div></div></div><div className="core-column"><div className="core-sticky"><div className="tool-stage"><div className="tool-glow" aria-hidden="true"/><img className="tool-portrait" src={portrait} alt="Reynaldo Montalvo Cavadia, consultor de marketing digital" width={433} height={577} fetchPriority="high"/><ul className="tool-pills" aria-label="Plataformas con las que trabajo">{visibleTools.map(t=><li key={t.name} className={`tool-pill ${t.pos} ${t.chs.includes(active)?"is-lit":""}`}>{t.logo?<img src={t.logo} alt="" width={22} height={22}/>:<Globe size={20} aria-hidden="true"/>}<span>{t.name}</span></li>)}</ul></div><div className="core-caption"><span>CAVADIA LAB / HERRAMIENTAS QUE USO A DIARIO</span><ArrowDown size={16}/></div><nav className="chapter-indicator" aria-label="Pasos del recorrido">{chapters.map((c,i)=><a key={c.id} href={`#${c.id}`} aria-current={active===i?"step":undefined}><span>0{i+1}</span>{c.label}</a>)}</nav></div></div></div></section>;
}
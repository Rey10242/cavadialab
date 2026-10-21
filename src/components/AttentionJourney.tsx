import { useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowDown, ArrowUpRight, Globe } from "lucide-react";
import portrait from "@/assets/perfil-reynaldo.png";
import metaLogo from "@/assets/logos/meta.svg";
import googleAdsLogo from "@/assets/logos/googleads.svg";
import tiktokLogo from "@/assets/logos/tiktok.svg";
import ga4Logo from "@/assets/logos/ga4.svg";
import gtmLogo from "@/assets/logos/gtm.svg";
import HeroPersonal from "@/components/sections/HeroPersonal";

const chapters = [
 { id: "demanda", label: "ANUNCIOS", title: "Poner tu oferta frente a gente lista para comprar.", text: "No se trata de pagar por likes ni clics vacíos. Creo anuncios en Facebook, Instagram, Google y TikTok pensados para despertar interés real en quien sí puede comprarte.", links: [{ name: "Campañas Meta Ads", path: "/campanas-meta-ads" }, { name: "Campañas Google Ads", path: "/campanas-google-ads" }] },
 { id: "experiencia", label: "TU WEB", title: "Una página donde sea fácil pedir información o comprar.", text: "Si alguien hace clic en tu anuncio y llega a una página lenta, enredada o sin botón de WhatsApp, perdiste tu dinero. Construyo sitios rápidos y claros.", links: [{ name: "Desarrollo Web & Apps", path: "/desarrollo-web-y-apps" }] },
 { id: "datos", label: "DATOS Y CONTROL", title: "Saber qué anuncio trajo ese mensaje a tu WhatsApp.", text: "El eslabón que a la mayoría de empresas les falta: saber qué campaña te genera ventas y cuál te hace perder plata. Cero adivinanzas, números claros.", links: [{ name: "Tracking & Analítica", path: "/analitica-y-tracking" }] },
];

const tools = [
 { name: "Meta Ads", logo: metaLogo, pos: "t-meta", ch: 0 },
 { name: "Google Ads", logo: googleAdsLogo, pos: "t-gads", ch: 0 },
 { name: "TikTok Ads", logo: tiktokLogo, pos: "t-tiktok", ch: 0 },
 { name: "Desarrollo web", logo: null, pos: "t-web", ch: 1 },
 { name: "Google Analytics 4", logo: ga4Logo, pos: "t-ga4", ch: 2 },
 { name: "Tag Manager", logo: gtmLogo, pos: "t-gtm", ch: 2 },
];

export default function AttentionJourney() {
 const story = useRef<HTMLDivElement>(null);
 const [active,setActive] = useState(0);
 const { scrollYProgress } = useScroll({ target: story, offset: ["start center", "end center"] });
 useMotionValueEvent(scrollYProgress,"change",value=> setActive(Math.min(2,Math.floor(value*3))));
 return <section className="attention-journey" aria-label="De la atención a la acción"><div className="page-shell journey-grid"><div className="journey-copy"><HeroPersonal/><div id="proceso" ref={story} className="story-chapters"><div className="story-heading"><p className="eyebrow">De la atención a la acción</p><h2>Todo está conectado.</h2></div>{chapters.map((chapter,i)=><article key={chapter.id} id={chapter.id} className={`story-chapter ${active===i?"is-active":""}`}><p className="chapter-number">0{i+1} <span>/ {chapter.label}</span></p><h3>{chapter.title}</h3><p className="chapter-description">{chapter.text}</p><div className="chapter-links">{chapter.links.map(link=><Link key={link.path} to={link.path}>{link.name}<ArrowUpRight size={18}/></Link>)}</div></article>)}</div></div><div className="core-column"><div className="core-sticky"><div className="tool-stage"><div className="tool-glow" aria-hidden="true"/><img className="tool-portrait" src={portrait} alt="Reynaldo Montalvo Cavadia, consultor de marketing digital" width={433} height={577} fetchPriority="high"/><ul className="tool-pills" aria-label="Plataformas con las que trabajo">{tools.map(t=><li key={t.name} className={`tool-pill ${t.pos} ${active===t.ch?"is-lit":""}`}>{t.logo?<img src={t.logo} alt="" width={22} height={22}/>:<Globe size={20} aria-hidden="true"/>}<span>{t.name}</span></li>)}</ul></div><div className="core-caption"><span>CAVADIA LAB / HERRAMIENTAS QUE USO A DIARIO</span><ArrowDown size={16}/></div><nav className="chapter-indicator" aria-label="Capítulos del recorrido">{chapters.map((c,i)=><a key={c.id} href={`#${c.id}`} aria-current={active===i?"step":undefined}><span>0{i+1}</span>{c.label}</a>)}</nav></div></div></div></section>;
}
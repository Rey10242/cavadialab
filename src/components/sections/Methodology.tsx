const steps = [
 { title: "Entender", description: "Revisamos tu oferta, el recorrido del cliente y lo que ya estás haciendo.", output: "Un punto de partida claro" },
 { title: "Conectar", description: "Definimos canales, mensajes, experiencia web y qué acciones vamos a medir.", output: "Un plan compartido" },
 { title: "Aprender", description: "Lanzamos, revisamos datos y probamos cambios con criterios acordados.", output: "Decisiones, no suposiciones" },
 { title: "Evolucionar", description: "Ajustamos el sistema y evaluamos cuándo tiene sentido ampliar la inversión.", output: "El siguiente paso con contexto" },
];
export default function Methodology() {
 return <section id="proceso" className="section-padding"><div className="page-shell"><div className="section-intro"><div><p className="section-label">Método</p><h2 className="section-title">Claridad antes<br />de velocidad.</h2></div><p>Un proceso compartido para saber qué hacemos, por qué lo hacemos y cómo evaluamos el avance.</p></div><ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">{steps.map((s,i) => <li key={s.title} className="border-t border-border pt-5"><span className="font-heading text-5xl text-primary">0{i+1}</span><h3 className="text-xl font-semibold my-5">{s.title}</h3><p className="leading-relaxed text-muted-foreground">{s.description}</p><p className="text-sm text-foreground border-l-2 border-primary pl-3 mt-6">{s.output}</p></li>)}</ol></div></section>;
}

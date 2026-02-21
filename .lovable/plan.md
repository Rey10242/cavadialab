

# Plan: Narrativa Persuasiva - De Explicativa a Conversacional con Flujo Claro

## Diagnostico: Por que se siente repetitiva

Actualmente, **las mismas ideas se repiten en 3-4 secciones distintas**:

- "Atraer clientes" aparece en Hero, AboutMe y Services
- "Sin desperdiciar dinero" aparece en Hero, AboutMe y Services
- "Claridad en numeros" aparece en AboutMe (2 veces) y Services (2 veces)
- "Escalar sin perder dinero" aparece en AboutMe y Methodology
- "Crecer con orden" aparece en Hero y Contact

Cada seccion intenta ser auto-contenida y decir todo, en vez de ser UN paso en una historia que fluye.

---

## Nueva Narrativa: Cada seccion dice UNA cosa y pasa la posta

```text
HERO      --> "Esto es lo que hago" (promesa directa, sin explicar)
PROBLEMA  --> "Esto es lo que te pasa" (tension, dolor)
SOBRE MI  --> "Yo entiendo tu situacion" (confianza, conexion)
PROCESO   --> "Asi lo resolvemos" (alivio, claridad)
SERVICIOS --> "Esto es lo que incluye" (especificos, sin repetir)
CONTACTO  --> "Hablemos" (accion, sin volver a explicar)
```

---

## Cambios Concretos por Seccion

### 1. HERO - Solo la promesa, nada mas

**Quitar**: "Te ayudo a atraer clientes potenciales, convertirlos en ventas y crecer de forma sostenible, sin desperdiciar dinero en campanas que no funcionan." (esto ya se dice en otras secciones)

**Dejar**:
- "Hago que tu negocio venda mas, con orden y sin improvisar."
- Subtitulo nuevo mas corto: "Estructuro tu marketing para que cada peso invertido te acerque a una venta."
- CTAs se mantienen

Resultado: Hero limpio, impactante, sin adelantar lo que viene despues.

### 2. PROBLEMA - Mas tenso, menos listado

**Quitar**: La estadistica "72%" (inventada, resta credibilidad) y reducir las 4 tarjetas a texto directo mas contundente.

**Nuevo enfoque**: En vez de 4 tarjetas con iconos (se siente como lista), usar texto narrativo corto y directo tipo "conversacion":

- "Pagas publicidad pero no sabes si te da resultados."
- "Recibes mensajes, pero no sabes cuantos se convierten en ventas."
- "No tienes claro cuanto te cuesta conseguir un cliente."

Cierre mas directo: "El problema no es la publicidad. Es la falta de estructura. Si no mides, no creces... estas apostando."

Quitar el layout de 2 columnas y volver a un diseno centrado mas contundente, tipo manifiesto.

### 3. SOBRE MI - Solo confianza, sin repetir promesas

**Quitar**: La lista "Que hago" (atraer, convertir, seguimiento, medir, escalar) - esto se repite en Services.
**Quitar**: "Mi trabajo es que sepas exactamente que esta pasando con tu inversion" - esto ya se dice en Services.
**Quitar**: Toda la seccion "Resultados que Buscamos" (5 tarjetas) - repite lo que dicen Services y Hero.

**Dejar/Nuevo**:
- Presentacion personal corta (2 parrafos max)
- Stats (+50, +8, Foco en resultados)
- Nuevo bloque: "Con quien trabajo" - listar el perfil del cliente ideal:
  - "Empresarios que ya estan vendiendo"
  - "Quieren crecer pero con orden"
  - "Estan dispuestos a invertir de forma inteligente"
  - "Buscan resultados, no experimentos eternos"
- Frase de cierre: "Si tu negocio depende solo del voz a voz o de la suerte, podemos cambiar eso."

Esto genera identificacion sin repetir lo que hacemos.

### 4. PROCESO - Se mantiene casi igual

El contenido actual del Methodology esta bien. Solo ajustar:
- Subtitulo mas directo: "Un proceso claro para dejar de improvisar."
- El cierre ya esta bien: "Sin formulas magicas..."
- No tocar estructura visual (timeline funciona perfecto)

### 5. SERVICIOS - Especificos, sin repetir el "por que"

**Quitar**: Los subtitulos explicativos largos de cada servicio que repiten la promesa general.

**Nuevo enfoque**: Descripciones mas cortas y especificas de lo que INCLUYE cada servicio, no de por que es importante:

1. "Organizar tu publicidad" --> "Estructuramos campanas, presupuestos y canales para que nada se desperdicie."
2. "Atraer mejores clientes" --> "Segmentacion precisa para llegar a quien realmente puede comprarte."
3. "Mejorar tus resultados actuales" --> "Analizamos lo que ya tienes y optimizamos sin gastar mas."
4. "Saber si tu inversion funciona" --> "Dashboards y reportes claros con los numeros que importan."
5. "Tener claridad sobre tus numeros" --> "Sabes cuanto cuesta cada cliente, cada venta, cada clic."

**Quitar**: El CTA inferior "No estas seguro de que necesitas?" - ya hay CTAs suficientes.

### 6. CONTACTO - Solo accion, sin volver a explicar

**Quitar**: "En una llamada revisamos tu situacion y te digo con claridad que se puede mejorar y que no vale la pena hacer." (ya lo dijimos en proceso)

**Nuevo titulo mas corto**: "Listo para crecer con orden?"
**Subtitulo**: "Agenda una llamada y revisamos tu situacion. Sin compromiso."

Simplificar: quitar el bloque grande de WhatsApp con icono animado (es demasiado protagonico y repite el boton flotante). Integrar el WhatsApp como CTA principal dentro del formulario.

---

## Detalles Tecnicos

### Archivos a modificar:
- `src/components/sections/HeroPersonal.tsx` - Subtitulo mas corto
- `src/components/sections/ProblemSection.tsx` - Layout centrado tipo manifiesto, sin 72%, texto directo
- `src/components/sections/AboutMe.tsx` - Quitar lista "Que hago", quitar "Resultados que buscamos", agregar "Con quien trabajo"
- `src/components/sections/Methodology.tsx` - Solo ajuste de subtitulo
- `src/components/sections/Services.tsx` - Descripciones mas cortas y especificas, quitar CTA inferior
- `src/components/sections/Contact.tsx` - Titulo mas corto, quitar bloque WhatsApp grande, integrar WhatsApp como CTA en el formulario

### Principios:
- Cada seccion dice UNA idea nueva
- Cero repeticion entre secciones
- Menos texto, mas intencion
- Narrativa: gancho, tension, confianza, alivio, especificos, accion


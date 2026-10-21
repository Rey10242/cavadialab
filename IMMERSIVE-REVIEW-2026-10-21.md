# Cavadia Lab — De la atención a la acción

## Implementación
- Composición nueva, no una capa de efectos sobre el bento anterior: portada espacial, núcleo naranja de tres anillos, tres capítulos Ads → Experiencia Web → Datos, índice de servicios, retrato auténtico en sección cálida, consultoría y contacto.
- Titular HTML único, tres líneas en escritorio; descripción de 20 palabras. Una familia principal, Barlow, servida localmente; sin marcos inclinados, etiquetas flotantes ni falsas interfaces.
- `AttentionJourney.tsx` mantiene HTML, enlaces nativos e indicador de capítulos independientes del canvas. El tramo narrativo ocupa aproximadamente 240vh en escritorio; no intercepta rueda, flechas ni gestos. Móvil y movimiento reducido presentan capítulos compactos sin pin.
- `coreRenderer.ts` usa import directo y diferido de Three.js, geometría procedural, tres materiales, iluminación local, DPR máximo 1.5, sin modelos, texturas, física, audio ni postprocesado. Render bajo demanda; amortiguación independiente de FPS. Pointer/drag de ratón suave sin bloquear scroll vertical.
- SVG con profundidad disponible desde el primer render. El canvas se intenta después de 600 ms solo en escritorio con puntero fino y sin movimiento reducido; errores de WebGL conservan SVG. Context loss restaura fallback. Salir del viewport, ocultar la pestaña o reducir el ancho detiene el render.
- Landings conservan textos, URLs y enlaces y heredan la nueva tipografía, jerarquía y tokens; ninguna carga canvas.

## Archivos de esta pasada
Nuevos: `src/components/AttentionJourney.tsx`, `src/components/coreRenderer.ts`, este documento.

Modificados: `src/components/sections/HeroPersonal.tsx`, `src/components/sections/Services.tsx`, `src/components/sections/AboutMe.tsx`, `src/pages/Index.tsx`, `src/index.css`, `package.json`, `bun.lock`, `AGENTS.md`, `roadmap.md`. Preferencia artística actualizada en memoria del proyecto.

No se modificaron contenido compartido de precios/FAQ, SEO, GTM, lógica del formulario, autenticación ni base de datos. El antiguo componente de metodología queda sin montar; el nuevo recorrido lo sustituye en home.

## Evidencia y QA
- Capturas inspeccionadas: `/tmp/browser/cavadia-core/hero1440.png`, `demanda1440.png`, `experiencia1440.png`, `datos1440.png`, `personal1440.png`, `consult1440.png`, `services-complete1440.png`, `final-hero390.png`, `final-hero360.png`, `services-complete390.png`, `services-complete360.png`, `reduced1440.png`, `no-webgl1440.png`, `core-before-drag.png`, `core-after-drag.png`, `landing1440.png`.
- Comparación real bajo el mismo criterio (`main.textContent`, incluyendo respuestas FAQ montadas): antes 390 palabras, después 451. La home cumple el rango solicitado de 450–550; el cambio importante es composición y narrativa, no otra reducción de copy.
- Playwright: hero y tres estados del objeto visibles; cambios por scroll y drag comprobados. Diez rutas con H1 único, canonical oficial, metadata/OG presentes, JSON-LD parseable y preguntas FAQ del schema disponibles en sus acordiones.
- 360/390px: sin overflow horizontal, sin canvas ni pin largo, menú abre con teclado/clic y cierra con Escape devolviendo foco; enlaces de método y servicios funcionan. En escritorio Enter sobre el indicador llega a `#experiencia`; Tab continúa al enlace real de Desarrollo Web (comportamiento de ancla nativa).
- FAQ abre y muestra su respuesta. Formulario progresivo abierto y rellenado con datos `.invalid`, sin pulsar enviar. No se enviaron registros ni correos ni se hicieron cambios en BD.
- Movimiento reducido: cero canvas, sticky relativo y transiciones anuladas. WebGL bloqueado: fallback visible y texto/CTA independientes.
- Pausa medida por instrumentación RAF: 0 callbacks durante 700 ms tras asentarse y 0 estando fuera de pantalla. Sin errores JavaScript de página en recorrido normal.
- Contraste de tokens: texto principal 15.72:1; texto secundario 8.51:1; naranja/navy 6.14:1; sección cálida principal 15.36:1, secundario 6.89:1, acento 5.78:1. Superan AA para texto normal.
- `bun run test`: 9 pruebas aprobadas, 0 fallos. Última señal automática de compilación: `build OK` (01:16:05 UTC). No se ejecutó manualmente build/typecheck.

## Peso y laboratorio, no campo
- Bundle aislado minificado del import 3D, medido con esbuild + gzip: **487872 bytes sin comprimir / 123308 bytes gzip (120.4 KiB)**. Incluye Three y el renderer; no es una medición del chunk final desplegado ni del incremento exacto de toda la aplicación.
- En Vite de desarrollo local con Chromium headless/software WebGL, una navegación observó LCP **656 ms** y DOMContentLoaded **390 ms**. El módulo Three de desarrollo transferido fue 1228210 bytes y el renderer 21188 bytes. No extrapolar a producción, teléfonos reales, Lighthouse ni usuarios de campo; no hay afirmación de carga inferior a tres segundos.

## Límites y pendientes externos
- Revisar sensación de scroll y rendimiento en dispositivos físicos y medir el bundle final al publicar; no hay datos de campo de esta versión.
- El canvas se desactiva si se reduce la ventana por debajo del umbral; para reactivarlo al volver a escritorio se recarga la página. El fallback sigue disponible siempre.
- SEO sigue en Classic SPA; SSR conserva su preflight y migración oficial separada, no realizada en esta pasada.
- No publicado; dominio y DNS intactos. Skill utilizada como guía de límites visuales y QA: `3d-game`; se eligió el import directo de Three autorizado por el usuario en lugar de añadir Fiber/Drei.
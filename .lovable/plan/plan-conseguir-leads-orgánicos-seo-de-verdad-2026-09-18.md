# Plan: conseguir leads orgánicos (SEO de verdad)

## Diagnóstico (verificado hoy)

- La revisión técnica **pasa todo**: título, descripción, favicon, vista previa social, idioma y viewport están correctos. El problema no es la ficha técnica.
- **Google Search Console no está conectado** a este proyecto, así que hoy no hay forma de saber si Google siquiera está indexando el sitio ni qué búsquedas lo muestran. Sin ese dato, cualquier cambio es a ciegas.
- El sitio es **una sola página**. Google necesita una página por tema para posicionar. Hoy compite con una sola URL contra decenas de keywords ("Paid Media Manager", "consultor marketing digital Cartagena", "PPC", etc.).
- El `sitemap.xml` lista anclas (`/#servicios`, `/#faq`). Google no las trata como páginas; el sitemap efectivamente declara **una sola URL**.
- El contenido de la página se arma en el navegador, no en el servidor, lo que hace más lenta y frágil la lectura por parte de buscadores y de las IA de búsqueda.

Conclusión: no llegan leads orgánicos porque no hay superficie indexable ni medición, no porque falten etiquetas.

## Fase 1 — Medición (primero, sin esto no se avanza)

1. Conectar Google Search Console al proyecto y verificar el dominio `cavadialab.com`.
2. Enviar el sitemap y revisar cobertura de indexación.
3. Corregir el `sitemap.xml`: dejar solo URLs reales (hoy, la home) y sumar las nuevas páginas conforme se publiquen.

## Fase 2 — Páginas que pueden posicionar

Crear páginas propias, cada una con su título, descripción, URL y contenido único (400-800 palabras, enfocadas en una intención):

- `/consultor-marketing-digital-cartagena` (local, la de mayor intención de compra)
- `/paid-media-manager` (rol / servicio)
- `/campanas-google-ads` y `/campanas-meta-ads` (por canal)
- `/analitica-y-tracking` (GA4, GTM, Looker)

Cada página: problema del cliente, cómo trabajas, qué incluye, resultados, preguntas frecuentes propias y un CTA a WhatsApp. Enlazadas desde el menú y el pie de página.

## Fase 3 — Contenido que atrae búsquedas

Un blog con 6-8 artículos iniciales que respondan a lo que tu cliente busca antes de contratar: cuánto cuesta anunciar en Meta, por qué mi publicidad no vende, cómo medir el costo por cliente, etc. Cada artículo enlaza a la página de servicio correspondiente.

## Fase 4 — Autoridad y local

- Ficha de Google Business Profile para Cartagena (la vía más rápida a leads locales).
- Perfiles y menciones con enlace: LinkedIn, directorios de marketing, colaboraciones.

## Expectativa de tiempos

Indexación: 1-3 semanas. Primeras impresiones y clics: 4-8 semanas. Leads orgánicos consistentes: 3-6 meses. La ficha local y los enlaces a WhatsApp suelen dar resultado antes.

## Notas técnicas

- Páginas nuevas como rutas en `src/App.tsx` + `react-helmet-async` para título/descripción/canónica por ruta.
- Un canónico por ruta, autorreferenciado; quitar el canónico fijo de `index.html` al adoptar Helmet y dejar los `og:*` generales como respaldo.
- Schema por página: `Service` en servicios, `Article` + `BreadcrumbList` en blog.
- Al ser una app que se arma en el navegador, las vistas previas por página y la lectura por buscadores mejoran mucho con renderizado en servidor: se consigue migrando a la plantilla TanStack Start ([qué aporta la migración](https://lovable.dev/blog/building-apps-using-tanstack-start)). Opcional, no bloquea nada de lo anterior.

## Orden sugerido

Empezar por Fase 1 + las dos primeras páginas de Fase 2 en esta iteración, y seguir con el resto.

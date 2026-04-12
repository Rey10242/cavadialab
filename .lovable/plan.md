# Plan: Implementar estrategia SEO completa para palabras clave de marketing digital

## Resumen

Integrar las 30 palabras clave de marketing digital/paid media directamente en el sitio web existente, optimizando meta tags, structured data, contenido visible y schema markup para posicionar en Google, Bing y Yahoo.

---

## Contexto actual

El sitio ya tiene una base SEO sólida: JSON-LD con `Person`, `ProfessionalService`, `FAQPage`, meta tags geo-targeting, sitemap.xml y robots.txt. Sin embargo, las palabras clave actuales se enfocan solo en "consultor marketing digital cartagena". Falta cobertura para los roles profesionales objetivo (Paid Media Manager, PPC Manager, Growth Marketing Manager, etc.).

---

## Cambios a implementar

### 1. Meta tags ampliados (`index.html`)

- **Title**: Incluir "Paid Media Manager" y "Performance Marketing" en el título.
- **Description**: Reescribir para cubrir las keywords de mayor volumen: Paid Media Specialist, PPC Manager, Growth Marketing, Media Buyer, etc.
- **Keywords meta**: Agregar las 30 palabras clave objetivo.
- **OG/Twitter tags**: Actualizar para reflejar los nuevos términos.

### 2. JSON-LD Structured Data ampliado (`index.html`)

- **Person.jobTitle**: Agregar array con múltiples títulos profesionales (Paid Media Manager, Performance Marketing Lead, etc.).
- **Person.knowsAbout**: Ampliar con todos los roles y disciplinas objetivo.
- **ProfessionalService**: Agregar nuevos servicios al `hasOfferCatalog` (PPC Management, Programmatic Media, CRO, Demand Generation, etc.).
- **Agregar schema `Occupation**`: Para los roles profesionales, mejorando la aparición en rich results de "People also ask".

### 3. Contenido visible optimizado

- **Services.tsx**: Ampliar las descripciones de servicios para incluir keywords objetivo naturalmente. Agregar un nuevo servicio "04 - Performance & Growth" que cubra: CRO, Demand Generation, User Acquisition.
- **AboutMe.tsx**: Enriquecer el texto con menciones naturales a roles como "Media Buyer", "Performance Marketing Manager", "Growth Lead".
- **FAQ.tsx**: Agregar 3-4 preguntas nuevas orientadas a las keywords:
  - "¿Qué hace un Paid Media Manager?"
  - "¿Cuál es la diferencia entre un PPC Manager y un Media Buyer?"
  - "¿Necesito un Growth Marketing Manager o un consultor?"

### 4. FAQ Schema actualizado (`index.html`)

- Sincronizar el JSON-LD `FAQPage` con las nuevas preguntas agregadas al componente FAQ.

### 5. Sitemap.xml actualizado

- Agregar entrada para `/#faq` con mayor prioridad (las FAQs con schema son high-value para featured snippets).
- Actualizar `lastmod` dates.

### 6. Robots.txt

- Sin cambios significativos (ya está bien configurado).

---

## Detalles técnicos


| Archivo                                    | Cambio                                                          |
| ------------------------------------------ | --------------------------------------------------------------- |
| `index.html`                               | Meta tags, JSON-LD Person/ProfessionalService/FAQPage ampliados |
| `src/components/sections/HeroPersonal.tsx` | Línea de keywords semánticas                                    |
| `src/components/sections/Services.tsx`     | Nuevo servicio #04, descripciones enriquecidas                  |
| `src/components/sections/AboutMe.tsx`      | Texto con keywords naturales                                    |
| `src/components/sections/FAQ.tsx`          | 3-4 nuevas preguntas keyword-driven                             |
| `public/sitemap.xml`                       | Actualización de prioridades y lastmod                          |


---

## Lo que NO cambia

- Diseño visual, colores, layout, responsive
- Funcionalidad existente (tracking, formularios, WhatsApp)
- URLs (es una SPA single-page, no se crean nuevas rutas)

## Nota importante

Este es un sitio single-page. Para posicionar las 30 keywords de forma óptima a largo plazo, eventualmente sería ideal crear páginas individuales (blog/landing pages). Por ahora, maximizamos el SEO on-page con lo que tenemos: structured data, contenido semántico y FAQ schema.
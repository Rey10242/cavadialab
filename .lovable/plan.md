# Plan: Rediseño del Customer Journey - De Portfolio Tecnico a Sitio de Conversion Empresarial

Este es un rediseño completo de la narrativa y estructura del sitio. El objetivo es que un empresario que llegue a tu web sienta que lo entiendes, que hablas su idioma y que le ofreces claridad sobre su inversion.

---

## Estructura Nueva del Sitio (Flujo del Visitante)

```text
1. HERO - Promesa clara: "Hago que tu negocio venda mas"
2. EL PROBLEMA - Empatia: "Inviertes y no sabes si funciona"
3. QUIEN SOY - Confianza: persona real con sistema claro
4. COMO TRABAJAMOS - Proceso simple en 4 pasos
5. EN QUE PUEDO AYUDARTE - Servicios en lenguaje empresarial
6. CONTACTO/CIERRE - CTA directo: "Conversemos"
```

Se eliminan las secciones actuales de "Stack/Herramientas" y "Metodologia tecnica" (5 pasos con tecnicismos). Se reemplazan por secciones que hablan de resultados y proceso simple.

---

## Cambios por Seccion

### 1. HERO (`HeroPersonal.tsx`) - Reescritura completa del copy

**Quiero que permanezca** "Hola, soy Reynaldo Montalvo Cavadia - Full Stack Marketer & Growth Expert" "Hago que tu negocio venda mas, con orden y sin improvisar."

- Subtitulo: "Te ayudo a atraer clientes potenciales, convertirlos en ventas y crecer de forma sostenible, sin desperdiciar dinero en campanas que no funcionan."
- Badge: "+8 años ayudando empresas a crecer" y "+50 proyectos ejecutados"
- CTAs: "Agendar conversacion" (primario, link a WhatsApp) + "Ver como lo hago" (secundario, scroll a proceso)
- Se mantienen los floating badges tecnicos ("Growth Marketing", "Performance Ads") y se reemplazan por badges de resultado empresarial
- Se mantien el badge de estado de "Disponible para proyectos" 

### 2. NUEVA SECCION: EL PROBLEMA (`ProblemSection.tsx`) - Crear desde cero

Seccion de empatia que conecta con el dolor del empresario:

- Titulo: "Muchos negocios invierten en marketing y no saben que esta funcionando"
- Lista de problemas en lenguaje llano: "Pagas publicidad. Recibes algunos mensajes. Pero no sabes si estas ganando o perdiendo dinero."
- Frase de cierre: "Si no sabes cuanto te cuesta conseguir un cliente, no estas creciendo... estas apostando y malgastando tu dinero"
- Diseno limpio, sin iconos tecnicos. Texto contundente con buen uso de espacio.

### 3. QUIEN SOY (`AboutMe.tsx`) - Reescritura del copy

**Antes:** Historia tecnica sobre marketing digital, automatizacion e IA
**Ahora:** Enfoque empresarial directo

- Titulo: "Quien soy y como te ayudo"
- Texto: "Soy **Reynaldo Montalvo Cavadia**, un apasionado del marketing digital y la tecnología con más de 8 años de experiencia transformando negocios a través de estrategias innovadoras."  
  
"Trabajo con empresarios que quieren dejar de improvisar y empezar a crecer con claridad."
- Lista de lo que hago (sin tecnicismos):
  - Atraer personas interesadas
  - Convertirlas en clientes
  - Hacer seguimiento
  - Medir resultados reales
  - Escalar sin perder dinero
- Frase de cierre: "Mi trabajo es que sepas exactamente que esta pasando con tu inversion."
- Se mantienen los stats (+50 proyectos, +8 anos) pero se simplifica "100% Dedicacion" a "Foco total en resultados"
- Se elimina la seccion "Mis Valores" (lenguaje de agencia) y se reemplaza por la seccion "Que Resultados Buscamos" con items empresariales:
  - Mas clientes reales 
  - Ventas constantes
  - Mejor uso del presupuesto
  - Claridad en los numeros
  - Crecimiento sin caos

### 4. COMO TRABAJAMOS (`Methodology.tsx`) - Reescritura completa

**Antes:** 5 pasos tecnicos (Diagnostico, Estrategia, Testing, Escalamiento, Reporting)
**Ahora:** 4 pasos simples en lenguaje empresarial

1. "Revisamos tu situacion actual" - Analizamos como estas vendiendo hoy y donde estas perdiendo oportunidades.
2. "Organizamos tu sistema de ventas" - Ordenamos publicidad, seguimiento y medicion.
3. "Probamos y mejoramos" - Identificamos que funciona y eliminamos lo que no.
4. "Escalamos con control" - Aumentamos inversion solo cuando los numeros son saludables.

- Frase de cierre: "Sin formulas magicas. Sin promesas irreales. Solo decisiones basadas en resultados."

### 5. EN QUE PUEDO AYUDARTE (`Services.tsx`) - Reescritura del copy

**Antes:** 6 servicios con nombres tecnicos (Set Up de Cuentas y Tracking, Escalamiento de Campanas, etc.)
**Ahora:** 5 servicios en lenguaje empresarial

- "Organizar tu publicidad" - Que cada peso invertido tenga un proposito claro y medible.
- "Atraer mejores clientes" - Estrategias para que lleguen personas realmente interesadas en comprar.
- "Mejorar tus resultados actuales" - Optimizar lo que ya tienes para que rinda mas sin gastar mas.
- "Saber si tu inversion funciona" - Medicion clara para que tomes decisiones con numeros, no con intuicion.
- "Tener claridad sobre tus numeros" - Reportes simples que te muestran que esta pasando con tu dinero.

Se elimina el badge "Servicios Especializados" y se cambia el titulo a "En que puedo ayudarte".

### 6. SECCION ELIMINADA: Skills/Stack

La seccion "Herramientas que Domino" se elimina del flujo principal. Un empresario no necesita saber que usas GTM o n8n. Se puede mencionar sutilmente en el "Sobre Mi" que se usan herramientas profesionales, pero sin listarlas.

### 7. CONTACTO (`Contact.tsx`) - Ajuste de copy

- Titulo: "Si tu negocio quiere crecer, pero con orden... Conversemos."
- Subtitulo: "En una llamada revisamos tu situacion y te digo con claridad que se puede mejorar y que no vale la pena hacer."
- Se simplifica el formulario: se elimina "Tipo de Proyecto" (dropdown tecnico) y "Pais / Ciudad"
- Se mantiene: Nombre, Email, Telefono (opcional), Mensaje
- El CTA principal cambia a un boton grande de WhatsApp: "Agendar conversacion por WhatsApp"
- El formulario se mantiene como opcion secundaria

### 8. NAVBAR (`CavadiaNavbar.tsx`) - Actualizar links

Se actualizan los links de navegacion para reflejar la nueva estructura:

- Inicio
- El Problema
- Sobre Mi
- Proceso
- Servicios
- Contacto

Se elimina "Stack", "Casos de Exito" y "Metodologia" como labels.

### 9. FOOTER (`SiteFooter.tsx`) - Actualizar links y copy

- Actualizar links de navegacion para que coincidan con la navbar
- Cambiar el subtitulo de "Full Stack Marketer" a "Consultor de crecimiento empresarial"
- Cambiar la descripcion de marca a lenguaje empresarial

---

## Detalles Tecnicos

### Archivos a crear:

- `src/components/sections/ProblemSection.tsx` - Nueva seccion de empatia/problema

### Archivos a modificar:

- `src/components/sections/HeroPersonal.tsx` - Nuevo copy, nuevos CTAs, nuevos badges
- `src/components/sections/AboutMe.tsx` - Reescritura completa de copy y estructura
- `src/components/sections/Methodology.tsx` - 4 pasos simplificados
- `src/components/sections/Services.tsx` - 5 servicios en lenguaje empresarial
- `src/components/sections/Contact.tsx` - Nuevo copy, formulario simplificado, CTA WhatsApp prominente
- `src/components/CavadiaNavbar.tsx` - Nuevos links de navegacion
- `src/components/SiteFooter.tsx` - Nuevos links y copy
- `src/pages/Index.tsx` - Agregar ProblemSection, eliminar Skills del flujo
- `src/hooks/useServiceSelection.ts` - Actualizar mapping de servicios nuevos

### Archivos que NO se eliminan (solo se desconectan del flujo):

- `src/components/sections/Skills.tsx` - Se mantiene en el codigo pero no se renderiza
- `src/components/sections/CaseStudies.tsx` - Ya esta oculto

### Principios de diseno:

- Se mantiene toda la estetica visual actual (dark mode, gradientes, animaciones suaves)
- Se mantiene la foto de perfil y el estilo premium
- Solo cambia el texto y la estructura de secciones
- Se mantiene el formulario de contacto funcional con Supabase
- Todos los textos en espanol, sin tecnicismos, en primera persona
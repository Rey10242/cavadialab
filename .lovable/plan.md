
# Plan: Correccion de Problemas Detectados en el Flujo Completo

Despues de probar el sitio completo de principio a fin (desktop), estos son los problemas encontrados y las correcciones propuestas:

---

## Problemas Detectados

### 1. Preload innecesario de rm-logo.png
El `index.html` precarga `/src/assets/rm-logo.png`, pero el logo ahora es un SVG puro. Esto genera una advertencia en consola y carga recursos innecesarios.

### 2. Tarjetas de servicio sin CTA visible en movil
El boton "Consultar servicio" en las tarjetas de servicios solo aparece al hacer hover (opacity-0 a opacity-100). En dispositivos moviles no hay hover, por lo que los usuarios moviles no ven ningun indicador de que la tarjeta es interactiva.

### 3. Tipo de Proyecto no se muestra al pre-llenar desde Servicios
Cuando un usuario hace clic en "Consultar servicio", el mensaje se pre-llena correctamente, pero el dropdown de "Tipo de Proyecto" sigue mostrando "Selecciona una opcion" visualmente, a pesar de que el valor interno esta configurado. Esto se debe al uso de `defaultValue` en lugar de `value` en el componente Select.

### 4. Elemento `<main>` duplicado
El archivo `index.html` tiene un `<main id="main">` vacio, y ademas el componente React Index.tsx tambien renderiza `<main>`. Esto crea landmarks duplicados, lo cual es un problema de accesibilidad.

### 5. Schemas JSON-LD duplicados
Hay schemas JSON-LD tanto en `index.html` (estaticos) como en el useEffect de `Index.tsx` (dinamicos). Esto genera datos estructurados redundantes para motores de busqueda.

### 6. Inconsistencia en URLs de redes sociales
- LinkedIn: `linkedin.com/in/reynaldomontalvo` (JSON-LD) vs `linkedin.com/in/rmontalvocavadia/` (contacto/footer)
- Instagram: `instagram.com/reynaldomontalvo` (JSON-LD) vs `instagram.com/reynaldo.cavadia/` (contacto/footer)

### 7. Inconsistencia de email
El JSON-LD usa `hola@cavadialab.com` pero la seccion de contacto muestra `rmontalvocavadia@gmail.com`.

---

## Correcciones Propuestas

### Archivo: `index.html`
- Eliminar la linea de preload de `rm-logo.png` (ya no se usa)
- Eliminar la linea de preload de `favicon.png` (no necesaria, los favicons se cargan automaticamente)
- Eliminar el tag `<main id="main" role="main"></main>` duplicado
- Corregir las URLs de redes sociales en el JSON-LD para que coincidan con las reales: `linkedin.com/in/rmontalvocavadia/` e `instagram.com/reynaldo.cavadia/`
- Corregir el email en JSON-LD a `rmontalvocavadia@gmail.com`

### Archivo: `src/pages/Index.tsx`
- Eliminar los schemas JSON-LD duplicados del useEffect (Person y WebSite), ya que estan definidos de forma mas completa en `index.html`
- Cambiar el tag `<main>` del componente a `<div>` para evitar el duplicado de landmarks

### Archivo: `src/components/sections/Services.tsx`
- Hacer el CTA "Consultar servicio" siempre visible (no solo en hover) para que sea accesible en movil
- Ajustar la opacidad para que sea visible siempre, con una transicion mas sutil al hacer hover

### Archivo: `src/components/sections/Contact.tsx`
- Cambiar `defaultValue` por `value` en el componente Select para que refleje correctamente el valor pre-llenado desde la seccion de Servicios

---

## Detalles Tecnicos

### index.html - Cambios
1. Eliminar linea 35: `<link rel="preload" as="image" href="/src/assets/rm-logo.png" ...>`
2. Eliminar linea 36: `<link rel="preload" as="image" href="/favicon.png" ...>`
3. Eliminar linea 120: `<main id="main" role="main"></main>`
4. En el JSON-LD (lineas 148-151), actualizar `sameAs` a las URLs correctas
5. En el JSON-LD (linea 178), cambiar email a `rmontalvocavadia@gmail.com`

### Index.tsx - Cambios
1. Eliminar el bloque de JSON-LD Person (lineas ~42-79) del useEffect
2. Eliminar el bloque de JSON-LD WebSite (lineas ~81-96) del useEffect
3. Cambiar `<main className="relative">` a `<div className="relative">`

### Services.tsx - Cambios
1. En el CTA (linea 140), cambiar `opacity-0 group-hover:opacity-100` a `opacity-60 group-hover:opacity-100` para que sea visible siempre pero mas prominente al hover

### Contact.tsx - Cambios
1. En el componente Select (linea 300), cambiar `defaultValue={field.value}` a `value={field.value}` para sincronizar correctamente el valor visual con el estado del formulario


## Contexto y decisión de diseño

El usuario quiere probar 5 paletas de acento sobre el fondo oscuro editorial actual (`#0c0c0e`) para decidir cuál es la definitiva para su marca de consultor de marketing digital. Me pide asesoría profesional además del selector.

**Mi asesoría como consultor de marca:**
- **Lima #E8FF47** (actual): Disruptivo, editorial, muy usado en agencias creativas top. Diferenciador.
- **Naranja #FF6B00**: Enérgico, alta conversión, asociado a urgencia y acción. Muy usado en marketing performance (HubSpot, Amazon). Funciona bien en dark.
- **Azul #3B82F6**: Confianza y tecnología. Pero en dark backgrounds puede percibirse como "genérico" para un consultor — muchos SaaS lo usan.
- **Coral/Rojo #FF4D4D**: Impacto visual máximo. Asociado a riesgo/urgencia. Polarizante.
- **Violeta #A855F7** (5ta opción "marketing professional"): Creatividad premium, lujo y pensamiento estratégico. Muy usado por consultores de alto ticket. Sobre negro es sofisticado. Esta es mi recomendación como la más alineada a un consultor de marketing digital de alto valor.

## Plan técnico

### Componente nuevo: `ThemeSwitcher.tsx`
Un selector flotante discreto en la esquina inferior izquierda (para no interferir con el WhatsApp button a la derecha) con:
- 5 círculos de color clicables (los 5 temas)
- Label del tema activo
- Animación suave de transición
- Icono de paleta para expandir/colapsar

### Contexto: `ThemeContext.tsx`  
Un React Context global que:
- Almacena el tema activo en `localStorage` (persiste entre recargas)
- Expone `theme` y `setTheme` a toda la app
- Al cambiar tema, aplica las variables CSS en `document.documentElement.style.setProperty`

### 5 temas definidos:
```text
1. Lima      → --primary: 68 100% 64%   | #E8FF47  (actual)
2. Naranja   → --primary: 25 100% 50%   | #FF6B00
3. Azul      → --primary: 217 91% 60%   | #3B82F6
4. Coral     → --primary: 0 100% 66%    | #FF4D4D
5. Violeta   → --primary: 270 91% 65%   | #A855F7  ← recomendado marketing
```

Cada tema también ajusta:
- `--primary-foreground`: el color del texto sobre el acento (oscuro o claro según contraste)
- `--ring`: mismo que primary
- `--accent`: mismo que primary
- `--primary-glow` y `--primary-soft`: versiones más claras para efectos

### Integración
- `ThemeProvider` wrappea `<App>` en `main.tsx`
- `ThemeSwitcher` se agrega en `Index.tsx` como componente flotante
- El selector se ubica `bottom-6 left-6` (opuesto al WhatsApp)
- En mobile: se colapsa a un solo botón de paleta

### Archivos a crear/modificar:
```text
Crear:
├── src/contexts/ThemeContext.tsx
├── src/components/ThemeSwitcher.tsx

Modificar:
├── src/main.tsx          (wrappear con ThemeProvider)
├── src/pages/Index.tsx   (agregar <ThemeSwitcher />)
```

El diseño del selector es minimalista: un botón flotante con ícono de paleta, al hacer hover/click expande los 5 círculos de color con el nombre del tema y una ✓ en el activo. Estilo coherente con el sistema de diseño actual (fondo card, border, fuente body).

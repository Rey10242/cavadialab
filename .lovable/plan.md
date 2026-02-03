
# Plan: Agregar Campos de Teléfono y Ubicación al Formulario de Contacto

## Resumen

Agregaremos dos nuevos campos al formulario de contacto "Envíame un mensaje":
1. **Teléfono** - Para que el usuario deje su número de contacto
2. **País/Ciudad** - Para saber de dónde te contactan

## Resultados de la Verificación

### Navegación Móvil
- El menú hamburguesa funciona correctamente
- Todos los enlaces se muestran y navegan apropiadamente
- Las animaciones de apertura/cierre funcionan bien

### Flechas Animadas en Metodología
- Las flechas (↓) entre los pasos están visibles en móvil
- La animación de "rebote" vertical funciona correctamente
- Los 5 pasos se muestran con las flechas intermedias

---

## Cambios a Realizar

### 1. Actualización de Base de Datos

Agregar dos nuevas columnas a la tabla `contact_submissions`:

| Columna | Tipo | Descripción |
|---------|------|-------------|
| `phone` | TEXT | Número de teléfono (opcional) |
| `location` | TEXT | País o ciudad de contacto (opcional) |

### 2. Modificación del Formulario

**Archivo:** `src/components/sections/Contact.tsx`

Agregar después del campo de Email:
- Campo de **Teléfono** con validación de formato
- Campo de **Ubicación** (País/Ciudad) con placeholder descriptivo

### 3. Actualización del Schema de Validación

Agregar validaciones para los nuevos campos:
- Teléfono: Opcional, formato flexible para números internacionales
- Ubicación: Opcional, texto libre con límite de caracteres

---

## Diseño del Formulario Actualizado

```text
+----------------------------------+
|      Envíame un mensaje          |
+----------------------------------+
| Nombre                           |
| [___________________________]    |
|                                  |
| Email                            |
| [___________________________]    |
|                                  |
| Teléfono (opcional)              |
| [___________________________]    |
|                                  |
| País / Ciudad (opcional)         |
| [___________________________]    |
|                                  |
| Tipo de Proyecto (opcional)      |
| [▼ Selecciona una opción    ]    |
|                                  |
| Mensaje                          |
| [___________________________]    |
| [___________________________]    |
| [___________________________]    |
|                                  |
| [      Enviar Mensaje       ]    |
+----------------------------------+
```

---

## Sección Técnica

### Migración de Base de Datos

```sql
ALTER TABLE contact_submissions 
ADD COLUMN phone TEXT,
ADD COLUMN location TEXT;
```

### Actualización del Schema Zod

```typescript
const contactSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().max(20).optional().or(z.literal("")),
  location: z.string().trim().max(100).optional().or(z.literal("")),
  message: z.string().trim().min(10).max(1000),
  projectType: z.string().optional(),
});
```

### Nuevos Campos en el Formulario

- **Teléfono**: Input tipo `tel` con ícono de Phone
- **Ubicación**: Input tipo `text` con ícono de MapPin
- Ambos campos tendrán el mismo efecto de spotlight/focus que los demás

### Archivos a Modificar

| Archivo | Cambio |
|---------|--------|
| `contact_submissions` (DB) | Agregar columnas `phone` y `location` |
| `src/components/sections/Contact.tsx` | Agregar campos y actualizar submit |

---

## Notas de Implementación

- Los nuevos campos serán **opcionales** para no bloquear el envío del formulario
- Se mantendrá consistencia visual con los campos existentes (spotlight effect, validación)
- Los datos se guardarán en la base de datos para análisis posterior de leads

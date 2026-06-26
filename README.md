# BIODESIGN — Odontología & Estética

Sitio web de la clínica **BIODESIGN** (Caballito · Canning · Buenos Aires),
reconstruido como una aplicación **Next.js (App Router) + TypeScript** a partir
del prototipo original de una sola página (`reference/index.html`).

El objetivo fue mantener el **look & feel idéntico** al original, pero con una
arquitectura profesional y mantenible: separación de **datos ↔ componentes ↔
estilos**, rutas reales para SEO/deep-linking, tipografías self-hosted y
animaciones accesibles

---

## Stack

- **Next.js 16** (App Router) + **React 19**
- **TypeScript** (modo `strict`)
- **CSS Modules** por componente + `globals.css` con los **design tokens** como
  variables CSS
- **next/font** (self-hosted, sin layout shift): Playfair Display (serif) + Inter (sans)
- **next/image** para todas las imágenes (`public/images/`)
- **IntersectionObserver** propio (componente cliente) para los reveals, respetando
  `prefers-reduced-motion`
- ESLint (config flat de `eslint-config-next`)

Sin dependencias de runtime extra, sin backend ni base de datos: es un sitio
estático con enlaces a **WhatsApp** y **Reservo**.

---

## Requisitos

- **Node.js ≥ 20** (probado con Node 24)
- npm

## Comandos

```bash
npm install      # instalar dependencias
npm run dev      # servidor de desarrollo → http://localhost:3000
npm run build    # build de producción
npm run start    # servir el build de producción
npm run lint     # ESLint
```

`npm run build` y `npm run lint` pasan **sin errores ni warnings**.

---

## Estructura

```
reference/
  index.html              # Fuente de verdad: prototipo original (no se usa en runtime)
public/
  images/                 # 18 imágenes (logo, fotos, casos)
src/
  app/
    layout.tsx            # <html>, fuentes, metadata global, Nav + Footer + flotantes, JSON-LD
    page.tsx              # / (Inicio)
    tratamientos/
      page.tsx            # /tratamientos (grilla + comparador)
      [slug]/page.tsx     # /tratamientos/<slug> (SSG, una ruta por tratamiento)
    nosotros/page.tsx     # /nosotros
    casos/page.tsx        # /casos
    sitemap.ts            # /sitemap.xml
    robots.ts             # /robots.txt
    manifest.ts           # /manifest.webmanifest
    icon.jpg, apple-icon.jpg   # favicon / apple-touch icon (logo)
    globals.css           # tokens + reset + átomos compartidos (.sec-h2, .btn-*, reveal)
  components/
    layout/               # Nav, Footer
    sections/             # Hero, SmileLine, Pasos, Smile3D, Porque, Sedes, Digital, Team,
                          # Reviews, Stats, Contacto, NosotrosHero
    treatments/           # TreatmentGrid, Comparador, TreatmentDetail, Faq
    casos/                # Casos (slider antes/después)
    widgets/              # WhatsappFab, QuizWidget (Wrapped)
    RevealManager.tsx     # reveal-on-scroll global
    icons.tsx             # SVGs reutilizables (WhatsApp, Instagram, Facebook)
  data/                   # Capa de datos tipada (contenido verbatim del original)
    treatments.ts         # 14 tratamientos (proceso, precios, pagos, FAQs, casos, WhatsApp…)
    sedes.ts · reviews.ts · comparador.ts · quiz.ts · casos.ts · site.ts
  lib/
    whatsapp.ts           # helper para armar links wa.me
```

### Design tokens (`globals.css`)

```
--ink:#0C0C0C  --ink-soft:#1A1A1A  --gold:#BFA054  --gold-lt:#D4B46A
--gold-dim:rgba(191,160,84,.18)  --cream:#F9F7F3  --mid:#5A5652
--rule:rgba(191,160,84,.22)  --ease:cubic-bezier(.4,0,.2,1)
```

### Rutas

El original simulaba 4 "pestañas" con JS (`switchTab`). Se convirtieron en rutas
reales con layout compartido (nav + footer + widgets flotantes):

| Ruta | Contenido |
|------|-----------|
| `/` | Hero, Smile Line, Pasos, Sonrisa 3D, Por qué elegirnos, Sedes, Contacto |
| `/tratamientos` | Grilla de tratamientos (+ "Ver más") + Comparador inteligente |
| `/tratamientos/[slug]` | Detalle de cada tratamiento (14 páginas estáticas, deep-linkables) |
| `/nosotros` | Equipo, Odontología Digital, Por qué elegirnos |
| `/casos` | Slider antes/después + estadísticas + reseñas |

---

## Decisiones y notas de fidelidad

Se copiaron **verbatim** del original todos los textos, precios, teléfonos y
enlaces. Donde el prototipo tenía estilos pero no marcado, o un comportamiento
implícito, se documentó la decisión:

- **Contacto:** el original definía los estilos `.contacto`/`.finput`/`.btn-wa`
  pero **no** renderizaba la sección ni los campos. Se construyó el formulario
  con esas mismas clases; los campos/copys son una propuesta coherente con el CSS
  (ver `// TODO` en `src/components/sections/Contacto.tsx`).
- **Facebook:** el original enlazaba a `https://facebook.com` (genérico). Queda
  como `// TODO` en `src/data/site.ts` hasta confirmar la URL real.
- **Estadísticas (Casos):** el original tenía los atributos `data-count2` pero
  no la animación. Se implementó el conteo animado (respeta `prefers-reduced-motion`).
- **Menú mobile:** el original solo ocultaba las tabs < 980px. Se agregó el menú
  hamburguesa pedido en el brief.
- **Botón flotante de WhatsApp:** agregado (el original solo tenía el FAB del quiz).
- **Accesibilidad añadida:** el slider antes/después es operable por teclado
  (`role="slider"`, flechas, `aria-valuenow`); los FAQ son `button` + `aria-expanded`;
  los modales cierran con `Escape`; reveals con fallback `<noscript>`.
- **WhatsApp por tratamiento:** Blanqueamiento y Estética Facial usan
  `5491156656212`; el resto `5491166431743` (tal como en el original).
- **Modal de tratamiento (intercepting routes):** opcional según el brief. Se
  priorizó la URL canónica `/tratamientos/[slug]` (indexable y deep-linkable). El
  overlay tipo modal queda como mejora futura.

---

## Build / export estático

El sitio es **100% estático**: `npm run build` genera la carpeta `out/` con HTML
plano (`output: "export"` en `next.config.ts`). Se puede servir en cualquier
hosting estático (Netlify, Vercel, GitHub Pages, S3, etc.).

> Nota: el export estático no usa la optimización de imágenes on-demand de Next
> (`images.unoptimized: true`); las imágenes se sirven tal cual desde
> `public/images/`.

## Deploy en Netlify (recomendado)

En la raíz hay un `netlify.toml` que ya define la build:

```toml
[build]
  command = "npm run build"
  publish = "out"
[build.environment]
  NODE_VERSION = "22"
```

1. **Add new site → Import an existing project** y conectá el repo de GitHub.
   Netlify toma el `netlify.toml` automáticamente (build `npm run build`,
   publica `out/`).
2. **Domain management → Add a domain:** agregá `biodesign-argentina.com` y `www`.
3. **DNS en Wix** (Pointing — Wix no deja cambiar nameservers):
   - **A** · Host `@` → **`75.2.60.5`** (load balancer de Netlify)
   - **CNAME** · Host `www` → **`<tu-sitio>.netlify.app`**

> Confirmá siempre los valores exactos que muestra **Netlify → Domain
> management**. La propagación puede tardar hasta 48 h; el HTTPS se emite solo.

## Deploy en Vercel (alternativa)

1. Importá el repo en Vercel (detecta Next.js). Alternativa: `npx vercel`.
2. **Settings → Domains:** agregá `biodesign-argentina.com` y `www`.
3. **DNS en Wix:** **A** `@` → **`76.76.21.21`** · **CNAME** `www` →
   **`cname.vercel-dns.com`** (confirmá los valores en Vercel → Domains).

---

Si el dominio final cambia, actualizá `site.url` en `src/data/site.ts` (se usa
para `metadataBase`, Open Graph, `sitemap.xml` y `robots.txt`).

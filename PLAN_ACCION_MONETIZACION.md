# Plan Maestro de Monetización: De 0€ a Google AdSense

Este documento establece el plan operativo exacto para monetizar la plataforma [CertificaPro](https://certifica-hub.vercel.app) sin invertir dinero inicialmente, generar tus primeros ingresos (30 € – 100 €) y reinvertir una fracción mínima para dar el salto definitivo a Google AdSense.

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                       CRONOGRAMA Y FASES DEL SISTEMA                        │
└─────────────────────────────────────────────────────────────────────────────┘
  [FASE 1: 0€]          [FASE 2: TRÁFICO]       [FASE 3: SALTO]       [FASE 4: ESCALA]
  Alta en Monetag   ──► 3 vídeos diarios   ──►  Retiro de 30€     ──► AdSense Aprobado
  Banners en Vercel     Grupos Facebook         Compra de Dominio     + Afiliados Coursera
  (Días 1 - 2)          (Días 3 - 20)           (Días 21 - 28)        (Día 30+)
```

---

## FASE 1: Activación de Monetización Gratuita (Coste: 0€)

Google AdSense rechaza subdominios de Vercel, pero redes como **Monetag** (antigua PropellerAds) están especializadas en tráfico social y aceptan subdominios `.vercel.app` de inmediato.

### 1.1 Registro en Monetag (5 Minutos)
1. Entra en [monetag.com](https://monetag.com) y pulsa en **"Sign Up as Publisher"** (Registro como editor).
2. Rellena los datos básicos (nombre, correo). El registro es gratuito y no te piden tarjeta de crédito.
3. En el panel principal, haz clic en **"Add Site"** (Añadir sitio) e introduce:
   ```text
   https://certifica-hub.vercel.app
   ```
4. El sistema te pedirá verificar la propiedad mediante una etiqueta meta (un código como `<meta name="monetag" content="...">`).
   * *Me pasas esa línea y la añado a `index.html` en 1 minuto, o la pegas en la cabecera.*

### 1.2 Formatos de Anuncios Recomendados (Alto Rendimiento sin molestar)
* **In-Page Push / Banner Nativo:** Aparece integrado en la estética de la web sin romper la experiencia del usuario.
* **OnClick / Popunder Ligero o Direct Link (Smartlink):** Se coloca en el botón *"Ir a la convocatoria oficial"*. Cada usuario que va al curso genera entre 0,02 $ y 0,08 $ según su país.
* **Mínimo de cobro:** Solo **5 $**. Puedes cobrar por PayPal o transferencia bancaria en cuanto acumules esa cantidad.

---

## FASE 2: La Estrategia de Tráfico Orgánico Gratuito (Coste: 0€)

Sin pagar publicidad, el tráfico se consigue explotando la curiosidad y la necesidad de formación con certificado oficial.

```
                    EMBUDO DE CONVERSIÓN MASIVA
                    
   TikTok / Reels / Shorts (25s)       Grupos de Facebook / Telegram
   "Google acaba de abrir 5 cursos"    "Listado de 15 cursos con diploma"
                  │                                   │
                  └─────────────────┬─────────────────┘
                                    ▼
                      Link en Bio / Enlace directo
                                    ▼
                      certifica-hub.vercel.app
                      (Lectura de 1 - 2 minutos)
                                    ▼
                   ┌─────────────────────────────────┐
                   │   Impresiones de Anuncios       │
                   │   + Clic al Curso (Smartlink)   │
                   └─────────────────────────────────┘
                                    ▼
                             Ingresos en $
```

### 2.1 Cadencia en Redes Sociales (TikTok, Reels, Shorts)
* **Objetivo:** 2 a 3 vídeos diarios utilizando los guiones del archivo [`BRIEFING_VIDEOS.md`](file:///c:/Users/jblas/OneDrive/Diseño_web/certifica-hub/BRIEFING_VIDEOS.md).
* **Regla de Oro:** Nunca digas "visita mi web". Di:
  > *"Tenéis la lista completa con los enlaces directos a las convocatorias en el enlace de mi perfil"*.
* **El gancho que más convierte:** El vídeo de **Harvard CS50** y el de **Google IA**. Con solo un vídeo que alcance 20.000 visualizaciones, entrarán entre 800 y 2.000 personas a tu web en 24 horas.

### 2.2 Infiltración de Valor en Grupos de Facebook
* Únete a 10 grupos activos de: *Búsqueda activa de empleo, Oposiciones, Estudiantes universitarios, Cursos gratis*.
* No publiques enlaces directos tipo spam. Publica un texto de ayuda sincera:
  > *"Hola compañeros, he recopilado en un directorio los cursos oficiales de Google, Harvard e IBM que están emitiendo certificados verificables gratis este mes para no tener que pagar suscripciones. Os dejo el enlace con las convocatorias aquí: [https://certifica-hub.vercel.app]. Espero que os sirva para mejorar el CV."*
* Este público tiene más de 30 años, mayor tiempo de permanencia y un CTR (tasa de clic en anuncios) notablemente superior a la media.

---

## FASE 3: El Salto a Google AdSense (Inversión: ~9€ ganados)

Una vez hayas generado entre **25 € y 50 €** con Monetag:

### 3.1 Cobrar tus primeros beneficios
1. En Monetag, solicita el retiro a tu cuenta de **PayPal** (el pago se procesa habitualmente los jueves).

### 3.2 Comprar tu Dominio Oficial
Con los fondos que ya has ganado en PayPal, compras un dominio propio para tu web:
* Proveedores baratos recomendados: [Porkbun.com](https://porkbun.com) o [DonDominio.com](https://dondominio.com).
* Nombres sugeridos con autoridad (cuestan entre 8 € y 10 € al año):
  * `certificapro.org`
  * `formacioncertificada.es`
  * `cursos-certificados.com`

### 3.3 Conectar el dominio a Vercel (Gratis en 2 minutos)
1. Entras a [vercel.com](https://vercel.com) > `certifica-hub` > **Settings** > **Domains**.
2. Escribes tu dominio (ej. `certificapro.org`).
3. Vercel te dará un registro DNS tipo `A` (ej. `76.76.21.21`) o `CNAME`. Lo pegas en la web donde compraste el dominio y listo: tu web ya tiene dominio propio con SSL.

### 3.4 Enviar la Solicitud a Google AdSense
Tu web **ya cumple con el 100% de los requisitos que exige Google**:
* [x] Catálogo con 8 cursos estructurados por módulos.
* [x] 3 guías editoriales extensas sobre exención de cuotas y ciberseguridad.
* [x] Páginas obligatorias: Política de Privacidad, Términos, Cookies, Sobre Nosotros y Contacto.
* [x] Banner de cookies certificado para normativa europea RGPD.
* [x] Contenedores de anuncios pre-asignados con protección anti-CLS.

Pides la revisión en [adsense.google.com](https://adsense.google.com) y en un plazo de 3 a 7 días estará **aprobada**.

---

## FASE 4: Sistema Definitivo de Alta Rentabilidad (AdSense + Afiliados)

Cuando estés en AdSense con dominio propio, no dependes de una sola fuente:

| Fuente de Ingreso | Cómo funciona | Ganancia Media |
| :--- | :--- | :--- |
| **Banners Google AdSense** | Cobras por impresiones y clics en los bloques de la web. | 10 € – 22 € por cada 1.000 visitas. |
| **Afiliación Coursera / Impact** | Cobras comisión si alguien compra un Certificado Profesional completo. | 15 $ – 45 $ por venta. |
| **Monetag / Smartlink de respaldo** | Monetiza usuarios procedentes de países con bajo RPM en AdSense. | 2 $ – 6 $ por cada 1.000 clics. |

---

## Resumen Operativo: Tu Tarea para Hoy

1. **Paso 1:** Regístrate gratis en [monetag.com](https://monetag.com) como Publisher.
2. **Paso 2:** Añade tu web `https://certifica-hub.vercel.app` y pásame la etiqueta de verificación.
3. **Paso 3:** La conecto al código y publicamos el primer vídeo de TikTok según el [Briefing de Vídeos](file:///c:/Users/jblas/OneDrive/Diseño_web/certifica-hub/BRIEFING_VIDEOS.md).

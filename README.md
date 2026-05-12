# 🛡️ Cuida tus datos

**Proyecto educativo interactivo sobre privacidad digital y protección de datos personales en Chile.**

Desarrollado como trabajo para la asignatura de **Formación Ciudadana** en INACAP.

---

## ¿Qué es este proyecto?

Es una **página web educativa** que enseña a las personas sobre sus derechos de protección de datos personales en Chile, los riesgos más comunes en internet y cómo protegerse.

Lo que la hace especial es que **no solo explica la teoría**: al entrar a la página, el visitante se encuentra con un **aviso de cookies manipulador** (un "patrón oscuro") que simula las prácticas engañosas que muchos sitios usan en la vida real. Después de interactuar con él, la página revela que fue una simulación y explica por qué es importante leer antes de aceptar.

### Contenido de la página

La página incluye las siguientes secciones, basadas en el documento de investigación adjunto (`derecho_proteccion_datos_chile_cuidatusdatos.pdf`):

| Nº | Sección | Descripción |
|---|---|---|
| 1 | Datos personales | Qué tipos de datos personales existen |
| 2 | Conceptos esenciales | Definiciones legales: dato personal, dato sensible, tratamiento, responsable, titular |
| 3 | Marco jurídico chileno | Constitución, Ley 19.628, Ley 21.096, Ley 21.719 |
| 4 | Principios del tratamiento | Licitud, finalidad, proporcionalidad, calidad, seguridad, confidencialidad |
| 5 | ¿Por qué importa la privacidad? | Razones para proteger la información personal |
| 6 | Derechos ARCO | Acceso, Rectificación, Cancelación, Oposición y Bloqueo |
| 7 | Riesgos en internet | Phishing, filtraciones, permisos excesivos, etc. |
| 8 | Patrones oscuros | Ejemplos de diseño manipulador en interfaces |
| 9 | Cómo proteger tus datos | 14 consejos prácticos |
| 10 | Checklist ciudadano | Acciones concretas con frecuencia sugerida |
| 11 | Preguntas frecuentes | Dudas comunes sobre privacidad digital |
| — | Términos y condiciones (simulados) | Cláusulas absurdas para demostrar que nadie lee los términos |
| — | Revelación final | Explica que el aviso de cookies era una simulación pedagógica |

### Elementos interactivos

- **Aviso de cookies manipulador**: El botón de "Rechazar" se mueve, se achica o da error. Simula cómo muchos sitios dificultan rechazar cookies.
- **Checklist con progreso**: El visitante puede marcar hábitos de privacidad y ver su avance.
- **Acordeones animados**: Las preguntas frecuentes y los principios legales se abren con una animación suave.
- **Temas visuales aleatorios**: Cada vez que se entra a la página, el diseño visual cambia aleatoriamente entre tres estilos distintos.

---

## Cómo ver la página en tu computador

### Lo que necesitas tener instalado

Necesitas un programa llamado **Node.js** (versión 22 o superior). Es gratuito y se instala en 2 minutos.

#### Paso 1: Instalar Node.js

1. Abre tu navegador y entra a **<https://nodejs.org>**
2. Descarga la versión que dice **"LTS"** (es la recomendada)
3. Abre el archivo descargado y sigue las instrucciones del instalador (solo haz clic en "Siguiente" hasta terminar)
4. Para confirmar que se instaló bien, abre la **Terminal** (en Mac) o el **Símbolo del sistema** (en Windows) y escribe:

   ```
   node --version
   ```

   Debería aparecer algo como `v22.12.0` o superior.

#### Paso 2: Descargar el proyecto

Si recibiste el proyecto como carpeta comprimida (`.zip`):

1. Descomprime el archivo haciendo doble clic
2. Abre la carpeta resultante

Si lo clonaste desde GitHub:

```
git clone <url-del-repositorio>
```

#### Paso 3: Abrir la Terminal en la carpeta del proyecto

**En Mac:**

1. Abre la app **Terminal** (está en Aplicaciones > Utilidades)
2. Escribe `cd` (con un espacio al final)
3. Arrastra la carpeta del proyecto desde el Finder hacia la Terminal
4. Presiona Enter

**En Windows:**

1. Abre la carpeta del proyecto en el Explorador de archivos
2. Haz clic en la barra de dirección (arriba) y escribe `cmd`
3. Presiona Enter — se abrirá una ventana negra dentro de la carpeta correcta

#### Paso 4: Instalar las dependencias del proyecto

En la Terminal que acabas de abrir, escribe este comando y presiona Enter:

```
npm install
```

Esto descarga las librerías que el proyecto necesita para funcionar. Solo se hace **una vez**. Puede tardar entre 30 segundos y 2 minutos dependiendo de tu conexión a internet.

#### Paso 5: Iniciar la página

Escribe este comando y presiona Enter:

```
npm run dev
```

Verás un mensaje como este:

```
astro  v6.3.1 ready in 1845 ms
┃ Local    http://localhost:4321/
```

#### Paso 6: Abrir la página en el navegador

Abre tu navegador (Chrome, Firefox, Safari, etc.) y en la barra de direcciones escribe:

```
http://localhost:4321
```

**¡Listo!** La página debería cargarse con el aviso de cookies simulado.

#### Para detener la página

Vuelve a la Terminal y presiona las teclas **Ctrl + C** al mismo tiempo. Esto cierra el servidor local.

---

## Estructura de archivos del proyecto

```
cuida-tus-datos/
├── public/                          ← Imágenes y logos del sitio
│   ├── cuida-tus-datos-logo.svg
│   └── favicon.svg
│
├── src/                             ← Código fuente de la página
│   ├── content/
│   │   └── privacy-content.ts       ← Todo el contenido de texto de la página
│   │
│   ├── components/                  ← Piezas visuales reutilizables
│   │   ├── Hero.astro               ← Sección de bienvenida
│   │   ├── CookieModal.astro        ← Aviso de cookies simulado
│   │   ├── AccordionItem.astro      ← Preguntas que se abren/cierran
│   │   ├── Section.astro            ← Contenedor de cada sección
│   │   ├── TipCard.astro            ← Tarjeta de consejo
│   │   ├── TermsAndConditions.astro ← Términos y condiciones absurdos
│   │   ├── FinalReveal.astro        ← Revelación pedagógica final
│   │   ├── ProgressBar.astro        ← Barra de progreso del checklist
│   │   └── HeroVisual.astro         ← Elemento visual decorativo
│   │
│   ├── scripts/                     ← Comportamientos interactivos
│   │   ├── cookie-modal.ts          ← Lógica del aviso manipulador
│   │   ├── checklist.ts             ← Progreso del checklist
│   │   ├── random-theme.ts          ← Selección aleatoria de tema visual
│   │   ├── scroll-reveal.ts         ← Animaciones al hacer scroll
│   │   ├── toasts.ts                ← Mensajes emergentes
│   │   └── tracking.ts             ← Registro de interacciones
│   │
│   ├── styles/                      ← Estilos visuales
│   │   ├── global.css               ← Estilos generales
│   │   ├── animations.css           ← Animaciones
│   │   └── themes/                  ← Los 3 temas visuales aleatorios
│   │
│   ├── layouts/
│   │   └── BaseLayout.astro         ← Estructura base de la página
│   │
│   └── pages/
│       └── index.astro              ← La página principal (une todo)
│
├── derecho_proteccion_datos_chile_cuidatusdatos.pdf  ← Documento de investigación
├── package.json                     ← Lista de dependencias del proyecto
├── Dockerfile                       ← Para ejecutar con Docker (opcional)
└── docker-compose.yml               ← Para ejecutar con Docker (opcional)
```

### ¿Dónde está cada cosa?

- **¿Quieres cambiar un texto?** → Edita `src/content/privacy-content.ts`
- **¿Quieres cambiar el diseño de una sección?** → Edita el archivo `.astro` correspondiente en `src/components/`
- **¿Quieres cambiar los colores o el estilo?** → Edita los archivos en `src/styles/`
- **¿Quieres cambiar el logo?** → Reemplaza el archivo en `public/`

---

## Tecnologías utilizadas

| Tecnología | Para qué se usa |
|---|---|
| [Astro](https://astro.build) | Framework para construir páginas web rápidas |
| [Tailwind CSS](https://tailwindcss.com) | Sistema de estilos visuales |
| [TypeScript](https://www.typescriptlang.org) | Lenguaje de programación (variante de JavaScript) |
| [Lucide Icons](https://lucide.dev) | Íconos usados en la página |

---

## Fuentes de investigación

Todo el contenido de la página está respaldado por fuentes oficiales:

1. **Constitución Política** — Art. 19 N°4 (derecho a la protección de datos)
2. **Ley N° 19.628** — Protección de la vida privada
3. **Ley N° 21.096** — Reforma constitucional sobre datos personales
4. **Ley N° 21.719** — Nueva ley de protección de datos (vigencia dic 2026)
5. **ChileAtiende** — Trámite de derechos ARCO
6. **ANCI** — Ciberconsejos de seguridad digital
7. **CSIRT** — Alertas de phishing y ciberseguridad

---

## Preguntas frecuentes (para el evaluador)

**¿Necesito internet para ver la página?**
Solo para el paso de instalación (`npm install`). Después de eso, la página funciona sin internet.

**¿La página recolecta datos reales?**
No. Todo es simulación. No hay cookies reales, no hay seguimiento, no se envía información a ningún servidor.

**¿Puedo verla desde mi celular?**
Sí, si estás en la misma red Wi-Fi. En la Terminal aparecerá una dirección como `http://192.168.x.x:4321` que puedes abrir desde el navegador del celular.

**¿Qué pasa si el puerto 4321 está ocupado?**
Astro automáticamente usará el siguiente disponible (4322, 4323, etc.) y lo mostrará en la Terminal.

---

## Licencia

**© 2026 — Todos los derechos reservados.**

Este proyecto, incluyendo su código fuente, diseño, contenido y documentación, es propiedad de su autor. Queda prohibida su reproducción, distribución, modificación o uso comercial, total o parcial, sin autorización previa y por escrito del autor.

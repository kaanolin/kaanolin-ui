# Kaanolin UI

Libreria de componentes React basada en el design system Untitled UI. Monorepo con Nx, Tailwind CSS v4 y CVA (class-variance-authority).

## Stack

| Tecnologia             | Uso                                                     |
| ---------------------- | ------------------------------------------------------- |
| React 19               | Componentes con `forwardRef`                            |
| Tailwind CSS v4        | Estilos con directiva `@theme` (sin tailwind.config.js) |
| CVA                    | Variantes de estilo por componente                      |
| tailwind-merge         | Resolucion de clases conflictivas via `cx`              |
| Radix UI               | Primitivas accesibles (Dropdown, Tabs, Sheet, etc.)     |
| TipTap                 | Editor de texto enriquecido (TextEditor)                |
| Vite 6                 | Build de libreria (ES + CJS + tipos)                    |
| Storybook 8            | Documentacion visual e interactiva                      |
| Jest + Testing Library | Tests unitarios y de interaccion                        |
| Nx 22                  | Orquestacion del monorepo, cache, tasks                 |

## Paquete publicado

| Paquete           | Descripcion                                       |
| ----------------- | ------------------------------------------------- |
| `@kaanolin/react` | Componentes React, design tokens CSS y utilidades |

Los paquetes internos `styles` y `utils` se bundlean dentro de `@kaanolin/react` y no se publican por separado.

## Arquitectura

```text
kaanolin-ui/
├── packages/
│   ├── react/                    # Componentes React (paquete publicado)
│   │   ├── src/
│   │   │   ├── _shared/          # Estilos y iconos compartidos
│   │   │   ├── {component}/      # 31 componentes (ver tabla abajo)
│   │   │   └── index.ts          # Barrel export principal
│   │   ├── scripts/
│   │   │   └── sync-exports.mjs  # Auto-genera exports en package.json
│   │   ├── vite.config.ts        # Build (auto-descubre entry points)
│   │   ├── jest.config.cjs       # Configuracion de Jest
│   │   └── package.json          # 32 entry points
│   ├── styles/                   # Design tokens (CSS puro, interno)
│   │   └── src/
│   │       ├── colors.css        # Paletas + tokens semanticos
│   │       ├── typography.css    # Display + body font sizes
│   │       ├── shadows.css       # xs a 3xl
│   │       ├── spacing.css       # Escala de espaciado
│   │       └── components.css    # Aliases de tokens para componentes
│   └── utils/                    # Utilidades compartidas (interno)
│       └── src/
│           └── cx.ts             # extendTailwindMerge con custom classGroups
├── .storybook/                   # Storybook config (Vite + Tailwind)
├── nx.json                       # Plugins: @nx/vite, @nx/jest, @nx/storybook
└── package.json                  # Workspaces + scripts raiz
```

### Patron por componente

Cada componente sigue la misma estructura:

```text
component/
├── Component.tsx          # Componente React (forwardRef, VariantProps)
├── Component.styles.ts    # Variantes CVA con tokens semanticos
├── Component.stories.tsx  # Stories de Storybook
├── Component.test.tsx     # Tests con @testing-library/react + userEvent
└── index.ts               # Barrel exports
```

## Componentes disponibles (31)

### Base — Formularios

| Componente          | Variantes                          | Tamanos              | Caracteristicas                                              |
| ------------------- | ---------------------------------- | -------------------- | ------------------------------------------------------------ |
| **Input**           | default, error, success            | small, medium, large | icon, tooltip, shortcut, isRequired, helperText              |
| **Textarea**        | default, error, success            | small, medium, large | tooltip, isRequired, helperText, rows                        |
| **InputGroup**      | -                                  | small, medium, large | prefix, leadingAddon, trailingAddon                          |
| **Select**          | default, error, success            | small, medium, large | keyboard nav, typeahead, groups, separators                  |
| **Combobox**        | default, error, success            | small, medium, large | busqueda/filtrado, keyboard nav, groups                      |
| **Checkbox**        | -                                  | sm, md               | checked, indeterminate, disabled, label, description         |
| **RadioGroup**      | -                                  | sm, md               | horizontal/vertical, label, description                      |
| **Toggle**          | -                                  | sm, md               | label, description, controlled/uncontrolled                  |
| **Slider**          | -                                  | sm, md               | range (multiple thumbs), min/max/step                        |
| **DatePickerRange** | -                                  | -                    | calendario 2 meses, date inputs, Cancel/Apply, i18n          |
| **FileUpload**      | -                                  | -                    | drag & drop, click to upload, accept, maxSize, multiple      |
| **TextEditor**      | default, error                     | -                    | TipTap: bold, italic, headings, lists, links, toolbar        |

### Base — Display

| Componente          | Variantes                                                | Tamanos             | Caracteristicas                                    |
| ------------------- | -------------------------------------------------------- | ------------------- | -------------------------------------------------- |
| **Button**          | primary, secondaryGray/Color, tertiaryGray/Color, link   | sm, md, lg, xl, 2xl | destructive, loading, icons, CloseButton           |
| **Badge**           | 10 colores (gray, brand, error, warning, success, etc.)  | sm, md, lg          | dot, icon, dismissible                             |
| **Tag**             | 10 colores                                               | sm, md, lg          | close button, avatar, icon                         |
| **Avatar**          | -                                                        | xs a 2xl            | image, initials fallback, icon fallback, status    |
| **Card**            | default, elevated, outline, ghost                        | default, sm         | interactive, CardImage, action slot                |
| **Tooltip**         | -                                                        | -                   | side variants, description, Radix                  |
| **Spinner**         | brand, gray, white                                       | xs a xl             | SVG animado, aria-label                            |

### Base — Navegacion

| Componente           | Variantes                           | Tamanos     | Caracteristicas                                  |
| -------------------- | ----------------------------------- | ----------- | ------------------------------------------------ |
| **Tabs**             | underline, contained, pill          | sm, md, lg  | icons, badges, fullWidth, keyboard nav           |
| **Pagination**       | -                                   | sm, md, lg  | prev/next, ellipsis, active page                 |
| **ButtonGroup**      | -                                   | sm, md, lg  | toggle group, Radix, pressed state               |
| **Dropdown**         | -                                   | -           | items, checkbox/radio, submenu, icons, shortcuts |

### Application — Layout

| Componente           | Variantes             | Caracteristicas                                      |
| -------------------- | --------------------- | ---------------------------------------------------- |
| **Modal**            | sm, md, lg            | ModalIcon (5 colores), close overlay, Escape          |
| **Sheet**            | left, right, top, bottom | drawer/panel, Radix Dialog, close button           |
| **Sidebar**          | narrow, default, wide | groups, items, badges, icon, active state             |
| **HeaderNavigation** | -                     | logo, items, actions, active state                    |
| **Table**            | -                     | composable: Header, Body, Footer, Row, Head, Cell    |
| **EmptyState**       | -                     | composable: icon, title, description, actions         |
| **Progress**         | brand, success, error, warning | sm, md, lg | aria-progressbar                            |

### Especializado

| Componente           | Caracteristicas                                                  |
| -------------------- | ---------------------------------------------------------------- |
| **VideoPlayer**      | HTML5 video, custom controls, seek/volume, fullscreen, keyboard  |

## Instalacion

### Prerequisitos

- Node.js >= 18
- npm >= 9

### En el monorepo

```bash
git clone <repo-url>
cd kaanolin-ui
npm install
```

### En un proyecto consumidor

```bash
npm install @kaanolin/react
```

## Uso

### 1. Importar los estilos

```css
@import "tailwindcss";
@import "@kaanolin/react/styles";
```

### 2. Usar componentes

```tsx
// Barrel import (tree-shakeable gracias a sideEffects: false)
import { Button, Input, Modal, Select, Tabs } from "@kaanolin/react";

// O subpath import (bundle mas pequeno)
import { Button } from "@kaanolin/react/button";
import { Select, SelectItem } from "@kaanolin/react/select";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@kaanolin/react/tabs";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@kaanolin/react/table";
```

### 3. Utilidades

```tsx
import { cx } from "@kaanolin/react";

// cx resuelve clases Tailwind conflictivas
cx("px-4 py-2", "px-6"); // => "px-6 py-2"
```

## Desarrollo

### Storybook

```bash
npm run storybook
# Abre http://localhost:6006
```

### Tests

```bash
# Todos los tests (661 tests, 31 suites)
npm test

# Solo @kaanolin/react
npx nx test @kaanolin/react

# Un componente especifico
npx nx test @kaanolin/react -- --testPathPattern="button"

# Con cobertura (threshold: 80%)
npx nx test @kaanolin/react -- --coverage
```

### Build

```bash
# Compilar todos los paquetes
npm run build

# Solo react
npm run build --workspace=packages/react
```

### Watch mode

```bash
npx nx run @kaanolin/react:dev
```

### Lint y formato

```bash
npm run lint
npm run format:check
npm run format
```

## Agregar un componente nuevo

1. Crear la carpeta `packages/react/src/{nombre}/` con los 5 archivos (ver patron arriba)
2. Agregar exports al barrel en `packages/react/src/index.ts`
3. Ejecutar `node packages/react/scripts/sync-exports.mjs`
4. Verificar: `npm run build --workspace=packages/react && npx nx test @kaanolin/react`

`vite.config.ts` descubre automaticamente los entry points de `src/*/index.ts`. No necesita edicion manual.

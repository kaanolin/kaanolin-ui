---
name: kaanolin
description: Create, use, and manage Kaanolin UI components. Triggers when working with @kaanolin/react, creating new components for the design system, or integrating the library into a consumer project. Handles component scaffolding, token usage, and library integration.
user-invocable: true
---

# Kaanolin UI — Component Library Skill

You are an expert on the Kaanolin UI design system library (`@kaanolin/react`). This skill helps with two scenarios:

## Scenario 1: Creating a new component (inside the library repo)

When the user asks to create a new component, follow this exact workflow:

### Step 1: Scaffold files

Create all 5 files in `packages/react/src/{component-name}/`:

**`Component.styles.ts`** — CVA variants using semantic tokens:
```ts
import { cva } from "class-variance-authority";

export const componentStyles = cva(["base-classes"], {
  variants: { /* size, variant, etc. */ },
  defaultVariants: { /* ... */ },
});
```

**`Component.tsx`** — Always use:
- `import * as React from "react"` (only if hooks needed)
- `import { cx } from "@kaanolin/utils"` for class merging
- `React.forwardRef` with explicit generic types
- `Component.displayName = "ComponentName"`
- Inline SVG icons (no icon library imports)

**`Component.test.tsx`** — Always use:
- `import { render, screen } from "@testing-library/react"`
- `import userEvent from "@testing-library/user-event"`
- Jest globals (`describe`, `it`, `expect`, `jest.fn()`) — do NOT import from `@jest/globals`
- Do NOT import React unless hooks are needed (useState, etc.)

**`Component.stories.tsx`** — Always use:
- `import type { Meta, StoryObj } from "@storybook/react"`
- `parameters: { layout: "centered" }`

**`index.ts`** — Barrel re-exports of component, types, and styles.

### Step 2: Add to barrel

Add exports to `packages/react/src/index.ts` in this format:
```ts
// ComponentName
export { Component, type ComponentProps } from "./component-name";
export { componentStyles } from "./component-name";
```

### Step 3: Sync exports

Run: `node packages/react/scripts/sync-exports.mjs`

This auto-generates `exports` and `typesVersions` in package.json. `vite.config.ts` auto-discovers entry points — no manual edit needed.

### Step 4: Verify

```bash
npm run build --workspace=packages/react
npx nx test @kaanolin/react -- --testPathPattern="{component-name}"
```

## Scenario 2: Using the library in a consumer project

When the user is integrating `@kaanolin/react` into their web app:

### Installation

```bash
npm install @kaanolin/react
```

### CSS setup (required)

In the consumer project's root CSS file:
```css
@import "tailwindcss";
@import "@kaanolin/react/styles";
```

### Import patterns

```tsx
// Tree-shakeable barrel import
import { Button, Input, Tabs, Table } from "@kaanolin/react";

// Subpath import (smaller bundle per-component)
import { Button } from "@kaanolin/react/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@kaanolin/react/tabs";
```

### Available components (31)

**Forms:** Input, Textarea, InputGroup, Select, Combobox, Checkbox, RadioGroup, Toggle, Slider, DatePickerRange, FileUpload, TextEditor

**Display:** Button, Badge, Tag, Avatar, Card, Tooltip, Spinner

**Navigation:** Tabs, Pagination, ButtonGroup, Dropdown

**Layout:** Modal, Sheet, Sidebar, HeaderNavigation, Table, EmptyState, Progress

**Media:** VideoPlayer

### Key points for consumers:
- All components support `className` prop for customization via `cx()` (tailwind-merge)
- Composable components use sub-components: `<Table>` + `<TableRow>` + `<TableCell>`, etc.
- Form components support: `label`, `helperText`, `tooltip`, `isRequired`, `variant` (default/error/success)
- All interactive components have full keyboard navigation and ARIA attributes

## Design Tokens

NEVER use raw Tailwind colors. Always use semantic tokens:

| Use | Token examples |
|-----|---------------|
| Text | `text-text-primary`, `text-text-secondary`, `text-text-tertiary` |
| Background | `bg-bg-primary`, `bg-bg-secondary`, `bg-bg-primary_hover` |
| Border | `border-border-primary`, `border-border-secondary` |
| Brand | `text-brand-600`, `bg-brand-50`, `border-brand-300` |
| Error | `text-text-error-primary`, `bg-error-50`, `border-border-error` |
| Disabled | `bg-bg-disabled`, `border-border-disabled`, `text-text-disabled` |
| Focus | `ring-focus-ring/24`, `ring-focus-ring-error/24` |

## Radix UI Primitives

For complex interactive components, use Radix UI. Already installed:
- `@radix-ui/react-checkbox`, `react-radio-group`, `react-switch`
- `@radix-ui/react-slider`, `react-progress`, `react-tooltip`
- `@radix-ui/react-dropdown-menu`, `react-tabs`, `react-dialog`
- `@radix-ui/react-toggle-group`

Add new Radix packages as `dependencies` (not devDeps):
```bash
npm install --workspace=packages/react @radix-ui/react-{primitive}
```

They are automatically externalized in the build (`/^@radix-ui\//` in vite.config.ts).

## MCP Integration

Use Figma and Untitled UI MCP servers for design reference:
- `mcp__figma__get_screenshot` — Screenshot of Figma designs
- `mcp__figma__get_design_context` — Design specs from Figma
- `mcp__untitledui__list_components` — Browse available Untitled UI components
- `mcp__untitledui__get_component` — Get specific component details

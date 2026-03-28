# Kaanolin UI — Development Guide

## Project Overview

Monorepo de componentes React basado en Untitled UI design system. Publicado como `@kaanolin/react`.

## Architecture

```
packages/
  react/    → Componentes React (publicado)
  styles/   → Design tokens CSS (interno, bundled)
  utils/    → cx() utility (interno, bundled)
```

## Creating a New Component

### 1. Create the component folder

```
packages/react/src/{component-name}/
├── ComponentName.tsx          # Component (React.forwardRef + displayName)
├── ComponentName.styles.ts    # CVA variants
├── ComponentName.stories.tsx  # Storybook stories
├── ComponentName.test.tsx     # Jest + Testing Library tests
└── index.ts                   # Barrel exports
```

### 2. Follow these patterns

**Styles (CVA):**
```ts
import { cva } from "class-variance-authority";

export const componentStyles = cva(
  ["base", "classes"],
  {
    variants: {
      size: { sm: ["..."], md: ["..."], lg: ["..."] },
      variant: { default: ["..."], error: ["..."] },
    },
    defaultVariants: { size: "md", variant: "default" },
  },
);
```

**Component:**
```tsx
import * as React from "react";
import { cx } from "@kaanolin/utils";
import { componentStyles } from "./Component.styles";

export interface ComponentProps { /* ... */ }

const Component = React.forwardRef<HTMLDivElement, ComponentProps>(
  ({ className, size, variant, ...props }, ref) => (
    <div ref={ref} className={cx(componentStyles({ size, variant }), className)} {...props} />
  ),
);

Component.displayName = "Component";
export { Component };
```

**Tests:**
```tsx
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Component } from "./Component";

// Use jest globals (describe, it, expect, jest.fn()) — do NOT import from @jest/globals
// Do NOT import React unless you need hooks (useState, etc.)
```

**Stories:**
```tsx
import type { Meta, StoryObj } from "@storybook/react";
import { Component } from "./Component";

const meta: Meta<typeof Component> = {
  title: "Components/Component",
  component: Component,
  parameters: { layout: "centered" },
};
export default meta;
```

### 3. Add to barrel export

Edit `packages/react/src/index.ts`:
```ts
// ComponentName
export { Component, type ComponentProps } from "./component-name";
export { componentStyles } from "./component-name";
```

### 4. Sync package.json exports

```bash
node packages/react/scripts/sync-exports.mjs
```

This auto-generates `exports` and `typesVersions` in package.json. vite.config.ts auto-discovers entry points — no manual edit needed.

### 5. Verify

```bash
npm run build --workspace=packages/react   # Build
npx nx test @kaanolin/react                # All tests
```

## Key Conventions

- **Tokens**: Use semantic tokens from `packages/styles/src/colors.css` (e.g., `text-text-primary`, `bg-bg-primary`, `border-border-primary`). Never use raw Tailwind colors.
- **Externals**: `@radix-ui/*`, `@tiptap/*`, `prosemirror*` are externalized in the build. New heavy deps should be added to `vite.config.ts` externals.
- **Composable pattern**: Complex components use sub-components (e.g., `Table` + `TableRow` + `TableCell`). Each gets `forwardRef` + `displayName`.
- **Form fields**: Components with label/helperText/tooltip use shared styles from `src/_shared/form-field.styles.ts`.
- **Class merging**: Always use `cx()` from `@kaanolin/utils` (extended tailwind-merge), never raw `classNames` or template literals.

## Design Token Reference

| Category | Examples |
|----------|---------|
| Text | `text-text-primary`, `text-text-secondary`, `text-text-tertiary`, `text-text-disabled` |
| Background | `bg-bg-primary`, `bg-bg-secondary`, `bg-bg-primary_hover`, `bg-bg-disabled` |
| Border | `border-border-primary`, `border-border-secondary`, `border-border-error` |
| Brand | `text-brand-600`, `bg-brand-50`, `border-brand-300`, `ring-focus-ring/24` |
| Foreground | `text-fg-white`, `text-fg-quaternary`, `text-fg-disabled` |
| Error | `text-text-error-primary`, `bg-error-50`, `border-border-error` |

## MCP Integrations

- **Figma MCP**: Get design specs with `get_design_context` and `get_screenshot` from Figma URLs
- **Untitled UI MCP**: List and get component references with `list_components` and `get_component`

## Commands

```bash
npm run build                              # Build all packages
npm test                                   # Run all tests
npx nx test @kaanolin/react                # Test react package only
npx nx test @kaanolin/react -- --testPathPattern="button"  # Test single component
npm run storybook                          # Start Storybook (port 6006)
node packages/react/scripts/sync-exports.mjs  # Sync package.json exports
```

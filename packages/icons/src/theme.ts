export const iconSizes = {
  xs: 12,
  sm: 16,
  md: 20,
  base: 24,      // ← Untitled UI design grid
  featured:  32, // upper limit for raw icons per Untitled UI guidance
} as const;

export const featuredShapeSizes = {
  sm: 40,
  md: 48,
  lg: 56,
  xl: 64,
  "2xl": 96,
} as const;

export const defaultStrokeWidth = 2;

// Typical monochrome palette (the caller passes one via `color`, or lets CSS
// `currentColor` inherit from text colour). These are defaults, not hard reqs.
export const themes = {
  light: {
    fg:      "rgb(24, 24, 27)",    // ≈ Tailwind zinc-900
    muted:   "rgb(113, 113, 122)", // zinc-500
    accent:  "rgb(79, 70, 229)",   // indigo-600
  },
  dark: {
    fg:      "rgb(244, 244, 245)", // zinc-100
    muted:   "rgb(161, 161, 170)", // zinc-400
    accent:  "rgb(129, 140, 248)", // indigo-400
  },
} as const;

export type ThemeName = keyof typeof themes;

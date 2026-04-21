import type { SVGProps } from "react";

export interface IconBaseProps extends Omit<SVGProps<SVGSVGElement>, "color"> {
  /** Width & height of the rendered SVG. Default 24 (matches Untitled UI grid). */
  size?: number | string;
  /** Sets CSS `color` on the SVG, which drives `currentColor` inside. */
  color?: string;
  /** Accessible label. When provided, role="img"; else the SVG is aria-hidden. */
  title?: string;
}

export interface LineIconProps extends IconBaseProps {
  /** Stroke width in px. Default 2 — Untitled UI's design grid. */
  strokeWidth?: number;
}

export interface DuotoneIconProps extends LineIconProps {}
export interface DuocolorIconProps extends LineIconProps {}
export interface SolidIconProps    extends IconBaseProps {}

export type Theme = "light" | "dark";

export interface LogoProps extends Omit<SVGProps<SVGSVGElement>, "color"> {
  size?: number | string;
  /** Which theme variant to render. Defaults to "light". */
  mode?: Theme;
  title?: string;
}

export type FlagShape = "circle" | "square" | "rectangle";
export interface FlagProps extends Omit<SVGProps<SVGSVGElement>, "color"> {
  size?: number | string;
  shape?: FlagShape;
  title?: string;
}

export interface FeaturedProps extends IconBaseProps {}

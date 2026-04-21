import * as React from "react";
import type { VariantProps } from "class-variance-authority";
import { cx } from "@kaanolin/utils";
import { kbdStyles } from "./Kbd.styles";

/* ========== Kbd ========== */

export interface KbdProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof kbdStyles> {}

const Kbd = React.forwardRef<HTMLElement, KbdProps>(
  ({ className, size, children, ...props }, ref) => (
    <kbd ref={ref} className={cx(kbdStyles({ size }), className)} {...props}>
      {children}
    </kbd>
  ),
);

Kbd.displayName = "Kbd";

export { Kbd };

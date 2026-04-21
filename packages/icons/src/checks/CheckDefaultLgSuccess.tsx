// [collection] Figma variant — properties:
//   Type: Default
//   Size: lg
//   Color: Success
import { forwardRef } from "react";
import type { IconBaseProps } from "../types";

export const CheckDefaultLgSuccess = forwardRef<SVGSVGElement, IconBaseProps>(function CheckDefaultLgSuccess(
  { size = 32, color = "currentColor", title, "aria-label": ariaLabel, ...rest },
  ref,
) {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      color={color}
      role={title || ariaLabel ? "img" : "presentation"}
      aria-label={ariaLabel}
      aria-hidden={title || ariaLabel ? undefined : true}
      {...rest}
    >
      {title ? <title>{title}</title> : null}
      <path d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16Z" fill="#DCFCE7"/>
<path fillRule="evenodd" clipRule="evenodd" d="M22.7953 9.8534L13.2487 19.0667L10.7153 16.3601C10.2487 15.9201 9.51534 15.8934 8.982 16.2667C8.462 16.6534 8.31534 17.3334 8.63534 17.8801L11.6353 22.7601C11.9287 23.2134 12.4353 23.4934 13.0087 23.4934C13.5553 23.4934 14.0753 23.2134 14.3687 22.7601C14.8487 22.1334 24.0087 11.2134 24.0087 11.2134C25.2087 9.98674 23.7553 8.90674 22.7953 9.84007V9.8534Z" fill="#16A34A"/>
    </svg>
  );
});
CheckDefaultLgSuccess.displayName = "CheckDefaultLgSuccess";

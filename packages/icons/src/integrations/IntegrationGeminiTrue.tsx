// [collection] Figma variant — properties:
//   Integration: Gemini
//   Grayscale: True
import { forwardRef } from "react";
import type { IconBaseProps } from "../types";

export const IntegrationGeminiTrue = forwardRef<SVGSVGElement, IconBaseProps>(function IntegrationGeminiTrue(
  { size = 32, color = "currentColor", title, "aria-label": ariaLabel, ...rest },
  ref,
) {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      color={color}
      role={title || ariaLabel ? "img" : "presentation"}
      aria-label={ariaLabel}
      aria-hidden={title || ariaLabel ? undefined : true}
      {...rest}
    >
      {title ? <title>{title}</title> : null}
      <path d="M9.81623 1.00006C10.005 1.00006 10.1692 1.12898 10.2152 1.3121C10.3564 1.87222 10.5405 2.41856 10.7697 2.95003C11.3666 4.33676 12.1857 5.55055 13.2256 6.59048C14.266 7.63039 15.4794 8.44948 16.8661 9.04643C17.398 9.27557 17.9439 9.45971 18.504 9.60089C18.6871 9.64693 18.816 9.81114 18.816 9.99988C18.816 10.1886 18.6871 10.3528 18.504 10.3988C17.9439 10.54 17.3975 10.7242 16.8661 10.9533C15.4793 11.5503 14.2655 12.3694 13.2256 13.4093C12.1857 14.4497 11.3666 15.663 10.7697 17.0497C10.5405 17.5817 10.3564 18.1276 10.2152 18.6876C10.1692 18.8708 10.005 18.9997 9.81623 18.9997C9.62748 18.9997 9.46328 18.8708 9.41724 18.6876C9.27606 18.1276 9.09191 17.5812 8.86278 17.0497C8.26583 15.663 7.44723 14.4492 6.40683 13.4093C5.36637 12.3694 4.15311 11.5503 2.76637 10.9533C2.23439 10.7242 1.68856 10.54 1.12844 10.3988C0.945322 10.3528 0.816406 10.1886 0.816406 9.99988C0.81643 9.81114 0.945334 9.64693 1.12844 9.60089C1.68857 9.45971 2.2349 9.27559 2.76637 9.04643C4.15314 8.44946 5.3669 7.63042 6.40683 6.59048C7.44676 5.55055 8.2658 4.33679 8.86278 2.95003C9.09194 2.41804 9.27606 1.87222 9.41724 1.3121C9.46328 1.12899 9.62748 1.00009 9.81623 1.00006Z" fill="#A3A3A3"/>
    </svg>
  );
});
IntegrationGeminiTrue.displayName = "IntegrationGeminiTrue";

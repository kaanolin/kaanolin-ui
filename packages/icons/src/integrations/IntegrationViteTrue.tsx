// [collection] Figma variant — properties:
//   Integration: Vite
//   Grayscale: True
import { forwardRef, useId } from "react";
import type { IconBaseProps } from "../types";

export const IntegrationViteTrue = forwardRef<SVGSVGElement, IconBaseProps>(function IntegrationViteTrue(
  { size = 32, color = "currentColor", title, "aria-label": ariaLabel, ...rest },
  ref,
) {
  const uid = useId().replace(/[^a-zA-Z0-9_-]/g, "");
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
      <g clipPath={`url(#${uid}-clip0_12464_573759)`}>
<path d="M2.49069 3.92761L7.45162 4.81335L7.18307 9.35144C7.1552 9.82466 7.59019 10.1924 8.05221 10.0858L9.20748 9.81824L8.82467 11.6981C8.71708 12.2254 9.21196 12.6758 9.72701 12.5194L10.2456 12.3612L9.59127 15.5302C9.43205 16.3005 10.4564 16.7192 10.8833 16.0594L10.9682 15.9296L10.9829 15.9061L10.9956 15.8817L15.6645 6.56433C15.9283 6.03744 15.4721 5.43719 14.894 5.54871L13.7163 5.77527L14.0415 4.64636L17.9799 3.92957C18.3301 3.86576 18.597 4.23908 18.4233 4.54968L10.6801 18.3944C10.5203 18.6799 10.11 18.6815 9.94772 18.3973L2.05123 4.55066C1.87484 4.24092 2.13985 3.86546 2.49069 3.92761Z" fill="#A3A3A3"/>
<path d="M12.6245 5.953C12.4777 6.46264 12.921 6.94792 13.4419 6.84753L14.5063 6.64148L11.0044 13.6288L11.3237 12.0868C11.4323 11.5591 10.9367 11.1071 10.4214 11.2635L9.90084 11.4208L10.2788 9.57703C10.3754 9.10199 9.98068 8.68216 9.51608 8.72742L9.42233 8.74304L8.20358 9.02429L8.51998 3.68054L13.5649 2.69324L12.6245 5.953Z" fill="#A3A3A3"/>
</g>
<defs>
<clipPath id={`${uid}-clip0_12464_573759`}>
<rect width="17" height="17" fill="white" transform="translate(1.77246 2.04596)"/>
</clipPath>
</defs>
    </svg>
  );
});
IntegrationViteTrue.displayName = "IntegrationViteTrue";

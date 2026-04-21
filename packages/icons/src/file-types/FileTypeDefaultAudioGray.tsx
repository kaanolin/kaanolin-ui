// [collection] Figma variant — properties:
//   File type: Default / Audio
//   Type: Gray
import { forwardRef, useId } from "react";
import type { IconBaseProps } from "../types";

export const FileTypeDefaultAudioGray = forwardRef<SVGSVGElement, IconBaseProps>(function FileTypeDefaultAudioGray(
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
      viewBox="0 0 40 40"
      fill="none"
      color={color}
      role={title || ariaLabel ? "img" : "presentation"}
      aria-label={ariaLabel}
      aria-hidden={title || ariaLabel ? undefined : true}
      {...rest}
    >
      {title ? <title>{title}</title> : null}
      <mask id={`${uid}-mask0_4916_412077`} style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="4" y="0" width="32" height="40">
<path d="M4 4C4 1.79086 5.79086 0 8 0H24L36 12V36C36 38.2091 34.2091 40 32 40H8C5.79086 40 4 38.2091 4 36V4Z" fill={`url(#${uid}-paint0_linear_4916_412077)`}/>
</mask>
<g mask={`url(#${uid}-mask0_4916_412077)`}>
<path d="M4 4C4 1.79086 5.79086 0 8 0H24L36 12V36C36 38.2091 34.2091 40 32 40H8C5.79086 40 4 38.2091 4 36V4Z" fill="#F5F5F5"/>
</g>
<path d="M24 0L36 12H28C25.7909 12 24 10.2091 24 8V0Z" fill="#E5E5E5"/>
<path d="M17.2 28V20.237C17.2 19.9159 17.2 19.7554 17.2584 19.6252C17.3098 19.5105 17.3927 19.4126 17.4975 19.343C17.6163 19.264 17.7746 19.2376 18.0913 19.1848L23.9579 18.207C24.3852 18.1358 24.5989 18.1002 24.7654 18.162C24.9115 18.2163 25.034 18.3201 25.1116 18.4553C25.2 18.6094 25.2 18.826 25.2 19.2592V26.6667M17.2 28C17.2 29.1046 16.3045 30 15.2 30C14.0954 30 13.2 29.1046 13.2 28C13.2 26.8954 14.0954 26 15.2 26C16.3045 26 17.2 26.8954 17.2 28ZM25.2 26.6667C25.2 27.7713 24.3045 28.6667 23.2 28.6667C22.0954 28.6667 21.2 27.7713 21.2 26.6667C21.2 25.5621 22.0954 24.6667 23.2 24.6667C24.3045 24.6667 25.2 25.5621 25.2 26.6667Z" stroke="#404040" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<defs>
<linearGradient id={`${uid}-paint0_linear_4916_412077`} x1="20" y1="0" x2="20" y2="40" gradientUnits="userSpaceOnUse">
<stop stopOpacity="0.4"/>
<stop offset="1"/>
</linearGradient>
</defs>
    </svg>
  );
});
FileTypeDefaultAudioGray.displayName = "FileTypeDefaultAudioGray";

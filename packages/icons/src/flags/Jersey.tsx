// [flag] generated from plugin-misc-icons.json
import { forwardRef, type ReactNode } from "react";
import type { FlagProps, FlagShape } from "../types";

export const Jersey = forwardRef<SVGSVGElement, FlagProps>(function Jersey(
  { size = 24, shape = "circle", title, "aria-label": ariaLabel, ...rest },
  ref,
) {
  const shapes: Partial<Record<FlagShape, { viewBox: string; body: ReactNode }>> = {
    circle: { viewBox: "0 0 20 20", body: <><path d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="#F0F0F0"/>
<path d="M17.9334 16.0889L11.8446 10.0001H11.8445L17.9334 3.91114C17.6708 3.56989 17.3836 3.24157 17.071 2.92895C16.7584 2.61637 16.4301 2.32907 16.0888 2.06653L9.99996 8.1554L9.99992 8.15543L3.91105 2.06653C3.56984 2.32911 3.24148 2.61633 2.92887 2.92895C2.61625 3.24157 2.32898 3.56989 2.06645 3.91114L8.15531 9.99997L8.15535 10L2.06641 16.089C2.32902 16.4302 2.61629 16.7585 2.92883 17.0711C3.24145 17.3837 3.56973 17.671 3.91102 17.9336L9.99992 11.8447L9.99996 11.8447L16.0888 17.9335C16.43 17.6709 16.7584 17.3837 17.071 17.0711C17.3836 16.7585 17.6709 16.4302 17.9334 16.0889Z" fill="#D80027"/>
<path d="M8.26074 3.04354L9.99988 3.4783L11.739 3.04354V1.56529L11.0434 1.91311L9.99988 0.869629L8.95641 1.91311L8.26074 1.56529V3.04354Z" fill="#FFDA44"/>
<path d="M8.26074 3.04346V4.13049C8.26074 5.46174 9.99988 5.86963 9.99988 5.86963C9.99988 5.86963 11.739 5.4617 11.739 4.13049V3.04346H8.26074Z" fill="#D80027"/></> },
    square: { viewBox: "0 0 20 20", body: <><rect width="20" height="20" fill="white"/>
<path d="M11.7678 10L20 1.76777V0H18.2322L10 8.23223L1.76777 0H0V1.76777L8.23223 10L0 18.2322V20H1.76777L10 11.7678L18.2322 20H20V18.2322L11.7678 10Z" fill="#D80027"/>
<path d="M8.26074 3.58695L9.99984 4.02176L11.7389 3.58695V2.10875L11.0433 2.45656L9.99984 1.41309L8.95637 2.45656L8.26074 2.10875V3.58695Z" fill="#FFDA44"/>
<path d="M8.26074 3.58704V4.67403C8.26074 6.00524 9.99984 6.41313 9.99984 6.41313C9.99984 6.41313 11.7389 6.0052 11.7389 4.67403V3.58704H8.26074Z" fill="#D80027"/></> },
    rectangle: { viewBox: "0 0 30 20", body: <><rect width="30" height="19.9811" fill="white"/>
<path d="M17.6517 10.0097L30 1.78535V0.0192871H27.3483L15 8.24359L2.65166 0.0192871H0V1.78535L12.3483 10.0097L0 18.234V20H2.65166L15 11.7758L27.3483 20H30V18.234L17.6517 10.0097Z" fill="#D80027"/>
<path d="M13.6953 4.79731L14.9997 5.12307L16.304 4.79731V3.68967L15.7823 3.95034L14.9997 3.16846L14.217 3.95034L13.6953 3.68967V4.79731Z" fill="#FFDA44"/>
<path d="M13.6953 4.79724V5.61173C13.6953 6.6092 14.9997 6.91483 14.9997 6.91483C14.9997 6.91483 16.304 6.6092 16.304 5.61173V4.79724H13.6953Z" fill="#D80027"/></> }
  };
  const s = shapes[shape] ?? shapes["circle"]!;
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox={s.viewBox}
      fill="none"
      role={title || ariaLabel ? "img" : "presentation"}
      aria-label={ariaLabel}
      aria-hidden={title || ariaLabel ? undefined : true}
      {...rest}
    >
      {title ? <title>{title}</title> : null}
      {s.body}
    </svg>
  );
});
Jersey.displayName = "Jersey";

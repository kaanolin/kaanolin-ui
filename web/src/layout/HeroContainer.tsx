import type { ReactNode } from "react";

/**
 * Vibrant hero frame that hosts the live component demo, mirroring Radix'
 * <HeroContainer/>. Gradient background, centered content, generous padding.
 */
export function HeroContainer({ children }: { children: ReactNode }) {
  return (
    <div className="overflow-hidden rounded-t-xl border border-border-secondary border-b-0 bg-gradient-to-br from-indigo-500 via-violet-500 to-purple-500">
      <div className="min-h-[340px] px-8 py-12 flex items-center justify-center">
        <div className="bg-zinc-900/40 backdrop-blur-sm rounded-lg p-6 max-w-full">
          {children}
        </div>
      </div>
    </div>
  );
}

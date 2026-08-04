"use client";

/**
 * Rolling text — on hover the label rolls up and an identical copy rolls in
 * from below (the Framer "Rolling Text" effect). Purely CSS-transform based.
 * The parent must have the `group` class for the hover to trigger.
 */
import { ReactNode } from "react";

export function RollingText({ children }: { children: ReactNode }) {
  return (
    <span className="relative inline-block overflow-hidden align-bottom leading-[1.2]">
      <span className="block transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-full">
        {children}
      </span>
      <span aria-hidden="true" className="absolute left-0 top-full block transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-full">
        {children}
      </span>
    </span>
  );
}

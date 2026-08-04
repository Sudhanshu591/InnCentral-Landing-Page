import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** Merge conditional + conflicting Tailwind classes — used by shadcn/Aceternity/Magic UI/etc. */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

import Link from "next/link";
import { ReactNode } from "react";
import { RollingText } from "@/components/motion/RollingText";

/** Circular arrow badge — the recurring motif on primary buttons. */
function ArrowBadge({ tone = "onDark" }: { tone?: "onDark" | "onLight" }) {
  return (
    <span
      aria-hidden="true"
      className={`grid size-7 shrink-0 place-items-center rounded-full transition-transform duration-200 group-hover:translate-x-0.5 ${
        tone === "onDark" ? "bg-white text-ink" : "bg-ink text-white"
      }`}
    >
      <svg width="13" height="13" viewBox="0 0 12 12" fill="none">
        <path d="M2.5 6h7M6.5 3l3 3-3 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

/** Primary button — filled pill with inset arrow badge. */
export function PrimaryButton({
  href,
  children,
  className = "",
  variant = "dark",
}: {
  href: string;
  children: ReactNode;
  className?: string;
  variant?: "dark" | "accent" | "white";
}) {
  const styles = {
    dark: "bg-ink text-white hover:bg-ink/90",
    accent: "bg-accent text-white hover:bg-accent/90",
    white: "bg-white text-ink hover:bg-white/90",
  }[variant];
  const badgeTone = variant === "white" ? "onLight" : "onDark";

  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-2.5 rounded-full py-2 pl-5 pr-2 text-[15px] font-semibold transition-colors duration-200 ${styles} ${className}`}
    >
      <RollingText>{children}</RollingText>
      <ArrowBadge tone={badgeTone} />
    </Link>
  );
}

/** Secondary button — bordered pill, no badge. */
export function SecondaryButton({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-2 rounded-full border border-line bg-white px-5 py-2.5 text-[15px] font-semibold text-ink transition-colors duration-200 hover:bg-bg-tint ${className}`}
    >
      <span>{children}</span>
      <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
    </Link>
  );
}

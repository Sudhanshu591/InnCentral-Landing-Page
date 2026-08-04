import { ReactNode } from "react";
import { Reveal } from "@/components/motion/Reveal";

export function SectionHeading({
  title,
  subtitle,
  align = "center",
  className = "",
}: {
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "center" | "left";
  className?: string;
}) {
  const alignCls = align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl text-left";
  return (
    <div className={`${alignCls} ${className}`}>
      <Reveal>
        <h2 className="text-[clamp(1.9rem,3.6vw,2.75rem)] font-bold tracking-[-0.01em] text-ink">
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.08}>
          <p className="mt-4 text-[16px] leading-relaxed text-ink-muted">{subtitle}</p>
        </Reveal>
      )}
    </div>
  );
}

"use client";

import { forwardRef, useRef } from "react";
import { BedDouble, Home, Plane, CreditCard, Zap, Receipt } from "lucide-react";
import { AnimatedBeam } from "@/components/shadcn/animated-beam";
import { cn } from "@/lib/utils";

/** A labelled circular node; the ref points at the circle (beam endpoint). */
const Node = forwardRef<
  HTMLDivElement,
  { icon: React.ReactNode; label: string; center?: boolean }
>(({ icon, label, center }, ref) => (
  <div className="flex flex-col items-center gap-2">
    <div
      ref={ref}
      className={cn(
        "z-10 grid place-items-center rounded-full border shadow-[0_12px_30px_-12px_rgba(0,0,0,0.25)]",
        center
          ? "size-16 border-transparent bg-accent text-white"
          : "size-12 border-line bg-white text-ink"
      )}
    >
      {icon}
    </div>
    <span className={cn("text-[12px] font-medium", center ? "text-ink" : "text-ink-muted")}>{label}</span>
  </div>
));
Node.displayName = "Node";

export function IntegrationsBeams() {
  const container = useRef<HTMLDivElement>(null);
  const center = useRef<HTMLDivElement>(null);
  const l1 = useRef<HTMLDivElement>(null);
  const l2 = useRef<HTMLDivElement>(null);
  const l3 = useRef<HTMLDivElement>(null);
  const r1 = useRef<HTMLDivElement>(null);
  const r2 = useRef<HTMLDivElement>(null);
  const r3 = useRef<HTMLDivElement>(null);

  const beam = { gradientStartColor: "#007bff", gradientStopColor: "#0047b3", duration: 4, pathColor: "#e5e2e0" };

  return (
    <div ref={container} className="relative mx-auto flex h-[380px] w-full max-w-[760px] items-center justify-between px-4 sm:px-14">
      <div className="flex flex-col justify-between gap-10 py-4">
        <Node ref={l1} icon={<BedDouble className="size-5" />} label="Booking.com" />
        <Node ref={l2} icon={<Home className="size-5" />} label="Airbnb" />
        <Node ref={l3} icon={<Plane className="size-5" />} label="Expedia" />
      </div>

      <Node ref={center} center icon={<BedDouble className="size-7" />} label="InnCentral" />

      <div className="flex flex-col justify-between gap-10 py-4">
        <Node ref={r1} icon={<CreditCard className="size-5" />} label="Stripe" />
        <Node ref={r2} icon={<Zap className="size-5" />} label="Zapier" />
        <Node ref={r3} icon={<Receipt className="size-5" />} label="QuickBooks" />
      </div>

      <AnimatedBeam containerRef={container} fromRef={l1} toRef={center} curvature={-60} {...beam} />
      <AnimatedBeam containerRef={container} fromRef={l2} toRef={center} {...beam} delay={0.6} />
      <AnimatedBeam containerRef={container} fromRef={l3} toRef={center} curvature={60} {...beam} delay={1.1} />
      <AnimatedBeam containerRef={container} fromRef={r1} toRef={center} curvature={-60} reverse {...beam} delay={0.3} />
      <AnimatedBeam containerRef={container} fromRef={r2} toRef={center} reverse {...beam} delay={0.9} />
      <AnimatedBeam containerRef={container} fromRef={r3} toRef={center} curvature={60} reverse {...beam} delay={1.4} />
    </div>
  );
}

"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const tabs = ["AI Insights", "Distribution", "Multi-Property"];

export function ROI() {
  const [active, setActive] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
      e.preventDefault();
      const next = e.key === "ArrowRight" ? (active + 1) % tabs.length : (active - 1 + tabs.length) % tabs.length;
      setActive(next);
      tabRefs.current[next]?.focus();
    }
  };

  return (
    <section className="py-16 sm:py-24">
      <Container>
        <SectionHeading
          title="Better hotel decisions, backed by AI"
          subtitle="AI insights for owners, managers, front desk, housekeeping and revenue teams — so the right call is obvious, in the moment it matters."
        />

        <div role="tablist" aria-label="ROI views" onKeyDown={onKey} className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {tabs.map((t, i) => (
            <button
              key={t}
              ref={(el) => { tabRefs.current[i] = el; }}
              role="tab"
              aria-selected={i === active}
              tabIndex={i === active ? 0 : -1}
              onClick={() => setActive(i)}
              className={`rounded-full px-5 py-2.5 text-[15px] font-semibold transition-colors duration-200 ${
                i === active ? "bg-accent text-white" : "border border-line bg-white text-ink hover:bg-bg-tint"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="relative mx-auto mt-10 max-w-[1000px]">
          <div aria-hidden="true" className="absolute -inset-6 -z-0 rounded-[40px] opacity-45 blur-3xl" style={{ background: "radial-gradient(60% 60% at 50% 45%, rgba(0,123,255,0.5), rgba(0,71,179,0.22) 50%, transparent 75%)" }} />
          <div className="relative overflow-hidden rounded-[20px] border border-line bg-white p-2 shadow-[0_40px_120px_-40px_rgba(0,0,0,0.35)]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, scale: 0.99 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.99 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              >
                <Image
                  src="/assets/yEqJuARktnAHikNuItzQVS92YFA.png"
                  alt={tabs[active]}
                  width={2128}
                  height={1446}
                  className="h-auto w-full rounded-[14px]"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </section>
  );
}

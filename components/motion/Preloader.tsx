"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { site } from "@/lib/site";

/**
 * Intro preloader — the InnCentral wordmark over the page background, a thin
 * progress bar filling to 100%, then a curtain that slides up to reveal the
 * site. Shows once per browser session.
 */
export function Preloader() {
  const reduce = useReducedMotion();
  const [show, setShow] = useState(false);
  const [pct, setPct] = useState(0);

  useEffect(() => {
    if (reduce) return;
    if (sessionStorage.getItem("ic-preloaded")) return;

    setShow(true);
    document.body.style.overflow = "hidden";

    const start = performance.now();
    const dur = 1200;
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / dur);
      setPct(Math.round(t * 100));
      if (t < 1) raf = requestAnimationFrame(tick);
      else {
        sessionStorage.setItem("ic-preloaded", "1");
        setTimeout(() => setShow(false), 450);
      }
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      document.body.style.overflow = "";
    };
  }, [reduce]);

  useEffect(() => {
    if (!show) document.body.style.overflow = "";
  }, [show]);

  if (reduce) return null;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-bg"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
        >
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(2.5rem,9vw,6rem)] uppercase leading-none tracking-[0.01em] text-ink"
            style={{ fontFamily: "var(--font-anton)" }}
          >
            {site.name}
          </motion.span>

          <div className="mt-8 h-[3px] w-[220px] overflow-hidden rounded-full bg-line">
            <div className="h-full rounded-full bg-accent transition-[width] duration-100" style={{ width: `${pct}%` }} />
          </div>
          <span className="mt-3 text-[13px] font-medium tabular-nums text-ink-muted">{pct}%</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

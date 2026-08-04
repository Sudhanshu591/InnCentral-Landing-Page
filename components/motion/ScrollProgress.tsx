"use client";

import { motion, useScroll, useSpring, useReducedMotion } from "framer-motion";

/** Thin blue bar pinned to the top that fills as the page scrolls. */
export function ScrollProgress() {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  if (reduce) return null;

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[80] h-[3px] origin-left bg-gradient-to-r from-[#007bff] to-[#0047b3]"
    />
  );
}

"use client";

import Image from "next/image";
import { useState, useRef } from "react";
import dynamic from "next/dynamic";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Container } from "@/components/ui/Container";

// three.js network animation — client-only, layered above the gradient
const HeroThree = dynamic(() => import("@/components/motion/HeroThree").then((m) => m.HeroThree), {
  ssr: false,
});
import { PrimaryButton, SecondaryButton } from "@/components/ui/Button";
import { site } from "@/lib/site";

const easeOut = [0.16, 1, 0.3, 1] as const;
const avatars = [
  "/assets/buPUhtj1Ptg9TzyLz4UxnvTE.png",
  "/assets/TcQigYXQSNo3CKb19FRu0igvPtk.png",
  "/assets/mtXy0D5AuYvsW5kJo6XDAi11FEs.png",
];

// Hero image — you provide this file. Drop it at public/assets/hero-hotel.jpg
// (or change the path/extension here to match your filename).
const HERO_IMAGE = "/assets/hero-dashboard.png";

function ReviewPill() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: easeOut }}
      className="inline-flex items-center gap-3 rounded-full border border-line bg-white/70 py-1.5 pl-1.5 pr-4 backdrop-blur"
    >
      <div className="flex -space-x-2.5">
        {avatars.map((src) => (
          <Image key={src} src={src} alt="" width={28} height={28} className="size-7 rounded-full border-2 border-white object-cover" />
        ))}
      </div>
      <div className="flex items-center gap-2">
        <div className="flex" aria-hidden="true">
          {Array.from({ length: 5 }).map((_, i) => (
            <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="#f5b301">
              <path d="M7 1l1.8 3.7 4 .6-2.9 2.8.7 4L7 10.9 3.4 12.1l.7-4L1.2 5.3l4-.6L7 1z" />
            </svg>
          ))}
        </div>
        <span className="text-[13px] font-medium text-ink">
          <span className="font-bold text-[#f5b301]">4.9/5</span> · Trusted by hotels in{" "}
          <span className="font-semibold text-[#f5b301]">50+</span> countries
        </span>
      </div>
    </motion.div>
  );
}

// Key value-words rendered in the brand blue gradient
const HIGHLIGHT = new Set(["Hotel", "Free", "Platform"]);

function AnimatedHeadline({ text }: { text: string }) {
  const reduce = useReducedMotion();
  const words = text.split(" ");
  return (
    <h1 className="mt-6 text-[clamp(2.4rem,5.6vw,4.25rem)] font-bold leading-[1.1] tracking-[-0.02em] text-ink">
      {words.map((w, i) => (
        <span key={i} className="mr-[0.25em] inline-block overflow-hidden align-bottom last:mr-0">
          <motion.span
            className={`inline-block ${
              HIGHLIGHT.has(w)
                ? "bg-gradient-to-br from-[#007bff] to-[#0047b3] bg-clip-text text-transparent"
                : ""
            }`}
            initial={reduce ? false : { y: "100%", opacity: 0 }}
            animate={reduce ? undefined : { y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: easeOut, delay: 0.15 + i * 0.06 }}
          >
            {w}
          </motion.span>
        </span>
      ))}
    </h1>
  );
}

/** Renders the provided hero image; reserves neutral space until the file exists. */
function HeroShowcase() {
  const [ok, setOk] = useState(true);
  if (!ok) {
    return <div className="aspect-[1904/886] w-full rounded-[14px] bg-bg-tint" />;
  }
  return (
    <Image
      src={HERO_IMAGE}
      alt="InnCentral hotel management dashboard"
      width={1918}
      height={889}
      priority
      unoptimized
      onError={() => setOk(false)}
      className="h-auto w-full rounded-[14px]"
    />
  );
}

export function Hero() {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const showcaseY = useTransform(scrollYProgress, [0, 1], [0, -80]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden pb-0 pt-20 sm:pt-24">
      {/* Blue gradient background (#007BFF) */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(130% 95% at 50% -10%, rgba(0,123,255,0.32) 0%, rgba(0,123,255,0.12) 34%, rgba(0,123,255,0) 64%)",
        }}
      />
      {/* Network animation, above the gradient */}
      <HeroThree />
      <Container className="relative z-10">
        <div className="mx-auto flex max-w-[760px] flex-col items-center text-center">
          <ReviewPill />
          <AnimatedHeadline text={site.tagline} />
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easeOut, delay: 0.5 }}
            className="mt-5 max-w-[560px] text-[18px] leading-[1.6] text-ink-muted"
          >
            {site.description}
          </motion.p>
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easeOut, delay: 0.62 }}
            className="mt-8 flex flex-col items-center gap-4 sm:flex-row"
          >
            <PrimaryButton href={site.ctaPrimary.href}>{site.ctaPrimary.label}</PrimaryButton>
            <SecondaryButton href={site.ctaSecondary.href}>{site.ctaSecondary.label}</SecondaryButton>
          </motion.div>
        </div>

        {/* Showcase — your provided hero image, with a gentle scroll parallax */}
        <motion.div
          style={reduce ? undefined : { y: showcaseY }}
          className="relative mx-auto mt-16 w-full max-w-[1120px] sm:mt-20"
        >
          <div
            aria-hidden="true"
            className="absolute -inset-x-8 -bottom-8 top-6 -z-0"
            style={{
              background:
                "radial-gradient(55% 60% at 50% 42%, rgba(0,123,255,0.40), rgba(0,71,179,0.20) 46%, transparent 72%)",
              filter: "blur(50px)",
              opacity: 0.85,
              borderRadius: "40px",
            }}
          />
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 40, scale: 0.96 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, ease: easeOut }}
            className="relative overflow-hidden rounded-[20px] border border-line bg-white p-2 shadow-[0_40px_120px_-40px_rgba(0,0,0,0.35)]"
          >
            <HeroShowcase />
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}

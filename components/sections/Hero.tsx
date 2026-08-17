"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";

// three.js network animation — client-only, layered above the photo
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

function ReviewPill() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: easeOut }}
      className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 py-1.5 pl-1.5 pr-4 shadow-sm ring-1 ring-white/10 backdrop-blur-md"
    >
      <div className="flex -space-x-2.5">
        {avatars.map((src) => (
          <Image key={src} src={src} alt="" width={28} height={28} className="size-7 rounded-full border-2 border-white/80 object-cover" />
        ))}
      </div>
      <div className="flex items-center gap-2">
        <div className="flex" aria-hidden="true">
          {Array.from({ length: 5 }).map((_, i) => (
            <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="#ffc73a">
              <path d="M7 1l1.8 3.7 4 .6-2.9 2.8.7 4L7 10.9 3.4 12.1l.7-4L1.2 5.3l4-.6L7 1z" />
            </svg>
          ))}
        </div>
        <span className="text-[13px] font-medium text-white">
          <span className="font-bold text-[#ffc73a]">4.9/5</span> · Trusted by hotels in{" "}
          <span className="font-semibold">50+</span> countries
        </span>
      </div>
    </motion.div>
  );
}

// Key value-words rendered in a bright brand-blue gradient that glows on the dark photo
const HIGHLIGHT = new Set(["Hotel", "Free", "Platform"]);

function AnimatedHeadline({ text }: { text: string }) {
  const reduce = useReducedMotion();
  const words = text.split(" ");
  return (
    <h1 className="mt-6 text-[clamp(2.4rem,5.6vw,4.25rem)] font-bold leading-[1.1] tracking-[-0.02em] text-white [text-shadow:0_2px_18px_rgba(4,12,30,0.55),0_1px_3px_rgba(4,12,30,0.4)]">
      {words.map((w, i) => (
        <span key={i} className="mr-[0.25em] inline-block overflow-hidden align-bottom last:mr-0">
          <motion.span
            className={`inline-block ${
              HIGHLIGHT.has(w)
                ? "bg-gradient-to-br from-[#8fceff] to-[#1f8bff] bg-clip-text text-transparent [filter:drop-shadow(0_2px_12px_rgba(31,139,255,0.45))] [text-shadow:none]"
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

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden pb-16 pt-28 sm:pb-20 sm:pt-32">
      {/* Dusk resort photo. It's dark enough to carry white text directly, so the
          treatment is a clean scrim for depth + legibility — no white glow haze. */}
      <div aria-hidden="true" className="absolute inset-0 z-0">
        <Image
          src="/assets/hero-bg.png"
          alt=""
          fill
          priority
          unoptimized
          sizes="100vw"
          className="object-cover"
        />
        {/* base scrim — darkens the whole photo just enough for white text to sit
            confidently anywhere across it */}
        <div className="absolute inset-0 bg-[#050c1c]/45" />
        {/* readability gradient — deeper behind the copy column (upper/centre),
            easing off toward the bottom so the pool/paving stay visible */}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(180deg, rgba(5,12,28,0.62) 0%, rgba(5,12,28,0.38) 42%, rgba(5,12,28,0.18) 70%, rgba(5,12,28,0.35) 100%)" }}
        />
        {/* depth vignette — frames the corners */}
        <div
          className="absolute inset-0"
          style={{ background: "radial-gradient(120% 120% at 50% 40%, transparent 48%, rgba(3,8,20,0.45) 100%)" }}
        />
        {/* subtle brand-blue tint from the top */}
        <div
          className="absolute inset-0"
          style={{ background: "radial-gradient(130% 90% at 50% -10%, rgba(0,123,255,0.28) 0%, rgba(0,123,255,0.08) 36%, rgba(0,123,255,0) 66%)" }}
        />
      </div>
      {/* Network animation, dimmed so it reads as subtle texture over the photo */}
      <div aria-hidden="true" className="absolute inset-0 z-0 opacity-30">
        <HeroThree />
      </div>
      <Container className="relative z-10">
        <div className="mx-auto flex max-w-[760px] flex-col items-center text-center">
          <ReviewPill />
          <AnimatedHeadline text={site.tagline} />
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easeOut, delay: 0.5 }}
            className="mt-5 max-w-[560px] text-[18px] font-medium leading-[1.6] text-white/85 [text-shadow:0_1px_12px_rgba(4,12,30,0.6)]"
          >
            {site.description}
          </motion.p>
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easeOut, delay: 0.62 }}
            className="mt-8 flex flex-col items-center gap-4 sm:flex-row"
          >
            <PrimaryButton href={site.ctaPrimary.href} variant="white">{site.ctaPrimary.label}</PrimaryButton>
            <SecondaryButton href={site.ctaSecondary.href}>{site.ctaSecondary.label}</SecondaryButton>
          </motion.div>
          <motion.p
            initial={reduce ? false : { opacity: 0 }}
            animate={reduce ? undefined : { opacity: 1 }}
            transition={{ duration: 0.6, ease: easeOut, delay: 0.72 }}
            className="mt-5 flex items-center gap-2 text-[13px] font-medium text-white/75 [text-shadow:0_1px_10px_rgba(4,12,30,0.6)]"
          >
            <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="text-[#8fceff]">
              <path d="M6.5 8.5l1.2 1.2 2.8-3M8 1.6l5.2 2.2v3.4c0 3.2-2.2 5.5-5.2 6.6-3-1.1-5.2-3.4-5.2-6.6V3.8L8 1.6z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            No credit card required · Unlimited rooms, users &amp; properties
          </motion.p>
        </div>
      </Container>
    </section>
  );
}

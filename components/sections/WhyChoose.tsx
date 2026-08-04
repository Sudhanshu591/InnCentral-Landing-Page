"use client";

import Image from "next/image";
import { useRef, useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const avatars = [
  "/assets/buPUhtj1Ptg9TzyLz4UxnvTE.png",
  "/assets/TcQigYXQSNo3CKb19FRu0igvPtk.png",
  "/assets/mtXy0D5AuYvsW5kJo6XDAi11FEs.png",
];

/* card 1 — occupancy stat tile */
function OccupancyArt() {
  return (
    <div className="flex h-[180px] items-center justify-center rounded-2xl bg-bg-tint p-5">
      <div className="w-full max-w-[240px] rounded-xl border border-line bg-white p-4">
        <p className="text-[12px] text-ink-muted">Occupancy this week</p>
        <div className="mt-1 flex items-baseline justify-between">
          <span className="text-[22px] font-bold text-ink">92%</span>
          <span className="text-[12px] font-semibold text-accent">128 check-ins</span>
        </div>
        <svg viewBox="0 0 220 44" className="mt-3 h-10 w-full" fill="none" preserveAspectRatio="none">
          <path d="M0 34C22 34 26 14 44 14s22 16 44 16 26-24 44-24 24 20 44 20 22-8 44-8" stroke="#007bff" strokeWidth="2" />
        </svg>
      </div>
    </div>
  );
}

/* card 2 — logo chip on a blue gradient */
function UnifiedArt() {
  return (
    <div
      className="relative flex h-[180px] items-center justify-center overflow-hidden rounded-2xl"
      style={{ background: "linear-gradient(120deg, #00a2ff 0%, #007bff 45%, #0047b3 100%)" }}
    >
      <div className="relative flex items-center gap-2 rounded-2xl bg-white/95 px-5 py-3 shadow-lg backdrop-blur">
        <span className="grid size-6 place-items-center rounded-md bg-accent text-[11px] font-bold text-white">✦</span>
        <span className="text-[15px] font-bold text-ink">InnCentral</span>
      </div>
    </div>
  );
}

/* card 3 — property rows with avatars */
function PropertiesArt() {
  const rows = [
    { title: "Hotel Mayuri", time: "42 rooms · Live" },
    { title: "Hotel Surya", time: "28 rooms · Live" },
  ];
  return (
    <div className="flex h-[180px] flex-col justify-center gap-3 rounded-2xl bg-bg-tint p-5">
      {rows.map((r) => (
        <div key={r.title} className="flex items-center justify-between rounded-xl border border-line bg-white px-4 py-3">
          <div>
            <p className="text-[13px] font-semibold text-ink">{r.title}</p>
            <p className="text-[11px] text-ink-muted">{r.time}</p>
          </div>
          <div className="flex -space-x-2">
            {avatars.map((a) => (
              <Image key={a} src={a} alt="" width={22} height={22} className="size-[22px] rounded-full border-2 border-white object-cover" />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

/* card 4 — room status grid */
function AvailabilityArt() {
  const s = ["a", "a", "b", "a", "c", "a", "a", "b", "a", "a", "c", "a", "a", "a", "b", "c", "a", "a"];
  return (
    <div className="flex h-[180px] items-center justify-center rounded-2xl bg-bg-tint p-5">
      <div className="w-full max-w-[240px] rounded-xl border border-line bg-white p-4">
        <p className="mb-2 text-[12px] text-ink-muted">Room status · Floor 2</p>
        <div className="grid grid-cols-6 gap-1.5">
          {s.map((v, i) => (
            <span key={i} className={`aspect-square rounded-[5px] ${v === "a" ? "bg-accent/80" : v === "b" ? "bg-ink/70" : "bg-line"}`} />
          ))}
        </div>
      </div>
    </div>
  );
}

/* card 5 — payment tile */
function PaymentsArt() {
  return (
    <div className="flex h-[180px] items-center justify-center rounded-2xl bg-bg-tint p-5">
      <div className="w-full max-w-[240px] rounded-xl border border-line bg-white p-4">
        <div className="flex items-center justify-between">
          <p className="text-[12px] text-ink-muted">Payment received</p>
          <span className="rounded-full bg-accent/12 px-2 py-0.5 text-[11px] font-semibold text-accent">Paid</span>
        </div>
        <p className="mt-2 text-[24px] font-bold text-ink">$1,240.00</p>
        <div className="mt-3 flex items-center gap-2 rounded-lg border border-line px-3 py-2">
          <span className="grid size-6 place-items-center rounded bg-accent text-white">
            <svg width="12" height="12" viewBox="0 0 16 16" fill="none"><rect x="1.5" y="3" width="13" height="10" rx="2" stroke="currentColor" strokeWidth="1.4" /><path d="M1.5 6.5h13" stroke="currentColor" strokeWidth="1.4" /></svg>
          </span>
          <span className="text-[12px] text-ink-muted">•••• 4242 · Visa</span>
        </div>
      </div>
    </div>
  );
}

/* card 6 — ADR insight tile */
function InsightsArt() {
  return (
    <div className="flex h-[180px] items-center justify-center rounded-2xl bg-bg-tint p-5">
      <div className="w-full max-w-[240px] rounded-xl border border-line bg-white p-4">
        <p className="text-[12px] text-ink-muted">Avg. daily rate</p>
        <div className="mt-1 flex items-baseline justify-between">
          <span className="text-[22px] font-bold text-ink">$182</span>
          <span className="text-[12px] font-semibold text-accent">+6.4%</span>
        </div>
        <svg viewBox="0 0 220 44" className="mt-3 h-10 w-full" fill="none" preserveAspectRatio="none">
          <path d="M0 38C24 38 30 22 52 22s24 10 46 4 24-18 46-18 22 12 44 6" stroke="#007bff" strokeWidth="2" />
        </svg>
      </div>
    </div>
  );
}

/* card 7 — setup checklist */
function SetupArt() {
  const steps = ["Import rooms & rates", "Connect your channels", "Go live"];
  return (
    <div className="flex h-[180px] flex-col justify-center gap-2.5 rounded-2xl bg-bg-tint p-5">
      {steps.map((s) => (
        <div key={s} className="flex items-center gap-3 rounded-xl border border-line bg-white px-4 py-2.5">
          <span className="grid size-6 place-items-center rounded-full bg-accent text-white">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2.5 6.3l2.2 2.2 4.8-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </span>
          <span className="text-[13px] font-medium text-ink">{s}</span>
        </div>
      ))}
    </div>
  );
}

const cards = [
  { art: <OccupancyArt />, title: "Free, With No Limits", copy: "Run a real hotel on the free plan — no limits on rooms, users, reservations, branches or properties." },
  { art: <UnifiedArt />, title: "One Unified Platform", copy: "PMS, front desk, housekeeping, booking engine, POS, payments and 100+ channels in one place." },
  { art: <PropertiesArt />, title: "Multi-Property Control", copy: "Switch properties, set branch-level access, and roll up group reporting from one owner dashboard." },
  { art: <AvailabilityArt />, title: "Real-Time Availability", copy: "Live room status and availability sync across every channel, so you never oversell a room again." },
  { art: <PaymentsArt />, title: "Built-In Payments", copy: "Collect deposits, refunds and full payments through global gateways, posted straight to guest bills." },
  { art: <InsightsArt />, title: "AI Revenue Insights", copy: "AI-powered occupancy, ADR and revenue insights for owners, managers and revenue teams." },
  { art: <SetupArt />, title: "Live in a Day", copy: "Import your rooms, rates and channels and go live the same day — no long onboarding." },
];

function ArrowButton({ dir, onClick }: { dir: "prev" | "next"; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={dir === "prev" ? "Previous" : "Next"}
      className="grid size-11 place-items-center rounded-full border border-line bg-white text-ink transition-colors duration-200 hover:border-accent hover:text-accent"
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        {dir === "prev" ? <path d="M15 18l-6-6 6-6" /> : <path d="M9 18l6-6-6-6" />}
      </svg>
    </button>
  );
}

export function WhyChoose() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  const reduce = useReducedMotion();

  const scroll = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: el.clientWidth * 0.85 * dir, behavior: "smooth" });
  };

  // Autoplay — advance one card at a time, loop at the end, pause on hover.
  useEffect(() => {
    if (reduce || paused) return;
    const el = trackRef.current;
    if (!el) return;
    const id = setInterval(() => {
      const child = el.firstElementChild as HTMLElement | null;
      const cardStep = child ? child.offsetWidth + 24 : el.clientWidth * 0.85; // gap-6 = 24px
      const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 8;
      el.scrollTo({ left: atEnd ? 0 : el.scrollLeft + cardStep, behavior: "smooth" });
    }, 2200);
    return () => clearInterval(id);
  }, [paused, reduce]);

  return (
    <section className="py-16 sm:py-24">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            align="left"
            title="Why hotels choose InnCentral"
            subtitle="Hotels, resorts and multi-property groups pick InnCentral over traditional PMS tools — it runs the entire operation from one platform, free to start."
          />
          <div className="hidden shrink-0 gap-2.5 sm:flex">
            <ArrowButton dir="prev" onClick={() => scroll(-1)} />
            <ArrowButton dir="next" onClick={() => scroll(1)} />
          </div>
        </div>

        <div
          ref={trackRef}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onPointerDown={() => setPaused(true)}
          className="-mx-5 mt-10 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth px-5 pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {cards.map((c) => (
            <div key={c.title} className="w-[84%] shrink-0 snap-start sm:w-[47%] lg:w-[31.5%]">
              <div className="h-full rounded-[20px] border border-line bg-white p-4 transition-transform duration-200 hover:-translate-y-1">
                {c.art}
                <div className="px-2 pb-2 pt-5">
                  <h3 className="text-[20px] font-bold text-ink">{c.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-ink-muted">{c.copy}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

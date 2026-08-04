"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

// Per-tab screenshot. Drop each file in public/assets with these names to give
// every tab its own image. Until a file exists, a placeholder box is shown.
const blocks = [
  {
    id: "frontdesk",
    tab: "Reservations & Front Desk",
    title: "Reservations & Front Desk",
    copy: "Manage reservations, check-in/out, room moves and guest bills from one shared calendar with live availability.",
    image: "/assets/tab-reservation.png",
  },
  {
    id: "housekeeping",
    tab: "Housekeeping & Maintenance",
    title: "Housekeeping & Maintenance",
    copy: "Track room status in real time, assign cleaning tasks and maintenance tickets, and keep staff in sync on mobile.",
    image: "/assets/tab-housekeeping.png",
  },
  {
    id: "distribution",
    tab: "Distribution & Channels",
    title: "Distribution & Channels",
    copy: "Sell rooms across 100+ OTA, direct and partner channels with real-time rate and inventory sync to prevent overbooking.",
    image: "/assets/tab-channels.png",
  },
  {
    id: "booking-engine",
    tab: "Booking Engine",
    title: "Booking Engine",
    copy: "Take commission-free direct bookings from your own website, with live availability and payment collected at checkout.",
    image: "/assets/tab-booking-engine.png",
  },
  {
    id: "payments",
    tab: "Payments & POS",
    title: "Payments & POS",
    copy: "Collect payments through global gateways, run restaurant, spa and minibar POS, and issue tax-ready e-invoices posted to guest bills.",
    image: "/assets/tab-payments.png",
  },
  {
    id: "reports",
    tab: "Reports & AI Insights",
    title: "Reports & AI Insights",
    copy: "See occupancy, ADR and revenue at a glance, with AI insights for owners, managers and revenue teams.",
    image: "/assets/tab-reports.png",
  },
];

/** Tab screenshot — shows a placeholder box until the image file is added. */
function TabImage({ src, alt }: { src: string; alt: string }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="flex aspect-[1918/889] w-full flex-col items-center justify-center gap-3 rounded-[14px] border border-dashed border-line bg-bg-tint text-ink-muted">
        <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="3" y="3" width="18" height="18" rx="3" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <path d="M21 15l-5-5L5 21" />
        </svg>
        <span className="text-[14px] font-semibold text-ink">{alt}</span>
        <span className="text-[12px]">Add screenshot</span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={1918}
      height={889}
      unoptimized
      onError={() => setFailed(true)}
      className="h-auto w-full rounded-[14px]"
    />
  );
}

export function Automation() {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const i = refs.current.findIndex((el) => el === e.target);
            if (i >= 0) setActive(i);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );
    refs.current.forEach((el) => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section className="py-16 sm:py-24">
      <Container>
        <SectionHeading
          align="left"
          title="Run every workflow in one place"
          subtitle="From a single reservation to a multi-property group, InnCentral handles the whole operation — no more juggling separate tools."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[300px_1fr]">
          {/* pinned tab list (desktop) */}
          <div className="hidden lg:block">
            <div className="sticky top-28 flex flex-col gap-5">
              {blocks.map((b, i) => (
                <button
                  key={b.id}
                  type="button"
                  onClick={() => refs.current[i]?.scrollIntoView({ behavior: "smooth", block: "center" })}
                  className={`text-left text-[22px] font-bold transition-colors duration-300 ${
                    i === active ? "text-ink" : "text-line"
                  }`}
                >
                  {b.tab}
                </button>
              ))}
            </div>
          </div>

          {/* scrolling blocks */}
          <div className="flex flex-col gap-16 lg:gap-28">
            {blocks.map((b, i) => (
              <div
                key={b.id}
                ref={(el) => { refs.current[i] = el; }}
              >
                <h3 className="text-[22px] font-bold text-ink lg:hidden">{b.title}</h3>
                <p className="mt-2 max-w-md text-[15px] leading-relaxed text-ink-muted lg:mt-0">{b.copy}</p>
                <div className="relative mt-6">
                  <div
                    aria-hidden="true"
                    className="absolute -inset-4 -z-0 rounded-[32px] opacity-50 blur-2xl"
                    style={{ background: "radial-gradient(60% 60% at 50% 45%, rgba(0,123,255,0.5), rgba(0,71,179,0.22) 50%, transparent 75%)" }}
                  />
                  <div className="relative overflow-hidden rounded-[20px] border border-line bg-white p-2 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.3)]">
                    <TabImage src={b.image} alt={b.title} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

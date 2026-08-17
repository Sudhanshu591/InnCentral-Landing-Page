"use client";

import { useRef, useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { HotelImage } from "@/components/ui/HotelImage";

type Card = {
  image: string;
  imageLabel: string;
  title: string;
  copy: string;
};

// Each card shows a hotel photo. Drop the matching file at the `image` path
// (any of .jpg/.png/.webp — just keep the name) and it replaces the placeholder.
const cards: Card[] = [
  {
    image: "/assets/hotel/front-desk.png",
    imageLabel: "Hotel front desk / check-in",
    title: "Free, With No Limits",
    copy: "Run a real hotel on the free plan — no limits on rooms, users, reservations, branches or properties.",
  },
  {
    image: "/assets/hotel/lobby.png",
    imageLabel: "Hotel lobby",
    title: "One Unified Platform",
    copy: "PMS, front desk, housekeeping, booking engine, POS, payments and 100+ channels in one place.",
  },
  {
    image: "/assets/hotel/exterior.png",
    imageLabel: "Hotel exterior / group of properties",
    title: "Multi-Property Control",
    copy: "Switch properties, set branch-level access, and roll up group reporting from one owner dashboard.",
  },
  {
    image: "/assets/hotel/guest-room.png",
    imageLabel: "Guest room",
    title: "Real-Time Availability",
    copy: "Live room status and availability sync across every channel, so you never oversell a room again.",
  },
  {
    image: "/assets/hotel/reception-payment.png",
    imageLabel: "Guest paying at reception",
    title: "Built-In Payments",
    copy: "Collect deposits, refunds and full payments through global gateways, posted straight to guest bills.",
  },
  {
    image: "/assets/hotel/manager.png",
    imageLabel: "Hotel manager reviewing reports",
    title: "AI Revenue Insights",
    copy: "AI-powered occupancy, ADR and revenue insights for owners, managers and revenue teams.",
  },
  {
    image: "/assets/hotel/staff.png",
    imageLabel: "Hotel staff / team",
    title: "Live in a Day",
    copy: "Import your rooms, rates and channels and go live the same day — no long onboarding.",
  },
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
    <section className="pb-16 pt-10 sm:pb-24 sm:pt-14">
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
                <HotelImage
                  src={c.image}
                  alt={c.imageLabel}
                  label={c.imageLabel}
                  className="h-[180px] w-full rounded-2xl"
                  sizes="(max-width: 640px) 84vw, (max-width: 1024px) 47vw, 31vw"
                />
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

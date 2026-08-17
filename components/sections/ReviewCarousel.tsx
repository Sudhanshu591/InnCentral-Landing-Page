"use client";

import { useCallback, useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { HotelImage } from "@/components/ui/HotelImage";

type Result = { value: string; label: string };

type Slide = {
  image: string;
  quote: string;
  name: string;
  role: string;
  implemented: string[];
  results: Result[];
};

const slides: Slide[] = [
  {
    image: "/assets/reviews/2.png",
    quote:
      "We replaced three separate tools with InnCentral. Direct bookings are up and our front desk is finally calm during the check-in rush.",
    name: "Arjun Deshmukh",
    role: "Owner, IIM Nagpur Guest House",
    implemented: ["PMS & Front Desk", "Channel Manager", "Booking Engine"],
    results: [
      { value: "+32%", label: "Direct bookings within three months" },
      { value: "3 → 1", label: "Separate tools consolidated into one" },
    ],
  },
  {
    image: "/assets/reviews/3.png",
    quote:
      "Rolling InnCentral out across all our properties cost us nothing and took a weekend. The free plan genuinely has no catch.",
    name: "Marco Ferreira",
    role: "Director, Trilo Hospitality",
    implemented: ["Multi-property PMS", "Central Reservations", "Custom Integration"],
    results: [
      { value: "6", label: "Properties live in a single weekend" },
      { value: "$0", label: "Spent on setup or licensing" },
    ],
  },
  {
    image: "/assets/reviews/4.png",
    quote:
      "Channel sync that used to take our team hours every morning now happens on its own. Overbookings have basically disappeared.",
    name: "Daniel Carter",
    role: "Revenue Manager, Transworld Group",
    implemented: ["Channel Manager", "Rate Automation"],
    results: [
      { value: "Zero", label: "Overbookings since going live" },
      { value: "5 hrs", label: "Saved every week on manual updates" },
    ],
  },
];

const AUTOPLAY_MS = 6000;

export function ReviewCarousel() {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);

  const next = useCallback(() => setIndex((i) => (i + 1) % slides.length), []);
  const prev = useCallback(() => setIndex((i) => (i - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(next, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [next, reduce, index]);

  return (
    <div className="mt-12">
      {/* viewport */}
      <div className="overflow-hidden">
        <motion.div
          className="flex"
          animate={{ x: `-${index * 100}%` }}
          transition={reduce ? { duration: 0 } : { duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {slides.map((s, i) => (
            <div key={s.name} className="min-w-full">
              <div className="grid gap-6 lg:grid-cols-2">
                {/* portrait card */}
                <div className="relative h-full overflow-hidden rounded-[20px] border border-line p-3">
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 -z-0"
                    style={{ background: "radial-gradient(120% 120% at 50% 0%, rgba(0,123,255,0.22), transparent 60%)" }}
                  />
                  <HotelImage
                    src={s.image}
                    alt={`${s.name}, ${s.role} — InnCentral customer`}
                    label={`Photo of ${s.name}`}
                    priority={i === 0}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="relative h-full min-h-[340px] w-full rounded-[14px] bg-white"
                    imgClassName="object-contain"
                  />
                </div>

                {/* quote + business impact card */}
                <div className="flex h-full flex-col rounded-[20px] border border-line bg-white p-8 sm:p-10">
                  <span
                    aria-hidden="true"
                    className="font-anton text-[64px] leading-none text-accent"
                    style={{ fontFamily: "var(--font-anton)" }}
                  >
                    &ldquo;
                  </span>
                  <p className="-mt-4 text-[20px] font-medium leading-relaxed text-ink">{s.quote}</p>
                  <div className="mt-6">
                    <p className="text-[16px] font-semibold text-ink">{s.name}</p>
                    <p className="text-[14px] text-ink-muted">{s.role}</p>
                  </div>

                  <div className="my-7 h-px bg-line" />

                  {/* what they implemented */}
                  <p className="text-[12px] font-semibold uppercase tracking-wide text-ink-muted">What they implemented</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {s.implemented.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-line bg-bg-tint px-3 py-1 text-[13px] font-medium text-ink"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  {/* business impact */}
                  <div className="mt-6 grid grid-cols-2 gap-6">
                    {s.results.map((r) => (
                      <div key={r.label}>
                        <p className="text-[30px] font-bold leading-none text-accent">{r.value}</p>
                        <p className="mt-2 text-[13px] leading-snug text-ink-muted">{r.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* controls */}
      <div className="mt-8 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={prev}
          aria-label="Previous testimonial"
          className="grid size-10 place-items-center rounded-full border border-line text-ink-muted transition-colors hover:border-ink hover:text-ink"
        >
          <Arrow direction="left" />
        </button>

        <div className="flex items-center gap-1.5">
          {slides.map((s, i) => (
            <button
              key={s.name}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              aria-current={i === index}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === index ? "w-5 bg-accent" : "w-2 bg-line hover:bg-ink-muted"
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={next}
          aria-label="Next testimonial"
          className="grid size-10 place-items-center rounded-full border border-line text-ink-muted transition-colors hover:border-ink hover:text-ink"
        >
          <Arrow direction="right" />
        </button>
      </div>
    </div>
  );
}

function Arrow({ direction }: { direction: "left" | "right" }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d={direction === "left" ? "M10 3.5 5.5 8l4.5 4.5" : "M6 3.5 10.5 8 6 12.5"}
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

import { Container } from "@/components/ui/Container";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";

type Item = { title: string; copy: string; icon: React.ReactNode };

const I = (d: string) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#007bff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    {/* eslint-disable-next-line react/no-danger */}
    <path d={d} />
  </svg>
);

const items: Item[] = [
  { title: "PMS & Front Desk", copy: "Reservations, check-in/out, room moves, guest profiles, bills and live availability.", icon: I("M4 4h16v16H4zM4 9h16M8 4v5") },
  { title: "Housekeeping & Maintenance", copy: "Live room-status board, cleaning tasks, maintenance tickets and mobile staff workflows.", icon: I("M3 21h18M6 21V8l6-4 6 4v13M10 21v-6h4v6") },
  { title: "Booking Engine", copy: "Direct website bookings with live availability and payment collection at checkout.", icon: I("M3 5h18v14H3zM3 9h18M8 2v4M16 2v4") },
  { title: "Channel Manager", copy: "100+ channels and OTA sync with real-time rate and inventory updates to prevent overbooking.", icon: I("M12 3v18M3 12h18M6 6l12 12M18 6L6 18") },
  { title: "POS & e-Invoicing", copy: "Restaurant, minibar, spa and add-ons posted to guest bills with tax-ready invoices.", icon: I("M6 2h12l1 20-7-3-7 3zM9 7h6M9 11h6") },
  { title: "Payments, API & Integrations", copy: "UAE, USA and global gateways, Zapier, webhooks and accounting, CRM and ERP connections.", icon: I("M2 7h20v10H2zM2 11h20M6 15h4") },
];

export function Insights() {
  return (
    <section className="relative overflow-hidden bg-dark py-20 sm:py-28">
      <div className="grid-bg-dark" />
      <Container className="relative">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <h2 className="text-[clamp(1.9rem,3.6vw,2.75rem)] font-bold tracking-[-0.01em] text-dark-ink">
              One platform to run your entire hotel
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-4 text-[16px] leading-relaxed text-dark-ink/70">
              Every part of your operation — from the front desk to housekeeping, distribution and payments — connected in a single system.
            </p>
          </Reveal>
        </div>

        <RevealGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <RevealItem key={it.title}>
              <div className="group relative flex h-full flex-col items-start overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-[0_8px_30px_rgba(0,0,0,0.18)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.07] sm:p-7">
                {/* top sheen */}
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />
                {/* hover glow */}
                <div className="pointer-events-none absolute -inset-px rounded-2xl bg-[radial-gradient(400px_circle_at_top,rgba(0,123,255,0.12),transparent_60%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative grid size-12 place-items-center rounded-xl border border-white/15 bg-white/10 shadow-inner shadow-white/5 transition-colors duration-300 group-hover:border-[#007bff]/40 group-hover:bg-[#007bff]/10">
                  {it.icon}
                </div>
                <h3 className="relative mt-5 text-[19px] font-bold text-dark-ink">{it.title}</h3>
                <p className="relative mt-2 text-[15px] leading-relaxed text-dark-ink/65">{it.copy}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}

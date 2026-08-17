import { Landmark, CreditCard, UtensilsCrossed, Receipt, RotateCcw } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { RevealGroup, RevealItem } from "@/components/motion/Reveal";

type Card = { title: string; copy: string; icon: React.ReactNode; wide?: boolean };

const cards: Card[] = [
  { title: "UAE Gateways", copy: "Collect payments through leading UAE payment gateways, built for regional compliance.", icon: <Landmark className="size-5" />, wide: true },
  { title: "USA Gateways", copy: "Charge cards through major US processors with secure, PCI-ready checkout.", icon: <CreditCard className="size-5" />, wide: true },
  { title: "Hotel POS", copy: "Run restaurant, spa and minibar POS with charges posted straight to guest bills.", icon: <UtensilsCrossed className="size-5" /> },
  { title: "e-Invoicing", copy: "Issue tax-ready invoices automatically, formatted for local requirements.", icon: <Receipt className="size-5" /> },
  { title: "Deposits & Refunds", copy: "Take deposits at booking and process refunds without leaving the platform.", icon: <RotateCcw className="size-5" /> },
];

export function Payments() {
  return (
    <section className="relative overflow-hidden bg-dark py-20 sm:py-28">
      <div className="grid-bg-dark" />
      {/* soft accent wash behind the grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 -z-0 h-[420px] w-[820px] max-w-[92vw] -translate-x-1/2 rounded-full opacity-60 blur-[120px]"
        style={{ background: "radial-gradient(50% 50% at 50% 50%, rgba(0,123,255,0.22), transparent 70%)" }}
      />

      <Container className="relative">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-[12.5px] font-semibold uppercase tracking-[0.14em] text-dark-ink/70">
            Payments &amp; POS
          </span>
          <h2 className="mt-5 text-[clamp(1.9rem,3.6vw,2.75rem)] font-bold tracking-[-0.01em] text-dark-ink">
            Money in motion, handled end to end
          </h2>
          <p className="mt-4 text-[16px] leading-relaxed text-dark-ink/70">
            From the first deposit to the final invoice — collect, reconcile and refund across regions, all inside InnCentral.
          </p>
        </div>

        <RevealGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
          {cards.map((c) => (
            <RevealItem key={c.title} className={c.wide ? "lg:col-span-3" : "lg:col-span-2"}>
              <div className="group relative h-full overflow-hidden rounded-[20px] border border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.02] p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/40">
                {/* hover glow */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-14 -top-14 size-40 rounded-full bg-accent/25 opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-100"
                />
                <div className={c.wide ? "relative flex items-start gap-4" : "relative"}>
                  <div className="grid size-12 shrink-0 place-items-center rounded-xl bg-accent/10 text-accent ring-1 ring-inset ring-accent/20 transition-colors duration-300 group-hover:bg-accent/20">
                    {c.icon}
                  </div>
                  <div className={c.wide ? "" : "mt-4"}>
                    <h3 className="text-[17px] font-bold text-dark-ink">{c.title}</h3>
                    <p className="mt-2 text-[14px] leading-relaxed text-dark-ink/65">{c.copy}</p>
                  </div>
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}

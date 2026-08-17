import { Check, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";

type Row = { label: string; inncentral: boolean; traditional: boolean };

const rows: Row[] = [
  { label: "Free plan you can run a real hotel on", inncentral: true, traditional: false },
  { label: "No room, user or property limits", inncentral: true, traditional: false },
  { label: "PMS, POS, channels & payments in one platform", inncentral: true, traditional: false },
  { label: "100+ channel & OTA sync included", inncentral: true, traditional: false },
  { label: "Built-in booking engine (commission-free)", inncentral: true, traditional: false },
  { label: "AI revenue & occupancy insights", inncentral: true, traditional: false },
  { label: "Multi-property control from one dashboard", inncentral: true, traditional: false },
  { label: "Open API & 100+ ready integrations", inncentral: true, traditional: false },
  { label: "Self-hosting & compliance support", inncentral: true, traditional: false },
  { label: "Go live in a day, no long onboarding", inncentral: true, traditional: false },
];

function Cell({ ok }: { ok: boolean }) {
  return (
    <span
      className={`grid size-7 place-items-center rounded-full ${
        ok ? "bg-accent/12 text-accent" : "bg-line/60 text-ink-muted"
      }`}
    >
      {ok ? <Check className="size-4" strokeWidth={2.5} /> : <X className="size-4" strokeWidth={2.5} />}
    </span>
  );
}

export function Comparison() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <SectionHeading
          title="Why hotels switch to InnCentral"
          subtitle="Everything a traditional PMS charges extra for — channels, POS, payments and AI — is included, free to start."
        />

        <Reveal className="mt-12">
          <div className="overflow-x-auto">
            <div className="mx-auto min-w-[560px] max-w-[880px] overflow-hidden rounded-[20px] border border-line">
              {/* header */}
              <div className="grid grid-cols-[1fr_140px_140px] bg-bg-tint">
                <div className="px-6 py-4 text-[14px] font-semibold text-ink">Capability</div>
                <div className="px-4 py-4 text-center text-[14px] font-bold text-accent">InnCentral</div>
                <div className="px-4 py-4 text-center text-[14px] font-semibold text-ink-muted">Traditional PMS</div>
              </div>

              {/* rows */}
              {rows.map((r, i) => (
                <div
                  key={r.label}
                  className={`grid grid-cols-[1fr_140px_140px] items-center ${
                    i % 2 === 1 ? "bg-bg-tint/40" : "bg-white"
                  }`}
                >
                  <div className="px-6 py-4 text-[15px] text-ink">{r.label}</div>
                  <div className="flex justify-center px-4 py-4">
                    <Cell ok={r.inncentral} />
                  </div>
                  <div className="flex justify-center px-4 py-4">
                    <Cell ok={r.traditional} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { PrimaryButton } from "@/components/ui/Button";
import { BorderBeam } from "@/components/shadcn/border-beam";

type Plan = {
  name: string;
  who: string;
  price: string;
  priceSuffix?: string;
  cta: { label: string; href: string };
  popular: boolean;
  dark: boolean;
  features: string[];
};

const plans: Plan[] = [
  {
    name: "Free",
    who: "Everything you need to run a real hotel — with no limits.",
    price: "$0",
    priceSuffix: "/forever",
    cta: { label: "Start Free", href: "/pricing" },
    popular: true,
    dark: false,
    features: [
      "No room, user or reservation limits",
      "No branch or property limits",
      "PMS, front desk, housekeeping & POS",
      "Booking engine + 100+ channels",
      "Payments, e-invoicing & API access",
      "100+ ready integrations",
    ],
  },
  {
    name: "Enterprise",
    who: "For hotel groups that need control, scale and compliance.",
    price: "Custom",
    cta: { label: "Book Enterprise Demo", href: "/book-a-demo" },
    popular: false,
    dark: true,
    features: [
      "Self-hosting & private deployment",
      "RBAC, audit logs & compliance support",
      "Custom integrations",
      "Migration support",
      "SLA-backed assistance",
      "Everything in Free",
    ],
  },
];

function Check({ dark }: { dark: boolean }) {
  return (
    <span className={`grid size-5 shrink-0 place-items-center rounded-full ${dark ? "bg-white/15" : "bg-accent/12"}`}>
      <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
        <path d="M2.5 6.5l2.2 2.2 4.8-5" stroke="#007bff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

export function Pricing() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <SectionHeading
          title="Start free, upgrade only if you need to"
          subtitle="Run your whole hotel on the free plan. Add Enterprise when you need self-hosting, compliance and SLA-backed support."
        />

        <p className="mt-4 text-center text-[14px] text-ink-muted">No credit card required · Cancel anytime</p>

        <div className="mx-auto mt-12 grid max-w-[880px] gap-6 md:grid-cols-2">
          {plans.map((p) => (
            <Reveal key={p.name} delay={p.dark ? 0.1 : 0}>
              <div className={`relative flex h-full flex-col overflow-hidden rounded-[20px] border p-7 sm:p-8 ${p.dark ? "border-transparent bg-dark text-dark-ink" : "border-line bg-white"}`}>
                {p.popular && (
                  <>
                    <span className="absolute right-6 top-7 z-10 rounded-full bg-accent px-3 py-1 text-[12px] font-semibold text-white">Most Popular</span>
                    <BorderBeam size={130} duration={7} colorFrom="#007bff" colorTo="#0047b3" />
                  </>
                )}
                <h3 className={`text-[20px] font-bold ${p.dark ? "text-dark-ink" : "text-ink"}`}>{p.name}</h3>
                <p className={`mt-2 text-[14px] leading-relaxed ${p.dark ? "text-dark-ink/60" : "text-ink-muted"}`}>{p.who}</p>
                <div className="mt-6 flex items-end gap-1">
                  <span className={`text-[44px] font-bold leading-none ${p.dark ? "text-dark-ink" : "text-ink"}`}>{p.price}</span>
                  {p.priceSuffix && <span className={`pb-1 text-[15px] ${p.dark ? "text-dark-ink/60" : "text-ink-muted"}`}>{p.priceSuffix}</span>}
                </div>

                <p className={`mt-7 text-[13px] font-semibold ${p.dark ? "text-dark-ink/80" : "text-ink"}`}>What&apos;s included:</p>
                <ul className="mt-4 flex flex-col gap-3.5">
                  {p.features.map((f) => (
                    <li key={f} className={`flex items-center gap-3 text-[15px] ${p.dark ? "text-dark-ink/85" : "text-ink"}`}>
                      <Check dark={p.dark} />
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex-1" />
                <div className="pt-2">
                  <PrimaryButton href={p.cta.href} variant={p.dark ? "white" : "dark"} className="w-full justify-center">
                    {p.cta.label}
                  </PrimaryButton>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

import { Container } from "@/components/ui/Container";
import { PrimaryButton } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { site } from "@/lib/site";

export function CTA({
  heading = "Run your hotel on an enterprise-grade platform, free to start",
  copy = "PMS, front desk, housekeeping, 100+ channels, POS and payments — in one place, with no room, user or property limits. No credit card required.",
}: {
  heading?: string;
  copy?: string;
}) {
  return (
    <section className="relative overflow-hidden py-24 sm:py-28">
      <div className="grid-bg" />
      <Container className="relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold tracking-[-0.01em] text-ink">{heading}</h2>
          <p className="mx-auto mt-5 max-w-lg text-[16px] leading-relaxed text-ink-muted">{copy}</p>
          <div className="mt-8 flex justify-center">
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute -inset-6 -z-10 rounded-full opacity-70 blur-2xl"
                style={{ background: "radial-gradient(60% 60% at 50% 45%, rgba(0,123,255,0.5), rgba(0,71,179,0.22) 50%, transparent 75%)" }}
              />
              <PrimaryButton href={site.ctaPrimary.href}>{site.ctaPrimary.label}</PrimaryButton>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

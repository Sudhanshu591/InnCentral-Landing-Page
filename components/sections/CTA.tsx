import Image from "next/image";
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
      {/* Hotel rooftop-pool photo, faded behind the content.
          Drop your image at public/assets/cta-bg.jpg (keep the name). */}
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <Image
          src="/assets/cta-bg.jpg"
          alt=""
          fill
          sizes="100vw"
          unoptimized
          className="object-cover"
        />
        {/* light veil — keeps the photo visible */}
        <div className="absolute inset-0 bg-white/30" />
        {/* localized white glow behind the text so the copy stays readable */}
        <div
          className="absolute inset-0"
          style={{ background: "radial-gradient(58% 62% at 50% 50%, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.55) 42%, rgba(255,255,255,0) 78%)" }}
        />
        {/* soft fade to the page at top & bottom edges */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-transparent to-white/70" />
      </div>
      <Container className="relative">
        <Reveal className="mx-auto max-w-2xl text-center [text-shadow:0_1px_10px_rgba(255,255,255,0.85)]">
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold tracking-[-0.01em] text-ink">{heading}</h2>
          <p className="mx-auto mt-5 max-w-lg text-[16px] font-medium leading-relaxed text-ink/80">{copy}</p>
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

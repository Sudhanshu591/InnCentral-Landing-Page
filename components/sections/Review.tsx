import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { Counter } from "@/components/motion/Counter";

export function Review() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <SectionHeading
          title="Trusted by hospitality teams worldwide"
          subtitle="Hotels choose InnCentral because it replaces a stack of separate tools with one platform — and the no-limits free plan makes it easy to roll out across every property."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {/* portrait card */}
          <Reveal>
            <div className="relative h-full overflow-hidden rounded-[20px] border border-line p-3">
              <div aria-hidden="true" className="absolute inset-0 -z-0" style={{ background: "radial-gradient(120% 120% at 50% 0%, rgba(0,123,255,0.22), transparent 60%)" }} />
              <div className="relative overflow-hidden rounded-[14px]">
                <Image
                  src="/assets/BioL3i7ZdPtdjvk7pWW9hf35WeQ.png"
                  alt="A happy InnCentral customer"
                  width={800}
                  height={720}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </Reveal>

          {/* quote + stats */}
          <Reveal delay={0.1}>
            <div className="flex h-full flex-col rounded-[20px] border border-line bg-white p-8 sm:p-10">
              <span aria-hidden="true" className="font-anton text-[64px] leading-none text-accent" style={{ fontFamily: "var(--font-anton)" }}>
                &ldquo;
              </span>
              <p className="-mt-4 text-[20px] font-medium leading-relaxed text-ink">
                We replaced three separate tools with InnCentral. Direct bookings are up and our front desk is finally calm during the check-in rush.
              </p>
              <div className="mt-6">
                <p className="text-[16px] font-semibold text-ink">Ashish Jaiswal</p>
                <p className="text-[14px] text-ink-muted">Owner, Hotel Mayuri</p>
              </div>

              <div className="my-7 h-px bg-line" />

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-[36px] font-bold text-accent">
                    <Counter to={100} suffix="+" />
                  </p>
                  <p className="mt-1 text-[13px] leading-snug text-ink-muted">Booking channels connected in one sync</p>
                </div>
                <div>
                  <p className="text-[36px] font-bold text-accent">
                    <Counter to={50} suffix="+" />
                  </p>
                  <p className="mt-1 text-[13px] leading-snug text-ink-muted">Countries running hotels on InnCentral</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

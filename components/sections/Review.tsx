import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { ReviewCarousel } from "./ReviewCarousel";

export function Review() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <SectionHeading
          title="Trusted by hospitality teams worldwide"
          subtitle="Hotels choose InnCentral because it replaces a stack of separate tools with one platform — and the no-limits free plan makes it easy to roll out across every property."
        />

        <Reveal>
          <ReviewCarousel />
        </Reveal>
      </Container>
    </section>
  );
}

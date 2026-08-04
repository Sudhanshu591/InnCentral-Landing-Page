import { Container } from "./Container";
import { Reveal } from "@/components/motion/Reveal";

export function PageHeader({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-line pb-14 pt-16 sm:pb-20 sm:pt-24">
      <div className="grid-bg" />
      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-3 py-1 text-[13px] font-medium text-ink-muted">
              <span aria-hidden="true" className="size-1.5 rounded-full bg-accent" />
              {eyebrow}
            </span>
          </Reveal>
          <Reveal delay={0.06}>
            <h1 className="mt-5 text-[clamp(2.25rem,5vw,3.5rem)] font-bold tracking-[-0.02em]">{title}</h1>
          </Reveal>
          {copy && (
            <Reveal delay={0.12}>
              <p className="mx-auto mt-5 max-w-xl text-[17px] leading-relaxed text-ink-muted">{copy}</p>
            </Reveal>
          )}
        </div>
      </Container>
    </section>
  );
}

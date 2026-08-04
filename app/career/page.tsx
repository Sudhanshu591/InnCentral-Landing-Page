import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { CTA } from "@/components/sections/CTA";
import { RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { getCareers } from "@/lib/cms";

export const metadata = {
  title: "Careers",
  description: "Join InnCentral and help build the free enterprise hotel operating platform. See open roles across engineering, design and more.",
  alternates: { canonical: "/career" },
};

export default function CareerIndex() {
  const roles = getCareers();
  return (
    <>
      <PageHeader
        eyebrow="Careers"
        title="Come build the thing"
        copy="Small team, real ownership, and customers who tell us exactly what they need."
      />
      <section className="py-16 sm:py-20">
        <Container>
          <RevealGroup className="mx-auto flex max-w-3xl flex-col gap-4">
            {roles.map((r) => (
              <RevealItem key={r.slug}>
                <Link
                  href={`/career/${r.slug}`}
                  className="group flex flex-col gap-4 rounded-[20px] border border-line bg-white p-6 transition-transform duration-200 hover:-translate-y-0.5 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div>
                    <h3 className="text-[19px] font-bold text-ink">{r.title}</h3>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {[r.jobType, r.jobTime, r.salary].filter(Boolean).map((t) => (
                        <span key={t} className="rounded-full bg-bg-tint px-3 py-1 text-[12px] font-medium text-ink-muted">{t}</span>
                      ))}
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-2 text-[14px] font-semibold text-ink">
                    View role
                    <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
                  </span>
                </Link>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>
      <CTA heading="Don't see your role?" copy="Send us a note anyway — we hire for people, not just openings." />
    </>
  );
}

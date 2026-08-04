import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { CTA } from "@/components/sections/CTA";
import { RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { getCaseStudies } from "@/lib/cms";

export const metadata = {
  title: "Case Studies",
  description: "Real results from hotels running on InnCentral — see how properties replaced their tool stack with one platform.",
  alternates: { canonical: "/case-study" },
};

export default function CaseStudyIndex() {
  const studies = getCaseStudies();
  return (
    <>
      <PageHeader
        eyebrow="Case studies"
        title="Hotels running better on InnCentral"
        copy="Real results from properties that replaced their tool stack with one platform."
      />
      <section className="py-16 sm:py-20">
        <Container>
          <RevealGroup className="grid gap-8 sm:grid-cols-2">
            {studies.map((c) => (
              <RevealItem key={c.slug}>
                <Link href={`/case-study/${c.slug}`} className="group block h-full overflow-hidden rounded-[20px] border border-line bg-white transition-transform duration-200 hover:-translate-y-1">
                  {c.image && (
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image src={c.image} alt="" fill className="object-cover transition-transform duration-300 group-hover:scale-[1.03]" />
                    </div>
                  )}
                  <div className="flex items-center gap-4 p-6">
                    {c.logo && (
                      <div className="relative size-11 shrink-0 overflow-hidden rounded-xl border border-line">
                        <Image src={c.logo} alt="" fill className="object-cover" />
                      </div>
                    )}
                    <div>
                      <h3 className="text-[18px] font-bold text-ink">{c.title}</h3>
                      <p className="mt-1 line-clamp-1 text-[14px] text-ink-muted">{c.subtitle}</p>
                    </div>
                  </div>
                </Link>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>
      <CTA />
    </>
  );
}

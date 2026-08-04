import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { CTA } from "@/components/sections/CTA";
import { Reveal } from "@/components/motion/Reveal";
import { getCaseStudies, getCaseStudy } from "@/lib/cms";

export function generateStaticParams() {
  return getCaseStudies().map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return { title: "Case study" };
  return {
    title: study.title,
    description: study.subtitle || `How ${study.title} runs on InnCentral.`,
    alternates: { canonical: `/case-study/${study.slug}` },
    openGraph: {
      type: "article",
      title: study.title,
      description: study.subtitle,
      url: `/case-study/${study.slug}`,
      images: study.image ? [{ url: study.image }] : undefined,
    },
  };
}

export default async function CaseStudyDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  return (
    <>
      <article className="pb-8 pt-14 sm:pt-20">
        <Container>
          <div className="mx-auto max-w-3xl">
            <Link href="/case-study" className="text-[14px] font-medium text-ink-muted hover:text-ink">← All case studies</Link>
            <Reveal>
              <div className="mt-6 flex items-center gap-4">
                {study.logo && (
                  <div className="relative size-12 shrink-0 overflow-hidden rounded-xl border border-line">
                    <Image src={study.logo} alt="" fill className="object-cover" />
                  </div>
                )}
                <h1 className="text-[clamp(1.9rem,4vw,3rem)] font-bold tracking-[-0.02em]">{study.title}</h1>
              </div>
              {study.subtitle && <p className="mt-4 text-[18px] leading-relaxed text-ink-muted">{study.subtitle}</p>}
            </Reveal>
          </div>

          {study.image && (
            <Reveal delay={0.1}>
              <div className="relative mx-auto mt-10 aspect-[16/9] max-w-4xl overflow-hidden rounded-[20px] border border-line">
                <Image src={study.image} alt="" fill priority className="object-cover" />
              </div>
            </Reveal>
          )}

          <div className="mx-auto mt-12 max-w-3xl">
            <div className="prose" dangerouslySetInnerHTML={{ __html: study.content }} />
          </div>
        </Container>
      </article>
      <CTA />
    </>
  );
}

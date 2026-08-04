import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { CTA } from "@/components/sections/CTA";
import { Reveal } from "@/components/motion/Reveal";
import { PrimaryButton } from "@/components/ui/Button";
import { getCareers, getCareer } from "@/lib/cms";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return getCareers().map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const role = getCareer(slug);
  if (!role) return { title: "Open role" };
  return {
    title: `${role.title} — Careers`,
    description: `${role.title} at ${site.name}. ${role.jobType}, ${role.jobTime}. Join the team building free enterprise hotel software.`,
    alternates: { canonical: `/career/${role.slug}` },
  };
}

export default async function CareerDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const role = getCareer(slug);
  if (!role) notFound();

  const jobJsonLd = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: role.title,
    description: role.content,
    employmentType: role.jobType,
    hiringOrganization: { "@type": "Organization", name: site.name, sameAs: site.url, logo: `${site.url}/icon.svg` },
    directApply: true,
    ...(role.salary
      ? { baseSalary: { "@type": "MonetaryAmount", currency: "USD", value: { "@type": "QuantitativeValue", value: role.salary, unitText: "YEAR" } } }
      : {}),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jobJsonLd) }} />
      <article className="pb-8 pt-14 sm:pt-20">
        <Container>
          <div className="mx-auto max-w-3xl">
            <Link href="/career" className="text-[14px] font-medium text-ink-muted hover:text-ink">← All roles</Link>
            <Reveal>
              <span className="mt-6 inline-flex items-center gap-2 rounded-full border border-line bg-white px-3 py-1 text-[13px] font-medium text-ink-muted">
                <span aria-hidden="true" className="size-1.5 rounded-full bg-accent" /> Open role
              </span>
              <h1 className="mt-4 text-[clamp(2rem,4.5vw,3.25rem)] font-bold tracking-[-0.02em]">{role.title}</h1>
              <div className="mt-5 flex flex-wrap gap-2">
                {[role.jobType, role.jobTime, role.salary].filter(Boolean).map((t) => (
                  <span key={t} className="rounded-full bg-bg-tint px-3 py-1 text-[13px] font-medium text-ink-muted">{t}</span>
                ))}
              </div>
            </Reveal>

            <div className="prose mt-10" dangerouslySetInnerHTML={{ __html: role.content }} />

            <div className="mt-10">
              <PrimaryButton href="/contact">Apply for this role</PrimaryButton>
            </div>
          </div>
        </Container>
      </article>
      <CTA />
    </>
  );
}

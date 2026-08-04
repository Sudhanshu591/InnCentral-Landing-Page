import { PageHeader } from "@/components/ui/PageHeader";
import { CTA } from "@/components/sections/CTA";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { IntegrationsBeams } from "@/components/sections/IntegrationsBeams";

export const metadata = {
  title: "Integrations",
  description: "Connect InnCentral to 100+ OTA channels, payment gateways, accounting, CRM and ERP tools — API-first with REST, webhooks and Zapier.",
  alternates: { canonical: "/integration" },
};

export default function IntegrationPage() {
  return (
    <>
      <PageHeader
        eyebrow="Integrations"
        title="API-first, with 100+ integrations"
        copy="Connect 100+ OTA and partner channels, payment gateways, accounting, CRM and ERP tools — plus REST APIs, webhooks and Zapier for everything else."
      />
      <section className="py-16 sm:py-24">
        <Container>
          <Reveal>
            <div className="relative mx-auto max-w-4xl overflow-hidden rounded-[28px] border border-line bg-bg-tint/50 px-4 py-10 sm:py-14">
              <p className="mb-2 text-center text-[13px] font-semibold uppercase tracking-wide text-accent">
                One hub, everything connected
              </p>
              <p className="mx-auto mb-6 max-w-md text-center text-[15px] text-ink-muted">
                Channels, payments and back-office tools all sync through InnCentral in real time.
              </p>
              <IntegrationsBeams />
            </div>
          </Reveal>
        </Container>
      </section>
      <CTA />
    </>
  );
}

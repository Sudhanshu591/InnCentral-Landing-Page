import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { IntegrationsBeams } from "./IntegrationsBeams";

type Category = { title: string; tools: string };

const categories: Category[] = [
  { title: "Automation", tools: "Zapier, Make, webhooks" },
  { title: "Payments", tools: "Stripe, regional & global gateways" },
  { title: "Accounting", tools: "QuickBooks, Xero, Tally, Zoho Books" },
  { title: "CRM", tools: "HubSpot, Zoho, Salesforce" },
  { title: "ERP", tools: "Odoo & custom systems" },
  { title: "Communication", tools: "WhatsApp, SMS, email" },
  { title: "Analytics", tools: "Power BI, Looker Studio" },
  { title: "Developer API", tools: "REST API, webhooks & tokens" },
];

export function Integrations() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <SectionHeading
          title="API-first, connected to your whole stack"
          subtitle="InnCentral plugs into the tools you already run — payments, accounting, CRM, ERP and automation — with an open API and 100+ ready integrations."
        />

        <Reveal className="mt-10">
          <div className="rounded-[28px] border border-line bg-white py-6">
            <IntegrationsBeams />
          </div>
        </Reveal>

        <RevealGroup className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((c) => (
            <RevealItem key={c.title}>
              <div className="h-full rounded-2xl border border-line bg-white p-5 transition-transform duration-200 hover:-translate-y-1">
                <h3 className="text-[16px] font-bold text-ink">{c.title}</h3>
                <p className="mt-1.5 text-[14px] leading-relaxed text-ink-muted">{c.tools}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}

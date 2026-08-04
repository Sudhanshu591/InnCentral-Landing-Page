import { PageHeader } from "@/components/ui/PageHeader";
import { Pricing } from "@/components/sections/Pricing";
import { Faq } from "@/components/sections/Faq";
import { CTA } from "@/components/sections/CTA";

export const metadata = {
  title: "Pricing",
  description: "InnCentral pricing — a free plan with no room, user or property limits, plus Enterprise with self-hosting, RBAC and compliance support.",
  alternates: { canonical: "/pricing" },
};

export default function PricingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Pricing"
        title="Free to start. No limits."
        copy="Run your whole hotel on the free plan — no room, user, reservation or property limits. Add Enterprise when you need self-hosting and compliance."
      />
      <Pricing />
      <Faq />
      <CTA />
    </>
  );
}

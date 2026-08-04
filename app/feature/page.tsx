import { PageHeader } from "@/components/ui/PageHeader";
import { WhyChoose } from "@/components/sections/WhyChoose";
import { Insights } from "@/components/sections/Insights";
import { CTA } from "@/components/sections/CTA";

export const metadata = {
  title: "Features",
  description: "Explore the InnCentral platform: PMS, front desk, housekeeping, booking engine, 100+ channels, POS, payments and e-invoicing — free to start.",
  alternates: { canonical: "/feature" },
};

export default function FeaturePage() {
  return (
    <>
      <PageHeader
        eyebrow="Platform"
        title="One platform to run your entire hotel"
        copy="PMS, front desk, housekeeping, booking engine, 100+ channels, POS, payments and e-invoicing — unified in a single system, free to start."
      />
      <WhyChoose />
      <Insights />
      <CTA />
    </>
  );
}

import { PageHeader } from "@/components/ui/PageHeader";
import { CTA } from "@/components/sections/CTA";

export const metadata = {
  title: "Terms & Conditions",
  description: "The terms and conditions for using InnCentral, the free hotel operating platform.",
  alternates: { canonical: "/terms-and-conditions" },
};

export default function TermsConditionsPage() {
  return (
    <>
      <PageHeader eyebrow="Legal" title="Terms & Conditions" copy="The rules for using InnCentral. Plain language, no surprises." />
      <CTA />
    </>
  );
}

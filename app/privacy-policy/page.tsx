import { PageHeader } from "@/components/ui/PageHeader";
import { CTA } from "@/components/sections/CTA";

export const metadata = {
  title: "Privacy Policy",
  description: "InnCentral privacy policy — what we collect, why, and how to request deletion of your data.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHeader eyebrow="Legal" title="Privacy Policy" copy="What we collect, why, and how to get it deleted." />
      <CTA />
    </>
  );
}

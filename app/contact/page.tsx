import { PageHeader } from "@/components/ui/PageHeader";
import { CTA } from "@/components/sections/CTA";

export const metadata = {
  title: "Contact",
  description: "Contact the InnCentral team about pricing, security, migrations, or whether the platform fits your hotel.",
  alternates: { canonical: "/contact" },
};

export default function TalktoahumanPage() {
  return (
    <>
      <PageHeader eyebrow="Contact" title="Talk to a human" copy="Questions about pricing, security, or fit? We’ll get back within a business day." />
      <CTA />
    </>
  );
}

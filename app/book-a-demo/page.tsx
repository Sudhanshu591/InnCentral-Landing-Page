import { PageHeader } from "@/components/ui/PageHeader";
import { CTA } from "@/components/sections/CTA";

export const metadata = {
  title: "Book a Demo",
  description: "Book a live InnCentral demo — see PMS, channels, POS and payments run on your own property, plus self-hosting for hotel groups.",
  alternates: { canonical: "/book-a-demo" },
};

export default function BookDemoPage() {
  return (
    <>
      <PageHeader
        eyebrow="Book a Demo"
        title="See InnCentral run your property"
        copy="Twenty minutes, no slides. Bring your rooms, rates and channels and we'll show you the whole operation in one platform — including self-hosting and compliance for groups."
      />
      <CTA heading="Prefer to just try it?" copy="Start free with no room, user or property limits — no credit card required." />
    </>
  );
}

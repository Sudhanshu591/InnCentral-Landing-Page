import { PageHeader } from "@/components/ui/PageHeader";
import { CTA } from "@/components/sections/CTA";

export const metadata = {
  title: "Changelog",
  description: "Product updates and new features shipped to InnCentral, the free enterprise hotel operating platform.",
  alternates: { canonical: "/changelog" },
};

export default function WhatweshippedandwhenPage() {
  return (
    <>
      <PageHeader eyebrow="Changelog" title="What we shipped, and when" copy="Every release, big and small. We ship weekly." />
      <CTA />
    </>
  );
}

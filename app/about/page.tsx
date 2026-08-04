import { PageHeader } from "@/components/ui/PageHeader";
import { Brand } from "@/components/sections/Brand";
import { Review } from "@/components/sections/Review";
import { CTA } from "@/components/sections/CTA";

export const metadata = {
  title: "About",
  description: "InnCentral is on a mission to make enterprise hotel software free — PMS, channels, POS and payments in one platform for hotels of every size.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="Company"
        title="Hotel software that shouldn't cost a fortune"
        copy="InnCentral started because running a hotel shouldn't take five disconnected tools and a per-room bill. We built one enterprise platform that's free to start."
      />
      <Brand />
      <Review />
      <CTA />
    </>
  );
}

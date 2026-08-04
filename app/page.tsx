import { Hero } from "@/components/sections/Hero";
import { Brand } from "@/components/sections/Brand";
import { WhyChoose } from "@/components/sections/WhyChoose";
import { Automation } from "@/components/sections/Automation";
import { Insights } from "@/components/sections/Insights";
import { ROI } from "@/components/sections/ROI";
import { Review } from "@/components/sections/Review";
import { Pricing } from "@/components/sections/Pricing";
import { Faq } from "@/components/sections/Faq";
import { CTA } from "@/components/sections/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Brand />
      <WhyChoose />
      <Automation />
      <Insights />
      <ROI />
      <Review />
      <Pricing />
      <Faq />
      <CTA />
    </>
  );
}

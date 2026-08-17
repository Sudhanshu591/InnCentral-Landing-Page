import { Hero } from "@/components/sections/Hero";
import { Brand } from "@/components/sections/Brand";
import { WhyChoose } from "@/components/sections/WhyChoose";
import { Automation } from "@/components/sections/Automation";
import { Insights } from "@/components/sections/Insights";
import { Channels } from "@/components/sections/Channels";
import { Payments } from "@/components/sections/Payments";
import { PropertyTypes } from "@/components/sections/PropertyTypes";
import { Multilingual } from "@/components/sections/Multilingual";
import { Comparison } from "@/components/sections/Comparison";
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
      <Channels />
      <Payments />
      <PropertyTypes />
      <Multilingual />
      <Comparison />
      <Review />
      <Pricing />
      <Faq />
      <CTA />
    </>
  );
}

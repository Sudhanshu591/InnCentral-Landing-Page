import { Container } from "@/components/ui/Container";
import { PrimaryButton, SecondaryButton } from "@/components/ui/Button";

export const metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <section className="relative overflow-hidden py-32 sm:py-40">
      <div className="grid-bg" />
      <Container className="relative">
        <div className="mx-auto max-w-xl text-center">
          <p className="text-[15px] font-semibold uppercase tracking-wide text-accent">404</p>
          <h1 className="mt-4 text-[clamp(2.25rem,5vw,3.5rem)] font-bold tracking-[-0.02em]">This page went missing.</h1>
          <p className="mx-auto mt-5 max-w-md text-ink-muted">The link is broken or the page has moved. Let&apos;s get you back to something useful.</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <PrimaryButton href="/">Back to home</PrimaryButton>
            <SecondaryButton href="/contact">Contact support</SecondaryButton>
          </div>
        </div>
      </Container>
    </section>
  );
}

"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";

const faqs = [
  {
    q: "Is InnCentral really free?",
    a: "Yes. InnCentral has a free starting plan you can run a real hotel on. Enterprise plans are optional and add self-hosting, compliance and SLA support when you need them.",
  },
  {
    q: "Are there room, user, reservation, or branch limits?",
    a: "No. The free plan has no per-room, per-user, per-reservation, per-branch or per-property restrictions.",
  },
  {
    q: "Do you support multi-property hotels?",
    a: "Yes. Switch properties, set branch-level access, and roll up group reporting and payments from a single owner dashboard.",
  },
  {
    q: "Do you support 100+ channels?",
    a: "Yes. Connect 100+ OTA, direct and partner channels with real-time rate and inventory sync to prevent overbooking.",
  },
  {
    q: "Can InnCentral be self-hosted?",
    a: "Yes, on Enterprise. You can deploy in your own VPC, private cloud or controlled environment, with RBAC, audit logs and migration support.",
  },
  {
    q: "What's included in the free plan?",
    a: "The full platform — PMS and front desk, housekeeping, booking engine, channel manager, POS, payments, e-invoicing and API access — with 100+ ready integrations.",
  },
  {
    q: "Which payment gateways do you support?",
    a: "UAE, USA and global gateways, so you can collect deposits, full payments and refunds in your region, posted straight to guest bills.",
  },
  {
    q: "Does InnCentral include a POS?",
    a: "Yes. Run restaurant, spa, minibar and add-on POS with every charge posted directly to the guest folio, no separate system needed.",
  },
  {
    q: "Can I issue tax-ready e-invoices?",
    a: "Yes. InnCentral generates tax-ready e-invoices automatically, formatted for local requirements across the regions we support.",
  },
  {
    q: "Do you help migrate from my current system?",
    a: "Yes. Import your rooms, rates and channels to go live quickly, with dedicated migration support available on Enterprise.",
  },
  {
    q: "Is there an API for developers?",
    a: "Yes. InnCentral is API-first, with an open REST API, webhooks and access tokens, plus connectors for automation, accounting, CRM and ERP tools.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section className="py-16 sm:py-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Container>
        <div className="grid gap-10 lg:grid-cols-[380px_1fr]">
          <div>
            <Reveal>
              <h2 className="text-[clamp(1.9rem,3.6vw,2.75rem)] font-bold tracking-[-0.01em] text-ink">
                Frequently Asked Questions
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-4 max-w-sm text-[16px] leading-relaxed text-ink-muted">
                Discover the solutions to all your inquiries right here, where clarity and assistance await you!
              </p>
            </Reveal>
          </div>

          <div className="flex flex-col gap-3">
            {faqs.map((f, i) => {
              const isOpen = i === open;
              return (
                <div
                  key={f.q}
                  className={`rounded-2xl border border-line transition-colors ${isOpen ? "bg-bg-tint" : "bg-white"}`}
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  >
                    <span className="text-[16px] font-semibold text-ink">{f.q}</span>
                    <span className="relative grid size-7 shrink-0 place-items-center rounded-full border border-line bg-white">
                      <span className="absolute h-0.5 w-3 rounded bg-ink" />
                      <span className={`absolute h-3 w-0.5 rounded bg-ink transition-transform duration-200 ${isOpen ? "scale-0" : "scale-100"}`} />
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="px-5 pb-5 text-[15px] leading-relaxed text-ink-muted">{f.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}

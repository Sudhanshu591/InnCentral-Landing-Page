import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/motion/Reveal";

type Language = { name: string; native: string; rtl?: boolean };

const languages: Language[] = [
  { name: "English", native: "English" },
  { name: "Arabic", native: "العربية", rtl: true },
  { name: "Hebrew", native: "עברית", rtl: true },
  { name: "Spanish", native: "Español" },
  { name: "French", native: "Français" },
  { name: "German", native: "Deutsch" },
  { name: "Hindi", native: "हिन्दी" },
  { name: "Portuguese", native: "Português" },
  { name: "Chinese", native: "中文" },
  { name: "Japanese", native: "日本語" },
];

export function Multilingual() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <SectionHeading
          title="Run your hotel in your language"
          subtitle="InnCentral works in 10+ languages out of the box, with full right-to-left (RTL) support for Arabic and Hebrew — so your whole team is at home in the system."
        />

        <RevealGroup className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {languages.map((l) => (
            <RevealItem key={l.name}>
              <div className="flex h-full flex-col items-center justify-center gap-1 rounded-2xl border border-line bg-white px-4 py-6 text-center transition-transform duration-200 hover:-translate-y-1">
                <span
                  dir={l.rtl ? "rtl" : "ltr"}
                  className="text-[22px] font-bold text-ink"
                >
                  {l.native}
                </span>
                <span className="text-[13px] text-ink-muted">{l.name}</span>
                {l.rtl && (
                  <span className="mt-1 rounded-full bg-accent/10 px-2 py-0.5 text-[11px] font-semibold text-accent">
                    RTL
                  </span>
                )}
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}

import { RefreshCw, Globe, TrendingUp, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { Marquee } from "@/components/shadcn/marquee";
import { BrandLogo } from "@/components/ui/BrandLogo";

// Each channel shows a logo above its name. Drop the logo file at `logo`
// (keep the filename) — until then, the brand's initial is shown.
const channels: { name: string; logo: string }[] = [
  { name: "Booking.com", logo: "/assets/channels/booking.png" },
  { name: "Airbnb", logo: "/assets/channels/airbnb.png" },
  { name: "Expedia", logo: "/assets/channels/expedia.png" },
  { name: "Agoda", logo: "/assets/channels/agoda.png" },
  { name: "Hotels.com", logo: "/assets/channels/hotels.png" },
  { name: "TripAdvisor", logo: "/assets/channels/tripadvisor.png" },
  { name: "Google Hotels", logo: "/assets/channels/googlehotels.png" },
  { name: "MakeMyTrip", logo: "/assets/channels/makemytrip.png" },
];

const features = [
  { title: "Real-time OTA sync", copy: "Rates and inventory update across every channel the moment they change.", icon: <RefreshCw className="size-5" /> },
  { title: "100+ channels", copy: "Sell on the world's biggest OTAs, direct and partner channels from one screen.", icon: <Globe className="size-5" /> },
  { title: "Smart rate management", copy: "Set rules once and push consistent pricing everywhere you sell.", icon: <TrendingUp className="size-5" /> },
  { title: "No more overbooking", copy: "One shared availability pool means a room is never sold twice.", icon: <ShieldCheck className="size-5" /> },
];

export function Channels() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <SectionHeading
          title="Sell across 100+ channels, in perfect sync"
          subtitle="Connect every OTA, your own booking engine and partner channels — with real-time rate and inventory sync that keeps you from ever overselling a room."
        />

        <RevealGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <RevealItem key={f.title}>
              <div className="group relative h-full overflow-hidden rounded-[20px] border border-white/70 bg-white/55 p-6 shadow-[0_8px_30px_rgba(15,23,42,0.06)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-white hover:shadow-[0_14px_40px_rgba(15,23,42,0.10)]">
                {/* top sheen */}
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />
                {/* hover glow */}
                <div className="pointer-events-none absolute -inset-px rounded-[20px] bg-[radial-gradient(360px_circle_at_top,rgba(0,123,255,0.10),transparent_60%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative grid size-11 place-items-center rounded-xl bg-accent/10 text-accent transition-colors duration-300 group-hover:bg-accent/15">
                  {f.icon}
                </div>
                <h3 className="relative mt-4 text-[17px] font-bold text-ink">{f.title}</h3>
                <p className="relative mt-2 text-[14px] leading-relaxed text-ink-muted">{f.copy}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal className="mt-10">
          <div className="rounded-[24px] border border-line bg-bg-tint px-6 py-8 sm:px-10">
            <p className="text-center text-[13px] font-semibold uppercase tracking-wide text-ink-muted">
              Connected to the channels that matter
            </p>
            <div className="relative mt-6">
              <Marquee pauseOnHover className="[--duration:26s] [--gap:1rem]">
                {channels.map((c) => (
                  <div
                    key={c.name}
                    className="flex w-[130px] flex-col items-center gap-2.5 rounded-2xl border border-line bg-white px-4 py-4"
                  >
                    <BrandLogo src={c.logo} name={c.name} />
                    <span className="text-[14px] font-semibold text-ink">{c.name}</span>
                  </div>
                ))}
              </Marquee>
              {/* edge fades */}
              <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-bg-tint to-transparent" />
              <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-bg-tint to-transparent" />
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

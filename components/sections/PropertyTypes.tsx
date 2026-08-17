import { Building2, Sparkles, Palmtree, Network, KeyRound, Home } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { HotelImage } from "@/components/ui/HotelImage";
import { RevealGroup, RevealItem } from "@/components/motion/Reveal";

type PropertyType = {
  title: string;
  copy: string;
  icon: React.ReactNode;
  image: string;
  imageLabel: string;
};

// Each card leads with a hotel photo. Drop the matching file at the `image`
// path (keep the filename) and it replaces the placeholder box.
const types: PropertyType[] = [
  {
    title: "Independent Hotels",
    copy: "Run the front desk, housekeeping and distribution of a single property from one clean dashboard.",
    icon: <Building2 className="size-5" />,
    image: "/assets/property/independent-hotel.jpg",
    imageLabel: "Independent hotel",
  },
  {
    title: "Boutique Hotels",
    copy: "Deliver a personal guest experience with fast check-in, custom rates and direct-booking tools.",
    icon: <Sparkles className="size-5" />,
    image: "/assets/property/boutique-hotel.jpg",
    imageLabel: "Boutique hotel",
  },
  {
    title: "Resorts",
    copy: "Handle multiple room types, restaurants, spa and activity POS, and long stays with ease.",
    icon: <Palmtree className="size-5" />,
    image: "/assets/property/resort.jpg",
    imageLabel: "Resort / pool",
  },
  {
    title: "Hotel Groups",
    copy: "Manage every property from one place with branch-level access and group-wide reporting.",
    icon: <Network className="size-5" />,
    image: "/assets/property/hotel-group.jpg",
    imageLabel: "Hotel group / multiple properties",
  },
  {
    title: "Serviced Apartments",
    copy: "Support extended stays, flexible rates and self-service check-in for apartment inventory.",
    icon: <KeyRound className="size-5" />,
    image: "/assets/property/serviced-apartment.jpg",
    imageLabel: "Serviced apartment",
  },
  {
    title: "Guest Houses & Inns",
    copy: "A no-limits free plan that runs a small property end to end without per-room fees.",
    icon: <Home className="size-5" />,
    image: "/assets/property/guest-house.jpg",
    imageLabel: "Guest house / inn",
  },
];

export function PropertyTypes() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <SectionHeading
          title="Built for every type of hospitality business"
          subtitle="From a single guest house to a group of resorts, InnCentral adapts to how you run your property."
        />

        <RevealGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {types.map((t) => (
            <RevealItem key={t.title}>
              <div className="h-full overflow-hidden rounded-[20px] border border-line bg-white transition-transform duration-200 hover:-translate-y-1">
                <div className="relative">
                  <HotelImage
                    src={t.image}
                    alt={t.imageLabel}
                    label={t.imageLabel}
                    className="h-[180px] w-full"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute bottom-3 left-3 grid size-11 place-items-center rounded-xl bg-white/90 text-accent shadow-sm backdrop-blur">
                    {t.icon}
                  </div>
                </div>
                <div className="p-7">
                  <h3 className="text-[19px] font-bold text-ink">{t.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-ink-muted">{t.copy}</p>
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { Marquee } from "@/components/shadcn/marquee";

// Brand / partner logos shown in the marquee.
// Each logo sits on a white "chip" so full-color / dark logos read cleanly on
// the dark strip. To add your own:
//   1. Drop the file into  public/assets/brands/  (PNG/JPG/SVG all fine)
//   2. Add one line below with the file's real pixel width & height:
//        { name: "Your Brand", src: "/assets/brands/your-file.png", width: 400, height: 215 }
// `name` becomes the alt text (accessibility) and shows on hover.
// width/height only need to match the aspect ratio — they control how wide the
// logo renders inside its chip.
const logos = [
  { name: "IIM Nagpur", src: "/assets/brands/iim-nagpur.png", width: 400, height: 215 },
  { name: "Trivalo", src: "/assets/brands/trivalo.png", width: 400, height: 215 },
  { name: "Derick's Kitchen", src: "/assets/brands/dericks-kitchen.png", width: 400, height: 215 },
  { name: "ViaVia", src: "/assets/brands/viavia.png", width: 400, height: 215 },
];

export function Brand() {
  return (
    <section className="pb-10 pt-8 sm:pb-14 sm:pt-10">
      <Container>
        <Reveal>
          <p className="text-center text-[13px] font-medium uppercase tracking-[0.18em] text-ink-muted">
            Trusted by hospitality teams across 50+ countries
          </p>

          <div className="relative mt-8">
            <Marquee pauseOnHover className="[--duration:32s] [--gap:4rem]">
              {logos.map((l) => (
                <div
                  key={l.src}
                  className="flex h-24 w-[220px] items-center justify-center sm:h-28 sm:w-[260px]"
                >
                  <Image
                    src={l.src}
                    alt={l.name}
                    title={l.name}
                    width={l.width}
                    height={l.height}
                    unoptimized
                    className="max-h-16 w-auto object-contain opacity-90 transition duration-300 hover:opacity-100 sm:max-h-20"
                  />
                </div>
              ))}
            </Marquee>
            {/* edge fades */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-bg to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-bg to-transparent" />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

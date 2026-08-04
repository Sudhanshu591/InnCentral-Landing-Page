import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { Marquee } from "@/components/shadcn/marquee";

const logos = [
  "ybjczQ4x3vmYyLUF2CNWSGXWIz0.svg",
  "3frfvRDmKRJN3WC7LCCN9uc8.svg",
  "prOpb85QuALjY0edEMLO1xnJEw.svg",
  "UV5OJDzqptgAq6H4an3VxqWsY.svg",
  "zDLbOYgP0uwSf2gjaJEOyHQ4zjo.svg",
];

export function Brand() {
  return (
    <section className="py-14 sm:py-20">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-[28px] bg-dark px-6 py-10 sm:px-10 sm:py-12">
            <p className="text-center text-[18px] font-medium text-dark-ink">
              Trusted by hospitality teams across 50+ countries
            </p>

            <div className="relative mt-8">
              <Marquee pauseOnHover className="[--duration:28s] [--gap:4rem]">
                {logos.map((l) => (
                  <Image
                    key={l}
                    src={`/assets/${l}`}
                    alt=""
                    width={140}
                    height={32}
                    className="h-6 w-auto opacity-70 invert transition-opacity duration-200 hover:opacity-100 sm:h-7"
                  />
                ))}
              </Marquee>
              {/* edge fades */}
              <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-dark to-transparent" />
              <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-dark to-transparent" />
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

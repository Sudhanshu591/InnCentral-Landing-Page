import Link from "next/link";
import { site } from "@/lib/site";

/** InnCentral wordmark — Anton display face with an accent spark mark. */
export function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <Link href="/" className="inline-flex items-center gap-2" aria-label={`${site.name} home`}>
      <span
        aria-hidden="true"
        className="grid size-8 place-items-center rounded-[10px] bg-accent text-white"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M8 1.6l1.7 3.9 4.2.4-3.2 2.8 1 4.1L8 10.6 4.3 12.8l1-4.1L2.1 5.9l4.2-.4L8 1.6z" fill="currentColor" />
        </svg>
      </span>
      <span
        className={`text-[20px] uppercase leading-none tracking-[0.01em] ${dark ? "text-dark-ink" : "text-ink"}`}
        style={{ fontFamily: "var(--font-anton)" }}
      >
        {site.name}
      </span>
    </Link>
  );
}

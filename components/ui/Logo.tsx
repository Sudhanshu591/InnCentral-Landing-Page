import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/site";

/**
 * InnCentral logo — full lockup (monitor mark + wordmark) served as a static image.
 * Intrinsic asset is 500×100 (5:1); rendered at 40px tall, width auto-scales.
 */
export function Logo() {
  return (
    <Link href="/" className="inline-flex items-center" aria-label={`${site.name} home`}>
      <Image
        src="/assets/logo.png"
        alt={site.name}
        width={500}
        height={100}
        priority
        className="h-10 w-auto"
      />
    </Link>
  );
}

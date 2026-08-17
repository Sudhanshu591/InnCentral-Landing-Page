"use client";

import Image from "next/image";
import { useState } from "react";

type BrandLogoProps = {
  /** Path to the logo, e.g. "/assets/channels/booking.png". Drop the file here. */
  src: string;
  /** Brand name — used for alt text and the fallback monogram. */
  name: string;
  /** Rendered size in px (square). */
  size?: number;
};

/**
 * Shows a brand / integration logo. Until the file exists at `src`, it falls
 * back to a neutral tile with the brand's first letter — so the row never
 * looks broken while you collect the logos.
 */
export function BrandLogo({ src, name, size = 36 }: BrandLogoProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <span
        aria-hidden="true"
        className="grid shrink-0 place-items-center rounded-lg bg-bg-tint text-[16px] font-bold text-ink-muted"
        style={{ width: size, height: size }}
      >
        {name.charAt(0)}
      </span>
    );
  }

  return (
    <Image
      src={src}
      alt={`${name} logo`}
      width={size}
      height={size}
      unoptimized
      onError={() => setFailed(true)}
      className="shrink-0 rounded-lg object-contain"
      style={{ width: size, height: size }}
    />
  );
}

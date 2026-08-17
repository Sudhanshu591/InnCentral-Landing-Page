"use client";

import Image from "next/image";
import { useState } from "react";

type HotelImageProps = {
  /** Path to the image, e.g. "/assets/hotel/lobby.jpg". Drop the file at this path. */
  src: string;
  /** Accessible alt text — also used as the placeholder label if none is given. */
  alt: string;
  /** Short label shown inside the placeholder box (defaults to alt). */
  label?: string;
  /** Sizing / rounding classes for the outer box. Must set a height or aspect ratio. */
  className?: string;
  /** Extra classes for the <Image> itself (defaults to object-cover). */
  imgClassName?: string;
  priority?: boolean;
  sizes?: string;
};

/**
 * Renders a hotel photo. Until the file exists at `src`, a neutral labeled
 * placeholder box is shown telling you which image to drop in and where.
 *
 * The outer box must have a height — pass an aspect ratio (e.g. `aspect-[4/3]`)
 * or a fixed height (e.g. `h-[180px]`) via `className`.
 */
export function HotelImage({
  src,
  alt,
  label,
  className = "",
  imgClassName = "",
  priority = false,
  sizes = "(max-width: 768px) 100vw, 33vw",
}: HotelImageProps) {
  const [failed, setFailed] = useState(false);

  return (
    <div className={`relative overflow-hidden bg-bg-tint ${className}`}>
      {failed ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-1.5 border border-dashed border-line px-4 text-center">
          <span className="text-[13px] font-semibold text-ink">{label ?? alt}</span>
          <span className="text-[11px] leading-snug text-ink-muted">
            Add photo →{" "}
            <span className="font-mono text-[10px] text-ink-muted/80">{src}</span>
          </span>
        </div>
      ) : (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          unoptimized
          onError={() => setFailed(true)}
          className={`object-cover ${imgClassName}`}
        />
      )}
    </div>
  );
}

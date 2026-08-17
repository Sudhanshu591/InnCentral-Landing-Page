# Channel / OTA logos

Drop each brand's logo here using the **exact filename** below. As soon as a
file exists, the letter-tile fallback in the Channels section is replaced by the
real logo automatically — no code change needed.

| Brand         | Filename            |
| ------------- | ------------------- |
| Booking.com   | `booking.png`       |
| Airbnb        | `airbnb.png`        |
| Expedia       | `expedia.png`       |
| Agoda         | `agoda.png`         |
| Hotels.com    | `hotels.png`        |
| TripAdvisor   | `tripadvisor.png`   |
| Google Hotels | `google-hotels.png` |
| MakeMyTrip    | `makemytrip.png`    |

## Image specs

- **Format:** PNG (transparent background) or SVG. If you use SVG, also update
  the `logo` path in `components/sections/Channels.tsx` to end in `.svg`.
- **Size:** at least 72×72 px (rendered at 36 px, so 2× keeps it crisp).
- **Shape:** square-ish, logo centered with a little padding. The tile applies
  `object-contain` and rounds the corners, so full-bleed square art is fine.
- **Source:** use each brand's official press/brand-asset kit to stay within
  their trademark usage guidelines.

The paths are defined in `components/sections/Channels.tsx` (the `channels`
array) — filenames must match what's listed there.

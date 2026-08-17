# Hotel image slots

Drop your hotel photos at the paths below and they replace the placeholder
boxes automatically. Any web format works (`.jpg`, `.png`, `.webp`) — just keep
the exact filename shown. Until a file exists, a labeled dashed placeholder is
shown in its place.

## Why-choose carousel (`components/sections/WhyChoose.tsx`)

| Path | Suggested photo |
| --- | --- |
| `/assets/hotel/front-desk.jpg` | Hotel front desk / check-in |
| `/assets/hotel/lobby.jpg` | Hotel lobby |
| `/assets/hotel/exterior.jpg` | Hotel exterior / building |
| `/assets/hotel/guest-room.jpg` | Guest room |
| `/assets/hotel/reception-payment.jpg` | Guest paying at reception |
| `/assets/hotel/manager.jpg` | Manager reviewing reports |
| `/assets/hotel/staff.jpg` | Hotel staff / team |

**Recommended size:** ~800 × 600 px (4:3), landscape.

## Property types (`components/sections/PropertyTypes.tsx`)

| Path | Suggested photo |
| --- | --- |
| `/assets/property/independent-hotel.jpg` | Independent hotel |
| `/assets/property/boutique-hotel.jpg` | Boutique hotel |
| `/assets/property/resort.jpg` | Resort / pool |
| `/assets/property/hotel-group.jpg` | Group of properties |
| `/assets/property/serviced-apartment.jpg` | Serviced apartment |
| `/assets/property/guest-house.jpg` | Guest house / inn |

**Recommended size:** ~800 × 500 px, landscape.

## Testimonials (`components/sections/ReviewCarousel.tsx`)

One portrait/photo per client, shown on the left of each testimonial slide.

| Path | Client |
| --- | --- |
| `/assets/reviews/derick-john.png` | Derick John — Owner, Parkside Hotel |
| `/assets/reviews/priya-nair.jpg` | Priya Nair — Revenue Manager, The Coastal Retreat |
| `/assets/reviews/rahul-mehta.jpg` | Rahul Mehta — Director, Sunrise Hospitality Group |
| `/assets/reviews/sofia-alvarez.jpg` | Sofia Alvarez — General Manager, Casa Verde Boutique |

**Recommended size:** ~800 × 720 px (portrait-ish), the client or their property.

## Product screenshots (already wired, `components/sections/Automation.tsx`)

These expect app/dashboard screenshots (not hotel photos):
`/assets/tab-reservation.png`, `/assets/tab-housekeeping.png`,
`/assets/tab-channels.png`, `/assets/tab-booking-engine.png`,
`/assets/tab-payments.png`, `/assets/tab-reports.png` — ~1918 × 889 px.

## Hero (`components/sections/Hero.tsx`)

`/assets/hero-dashboard.png` — main hero image, ~1918 × 889 px.
`/assets/hero.jpg` — full-bleed background photo behind the hero text (under a white veil), ~1920 × 1080 px landscape.

## CTA background (`components/sections/CTA.tsx`)

`/assets/cta-bg.jpg` — faded rooftop/hotel photo behind the CTA, ~1800 × 900 px.

## Channel / integration logos (`components/sections/Channels.tsx`)

Shown above each channel name in the sliding row. Until a file exists the
brand's first letter is shown instead. Use square, transparent PNGs (~64 × 64 px).

| Path | Brand |
| --- | --- |
| `/assets/channels/booking.png` | Booking.com |
| `/assets/channels/airbnb.png` | Airbnb |
| `/assets/channels/expedia.png` | Expedia |
| `/assets/channels/agoda.png` | Agoda |
| `/assets/channels/hotels.png` | Hotels.com |
| `/assets/channels/tripadvisor.png` | TripAdvisor |
| `/assets/channels/google-hotels.png` | Google Hotels |
| `/assets/channels/makemytrip.png` | MakeMyTrip |

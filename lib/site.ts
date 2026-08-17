export const site = {
  name: "InnCentral",
  tagline: "Run Your Entire Hotel from One Free Platform",
  description:
    "InnCentral is an enterprise hotel operating platform — PMS, front desk, housekeeping, booking engine, 100+ channels, POS, payments and e-invoicing in one place. Free to start, with no limits on rooms, users, or properties.",
  // Canonical production URL — change to your real domain before deploying.
  url: "https://inncentral.sdlccorp.com",
  ogImage: "/assets/hero-dashboard.png",
  twitter: "@inncentral",
  keywords: [
    "hotel management software",
    "free hotel PMS",
    "property management system",
    "hotel operating platform",
    "channel manager",
    "hotel booking engine",
    "hotel POS",
    "e-invoicing",
    "housekeeping software",
    "multi-property hotel software",
    "OTA channel sync",
    "hotel front desk software",
  ],
  ctaPrimary: { label: "Start Free", href: "/pricing" },
  ctaSecondary: { label: "Book Enterprise Demo", href: "/book-a-demo" },
};

export type NavLink = { label: string; href: string };

export const primaryNav: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Features", href: "/feature" },
  { label: "Pricing", href: "/pricing" },
  { label: "Integrations", href: "/integration" },
  { label: "Case Studies", href: "/case-study" },
  { label: "Blog", href: "/blog" },
  { label: "Documentation", href: "https://docs.sdlccorp.com/" },
];

export const companyMenu: NavLink[] = [
  { label: "About", href: "/about" },
  { label: "Career", href: "/career" },
  { label: "Contact", href: "/contact" },
  { label: "Changelog", href: "/changelog" },
];

export const pagesMenu: NavLink[] = [
  { label: "Integrations", href: "/integration" },
  { label: "Case Study", href: "/case-study" },
  { label: "Blog", href: "/blog" },
  { label: "Book a Demo", href: "/book-a-demo" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
  { label: "Privacy Policy", href: "/privacy-policy" },
];

export const footerColumns: { title: string; links: NavLink[] }[] = [
  {
    title: "Platform",
    links: [
      { label: "PMS & Front Desk", href: "/feature" },
      { label: "Channel Manager", href: "/feature" },
      { label: "Booking Engine", href: "/feature" },
      { label: "Integrations", href: "/integration" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Case Study", href: "/case-study" },
      { label: "Book a Demo", href: "/book-a-demo" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Career", href: "/career" },
      { label: "Terms & Conditions", href: "/terms-and-conditions" },
      { label: "Privacy Policy", href: "/privacy-policy" },
    ],
  },
];

export const socials: { label: string; href: string }[] = [
  { label: "X", href: "https://x.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Instagram", href: "https://instagram.com" },
  { label: "YouTube", href: "https://youtube.com" },
];

import data from "./cms/export.json";

/** Rewrite Framer CDN image URLs inside formatted-text HTML to local assets. */
function localizeHtml(html: string): string {
  return html.replace(
    /https:\/\/framerusercontent\.com\/images\/([A-Za-z0-9]+)(?:_[^"')]*)?(\.(?:png|jpe?g|webp|gif|svg|avif))/g,
    "/assets/$1$2"
  );
}

const asset = (id: string | null | undefined) => (id ? `/assets/${id}` : null);

export type BlogPost = {
  slug: string;
  title: string;
  subtitle: string;
  date: string;
  image: string | null;
  content: string;
  featured: boolean;
};

export type CaseStudy = {
  slug: string;
  title: string;
  subtitle: string;
  logo: string | null;
  image: string | null;
  content: string;
};

export type Career = {
  slug: string;
  title: string;
  author: string;
  updateTime: string;
  jobTime: string;
  jobType: string;
  salary: string;
  content: string;
};

type Raw = Record<string, any>;
const raw = data as Record<string, Raw[]>;

export function getBlogPosts(): BlogPost[] {
  return (raw["Blog"] || [])
    .map((b) => ({
      slug: b.slug,
      title: b.Title,
      subtitle: b["Sub Title"] || "",
      date: b.Date,
      image: asset(b.Image),
      content: localizeHtml(b.Content || ""),
      featured: !!b["Featured Blog"],
    }))
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getBlogPost(slug: string): BlogPost | undefined {
  return getBlogPosts().find((p) => p.slug === slug);
}

export function getCaseStudies(): CaseStudy[] {
  return (raw["Case Study"] || []).map((c) => ({
    slug: c.slug,
    title: c.Title,
    subtitle: c["Sub Title"] || "",
    logo: asset(c.Logo),
    image: asset(c.Image),
    content: localizeHtml(c.Content || ""),
  }));
}

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return getCaseStudies().find((c) => c.slug === slug);
}

export function getCareers(): Career[] {
  return (raw["Career"] || []).map((c) => ({
    slug: c.slug,
    title: c.Title,
    author: c.Author || "",
    updateTime: c["Update Time"] || "",
    jobTime: c["Job Time"] || "",
    jobType: c["Job Type"] || "",
    salary: c.Selary || "",
    content: localizeHtml(c.Content || ""),
  }));
}

export function getCareer(slug: string): Career | undefined {
  return getCareers().find((c) => c.slug === slug);
}

export function formatDate(iso: string): string {
  if (!iso) return "";
  return new Date(iso).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
}

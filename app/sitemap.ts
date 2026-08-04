import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { getBlogPosts, getCareers, getCaseStudies } from "@/lib/cms";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url;
  const now = new Date();

  const staticRoutes: { path: string; priority: number }[] = [
    { path: "", priority: 1 },
    { path: "/feature", priority: 0.9 },
    { path: "/pricing", priority: 0.9 },
    { path: "/integration", priority: 0.8 },
    { path: "/about", priority: 0.6 },
    { path: "/case-study", priority: 0.7 },
    { path: "/blog", priority: 0.7 },
    { path: "/career", priority: 0.6 },
    { path: "/changelog", priority: 0.5 },
    { path: "/contact", priority: 0.6 },
    { path: "/book-a-demo", priority: 0.7 },
    { path: "/terms-and-conditions", priority: 0.3 },
    { path: "/privacy-policy", priority: 0.3 },
  ];

  const staticEntries = staticRoutes.map((r) => ({
    url: `${base}${r.path}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: r.priority,
  }));

  const blog = getBlogPosts().map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: p.date ? new Date(p.date) : now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const careers = getCareers().map((c) => ({
    url: `${base}/career/${c.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  const cases = getCaseStudies().map((c) => ({
    url: `${base}/case-study/${c.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticEntries, ...blog, ...careers, ...cases];
}

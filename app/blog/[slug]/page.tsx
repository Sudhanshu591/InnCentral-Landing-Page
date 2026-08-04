import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { CTA } from "@/components/sections/CTA";
import { Reveal } from "@/components/motion/Reveal";
import { getBlogPosts, getBlogPost, formatDate } from "@/lib/cms";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return getBlogPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return { title: "Blog" };
  const url = `/blog/${post.slug}`;
  return {
    title: post.title,
    description: post.subtitle || site.description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.subtitle,
      url,
      publishedTime: post.date,
      images: post.image ? [{ url: post.image }] : undefined,
    },
    twitter: { card: "summary_large_image", title: post.title, description: post.subtitle, images: post.image ? [post.image] : undefined },
  };
}

export default async function BlogDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.subtitle,
    datePublished: post.date,
    image: post.image ? `${site.url}${post.image}` : undefined,
    author: { "@type": "Organization", name: site.name, url: site.url },
    publisher: { "@type": "Organization", name: site.name, logo: { "@type": "ImageObject", url: `${site.url}/icon.svg` } },
    mainEntityOfPage: `${site.url}/blog/${post.slug}`,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <article className="pb-8 pt-14 sm:pt-20">
        <Container>
          <div className="mx-auto max-w-3xl">
            <Link href="/blog" className="text-[14px] font-medium text-ink-muted hover:text-ink">← All posts</Link>
            <Reveal>
              <p className="mt-6 text-[13px] font-medium text-accent">{formatDate(post.date)}</p>
              <h1 className="mt-3 text-[clamp(2rem,4.5vw,3.25rem)] font-bold tracking-[-0.02em]">{post.title}</h1>
              {post.subtitle && <p className="mt-4 text-[18px] leading-relaxed text-ink-muted">{post.subtitle}</p>}
            </Reveal>
          </div>

          {post.image && (
            <Reveal delay={0.1}>
              <div className="relative mx-auto mt-10 aspect-[16/9] max-w-4xl overflow-hidden rounded-[20px] border border-line">
                <Image src={post.image} alt="" fill priority className="object-cover" />
              </div>
            </Reveal>
          )}

          <div className="mx-auto mt-12 max-w-3xl">
            <div className="prose" dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
        </Container>
      </article>
      <CTA />
    </>
  );
}

import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { CTA } from "@/components/sections/CTA";
import { RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { BlogCard } from "@/components/sections/BlogCard";
import { getBlogPosts } from "@/lib/cms";

export const metadata = {
  title: "Blog",
  description: "Playbooks and guides on hotel operations, distribution and revenue from the InnCentral team.",
  alternates: { canonical: "/blog" },
};

export default function BlogIndex() {
  const posts = getBlogPosts();
  return (
    <>
      <PageHeader
        eyebrow="Blog"
        title="Notes on running better hotels"
        copy="Playbooks on operations, distribution and revenue — and the occasional strong opinion."
      />
      <section className="py-16 sm:py-20">
        <Container>
          <RevealGroup className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((p) => (
              <RevealItem key={p.slug} className="h-full">
                <BlogCard post={p} />
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>
      <CTA />
    </>
  );
}

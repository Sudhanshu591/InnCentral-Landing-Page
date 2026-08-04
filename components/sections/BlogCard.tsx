"use client";

import Link from "next/link";
import Image from "next/image";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import { formatDate, type BlogPost } from "@/lib/cms";

/** Blog card with an Aceternity 3D tilt on hover. */
export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <CardContainer className="h-full w-full" containerClassName="!py-0 h-full w-full">
      <CardBody className="h-full w-full">
        <Link
          href={`/blog/${post.slug}`}
          className="flex h-full flex-col overflow-hidden rounded-[20px] border border-line bg-white"
        >
          {post.image && (
            <CardItem translateZ={40} className="w-full">
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <Image src={post.image} alt="" fill className="object-cover" />
              </div>
            </CardItem>
          )}
          <div className="p-5">
            <CardItem as="p" translateZ={30} className="w-full text-[13px] font-medium text-accent">
              {formatDate(post.date)}
            </CardItem>
            <CardItem as="h3" translateZ={50} className="mt-2 w-full text-[18px] font-bold leading-snug text-ink">
              {post.title}
            </CardItem>
            <CardItem as="p" translateZ={20} className="mt-2 line-clamp-2 w-full text-[14px] leading-relaxed text-ink-muted">
              {post.subtitle}
            </CardItem>
          </div>
        </Link>
      </CardBody>
    </CardContainer>
  );
}

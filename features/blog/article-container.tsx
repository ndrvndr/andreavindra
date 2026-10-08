import { IconClockHour4 } from "@tabler/icons-react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { urlFor } from "@/sanity/lib/image"

import { ArticleContent } from "./components/article-content"
import { TableOfContents } from "./components/table-of-contents"
import { ViewCounter } from "./components/view-counter"
import { getPost } from "./lib/data"
import { formatPostDate } from "./lib/filters"
import { CtaSection } from "../home/sections"
import { Comments } from "@/components/ui/comment"

export async function ArticleContainer({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = await getPost(slug)
  if (!post) notFound()

  return (
    <article className="layout py-5 md:pt-48">
      {post.coverImage?.asset && (
        <Image
          unoptimized
          src={urlFor(post.coverImage).width(1440).height(864).url()}
          alt={post.coverImage.alt || ""}
          width={1440}
          height={864}
          sizes="(max-width: 768px) 100vw, 768px"
          loading="eager"
          className="mb-10 rounded-lg"
        />
      )}

      <header>
        <div className="mt-5 flex flex-wrap gap-2">
          {post.tags?.map(
            (tag) =>
              tag?.slug && (
                <Link
                  key={tag._id}
                  href={`/blog?tag=${encodeURIComponent(tag.slug)}`}
                >
                  <Badge variant="secondary">{tag.title}</Badge>
                </Link>
              )
          )}
        </div>

        <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
          {post.title}
        </h1>

        <p className="mt-1 text-muted-foreground">{post.description}</p>

        <div className="mt-12 flex items-center gap-3">
          <Avatar className="size-10">
            <AvatarImage
              src="https://res.cloudinary.com/dqqmzgesp/image/upload/v1790697774/profile-picture_ebqnwb.webp"
              alt="Andre Avindra"
              className="object-cover object-top"
            />
            <AvatarFallback>AA</AvatarFallback>
          </Avatar>

          <div>
            <p className="text-foreground">Andre Avindra</p>
            <time
              dateTime={post.publishedAt}
              className="mt-0.5 text-xs text-muted-foreground"
            >
              {formatPostDate(post.publishedAt)}
            </time>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-5 border-y py-4 text-xs text-muted-foreground">
          <ViewCounter key={slug} slug={slug} />

          <span className="flex items-center gap-2 text-foreground">
            <IconClockHour4
              aria-hidden="true"
              className="size-3.5 text-[rgb(179,255,171)]"
            />
            {post.minRead ?? 1} min read
          </span>
        </div>
      </header>

      <div className="mt-8 mb-12 flex flex-col-reverse gap-8 lg:grid lg:grid-cols-[minmax(0,1fr)_250px]">
        <ArticleContent content={post.content} />
        <TableOfContents content={post.content} />
      </div>

      <CtaSection />

      <section className="mt-12">
        <Comments term={`blog/${slug}`} />
      </section>
    </article>
  )
}

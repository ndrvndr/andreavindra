import { IconClockHour4, IconEye } from "@tabler/icons-react"
import Image from "next/image"
import Link from "next/link"

import { Badge } from "@/components/ui/badge"
import type { BlogPost } from "@/features/blog/lib/data"
import { formatPostDate } from "@/features/blog/lib/filters"
import { urlFor } from "@/sanity/lib/image"

export function ArticleCard({
  post,
  views = 0,
}: {
  post: BlogPost
  views?: number
}) {
  return (
    <article className="@container/blog-card relative">
      <div className="flex flex-col gap-4 @lg/blog-card:flex-row-reverse @lg/blog-card:items-center @lg/blog-card:gap-6">
        {post.coverImage?.asset && (
          <div className="overflow-hidden rounded-md @lg/blog-card:w-44 @lg/blog-card:shrink-0">
            <Image
              unoptimized
              src={urlFor(post.coverImage).width(720).height(432).url()}
              alt={post.coverImage.alt || ""}
              width={720}
              height={432}
              loading="eager"
              sizes="(min-width: 640px) 176px, 100vw"
              className="aspect-5/3 w-full object-cover"
            />
          </div>
        )}

        <div className="w-full">
          <time
            dateTime={post.publishedAt}
            className="text-sm text-muted-foreground"
          >
            {formatPostDate(post.publishedAt)}
          </time>

          <h2 className="mt-3 text-xl font-bold">
            <Link
              href={`/blog/${post.slug}`}
              className="after:absolute after:inset-0 after:rounded-md hover:underline focus-visible:outline-none focus-visible:after:outline-2 focus-visible:after:outline-offset-4 focus-visible:after:outline-ring"
            >
              {post.title}
            </Link>
          </h2>

          <p className="mt-1 text-sm text-muted-foreground">
            {post.description}
          </p>

          <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
            <div className="flex gap-5 text-xs">
              <span className="flex items-center gap-2">
                <IconClockHour4
                  aria-hidden="true"
                  className="size-3.5 text-[rgb(179,255,171)]"
                />
                {post.minRead ?? 1} min read
              </span>
              <span className="flex items-center gap-2">
                <IconEye
                  aria-hidden="true"
                  className="size-3.5 text-[rgb(179,255,171)]"
                />
                {views.toLocaleString("en")} views
              </span>
            </div>

            <div className="flex flex-wrap gap-2">
              {post.tags?.map(
                (tag) =>
                  tag?.slug && (
                    <Link
                      key={tag._id}
                      href={`/blog?tag=${encodeURIComponent(tag.slug)}`}
                      className="relative z-10"
                    >
                      <Badge variant="secondary">{tag.title}</Badge>
                    </Link>
                  )
              )}
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

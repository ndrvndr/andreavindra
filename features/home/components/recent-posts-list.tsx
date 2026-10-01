"use client"

import { ArticleCard } from "@/features/blog/components/article-card"
import { useViewCounts } from "@/features/blog/components/use-view-counts"
import type { BlogPost } from "@/features/blog/lib/data"

export function RecentPostsList({ posts }: { posts: BlogPost[] }) {
  const views = useViewCounts()

  return (
    <ul className="space-y-8">
      {posts.map((post) => (
        <li
          key={post._id}
          className="border-t border-border pt-8 first:border-t-0 first:pt-0"
        >
          <ArticleCard
            post={post}
            views={views === null ? null : (views[post.slug] ?? 0)}
          />
        </li>
      ))}
    </ul>
  )
}

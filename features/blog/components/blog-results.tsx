import { ArticleCard } from "./article-card"
import type { BlogPost } from "../lib/data"

export function BlogResults({
  posts,
  views,
}: {
  posts: BlogPost[]
  views: Record<string, number> | null
}) {
  return posts.length ? (
    <ul className="space-y-8">
      {posts.map((post) => (
        <li
          key={post._id}
          className="border-b border-border pb-8 last:border-b-0 last:pb-0"
        >
          <ArticleCard
            post={post}
            views={views === null ? null : (views[post.slug] ?? 0)}
          />
        </li>
      ))}
    </ul>
  ) : (
    <div className="grid place-items-center rounded-xl border border-dashed px-8 py-16 text-center">
      <h2 className="text-sm text-foreground">No Articles Found</h2>
      <p className="mt-2 text-sm text-muted-foreground">
        Try a different keyword or adjust your topic filter.d
      </p>
    </div>
  )
}

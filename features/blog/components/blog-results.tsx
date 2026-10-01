import { ArticleCard } from "./article-card"
import type { BlogPost } from "../lib/data"

export function BlogResults({
  posts,
  views = {},
}: {
  posts: BlogPost[]
  views?: Record<string, number>
}) {
  return posts.length ? (
    <ul className="space-y-8">
      {posts.map((post) => (
        <li
          key={post._id}
          className="border-b border-border pb-8 last:border-b-0 last:pb-0"
        >
          <ArticleCard post={post} views={views[post.slug] || 0} />
        </li>
      ))}
    </ul>
  ) : (
    <div className="grid place-items-center rounded-xl border border-dashed px-8 py-16 text-center">
      <h2 className="text-sm">Whoops! No articles found.</h2>
      <p className="mt-2 text-sm text-muted-foreground">Try a new keyword</p>
    </div>
  )
}

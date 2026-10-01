import type { BlogPost } from "./data"
import { TAG_MATCH_MODE, type BlogFilters } from "./filters"

export function filterPosts(
  posts: BlogPost[],
  { q, tags }: Pick<BlogFilters, "q" | "tags">
) {
  const query = q.trim().toLowerCase()
  return posts.filter((post) => {
    const matchesSearch =
      !query ||
      post.title.toLowerCase().includes(query) ||
      (post.description ?? "").toLowerCase().includes(query)
    const hasTag = (slug: string) =>
      post.tags?.some((tag) => tag?.slug === slug) ?? false
    const matchesTags =
      tags.length === 0 ||
      (TAG_MATCH_MODE === "all" ? tags.every(hasTag) : tags.some(hasTag))
    return matchesSearch && matchesTags
  })
}

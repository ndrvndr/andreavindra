import type { POST_QUERY_RESULT } from "@/sanity/types"

export type ArticleBody = NonNullable<POST_QUERY_RESULT>["content"]
export type ArticleHeading = { id: string; title: string; level: 2 | 3 | 4 }

// Sanity block keys keep anchors unique, even when headings share a title.
export function headingId(key: string | undefined) {
  return key ? `section-${encodeURIComponent(key)}` : undefined
}

export function getArticleHeadings(content: ArticleBody): ArticleHeading[] {
  return content.flatMap((block) => {
    if (block._type !== "block") return []
    const level =
      block.style === "h2"
        ? 2
        : block.style === "h3"
          ? 3
          : block.style === "h4"
            ? 4
            : null
    const id = headingId(block._key)
    const title = block.children
      ?.map((span) => span.text || "")
      .join("")
      .trim()
    return level && id && title ? [{ id, title, level }] : []
  })
}

import { DEFAULT_METADATA } from "@/constants/metadata"
import { getAllPosts } from "@/features/blog/lib/data"

function escapeXml(value: string): string {
  return value.replace(/[&<>"']/g, (character) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&apos;",
    }
    return entities[character]
  })
}

export async function GET() {
  const posts = await getAllPosts()
  const items = posts
    .filter((post) => post.slug)
    .map((post) => {
      const url = `${DEFAULT_METADATA.url}/blog/${encodeURIComponent(post.slug)}`

      return `
    <item>
      <title>${escapeXml(post.title ?? "")}</title>
      <link>${escapeXml(url)}</link>
      <guid isPermaLink="true">${escapeXml(url)}</guid>
      <pubDate>${new Date(post.publishedAt).toUTCString()}</pubDate>
      <description>${escapeXml(post.description ?? "")}</description>
    </item>`
    })
    .join("")

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${escapeXml(`${DEFAULT_METADATA.creator} Blog`)}</title>
    <link>${escapeXml(`${DEFAULT_METADATA.url}/blog`)}</link>
    <description>${escapeXml(DEFAULT_METADATA.description)}</description>
    <language>en</language>${items}
  </channel>
</rss>`

  return new Response(xml, {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  })
}

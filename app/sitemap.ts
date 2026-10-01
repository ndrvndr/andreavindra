import type { MetadataRoute } from "next"

import { DEFAULT_METADATA } from "@/constants/metadata"
import { getAllPosts } from "@/features/blog/lib/data"

const pages = [
  "",
  "/about",
  "/projects",
  "/blog",
  "/gallery",
  "/guestbook",
  "/bucket-list",
  "/contact",
]

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getAllPosts()

  return [
    ...pages.map((path) => ({ url: `${DEFAULT_METADATA.url}${path}` })),
    ...posts.flatMap((post) =>
      post.slug
        ? [{ url: `${DEFAULT_METADATA.url}/blog/${encodeURIComponent(post.slug)}` }]
        : []
    ),
  ]
}

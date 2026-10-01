import { isSanityConfigured } from "@/sanity/env"
import { client } from "@/sanity/lib/client"
import {
  ALL_POSTS_QUERY,
  POSTS_QUERY,
  POST_QUERY,
  SLUGS_QUERY,
  TAGS_QUERY,
} from "@/sanity/lib/queries"
import type {
  POSTS_QUERY_RESULT,
  POST_QUERY_RESULT,
  SLUGS_QUERY_RESULT,
  TAGS_QUERY_RESULT,
} from "@/sanity/types"
import { cache } from "react"

import {
  PAGE_SIZE,
  TAG_MATCH_MODE,
  searchPattern,
  type BlogFilters,
} from "./filters"

export const CONTENT_TAGS = ["post", "tag", "category"]
const options = { next: { tags: CONTENT_TAGS, revalidate: false as const } }
export type BlogPost = POSTS_QUERY_RESULT["posts"][number]

export async function getAllPosts(): Promise<BlogPost[]> {
  if (!isSanityConfigured) return []
  return client.fetch<BlogPost[]>(ALL_POSTS_QUERY, {}, options)
}

export async function getPosts(
  filters: BlogFilters,
  limit = PAGE_SIZE
): Promise<POSTS_QUERY_RESULT> {
  if (!isSanityConfigured) return { posts: [], total: 0 }
  return client.fetch<POSTS_QUERY_RESULT>(
    POSTS_QUERY,
    {
      q: filters.q,
      pattern: searchPattern(filters.q),
      tags: filters.tags,
      tagMode: TAG_MATCH_MODE,
      start: (filters.page - 1) * limit,
      end: filters.page * limit,
    },
    options
  )
}
export async function getTags(): Promise<TAGS_QUERY_RESULT> {
  if (!isSanityConfigured) return []
  return client.fetch<TAGS_QUERY_RESULT>(TAGS_QUERY, {}, options)
}
export const getPost = cache(
  async (slug: string): Promise<POST_QUERY_RESULT> => {
    if (!isSanityConfigured) return null
    return client.fetch<POST_QUERY_RESULT>(POST_QUERY, { slug }, options)
  }
)
export async function getPostSlugs(): Promise<SLUGS_QUERY_RESULT> {
  if (!isSanityConfigured) return []
  // Build-time route discovery must include newly published articles, even
  // when a previous build cached an empty slug list.
  return client.fetch<SLUGS_QUERY_RESULT>(SLUGS_QUERY, {}, { cache: "no-store" })
}

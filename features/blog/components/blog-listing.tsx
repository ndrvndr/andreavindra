"use client"

import type { TAGS_QUERY_RESULT } from "@/sanity/types"
import { useSearchParams } from "next/navigation"
import { Suspense, useEffect, useMemo, useState } from "react"

import type { BlogPost } from "../lib/data"
import { filterPosts } from "../lib/filter-posts"
import { blogHref, parseFilters, type BlogFilters } from "../lib/filters"
import { BlogControls } from "./blog-controls"
import { BlogResults } from "./blog-results"
import { useViewCounts } from "./use-view-counts"

export type BlogListingData = {
  posts: BlogPost[]
  tags: TAGS_QUERY_RESULT
}

// Prerender all articles; observe shared URLs and back/forward separately.
function UrlObserver({ onChange }: { onChange: (query: string) => void }) {
  const params = useSearchParams()
  const query = params.toString()
  useEffect(() => {
    onChange(query)
  }, [query, onChange])
  return null
}

export function BlogListing({ initial }: { initial: BlogListingData }) {
  const [query, setQuery] = useState("")
  const views = useViewCounts()

  const filters = useMemo(() => {
    const params = new URLSearchParams(query)
    return parseFilters({
      q: params.get("q") || undefined,
      tag: params.getAll("tag"),
    })
  }, [query])
  const posts = useMemo(
    () => filterPosts(initial.posts, filters),
    [initial.posts, filters]
  )

  function updateFilters(next: BlogFilters, replace = false) {
    const href = blogHref({ ...next, page: 1 })
    setQuery(href.split("?")[1] ?? "")
    if (replace) window.history.replaceState(null, "", href)
    else window.history.pushState(null, "", href)
  }

  return (
    <>
      <Suspense fallback={null}>
        <UrlObserver onChange={setQuery} />
      </Suspense>

      <BlogControls
        filters={filters}
        tags={initial.tags}
        onFiltersChange={updateFilters}
      >
        <BlogResults posts={posts} views={views} />
      </BlogControls>
    </>
  )
}

import { NextRequest, NextResponse } from "next/server"

import { getPosts, getTags } from "@/features/blog/lib/data"
import { parseFilters } from "@/features/blog/lib/filters"
import { getViewCounts } from "@/features/blog/lib/views"

export async function GET(request: NextRequest) {
  const params = request.nextUrl.searchParams
  const filters = parseFilters({
    q: params.get("q") || undefined,
    tag: params.getAll("tag"),
    page: params.get("page") || undefined,
  })
  try {
    const [result, tags] = await Promise.all([getPosts(filters), getTags()])
    const views = await getViewCounts(result.posts.map((post) => post.slug))
    return NextResponse.json(
      { ...result, tags, views },
      { headers: { "Cache-Control": "no-store" } }
    )
  } catch {
    return NextResponse.json(
      { error: "Unable to load articles. Please try again." },
      { status: 503, headers: { "Cache-Control": "no-store" } }
    )
  }
}

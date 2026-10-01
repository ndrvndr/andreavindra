import { NextResponse } from "next/server"

import { getAllPosts } from "@/features/blog/lib/data"
import { readViewCounts } from "@/features/blog/lib/views"

export async function GET() {
  try {
    const posts = await getAllPosts()
    const views = await readViewCounts(posts.map((post) => post.slug))

    return NextResponse.json(
      { views },
      { headers: { "Cache-Control": "no-store" } }
    )
  } catch {
    return NextResponse.json(
      { error: "Unable to load views." },
      { status: 503, headers: { "Cache-Control": "no-store" } }
    )
  }
}
